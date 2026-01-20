#!/usr/bin/env node

/**
 * generate-talking-points.js
 *
 * Generates structured talking points from Hindi narration for natural delivery.
 * Organized by narrative beat, not shot-by-shot.
 *
 * Usage:
 *   node scripts/generate-talking-points.js              # Generate for all topics
 *   node scripts/generate-talking-points.js --topic 50   # Single topic
 *   node scripts/generate-talking-points.js --save       # Save to data.json
 */

const fs = require('fs');
const path = require('path');

const DATA_PATH = path.join(__dirname, '..', 'public', 'data.json');

// Section order for narrative structure
const SECTION_ORDER = ['HOOK', 'CONTEXT', 'BUILD', 'CLIMAX', 'REVEAL', 'EXTENSION', 'HOOK_OUT'];

// Patterns for extracting key elements
const PATTERNS = {
  // Numbers with context
  numbers: /\b(\d{1,3}(?:,\d{3})*(?:\.\d+)?)\s*(million|billion|trillion|thousand|hundred|crore|lakh|arab|saal|years?|months?|days?|hours?|minutes?|seconds?|km|meters?|feet|%|percent|degrees?|°|times?)?\b/gi,

  // Years
  years: /\b(1[0-9]{3}|20[0-2][0-9])\b|\b\d{1,4}\s*(BC|BCE|AD|CE|B\.C\.|A\.D\.)\b/gi,

  // Scientific notation
  scientific: /\b\d+(?:\.\d+)?\s*×\s*10\^?\d+\b/gi,

  // Names (capitalized words in English narration)
  names: /\b[A-Z][a-z]+(?:\s+[A-Z][a-z]+)+\b/g,

  // Hindi transliterated names (common patterns)
  hindiNames: /\b[A-Z][a-z]+(?:ji|bhai|didi)?\b/g,

  // Technical terms (often kept in English within Hindi)
  technicalTerms: /\b(mechanism|computer|algorithm|quantum|atomic|nuclear|electron|proton|neutron|gravity|velocity|acceleration|frequency|wavelength|radiation|magnetic|electric|satellite|telescope|microscope|bacteria|virus|DNA|RNA|protein|enzyme|neuron|synapse|hormone|molecule|atom|element|compound|reaction|fusion|fission|orbit|eclipse|supernova|galaxy|universe|dimension|theory|paradox|equation|formula|calculation|experiment|hypothesis|discovery|invention|patent|Nobel|NASA|ISRO|SpaceX)\b/gi,
};

// Common words to exclude from names
const EXCLUDED_NAMES = new Set([
  'The', 'A', 'An', 'In', 'On', 'At', 'To', 'For', 'And', 'But', 'Or',
  'This', 'That', 'These', 'Those', 'It', 'Is', 'Are', 'Was', 'Were',
  'IMAGE', 'VIDEO', 'TEXT', 'HOOK', 'CONTEXT', 'BUILD', 'CLIMAX', 'REVEAL',
  'The Roman', 'The Great', 'The Big', 'The First', 'The Last', 'The Most',
  'When Russia', 'But Protestant', 'Now Here', 'And Then', 'Years Later',
  'Think About', 'What Happened', 'How Did', 'Why Did', 'All These'
]);

/**
 * Extract unique items using a pattern
 */
function extractUnique(text, pattern) {
  const matches = text.match(pattern) || [];
  return [...new Set(matches.filter(m => !EXCLUDED_NAMES.has(m)))];
}

/**
 * Group shots by section
 */
function groupBySection(shots) {
  const groups = {};
  shots.forEach(shot => {
    const section = shot.section || 'OTHER';
    if (!groups[section]) {
      groups[section] = [];
    }
    groups[section].push(shot);
  });
  return groups;
}

/**
 * Get combined text for a section
 */
function getSectionText(shots, language = 'hindi') {
  return shots
    .map(s => language === 'hindi' ? s.narration_hindi : s.narration)
    .filter(Boolean)
    .join(' ');
}

/**
 * Generate beat summary for a section
 */
