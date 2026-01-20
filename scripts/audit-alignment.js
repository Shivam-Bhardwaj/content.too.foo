#!/usr/bin/env node

/**
 * audit-alignment.js
 *
 * Analyzes English/Hindi narration alignment across all topics.
 * Identifies mismatches where subtitles won't match spoken Hindi.
 *
 * Usage:
 *   node scripts/audit-alignment.js              # Full audit report
 *   node scripts/audit-alignment.js --topic 50   # Single topic deep dive
 *   node scripts/audit-alignment.js --html       # Generate HTML report
 */

const fs = require('fs');
const path = require('path');

// Numbers that should appear in both languages
const NUMBER_PATTERN = /\b\d+(?:,\d{3})*(?:\.\d+)?(?:\s*(?:million|billion|trillion|crore|lakh|arab|%|percent))?\b/gi;

// Key proper nouns that indicate topic alignment
const PROPER_NOUN_PATTERN = /\b[A-Z][a-z]+(?:\s+[A-Z][a-z]+)*\b/g;

// Common words to exclude from comparison
const EXCLUDED_WORDS = new Set([
  'The', 'A', 'An', 'In', 'On', 'At', 'To', 'For', 'And', 'But', 'Or',
  'This', 'That', 'It', 'Was', 'Is', 'Are', 'Were', 'Be', 'Been',
  'IMAGE', 'VIDEO', 'TEXT', 'HOOK', 'CONTEXT', 'BUILD', 'CLIMAX', 'REVEAL'
]);

/**
 * Extract key elements from text for comparison
 */
function extractKeyElements(text) {
  if (!text) return { numbers: [], nouns: [], words: [] };

  const numbers = (text.match(NUMBER_PATTERN) || []).map(n => n.toLowerCase());

  const nouns = (text.match(PROPER_NOUN_PATTERN) || [])
    .filter(n => !EXCLUDED_WORDS.has(n))
    .map(n => n.toLowerCase());

  // Get significant words (length > 4)
  const words = text.toLowerCase()
    .replace(/[^\w\s]/g, ' ')
    .split(/\s+/)
    .filter(w => w.length > 4);

  return { numbers, nouns, words };
}

/**
 * Calculate overlap between two arrays
 */
function calculateOverlap(arr1, arr2) {
  if (arr1.length === 0 && arr2.length === 0) return 1;
  if (arr1.length === 0 || arr2.length === 0) return 0;

  const set1 = new Set(arr1);
  const set2 = new Set(arr2);
  const intersection = [...set1].filter(x => set2.has(x));
  const union = new Set([...set1, ...set2]);

  return intersection.length / union.size;
}

/**
 * Analyze alignment for a single shot
 */
function analyzeShot(shot) {
  const english = shot.narration || '';
  const hindi = shot.narration_hindi || '';

  // Skip if both empty
  if (!english && !hindi) {
    return { aligned: true, score: 1, reason: 'both empty' };
  }

  // Flag if one is missing
  if (!english || !hindi) {
    return {
      aligned: false,
      score: 0,
      reason: english ? 'missing Hindi' : 'missing English',
      english,
      hindi
    };
  }

  const engElements = extractKeyElements(english);
  const hinElements = extractKeyElements(hindi);

  // Check number alignment (critical for facts)
  const numberOverlap = calculateOverlap(engElements.numbers, hinElements.numbers);

  // Check proper noun alignment
  const nounOverlap = calculateOverlap(engElements.nouns, hinElements.nouns);

  // Check word length ratio (very different lengths = likely different content)
  const lengthRatio = Math.min(english.length, hindi.length) / Math.max(english.length, hindi.length);

  // Weighted score
  const score = (numberOverlap * 0.4) + (nounOverlap * 0.3) + (lengthRatio * 0.3);

  // Determine alignment status
  let aligned = score > 0.5;
  let reason = '';

  if (numberOverlap < 0.5 && engElements.numbers.length > 0) {
    reason = `numbers mismatch (EN: ${engElements.numbers.join(', ')} | HI: ${hinElements.numbers.join(', ')})`;
    aligned = false;
  } else if (nounOverlap < 0.3 && engElements.nouns.length > 0) {
    reason = `nouns mismatch (EN: ${engElements.nouns.slice(0,3).join(', ')} | HI: ${hinElements.nouns.slice(0,3).join(', ')})`;
  } else if (lengthRatio < 0.3) {
    reason = `length mismatch (EN: ${english.length} chars | HI: ${hindi.length} chars)`;
  }

  return {
    aligned,
    score: Math.round(score * 100) / 100,
    reason,
    english,
    hindi,
    details: {
      numberOverlap: Math.round(numberOverlap * 100),
      nounOverlap: Math.round(nounOverlap * 100),
      lengthRatio: Math.round(lengthRatio * 100)
    }
  };
}

