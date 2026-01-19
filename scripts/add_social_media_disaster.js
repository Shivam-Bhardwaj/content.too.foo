const fs = require('fs');
const path = require('path');

// Social media metadata for Disaster category topics (7-14)
const socialMediaData = {
  7: {
    youtube: {
      title: "20 Minute में डूब गया 🚢 #shorts",
      description: "सबसे powerful warship। अपनी पहली voyage पर। 20 minute में डूब गया 😱\n\n10 August, 1628। Stockholm harbor।\n\nSwedish warship Vasa:\n⚔️ 64 bronze cannons\n👑 Gold carvings\n💀 Enemies को डराने के लिए बनी\n\nShore से 1,300 meter दूर... हवा का झोंका आया।\n\nShip झुकी। Gun ports से पानी आया। 20 minute में... Sweden का गौरव समुद्र के तल पर।\n\n30 लोग मरे।\n\nक्या हुआ था?\n\n👑 King changes माँगता रहा\n⚠️ Engineers जानते थे ship top-heavy है\n🏃 30 आदमियों ने deck पर दौड़कर test किया — ship इतनी हिली कि रुकना पड़ा\n\nPar किसी ने King को बताया नहीं 🤫\n\n333 साल बाद Vasa मिली — 95% original!\n\n—\nजब power को सच बोलने की हिम्मत नहीं होती... यही होता है।",
      tags: "vasa ship hindi, swedish warship, ship disaster history, maritime disaster hindi, engineering failure, stockholm harbor, history shorts hindi, ancient ships, naval history hindi, amazing facts",
      pinned_comment: "King को सच बोलने की हिम्मत नहीं थी 👑\n\n20 minute में डूब गया!\n\n👍 = Communication matters\n💬 = और कौनसी disaster story?"
    },
    instagram: {
      caption: "20 Minute में डूब गया 🚢\n\nसबसे powerful warship। पहली voyage। डूब गया।\n\nEngineers जानते थे। King को बताया नहीं 😱\n\n333 साल बाद मिली — 95% original!\n\nComment \"VASA\" more disasters के लिए 👇\n\n#vasa #ship #disaster #hindi #reels #history #sweden #naval #engineering #failure #viral #india #hindicontent #amazingfacts #maritime"
    },
    x: {
      post: "सबसे powerful warship 🚢\n\nपहली voyage पर 20 minute में डूब गया\n\nEngineers जानते थे top-heavy है\nKing को बताया नहीं\n\n333 साल बाद मिली — 95% original!\n\nजब सच बोलने की हिम्मत नहीं होती..."
    },
    hashtags: "#shorts #history #disaster #hindi #vasa #ship #sweden #engineering #failure #naval"
  },
  8: {
    youtube: {
      title: "₹2943 Crore... Units की वजह से 😱 #shorts",
      description: "एक spacecraft। Space में खो गया। क्योंकि किसी ने units convert नहीं किए 🤯\n\n23 September, 1999। NASA का Mars Climate Orbiter।\n\n9 महीने की journey। Mars पहुँचा। Command भेजा। फिर... silence।\n\nSpacecraft गायब 👻\n\nLockheed Martin ने thrusters को imperial units में program किया — pounds।\n\nNASA ने assume किया metric है — newtons।\n\n9 महीने तक हर correction थोड़ा गलत था।\n\n❌ किसी ने check नहीं किया\n❌ किसी ने convert नहीं किया\n❌ किसी ने पूछा नहीं\n\nMars पहुँचा तो 100 km नीचे था 💥\n\n₹2943 crore। सालों का काम। 4.45 से multiply न करने की वजह से।\n\nWorst part? NASA के पास protocols थे। Schedule pressure में skip कर दिए।\n\n—\nAssumptions missions खत्म करती हैं। Verify everything. या nothing.",
      tags: "mars climate orbiter hindi, NASA failure, space disaster hindi, unit conversion error, metric imperial, space exploration hindi, engineering failure, NASA hindi, science shorts, mission failure",
      pinned_comment: "₹2943 crore गायब 💸\n\nसिर्फ units convert न करने से!\n\n👍 = Double-check everything\n💬 = NASA की और कौनसी mistakes?"
    },
    instagram: {
      caption: "₹2943 Crore... Units की वजह से 💸\n\nNASA spacecraft। 9 महीने की journey।\n\nLockheed: Pounds\nNASA: Newtons\n\nकिसी ने check नहीं किया। Spacecraft गायब 😱\n\nComment \"NASA\" more stories के लिए 👇\n\n#nasa #mars #spacecraft #hindi #reels #space #disaster #engineering #failure #science #viral #india #hindicontent #amazingfacts #metric"
    },
    x: {
      post: "₹2943 crore का spacecraft 🛸\n\nSpace में खो गया\n\nLockheed: Pounds में program किया\nNASA: Newtons assume किया\n\n9 महीने। किसी ने check नहीं किया।\n\nAssumptions missions खत्म करती हैं 💀"
    },
    hashtags: "#shorts #nasa #space #hindi #mars #disaster #engineering #science #failure #spacecraft"
  },
  9: {
    youtube: {
      title: "12km पर Fuel खत्म ✈️ #shorts",
      description: "एक 767 का fuel 12km ऊपर खत्म। जो हुआ वो impossible था 😱\n\n23 July, 1983। Air Canada Flight 143।\n\n69 लोग। Manitoba के ऊपर cruise कर रही थी।\n\nCaptain Bob Pearson ने notice किया — दोनों engines बंद 💀\n\nFuel खत्म। 12km की height पर।\n\nGalti? Units में confusion। Kilograms की जगह pounds use किए। आधा fuel भी नहीं था।\n\nPearson glider pilot भी थे। उन्होंने realize किया — ये jet GLIDE कर सकती है!\n\n\"Jets glide नहीं करती। गिरती हैं।\" — हर pilot जानता है।\n\nPearson ने Gimli के abandoned runway याद किए। 64 km glide किया — बिना engines, बिना hydraulics!\n\nRunway पर पहुँचे... car race चल रही थी! 🏎️\n\nFront gear lock नहीं हुआ। Nose runway पर घिसता रहा।\n\nसब 69 passengers बचे ✅\n\n—\nPlane repair हुआ। 25 साल और उड़ा।",
      tags: "gimli glider hindi, air canada 143, aviation miracle, plane fuel empty, pilot saves passengers, bob pearson, aviation history hindi, airplane emergency, science shorts, incredible landing",
      pinned_comment: "Fuel खत्म। 12km ऊपर। 69 passengers ✈️\n\nसब बच गए!\n\n👍 = Legendary pilot\n💬 = और कौनसी impossible landing?"
    },
    instagram: {
      caption: "12km पर Fuel खत्म ✈️\n\nDono engines बंद। 69 लोग।\n\nCaptain ने 64km glide किया — बिना power!\n\nसब बचे 😱\n\nComment \"GIMLI\" more miracles के लिए 👇\n\n#gimli #glider #aviation #hindi #reels #airplane #pilot #miracle #landing #disaster #viral #india #hindicontent #amazingfacts #aircanada"
    },
    x: {
      post: "767 का fuel 12km पर खत्म ✈️\n\nदोनों engines बंद\n69 passengers\n\nCaptain ने 64km glide किया\nबिना engines, बिना hydraulics\n\nRunway पर car race चल रही थी 🏎️\n\nसब बचे। Plane 25 साल और उड़ा।"
    },
    hashtags: "#shorts #aviation #pilot #hindi #gimli #airplane #miracle #landing #disaster #aircanada"
  },
  10: {
    youtube: {
      title: "₹13,500 Crore Telescope... Blurry 😱 #shorts",
      description: "₹13,500 crore का telescope। Blurry mirror के साथ launch हुआ। Error? एक बाल से छोटा 🤯\n\n24 April, 1990। Hubble Space Telescope deploy हुआ।\n\nHumanity की universe देखने की खिड़की 🔭\n\nScientists ने decades wait किया। फिर पहली images आईं...\n\nBlurry थीं 😶\n\nMirror में flaw था। Crack नहीं। Scratch नहीं। Curve।\n\nसिर्फ 2.2 microns flat — एक बाल की width का 1/50th!\n\nPar optics में इतनी छोटी गलती ने Hubble को almost blind बना दिया।\n\nक्यों हुआ?\n\nMirror test करने वाला device ही गलत था! 1.3mm का spacer गलत जगह था।\n\nहर measurement \"perfect\" कहता था 😅\n\n3 साल Hubble struggle करता रहा।\n\n1993 में astronauts ने history का सबसे complex repair किया — Hubble को \"glasses\" पहनाए 👓\n\n—\n30 साल की revolutionary science। Mirror में अभी भी flaw है। हमने बस उसके around काम करना सीखा।",
      tags: "hubble telescope hindi, NASA mirror flaw, space telescope history, hubble repair mission, astronomy hindi, space science hindi, NASA mistake, telescope hindi, science shorts, hubble images",
      pinned_comment: "₹13,500 crore telescope को glasses पहनाने पड़े 👓\n\nError एक बाल से छोटा था!\n\n👍 = Still worth it\n💬 = Hubble की best image कौनसी है?"
    },
    instagram: {
      caption: "₹13,500 Crore Telescope... Blurry 🔭\n\nMirror में flaw — एक बाल से छोटा!\n\nAstronauts ने \"glasses\" पहनाए 👓\n\n30 साल की revolutionary science!\n\nComment \"HUBBLE\" more space facts के लिए 👇\n\n#hubble #telescope #nasa #hindi #reels #space #astronomy #science #mirror #flaw #viral #india #hindicontent #amazingfacts #universe"
    },
    x: {
      post: "₹13,500 crore का telescope 🔭\n\nLaunch हुआ... blurry था\n\nMirror flaw — एक बाल से छोटा\n2.2 microns\n\nAstronauts ने orbit में \"glasses\" पहनाए 👓\n\n30 साल revolutionary science। Flaw अभी भी है।"
    },
    hashtags: "#shorts #hubble #telescope #hindi #nasa #space #astronomy #science #mirror #universe"
  },
  11: {
    youtube: {
      title: "Healing Machine ने मार दिया 💀 #shorts",
      description: "एक healing machine। एक software bug। 6 मरीज़ मरे। Code कभी test नहीं हुआ था 😱\n\n1985-1987। Therac-25 radiation therapy machine।\n\nCancer treat करने के लिए बनी... 6 को मार दिया।\n\nMachine में 2 modes थे:\n⚡ Low-power electron\n☢️ High-power X-ray (100x stronger)\n\nSoftware bug: अगर operator जल्दी type करे...\n\n...machine X-ray mode में fire करती थी बिना shielding के!\n\n100x dose। Concentrated beam। Intense burning। कुछ हफ्तों में मर गए 💀\n\nWorst part?\n\n❌ Software \"everything normal\" report करता था\n❌ Hospital ने disease को blame किया\n❌ Manufacturer ने operator को blame किया\n\nMultiple deaths के बाद ही software पर शक हुआ।\n\nHardware safety interlocks हटा दिए थे। Software ही safety था।\n\n—\nआज Therac-25 हर software engineering course में warning है:\n\nUntested code kills. 💀",
      tags: "therac-25 hindi, software bug disaster, medical device failure, radiation therapy accident, software engineering, code testing, medical disaster hindi, programming mistakes, science shorts, engineering failure",
      pinned_comment: "Untested code = 6 deaths 💀\n\nSoftware \"normal\" report कर रहा था!\n\n👍 = Test your code\n💬 = और कौनसी software disasters?"
    },
    instagram: {
      caption: "Healing Machine ने मार दिया 💀\n\nCancer treat करने वाली machine। Software bug। 6 मरे।\n\nCode कभी test नहीं हुआ था 😱\n\nComment \"THERAC\" more disasters के लिए 👇\n\n#therac #software #bug #hindi #reels #medical #disaster #programming #code #testing #viral #india #hindicontent #amazingfacts #engineering"
    },
    x: {
      post: "Cancer treatment machine 💀\n\nSoftware bug था\n6 patients मरे\n\nCode कभी test नहीं हुआ था\nSoftware \"normal\" report करता था\n\nTherac-25: हर programming course की warning ☢️\n\nUntested code kills."
    },
    hashtags: "#shorts #software #programming #hindi #code #medical #disaster #engineering #bug #testing"
  },
  12: {
    youtube: {
      title: "Simple Change... 114 मरे 😱 #shorts",
      description: "एक simple design change। एक quick decision। 114 लोग मरे।\n\nU.S. history की सबसे deadly structural failure 🏗️\n\n17 July, 1981। Hyatt Regency Kansas City। Tea dance competition।\n\nसैकड़ों लोग atrium में। ऊपर दो suspended walkways — दूसरी और चौथी मंज़िल पर।\n\nशाम 7:05 — चौथी मंज़िल का walkway टूटा 💥\n\nदूसरी मंज़िल पर गिरा। दोनों dance floor पर collapse।\n\n114 मरे। 200+ injured।\n\nक्या हुआ था?\n\nOriginal design: एक single rod ceiling से दोनों walkways तक\n\nConstruction में change: दो shorter rods use करो — simpler लगा\n\nEngineer ने minimal review में approve कर दिया ✅\n\nUs change ने load DOUBLE कर दिया! 📈\n\nConnection कभी उस weight के लिए designed नहीं था।\n\n❌ किसी ने recalculate नहीं किया\n❌ किसी ने error नहीं पकड़ी\n\nदोनों engineers के licenses गए।\n\n—\nStructural engineering में: simple changes fatal हो सकते हैं।\n\nDetails matter. Always.",
      tags: "hyatt regency collapse hindi, structural failure, engineering disaster, kansas city walkway, building collapse hindi, civil engineering, construction accident, design failure, science shorts, engineering mistakes",
      pinned_comment: "Simple change = 114 deaths 🏗️\n\nकिसी ने recalculate नहीं किया!\n\n👍 = Details matter\n💬 = और कौनसी engineering failures?"
    },
    instagram: {
      caption: "Simple Change... 114 मरे 🏗️\n\nOriginal: 1 rod\nChanged: 2 rods (simpler लगा)\n\nLoad double हो गया। किसी ने check नहीं किया 😱\n\nComment \"HYATT\" more disasters के लिए 👇\n\n#hyatt #collapse #engineering #hindi #reels #disaster #construction #structural #failure #building #viral #india #hindicontent #amazingfacts #architecture"
    },
    x: {
      post: "Simple design change 🏗️\n\n1 rod → 2 rods\n\"Simpler लगा\"\n\nLoad double हो गया\nकिसी ने recalculate नहीं किया\n\n114 मरे।\n\nStructural engineering में details matter करती हैं। Always."
    },
    hashtags: "#shorts #engineering #disaster #hindi #hyatt #collapse #construction #structural #building #failure"
  },
  13: {
    youtube: {
      title: "₹4500 Crore... 37 Seconds में 💥 #shorts",
      description: "₹4500 crore। 10 साल की मेहनत। 37 seconds में तबाह।\n\nEk single integer overflow से 😱\n\n4 June, 1996। Ariane 5 rocket — Europe का सबसे powerful।\n\nपहला launch। 4 expensive scientific satellites।\n\n37 seconds बाद... rocket off course गया और self-destruct 💥\n\nक्या हुआ?\n\n1986 का software bug!\n\nAriane 5 का navigation system Ariane 4 से copy था।\n\nCode 64-bit number को 16-bit integer में convert करता था।\n\nAriane 4 पर perfectly काम करता था।\n\nPar Ariane 5 ज़्यादा fast था! Horizontal velocity 32,767 से ज़्यादा थी।\n\n16-bit integer की max value = 32,767\n\nNumber OVERFLOW हो गया 📊\n\nComputer crash। Backup भी crash (same code!)। Rocket blind। Self-destruct.\n\n10 साल। 4 satellites। ₹4500 crore।\n\n—\nकिसी ने test नहीं किया कि पुराना code नई speed handle कर सकता है या नहीं।\n\nLegacy code = Liability. 💀",
      tags: "ariane 5 explosion hindi, rocket failure, integer overflow, software bug disaster, space exploration hindi, ESA rocket, programming mistakes, software engineering, science shorts, rocket explosion",
      pinned_comment: "₹4500 crore = 37 seconds 💥\n\nInteger overflow से!\n\n👍 = Test your code\n💬 = और कौनसी software disasters?"
    },
    instagram: {
      caption: "₹4500 Crore... 37 Seconds में 💥\n\n10 साल की मेहनत। Integer overflow।\n\n32,767 से ज़्यादा speed। 16-bit integer। Crash 😱\n\nComment \"ARIANE\" more disasters के लिए 👇\n\n#ariane #rocket #explosion #hindi #reels #space #software #bug #overflow #integer #viral #india #hindicontent #amazingfacts #esa"
    },
    x: {
      post: "₹4500 crore का rocket 🚀\n\n37 seconds में self-destruct\n\nSpeed 32,767 से ज़्यादा थी\n16-bit integer overflow\n\n1986 का code था। Test नहीं हुआ था।\n\nLegacy code = Liability 💀"
    },
    hashtags: "#shorts #rocket #explosion #hindi #ariane #space #software #bug #overflow #programming"
  },
  14: {
    youtube: {
      title: "Bridge नाचने लगी 💨 #shorts",
      description: "एक नई bridge। 64 km/h की हवा। नाचने लगी। फिर खुद को तोड़ दिया 😱\n\n7 November, 1940। Tacoma Narrows Bridge — सिर्फ 4 महीने पहले खुली थी।\n\nSteady wind ने कुछ ऐसा किया जो engineers ने कभी नहीं देखा था...\n\nBridge undulate करने लगी — waves में ऊपर नीचे 🌊\n\nफिर twisting शुरू हुई। Road deck 45° तक rotate होने लगा!\n\nCars sideways हो गई। सब evacuate हुए।\n\n2 घंटे तक bridge एक living thing की तरह twisted 😵\n\n11 AM — 600-foot section टूटकर Puget Sound में गिरा।\n\nPoora disaster FILM पर capture हुआ! 🎥\n\nक्या हुआ था?\n\nAeroelastic Flutter — एक feedback loop\n\nWind energy bridge की natural vibration frequency से sync हो गई।\n\nहर gust पिछले को amplify करता रहा... जब तक steel टूट नहीं गया।\n\n—\nइस disaster ने हर bridge design manual rewrite कर दिया।\n\nResonance matters. 🌉",
      tags: "tacoma narrows bridge hindi, bridge collapse, resonance disaster, aeroelastic flutter, physics hindi, engineering failure, bridge failure hindi, suspension bridge, science shorts, wind disaster",
      pinned_comment: "Bridge नाचने लगी... फिर टूट गई 🌉\n\nWind + Resonance = Disaster\n\n👍 = Physics is scary\n💬 = और कौनसी engineering disasters?"
    },
    instagram: {
      caption: "Bridge नाचने लगी 💨\n\n64 km/h wind। Resonance। 2 घंटे twisted।\n\nPhir टूट गई 😱\n\nPoora disaster film पर capture!\n\nComment \"TACOMA\" more disasters के लिए 👇\n\n#tacoma #bridge #collapse #hindi #reels #physics #resonance #engineering #disaster #wind #viral #india #hindicontent #amazingfacts #flutter"
    },
    x: {
      post: "नई bridge। 64 km/h wind 💨\n\nनाचने लगी\n2 घंटे twisted\nफिर टूट गई\n\nAeroelastic flutter — wind + resonance\n\nPoora disaster film पर है 🎥\n\nइसने हर bridge design manual rewrite किया।"
    },
    hashtags: "#shorts #bridge #physics #hindi #tacoma #collapse #resonance #engineering #disaster #wind"
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