function generateBeatSummary(section, shots) {
  const hindiText = getSectionText(shots, 'hindi');
  const englishText = getSectionText(shots, 'english');

  // Extract key elements
  const numbers = extractUnique(hindiText + ' ' + englishText, PATTERNS.numbers);
  const years = extractUnique(hindiText + ' ' + englishText, PATTERNS.years);
  const names = extractUnique(englishText, PATTERNS.names);
  const technical = extractUnique(hindiText + ' ' + englishText, PATTERNS.technicalTerms);

  // Calculate duration
  const duration = shots.reduce((sum, s) => sum + (s.duration || 0), 0);

  return {
    section,
    shot_count: shots.length,
    duration_sec: Math.round(duration * 10) / 10,
    key_numbers: [...new Set([...numbers, ...years])].slice(0, 5),
    key_names: names.slice(0, 3),
    technical_terms: [...new Set(technical)].slice(0, 5),
    hindi_narration: hindiText.substring(0, 500) + (hindiText.length > 500 ? '...' : ''),
    english_reference: englishText.substring(0, 500) + (englishText.length > 500 ? '...' : '')
  };
}

/**
 * Extract the most impactful sentence from text (one with numbers or key terms)
 */
function extractKeySentence(text, fallback = '') {
  if (!text) return fallback;

  // Split into sentences
  const sentences = text.split(/[।.!?]+/).map(s => s.trim()).filter(s => s.length > 10);
  if (sentences.length === 0) return text.substring(0, 100);

  // Prefer sentences with numbers
  const withNumbers = sentences.filter(s => /\d/.test(s));
  if (withNumbers.length > 0) {
    return withNumbers[0];
  }

  // Otherwise return first sentence that's a good length
  return sentences.find(s => s.length > 20 && s.length < 150) || sentences[0];
}

/**
 * Generate talking points for a topic
 */
function generateTalkingPoints(topic) {
  const shots = topic.shots || [];
  const grouped = groupBySection(shots);

  // Generate beat-by-beat structure
  const beats = [];
  SECTION_ORDER.forEach(section => {
    if (grouped[section] && grouped[section].length > 0) {
      beats.push(generateBeatSummary(section, grouped[section]));
    }
  });

  // Handle any sections not in standard order
  Object.keys(grouped).forEach(section => {
    if (!SECTION_ORDER.includes(section)) {
      beats.push(generateBeatSummary(section, grouped[section]));
    }
  });

  // Extract topic-wide elements
  const fullHindi = shots.map(s => s.narration_hindi).filter(Boolean).join(' ');
  const fullEnglish = shots.map(s => s.narration).filter(Boolean).join(' ');

  const allNumbers = extractUnique(fullHindi + ' ' + fullEnglish, PATTERNS.numbers);
  const allYears = extractUnique(fullHindi + ' ' + fullEnglish, PATTERNS.years);
  const allNames = extractUnique(fullEnglish, PATTERNS.names);
  const allTechnical = extractUnique(fullHindi + ' ' + fullEnglish, PATTERNS.technicalTerms);

  // Extract talking points from each section that exists
  const talkingPoints = [];
  const sectionConfig = [
    { key: 'HOOK', emoji: '🎣', label: 'HOOK' },
    { key: 'CONTEXT', emoji: '📖', label: 'CONTEXT' },
    { key: 'BUILD', emoji: '📈', label: 'BUILD' },
    { key: 'CLIMAX', emoji: '⚡', label: 'CLIMAX' },
    { key: 'REVEAL', emoji: '💡', label: 'REVEAL' },
    { key: 'EXTENSION', emoji: '➕', label: 'EXTENSION' },
    { key: 'HOOK_OUT', emoji: '🔗', label: 'HOOK OUT' }
  ];

  sectionConfig.forEach(({ key, emoji, label }) => {
    if (grouped[key] && grouped[key].length > 0) {
      const sectionText = getSectionText(grouped[key], 'hindi');
      const keySentence = extractKeySentence(sectionText);
      if (keySentence && keySentence.length > 10) {
        talkingPoints.push(`${emoji} ${label}: ${keySentence}`);
      }
    }
  });

  // Fallback if no sections found
  if (talkingPoints.length === 0) {
    const fullHindiText = shots.map(s => s.narration_hindi).filter(Boolean).join(' ');
    talkingPoints.push(`🎯 MAIN: ${extractKeySentence(fullHindiText) || topic.hook || 'No talking points extracted'}`);
  }

  return {
    topic_id: topic.topic_id,
    title: topic.title,
    title_hindi: topic.title_hindi || '',
    category: topic.category,
    duration_sec: topic.duration_sec,

    // Talking points - one per beat that exists
    talking_points: talkingPoints,

    // Extracted data for reference
    key_data: {
      numbers: [...new Set([...allNumbers, ...allYears])].slice(0, 10),
      names: allNames.slice(0, 10),
      technical_terms: [...new Set(allTechnical)].slice(0, 10)
    },

    // Beat-by-beat breakdown
    beats
  };
}

/**
 * Generate simplified talking points card
 */
