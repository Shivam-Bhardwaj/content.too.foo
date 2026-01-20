#!/usr/bin/env node

/**
 * voice-to-script.js
 *
 * Workflow: WAV → Transcription → Refined Script
 *
 * Usage:
 *   node scripts/voice-to-script.js <path-to-wav> [topic_id]
 *   node scripts/voice-to-script.js "C:\Users\shivam\Documents\92 Immune system\audio.wav" 92
 *
 * Output:
 *   - transcription-raw.txt (Whisper output)
 *   - transcription-english.txt (English translation)
 *   - claude-prompt.md (Ready to paste into Claude for refinement)
 */

const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

const DATA_PATH = path.join(__dirname, '..', 'public', 'data.json');
const OUTPUT_DIR = path.join(__dirname, '..', 'voice-workflow');
const WHISPER_PATH = '/home/curious/.local/bin/whisper';

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

/**
 * Convert Windows path to WSL path
 */
function toWslPath(winPath) {
  if (winPath.match(/^[A-Z]:\\/i)) {
    const drive = winPath[0].toLowerCase();
    return `/mnt/${drive}${winPath.slice(2).replace(/\\/g, '/')}`;
  }
  return winPath;
}

/**
 * Run Whisper transcription
 */
function transcribe(wavPath, outputDir) {
  console.log('\n🎤 Transcribing audio with Whisper...\n');

  const wslPath = toWslPath(wavPath);

  // Check if file exists
  if (!fs.existsSync(wslPath)) {
    console.error(`❌ File not found: ${wslPath}`);
    process.exit(1);
  }

  // Run Whisper for Hindi transcription
  console.log('   → Getting Hindi transcription...');
  try {
    execSync(`${WHISPER_PATH} "${wslPath}" --language hi --model base --output_dir "${outputDir}" --output_format txt`, {
      stdio: 'inherit',
      timeout: 300000
    });
  } catch (e) {
    console.error('   ⚠️  Hindi transcription had issues, continuing...');
  }

  // Run Whisper for English translation
  console.log('\n   → Getting English translation...');
  const englishDir = path.join(outputDir, 'english');
  if (!fs.existsSync(englishDir)) {
    fs.mkdirSync(englishDir, { recursive: true });
  }

  try {
    execSync(`${WHISPER_PATH} "${wslPath}" --language hi --task translate --model base --output_dir "${englishDir}" --output_format txt`, {
      stdio: 'inherit',
      timeout: 300000
    });
  } catch (e) {
    console.error('   ⚠️  English translation had issues, continuing...');
  }

  return {
    hindiPath: path.join(outputDir, path.basename(wslPath, '.wav') + '.txt'),
    englishPath: path.join(englishDir, path.basename(wslPath, '.wav') + '.txt')
  };
}

/**
 * Get existing topic data
 */
function getTopicData(topicId) {
  if (!topicId) return null;

  const data = JSON.parse(fs.readFileSync(DATA_PATH, 'utf8'));
  return data.find(t => t.topic_id === parseInt(topicId));
}

/**
 * Generate Claude prompt for refinement
 */
