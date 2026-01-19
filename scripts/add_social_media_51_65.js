const fs = require('fs');
const path = require('path');

// Social media metadata for topics 51-65
const socialMediaData = {
  51: {
    // Gabriel's Horn - Math
    youtube: {
      title: "Paint से भर सकते हो... Paint नहीं कर सकते 🎺 #shorts",
      description: "Gabriel's Horn — 1643 की mathematical shape जो दिमाग घुमा दे! 🤯\n\n🎺 Infinite surface area\n📦 Finite volume (सिर्फ 3.14 cubic units!)\n🎨 Paint से भर सकते हो... पर बाहर paint करने को infinite paint चाहिए!\n\nCalculus की ऐसी शक्ति जो infinity के rules तोड़ दे 🔢\n\n👇 Comment करो अगर tumhara दिमाग घूम गया!\n\n#gabrielshorn #math #infinity #calculus #hindi #shorts",
      tags: "gabriels horn hindi, math paradox, infinity explained hindi, calculus hindi, mathematical shapes, mathematics hindi, torricellis trumpet, infinite surface area, science shorts hindi, mind blowing math",
      pinned_comment: "Infinite surface area... finite volume 🎺\n\nPaint से भर सकते हो पर paint नहीं कर सकते!\n\n👍 = Mind blown\n💬 = और कौनसा math paradox?"
    },
    instagram: {
      caption: "Paint से भर सकते हो... Paint नहीं कर सकते 🎺\n\nGabriel's Horn:\n• Infinite surface area ♾️\n• Finite volume (3.14 cubic units)\n\n1643 में mathematicians ने दिमाग घुमा दिया 🤯\n\nComment \"INFINITY\" more paradoxes के लिए 👇\n\n#math #infinity #paradox #hindi #reels #calculus #science #mathematics #viral #india #hindicontent #amazingfacts #mindblown"
    },
    x: {
      post: "Gabriel's Horn 🎺\n\n• Infinite surface area\n• Finite volume (3.14 cubic units)\n\nPaint से भर सकते हो... पर paint करने को infinite paint चाहिए 🤯\n\n1643 का paradox जो आज भी दिमाग घुमाए"
    },
    hashtags: "#shorts #math #infinity #hindi #calculus #paradox #science #mathematics #india #mindblown"
  },

  52: {
    // Monty Hall Problem - Math
    youtube: {
      title: "1000 PhDs गलत थे 🚪 #shorts",
      description: "Monty Hall Problem — probability का सबसे confusing puzzle! 🎰\n\n🚪 3 doors, 1 car, 2 goats\n🔄 Switch करो = 66% जीतो\n❌ रहो = 33% chance\n\n1990 में 1000 PhDs ने कहा \"गलत है\"... वो सब गलत थे! 🤯\n\n👇 तुम क्या करोगे — switch या stay?\n\n#montyhall #probability #math #hindi #shorts",
      tags: "monty hall problem hindi, probability hindi, math puzzle, game show math, brain teaser hindi, statistics hindi, decision making, probability paradox, science shorts hindi, lets make a deal",
      pinned_comment: "Door switch करो... 66% जीतो! 🚪\n\n1000 PhDs गलत थे!\n\n👍 = Switch करूंगा\n💬 = Stay करूंगा"
    },
    instagram: {
      caption: "1000 PhDs गलत थे 🚪\n\n3 doors। 1 car। 2 goats।\n\nHost goat दिखाए, switch करोगे?\n\nSwitch = 66% जीतो ✅\nStay = 33% chance ❌\n\nIntution झूठ बोलता है 🤯\n\nComment \"SWITCH\" ya \"STAY\" 👇\n\n#montyhall #probability #math #hindi #reels #puzzle #statistics #science #viral #india #hindicontent #amazingfacts #brainteaser"
    },
    x: {
      post: "Monty Hall Problem 🚪\n\n3 doors, 1 car, 2 goats\nHost goat दिखाए, switch करोगे?\n\nSwitch = 66% win\nStay = 33% win\n\n1000 PhDs ने कहा गलत है। वो सब गलत थे 🤯"
    },
    hashtags: "#shorts #math #probability #hindi #montyhall #puzzle #statistics #science #india #brainteaser"
  },

  53: {
    // Tardigrades - Biology
    youtube: {
      title: "Space में बिना protection... जिंदा 🐻 #shorts",
      description: "Tardigrades — Earth के सबसे resilient creatures! 🦠\n\n🚀 Space vacuum survive किया\n☢️ Radiation जो humans को maar de\n🥶 -272°C से 150°C तक\n\nDinosaurs से पहले थे, humse ज्यादा चलेंगे! 💪\n\n👇 ये तुम्हारे garden में भी हैं!\n\n#tardigrade #waterbear #biology #hindi #shorts",
      tags: "tardigrade hindi, water bear hindi, microscopic animals, space survival, cryptobiosis hindi, extreme survival, resilient creatures, biology hindi, science shorts hindi, immortal animals",
      pinned_comment: "Space vacuum, cosmic radiation, -272°C 🚀\n\nSab survive kiya! अभी तुम्हारे body पर भी हैं!\n\n👍 = Respect\n💬 = और कौनसा indestructible जानवर?"
    },
    instagram: {
      caption: "Space में बिना protection... जिंदा 🐻\n\nTardigrades:\n• Vacuum survive ✅\n• Cosmic radiation survive ✅\n• -272°C to 150°C survive ✅\n\nनमक के दाने से छोटे। तुम्हारी body पर भी हैं 😱\n\nComment \"WATER BEAR\" more facts के लिए 👇\n\n#tardigrade #waterbear #biology #hindi #reels #space #survival #microscopic #science #viral #india #hindicontent #amazingfacts #resilience"
    },
    x: {
      post: "Tardigrades 🐻\n\n• Space vacuum survive किया\n• 1000x lethal radiation survive किया\n• -272°C to 150°C survive किया\n\nDinosaurs से पहले थे। तुम्हारे garden में हैं। Humse ज्यादा चलेंगे 💪"
    },
    hashtags: "#shorts #biology #tardigrade #hindi #waterbear #space #survival #science #india #microscopic"
  },

  54: {
    // Immortal Jellyfish - Biology
    youtube: {
      title: "मरता नहीं... फिर जवान हो जाता है 🪼 #shorts",
      description: "Turritopsis dohrnii — Biologically Immortal Jellyfish! 🔄\n\n🪼 बूढ़ा होने पर जवान बन जाए\n🔬 Adult से baby, फिर से adult\n♾️ No expiration date\n\nButterfly जो फिर caterpillar बन जाए! 🦋\n\n👇 अगर हम समझ लें... aging optional हो जाए!\n\n#immortal #jellyfish #biology #hindi #shorts",
      tags: "immortal jellyfish hindi, turritopsis dohrnii, biological immortality, jellyfish hindi, anti aging, cellular transdifferentiation, marine biology hindi, science shorts hindi, eternal life, reverse aging",
      pinned_comment: "Aging reverse कर देता है 🪼\n\nHum 1996 से जानते हैं!\n\n👍 = Nature का secret\n💬 = क्या humans भी ऐसा कर पाएंगे?"
    },
    instagram: {
      caption: "मरता नहीं... फिर जवान हो जाता है 🪼\n\nImmortal Jellyfish:\n• बूढ़ा हो → जवान बन जाए 🔄\n• No expiration date\n• 1996 से जानते हैं\n\nAging का secret एक tiny jellyfish में 😱\n\nComment \"IMMORTAL\" more facts के लिए 👇\n\n#jellyfish #immortal #biology #hindi #reels #aging #science #marine #nature #viral #india #hindicontent #amazingfacts #forever"
    },
    x: {
      post: "Turritopsis dohrnii 🪼\n\nबूढ़ा हो, stressed हो, बीमार हो?\nLife cycle reverse कर देता है।\n\nAdult → Baby → Adult\nForever 🔄\n\nAging optional हो सकती है... अगर हम समझ लें।"
    },
    hashtags: "#shorts #biology #jellyfish #hindi #immortal #aging #science #marine #nature #india"
  },

  55: {
    // Octopus Intelligence - Biology
    youtube: {
      title: "9 Brains, Blue Blood, और तुम्हें याद रखता है 🐙 #shorts",
      description: "Octopus — Earth पर Aliens! 🐙\n\n🧠 9 brains (1 central + 8 arms में)\n💙 Blue blood, 3 hearts\n😠 Grudges रखता है, पानी spray करता है!\n\nHumse completely अलग evolve हुए — consciousness का parallel experiment! 🔬\n\n👇 सोचो अगर ये 50 साल जीते...\n\n#octopus #biology #intelligence #hindi #shorts",
      tags: "octopus intelligence hindi, octopus brain, marine biology hindi, animal intelligence, cephalopod hindi, octopus facts, ocean animals hindi, science shorts hindi, smartest animals, blue blood animals",
      pinned_comment: "9 brains, 3 hearts, blue blood 🐙\n\nTumhe याद रखता है। पसंद नहीं तो पानी spray करेगा! 😤\n\n👍 = Respect\n💬 = सबसे intelligent animal कौनसा है?"
    },
    instagram: {
      caption: "9 Brains, Blue Blood 🐙\n\nOctopus facts:\n• Jar खोलना सीख लेता है\n• Faces याद रखता है\n• Grudges रखता है 😤\n\n750 million साल पहले humse अलग हो गए। फिर भी intelligent 🤯\n\nComment \"OCTOPUS\" more facts के लिए 👇\n\n#octopus #intelligence #biology #hindi #reels #ocean #brain #animals #science #viral #india #hindicontent #amazingfacts #marine"
    },
    x: {
      post: "Octopus 🐙\n\n• 9 brains\n• Blue blood\n• 3 hearts\n• Faces याद रखता है\n• पसंद नहीं? पानी spray करेगा 😤\n\nEarth पर aliens। Sirf 1-2 साल जीते हैं। Imagine agar 50 जीते..."
    },
    hashtags: "#shorts #biology #octopus #hindi #intelligence #ocean #brain #animals #science #india"
  },

  56: {
    // Gavrilo Princip's Sandwich - History
    youtube: {
      title: "Sandwich खाने गया... World War शुरू हो गई 🥪 #shorts",
      description: "Gavrilo Princip — वो sandwich जिसने दुनिया बदल दी! 💥\n\n❌ Assassination fail हो गई\n🥪 Sandwich खाने गया\n🚗 Car सामने आकर रुक गई!\n\nWorld War I: 20 million मरे\nWorld War II: 70 million मरे 💀\n\n👇 Engine failure ने history लिख दी!\n\n#worldwar #history #hindi #shorts",
      tags: "gavrilo princip hindi, franz ferdinand assassination, world war 1 hindi, sarajevo 1914, history hindi, butterfly effect, world war start, archduke assassination, history shorts hindi, wwi origin",
      pinned_comment: "Sandwich खाने गया था... World War शुरू हो गई 🥪\n\nEngine stall + wrong turn = 90 million deaths\n\n👍 = History is crazy\n💬 = और कौनसा accident ने history बदली?"
    },
    instagram: {
      caption: "Sandwich खाने गया... World War शुरू हो गई 🥪\n\nAssassination fail। Sandwich खाने गया।\n\nTarget की car सामने आकर रुक गई 😱\n\nWWI + WWII = 90 million deaths\n\nComment \"HISTORY\" more stories के लिए 👇\n\n#worldwar #history #sandwich #hindi #reels #assassination #war #1914 #viral #india #hindicontent #amazingfacts #butterfly"
    },
    x: {
      post: "1914: Assassination fail हो गई 🥪\n\nGavrilo Princip sandwich खाने गया।\nTarget की car wrong turn लेकर सामने आ गई।\nEngine stall हो गया।\n\nWorld War I शुरू।\n90 million मरे।\n\nEngine failure ने history लिख दी।"
    },
    hashtags: "#shorts #history #worldwar #hindi #assassination #war #1914 #sandwich #butterfly #india"
  },

  57: {
    // Norman Borlaug - History
    youtube: {
      title: "1 अरब लोगों को बचाया... नाम नहीं सुना 🌾 #shorts",
      description: "Norman Borlaug — जिसने 1 billion lives बचाई! 🏆\n\n🌾 High-yield wheat develop की\n🇮🇳 India की production double की\n🇵🇰 Pakistan की triple की\n\n1970 में Nobel Peace Prize। फिर भी अनजान 🤔\n\n👇 History का सबसे underrated hero!\n\n#normanborlaug #greenrevolution #hindi #shorts",
      tags: "norman borlaug hindi, green revolution india, wheat revolution, nobel peace prize, saved billion lives, famine prevention, indian agriculture, food security hindi, history hindi, unsung heroes",
      pinned_comment: "1 billion lives बचाई 🌾\n\nतुमने नाम सुना था?\n\n👍 = Nahi\n💬 = Haan"
    },
    instagram: {
      caption: "1 अरब लोगों को बचाया 🌾\n\nNorman Borlaug:\n• India wheat production double ✅\n• Pakistan triple ✅\n• Predicted famines कभी नहीं आई\n\nHistory में किसी से ज्यादा lives बचाई 😭\n\nComment \"HERO\" अगर नाम पहली बार सुना 👇\n\n#normanborlaug #greenrevolution #hindi #reels #wheat #india #pakistan #famine #science #viral #hindicontent #amazingfacts #hero"
    },
    x: {
      post: "Norman Borlaug 🌾\n\n• 1 billion lives बचाई\n• India wheat production double की\n• Pakistan triple की\n\nHistory में सबसे ज्यादा जानें बचाने वाला इंसान।\n\nतुमने नाम सुना था? 🤔"
    },
    hashtags: "#shorts #history #greenrevolution #hindi #normanborlaug #wheat #india #pakistan #hero #science"
  },

  58: {
    // The Library of Alexandria - History
    youtube: {
      title: "जली नहीं... भुला दी गई 📚 #shorts",
      description: "Library of Alexandria — Humanity का सबसे बड़ा loss! 📜\n\n📚 400,000 scrolls\n🔥 एक fire में नहीं जली\n😔 Centuries की neglect से खोई\n\nAristotle, Euclid, Archimedes... सब भूल गए 💔\n\n👇 ये किसी भी civilization के साथ हो सकता है!\n\n#alexandria #library #history #hindi #shorts",
      tags: "library of alexandria hindi, ancient library, lost knowledge, alexandria egypt, ancient history hindi, scrolls, historical mystery, knowledge loss, history hindi, ancient wisdom",
      pinned_comment: "जली नहीं... धीरे धीरे भुला दी गई 📚\n\nFunding band। Scholars चले गए। Scrolls सड़ गए।\n\n👍 = Sad truth\n💬 = आज क्या भूल रहे हैं हम?"
    },
    instagram: {
      caption: "जली नहीं... भुला दी गई 📚\n\nLibrary of Alexandria:\n• 400,000 scrolls\n• Aristotle, Euclid, Archimedes के works\n\nएक dramatic fire नहीं। Centuries की neglect 😔\n\nComment \"LIBRARY\" more history के लिए 👇\n\n#alexandria #library #history #hindi #reels #ancient #knowledge #scrolls #egypt #viral #india #hindicontent #amazingfacts #lost"
    },
    x: {
      post: "Library of Alexandria 📚\n\n• 400,000 scrolls\n• एक fire में नहीं जली\n• Centuries की neglect से खोई\n\nFunding बंद। Scholars चले गए। Scrolls सड़ गए।\n\nKnowledge dramatic disasters में नहीं खोती। जब caring बंद हो, तब खोती है।"
    },
    hashtags: "#shorts #history #library #hindi #alexandria #ancient #knowledge #scrolls #egypt #india"
  },

  59: {
    // Double-Slit Experiment - Physics
    youtube: {
      title: "देखो तो बदल जाए... न देखो तो अलग 👁️ #shorts",
      description: "Double-Slit Experiment — Quantum Mechanics की सबसे बड़ी mystery! 🔬\n\n⚡ Electrons waves जैसे behave करें\n👁️ Observe करो = particles बन जाएं\n🤯 देखने से reality बदल जाए!\n\nFeynman: \"इसमें quantum mechanics की only mystery है\"\n\n👇 Universe को पता है तुम देख रहे हो!\n\n#quantum #physics #doubleslit #hindi #shorts",
      tags: "double slit experiment hindi, quantum mechanics hindi, wave particle duality, physics hindi, observation effect, quantum physics explained, electron behavior, richard feynman, science shorts hindi, quantum mystery",
      pinned_comment: "देखो = Particles 👀\nन देखो = Waves 🌊\n\nUniverse को पता है तुम देख रहे हो!\n\n👍 = Mind blown\n💬 = समझ आया क्या?"
    },
    instagram: {
      caption: "देखो तो बदल जाए 👁️\n\nDouble-Slit Experiment:\n• Electrons दोनों slits से एक साथ जाएं\n• Observe करो = particles बन जाएं\n\nUniverse को पता है तुम देख रहे हो 🤯\n\nComment \"QUANTUM\" more physics के लिए 👇\n\n#quantum #physics #doubleslit #hindi #reels #electron #wave #observation #science #viral #india #hindicontent #amazingfacts #mystery"
    },
    x: {
      post: "Double-Slit Experiment 👁️\n\nElectrons:\n• न देखो = Waves 🌊\n• देखो = Particles ⚡\n\nObservation से reality बदल जाए।\n\nFeynman: \"इसमें quantum mechanics की only mystery है।\"\n\nUniverse को पता है तुम देख रहे हो।"
    },
    hashtags: "#shorts #quantum #physics #hindi #doubleslit #wave #particle #observation #science #india"
  },

  60: {
    // Time Dilation - Physics
    youtube: {
      title: "GPS में Einstein के equations हैं ⏰ #shorts",
      description: "Time Dilation — तुम्हारी pocket में time machine! 📱\n\n🛰️ GPS satellites 38 microseconds daily drift करें\n📏 बिना correction = 10km गलत!\n⏰ Einstein ने 100 साल पहले बताया था\n\nSpecial + General Relativity = Working GPS! 🗺️\n\n👇 Patent clerk से engineering fact तक!\n\n#timedilation #einstein #relativity #hindi #shorts",
      tags: "time dilation hindi, gps relativity, einstein hindi, special relativity, general relativity, time travel, gps satellites, physics hindi, science shorts hindi, relativity explained",
      pinned_comment: "GPS में Einstein के equations हैं ⏰\n\nबिना correction = रोज़ 10km गलत!\n\n👍 = Einstein genius\n💬 = Time travel possible है क्या?"
    },
    instagram: {
      caption: "GPS में Einstein के equations हैं ⏰\n\nTime Dilation:\n• Fast move करो = time slow\n• Strong gravity = time slow\n\nबिना correction GPS 10km/day drift करे 📍\n\nComment \"TIME\" more physics के लिए 👇\n\n#timedilation #einstein #gps #hindi #reels #relativity #physics #time #science #viral #india #hindicontent #amazingfacts #satellite"
    },
    x: {
      post: "GPS में Einstein हैं ⏰\n\n• Satellites 38 microseconds/day drift करें\n• बिना correction = 10km/day गलत\n\nSpecial + General Relativity\nPatent clerk की imagination\nTumhari pocket में time machine 📱"
    },
    hashtags: "#shorts #physics #einstein #hindi #timedilation #gps #relativity #time #science #india"
  },

  61: {
    // Quantum Entanglement - Physics
    youtube: {
      title: "100 light-years दूर... instantly बदल जाए 🔗 #shorts",
      description: "Quantum Entanglement — Einstein को \"Spooky\" लगा! 👻\n\n🔗 2 particles linked हो जाएं\n📍 Distance matter न करे\n⚡ एक measure करो, दूसरा instantly बदले!\n\n2022 Nobel Prize: Entanglement is REAL! 🏆\n\n👇 Universe non-local है... और हम नहीं जानते क्यों!\n\n#entanglement #quantum #physics #hindi #shorts",
      tags: "quantum entanglement hindi, spooky action, einstein quantum, physics hindi, nobel prize 2022, quantum physics explained, non local, particle physics hindi, science shorts hindi, quantum computing",
      pinned_comment: "Einstein को \"Spooky\" लगा 👻\n\nDecades disprove करने की कोशिश की। Fail हुआ।\n\n2022 में Nobel Prize मिला = Entanglement is REAL!\n\n👍 = Spooky indeed\n💬 = Quantum computing समझाओ!"
    },
    instagram: {
      caption: "100 light-years दूर... instantly बदल जाए 🔗\n\nQuantum Entanglement:\n• 2 particles link करो\n• एक measure करो\n• दूसरा instantly change! 🤯\n\nEinstein: \"Spooky\" 👻\n2022: Nobel Prize\n\nComment \"SPOOKY\" more quantum के लिए 👇\n\n#entanglement #quantum #physics #hindi #reels #einstein #particle #spooky #science #viral #india #hindicontent #amazingfacts #nobel"
    },
    x: {
      post: "Quantum Entanglement 🔗\n\n2 particles link करो।\n100 light-years दूर करो।\nएक measure करो।\nदूसरा instantly बदल जाए।\n\nEinstein: \"Spooky\" 👻\n2022: Nobel Prize confirmed it's real।\n\nUniverse non-local है।"
    },
    hashtags: "#shorts #quantum #entanglement #hindi #einstein #physics #spooky #particle #science #india"
  },

  62: {
    // Microwave Oven - Accidents
    youtube: {
      title: "Chocolate पिघल गई... Microwave बन गया 🍫 #shorts",
      description: "Percy Spencer — Curiosity से invention! 🌊\n\n🍫 Radar के पास chocolate पिघल गई\n🍿 Popcorn try किया = Pop!\n🥚 Egg try किया = Explode!\n\nWWII radar technology अब tumhare kitchen में है! 🏠\n\n👇 सिर्फ $2 (₹180) patent award मिला!\n\n#microwave #invention #accident #hindi #shorts",
      tags: "microwave invention hindi, percy spencer, accidental invention, radar technology, magnetron hindi, kitchen invention, world war 2 technology, science history hindi, invention story, raytheon",
      pinned_comment: "Chocolate पिघल गई... microwave बन गया 🍫\n\nSpencer को सिर्फ ₹180 patent award मिला!\n\n👍 = Curiosity wins\n💬 = और कौनसी accidental invention?"
    },
    instagram: {
      caption: "Chocolate पिघल गई... Microwave बन गया 🍫\n\nPercy Spencer:\n• Radar के पास खड़ा था\n• Chocolate pocket में पिघल गई\n• Popcorn try किया = Pop! 🍿\n\nWWII tech अब tumhare kitchen में 😱\n\nComment \"ACCIDENT\" more inventions के लिए 👇\n\n#microwave #invention #accident #hindi #reels #radar #kitchen #science #curiosity #viral #india #hindicontent #amazingfacts #percy"
    },
    x: {
      post: "1945: Percy Spencer radar के पास खड़ा था 🍫\n\nPocket में chocolate पिघल गई।\nPopcorn try किया — Pop! 🍿\nEgg try किया — Explode! 🥚\n\nMicrowave बन गया।\nWWII radar अब tumhare kitchen में।"
    },
    hashtags: "#shorts #microwave #invention #hindi #accident #radar #kitchen #science #curiosity #india"
  },

  63: {
    // Penicillin - Accidents
    youtube: {
      title: "Lab गंदी छोड़ी... 200 Million बचे 🧫 #shorts",
      description: "Alexander Fleming — Messy lab ने history बदली! 💊\n\n🧫 Vacation से पहले lab clean नहीं की\n🦠 Mold bacteria को मार रही थी\n💉 Penicillin discover हो गई!\n\n200+ million lives बचीं... messy scientist की वजह से! 😅\n\n👇 Kabhi kabhi गंदगी भी काम आती है!\n\n#penicillin #antibiotic #accident #hindi #shorts",
      tags: "penicillin discovery hindi, alexander fleming, antibiotic history, accidental discovery, medical history hindi, bacteria mold, world war 2 medicine, science history hindi, greatest discoveries, medicine hindi",
      pinned_comment: "Lab गंदी छोड़ी... 200 million lives बचीं 🧫\n\nHistory की सबसे बड़ी medical discovery!\n\n👍 = Lucky accident\n💬 = और कौनसी medical discovery?"
    },
    instagram: {
      caption: "Lab गंदी छोड़ी... 200 Million बचे 🧫\n\nAlexander Fleming:\n• Vacation पर गया\n• Lab clean नहीं की\n• Mold bacteria मार रही थी! 🦠\n\nPenicillin = 200+ million lives 💊\n\nComment \"MESSY\" more discoveries के लिए 👇\n\n#penicillin #antibiotic #accident #hindi #reels #medicine #bacteria #discovery #science #viral #india #hindicontent #amazingfacts #fleming"
    },
    x: {
      post: "1928: Fleming vacation से लौटा 🧫\n\nLab गंदी थी।\nMold bacteria मार रही थी।\n\nPenicillin discover हुई।\n200+ million lives बचीं।\n\nHistory की सबसे बड़ी medical discovery... messy lab की वजह से 😅"
    },
    hashtags: "#shorts #penicillin #antibiotic #hindi #accident #medicine #discovery #bacteria #science #india"
  },

  64: {
    // Vulcanized Rubber - Accidents
    youtube: {
      title: "Rubber गिरा stove पर... Industry बन गई 🛞 #shorts",
      description: "Charles Goodyear — Bankruptcy से billion-dollar industry! 🏭\n\n🔥 Rubber + Sulfur accidentally stove पर गिरा\n💪 Melt नहीं हुआ, durable बन गया!\n🚗 Car, Aerospace, सब इसी पर built हैं\n\nGoodyear debt में मरा... पर दुनिया बदल दी! 😔\n\n👇 Persistence + Luck = Revolution!\n\n#rubber #vulcanization #accident #hindi #shorts",
      tags: "vulcanized rubber hindi, charles goodyear, rubber invention, accidental discovery, tire history, industrial revolution hindi, goodyear tires, science history hindi, invention story, rubber industry",
      pinned_comment: "Rubber stove पर गिरा... Industry बन गई 🛞\n\nGoodyear debt में मरा। Industry ने उसका नाम लिया।\n\n👍 = Sad but inspiring\n💬 = और कौनसी accidental invention?"
    },
    instagram: {
      caption: "Rubber गिरा stove पर... Industry बन गई 🛞\n\nCharles Goodyear:\n• सालों bankrupt रहा\n• Rubber + Sulfur accidentally stove पर गिरा\n• Melt नहीं हुआ, durable बन गया! 💪\n\nCar industry इसी पर built है 🚗\n\nComment \"RUBBER\" more inventions के लिए 👇\n\n#rubber #vulcanization #accident #hindi #reels #tire #industry #invention #science #viral #india #hindicontent #amazingfacts #goodyear"
    },
    x: {
      post: "1839: Rubber + Sulfur stove पर गिरा 🔥\n\nMelt नहीं हुआ।\nDurable बन गया।\n\nVulcanization discover हुई।\n\nCar industry।\nAerospace industry।\nModern manufacturing।\n\nGoodyear debt में मरा। पर दुनिया बदल दी 🛞"
    },
    hashtags: "#shorts #rubber #vulcanization #hindi #accident #tire #industry #invention #science #india"
  },

  65: {
    // The McGurk Effect - Psychology
    youtube: {
      title: "Brain झूठ बोलता है... और तुम सुनते हो 🧠 #shorts",
      description: "McGurk Effect — तुम्हारा brain edit करता है! 👂\n\n🔊 Audio: \"ba\"\n👁️ Video: \"ga\"\n🧠 Brain: \"da\"\n\nजानते हुए भी override नहीं कर सकते! 🤯\n\n👇 तुम reality directly experience नहीं करते!\n\n#mcgurkeffect #psychology #brain #hindi #shorts",
      tags: "mcgurk effect hindi, brain tricks, psychology hindi, perception, audio visual illusion, brain science, cognitive psychology, neuroscience hindi, science shorts hindi, mind tricks",
      pinned_comment: "\"Ba\" सुनो, \"ga\" देखो, \"da\" सुनोगे 🧠\n\nBrain की best guess experience करते हो!\n\n👍 = Mind blown\n💬 = और brain कहाँ झूठ बोलता है?"
    },
    instagram: {
      caption: "Brain झूठ बोलता है 🧠\n\nMcGurk Effect:\n• Audio: \"ba\" 🔊\n• Video: \"ga\" 👁️\n• Brain creates: \"da\" 🤯\n\nजानते हुए भी override नहीं कर सकते!\n\nComment \"BRAIN\" more psychology के लिए 👇\n\n#mcgurkeffect #psychology #brain #hindi #reels #perception #illusion #mind #science #viral #india #hindicontent #amazingfacts #neuroscience"
    },
    x: {
      post: "McGurk Effect 🧠\n\n• Audio: \"ba\"\n• Video: \"ga\" lips\n• तुम सुनोगे: \"da\"\n\nजानते हुए भी override नहीं कर सकते।\n\nTum reality experience नहीं करते।\nBrain की best guess experience करते हो 👂"
    },
    hashtags: "#shorts #psychology #brain #hindi #mcgurkeffect #perception #illusion #mind #science #india"
  }
};

// Load existing data
const dataPath = path.join(__dirname, '..', 'public', 'data.json');
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

// Update topics with social media data
let updatedCount = 0;

for (const topic of data) {
  if (socialMediaData[topic.topic_id]) {
    topic.social_media = socialMediaData[topic.topic_id];
    updatedCount++;
    console.log(`Updated topic ${topic.topic_id}: ${topic.title}`);
  }
}

// Write updated data
fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));

console.log(`\nDone! Updated ${updatedCount} topics with social media metadata.`);
console.log('Topics updated: 51-65');
