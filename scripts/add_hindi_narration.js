const fs = require('fs');

// Load data
const entries = JSON.parse(fs.readFileSync('/tmp/final_entries.json', 'utf-8'));
const storyboards = JSON.parse(fs.readFileSync('/mnt/c/Users/shivam/Downloads/Precision_Shorts_Storyboards_Master.json', 'utf-8'));

// Unit conversion functions for Hindi narration
function convertUnitsToIndian(text) {
  if (!text) return text;

  let result = text;

  // Convert USD to INR (90 Rs per dollar) with crore/lakh format
  // Match patterns like "$100 million", "$2.5 billion", "$500,000", etc.

  // Billions to crore (1 billion USD = 90 billion Rs = 9000 crore)
  result = result.replace(/\$(\d+(?:\.\d+)?)\s*billion/gi, (match, num) => {
    const usd = parseFloat(num);
    const inr = usd * 90; // billion Rs
    const crore = inr * 100; // 1 billion = 100 crore
    if (crore >= 100) {
      return `${(crore/100).toFixed(0)} lakh crore Rs`;
    }
    return `${crore.toFixed(0)} crore Rs`;
  });

  // Millions to crore/lakh (1 million USD = 90 million Rs = 9 crore)
  result = result.replace(/\$(\d+(?:\.\d+)?)\s*million/gi, (match, num) => {
    const usd = parseFloat(num);
    const inrMillions = usd * 90;
    const crore = inrMillions / 10; // 10 million = 1 crore
    if (crore >= 1) {
      return `${crore.toFixed(0)} crore Rs`;
    }
    const lakh = inrMillions / 0.1; // 0.1 million = 1 lakh
    return `${lakh.toFixed(0)} lakh Rs`;
  });

  // Thousands (1000 USD = 90,000 Rs = 0.9 lakh)
  result = result.replace(/\$(\d+(?:,\d{3})*(?:\.\d+)?)\s*(?:thousand|k)/gi, (match, num) => {
    const usd = parseFloat(num.replace(/,/g, ''));
    const inr = usd * 90 * 1000;
    const lakh = inr / 100000;
    if (lakh >= 1) {
      return `${lakh.toFixed(1)} lakh Rs`;
    }
    return `${(inr/1000).toFixed(0)} hazaar Rs`;
  });

  // Plain dollar amounts like $500, $1,000,000
  result = result.replace(/\$(\d{1,3}(?:,\d{3})*(?:\.\d+)?)/g, (match, num) => {
    const usd = parseFloat(num.replace(/,/g, ''));
    const inr = usd * 90;

    if (inr >= 10000000) { // 1 crore+
      return `${(inr/10000000).toFixed(1)} crore Rs`;
    } else if (inr >= 100000) { // 1 lakh+
      return `${(inr/100000).toFixed(1)} lakh Rs`;
    } else if (inr >= 1000) {
      return `${(inr/1000).toFixed(0)} hazaar Rs`;
    }
    return `${inr.toFixed(0)} Rs`;
  });

  // Convert miles to kilometers (1 mile = 1.6 km)
  result = result.replace(/(\d+(?:,\d{3})*(?:\.\d+)?)\s*miles?/gi, (match, num) => {
    const miles = parseFloat(num.replace(/,/g, ''));
    const km = miles * 1.6;
    if (km >= 1000) {
      return `${(km/1000).toFixed(1)} hazaar km`;
    }
    return `${km.toFixed(0)} km`;
  });

  // Convert feet to meters (1 foot = 0.3 m)
  result = result.replace(/(\d+(?:,\d{3})*(?:\.\d+)?)\s*(?:feet|foot|ft)/gi, (match, num) => {
    const feet = parseFloat(num.replace(/,/g, ''));
    const meters = feet * 0.3;
    if (meters >= 1000) {
      return `${(meters/1000).toFixed(1)} km`;
    }
    return `${meters.toFixed(0)} meter`;
  });

  // Convert inches to cm (1 inch = 2.54 cm)
  result = result.replace(/(\d+(?:\.\d+)?)\s*inch(?:es)?/gi, (match, num) => {
    const inches = parseFloat(num);
    const cm = inches * 2.54;
    return `${cm.toFixed(1)} cm`;
  });

  // Convert pounds to kg (1 lb = 0.45 kg)
  result = result.replace(/(\d+(?:,\d{3})*(?:\.\d+)?)\s*(?:pounds?|lbs?)/gi, (match, num) => {
    const lbs = parseFloat(num.replace(/,/g, ''));
    const kg = lbs * 0.45;
    return `${kg.toFixed(1)} kg`;
  });

  // Convert ounces to grams (1 oz = 28.35 g)
  result = result.replace(/(\d+(?:\.\d+)?)\s*(?:ounces?|oz)/gi, (match, num) => {
    const oz = parseFloat(num);
    const grams = oz * 28.35;
    return `${grams.toFixed(0)} gram`;
  });

  // Convert Fahrenheit to Celsius
  result = result.replace(/(\d+(?:\.\d+)?)\s*°?F(?:ahrenheit)?/gi, (match, num) => {
    const f = parseFloat(num);
    const c = (f - 32) * 5/9;
    return `${c.toFixed(0)}°C`;
  });

  // Convert mph to km/h
  result = result.replace(/(\d+(?:,\d{3})*(?:\.\d+)?)\s*mph/gi, (match, num) => {
    const mph = parseFloat(num.replace(/,/g, ''));
    const kmh = mph * 1.6;
    return `${kmh.toFixed(0)} km/h`;
  });

  // Convert gallons to liters (1 gallon = 3.78 L)
  result = result.replace(/(\d+(?:,\d{3})*(?:\.\d+)?)\s*gallons?/gi, (match, num) => {
    const gal = parseFloat(num.replace(/,/g, ''));
    const liters = gal * 3.78;
    return `${liters.toFixed(0)} liter`;
  });

  return result;
}

