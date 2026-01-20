#!/usr/bin/env node

/**
 * translate-hindi.js
 *
 * Workflow for translating Hindi narration to aligned English subtitles.
 * Hindi is primary - English is generated to match.
 *
 * Usage:
 *   node scripts/translate-hindi.js export                    # Export misaligned shots for translation
 *   node scripts/translate-hindi.js export --topic 50         # Export single topic
 *   node scripts/translate-hindi.js import translations.json  # Import translations back
 *   node scripts/translate-hindi.js status                    # Show translation progress
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const DATA_PATH = path.join(__dirname, '..', 'public', 'data.json');
const EXPORT_PATH = path.join(__dirname, '..', 'translations-needed.json');
const BACKUP_PATH = path.join(__dirname, '..', 'data', 'data-backup.json');

/**
 * Analyze if a shot needs translation
 * Returns true if Hindi exists but English doesn't match well
 */
function needsTranslation(shot) {
  const hindi = shot.narration_hindi || '';
  const english = shot.narration || '';

  // Must have Hindi
  if (!hindi.trim()) return false;

  // If no English, definitely needs translation
  if (!english.trim()) return true;

  // Extract numbers from both
  const hindiNumbers = (hindi.match(/\d+/g) || []).map(Number);
  const englishNumbers = (english.match(/\d+/g) || []).map(Number);

  // If numbers don't match, needs retranslation
  const numberMatch = hindiNumbers.every(n => englishNumbers.includes(n)) &&
                      englishNumbers.every(n => hindiNumbers.includes(n));

  if (!numberMatch && hindiNumbers.length > 0) return true;

  // Check length ratio - very different lengths suggest different content
  const ratio = Math.min(english.length, hindi.length) / Math.max(english.length, hindi.length);
  if (ratio < 0.3) return true;

  return false;
}

/**
 * Export shots needing translation
 */
function exportForTranslation(data, specificTopic = null) {
  const exports = [];

  const topics = specificTopic
    ? data.filter(t => t.topic_id === specificTopic)
    : data;

  if (specificTopic && topics.length === 0) {
    console.error(`❌ Topic ${specificTopic} not found`);
    process.exit(1);
  }

  topics.forEach(topic => {
    const shots = topic.shots || [];
    shots.forEach((shot, idx) => {
      if (needsTranslation(shot)) {
        exports.push({
          topic_id: topic.topic_id,
          topic_title: topic.title,
          shot_id: shot.shot_id || `S${String(idx + 1).padStart(2, '0')}`,
          section: shot.section,
          hindi: shot.narration_hindi,
          current_english: shot.narration || '',
          new_english: '' // To be filled
        });
      }
    });
  });

  // Group by topic for easier review
  const grouped = {};
  exports.forEach(e => {
    if (!grouped[e.topic_id]) {
      grouped[e.topic_id] = {
        topic_id: e.topic_id,
        topic_title: e.topic_title,
        shots: []
      };
    }
    grouped[e.topic_id].shots.push({
      shot_id: e.shot_id,
      section: e.section,
      hindi: e.hindi,
      current_english: e.current_english,
      new_english: e.new_english
    });
  });

  const exportData = {
    generated_at: new Date().toISOString(),
    instructions: [
      "Fill in 'new_english' for each shot to match the Hindi narration.",
      "Hindi is Romanized - read it phonetically.",
      "Keep translations concise - these are for 90-second videos.",
      "Preserve all numbers, names, and technical terms.",
      "Run 'node scripts/translate-hindi.js import translations.json' when done."
    ],
    total_shots: exports.length,
    topics: Object.values(grouped)
  };

  fs.writeFileSync(EXPORT_PATH, JSON.stringify(exportData, null, 2));

  console.log(`\n📤 EXPORT COMPLETE`);
  console.log(`═`.repeat(50));
  console.log(`   Shots needing translation: ${exports.length}`);
  console.log(`   Topics affected: ${Object.keys(grouped).length}`);
  console.log(`\n   Saved to: ${EXPORT_PATH}`);
  console.log(`\n💡 Next steps:`);
  console.log(`   1. Open ${path.basename(EXPORT_PATH)}`);
  console.log(`   2. Fill in 'new_english' for each shot`);
  console.log(`   3. Run: node scripts/translate-hindi.js import ${path.basename(EXPORT_PATH)}`);

  // Also export a simpler format for batch processing
  const simpleExport = exports.map(e => ({
    id: `${e.topic_id}-${e.shot_id}`,
    hindi: e.hindi
  }));

  const simplePath = path.join(__dirname, '..', 'translations-simple.json');
  fs.writeFileSync(simplePath, JSON.stringify(simpleExport, null, 2));
  console.log(`\n   Also saved simple format to: ${path.basename(simplePath)}`);
}

