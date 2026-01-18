#!/usr/bin/env node
/**
 * Update status for a topic
 *
 * Usage:
 *   node scripts/update-status.js <topic_id> <status> [--youtube URL] [--instagram URL] [--x URL]
 *
 * Examples:
 *   node scripts/update-status.js 1 in_progress
 *   node scripts/update-status.js 1 published --youtube https://youtube.com/shorts/xxx
 *   node scripts/update-status.js 42 published --youtube https://... --instagram https://... --x https://...
 */

const fs = require('fs');
const path = require('path');

const STATUS_FILE = path.join(__dirname, '../public/status.json');

function loadStatus() {
  try {
    return JSON.parse(fs.readFileSync(STATUS_FILE, 'utf8'));
  } catch {
    return { last_updated: new Date().toISOString(), topics: {} };
  }
}

function saveStatus(data) {
  data.last_updated = new Date().toISOString();
  fs.writeFileSync(STATUS_FILE, JSON.stringify(data, null, 2));
}

function parseArgs(args) {
  const topicId = parseInt(args[0]);
  const status = args[1];

  if (isNaN(topicId) || topicId < 1 || topicId > 100) {
    console.error('Error: topic_id must be between 1 and 100');
    process.exit(1);
  }

  if (!['planned', 'in_progress', 'published'].includes(status)) {
    console.error('Error: status must be planned, in_progress, or published');
    process.exit(1);
  }

  const result = { topicId, status };

  for (let i = 2; i < args.length; i += 2) {
    const flag = args[i];
    const value = args[i + 1];
    if (flag === '--youtube') result.youtube_url = value;
    else if (flag === '--instagram') result.instagram_url = value;
    else if (flag === '--x') result.x_url = value;
  }

  return result;
}

function main() {
  const args = process.argv.slice(2);

  if (args.length < 2) {
    console.log('Usage: node update-status.js <topic_id> <status> [--youtube URL] [--instagram URL] [--x URL]');
    console.log('');
    console.log('Status options: planned, in_progress, published');
    console.log('');
    console.log('Examples:');
    console.log('  node scripts/update-status.js 1 in_progress');
    console.log('  node scripts/update-status.js 1 published --youtube https://youtube.com/shorts/xxx');
    process.exit(0);
  }

  const { topicId, status, youtube_url, instagram_url, x_url } = parseArgs(args);

  const data = loadStatus();

  data.topics[topicId] = {
    status,
    ...(youtube_url && { youtube_url }),
    ...(instagram_url && { instagram_url }),
    ...(x_url && { x_url })
  };

  saveStatus(data);

  console.log(`Updated topic ${topicId}:`);
  console.log(JSON.stringify(data.topics[topicId], null, 2));
}

main();