/**
 * Analyze alignment for a full topic
 */
function analyzeTopic(topic) {
  const shots = topic.shots || [];
  const results = shots.map((shot, idx) => ({
    shot_id: shot.shot_id || `S${String(idx + 1).padStart(2, '0')}`,
    section: shot.section,
    ...analyzeShot(shot)
  }));

  const alignedCount = results.filter(r => r.aligned).length;
  const totalScore = results.reduce((sum, r) => sum + r.score, 0) / results.length;

  // Find worst mismatches
  const mismatches = results
    .filter(r => !r.aligned)
    .sort((a, b) => a.score - b.score);

  return {
    topic_id: topic.topic_id,
    title: topic.title,
    title_hindi: topic.title_hindi,
    category: topic.category,
    total_shots: shots.length,
    aligned_shots: alignedCount,
    alignment_percentage: Math.round((alignedCount / shots.length) * 100),
    average_score: Math.round(totalScore * 100),
    status: alignedCount === shots.length ? 'ALIGNED' :
            alignedCount > shots.length * 0.7 ? 'PARTIAL' : 'MISALIGNED',
    mismatches: mismatches.slice(0, 5), // Top 5 worst
    all_shots: results
  };
}

/**
 * Generate summary statistics
 */
function generateSummary(results) {
  const aligned = results.filter(r => r.status === 'ALIGNED').length;
  const partial = results.filter(r => r.status === 'PARTIAL').length;
  const misaligned = results.filter(r => r.status === 'MISALIGNED').length;

  const totalShots = results.reduce((sum, r) => sum + r.total_shots, 0);
  const alignedShots = results.reduce((sum, r) => sum + r.aligned_shots, 0);

  // By category
  const byCategory = {};
  results.forEach(r => {
    if (!byCategory[r.category]) {
      byCategory[r.category] = { total: 0, aligned: 0, partial: 0, misaligned: 0 };
    }
    byCategory[r.category].total++;
    byCategory[r.category][r.status.toLowerCase()]++;
  });

  return {
    total_topics: results.length,
    aligned_topics: aligned,
    partial_topics: partial,
    misaligned_topics: misaligned,
    total_shots: totalShots,
    aligned_shots: alignedShots,
    overall_alignment: Math.round((alignedShots / totalShots) * 100),
    by_category: byCategory,
    worst_topics: results
      .filter(r => r.status === 'MISALIGNED')
      .sort((a, b) => a.alignment_percentage - b.alignment_percentage)
      .slice(0, 10)
      .map(r => ({
        topic_id: r.topic_id,
        title: r.title,
        alignment: r.alignment_percentage + '%'
      }))
  };
}

/**
 * Generate HTML report
 */
