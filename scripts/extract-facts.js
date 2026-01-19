#!/usr/bin/env node

/**
 * extract-facts.js
 *
 * Extracts and highlights key facts from all topic scripts:
 * - Numbers (years, quantities, percentages)
 * - Dates and time periods
 * - Names (people, places, events)
 * - Measurements (distances, weights, temperatures)
 * - Money/currency amounts
 *
 * Usage:
 *   node scripts/extract-facts.js                    # Generate facts report
 *   node scripts/extract-facts.js --topic 101       # Extract facts for specific topic
 *   node scripts/extract-facts.js --html            # Generate HTML report
 *   node scripts/extract-facts.js --json            # Generate JSON report (default)
 */

const fs = require('fs');
const path = require('path');

// Patterns for fact extraction
const PATTERNS = {
  // Years (1800-2099, BC/BCE, AD/CE)
  years: /\b(1[89]\d{2}|20\d{2})\b|\b\d{1,4}\s*(BC|BCE|AD|CE|B\.C\.|A\.D\.)\b/gi,

  // Numbers with context (quantities, counts)
  numbers: /\b(\d{1,3}(?:,\d{3})*(?:\.\d+)?)\s*(million|billion|trillion|thousand|hundred|crore|lakh|arab)?\b/gi,

  // Percentages
  percentages: /\b\d+(?:\.\d+)?%|\b\d+(?:\.\d+)?\s*percent\b/gi,

  // Measurements - distance
  distances: /\b\d+(?:,\d{3})*(?:\.\d+)?\s*(?:km|kilometers?|miles?|meters?|feet|ft|inches?|in|light[\s-]?years?|ly|parsecs?|AU)\b/gi,

  // Measurements - weight/mass
  weights: /\b\d+(?:,\d{3})*(?:\.\d+)?\s*(?:kg|kilograms?|pounds?|lbs?|tons?|tonnes?|grams?|g|mg|ounces?|oz)\b/gi,

  // Measurements - temperature
  temperatures: /\b-?\d+(?:,\d{3})*(?:\.\d+)?\s*°?(?:C|F|Celsius|Fahrenheit|Kelvin|K)\b/gi,

  // Measurements - speed
  speeds: /\b\d+(?:,\d{3})*(?:\.\d+)?\s*(?:mph|km\/h|kmph|m\/s|kph|knots?)\b/gi,

  // Time durations
  durations: /\b\d+(?:\.\d+)?\s*(?:seconds?|minutes?|hours?|days?|weeks?|months?|years?|decades?|centuries?|millennia)\b/gi,

  // Money/currency
  money: /(?:\$|₹|€|£|¥)\s*\d+(?:,\d{3})*(?:\.\d+)?(?:\s*(?:million|billion|trillion|thousand|crore|lakh|arab))?\b|\b\d+(?:,\d{3})*(?:\.\d+)?\s*(?:dollars?|rupees?|euros?|pounds?|yen)\b/gi,

  // Scientific notation
  scientific: /\b\d+(?:\.\d+)?\s*×\s*10\^?\d+\b|\b10\^?\d+\b/gi,

  // Proper nouns (capitalized words, likely names/places)
  properNouns: /\b[A-Z][a-z]+(?:\s+[A-Z][a-z]+)*\b/g,

  // Hindi numbers (in romanized form)
  hindiNumbers: /\b\d+(?:,\d{3})*(?:\.\d+)?\s*(?:saal|hazaar|lakh|crore|arab|kharab)\b/gi,
};

// Categories for organizing facts
const CATEGORIES = {
  temporal: ['years', 'durations'],
  quantitative: ['numbers', 'percentages', 'scientific'],
  measurements: ['distances', 'weights', 'temperatures', 'speeds'],
  financial: ['money'],
  entities: ['properNouns'],
  hindiSpecific: ['hindiNumbers']
};