/**
 * Import translations back into data.json
 */
function importTranslations(importPath) {
  if (!fs.existsSync(importPath)) {
    console.error(`❌ File not found: ${importPath}`);
    process.exit(1);
  }

  const importData = JSON.parse(fs.readFileSync(importPath, 'utf8'));
  const data = JSON.parse(fs.readFileSync(DATA_PATH, 'utf8'));

  // Backup current data
  fs.writeFileSync(BACKUP_PATH, JSON.stringify(data, null, 2));
  console.log(`\n💾 Backup saved to: ${BACKUP_PATH}`);

  let updated = 0;
  let skipped = 0;

  // Process each topic
  (importData.topics || []).forEach(topicData => {
    const topic = data.find(t => t.topic_id === topicData.topic_id);
    if (!topic) {
      console.warn(`⚠️  Topic ${topicData.topic_id} not found in data.json`);
      return;
    }

    (topicData.shots || []).forEach(shotData => {
      if (!shotData.new_english || !shotData.new_english.trim()) {
        skipped++;
        return;
      }

      const shot = topic.shots.find(s => s.shot_id === shotData.shot_id);
      if (shot) {
        shot.narration = shotData.new_english.trim();
        updated++;
      }
    });
  });

  // Save updated data
  fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2));

  console.log(`\n📥 IMPORT COMPLETE`);
  console.log(`═`.repeat(50));
  console.log(`   Updated: ${updated} shots`);
  console.log(`   Skipped: ${skipped} (no new_english provided)`);
  console.log(`\n   data.json has been updated.`);
}

/**
 * Show translation status
 */
function showStatus(data) {
  let totalShots = 0;
  let needsWork = 0;
  let aligned = 0;

  const byTopic = [];

  data.forEach(topic => {
    const shots = topic.shots || [];
    let topicNeeds = 0;
    let topicAligned = 0;

    shots.forEach(shot => {
      totalShots++;
      if (needsTranslation(shot)) {
        needsWork++;
        topicNeeds++;
      } else if (shot.narration_hindi) {
        aligned++;
        topicAligned++;
      }
    });

    if (topicNeeds > 0) {
      byTopic.push({
        topic_id: topic.topic_id,
        title: topic.title,
        needs: topicNeeds,
        total: shots.length,
        pct: Math.round((topicNeeds / shots.length) * 100)
      });
    }
  });

  byTopic.sort((a, b) => b.pct - a.pct);

  console.log(`\n📊 TRANSLATION STATUS`);
  console.log(`═`.repeat(50));
  console.log(`   Total shots: ${totalShots}`);
  console.log(`   ✅ Aligned: ${aligned} (${Math.round(aligned/totalShots*100)}%)`);
  console.log(`   ❌ Needs work: ${needsWork} (${Math.round(needsWork/totalShots*100)}%)`);

  if (byTopic.length > 0) {
    console.log(`\n🚨 Topics needing work (${byTopic.length}):`);
    byTopic.slice(0, 15).forEach((t, i) => {
      console.log(`   ${i + 1}. #${t.topic_id} ${t.title.substring(0, 35)} - ${t.needs}/${t.total} shots (${t.pct}%)`);
    });
    if (byTopic.length > 15) {
      console.log(`   ... and ${byTopic.length - 15} more`);
    }
  }
}

/**
 * Generate a markdown file for batch translation with Claude
 */
