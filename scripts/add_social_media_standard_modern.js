const fs = require('fs');
const path = require('path');

// Social media metadata for Standard (20-24) and Modern (25-30) topics
const socialMediaData = {
  20: {
    youtube: {
      title: "3 Inch से War जीत गए 🚂 #shorts",
      description: "American Civil War partially isliye jeeta kyunki trains enemy territory cross नहीं कर सकती थीं 😱\n\nTrack widths war के weapons बन गए!\n\nJab railroads आए:\n❌ Britain — एक width\n❌ Russia — wider (specifically ताकि enemy trains invade न करें!)\n❌ America — chaos\n\nSouth ने deliberately North से different gauges use किए।\n\nWar में:\n\n🚂 Union supplies हर gauge change पर unload/reload\n💀 Confederacy सोचती थी different gauge protect करेगा\n\nInstead, उन्हें destroy किया!\n\nApni ही territory में efficiently move नहीं कर सकते थे।\n\nWar के बाद, May 31, 1886:\n\n⚡ 36 hours में\n📏 18,400 km track\n📐 3 inch shift किया\n\n'Great Gauge Change' 🔧\n\n—\nMind-blowing: Russia आज भी wider gauge use करता है — invasion slow करने के लिए!\n\nTrack width = National security.\n\n3 inches ने history बदल दी।",
      tags: "railroad gauge war hindi, american civil war trains, track width history, great gauge change, railway standardization, civil war logistics, train history hindi, railroad history, science shorts, engineering history",
      pinned_comment: "3 inch ने Civil War का result बदला 🚂\n\nRussia आज भी wider gauge use करता है!\n\n👍 = Standards matter\n💬 = और कौनसे standards ने wars shape किए?"
    },
    instagram: {
      caption: "3 Inch से War जीत गए 🚂\n\nSouth ने different track width रखी। Backfire हो गया।\n\n36 hours में 18,400 km track shift किया 😱\n\nComment \"GAUGE\" more history के लिए 👇\n\n#railroad #gauge #civilwar #hindi #reels #history #trains #war #standards #america #viral #india #hindicontent #amazingfacts #engineering"
    },
    x: {
      post: "Track width से war जीती 🚂\n\nSouth ने different gauge रखी\nसोचा protect करेगी\nInstead, destroy किया\n\n36 hours में 18,400 km track 3 inch shift\n\nRussia आज भी wider gauge use करता है — invasion slow करने के लिए।"
    },
    hashtags: "#shorts #railroad #history #hindi #civilwar #trains #gauge #standards #war #engineering"
  },
  21: {
    youtube: {
      title: "Elephant को Electrocute किया 🐘 #shorts",
      description: "Thomas Edison ने elephant electrocute किया prove करने के लिए rival की technology deadly है 😱\n\nफिर भी हार गया।\n\n'War of Currents' — science की सबसे dirty fight।\n\nEdison का empire: DC (Direct Current)\n✅ Famous light bulbs power करता था\n❌ दूर नहीं जा सकता था — हर mile पर power plant चाहिए\n\nNikola Tesla आया AC के साथ:\n✅ Hundreds of miles travel कर सकता था\n✅ Minimal loss\n\nEdison ने देखा fortune slip हो रही है...\n\nHistory का पहला corporate disinformation campaign! 📰\n\n🐕 Dogs electrocute किए\n🐴 Horses electrocute किए\n🐘 Topsy elephant electrocute किया\n\n\"AC dangerous है!\"\n\n'Electrocution' word भी invent किया!\n\nPar twist:\n\nEdison के अपने engineers जानते थे AC better है। Defect कर गए! 🏃\n\n1893 World's Fair — Westinghouse + Tesla ने AC से light की। Half price।\n\nGame over.\n\n—\nTumhari wall का हर outlet? Tesla का current।\n\nImmigrant genius जीता। 🔌",
      tags: "tesla vs edison hindi, war of currents, AC vs DC, nikola tesla hindi, thomas edison, electricity history hindi, alternating current, topsy elephant, science history, inventor rivalry",
      pinned_comment: "Edison ने elephant electrocute किया 🐘\n\nPhir भी Tesla जीता!\n\n👍 = AC forever\n💬 = Tesla vs Edison — किसकी side?"
    },
    instagram: {
      caption: "Elephant को Electrocute किया 🐘\n\nEdison vs Tesla। History की dirtiest fight।\n\nEdison हार गया। तुम्हारी wall में Tesla का current है 🔌\n\nComment \"TESLA\" more battles के लिए 👇\n\n#tesla #edison #electricity #hindi #reels #ac #dc #current #war #science #viral #india #hindicontent #amazingfacts #inventor"
    },
    x: {
      post: "Edison ने elephant electrocute किया 🐘\n\nProve करना था AC dangerous है\n\nTesla phir bhi jeeta।\n\nTumhari wall का हर outlet?\nBahar की हर power line?\n\nTesla का current। 🔌\n\nImmigrant genius जीता।"
    },
    hashtags: "#shorts #tesla #edison #hindi #electricity #ac #dc #current #science #inventor"
  },
  22: {
    youtube: {
      title: "10 दिन गायब हो गए 📅 #shorts",
      description: "1582 में 10 दिन simply गायब हो गए 😱\n\nलोग October 4 को सोए और October 15 को उठे!\n\nRoman calendar में problem थी:\n⏰ हर साल 11 minutes gain होते थे\n🐰 1500s तक Easter summer में drift हो रहा था\n\nPope Gregory XIII ने fix किया — 10 दिन delete करके!\n\nCatholic countries: ✅ मान लिया\nProtestant nations: ❌ \"Pope के orders follow करें? Never!\"\n\nBritain ने 1752 तक wait किया। 11 दिन skip करने पड़े।\n\nMobs ने riot किया! 😤\n\n\"Give us back our eleven days!\"\n\nकुछ सोचते थे government literally time चुरा रही है!\n\n—\nRussia ने 1918 तक wait किया। 13 दिन skip किए।\n\nइसीलिए 'October Revolution' actually November में हुई! 🇷🇺\n\n—\nMind-blowing:\n\nGregorian calendar अभी भी imperfect है — हर साल 26 seconds off!\n\n3,236 सालों में एक और दिन skip करना होगा।\n\nTime की battle कभी खत्म नहीं हुई। ⏰",
      tags: "gregorian calendar hindi, calendar history, october revolution, pope gregory, time history hindi, calendar change, british calendar riots, russian calendar, science shorts, history facts",
      pinned_comment: "10 दिन गायब! 📅\n\nMobs ने riot किया!\n\n👍 = Time is weird\n💬 = और कौनसे calendar facts?"
    },
    instagram: {
      caption: "10 दिन गायब हो गए 📅\n\nOctober 4 → October 15। Overnight।\n\nMobs ने riot किया: \"Give us back our days!\" 😱\n\nComment \"CALENDAR\" more facts के लिए 👇\n\n#calendar #gregorian #history #hindi #reels #time #pope #october #revolution #russia #viral #india #hindicontent #amazingfacts #dates"
    },
    x: {
      post: "1582 में 10 दिन गायब 📅\n\nOctober 4 को सोए\nOctober 15 को उठे\n\nMobs ने riot किया\n\"Give us back our days!\"\n\nRussia ने 1918 तक wait किया\n13 दिन skip किए\n\nइसीलिए October Revolution November में हुई 🇷🇺"
    },
    hashtags: "#shorts #calendar #history #hindi #time #gregorian #pope #october #russia #dates"
  },
  23: {
    youtube: {
      title: "हर City का अलग Time था ⏰ #shorts",
      description: "America में हर city का अपना time hua karta tha 😱\n\nBoston में noon New York से 12 minutes अलग था!\n\nDeadly train crashes ने सबको agree कराया।\n\nRailroads से पहले:\n☀️ हर town solar time use करता था\n🏙️ Pittsburgh ≠ Philadelphia time\n🤷 कोई care नहीं करता था\n\nTrains आए — time differences matter करने लगे!\n\nEk station में 6 different clocks हो सकती थीं — 6 different railroad companies के लिए!\n\nConsequences deadly थे:\n\n💥 Single-track पर trains crash होती थीं\n❓ किसका time correct?\n💀 1853 — 21 लोग time confusion से मरे\n\nNovember 18, 1883 — 'The Day of Two Noons'\n\n🚂 Railroads ने 4 time zones impose किए\n🏘️ जो towns resist करें — trains skip कर दें\n\nNo compliance = No railroad = No economy!\n\n—\nGovernment ने officially 1918 तक adopt नहीं किया।\n\nStandardized time gift नहीं था।\n\nCorporate takeover था — reality experience करने का। 🕐",
      tags: "time zones history hindi, railroad time, standardized time, day of two noons, train history hindi, american railroad, time standardization, science shorts, railway history, time zones explained",
      pinned_comment: "हर city का अलग time था ⏰\n\nRailroads ने force किया standardize करने को!\n\n👍 = Mind blown\n💬 = Time zones के और facts?"
    },
    instagram: {
      caption: "हर City का अलग Time था ⏰\n\nBoston ≠ New York। 12 minutes difference।\n\nTrain crashes ने force किया। 1883 — 'Day of Two Noons' 😱\n\nComment \"TIME\" more facts के लिए 👇\n\n#timezone #railroad #history #hindi #reels #time #trains #america #standardization #clock #viral #india #hindicontent #amazingfacts #railway"
    },
    x: {
      post: "1880s: हर city का अलग time ⏰\n\nBoston noon ≠ New York noon\n12 minutes difference\n\nTrain crashes से लोग मरे\n\n1883 — Railroads ने 4 time zones impose किए\n\nJo town resist करे — train skip कर दे 🚂\n\nStandardized time = Corporate takeover of reality।"
    },
    hashtags: "#shorts #timezone #railroad #hindi #history #time #trains #america #clock #standardization"
  },
  24: {
    youtube: {
      title: "Kilogram हल्का हो रहा था ⚖️ #shorts",
      description: "130 सालों तक Paris में एक platinum cylinder THE kilogram था 😱\n\nProblem? यह हल्का हो रहा था!\n\nLe Grand K — Paris के vault में।\n\nहर scale, हर measurement, हर experiment ultimately इसी से trace होता था।\n\nहर 40 साल में निकालते थे weigh करने।\n\nहर बार: atoms खो रहा था! 💨\n\n100 साल में ~50 micrograms खोए — एक eyelash जितना।\n\nPar philosophical nightmare:\n\nDefinition के हिसाब से Le Grand K weight lose नहीं कर सकता था।\n\nयह kilogram था!\n\nToh technically... पूरी universe heavier हो रही थी! 🌌\n\nPhysicists decades तक pagal रहे।\n\n—\n2019 में solution:\n\n❌ Object से define करना बंद करो\n✅ Physics से define करो\n\nPlanck constant — reality के fabric में बुना हुआ number।\n\nAb kilogram quantum mechanics से define होता है! ⚛️\n\n—\nMind-blowing:\n\nAb universe में कहीं भी perfectly accurate kilogram बना सकते हो।\n\nSirf physics से।\n\nMeasurement को matter से free कर दिया। 🎯",
      tags: "kilogram redefinition hindi, le grand k, planck constant hindi, measurement science, physics history hindi, 2019 kilogram, platinum kilogram, metrology hindi, science shorts, quantum mechanics",
      pinned_comment: "Kilogram हल्का हो रहा था! ⚖️\n\nतो technically universe heavier हो रही थी 🤯\n\n👍 = Physics is wild\n💬 = और कौनसे measurement facts?"
    },
    instagram: {
      caption: "Kilogram हल्का हो रहा था ⚖️\n\nParis का platinum cylinder atoms खो रहा था।\n\nतो technically universe heavier हो रही थी! 🌌\n\n2019 — अब physics से define होता है 😱\n\nComment \"KILOGRAM\" more science के लिए 👇\n\n#kilogram #physics #measurement #hindi #reels #science #quantum #planck #metrology #weight #viral #india #hindicontent #amazingfacts #universe"
    },
    x: {
      post: "130 साल तक Paris में platinum cylinder = THE kilogram ⚖️\n\nProblem: यह atoms खो रहा था\n\nDefinition के हिसाब से weight lose नहीं कर सकता था\n\nतो technically universe heavier हो रही थी! 🌌\n\n2019 — अब quantum physics से define होता है।"
    },
    hashtags: "#shorts #kilogram #physics #hindi #measurement #quantum #planck #science #metrology #weight"
  },
  25: {
    youtube: {
      title: "₹900 Crore का Mirror 🪞 #shorts",
      description: "अब तक बने सबसे precise mirrors — ₹900 crore+ हर एक! 😱\n\nइतने flat कि Germany के size पर scale करो तो सबसे बड़ा bump 1mm का होगा!\n\nये mirrors ASML की EUV lithography machines में हैं — अब तक बनी सबसे complex devices।\n\nइनके बिना modern smartphones exist नहीं करते! 📱\n\nKyun itने insane?\n\nTiny transistors वाले chips बनाने के लिए extreme ultraviolet light चाहिए।\n\nPar EUV light सब absorb कर लेता है — air भी!\n\nSirf nearly perfect mirrors से bounce होती है।\n\nASML के mirrors:\n🔬 100 alternating layers (molybdenum + silicon)\n⚛️ हर layer exactly 3 atoms thick\n📏 Flatness: 50 picometers — atom की width की आधी!\n\nकैसे बनाते हैं?\n\n❌ Grind नहीं करते\n✅ Atoms fire करते हैं\n\nIon beam figuring — एक-एक atom remove करो high spots से।\n\nProcess महीने लेता है!\n\n—\nSirf Zeiss बना सकती है।\nSirf ASML machines बना सकती है।\nSirf 3 companies chips बना सकती हैं।\n\nTumहारे phone में billions transistors — सब इन्हीं mirrors की वजह से। 🪞",
      tags: "ASML mirrors hindi, EUV lithography, chip manufacturing, extreme ultraviolet, semiconductor hindi, zeiss optics, precision engineering, microchip production, science shorts, technology hindi",
      pinned_comment: "₹900 crore का mirror 🪞\n\nAtom की आधी width तक flat!\n\n👍 = Precision is insane\n💬 = Chip manufacturing के और facts?"
    },
    instagram: {
      caption: "₹900 Crore का Mirror 🪞\n\nGermany के size पर भी bump 1mm का होगा।\n\nTumहारे phone के chips इसी से बनते हैं 😱\n\nComment \"ASML\" more tech के लिए 👇\n\n#asml #mirror #chip #hindi #reels #technology #semiconductor #precision #euv #manufacturing #viral #india #hindicontent #amazingfacts #zeiss"
    },
    x: {
      post: "सबसे precise mirror 🪞\n\n₹900 crore+ हर एक\n\nGermany के size पर bump 1mm\nFlatness: atom की आधी width\n\nAtoms fire करके बनाते हैं\n\nTumहारे phone के billions transistors — इन्हीं की वजह से।"
    },
    hashtags: "#shorts #asml #mirror #hindi #chip #technology #semiconductor #precision #euv #manufacturing"
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