function generateSimpleCard(topic) {
  const tp = generateTalkingPoints(topic);

  let card = `\n${'═'.repeat(60)}\n`;
  card += `#${topic.topic_id} ${topic.title}\n`;
  card += `Category: ${topic.category} | Duration: ${topic.duration_sec}s\n`;
  card += `${'─'.repeat(60)}\n\n`;

  // Key numbers to remember
  if (tp.key_data.numbers.length > 0) {
    card += `📊 NUMBERS: ${tp.key_data.numbers.join(', ')}\n`;
  }

  // Names to mention
  if (tp.key_data.names.length > 0) {
    card += `👤 NAMES: ${tp.key_data.names.join(', ')}\n`;
  }

  // Technical terms
  if (tp.key_data.technical_terms.length > 0) {
    card += `🔬 TERMS: ${tp.key_data.technical_terms.join(', ')}\n`;
  }

  card += `\n`;

  // Beat-by-beat
  tp.beats.forEach(beat => {
    const emoji = {
      'HOOK': '🎣',
      'CONTEXT': '📖',
      'BUILD': '📈',
      'CLIMAX': '⚡',
      'REVEAL': '💡',
      'EXTENSION': '➕',
      'HOOK_OUT': '🔗'
    }[beat.section] || '•';

    card += `${emoji} ${beat.section} (${beat.duration_sec}s)\n`;
    card += `   ${beat.hindi_narration.substring(0, 100)}...\n`;

    if (beat.key_numbers.length > 0) {
      card += `   Numbers: ${beat.key_numbers.join(', ')}\n`;
    }
    card += `\n`;
  });

  return card;
}

/**
 * Main
 */
function main() {
  const args = process.argv.slice(2);
  const topicIdx = args.indexOf('--topic');
  const specificTopic = topicIdx !== -1 ? parseInt(args[topicIdx + 1]) : null;
  const shouldSave = args.includes('--save');
  const outputJson = args.includes('--json');

  const data = JSON.parse(fs.readFileSync(DATA_PATH, 'utf8'));

  let topics = data;
  if (specificTopic) {
    topics = data.filter(t => t.topic_id === specificTopic);
    if (topics.length === 0) {
      console.error(`❌ Topic ${specificTopic} not found`);
      process.exit(1);
    }
  }

  console.log(`\n🎯 Generating talking points for ${topics.length} topic(s)...\n`);

  const results = topics.map(generateTalkingPoints);

  if (outputJson) {
    // Output as JSON
    const outputPath = path.join(__dirname, '..', 'public', 'talking-points.json');
    fs.writeFileSync(outputPath, JSON.stringify(results, null, 2));
    console.log(`✅ Saved to: ${outputPath}`);
  } else if (specificTopic) {
    // Print detailed card for single topic
    const card = generateSimpleCard(topics[0]);
    console.log(card);

    // Also show the full talking points structure
    console.log('\n📋 Full Structure (for data.json):');
    console.log(JSON.stringify(results[0].talking_points, null, 2));
  } else {
    // Print summary for all topics
    console.log(`${'═'.repeat(60)}`);
    console.log(`TALKING POINTS SUMMARY`);
    console.log(`${'═'.repeat(60)}\n`);

    // Stats
    const avgNumbers = Math.round(results.reduce((sum, r) => sum + r.key_data.numbers.length, 0) / results.length);
    const avgNames = Math.round(results.reduce((sum, r) => sum + r.key_data.names.length, 0) / results.length);
    const avgTerms = Math.round(results.reduce((sum, r) => sum + r.key_data.technical_terms.length, 0) / results.length);

    console.log(`   Average per topic:`);
    console.log(`   • Numbers to remember: ${avgNumbers}`);
    console.log(`   • Names to mention: ${avgNames}`);
    console.log(`   • Technical terms: ${avgTerms}`);

    // Sample topics
    console.log(`\n📋 Sample cards (first 3):\n`);
    results.slice(0, 3).forEach(tp => {
      const topic = data.find(t => t.topic_id === tp.topic_id);
      console.log(generateSimpleCard(topic));
    });

    console.log(`\n💡 Run with --topic N to see detailed card for a specific topic`);
    console.log(`   Run with --json to export all talking points`);
  }

  if (shouldSave) {
    // Update data.json with talking_points field
    results.forEach(tp => {
      const topic = data.find(t => t.topic_id === tp.topic_id);
      if (topic) {
        topic.talking_points = tp.talking_points;
        topic.key_data = tp.key_data;
      }
    });

    fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2));
    console.log(`\n✅ Saved talking_points to data.json for ${results.length} topics`);
  }
}

main();