function generateClaudePrompt(topicId, englishText, hindiRaw, existingTopic) {
  let prompt = `# Voice Recording → Romanized Hindi Script\n\n`;

  prompt += `## Instructions\n`;
  prompt += `Convert my natural Hindi recording into clean **Romanized Hindi** script.\n`;
  prompt += `Output format like: "Tumhe bachpan mein kabhi mata nikli thi?"\n\n`;

  prompt += `---\n\n`;

  prompt += `## My Recording (English translation from Whisper):\n`;
  prompt += `\`\`\`\n${englishText}\n\`\`\`\n\n`;

  if (existingTopic) {
    prompt += `## Reference - Original Topic: #${topicId} - ${existingTopic.title}\n\n`;
    if (existingTopic.talking_points && existingTopic.talking_points.length > 0) {
      prompt += `### Talking Points:\n`;
      (existingTopic.talking_points || []).forEach(tp => {
        prompt += `- ${tp}\n`;
      });
      prompt += `\n`;
    }
  }

  prompt += `---\n\n`;
  prompt += `## Please provide:\n\n`;
  prompt += `### 1. Clean Romanized Hindi Script\n`;
  prompt += `Convert the English back to natural Romanized Hindi like I speak.\n`;
  prompt += `Format:\n`;
  prompt += `\`\`\`\n`;
  prompt += `Tumhe bachpan mein kabhi mata nikli thi?\n`;
  prompt += `Dobara kabhi nahi niklegi.\n`;
  prompt += `Kyunki tumhari body kabhi nahi bhoolti.\n`;
  prompt += `...\n`;
  prompt += `\`\`\`\n\n`;

  prompt += `### 2. Shot Breakdown (for storyboard)\n`;
  prompt += `\`\`\`json\n`;
  prompt += `[\n`;
  prompt += `  {\n`;
  prompt += `    "shot_id": "S01",\n`;
  prompt += `    "tc_in": "0:00",\n`;
  prompt += `    "tc_out": "0:04",\n`;
  prompt += `    "duration": 4,\n`;
  prompt += `    "section": "HOOK",\n`;
  prompt += `    "narration_hindi": "Tumhe bachpan mein kabhi mata nikli thi?",\n`;
  prompt += `    "narration": "Did you ever get chickenpox as a child?",\n`;
  prompt += `    "mj_prompt": "Close-up of child's face with faint chickenpox marks, soft natural lighting, photorealistic, nostalgic mood --ar 9:16 --v 6.1"\n`;
  prompt += `  },\n`;
  prompt += `  ...\n`;
  prompt += `]\n`;
  prompt += `\`\`\`\n\n`;

  prompt += `### 3. Key Data\n`;
  prompt += `- Numbers to remember: \n`;
  prompt += `- Technical terms: \n`;
  prompt += `- Names: \n`;

  return prompt;
}

/**
 * Main
 */
async function main() {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    console.log(`
🎙️  Voice-to-Script Workflow
═══════════════════════════════════════════════════

Usage:
  node scripts/voice-to-script.js <wav-file> [topic_id]

Examples:
  node scripts/voice-to-script.js "C:\\Users\\shivam\\Documents\\92 Immune system\\audio.wav" 92
  node scripts/voice-to-script.js /mnt/c/recordings/my-recording.wav

This will:
  1. Transcribe your WAV file using Whisper
  2. Get both Hindi (raw) and English translation
  3. Generate a prompt for Claude to help refine the script
  4. Output everything to ./voice-workflow/

Then paste the claude-prompt.md content to Claude for refinement.
`);
    process.exit(0);
  }

  const wavPath = args[0];
  const topicId = args[1] || null;

  console.log(`
🎙️  Voice-to-Script Workflow
═══════════════════════════════════════════════════
   Audio: ${wavPath}
   Topic: ${topicId || 'New topic'}
═══════════════════════════════════════════════════
`);

  // Create timestamped output folder
  const timestamp = new Date().toISOString().slice(0, 16).replace(/[:-]/g, '');
  const outputDir = path.join(OUTPUT_DIR, topicId ? `topic-${topicId}-${timestamp}` : `new-${timestamp}`);
  fs.mkdirSync(outputDir, { recursive: true });

  // Run transcription
  const { hindiPath, englishPath } = transcribe(wavPath, outputDir);

  // Read outputs
  let hindiRaw = '';
  let englishText = '';

  try {
    hindiRaw = fs.readFileSync(hindiPath, 'utf8');
  } catch (e) {
    hindiRaw = '[Transcription failed - please check audio quality]';
  }

  try {
    englishText = fs.readFileSync(englishPath, 'utf8');
  } catch (e) {
    englishText = '[Translation failed - please check audio quality]';
  }

  // Get existing topic if specified
  const existingTopic = getTopicData(topicId);

  // Generate Claude prompt
  const claudePrompt = generateClaudePrompt(topicId, englishText, hindiRaw, existingTopic);
  const promptPath = path.join(outputDir, 'claude-prompt.md');
  fs.writeFileSync(promptPath, claudePrompt);

  // Save individual files too
  fs.writeFileSync(path.join(outputDir, 'transcription-hindi-raw.txt'), hindiRaw);
  fs.writeFileSync(path.join(outputDir, 'transcription-english.txt'), englishText);

  console.log(`
✅ WORKFLOW COMPLETE
═══════════════════════════════════════════════════

📁 Output saved to: ${outputDir}

   • transcription-hindi-raw.txt  (Whisper Hindi output)
   • transcription-english.txt    (English translation)
   • claude-prompt.md             (Ready for Claude!)

📋 Next steps:
   1. Open: ${promptPath}
   2. Copy the contents
   3. Paste into Claude
   4. Get your refined script + Midjourney prompts!

Or run: cat "${promptPath}"
`);
}

main().catch(console.error);