// Split Hindi script to match English narration segments
function splitHindiToMatchEnglish(hindiScript, englishNarrations) {
  if (!hindiScript || !englishNarrations || englishNarrations.length === 0) {
    return englishNarrations.map(() => '');
  }

  // Split Hindi into sentences
  const hindiSentences = hindiScript.split(/(?<=[।\.\?!])\s*/).filter(s => s.trim());

  // Calculate total English words
  const totalEnglishWords = englishNarrations.reduce((sum, n) => sum + (n ? n.split(/\s+/).length : 0), 0);

  // Distribute Hindi sentences proportionally
  const hindiNarrations = [];
  let hindiIndex = 0;

  for (let i = 0; i < englishNarrations.length; i++) {
    const englishWords = englishNarrations[i] ? englishNarrations[i].split(/\s+/).length : 0;
    const proportion = englishWords / totalEnglishWords;
    const targetHindiSentences = Math.max(1, Math.round(proportion * hindiSentences.length));

    // Collect Hindi sentences for this segment
    const segment = [];
    for (let j = 0; j < targetHindiSentences && hindiIndex < hindiSentences.length; j++) {
      segment.push(hindiSentences[hindiIndex]);
      hindiIndex++;
    }

    hindiNarrations.push(segment.join(' ').trim());
  }

  // If there are remaining Hindi sentences, add them to the last segment
  while (hindiIndex < hindiSentences.length) {
    hindiNarrations[hindiNarrations.length - 1] += ' ' + hindiSentences[hindiIndex];
    hindiIndex++;
  }

  return hindiNarrations;
}

// Process each storyboard
let processedCount = 0;
let errorCount = 0;

for (const storyboard of storyboards) {
  try {
    // Find matching entry
    const entry = entries.find(e => e.id === storyboard.topic_id);
    if (!entry || !entry.script_hindi) {
      console.log(`No Hindi script for topic ${storyboard.topic_id}: ${storyboard.title}`);
      errorCount++;
      continue;
    }

    // Get English narrations from shots
    const englishNarrations = storyboard.shots.map(s => s.narration);

    // Split Hindi script to match
    const hindiNarrations = splitHindiToMatchEnglish(entry.script_hindi, englishNarrations);

    // Add Hindi narration to each shot with unit conversion
    for (let i = 0; i < storyboard.shots.length; i++) {
      const hindiText = hindiNarrations[i] || '';
      storyboard.shots[i].narration_hindi = convertUnitsToIndian(hindiText);
    }

    processedCount++;
  } catch (e) {
    console.error(`Error processing topic ${storyboard.topic_id}: ${e.message}`);
    errorCount++;
  }
}

// Save updated storyboards
fs.writeFileSync(
  '/mnt/c/Users/shivam/Downloads/Precision_Shorts_Storyboards_Master.json',
  JSON.stringify(storyboards, null, 2)
);

// Also save individual files
for (const storyboard of storyboards) {
  const id = String(storyboard.topic_id).padStart(2, '0');
  fs.writeFileSync(
    `/tmp/storyboard_topic_${id}.json`,
    JSON.stringify(storyboard, null, 2)
  );
}

console.log(`\nProcessed: ${processedCount}/100`);
console.log(`Errors: ${errorCount}`);

// Show sample output
const sample = storyboards[0];
console.log(`\n=== Sample: ${sample.title} ===`);
console.log(`Shot 1 English: "${sample.shots[0].narration}"`);
console.log(`Shot 1 Hindi: "${sample.shots[0].narration_hindi}"`);
console.log(`\nShot 5 English: "${sample.shots[4].narration}"`);
console.log(`Shot 5 Hindi: "${sample.shots[4].narration_hindi}"`);