// Known proper nouns to exclude (common words that get capitalized)
const EXCLUDED_WORDS = new Set([
  'The', 'A', 'An', 'In', 'On', 'At', 'To', 'For', 'And', 'But', 'Or', 'So',
  'If', 'As', 'By', 'With', 'From', 'Into', 'Through', 'During', 'Before',
  'After', 'Above', 'Below', 'Between', 'Under', 'Over', 'Again', 'Further',
  'Then', 'Once', 'Here', 'There', 'When', 'Where', 'Why', 'How', 'All',
  'Each', 'Few', 'More', 'Most', 'Other', 'Some', 'Such', 'No', 'Not',
  'Only', 'Same', 'Than', 'Too', 'Very', 'Just', 'Now', 'Also',
  // Common sentence starters
  'Have', 'Has', 'Had', 'Do', 'Does', 'Did', 'Is', 'Are', 'Was', 'Were',
  'Be', 'Been', 'Being', 'Will', 'Would', 'Could', 'Should', 'May', 'Might',
  'Must', 'Shall', 'Can', 'What', 'Which', 'Who', 'This', 'That', 'These',
  'Those', 'My', 'Your', 'His', 'Her', 'Its', 'Our', 'Their',
  // Topic-specific exclusions
  'IMAGE', 'VIDEO', 'TEXT', 'HOOK', 'CONTEXT', 'BUILD', 'CLIMAX', 'REVEAL',
  'ECU', 'CU', 'MS', 'WS', 'MICRO'
]);

// Known important entities to always include
const KNOWN_ENTITIES = new Set([
  'Einstein', 'Newton', 'Archimedes', 'Galileo', 'Darwin', 'Tesla', 'Edison',
  'NASA', 'SpaceX', 'ISRO', 'ESA', 'CERN',
  'Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn', 'Neptune', 'Uranus', 'Mercury', 'Pluto',
  'Sun', 'Moon', 'Himalaya', 'Himalayas', 'Delhi', 'Mumbai', 'India', 'America', 'China',
  'Pacific', 'Atlantic', 'Mediterranean', 'Rome', 'Greece', 'Egypt', 'Babylon',
  'Hiroshima', 'Nagasaki', 'Chernobyl', 'Fukushima'
]);

/**
 * Extract facts from text using all patterns
 */
function extractFacts(text, language = 'english') {
  const facts = {
    years: [],
    numbers: [],
    percentages: [],
    distances: [],
    weights: [],
    temperatures: [],
    speeds: [],
    durations: [],
    money: [],
    scientific: [],
    properNouns: [],
    hindiNumbers: []
  };

  if (!text) return facts;

  // Extract each type of fact
  for (const [patternName, pattern] of Object.entries(PATTERNS)) {
    const matches = text.match(pattern) || [];

    if (patternName === 'properNouns') {
      // Filter proper nouns
      const filtered = matches.filter(match => {
        // Keep known entities
        if (KNOWN_ENTITIES.has(match)) return true;
        // Exclude common words
        if (EXCLUDED_WORDS.has(match)) return false;
        // Keep multi-word proper nouns
        if (match.includes(' ')) return true;
        // Keep if it appears to be a name (not at sentence start context)
        return match.length > 2;
      });
      facts[patternName] = [...new Set(filtered)];
    } else {
      facts[patternName] = [...new Set(matches)];
    }
  }

  return facts;
}

/**
 * Get script text from a topic (full script or compiled from shots)
 */
function getScriptText(topic) {
  const scripts = {
    english: '',
    hindi: ''
  };

  // Try full scripts first
  if (topic.script_english) {
    scripts.english = topic.script_english;
  } else if (topic.shots && topic.shots.length > 0) {
    // Compile from shots
    scripts.english = topic.shots
      .map(s => s.narration || '')
      .filter(Boolean)
      .join(' ');
  }

  if (topic.script_hindi) {
    scripts.hindi = topic.script_hindi;
  } else if (topic.shots && topic.shots.length > 0) {
    scripts.hindi = topic.shots
      .map(s => s.narration_hindi || '')
      .filter(Boolean)
      .join(' ');
  }

  // Also include hook if available
  if (topic.hook) {
    scripts.hindi = topic.hook + ' ' + scripts.hindi;
  }
  if (topic.hook_english) {
    scripts.english = topic.hook_english + ' ' + scripts.english;
  }

  return scripts;
}

/**
 * Highlight facts in text with markers
 */
function highlightFacts(text, facts) {
  if (!text) return text;

  let highlighted = text;
  const allFacts = [];

  // Collect all facts with their categories
  for (const [category, items] of Object.entries(facts)) {
    for (const item of items) {
      allFacts.push({ text: item, category });
    }
  }

  // Sort by length (longest first) to avoid partial replacements
  allFacts.sort((a, b) => b.text.length - a.text.length);

  // Apply highlights
  for (const fact of allFacts) {
    const escaped = fact.text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`\\b${escaped}\\b`, 'g');
    highlighted = highlighted.replace(regex, `【${fact.category.toUpperCase()}: ${fact.text}】`);
  }

  return highlighted;
}

/**
 * Generate category label
 */