function exportForClaude(data, specificTopic = null) {
  const exports = [];

  const topics = specificTopic
    ? data.filter(t => t.topic_id === specificTopic)
    : data;

  topics.forEach(topic => {
    const shots = topic.shots || [];
    shots.forEach((shot, idx) => {
      if (needsTranslation(shot)) {
        exports.push({
          topic_id: topic.topic_id,
          topic_title: topic.title,
          shot_id: shot.shot_id || `S${String(idx + 1).padStart(2, '0')}`,
          section: shot.section,
          hindi: shot.narration_hindi
        });
      }
    });
  });

  // Group by topic
  let md = `# Translation Batch\n\n`;
  md += `Total shots: ${exports.length}\n\n`;
  md += `---\n\n`;
  md += `Instructions: Translate each Hindi (Romanized) narration to natural English.\n`;
  md += `Keep translations concise for 90-second YouTube shorts.\n`;
  md += `Preserve numbers, names, and technical terms exactly.\n\n`;
  md += `Format your response as:\n`;
  md += `\`\`\`\n[topic_id]-[shot_id]: English translation here\n\`\`\`\n\n`;
  md += `---\n\n`;

  let currentTopic = null;
  exports.forEach(e => {
    if (e.topic_id !== currentTopic) {
      currentTopic = e.topic_id;
      md += `## Topic ${e.topic_id}: ${e.topic_title}\n\n`;
    }
    md += `**${e.shot_id}** (${e.section})\n`;
    md += `Hindi: ${e.hindi}\n\n`;
  });

  const mdPath = path.join(__dirname, '..', 'translations-batch.md');
  fs.writeFileSync(mdPath, md);

  console.log(`\n📝 CLAUDE BATCH EXPORT`);
  console.log(`═`.repeat(50));
  console.log(`   Shots to translate: ${exports.length}`);
  console.log(`   Saved to: ${mdPath}`);
  console.log(`\n💡 Copy the contents to Claude and ask for translations.`);
}

/**
 * Parse Claude's response format and import
 */
function importFromClaudeFormat(responsePath) {
  const response = fs.readFileSync(responsePath, 'utf8');
  const data = JSON.parse(fs.readFileSync(DATA_PATH, 'utf8'));

  // Backup
  fs.writeFileSync(BACKUP_PATH, JSON.stringify(data, null, 2));

  // Parse format: [topic_id]-[shot_id]: translation
  const pattern = /(\d+)-(S\d+):\s*(.+)/g;
  let match;
  let updated = 0;

  while ((match = pattern.exec(response)) !== null) {
    const topicId = parseInt(match[1]);
    const shotId = match[2];
    const translation = match[3].trim();

    const topic = data.find(t => t.topic_id === topicId);
    if (topic) {
      const shot = topic.shots.find(s => s.shot_id === shotId);
      if (shot) {
        shot.narration = translation;
        updated++;
      }
    }
  }

  fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2));

  console.log(`\n📥 CLAUDE IMPORT COMPLETE`);
  console.log(`═`.repeat(50));
  console.log(`   Updated: ${updated} shots`);
}

/**
 * Main
 */
function main() {
  const args = process.argv.slice(2);
  const command = args[0];

  const data = JSON.parse(fs.readFileSync(DATA_PATH, 'utf8'));

  if (!command || command === 'status') {
    showStatus(data);
  } else if (command === 'export') {
    const topicIdx = args.indexOf('--topic');
    const specificTopic = topicIdx !== -1 ? parseInt(args[topicIdx + 1]) : null;

    if (args.includes('--claude')) {
      exportForClaude(data, specificTopic);
    } else {
      exportForTranslation(data, specificTopic);
    }
  } else if (command === 'import') {
    const importPath = args[1];
    if (!importPath) {
      console.error('❌ Please provide the path to the translations file');
      console.log('   Usage: node scripts/translate-hindi.js import translations.json');
      process.exit(1);
    }

    if (args.includes('--claude')) {
      importFromClaudeFormat(path.resolve(importPath));
    } else {
      importTranslations(path.resolve(importPath));
    }
  } else {
    console.log(`
translate-hindi.js - Hindi to English alignment tool

Commands:
  status                    Show translation progress
  export                    Export shots needing translation to JSON
  export --topic 50         Export single topic
  export --claude           Export in Claude-friendly markdown format
  import <file>             Import translations from JSON
  import <file> --claude    Import from Claude response format

Examples:
  node scripts/translate-hindi.js status
  node scripts/translate-hindi.js export
  node scripts/translate-hindi.js export --claude --topic 50
  node scripts/translate-hindi.js import translations-needed.json
`);
  }
}

main();