function generateHTMLReport(results, summary) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Alignment Audit - Content.too.foo</title>
  <style>
    :root {
      --bg: #0a0a0a;
      --surface: #141414;
      --border: #2a2a2a;
      --text: #e0e0e0;
      --text-dim: #888;
      --green: #22c55e;
      --yellow: #eab308;
      --red: #ef4444;
      --blue: #3b82f6;
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: 'Inter', -apple-system, sans-serif;
      background: var(--bg);
      color: var(--text);
      line-height: 1.6;
      padding: 2rem;
    }
    h1 { font-size: 1.75rem; margin-bottom: 0.5rem; }
    .subtitle { color: var(--text-dim); margin-bottom: 2rem; }
    .stats {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 1rem;
      margin-bottom: 2rem;
    }
    .stat {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 8px;
      padding: 1rem;
      text-align: center;
    }
    .stat-value {
      font-size: 2rem;
      font-weight: 700;
    }
    .stat-value.green { color: var(--green); }
    .stat-value.yellow { color: var(--yellow); }
    .stat-value.red { color: var(--red); }
    .stat-label { color: var(--text-dim); font-size: 0.8rem; text-transform: uppercase; }
    .topic-list {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
    .topic-row {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 6px;
      padding: 0.75rem 1rem;
      display: flex;
      align-items: center;
      gap: 1rem;
      cursor: pointer;
    }
    .topic-row:hover { border-color: var(--blue); }
    .topic-id { font-weight: 700; color: var(--blue); min-width: 40px; }
    .topic-title { flex: 1; }
    .topic-bar {
      width: 100px;
      height: 8px;
      background: var(--border);
      border-radius: 4px;
      overflow: hidden;
    }
    .topic-bar-fill {
      height: 100%;
      border-radius: 4px;
    }
    .topic-bar-fill.green { background: var(--green); }
    .topic-bar-fill.yellow { background: var(--yellow); }
    .topic-bar-fill.red { background: var(--red); }
    .topic-pct { min-width: 50px; text-align: right; font-family: monospace; }
    .badge {
      padding: 0.125rem 0.5rem;
      border-radius: 4px;
      font-size: 0.7rem;
      font-weight: 600;
      text-transform: uppercase;
    }
    .badge.green { background: rgba(34,197,94,0.2); color: var(--green); }
    .badge.yellow { background: rgba(234,179,8,0.2); color: var(--yellow); }
    .badge.red { background: rgba(239,68,68,0.2); color: var(--red); }
    .filter-bar {
      margin-bottom: 1rem;
      display: flex;
      gap: 0.5rem;
    }
    .filter-btn {
      padding: 0.5rem 1rem;
      border: 1px solid var(--border);
      border-radius: 4px;
      background: var(--surface);
      color: var(--text);
      cursor: pointer;
      font-size: 0.875rem;
    }
    .filter-btn.active { border-color: var(--blue); background: rgba(59,130,246,0.2); }
    .modal {
      display: none;
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.8);
      z-index: 100;
      padding: 2rem;
      overflow-y: auto;
    }
    .modal.open { display: block; }
    .modal-content {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 12px;
      max-width: 900px;
      margin: 0 auto;
      padding: 1.5rem;
    }
    .modal-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;
    }
    .close-btn {
      background: none;
      border: none;
      color: var(--text-dim);
      font-size: 1.5rem;
      cursor: pointer;
    }
    .shot-comparison {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
      margin-bottom: 1rem;
      padding: 1rem;
      background: var(--bg);
      border-radius: 8px;
    }
    .shot-comparison.misaligned { border-left: 3px solid var(--red); }
    .shot-comparison.aligned { border-left: 3px solid var(--green); }
    .shot-label {
      font-size: 0.75rem;
      color: var(--text-dim);
      text-transform: uppercase;
      margin-bottom: 0.25rem;
    }
    .shot-text { font-size: 0.9rem; }
  </style>
</head>
<body>
  <h1>Alignment Audit Report</h1>
  <p class="subtitle">English/Hindi narration comparison across ${summary.total_topics} topics</p>

  <div class="stats">
    <div class="stat">
      <div class="stat-value green">${summary.aligned_topics}</div>
      <div class="stat-label">Aligned</div>
    </div>
    <div class="stat">
      <div class="stat-value yellow">${summary.partial_topics}</div>
      <div class="stat-label">Partial</div>
    </div>
    <div class="stat">
      <div class="stat-value red">${summary.misaligned_topics}</div>
      <div class="stat-label">Misaligned</div>
    </div>
    <div class="stat">
      <div class="stat-value">${summary.overall_alignment}%</div>
      <div class="stat-label">Shot Alignment</div>
    </div>
  </div>

  <div class="filter-bar">
    <button class="filter-btn active" data-filter="all">All</button>
    <button class="filter-btn" data-filter="MISALIGNED">Misaligned</button>
    <button class="filter-btn" data-filter="PARTIAL">Partial</button>
    <button class="filter-btn" data-filter="ALIGNED">Aligned</button>
  </div>

  <div class="topic-list">
    ${results.map(r => {
      const colorClass = r.status === 'ALIGNED' ? 'green' : r.status === 'PARTIAL' ? 'yellow' : 'red';
      return `
    <div class="topic-row" data-status="${r.status}" data-topic='${JSON.stringify(r).replace(/'/g, "\\'")}'>
      <span class="topic-id">#${r.topic_id}</span>
      <span class="topic-title">${r.title}</span>
      <span class="badge ${colorClass}">${r.status}</span>
      <div class="topic-bar">
        <div class="topic-bar-fill ${colorClass}" style="width: ${r.alignment_percentage}%"></div>
      </div>
      <span class="topic-pct">${r.alignment_percentage}%</span>
    </div>`;
    }).join('')}
  </div>

  <div class="modal" id="modal">
    <div class="modal-content">
      <div class="modal-header">
        <h2 id="modal-title">Topic Details</h2>
        <button class="close-btn" onclick="closeModal()">&times;</button>
      </div>
      <div id="modal-body"></div>
    </div>
  </div>

  <script>
    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', function() {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        const filter = this.dataset.filter;
        document.querySelectorAll('.topic-row').forEach(row => {
          row.style.display = (filter === 'all' || row.dataset.status === filter) ? 'flex' : 'none';
        });
      });
    });

    document.querySelectorAll('.topic-row').forEach(row => {
      row.addEventListener('click', function() {
        const data = JSON.parse(this.dataset.topic);
        showModal(data);
      });
    });

    function showModal(topic) {
      document.getElementById('modal-title').textContent = '#' + topic.topic_id + ' ' + topic.title;

      let html = '<p style="color: var(--text-dim); margin-bottom: 1rem;">' +
        topic.aligned_shots + '/' + topic.total_shots + ' shots aligned (' + topic.alignment_percentage + '%)</p>';

      topic.all_shots.forEach(shot => {
        const cls = shot.aligned ? 'aligned' : 'misaligned';
        html += '<div class="shot-comparison ' + cls + '">' +
          '<div><div class="shot-label">' + shot.shot_id + ' - English</div>' +
          '<div class="shot-text">' + (shot.english || '<em>empty</em>') + '</div></div>' +
          '<div><div class="shot-label">Hindi (Romanized)</div>' +
          '<div class="shot-text">' + (shot.hindi || '<em>empty</em>') + '</div></div>' +
          '</div>';
      });

      document.getElementById('modal-body').innerHTML = html;
      document.getElementById('modal').classList.add('open');
    }

    function closeModal() {
      document.getElementById('modal').classList.remove('open');
    }

    document.getElementById('modal').addEventListener('click', function(e) {
      if (e.target === this) closeModal();
    });
  </script>
