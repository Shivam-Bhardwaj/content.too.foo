const fs = require('fs');
const path = require('path');

// Social media metadata for topics
const socialMediaData = {
  4: {
    youtube: {
      title: "Paper भी नहीं जाता बीच में 😱 #shorts",
      description: "No mortar. No metal tools. 500 साल से earthquake-proof। और हम copy नहीं कर सकते 🤯\n\nPeru में Sacsayhuamán — एक Inca fortress। 1500 AD में बना।\n\nPathar:\n🪨 100 ton से ज़्यादा वज़न\n📄 इतने precise कि paper भी नहीं जाता\n🔨 सिर्फ bronze chisels से बने\n\nPeru Pacific Ring of Fire पर है। Earthquakes आते रहते हैं।\n\nSpanish buildings गिर जाती हैं। Par Inca walls? वो DANCE करती हैं! 💃\n\nPathar shift होते हैं... फिर वापस perfect position में आ जाते हैं।\n\n500 साल। एक भी पत्थर नहीं गिरा।\n\nHumne laser scanning use की। Computer modeling। Diamond-tipped tools।\n\nफिर भी match नहीं कर सकते 🤷\n\n—\nIncas का secret क्या था? Comment करो 👇",
      tags: "inca stonework hindi, sacsayhuaman hindi, ancient engineering hindi, peru history hindi, earthquake proof construction, ancient technology, machu picchu, archaeology hindi, science shorts, amazing facts hindi",
      pinned_comment: "500 साल से earthquake-proof 🪨\n\nModern technology से भी copy नहीं होता!\n\n👍 = Impossible\n💬 = कैसे बनाया होगा?"
    },
    instagram: {
      caption: "Paper भी नहीं जाता बीच में 📄\n\n100 ton पत्थर। No mortar। No metal tools।\n\n500 साल earthquakes आए। एक पत्थर नहीं गिरा 😱\n\nComment \"INCA\" more facts के लिए 👇\n\n#inca #peru #ancient #engineering #hindi #reels #history #archaeology #earthquake #mystery #viral #india #hindicontent #amazingfacts #stonework"
    },
    x: {
      post: "Paper भी नहीं जाता पत्थरों के बीच में 📄\n\n100 ton वज़न\nNo mortar\nNo metal tools\n\n500 साल earthquakes आए\nएक पत्थर नहीं गिरा 🪨\n\nLaser scanning से भी copy नहीं होता। Incas क्या जानते थे?"
    },
    hashtags: "#shorts #science #history #hindi #inca #peru #ancient #engineering #earthquake #mystery"
  },
  5: {
    youtube: {
      title: "1600 साल से Rust नहीं लगा 🇮🇳 #shorts",
      description: "Delhi में एक pillar खड़ी है जो exist नहीं करनी चाहिए 😱\n\n7 meter ऊंची। 6 ton iron। 400 AD में बनी।\n\n16 सदियों से:\n🌧️ Monsoons\n💨 Humidity\n🏭 Pollution\n\nकोई और iron अब तक rust का ढेर बन चुका होता। इस pillar पर मुश्किल से निशान है।\n\nScientists सोचते थे — secret alloy होगा। Coating होगी।\n\nGalat! ❌\n\n2002 में IIT Kanpur ने solve किया:\n\nAncient Indian ironsmiths ने accidentally ऐसी conditions create की जो RUST को ARMOR बना दे! 🛡️\n\nHigh phosphorus + oxidation = misawite layer\n\nRust खुद protection बन गया।\n\nआज यही technique bridges के लिए study हो रही है।\n\n—\n1600 साल पहले Indian blacksmiths ने वो solve किया जो आज भी challenge है 🇮🇳",
      tags: "delhi iron pillar hindi, qutub minar iron pillar, ancient india technology, rust proof iron, indian history hindi, gupta empire, metallurgy hindi, science shorts hindi, amazing facts india, incredible india",
      pinned_comment: "1600 साल पुराना rust-proof iron 🇮🇳\n\nMade in India!\n\n👍 = Proud Indian\n💬 = और कौनसी Indian discovery?"
    },
    instagram: {
      caption: "1600 साल से Rust नहीं लगा 🇮🇳\n\nDelhi में खड़ी है। Monsoons। Humidity। Pollution।\n\nSecret? Rust खुद armor बन गया 🛡️\n\nAncient Indian metallurgy > Modern science\n\nComment \"INDIA\" more facts के लिए 👇\n\n#delhi #iron #pillar #hindi #reels #india #history #science #ancient #technology #viral #hindicontent #amazingfacts #proudindian #incredibleindia"
    },
    x: {
      post: "1600 साल से rust नहीं लगा 🇮🇳\n\nDelhi Iron Pillar:\n• Monsoons में खड़ी\n• Pollution में खड़ी\n• फिर भी rust नहीं\n\nSecret? Rust खुद armor बन गया 🛡️\n\nAncient Indian blacksmiths 🙏"
    },
    hashtags: "#shorts #science #india #hindi #delhi #iron #ancient #technology #history #proudindian"
  },
  6: {
    youtube: {
      title: "500km दूर Earthquake पता चल जाता था 😱 #shorts",
      description: "132 AD। कोई electronics नहीं। कोई sensors नहीं। फिर भी 500 km दूर के earthquakes detect कर लेता था 🤯\n\nHan Dynasty को problem थी — earthquakes दूर के provinces तबाह करते, पर messengers आने तक बहुत देर हो जाती।\n\nZhang Heng ने बनाया — world's first seismoscope 🐉\n\n🏺 Bronze vessel\n🐲 8 dragons, हर एक के मुंह में ball\n🐸 नीचे 8 toads, मुंह खोले\n\nEarthquake आए → dragon ball गिराए → direction पता चल जाए\n\nCourt officials हंसे। फिर एक दिन ball गिरी। Capital में किसी ने कुछ feel नहीं किया।\n\nदिनों बाद news आई — 500 km दूर massive earthquake! Exactly जहां dragon point कर रहा था 😱\n\n2000 साल पहले। बिना sensors।\n\n—\nBlueprints खो गए। आज भी exact mechanism mystery है 🤔",
      tags: "zhang heng seismoscope hindi, ancient china invention, earthquake detector history, han dynasty hindi, ancient technology hindi, chinese history hindi, science shorts hindi, archaeology, amazing facts, invention history",
      pinned_comment: "2000 साल पहले earthquake detector 🐉\n\nबिना electronics!\n\n👍 = Genius\n💬 = Modern science से पहले और क्या बना था?"
    },
    instagram: {
      caption: "500km दूर Earthquake पता चल जाता था 🐉\n\n132 AD। No electronics। No sensors।\n\nDragon ball गिरे → direction पता चले\n\nCourt officials हंसे। फिर ball गिरी। 500km दूर earthquake आया 😱\n\nComment \"CHINA\" more facts के लिए 👇\n\n#china #ancient #earthquake #hindi #reels #history #science #invention #technology #viral #india #hindicontent #amazingfacts #seismoscope #handinasty"
    },
    x: {
      post: "132 AD में earthquake detector 🐉\n\nNo electronics\nNo sensors\n500km दूर detect करता था\n\nDragon ball गिरे → direction पता\n\nCourt officials हंसे। फिर 500km दूर earthquake आया। Exactly जहां dragon point कर रहा था 😱"
    },
    hashtags: "#shorts #science #china #hindi #ancient #earthquake #invention #history #technology #amazing"
  },
  1: {
    youtube: {
      title: "2000 साल पुराना Computer 😱 #shorts",
      description: "एक shipwreck में मिला ये device... और हमें 1400 साल लगे इसके बराबर आने में 🤯\n\n1901 में Greek divers ने एक corroded bronze का टुकड़ा खोजा। 70 साल तक museum की drawer में पड़ा रहा।\n\nफिर X-ray ने दिखाया — 30 precision gears! 😱\n\nये था Antikythera Mechanism:\n☀️ Solar eclipses predict करता था\n🌙 Moon phases calculate करता था\n🪐 5 planets track करता था\n🏛️ Olympic Games की dates बताता था\n\nAncient Greeks ने pocket-sized astronomical computer बनाया... फिर humanity भूल गई कैसे बनाना है।\n\n1400 साल बाद medieval clockmakers ने ऐसी complexity achieve की।\n\nसोचो — अगर ये accident से बचा, तो क्या और खो गया? 🌊\n\n—\nक्या तुम्हें लगता है और भी ancient tech समुद्र में छुपी है? Comment करो 👇",
      tags: "antikythera mechanism hindi, ancient computer, greek technology, ancient technology hindi, history mystery hindi, archaeology hindi, lost technology, science shorts hindi, history shorts, amazing facts hindi",
      pinned_comment: "2000 साल पुराना computer जो eclipses predict करता था! 🤯\n\n👍 = Mind blown\n💬 = कौनसी ancient mystery explore करूं?"
    },
    instagram: {
      caption: "2000 साल पुराना Computer 💻\n\nShipwreck में मिला। 30 precision gears। Solar eclipses predict करता था।\n\nAncient Greeks ने बनाया... फिर हम भूल गए 😱\n\nComment करो \"ANCIENT\" अगली mystery के लिए 👇\n\n#ancient #technology #history #hindi #reels #mystery #archaeology #science #greece #facts #viral #india #hindicontent #amazingfacts #antikythera"
    },
    x: {
      post: "2000 साल पुराना computer 💻\n\nShipwreck में मिला\n30 precision gears\nEclipses predict करता था\n\nAncient Greeks ने बनाया... फिर humanity भूल गई 🤯\n\nसोचो — और क्या खो गया?"
    },
    hashtags: "#shorts #science #history #hindi #ancient #technology #mystery #india #archaeology #facts"
  },
  2: {
    youtube: {
      title: "11,000 साल पुराना Observatory 🌟 #shorts",
      description: "इंसान ने लिखना नहीं सीखा था। खेती नहीं आती थी। फिर भी stars track कर रहे थे 😱\n\n1994 में एक Kurdish चरवाहे को अजीब पत्थर मिले। जो निकला उसने history हिला दी।\n\nGöbekli Tepe 🏛️\n• 20 ton के पत्थर\n• Perfect circles में arranged\n• Stonehenge से 2x पुराना\n• Pyramids से 5000 साल पुराना\n\nAur सबसे shocking? ये pillars Cygnus constellation के साथ aligned हैं! ⭐\n\nPrimitive hunter-gatherers astronomical observatory बना रहे थे!\n\nफिर 8000 BCE में... उन्होंने पूरी site दबा दी। क्यों? 🤔\n\nजैसे भविष्य के लिए message छोड़ रहे हों।\n\n—\nक्या civilization खेती से शुरू हुई... या खेती civilization से? Comment करो 👇",
      tags: "gobekli tepe hindi, ancient history hindi, archaeology hindi, ancient observatory, prehistoric civilization, turkey history, ancient mysteries hindi, stonehenge, science shorts hindi, history facts",
      pinned_comment: "11,000 साल पहले astronomical observatory 🌟\n\nWriting से पहले। Farming से पहले।\n\n👍 = Unbelievable\n💬 = और कौनसी ancient mystery?"
    },
    instagram: {
      caption: "11,000 साल पुराना Observatory 🌟\n\nLikhna नहीं आता था। खेती नहीं आती थी। Stars track कर रहे थे।\n\n20 ton पत्थर। Perfect circles। Stars से aligned।\n\nPhir 8000 BCE में पूरी site दबा दी 😱\n\nComment \"MYSTERY\" अगले topic के लिए 👇\n\n#gobekli #ancient #history #hindi #reels #archaeology #mystery #science #turkey #prehistoric #viral #india #hindicontent #amazingfacts #civilization"
    },
    x: {
      post: "11,000 साल पुराना astronomical observatory 🌟\n\nलिखना नहीं आता था\nखेती नहीं आती थी\nStars track कर रहे थे\n\n20 ton पत्थर। Cygnus से aligned।\n\nफिर उन्होंने पूरी site दबा दी। क्यों? 🤔"
    },
    hashtags: "#shorts #science #history #hindi #ancient #archaeology #mystery #india #gobekli #civilization"
  },
  3: {
    youtube: {
      title: "2000 साल बाद भी खड़ा है 🏛️ #shorts",
      description: "Modern concrete 50 साल में गिर जाता है। Roman concrete 2000 साल से खड़ा है।\n\n2023 में MIT ने finally solve किया 🔬\n\nPantheon — दुनिया का सबसे बड़ा unreinforced concrete dome। 125 AD में बना। अभी भी perfect।\n\nRecipe पता थी:\n• Volcanic ash\n• Seawater\n• Lime\n\nCopy करते थे। फिर भी crack होता था। क्यों?\n\nMIT scientists ने microscope से देखा — छोटे white chunks मिले। Lime clasts। ये है secret! 🤫\n\nजब crack बनती है:\n💧 Rainwater अंदर जाता है\n�ite Lime से react करता है\n✨ Crack खुद heal हो जाती है!\n\nSelf-healing concrete। Romans ने 2000 साल पहले बनाया। हम अभी समझे।\n\n—\nकभी कभी best technology नई नहीं होती... बस भूली हुई होती है 🧠",
      tags: "roman concrete hindi, self healing concrete, pantheon rome, ancient technology hindi, MIT discovery, construction science hindi, engineering hindi, rome history hindi, science shorts, amazing facts",
      pinned_comment: "Self-healing concrete 🏛️ Romans ने 2000 साल पहले बनाया!\n\n👍 = Ancient wisdom\n💬 = और कौनसी forgotten technology?"
    },
    instagram: {
      caption: "2000 साल बाद भी खड़ा है 🏛️\n\nModern concrete: 50 साल\nRoman concrete: 2000+ साल\n\nSecret? Self-healing! Crack आए तो खुद repair हो जाए 🤯\n\n2023 में MIT ने finally solve किया।\n\nComment \"ROMAN\" more facts के लिए 👇\n\n#roman #concrete #engineering #hindi #reels #science #ancient #technology #rome #construction #viral #india #hindicontent #amazingfacts #architecture"
    },
    x: {
      post: "Modern concrete: 50 साल में टूटता है\nRoman concrete: 2000 साल से खड़ा है 🏛️\n\nSecret? Self-healing!\n\nCrack आए → Rainwater react करे → खुद repair हो जाए ✨\n\n2023 में MIT ने finally समझा।"
    },
    hashtags: "#shorts #science #history #hindi #roman #concrete #engineering #india #ancient #technology"
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
