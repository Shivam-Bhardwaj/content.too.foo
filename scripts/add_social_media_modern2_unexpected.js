const fs = require('fs');
const path = require('path');

// Social media metadata for Modern (26-30) and Unexpected (31-35) topics
const socialMediaData = {
  26: {
    youtube: {
      title: "Proton से 10,000 गुना छोटा Detect 🌌 #shorts",
      description: "LIGO proton से 10,000 गुना छोटी distance detect कर सकता है 😱\n\nयह ऐसा है जैसे nearest star तक distance measure करो और notice करो human hair की width से change हुई!\n\nJab 2 black holes 1 billion light-years दूर collide होते हैं... space में ripples आती हैं।\n\nEarth तक पहुँचते-पहुँचते proton की width से कम stretch/squeeze होती है।\n\nLIGO यह detect करता है!\n\nKaise?\n\n📐 2 laser arms (4 km each) L-shape में\n🔬 Laser split होती है, दोनों arms में जाती है, combine होती है\n🌊 Gravitational wave से एक arm stretch, दूसरा squeeze\n\nPar engineering nightmare:\n\n🚚 Trucks की vibrations\n🌊 Ocean waves\n⚛️ Mirrors में atoms की thermal motion\n\nMirrors Earth पर सबसे still objects हैं!\n\n—\n2015 में LIGO ने detect किया:\n\n⚫ 2 black holes merge हुए 1.3 billion light-years दूर\n💥 Observable universe के सारे stars से ज़्यादा energy release\n📏 Mirrors proton से 1,000 गुना कम move हुए\n\nHumne ऐसी machine बनाई जो universe को breathe होते feel कर सकती है। 🫁",
      tags: "LIGO hindi, gravitational waves hindi, black hole collision, space science hindi, einstein relativity, physics hindi, laser interferometer, astronomy hindi, science shorts, universe facts",
      pinned_comment: "Universe को breathe होते feel किया 🌌\n\nProton से 1000 गुना छोटी movement!\n\n👍 = Mind blown\n💬 = और कौनसे physics experiments?"
    },
    instagram: {
      caption: "Proton से 10,000 गुना छोटा Detect 🌌\n\n1.3 billion light-years दूर 2 black holes merge हुए।\n\nLIGO ने feel किया 😱\n\nComment \"LIGO\" more space के लिए 👇\n\n#ligo #gravitationalwaves #blackhole #hindi #reels #physics #space #universe #science #einstein #viral #india #hindicontent #amazingfacts #astronomy"
    },
    x: {
      post: "LIGO: proton से 10,000 गुना छोटी distance detect करता है 🌌\n\n2015:\n• 1.3 billion light-years दूर 2 black holes merge\n• Observable universe से ज़्यादा energy\n• Mirrors proton से 1000 गुना कम move हुए\n\nUniverse को breathe होते feel किया।"
    },
    hashtags: "#shorts #ligo #physics #hindi #gravitationalwaves #blackhole #space #universe #science #astronomy"
  },
  27: {
    youtube: {
      title: "GPS में Einstein है 📱 #shorts",
      description: "तुम्हारे phone का GPS Einstein के बिना रोज़ 10 km गलत होता 😱\n\nSatellites literally time को तुमसे differently experience करते हैं!\n\nGPS कैसे काम करता है:\n📡 Multiple satellites से signals time करो\n📍 Tiny differences से position calculate करो\n⏰ Billionths of second accuracy चाहिए\n\nYahan Einstein आता है:\n\n🚀 Special Relativity: Moving clocks slow चलती हैं\n• GPS satellites: 14,000 km/h\n• Ground clocks से 7 microseconds/day LOSE\n\n🌍 General Relativity: Weaker gravity में clocks fast\n• 20,200 km altitude पर gravity weak\n• 45 microseconds/day GAIN\n\nCombined effect: Satellites 38 microseconds/day FAST! ⏰\n\nTiny लगता है? Par:\n\n💡 Light 300 meters/microsecond travel करती है\n❌ Bina correction: 10 km/day error!\n\nTumhारा phone सोचेगा तुम दूसरी city में हो!\n\n—\nहर GPS chip में Einstein की equations हैं।\n\nTumहारा phone continuously relativity calculations कर रहा है।\n\nEinstein तुम्हारी pocket में है — pizza ढूंढने में help कर रहा! 🍕",
      tags: "GPS relativity hindi, einstein gps, time dilation hindi, special relativity, general relativity hindi, satellite navigation, physics hindi, smartphone gps, science shorts, einstein theory",
      pinned_comment: "तुम्हारी pocket में Einstein है 📱\n\nGPS बिना उसके 10 km/day गलत होता!\n\n👍 = Einstein everywhere\n💬 = और कहाँ relativity use होती है?"
    },
    instagram: {
      caption: "GPS में Einstein है 📱\n\nSatellites time differently experience करते हैं।\n\nBina correction: 10 km/day गलत होता 😱\n\nComment \"EINSTEIN\" more physics के लिए 👇\n\n#gps #einstein #relativity #hindi #reels #physics #satellite #smartphone #science #time #viral #india #hindicontent #amazingfacts #navigation"
    },
    x: {
      post: "GPS में Einstein है 📱\n\nSatellites:\n• Moving = clocks slow (-7 μs/day)\n• Weaker gravity = clocks fast (+45 μs/day)\n• Net: 38 μs/day fast\n\nBina correction: 10 km/day गलत\n\nHar GPS chip में Einstein की equations हैं।\n\nPizza ढूंढने में relativity help कर रही है 🍕"
    },
    hashtags: "#shorts #gps #einstein #hindi #relativity #physics #satellite #time #science #navigation"
  },
  28: {
    youtube: {
      title: "18 Mirrors = 1 Perfect Eye 🔭 #shorts",
      description: "James Webb का mirror 18 अलग pieces हैं — human hair की width के 1/10,000th तक aligned! 😱\n\nProblem:\n📐 Mirror 6.5 meters across — किसी rocket में fit नहीं होता!\n\nSolution:\n🔷 18 hexagonal segments जो space में unfold हों\n\nPar यहाँ insane होता है:\n\n⚙️ हर segment के अपने motors\n📏 Position और curvature adjust करते हैं\n🎯 10 nanometers तक match होना चाहिए — hair का 1/10,000th!\n\nEk segment misaligned? Telescope बेकार!\n\nMirrors:\n• Beryllium से बने\n• Gold की layer — सिर्फ 100 nanometers thick (~1,000 atoms)\n• -233°C पर operate\n\nItna cold क्यों?\n\n🌌 Webb oldest galaxies से infrared light ढूंढता है\n💡 13.5 billion साल से travel कर रही light\n🌡️ Telescope की खुद की warmth इसे blind कर देगी\n\nTennis-court-sized sunshield के पीछे operate करता है!\n\nSolar system की किसी भी natural जगह से ज़्यादा cold। ❄️\n\n—\nBig Bang के बाद की पहली galaxies की light finally हम तक पहुँच रही है।\n\nWebb देख सकता है क्योंकि 18 mirrors इतने perfect हैं कि 1 की तरह काम करें।\n\nUniverse की baby photos — humanity की सबसे perfect eye से। 👁️",
      tags: "james webb telescope hindi, JWST mirror, space telescope hindi, infrared astronomy, nasa hindi, hubble successor, telescope engineering, deep space hindi, science shorts, universe photos",
      pinned_comment: "18 mirrors = Universe की baby photos 🔭\n\nHair की width का 1/10,000th तक aligned!\n\n👍 = Engineering marvel\n💬 = Webb की कौनसी image favorite है?"
    },
    instagram: {
      caption: "18 Mirrors = 1 Perfect Eye 🔭\n\n6.5m mirror rocket में fit नहीं होता था।\n\n18 segments। Space में unfold। 10 nanometers तक aligned 😱\n\nComment \"WEBB\" more space के लिए 👇\n\n#webb #jwst #telescope #hindi #reels #space #nasa #mirror #universe #astronomy #viral #india #hindicontent #amazingfacts #galaxy"
    },
    x: {
      post: "James Webb: 18 mirrors 🔭\n\nHair की width का 1/10,000th तक aligned\nSpace में unfold हुए\n-233°C पर operate\n\n13.5 billion साल पुरानी light देख रहे हैं।\n\nUniverse की baby photos 👁️"
    },
    hashtags: "#shorts #webb #jwst #hindi #telescope #space #nasa #universe #astronomy #mirror"
  },
  29: {
    youtube: {
      title: "28,800 Ticks/Hour ⏱️ #shorts",
      description: "Swiss watch 28,800 बार/hour tick करती है — accuracy seconds/day में! 😱\n\nEscapement — tumहारे fingernail से छोटा — human hands से बना सबसे precise mechanical device है।\n\nEscapement = watch की heartbeat ❤️\n\nएक काम: stored energy को tiny, perfectly equal doses में release करना।\n\nHar tick identical होनी चाहिए — 691,200 बार/day!\n\nKaise काम करता है:\n\n🔄 Spring एक साथ unwind होना चाहती है\n⚖️ Escapement oscillating balance wheel use करता है\n⚙️ Gear train exactly 1 tooth/tick advance हो\n\nTolerances microns में:\n\n💨 Dust का एक piece = mechanism stop\n🌡️ Temperature से metal expand/contract\n🌍 Gravity position के हिसाब से differently pull करती है\n\nSolutions:\n✅ Silicon hairsprings — heat से expand नहीं होते\n✅ Tourbillon mechanisms — gravity effects average out\n\n—\nModern Swiss chronometer:\n\n⏱️ 4 seconds/day से ज़्यादा lose/gain नहीं\n📊 99.995% accuracy\n⚙️ Purely mechanical\n🔬 Rice के grain से छोटे parts\n\nAtomic clocks के ज़माने में mechanical watch art की तरह survive करती है।\n\nProof: human hands अभी भी miraculous precision create कर सकते हैं। ✨",
      tags: "swiss watch hindi, mechanical watch, escapement mechanism, horology hindi, watch precision, tourbillon hindi, watchmaking, chronometer accuracy, science shorts, engineering art",
      pinned_comment: "99.995% accuracy — purely mechanical ⏱️\n\nRice के grain से छोटे parts!\n\n👍 = Art + Engineering\n💬 = Favorite watch brand?"
    },
    instagram: {
      caption: "28,800 Ticks/Hour ⏱️\n\nFingernail से छोटा। 99.995% accurate। Purely mechanical।\n\nHuman hands की precision 😱\n\nComment \"WATCH\" more engineering के लिए 👇\n\n#swiss #watch #mechanical #hindi #reels #horology #escapement #precision #engineering #art #viral #india #hindicontent #amazingfacts #luxury"
    },
    x: {
      post: "Swiss watch escapement ⏱️\n\nFingernail से छोटा\n691,200 identical ticks/day\n99.995% accuracy\n\nPurely mechanical। Rice के grain से छोटे parts।\n\nAtomic clocks के ज़माने में — human hands की art। ✨"
    },
    hashtags: "#shorts #watch #swiss #hindi #mechanical #horology #precision #escapement #engineering #art"
  },
  30: {
    youtube: {
      title: "300 Million साल में 1 Second ⏰ #shorts",
      description: "Earth पर सबसे accurate clocks 300 million सालों में 1 second नहीं खोएंगी! 😱\n\nये atoms को fountain की तरह उछालती हैं और गिरते वक्त measure करती हैं।\n\nRegular clocks: Oscillating crystals use करती हैं\n❌ Crystals perfect नहीं — drift करते हैं\n\nAtomic clocks: कुछ use करती हैं जो कभी नहीं बदलता!\n\n⚛️ Electrons जिस frequency पर energy levels बदलते हैं\n\nCesium-133 atoms ALWAYS oscillate करते हैं:\n\n9,192,631,770 cycles/second\n\nHamesha। Universe में कहीं भी।\n\nFountain clocks की genius:\n\nPuरानी atomic clocks में atoms जल्दी गुज़रते थे।\n\nSolution:\n🧊 Lasers से atoms को near absolute zero तक cool करो\n⬆️ Gently ऊपर उछालो (~1 meter)\n⬇️ Rise और fall करते हुए measurement zone से 2 बार गुज़रें\n\nAtoms essentially floating हैं — ज़्यादा measure time!\n\nNIST-F2 (America का primary time standard):\n\n📊 300 million साल = 1 second gain/lose\n\n—\nMind-blowing:\n\nTime कुछ नहीं है जो हम measure करते — कुछ है जो हम DEFINE करते!\n\n1 second = 9,192,631,770 cesium oscillations\n\nHumne decide किया। Phir falling atoms के fountains बनाए अपनी invention track करने के लिए। ⏰",
      tags: "atomic clock hindi, fountain clock, cesium clock, time measurement, NIST-F2, physics hindi, precision timekeeping, science hindi, time definition, science shorts",
      pinned_comment: "300 million साल में 1 second! ⏰\n\nFalling atoms के fountains!\n\n👍 = Time is wild\n💬 = और कौनसी atomic physics?"
    },
    instagram: {
      caption: "300 Million साल में 1 Second ⏰\n\nAtoms को fountain की तरह उछालो। गिरते वक्त measure करो।\n\n1 second हमने DEFINE किया 😱\n\nComment \"ATOMIC\" more physics के लिए 👇\n\n#atomic #clock #physics #hindi #reels #time #cesium #precision #science #nist #viral #india #hindicontent #amazingfacts #fountain"
    },
    x: {
      post: "सबसे accurate clock ⏰\n\n300 million साल में 1 second\n\nAtoms को उछालो, गिरते वक्त measure करो\n\n1 second = 9,192,631,770 cesium oscillations\n\nHumne discover नहीं किया। DEFINE किया।\n\nPhir falling atoms से track किया।"
    },
    hashtags: "#shorts #atomic #clock #hindi #physics #time #cesium #precision #science #nist"
  },
  31: {
    youtube: {
      title: "300 साल बाद भी Copy नहीं होता 🎻 #shorts",
      description: "Antonio Stradivari ने 300 साल पहले violins बनाए। अभी भी सबसे best हैं। X-rays से scan किया। हर chemical analyze किया। Copy नहीं कर सकते 😱\n\n1644-1737: ~1100 violins बनाए\n~650 survive\nMillions में बिकते हैं\nBest musicians कुछ और बजाने से मना करते हैं!\n\nScientists ने क्या-क्या किया:\n\n🔬 CT machines से scan\n⚛️ Wood molecular level पर analyze\n🧪 Varnish chemistry study\n📐 हर curve और thickness measure\n\nक्या मिला?\n\n🌲 Wood Little Ice Age में उगा था — dense tree rings\n🧴 Varnish में minerals — शायद woodworms मारने के लिए\n📅 Instruments सालों तक seasoned\n\nModern makers ने सब replicate किया:\n\n✅ Same forests का wood\n✅ Exact varnish copy\n✅ Millimeters के fractions तक dimensions\n\nResults: Excellent violins — par Stradivarius नहीं!\n\nProfessional violinists blindfolded भी difference बता सकते हैं।\n\n—\nShayad secret किसी measurable factor में नहीं है।\n\nShayad Stradivari के हाथों में था — micro-adjustments जो detect नहीं होते।\n\nKuch knowledge सिर्फ master और materials के relationship में exist करती है।\n\nHum सब कुछ copy कर सकते हैं — siway उस आदमी के। 🎻",
      tags: "stradivarius hindi, violin mystery, antonio stradivari, musical instruments hindi, violin science, wood analysis, music history hindi, craftsmanship, science shorts, unsolved mystery",
      pinned_comment: "300 साल — copy नहीं होता 🎻\n\nShayad secret उसके हाथों में था!\n\n👍 = Some things can't be replicated\n💬 = और कौनसी unexplained mysteries?"
    },
    instagram: {
      caption: "300 साल बाद भी Copy नहीं होता 🎻\n\nX-rays। CT scans। Chemical analysis।\n\nSab कुछ same किया। Phir भी different sound 😱\n\nComment \"STRAD\" more mysteries के लिए 👇\n\n#stradivarius #violin #mystery #hindi #reels #music #craftsmanship #science #unsolved #instrument #viral #india #hindicontent #amazingfacts #art"
    },
    x: {
      post: "Stradivarius violins 🎻\n\n300 साल पुराने\nअभी भी सबसे best\n\nX-rays, CT scans, chemical analysis\nModern makers ने सब copy किया\n\nStill different.\n\nProfessionals blindfolded भी बता सकते हैं।\n\nKuch knowledge सिर्फ hands में exist करती है।"
    },
    hashtags: "#shorts #stradivarius #violin #hindi #mystery #music #craftsmanship #science #unsolved #art"
  },
  32: {
    youtube: {
      title: "2 Seconds में Gender पता 🐥 #shorts",
      description: "Professional chicken sexers 2 seconds में chick का gender identify कर लेते हैं — 98% accuracy से! 😱\n\nScientists ने decades से study किया। वो खुद नहीं जानते कैसे करते हैं!\n\nPoultry industry में matter करता है:\n🥚 सिर्फ females eggs देती हैं\n🐓 Males differently processed होते हैं\n📊 Millions chicks daily sort होने चाहिए — FAST!\n\nJapan से आए professional chicken sexers। 1920s में art perfect हुई।\n\nMaster sexer:\n👀 हर chick 2 seconds examine\n✅ Determination\n➡️ Next\n\nBest: 1000+ chicks/hour — machines से ज़्यादा accurate!\n\nPar वो क्या देखते हैं?\n\n❓ वो खुद नहीं जानते!\n❓ Males और females identical लगते हैं\n❓ कोई obvious feature नहीं\n\n\"Intuition\" report करते हैं — feeling कि ये male है, वो female।\n\nScientists इसे 'implicit learning' कहते हैं:\n\n🧠 Knowledge जो conscious awareness से नीचे exist करती है\n\nTraining:\n📚 Masters के साथ काम करो\n🐥 Chicks sort करो\n❌ Errors पर feedback लो\n📈 Gradually brain patterns recognize करना सीखता है\n\n—\nYeh prove करता है:\n\nHumans ऐसी expertise develop कर सकते हैं जो words से transfer नहीं हो सकती।\n\nHum wisdom contain करते हैं जो हम बोल नहीं सकते। 🤫",
      tags: "chicken sexing hindi, poultry industry, implicit learning, tacit knowledge, skill development, japanese poultry, expertise psychology, science hindi, unusual skills, science shorts",
      pinned_comment: "2 seconds। 98% accurate। Explain नहीं कर सकते 🐥\n\n\"Intuition\" से काम करते हैं!\n\n👍 = Some skills are unexplainable\n💬 = और कौनसी strange skills?"
    },
    instagram: {
      caption: "2 Seconds में Gender पता 🐥\n\n98% accurate। खुद नहीं जानते कैसे।\n\nMachines से ज़्यादा accurate 😱\n\nComment \"CHICK\" more strange facts के लिए 👇\n\n#chicken #sexing #skill #hindi #reels #poultry #expertise #brain #science #implicit #viral #india #hindicontent #amazingfacts #psychology"
    },
    x: {
      post: "Chicken sexers 🐥\n\n2 seconds में gender identify\n98% accurate\nMachines से better\n\nPar explain नहीं कर सकते कैसे!\n\n\"Intuition\" report करते हैं।\n\nKuch knowledge सिर्फ doing में exist करती है।"
    },
    hashtags: "#shorts #chicken #skill #hindi #expertise #brain #science #psychology #implicit #poultry"
  },
  33: {
    youtube: {
      title: "108 Stitches — हाथ से 🧵 #shorts",
      description: "हर baseball में exactly 108 stitches होती हैं। हाथ से सिली जाती हैं। Robots की दुनिया में कुछ चीज़ों को अभी भी human touch चाहिए 😱\n\nMajor League Baseball:\n⚾ ~900,000 balls/season\n🇨🇷 हर एक Costa Rica में hand-stitched\n⏱️ 10-15 minutes/ball\n\nMachines क्यों नहीं कर सकतीं?\n\n🔄 Leather stretch होता है\n⚪ Cork interior slightly irregular\n🧵 Waxed red thread को precise, varying force से pull करना होता है\n\nMachine:\n❌ एक जगह tight, दूसरी जगह loose\n❌ Ball wobble करेगी\n❌ Seams fail हो जाएंगी\n\nWorkers months की training में feel develop करते हैं:\n\n✋ Exactly जानते हैं subtle resistance से कितना hard pull करना है\n🔄 Constantly adjust — कभी same way नहीं\n🧠 Problems solve करते हैं जो algorithm anticipate नहीं कर सकता\n\n—\nWoh raised stitches decorative नहीं — aerodynamically CRITICAL!\n\n🌀 Curveballs कैसे curve करती हैं\n⬆️ Fastballs कैसे rise करती हैं\n↪️ Sliders कैसे slide करती हैं\n\nPitchers seams grip करते हैं control के लिए!\n\n—\nRobots surgery करते हैं। AI code लिखती है।\n\nPar ball सही spin करने के लिए अभी भी human hands चाहिए।\n\nKuch precision program नहीं हो सकती — सिर्फ feel हो सकती है। ✋",
      tags: "baseball stitches hindi, MLB baseball, hand stitching, sports manufacturing, baseball physics, curveball science, costa rica baseball, precision craft, science shorts, sports facts",
      pinned_comment: "108 stitches — हाथ से! ⚾\n\nRobots नहीं कर सकते!\n\n👍 = Human touch matters\n💬 = और क्या robots नहीं कर सकते?"
    },
    instagram: {
      caption: "108 Stitches — हाथ से 🧵\n\n900,000 balls/season। सब hand-stitched।\n\nRobots नहीं कर सकते 😱\n\nComment \"BASEBALL\" more sports facts के लिए 👇\n\n#baseball #stitches #handmade #hindi #reels #mlb #sports #craft #precision #human #viral #india #hindicontent #amazingfacts #manufacturing"
    },
    x: {
      post: "हर baseball में 108 stitches ⚾\n\nसब हाथ से\n900,000/season\n\nMachines क्यों नहीं?\n• Leather stretch होता है\n• Varying force चाहिए\n• Feel से adjust करना होता है\n\nRobots surgery करते हैं, par ball spin नहीं करा सकते। ✋"
    },
    hashtags: "#shorts #baseball #stitches #hindi #handmade #sports #mlb #craft #precision #human"
  },
  34: {
    youtube: {
      title: "Hair से पतली Groove 🎵 #shorts",
      description: "Vinyl record की groove human hair से पतली होती है — फिर भी पूरा orchestra contain करती है! 😱\n\nGrandmother की technology में जितनी information density है वो believe नहीं होगी।\n\nVinyl groove:\n🌀 Continuous spiral — microscopic precision से carved\n💎 Tiny diamond needle 1.8-2.2 grams pressure से trace करती है\n〰️ Groove walls का wiggle = original recording की sound waves!\n\nStereo records में:\n\n📊 हर wall different channel carry करती है\n🔄 Needle 3 dimensions में simultaneously move करती है:\n  ↔️ Side to side = left-right separation\n  ↕️ Up-down = bass frequencies\n\nPrecision:\n• Needle tip: ~0.7 mils wide\n• Groove: ~2 mils wide\n• Frequencies: 20 Hz - 20,000 Hz\n• 1/10,000th inch से better precision!\n\n12-inch record की groove stretch करो:\n📏 1500+ feet = लगभग 1/3 mile\n\nMicroscopically detailed sound information! 🎶\n\n—\n1877 में invent हुई थी।\n\nThomas Edison का phonograph evolve होकर इतना precise system बना।\n\nAudiophiles argue करते हैं — digital से better sound करता है!\n\n—\nVinyl → CD → Streaming गए।\n\nAb vinyl comeback कर रहा है।\n\nPuरानी technology वो capture करती है जो नई नहीं कर सकती — feeling कि किसी ने actually इस music को touch किया। ✋",
      tags: "vinyl record hindi, record groove, analog audio, phonograph history, vinyl vs digital, audio engineering, music technology hindi, record player, science shorts, music facts",
      pinned_comment: "Hair से पतली groove — पूरा orchestra! 🎵\n\n1877 की technology!\n\n👍 = Analog > Digital?\n💬 = Vinyl collect करते हो?"
    },
    instagram: {
      caption: "Hair से पतली Groove 🎵\n\n1/3 mile की spiral। Microscopic precision।\n\n1877 में invent हुई — अभी भी comeback कर रही है 😱\n\nComment \"VINYL\" more music facts के लिए 👇\n\n#vinyl #record #analog #hindi #reels #music #audio #groove #phonograph #vintage #viral #india #hindicontent #amazingfacts #audiophile"
    },
    x: {
      post: "Vinyl groove 🎵\n\nHair से पतली\nपूरा orchestra contain\n1/3 mile की spiral\n1877 में invent\n\nVinyl → CD → Streaming\n\nAb vinyl comeback कर रहा है।\n\nPuरानी technology वो capture करती है जो नई नहीं कर सकती। ✋"
    },
    hashtags: "#shorts #vinyl #record #hindi #analog #music #audio #groove #vintage #audiophile"
  },
  35: {
    youtube: {
      title: "Whiskey में 60% Flavor — जली हुई Wood से 🥃 #shorts",
      description: "Bourbon अपना 60% flavor जली हुई wood से लेता है! 😱\n\nDistillers barrels में आग लगाते हैं — और वो char layer liquid chemistry magic बन जाती है।\n\nNew bourbon barrel में जाता है:\n🍿 Clear corn whiskey\n😖 Harsh, grainy, barely drinkable\n\nसालों बाद निकलता है:\n🥃 Smooth, caramel-colored, complex\n\nBurned barrel यह करता है!\n\nProcess:\n🔥 White oak barrels के अंदर आग लगाओ (45-55 seconds)\n⬛ Char layer बनती है (~1/8 inch thick)\n🔴 नीचे \"red layer\" — caramelized wood sugars\n\nAging:\n☀️ Hot summers: whiskey char में deep push\n❄️ Cold winters: wapas pull\n\nहर cycle:\n✅ Flavors extract\n✅ Impurities filter\n✅ Char = activated carbon (harsh sulfur compounds remove)\n✅ Vanillin add (vanilla की smell!)\n✅ Red layer से sugars = sweetness + amber color\n\nDifferent char levels = Different bourbons:\n\n#4 char (\"alligator char\") → deeper flavors\n#2 char → lighter\n\n—\nScientists ने charring में 300+ compounds identify किए।\n\nPar best distillers अभी भी color और smell से judge करते हैं — measurement से नहीं।\n\nFire, wood, और time.\n\nHuman history की सबसे पुरानी chemistry — अभी भी magic बना रही है। 🔥",
      tags: "bourbon barrel hindi, whiskey aging, charred oak, distillery science, bourbon making, barrel char, alcohol chemistry, whiskey hindi, science shorts, bourbon facts",
      pinned_comment: "60% flavor जली हुई wood से 🥃\n\nFire + Wood + Time = Magic!\n\n👍 = Chemistry of taste\n💬 = Favorite whiskey?"
    },
    instagram: {
      caption: "Whiskey में 60% Flavor — जली हुई Wood से 🔥\n\nDistillers barrels में आग लगाते हैं।\n\nChar layer = liquid chemistry magic 🥃\n\nComment \"BOURBON\" more science के लिए 👇\n\n#bourbon #whiskey #barrel #hindi #reels #alcohol #distillery #oak #char #chemistry #viral #india #hindicontent #amazingfacts #spirits"
    },
    x: {
      post: "Bourbon का 60% flavor 🥃\n\nजली हुई wood से आता है\n\nDistillers barrels में आग लगाते हैं\nChar = activated carbon\nVanillin + sugars extract\n\n300+ compounds। Par best distillers smell से judge करते हैं।\n\nFire + wood + time = magic 🔥"
    },
    hashtags: "#shorts #bourbon #whiskey #hindi #barrel #distillery #oak #char #chemistry #spirits"
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