</body>
</html>`;
}

/**
 * Main execution
 */
function main() {
  const args = process.argv.slice(2);
  const outputHtml = args.includes('--html');
  const topicIdx = args.indexOf('--topic');
  const specificTopic = topicIdx !== -1 ? parseInt(args[topicIdx + 1]) : null;

  // Load data
  const dataPath = path.join(__dirname, '..', 'public', 'data.json');
  const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

  console.log(`\n🔍 Analyzing alignment for ${data.length} topics...\n`);

  // Process topics
  let topics = data;
  if (specificTopic) {
    topics = data.filter(t => t.topic_id === specificTopic);
    if (topics.length === 0) {
      console.error(`❌ Topic ${specificTopic} not found`);
      process.exit(1);
    }
  }

  const results = topics.map(analyzeTopic);
  const summary = generateSummary(results);

  // Output
  if (outputHtml) {
    const html = generateHTMLReport(results, summary);
    const outputPath = path.join(__dirname, '..', 'public', 'alignment-audit.html');
    fs.writeFileSync(outputPath, html);
    console.log(`✅ HTML report saved to: ${outputPath}`);
  } else if (specificTopic) {
    // Detailed single topic output
    const result = results[0];
    console.log(`📊 Topic #${result.topic_id}: ${result.title}`);
    console.log(`   Status: ${result.status}`);
    console.log(`   Aligned: ${result.aligned_shots}/${result.total_shots} shots (${result.alignment_percentage}%)\n`);

    if (result.mismatches.length > 0) {
      console.log('❌ Misaligned shots:');
      result.mismatches.forEach(m => {
        console.log(`\n   ${m.shot_id} (${m.section}):`);
        console.log(`   EN: "${m.english}"`);
        console.log(`   HI: "${m.hindi}"`);
        if (m.reason) console.log(`   Issue: ${m.reason}`);
      });
    }
  } else {
    // Summary output
    console.log('📈 ALIGNMENT SUMMARY');
    console.log('═'.repeat(50));
    console.log(`   Total topics: ${summary.total_topics}`);
    console.log(`   ✅ Aligned:    ${summary.aligned_topics} (${Math.round(summary.aligned_topics/summary.total_topics*100)}%)`);
    console.log(`   ⚠️  Partial:    ${summary.partial_topics} (${Math.round(summary.partial_topics/summary.total_topics*100)}%)`);
    console.log(`   ❌ Misaligned: ${summary.misaligned_topics} (${Math.round(summary.misaligned_topics/summary.total_topics*100)}%)`);
    console.log(`\n   Shot-level: ${summary.aligned_shots}/${summary.total_shots} (${summary.overall_alignment}%)`);

    if (summary.worst_topics.length > 0) {
      console.log('\n🚨 Worst misaligned topics:');
      summary.worst_topics.forEach((t, i) => {
        console.log(`   ${i + 1}. #${t.topic_id} ${t.title} - ${t.alignment}`);
      });
    }

    // Save JSON
    const outputPath = path.join(__dirname, '..', 'public', 'alignment-audit.json');
    fs.writeFileSync(outputPath, JSON.stringify({ summary, topics: results }, null, 2));
    console.log(`\n✅ Full report saved to: ${outputPath}`);
  }
}

main();
