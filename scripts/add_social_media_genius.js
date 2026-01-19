const fs = require('fs');
const path = require('path');

// Social media metadata for Genius category topics (15-19)
const socialMediaData = {
  15: {
    youtube: {
      title: "इस आदमी ने Modern World बनाई 🔧 #shorts",
      description: "आपने जो भी machine use की है... एक आदमी के जुनून की वजह से exist करती है 😱\n\nHenry Maudslay — एक blacksmith का बेटा।\n\n1700s में manufacturing chaos थी:\n❌ हर screw हाथ से बनता\n❌ हर part unique\n❌ कुछ भी interchangeable नहीं\n\nMaudslay का idea: अगर machines, machines बना सकें? 🤔\n\nउसने screw-cutting lathe invent किया — पहली machine जो identical parts बना सके!\n\nPar असली genius?\n\nLord Chancellor — एक measuring device जो 1 inch के 10,000वें हिस्से तक accurate था! 📏\n\nहाथ के काम के ज़माने में यह superpower था।\n\nउसके students:\n⚡ James Nasmyth — steam hammer\n🔩 Joseph Whitworth — worldwide screws standardize किए\n\nहर precision tool इसी workshop से शुरू हुआ!\n\n—\nMaudslay मानता था flat surfaces सारी precision की foundation हैं।\n\nहफ्तों एक flat plate perfect करने में लगाता था।\n\nआज इसे 'surface plate metrology' कहते हैं — अभी भी सबसे precise instruments इसी से calibrate होते हैं। 🎯",
      tags: "henry maudslay hindi, industrial revolution hindi, machine tools history, screw cutting lathe, precision engineering hindi, inventor biography hindi, manufacturing history, science shorts, engineering genius, workshop history",
      pinned_comment: "एक blacksmith के बेटे ने modern manufacturing बनाई 🔧\n\n👍 = Precision matters\n💬 = और कौनसे unsung geniuses?"
    },
    instagram: {
      caption: "इस आदमी ने Modern World बनाई 🔧\n\nMachines जो machines बनाएं — यह idea था Henry Maudslay का।\n\n10,000x accurate measurements। Students ने Industrial Revolution बनाई 😱\n\nComment \"MAUDSLAY\" more geniuses के लिए 👇\n\n#maudslay #engineering #industrial #hindi #reels #history #inventor #precision #machine #manufacturing #viral #india #hindicontent #amazingfacts #genius"
    },
    x: {
      post: "Henry Maudslay — blacksmith का बेटा 🔧\n\n\"Machines जो machines बनाएं\"\n\n10,000x accurate measurements\nStudents ने Industrial Revolution बनाई\n\nहर precision tool इसी workshop से शुरू हुआ।\n\nOne man's obsession = Modern world."
    },
    hashtags: "#shorts #engineering #history #hindi #maudslay #industrial #inventor #precision #machine #genius"
  },
  16: {
    youtube: {
      title: "Carpenter ने Scientists को हराया ⏰ #shorts",
      description: "हज़ारों sailors मरे क्योंकि कोई नहीं जानता था वो समुद्र में कहाँ हैं 😱\n\nएक self-taught carpenter ने solve किया जो greatest scientists नहीं कर पाए।\n\n40 साल लगे।\n\n1707 — 4 British warships rocks से टकराईं। 2,000 आदमी एक रात में डूब गए।\n\nProblem?\n⭐ Latitude — stars से calculate हो जाता\n❓ Longitude — Impossible!\n\nParliament ने ₹180 crore+ का prize रखा।\n\nScientists moon use करना चाहते थे।\n\nJohn Harrison, carpenter, के पास अलग idea था:\n\n⏰ एक clock इतनी precise कि समुद्र पर perfect time रखे!\n\nसबने हंसा। Temperature, humidity, ship की motion — clock कैसे काम करेगी?\n\n40 साल। 4 revolutionary timepieces।\n\nH4 — 81 दिन में सिर्फ 5 seconds lose किए! ⚡\n\nPar tragedy:\n\nScientists ने accept नहीं किया कि working-class craftsman ने उन्हें हराया।\n\nबार-बार test करवाया। Impossible standards माँगे।\n\n80 साल की उम्र में finally prize मिला। 3 साल बाद मर गए।\n\n—\nGPS, smartphone maps, airplane navigation — सब TIME से position calculate करते हैं।\n\nHarrison ने modern navigation का principle invent किया। 🧭",
      tags: "john harrison hindi, longitude problem, marine chronometer, navigation history hindi, inventor biography hindi, clock history, gps history, science shorts, sailing history, harrison clock",
      pinned_comment: "Scientists ने 40 साल तक एक carpenter को ignore किया ⏰\n\nGPS का principle इसी ने invent किया!\n\n👍 = Respect\n💬 = और कौनसे ignored geniuses?"
    },
    instagram: {
      caption: "Carpenter ने Scientists को हराया ⏰\n\n40 साल। 4 clocks। 81 दिन में 5 seconds loss।\n\nScientists ने accept नहीं किया। 80 साल की उम्र में prize मिला 😢\n\nGPS का principle इसी ने बनाया!\n\nComment \"HARRISON\" more stories के लिए 👇\n\n#harrison #longitude #clock #hindi #reels #navigation #inventor #history #gps #science #viral #india #hindicontent #amazingfacts #genius"
    },
    x: {
      post: "John Harrison — self-taught carpenter ⏰\n\nScientists हंसे\n40 साल लगे\n81 दिन में 5 seconds loss\n\nScientific establishment ने accept नहीं किया\n80 साल की उम्र में prize मिला\n\nGPS? Smartphone maps? Harrison का principle। 🧭"
    },
    hashtags: "#shorts #history #navigation #hindi #harrison #clock #longitude #gps #inventor #genius"
  },
  17: {
    youtube: {
      title: "1840 में Screw नहीं मिलता था 🔩 #shorts",
      description: "इस आदमी से पहले, हर screw एक snowflake था — unique और कहीं और बेकार 😱\n\nJoseph Whitworth 1 inch का 10 लाखवाँ हिस्सा detect कर सकता था!\n\n1840 में replacement screw खरीदना:\n\n❌ नहीं खरीद सकते थे\n❌ हर manufacturer का अपना pattern\n❌ हर bolt को custom nut चाहिए\n❌ Machine repair? Original maker चाहिए\n\nIndustrial chaos था।\n\nWhitworth ने Henry Maudslay की workshop में काम किया।\n\nउसने measuring machine बनाई — 1 inch का 10 लाखवाँ हिस्सा detect करे!\n\nLight की wavelength से भी छोटी distance। 🔬\n\nPhir revolutionary काम:\n\n📐 Screw threads STANDARDIZE किए\n📏 Specific angles, pitches, diameters\n\nWhitworth thread — history का पहला standardized fastener system!\n\nPar असली contribution?\n\n💡 Standardization का concept standardize किया!\n\nLondon में बनाओ, Sydney में repair करो।\n\n—\nWorld War II में America-Britain के different standards से soldiers मरे।\n\nतब universal standards adopt हुए — Whitworth के principles पर!\n\nहर nut जो हर bolt में fit हो? Whitworth की spirit। 🔩",
      tags: "joseph whitworth hindi, screw standardization, industrial revolution hindi, precision measurement, engineering history hindi, bolt nut history, manufacturing standards, science shorts, whitworth thread, inventor biography",
      pinned_comment: "1840 में replacement screw नहीं मिलता था 🔩\n\nWhitworth ने standardization invent किया!\n\n👍 = Standards matter\n💬 = और कौनसी industrial revolutions?"
    },
    instagram: {
      caption: "1840 में Screw नहीं मिलता था 🔩\n\nहर screw unique। Whitworth ने STANDARDIZE किया।\n\n1 inch का 10 लाखवाँ हिस्सा measure करता था 😱\n\nComment \"WHITWORTH\" more facts के लिए 👇\n\n#whitworth #screw #standard #hindi #reels #engineering #inventor #history #industrial #precision #viral #india #hindicontent #amazingfacts #manufacturing"
    },
    x: {
      post: "1840 में replacement screw? 🔩\n\nनहीं मिलता था।\nहर manufacturer का अपना pattern।\n\nJoseph Whitworth ने standardize किया।\n1 inch का 10 लाखवाँ हिस्सा measure करता था।\n\nहर nut जो हर bolt में fit हो? Whitworth।"
    },
    hashtags: "#shorts #engineering #history #hindi #whitworth #screw #standard #industrial #precision #inventor"
  },
  18: {
    youtube: {
      title: "2 Germans ने सब कुछ दिखाया 🔬 #shorts",
      description: "हर cancer cell जो detect हुआ। हर microchip जो बनी। सब दिखती हैं क्योंकि 2 German obsessives ने 'good enough' accept नहीं किया 😱\n\n1840s में microscope lens बनाना art था, science नहीं।\n\n❓ कुछ lenses brilliant\n❓ ज़्यादातर mediocre\n❓ कोई नहीं जानता था क्यों\n\nCarl Zeiss, young instrument maker, frustrated था।\n\nहर lens perfect चाहिए था।\n\nउसने physicist Ernst Abbe को hire किया। 🔬\n\nAbbe ने mathematical formulas create किए:\n\n📐 Exactly predict करो light glass से कैसे behave करेगी\n✏️ Lenses paper पर design करो, बनाने से पहले!\n\nNo more guessing. Pure science.\n\nPar problem: existing glass pure नहीं था।\n\nOtto Schott के साथ मिलकर — नए types का optical glass invent किया!\n\n—\nMind-blowing part?\n\nAbbe ने 1889 में workers को दिया:\n✅ Profit-sharing\n✅ 8-hour workdays\n✅ Pensions\n\n\"Precision के लिए खुश workers चाहिए!\"\n\nआज Zeiss optics:\n📱 Smartphone cameras में\n💻 Chip-making machines में\n🏥 Disease-detecting microscopes में\n\nDo perfectionists ने humanity को सब कुछ देखने में मदद की। 👁️",
      tags: "carl zeiss hindi, ernst abbe, optical glass history, microscope history hindi, zeiss optics, lens science, german inventors hindi, precision optics, science shorts, inventor biography",
      pinned_comment: "1889 में 8-hour workday दी थी! 🔬\n\n\"Precision के लिए खुश workers चाहिए\"\n\n👍 = Visionary thinking\n💬 = Zeiss की कौनसी optics use करते हो?"
    },
    instagram: {
      caption: "2 Germans ने सब कुछ दिखाया 🔬\n\nCarl Zeiss + Ernst Abbe = Optics की revolution।\n\n1889 में workers को 8-hour day + profit sharing दी 😱\n\nआज: Smartphone cameras, microscopes, chip machines।\n\nComment \"ZEISS\" more stories के लिए 👇\n\n#zeiss #abbe #optics #hindi #reels #microscope #lens #science #inventor #history #viral #india #hindicontent #amazingfacts #german"
    },
    x: {
      post: "Carl Zeiss + Ernst Abbe 🔬\n\nMicroscope lenses = guesswork थी\nइन्होंने science बनाया\n\n1889 में workers को:\n• 8-hour workday\n• Profit-sharing\n• Pensions\n\nआज: Smartphone cameras, chip machines, microscopes।\n\nPerfectionists जिन्होंने humanity को देखना सिखाया 👁️"
    },
    hashtags: "#shorts #zeiss #optics #hindi #microscope #lens #science #inventor #history #german"
  },
  19: {
    youtube: {
      title: "Moon से Miss हो सकते थे 🌙 #shorts",
      description: "Apollo astronauts Moon से हज़ारों miles miss कर सकते थे 😱\n\nएक MIT professor के gyroscopes के जुनून ने उन्हें feet के अंदर land करवाया।\n\nCharles Stark Draper — 1930s में एक crazy idea:\n\n✈️ अगर aircraft बिना बाहर देखे navigate करें?\n\nसिर्फ gyroscopes और accelerometers से हर छोटी movement measure करो...\n\n...machine exactly calculate करे कहाँ है!\n\n❌ No radio signals\n❌ No stars\n❌ No landmarks\n✅ Pure physics\n\nसबने कहा: Impossible!\n\nGyroscopes drift करते हैं। Errors accumulate होते हैं।\n\nDraper ने gyroscopes बनाए — पहले से MILLION गुना ज़्यादा precise! 🎯\n\nNASA ने बुलाया Moon mission के लिए।\n\nApollo Guidance Computer = Draper का inertial navigation system।\n\n🚀 40,000 km/h speed\n🌙 3,84,000 km दूर target\n⚠️ Error margin = essentially ZERO\n\nNeil Armstrong planned spot से feet दूर land हुए!\n\n—\nआज:\n🚢 हर submarine\n🛡️ हर missile defense system\n🛸 हर spacecraft\n\nInertial navigation use करते हैं।\n\nDraper ने machines को सिखाया: feel करो कहाँ से गुज़रे हो। 🧭",
      tags: "charles draper hindi, inertial navigation, apollo guidance computer, gyroscope history, MIT inventor, moon landing hindi, navigation science hindi, spacecraft navigation, science shorts, aviation history",
      pinned_comment: "Moon से miss हो सकते थे 🌙\n\nEk MIT professor के gyroscopes ने बचाया!\n\n👍 = Pure physics\n💬 = और कौनसी space technologies?"
    },
    instagram: {
      caption: "Moon से Miss हो सकते थे 🌙\n\n40,000 km/h। 3,84,000 km दूर। Error margin = 0।\n\nDraper के gyroscopes — million गुना precise 😱\n\nNeil Armstrong feet के अंदर land हुए!\n\nComment \"DRAPER\" more space facts के लिए 👇\n\n#draper #apollo #moon #hindi #reels #navigation #gyroscope #nasa #space #mit #viral #india #hindicontent #amazingfacts #astronaut"
    },
    x: {
      post: "Moon से miss हो सकते थे 🌙\n\n40,000 km/h speed\n3,84,000 km target\nError margin = 0\n\nCharles Draper के gyroscopes — million गुना precise\n\nNeil Armstrong feet के अंदर land हुए।\n\nआज हर submarine, spacecraft यही use करते हैं। 🧭"
    },
    hashtags: "#shorts #apollo #moon #hindi #draper #navigation #gyroscope #nasa #space #mit"
  }
};

// Load data.json
const dataPath = path.join(__dirname, '..', 'public', 'data.json');
const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));

// Update topics with social media data
let updated = 0;
for (const [topicId, socialMedia] of Object.entries(socialMediaData)) {
  const topic = data.find(t => t.topic_id === parseInt(topicId));
  if (topic) {
    topic.social_media = socialMedia;
    updated++;
    console.log(`✓ Updated topic ${topicId}: ${topic.title}`);
  } else {
    console.log(`✗ Topic ${topicId} not found`);
  }
}

// Save updated data
fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
console.log(`\nSaved ${updated} topics to data.json`);
