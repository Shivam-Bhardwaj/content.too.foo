#!/usr/bin/env node

/**
 * export-srt.js
 *
 * Exports English subtitles as SRT files for video production.
 * Uses shot timecodes to create properly timed subtitles.
 *
 * Usage:
 *   node scripts/export-srt.js --topic 50       # Export single topic
 *   node scripts/export-srt.js --all            # Export all topics
 *   node scripts/export-srt.js --topic 50 --hindi  # Export Hindi instead
 */

const fs = require('fs');
const path = require('path');

const DATA_PATH = path.join(__dirname, '..', 'public', 'data.json');
const OUTPUT_DIR = path.join(__dirname, '..', 'subtitles');

/**
 * Parse timecode string to seconds
 * Supports formats: "0:00", "00:00.0", "00:000.0"
 */
function parseTimecode(tc) {
  if (!tc) return 0;

  // Handle format like "00:000.0" (minutes:seconds.ms) used in data
  const match = tc.match(/(\d+):(\d+)(?:\.(\d+))?/);
  if (match) {
    const minutes = parseInt(match[1]) || 0;
    const seconds = parseInt(match[2]) || 0;
    const ms = match[3] ? parseInt(match[3].padEnd(3, '0').slice(0, 3)) : 0;
    return minutes * 60 + seconds + ms / 1000;
  }

  return 0;
}

/**
 * Format seconds to SRT timecode
 * Format: HH:MM:SS,mmm
 */
function formatSRTTimecode(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);
  const ms = Math.round((seconds % 1) * 1000);

  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')},${String(ms).padStart(3, '0')}`;
}

/**
 * Split long text into multiple lines for better subtitle readability
 * Target: ~42 characters per line (standard for subtitles)
 */
function wrapSubtitleText(text, maxChars = 42) {
  if (!text || text.length <= maxChars) return text;

  const words = text.split(' ');
  const lines = [];
  let currentLine = '';

  for (const word of words) {
    if (currentLine.length + word.length + 1 <= maxChars) {
      currentLine += (currentLine ? ' ' : '') + word;
    } else {
      if (currentLine) lines.push(currentLine);
      currentLine = word;
    }
  }
  if (currentLine) lines.push(currentLine);

  // Limit to 2 lines max for readability
  if (lines.length > 2) {
    return lines.slice(0, 2).join('\n') + '...';
  }

  return lines.join('\n');
}

/**
 * Generate SRT content for a topic
 */
function generateSRT(topic, language = 'english') {
  const shots = topic.shots || [];
  const entries = [];

  let currentTime = 0;
  let entryNumber = 1;

  shots.forEach((shot, idx) => {
    const narration = language === 'hindi' ? shot.narration_hindi : shot.narration;

    if (!narration || !narration.trim()) {
      // Still advance time even if no narration
      currentTime += shot.duration || 0;
      return;
    }

    // Calculate timecodes
    const startTime = currentTime;
    const endTime = currentTime + (shot.duration || 4);

    // Format SRT entry
    entries.push({
      number: entryNumber++,
      start: formatSRTTimecode(startTime),
      end: formatSRTTimecode(endTime),
      text: wrapSubtitleText(narration.trim())
    });

    currentTime = endTime;
  });

  // Build SRT content
  let srt = '';
  entries.forEach(entry => {
    srt += `${entry.number}\n`;
    srt += `${entry.start} --> ${entry.end}\n`;
    srt += `${entry.text}\n\n`;
  });

  return srt;
}

/**
 * Export SRT for a single topic
 */
function exportTopic(topic, language = 'english') {
  const topicId = String(topic.topic_id).padStart(3, '0');
  const langSuffix = language === 'hindi' ? '_hi' : '_en';
  const filename = `${topicId}_${topic.title.replace(/[^a-zA-Z0-9]/g, '_').substring(0, 30)}${langSuffix}.srt`;

  const srt = generateSRT(topic, language);

  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  const outputPath = path.join(OUTPUT_DIR, filename);
  fs.writeFileSync(outputPath, srt);

  return { filename, entries: srt.split('\n\n').filter(Boolean).length };
}

/**
 * Main
 */
function main() {
  const args = process.argv.slice(2);
  const topicIdx = args.indexOf('--topic');
  const specificTopic = topicIdx !== -1 ? parseInt(args[topicIdx + 1]) : null;
  const exportAll = args.includes('--all');
  const language = args.includes('--hindi') ? 'hindi' : 'english';

  if (!specificTopic && !exportAll) {
    console.log(`
export-srt.js - Generate SRT subtitle files

Usage:
  node scripts/export-srt.js --topic 50       Export single topic (English)
  node scripts/export-srt.js --topic 50 --hindi  Export Hindi subtitles
  node scripts/export-srt.js --all            Export all topics

Output:
  Subtitles are saved to ./subtitles/ directory
`);
    return;
  }

  const data = JSON.parse(fs.readFileSync(DATA_PATH, 'utf8'));

  if (specificTopic) {
    const topic = data.find(t => t.topic_id === specificTopic);
    if (!topic) {
      console.error(`❌ Topic ${specificTopic} not found`);
      process.exit(1);
    }

    const result = exportTopic(topic, language);
    console.log(`\n✅ Exported: ${result.filename}`);
    console.log(`   Entries: ${result.entries} subtitles`);
    console.log(`   Path: ${OUTPUT_DIR}/${result.filename}`);
  } else if (exportAll) {
    console.log(`\n📤 Exporting ${language} subtitles for ${data.length} topics...\n`);

    let total = 0;
    data.forEach(topic => {
      const result = exportTopic(topic, language);
      console.log(`   ✓ #${topic.topic_id} ${topic.title.substring(0, 40)} → ${result.entries} entries`);
      total++;
    });

    console.log(`\n✅ Exported ${total} SRT files to: ${OUTPUT_DIR}`);
  }
}

main();