function getCategoryLabel(category) {
  const labels = {
    years: '📅 Years/Dates',
    numbers: '🔢 Numbers',
    percentages: '📊 Percentages',
    distances: '📏 Distances',
    weights: '⚖️ Weights',
    temperatures: '🌡️ Temperatures',
    speeds: '💨 Speeds',
    durations: '⏱️ Durations',
    money: '💰 Money',
    scientific: '🔬 Scientific',
    properNouns: '📍 Names/Places',
    hindiNumbers: '🇮🇳 Hindi Numbers'
  };
  return labels[category] || category;
}

/**
 * Count total facts
 */
function countFacts(facts) {
  return Object.values(facts).reduce((sum, arr) => sum + arr.length, 0);
}

/**
 * Process a single topic
 */
function processTopic(topic) {
  const scripts = getScriptText(topic);

  const englishFacts = extractFacts(scripts.english, 'english');
  const hindiFacts = extractFacts(scripts.hindi, 'hindi');

  return {
    topic_id: topic.topic_id,
    title: topic.title,
    title_hindi: topic.title_hindi || '',
    category: topic.category,
    scripts: {
      english: scripts.english,
      hindi: scripts.hindi
    },
    facts: {
      english: englishFacts,
      hindi: hindiFacts
    },
    highlighted: {
      english: highlightFacts(scripts.english, englishFacts),
      hindi: highlightFacts(scripts.hindi, hindiFacts)
    },
    summary: {
      english_fact_count: countFacts(englishFacts),
      hindi_fact_count: countFacts(hindiFacts)
    }
  };
}

/**
 * Generate JSON report
 */
function generateJSONReport(results) {
  const report = {
    generated_at: new Date().toISOString(),
    total_topics: results.length,
    summary: {
      total_english_facts: results.reduce((sum, r) => sum + r.summary.english_fact_count, 0),
      total_hindi_facts: results.reduce((sum, r) => sum + r.summary.hindi_fact_count, 0),
      by_category: {}
    },
    topics: results
  };

  // Aggregate by category
  const categoryTotals = {};
  for (const result of results) {
    for (const [category, items] of Object.entries(result.facts.english)) {
      if (!categoryTotals[category]) categoryTotals[category] = new Set();
      items.forEach(item => categoryTotals[category].add(item));
    }
  }

  report.summary.by_category = {};
  for (const [category, items] of Object.entries(categoryTotals)) {
    report.summary.by_category[category] = {
      unique_count: items.size,
      items: [...items].slice(0, 20) // First 20 unique items
    };
  }

  return report;
}

/**
 * Generate HTML report
 */
function generateHTMLReport(results) {
  const totalEnglish = results.reduce((sum, r) => sum + r.summary.english_fact_count, 0);
  const totalHindi = results.reduce((sum, r) => sum + r.summary.hindi_fact_count, 0);

  let html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Fact Extraction Report - Content.too.foo</title>
  <style>
    :root {
      --bg-primary: #ffffff;
      --bg-secondary: #f8f9fa;
      --bg-elevated: #f0f2f5;
      --text-primary: #1a1a1a;
      --text-secondary: #4a4a4a;
      --accent: #0066cc;
      --border: #e0e0e0;
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }

    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
      background: var(--bg-primary);
      color: var(--text-primary);
      line-height: 1.6;
      padding: 2rem;
    }

    h1 {
      font-size: 2rem;
      margin-bottom: 0.5rem;
    }

    .subtitle {
      color: var(--text-secondary);
      margin-bottom: 2rem;
    }

    .stats {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1rem;
      margin-bottom: 2rem;
    }

    .stat-card {
      background: var(--bg-secondary);
      padding: 1rem;
      border-radius: 8px;
      border: 1px solid var(--border);
    }

    .stat-value {
      font-size: 2rem;
      font-weight: 700;
      color: var(--accent);
    }

    .stat-label {
      color: var(--text-secondary);
      font-size: 0.875rem;
    }

    .topic-card {
      background: var(--bg-secondary);
      border: 1px solid var(--border);
      border-radius: 8px;
      margin-bottom: 1.5rem;
      overflow: hidden;
    }

    .topic-header {
      background: var(--bg-elevated);
      padding: 1rem;
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .topic-header:hover {
      background: #e8eaed;
    }

    .topic-title {
      font-weight: 600;
    }

    .topic-id {
      color: var(--accent);
      font-weight: 700;
      margin-right: 0.5rem;
    }

    .topic-category {
      background: var(--accent);
      color: white;
      padding: 0.25rem 0.5rem;
      border-radius: 4px;
      font-size: 0.75rem;
      text-transform: uppercase;
    }

    .topic-content {
      display: none;
      padding: 1rem;
    }

    .topic-content.open {
      display: block;
    }

    .script-section {
      margin-bottom: 1.5rem;
    }

    .script-section h4 {
      font-size: 0.875rem;
      color: var(--text-secondary);
      margin-bottom: 0.5rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    .highlighted-text {
      background: white;
      padding: 1rem;
      border-radius: 4px;
      border: 1px solid var(--border);
      white-space: pre-wrap;
      font-size: 0.9rem;
      line-height: 1.8;
    }

    .facts-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1rem;
    }

    .fact-category {
      background: white;
      padding: 0.75rem;
      border-radius: 4px;
      border: 1px solid var(--border);
    }

    .fact-category h5 {
      font-size: 0.8rem;
      color: var(--text-secondary);
      margin-bottom: 0.5rem;
    }

    .fact-items {
      display: flex;
      flex-wrap: wrap;
      gap: 0.25rem;
    }

    .fact-item {
      background: var(--bg-elevated);
      padding: 0.125rem 0.5rem;
      border-radius: 4px;
      font-size: 0.8rem;
      font-family: monospace;
    }

    /* Highlight colors by category */
    .fact-YEARS { background: #fff3cd; }
    .fact-NUMBERS { background: #cfe2ff; }
    .fact-PERCENTAGES { background: #d1e7dd; }
    .fact-DISTANCES { background: #f8d7da; }
    .fact-WEIGHTS { background: #e2d9f3; }
    .fact-TEMPERATURES { background: #ffd6d6; }
    .fact-SPEEDS { background: #d4edda; }
    .fact-DURATIONS { background: #fff0e6; }
    .fact-MONEY { background: #d4f0c4; }
    .fact-SCIENTIFIC { background: #e7e6ff; }
    .fact-PROPERNOUNS { background: #ffe6f0; }
    .fact-HINDINUMBERS { background: #ffecd2; }

    .toggle-btn {
      background: none;
      border: none;
      font-size: 1.25rem;
      cursor: pointer;
    }

    .filter-bar {
      margin-bottom: 1.5rem;
      display: flex;
      gap: 0.5rem;
      flex-wrap: wrap;
    }

    .filter-btn {
      padding: 0.5rem 1rem;
      border: 1px solid var(--border);
      border-radius: 4px;
      background: white;
      cursor: pointer;
      font-size: 0.875rem;
    }

    .filter-btn.active {
      background: var(--accent);
      color: white;
      border-color: var(--accent);
    }

    .search-box {
      padding: 0.5rem 1rem;
      border: 1px solid var(--border);
      border-radius: 4px;
      font-size: 0.875rem;
      min-width: 200px;
    }
  </style>
</head>
<body>
  <h1>📊 Fact Extraction Report</h1>
  <p class="subtitle">Generated: ${new Date().toLocaleString()} | ${results.length} topics analyzed</p>

  <div class="stats">
    <div class="stat-card">
      <div class="stat-value">${totalEnglish}</div>
      <div class="stat-label">English Facts</div>
    </div>
    <div class="stat-card">
      <div class="stat-value">${totalHindi}</div>
      <div class="stat-label">Hindi Facts</div>
    </div>
    <div class="stat-card">
      <div class="stat-value">${results.length}</div>
      <div class="stat-label">Topics Analyzed</div>
    </div>
  </div>

  <div class="filter-bar">
    <input type="text" class="search-box" placeholder="Search topics..." id="search">
    <button class="filter-btn active" data-filter="all">All</button>
    <button class="filter-btn" data-filter="high">High Facts (10+)</button>
    <button class="filter-btn" data-filter="low">Low Facts (<5)</button>
  </div>

  <div id="topics">
`;

  for (const result of results) {
    const factCount = result.summary.english_fact_count;
    html += `
    <div class="topic-card" data-facts="${factCount}" data-title="${result.title.toLowerCase()}">
      <div class="topic-header" onclick="toggleTopic(this)">
        <div>
          <span class="topic-id">#${result.topic_id}</span>
          <span class="topic-title">${result.title}</span>
          ${result.title_hindi ? `<br><small style="color: var(--text-secondary)">${result.title_hindi}</small>` : ''}
        </div>
        <div style="display: flex; align-items: center; gap: 1rem;">
          <span class="topic-category">${result.category}</span>
          <span style="color: var(--text-secondary)">${factCount} facts</span>
          <button class="toggle-btn">▼</button>
        </div>
      </div>
      <div class="topic-content">
        <div class="script-section">
          <h4>Highlighted Script (English)</h4>
          <div class="highlighted-text">${escapeHtml(result.highlighted.english).replace(/【([A-Z]+): ([^】]+)】/g, '<span class="fact-$1" title="$1">$2</span>')}</div>
        </div>
        ${result.highlighted.hindi ? `
        <div class="script-section">
          <h4>Highlighted Script (Hindi)</h4>
          <div class="highlighted-text">${escapeHtml(result.highlighted.hindi).replace(/【([A-Z]+): ([^】]+)】/g, '<span class="fact-$1" title="$1">$2</span>')}</div>
        </div>` : ''}
        <div class="script-section">
          <h4>Extracted Facts</h4>
          <div class="facts-grid">
            ${Object.entries(result.facts.english)
              .filter(([_, items]) => items.length > 0)
              .map(([category, items]) => `
                <div class="fact-category">
                  <h5>${getCategoryLabel(category)}</h5>
                  <div class="fact-items">
                    ${items.map(item => `<span class="fact-item">${escapeHtml(item)}</span>`).join('')}
                  </div>
                </div>
              `).join('')}
          </div>
        </div>
      </div>
    </div>
`;
  }

  html += `
  </div>

  <script>
    function toggleTopic(header) {
      const content = header.nextElementSibling;
      const btn = header.querySelector('.toggle-btn');
      content.classList.toggle('open');
      btn.textContent = content.classList.contains('open') ? '▲' : '▼';
    }

    // Search functionality
    document.getElementById('search').addEventListener('input', function(e) {
      const query = e.target.value.toLowerCase();
      document.querySelectorAll('.topic-card').forEach(card => {
        const title = card.dataset.title;
        card.style.display = title.includes(query) ? 'block' : 'none';
      });
    });

    // Filter functionality
    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', function() {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');

        const filter = this.dataset.filter;
        document.querySelectorAll('.topic-card').forEach(card => {
          const facts = parseInt(card.dataset.facts);
          if (filter === 'all') {
            card.style.display = 'block';
          } else if (filter === 'high') {
            card.style.display = facts >= 10 ? 'block' : 'none';
          } else if (filter === 'low') {
            card.style.display = facts < 5 ? 'block' : 'none';
          }
        });
      });
    });
  </script>
</body>
</html>`;

  return html;
}

function escapeHtml(text) {
  if (!text) return '';
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * Main execution
 */
function main() {
  const args = process.argv.slice(2);
  const outputHtml = args.includes('--html');
  const topicArg = args.find(a => a.startsWith('--topic'));
  const specificTopic = topicArg ? parseInt(args[args.indexOf('--topic') + 1] || args[args.indexOf(topicArg) + 1]) : null;

  // Load data
  const dataPath = path.join(__dirname, '..', 'public', 'data.json');
  const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

  console.log(`📊 Analyzing ${data.length} topics for facts...\n`);

  // Process topics
  let topics = data;
  if (specificTopic) {
    topics = data.filter(t => t.topic_id === specificTopic);
    if (topics.length === 0) {
      console.error(`❌ Topic ${specificTopic} not found`);
      process.exit(1);
    }
  }

  const results = topics.map(processTopic);

  // Generate output
  if (outputHtml) {
    const html = generateHTMLReport(results);
    const outputPath = path.join(__dirname, '..', 'public', 'facts-report.html');
    fs.writeFileSync(outputPath, html);
    console.log(`✅ HTML report saved to: ${outputPath}`);
  } else {
    const report = generateJSONReport(results);
    const outputPath = path.join(__dirname, '..', 'public', 'facts-report.json');
    fs.writeFileSync(outputPath, JSON.stringify(report, null, 2));
    console.log(`✅ JSON report saved to: ${outputPath}`);
  }

  // Print summary
  const totalEnglish = results.reduce((sum, r) => sum + r.summary.english_fact_count, 0);
  const totalHindi = results.reduce((sum, r) => sum + r.summary.hindi_fact_count, 0);

  console.log(`\n📈 Summary:`);
  console.log(`   Topics analyzed: ${results.length}`);
  console.log(`   English facts: ${totalEnglish}`);
  console.log(`   Hindi facts: ${totalHindi}`);

  // Show top topics by fact count
  const sorted = [...results].sort((a, b) => b.summary.english_fact_count - a.summary.english_fact_count);
  console.log(`\n🏆 Top 5 topics by fact density:`);
  sorted.slice(0, 5).forEach((t, i) => {
    console.log(`   ${i + 1}. #${t.topic_id} ${t.title} - ${t.summary.english_fact_count} facts`);
  });
}

main();
