#!/usr/bin/env node
/**
 * Add Social Media Metadata for Topics 81-100
 *
 * This script adds engaging Hindi social media content for YouTube, Instagram, and X
 * for topics 81-100 in the content.too.foo project.
 */

const fs = require('fs');
const path = require('path');

const socialMediaData = {
  81: {
    youtube: {
      title: "Golf Ball जितना Uranium = 1000 Tons Coal ⚛️ #shorts",
      description: "Nuclear Fission की असली ताकत! ⚛️\n\n🔥 Golf ball size uranium में 1000 tons coal जितनी energy\n🔥 Chain reaction कैसे काम करता है\n🔥 E = mc² का real meaning\n🔥 Stars की power अब हमारे हाथ में\n\n90 seconds में nuclear physics समझो!\n\n👍 Like करो अगर mind blown हुआ\n💬 Comment करो - इस power का क्या करना चाहिए?\n🔔 Subscribe for more science!\n\n#nuclear #physics #uranium #science #hindi #shorts #energy #atom #einstein #fission",
      tags: "nuclear fission hindi, uranium energy, chain reaction, E=mc2 hindi, nuclear physics hindi, atom bomb science, nuclear power plant, einstein hindi, science shorts hindi, amazing facts hindi",
      pinned_comment: "Golf ball = 1000 tons coal ⚛️\n\nStars की power हमारे हाथ में है!\n\n👍 = Mind blown\n💬 = Nuclear energy: friend या enemy?"
    },
    instagram: {
      caption: "Golf Ball जितना Uranium = 1000 Tons Coal ⚛️\n\n• Chain reaction exponentially multiply होता है\n• E = mc² - tiny mass = massive energy\n• Same reaction जो stars को shine कराती है\n\nStars की power अब हमारे हाथ में 🌟\n\nComment \"NUCLEAR\" अगर mind blown हुआ 👇\n\n#nuclear #physics #science #hindi #reels #uranium #energy #atom #einstein #facts #viral #india #hindicontent #amazingfacts #fission"
    },
    x: {
      post: "Golf ball जितना uranium ⚛️\n\n= 1000 tons coal की energy\n\nChain reaction:\n3 → 9 → 27 → 81...\n\nE = mc²\nTiny mass loss = massive energy\n\nStars की power हमारे हाथ में 🌟"
    },
    hashtags: "#shorts #science #physics #hindi #nuclear #uranium #energy #india #atom #einstein"
  },

  82: {
    youtube: {
      title: "Einstein को Nobel Relativity के लिए नहीं मिला 🤯 #shorts",
      description: "Einstein का REAL Nobel Prize Discovery! 🏆\n\n🔥 Nobel Relativity के लिए नहीं था\n🔥 Light particles से बनी है - इसके लिए था\n🔥 Blue light electrons निकालती है, Red नहीं\n🔥 Quantum mechanics की शुरुआत यहीं से हुई\n\nPhotoelectric effect हर phone में है!\n\n👍 Like अगर नया सीखा\n💬 Comment - कौनसी Nobel discovery explore करूं?\n🔔 Subscribe for more!\n\n#einstein #nobel #physics #quantum #science #hindi #shorts #light #photon #photoelectric",
      tags: "einstein nobel prize hindi, photoelectric effect hindi, quantum mechanics hindi, light particles photons, physics hindi, wave particle duality, solar panel science, science shorts hindi, amazing facts, nobel prize history",
      pinned_comment: "Einstein को Nobel Relativity के लिए नहीं मिला! 🏆\n\nLight particles से बनी है - यह prove करने के लिए मिला!\n\n👍 = Didn't know this\n💬 = और कौनसी Nobel story?"
    },
    instagram: {
      caption: "Einstein को Nobel Relativity के लिए नहीं मिला 🏆\n\n• Relativity \"controversial\" थी\n• Light particles से बनी है - इसके लिए मिला\n• Quantum mechanics यहीं से शुरू हुई\n\nTumhare phone का solar panel? Einstein's Nobel work! 📱\n\nComment \"EINSTEIN\" more facts के लिए 👇\n\n#einstein #nobel #physics #hindi #reels #quantum #science #light #photon #facts #viral #india #hindicontent #amazingfacts #photoelectric"
    },
    x: {
      post: "Einstein को Nobel किसलिए मिला? 🏆\n\n❌ Relativity - बहुत controversial\n✅ Light particles से बनी है\n\nBlue light → electrons निकलते हैं\nRed light → कितनी भी bright हो, कुछ नहीं\n\nQuantum mechanics की शुरुआत 💡"
    },
    hashtags: "#shorts #science #physics #hindi #einstein #nobel #quantum #india #light #photon"
  },

  83: {
    youtube: {
      title: "गर्म चीज़ का Color देखो = Temperature पता 🌡️ #shorts",
      description: "Temperature Color में लिखा है! 🔥\n\n🔥 500°C = Dull Red\n🔥 3000°C = Yellow-white\n🔥 6000°C (Sun) = White\n🔥 12000°C = Blue-white\n\nStars का color उनका temperature बताता है!\n\n👍 Like अगर नया सीखा\n💬 Comment - कौनसा star देखा है?\n🔔 Subscribe for more physics!\n\n#blackbody #temperature #physics #science #hindi #shorts #stars #astronomy #color #heat",
      tags: "black body radiation hindi, temperature color, star temperature, physics hindi, betelgeuse rigel, astronomy hindi, infrared radiation, science shorts hindi, amazing facts hindi, light wavelength",
      pinned_comment: "Star का color = उसका temperature 🌡️\n\nRed = cooler\nBlue = scorching hot!\n\n👍 = Useful knowledge\n💬 = कौनसा star देखा है night sky में?"
    },
    instagram: {
      caption: "गर्म चीज़ का Color = Temperature 🌡️\n\n• 500°C = Dull Red\n• 3000°C = Yellow-white\n• 6000°C (Sun) = White\n• 12000°C = Blue-white\n\nBetelgeuse Red है = 3500K\nRigel Blue है = 12000K 🌟\n\nNo thermometer needed!\n\nComment \"STARS\" astronomy facts के लिए 👇\n\n#physics #temperature #science #hindi #reels #stars #astronomy #color #heat #facts #viral #india #hindicontent #amazingfacts #blackbody"
    },
    x: {
      post: "Color से temperature पता 🌡️\n\n500°C → Red\n3000°C → Yellow\n6000°C → White\n12000°C → Blue\n\nBetelgeuse Red = cooler\nRigel Blue = scorching 🔥\n\nStars अपना temperature color में broadcast करते हैं!"
    },
    hashtags: "#shorts #science #physics #hindi #stars #astronomy #temperature #india #color #heat"
  },

  84: {
    youtube: {
      title: "इतना ठंडा करो कि Magic हो जाए ❄️ #shorts",
      description: "Superconductivity - Physics का जादू! ❄️\n\n🔥 -269°C पर electricity forever flow करती है\n🔥 Zero resistance - कोई energy loss नहीं\n🔥 Magnets के ऊपर levitate करते हैं\n🔥 MRI machines इसी से काम करती हैं\n\nRoom temperature superconductivity मिल जाए तो...\n\n👍 Like अगर amazing लगा\n💬 Comment - Future में क्या possible होगा?\n🔔 Subscribe!\n\n#superconductivity #physics #quantum #science #hindi #shorts #cold #magnet #MRI #future",
      tags: "superconductivity hindi, zero resistance, quantum physics hindi, absolute zero, MRI machine science, levitation science, future technology hindi, physics hindi, science shorts, amazing facts hindi",
      pinned_comment: "Zero resistance = Forever electricity ❄️\n\nRoom temperature में मिल जाए तो revolution!\n\n👍 = Future tech\n💬 = इससे क्या बना सकते हैं?"
    },
    instagram: {
      caption: "इतना ठंडा करो कि Magic हो जाए ❄️\n\n• -269°C पर resistance = ZERO\n• Electricity forever flow करती है\n• Magnets के ऊपर levitate!\n• MRI machines इसी से काम करती हैं\n\nRoom temperature superconductivity = Revolution 🚀\n\nComment \"SUPER\" more physics के लिए 👇\n\n#superconductivity #physics #science #hindi #reels #quantum #cold #magnet #future #facts #viral #india #hindicontent #amazingfacts #technology"
    },
    x: {
      post: "Metal को -269°C करो ❄️\n\n→ Resistance = ZERO\n→ Electricity forever flow\n→ Magnets पर levitate\n\nRoom temperature में मिल जाए?\n• Continents में बिना loss electricity\n• Hovering trains\n\nPhysics miracles promise कर रही है 🌟"
    },
    hashtags: "#shorts #science #physics #hindi #superconductivity #quantum #future #india #technology #magnet"
  },

  85: {
    youtube: {
      title: "LASER = Trillions Photons एक साथ March 💡 #shorts",
      description: "Coherent Light की Power! 💡\n\n🔥 Normal light = chaos\n🔥 Laser = perfect sync में photons\n🔥 Steel cut कर सकता है\n🔥 Moon तक distance measure कर सकता है\n🔥 DVD पढ़ सकता है - red blood cell से छोटे pits\n\nEk invention से unlimited applications!\n\n👍 Like अगर interesting लगा\n💬 Comment - Laser का कौनसा use सबसे cool है?\n🔔 Subscribe!\n\n#laser #light #physics #science #hindi #shorts #photon #technology #coherent #optics",
      tags: "laser hindi, coherent light, photons hindi, laser technology, fiber optic, laser surgery, physics hindi, stimulated emission, science shorts hindi, amazing facts hindi, light amplification",
      pinned_comment: "LASER = Light marching in perfect sync 💡\n\nChaos से order = unlimited power!\n\n👍 = Amazing\n💬 = Laser का सबसे cool use?"
    },
    instagram: {
      caption: "LASER = Perfect Sync में Photons 💡\n\n• Normal light = random chaos\n• Laser = trillions photons identical\n• Steel cut कर सकता है\n• Moon तक distance measure कर सकता है\n• DVD पढ़ता है - RBC से छोटे pits\n\nOrder from chaos = Unlimited power! ⚡\n\nComment \"LASER\" more facts के लिए 👇\n\n#laser #physics #science #hindi #reels #light #photon #technology #optics #facts #viral #india #hindicontent #amazingfacts #coherent"
    },
    x: {
      post: "LASER 💡\n\nNormal light: Random chaos\nLaser: Trillions photons in perfect sync\n\nSame frequency. Same phase. Same direction.\n\n→ Steel cut करो\n→ Moon distance measure करो\n→ Eye surgery करो\n\nLight organized = almost anything possible ⚡"
    },
    hashtags: "#shorts #science #physics #hindi #laser #light #photon #india #technology #optics"
  },

  86: {
    youtube: {
      title: "अभी 3.8 Million नए Cells बने 🧬 #shorts",
      description: "Mitosis - Universe की सबसे Accurate Copy Machine! 🧬\n\n🔥 हर second 3.8 million नए cells\n🔥 Error rate: 1 in billion letters\n🔥 Wikipedia 1000 बार copy करो, 1 typo\n🔥 Same DNA से heart, brain, eyes बने\n\nTumhara body खुद को rebuild कर रहा है!\n\n👍 Like अगर amazing लगा\n💬 Comment - Body का कौनसा fact सबसे shocking है?\n🔔 Subscribe!\n\n#mitosis #cells #biology #science #hindi #shorts #DNA #body #genetics #life",
      tags: "mitosis hindi, cell division hindi, DNA replication, biology hindi, human body facts, genetics hindi, chromosomes hindi, science shorts hindi, amazing facts hindi, body science",
      pinned_comment: "अभी 3.8 million cells बने 🧬\n\nError rate: 1 in billion!\n\n👍 = Body is amazing\n💬 = और कौनसा body fact?"
    },
    instagram: {
      caption: "अभी 3.8 Million नए Cells बने 🧬\n\n• 2 meter DNA एक cell में coiled\n• Error rate: 1 in billion letters\n• Wikipedia 1000x copy = 1 typo\n• Same DNA → different organs\n\nTumhara body खुद को rebuild कर रहा है! 🔄\n\nComment \"CELLS\" biology facts के लिए 👇\n\n#mitosis #biology #science #hindi #reels #DNA #cells #genetics #body #facts #viral #india #hindicontent #amazingfacts #life"
    },
    x: {
      post: "अभी 3.8 million cells बने 🧬\n\n6 feet DNA → fits in 1/1000th of a hair\nError rate: 1 in billion\n\nWikipedia 1000x copy करो\nSirf 1 typo\n\nSame DNA se heart, brain, eyes बने\n\nBody खुद को rebuild कर रहा है जब तुम ये पढ़ रहे हो!"
    },
    hashtags: "#shorts #science #biology #hindi #DNA #cells #mitosis #india #genetics #body"
  },

  87: {
    youtube: {
      title: "Plants सिर्फ 1% Efficient हैं - फिर भी Miracle 🌱 #shorts",
      description: "Photosynthesis का Hidden Truth! 🌱\n\n🔥 Plants सिर्फ 1% efficient\n🔥 Tumhara solar panel बेहतर है\n🔥 Green color = rejected light\n🔥 लेकिन shade, drought, cold में survive\n🔥 पूरी planet को terraform किया\n\nEfficiency सब कुछ नहीं!\n\n👍 Like अगर perspective बदला\n💬 Comment - Nature vs Technology?\n🔔 Subscribe!\n\n#photosynthesis #plants #biology #science #hindi #shorts #solar #nature #chlorophyll #oxygen",
      tags: "photosynthesis hindi, plants efficiency, solar panel vs plants, chlorophyll hindi, biology hindi, oxygen production, nature science hindi, science shorts hindi, amazing facts hindi, plant science",
      pinned_comment: "Plants 1% efficient 🌱\n\nPar 1000 saal survive karte hain\nPuri planet terraform ki\n\n👍 = Nature wins\n💬 = Efficiency vs Survival?"
    },
    instagram: {
      caption: "Plants सिर्फ 1% Efficient हैं 🌱\n\n• Green = light jo plants REJECT karti hain\n• Tumhara solar panel har ped ko beat karta hai\n• लेकिन plants 1000 saal survive karte hain\n• Shade, drought, cold mein kaam karte hain\n\nEfficiency sab kuch nahi - Survival matters! 💪\n\nComment \"PLANTS\" more facts ke liye 👇\n\n#photosynthesis #biology #science #hindi #reels #plants #solar #nature #oxygen #facts #viral #india #hindicontent #amazingfacts #chlorophyll"
    },
    x: {
      post: "Plants: 1% efficient 🌱\nSolar panel: 20%+ efficient\n\nPlants better kyun?\n\n→ 1000 saal survive\n→ Shade mein kaam karte hain\n→ Storm mein nahi marte\n→ Puri planet terraform ki\n\nEfficiency sab kuch nahi jab eternity ke liye build karo 🌍"
    },
    hashtags: "#shorts #science #biology #hindi #plants #photosynthesis #solar #india #nature #oxygen"
  },

  88: {
    youtube: {
      title: "Brain में Signal 432 km/h से Travel करता है ⚡ #shorts",
      description: "Nervous System - City से ज़्यादा Electrical Activity! ⚡\n\n🔥 86 billion neurons\n🔥 Milky Way से ज़्यादा connections\n🔥 Signal speed: 432 km/h\n🔥 20 watts पर चलता है - dim bulb से कम\n\nKnown universe की सबसे complex object!\n\n👍 Like अगर mind blown हुआ\n💬 Comment - Brain का कौनसा fact सबसे shocking?\n🔔 Subscribe!\n\n#brain #neurons #biology #science #hindi #shorts #nervous #electricity #synapse #mind",
      tags: "nervous system hindi, brain facts hindi, neurons hindi, synapse hindi, biology hindi, brain electricity, neuroscience hindi, science shorts hindi, amazing facts hindi, human brain",
      pinned_comment: "Brain = 20 watts पर चलता है ⚡\n\nDim bulb से कम power!\nUniverse की सबसे complex object!\n\n👍 = Incredible\n💬 = Brain का और कौनसा fact?"
    },
    instagram: {
      caption: "Brain में Signal 432 km/h ⚡\n\n• 86 billion neurons\n• Milky Way से ज़्यादा connections\n• Electricity → Chemistry → Electricity\n• 20 watts पर चलता है\n\nDim bulb से कम power में universe की सबसे complex object! 🧠\n\nComment \"BRAIN\" neuroscience के लिए 👇\n\n#brain #neurons #biology #hindi #reels #science #nervous #mind #electricity #facts #viral #india #hindicontent #amazingfacts #neuroscience"
    },
    x: {
      post: "Tumhare brain mein abhi 🧠\n\n→ Signal 432 km/h se travel\n→ 86 billion neurons fire\n→ City ke power grid se zyada activity\n\nPower consumption?\n20 watts. Dim bulb se kam.\n\nUniverse ki sabse complex object 20 watts pe chalti hai ⚡"
    },
    hashtags: "#shorts #science #biology #hindi #brain #neurons #mind #india #nervous #neuroscience"
  },

  89: {
    youtube: {
      title: "नमक के दाने से छोटा Molecule = Tumhara Mood 🧪 #shorts",
      description: "Hormones - Invisible Controllers! 🧪\n\n🔥 Dopamine = achievement का pleasure\n🔥 Cortisol = stress response\n🔥 Endorphins = natural painkillers\n🔥 Oxytocin = bonding hormone\n\nTum इस system को hack कर सकते हो!\n\n👍 Like अगर useful लगा\n💬 Comment - कौनसा hormone सबसे powerful?\n🔔 Subscribe!\n\n#hormones #dopamine #biology #science #hindi #shorts #mood #cortisol #brain #chemistry",
      tags: "hormones hindi, dopamine hindi, cortisol stress, endorphins hindi, oxytocin hindi, biology hindi, brain chemistry, mood science, science shorts hindi, amazing facts hindi",
      pinned_comment: "Namak se chhota molecule = tumhara mood 🧪\n\nExercise → Endorphins\nSunlight → Serotonin\nHug → Oxytocin\n\n👍 = Hack the system\n💬 = कौनसा hormone explore करूं?"
    },
    instagram: {
      caption: "नमक से छोटा Molecule = Tumhara Mood 🧪\n\n• Dopamine = achievement pleasure\n• Cortisol = stress response\n• Endorphins = natural painkillers\n• Oxytocin = bonding hormone\n\nSystem को hack करो:\nExercise → Endorphins\nSunlight → Serotonin\nHug → Oxytocin 🫂\n\nComment \"MOOD\" brain chemistry के लिए 👇\n\n#hormones #dopamine #biology #hindi #reels #science #mood #brain #chemistry #facts #viral #india #hindicontent #amazingfacts #cortisol"
    },
    x: {
      post: "Mood decide करने वाला molecule 🧪\n\nNamak ke daane se chhota hai\n\nDopamine → Pleasure\nCortisol → Stress\nEndorphins → Euphoria\nOxytocin → Love\n\nHack karo:\n🏃 Exercise → Endorphins\n☀️ Sunlight → Serotonin\n🫂 Hug → Oxytocin"
    },
    hashtags: "#shorts #science #biology #hindi #hormones #dopamine #mood #india #brain #chemistry"
  },

  90: {
    youtube: {
      title: "Tumhare paas TAIL hai - abhi bhi 🦎 #shorts",
      description: "Evolution के Receipts Tumhare Body में! 🦎\n\n🔥 Coccyx = fused tail vertebrae\n🔥 Ear muscles = dogs जैसे ears rotate करने के लिए\n🔥 Third eyelid = reptiles का leftover\n🔥 Goosebumps = fur puff करने के लिए थे\n\nTum walking museum हो!\n\n👍 Like अगर mind blown हुआ\n💬 Comment - कौनसा vestigial organ सबसे interesting?\n🔔 Subscribe!\n\n#evolution #biology #vestigial #science #hindi #shorts #body #tail #human #anatomy",
      tags: "evolution hindi, vestigial organs hindi, human tail coccyx, evolution evidence, biology hindi, human body facts, anatomy hindi, science shorts hindi, amazing facts hindi, darwin evolution",
      pinned_comment: "Tumhare paas TAIL hai 🦎\n\nCoccyx = 4 fused vertebrae\n\nEvolution ke receipts tumhare body mein!\n\n👍 = Mind blown\n💬 = और कौनसा vestigial organ?"
    },
    instagram: {
      caption: "Tumhare paas TAIL hai - Abhi bhi 🦎\n\n• Coccyx = 4 fused tail vertebrae\n• Ear muscles = rotate करने के लिए थे\n• Third eyelid = reptiles का leftover\n• Goosebumps = fur puff करने के लिए\n\n3.8 billion years की evolution का walking museum! 🏛️\n\nComment \"EVOLUTION\" more facts के लिए 👇\n\n#evolution #biology #science #hindi #reels #body #vestigial #human #anatomy #facts #viral #india #hindicontent #amazingfacts #darwin"
    },
    x: {
      post: "Tumhare paas TAIL hai 🦎\n\nCoccyx = 4 fused vertebrae\nEar muscles = rotate के लिए थे\nThird eyelid = reptiles का leftover\nGoosebumps = fur puff के लिए\n\nEvolution ka evidence fossils mein nahi\nMirror mein hai 🪞"
    },
    hashtags: "#shorts #science #biology #hindi #evolution #body #human #india #anatomy #vestigial"
  },

  91: {
    youtube: {
      title: "DNA Edit करो जैसे Word Document ✂️ #shorts",
      description: "CRISPR - Life का Control-F! ✂️\n\n🔥 DNA में specific sequence ढूंढो\n🔥 Cut करो\n🔥 नया gene paste करो\n🔥 Genetic blindness cure हो चुकी है\n\n2018 में human embryos edit हुए - वो बच्चे आज alive हैं!\n\n👍 Like अगर future shocking लगा\n💬 Comment - CRISPR: blessing या curse?\n🔔 Subscribe!\n\n#CRISPR #DNA #genetics #science #hindi #shorts #gene #editing #biology #future",
      tags: "CRISPR hindi, gene editing hindi, DNA editing, genetic engineering hindi, biology hindi, cas9 hindi, genetic disease cure, science shorts hindi, amazing facts hindi, future technology",
      pinned_comment: "DNA editing जैसे Word document ✂️\n\nControl-F → Find\nCas9 → Cut\nPaste → New gene\n\n👍 = Future is here\n💬 = CRISPR: blessing या curse?"
    },
    instagram: {
      caption: "DNA Edit करो जैसे Word Document ✂️\n\n• Guide RNA = Control-F\n• Cas9 = Molecular scissors\n• Cut → Paste → Done\n• Genetic blindness cure हो चुकी है\n\n2018: Human embryos edited\nवो बच्चे आज alive हैं 👶\n\nComment \"CRISPR\" genetics के लिए 👇\n\n#CRISPR #DNA #genetics #hindi #reels #science #gene #editing #biology #facts #viral #india #hindicontent #amazingfacts #future"
    },
    x: {
      post: "DNA Edit करो जैसे Word Document ✂️\n\nGuide RNA = Control-F\nCas9 = Cut\nNew gene = Paste\n\n✅ Genetic blindness cured\n✅ Malaria-resistant mosquitoes\n⚠️ 2018: Human embryos edited\n\n3.8 billion saal DNA ne humein control kiya\nAb hum control kar rahe hain"
    },
    hashtags: "#shorts #science #biology #hindi #CRISPR #DNA #genetics #india #gene #future"
  },

  92: {
    youtube: {
      title: "Chickenpox दोबारा क्यों नहीं होती? 🛡️ #shorts",
      description: "Immune System - Body की Memory! 🛡️\n\n🔥 Body हर disease याद रखता है\n🔥 Memory cells decades तक जीते हैं\n🔥 Vaccine = cheat code\n🔥 बिना बीमार हुए immunity\n\nBiological library of every battle you've won!\n\n👍 Like अगर interesting लगा\n💬 Comment - Vaccine लगवाई या नहीं?\n🔔 Subscribe!\n\n#immune #vaccine #biology #science #hindi #shorts #antibody #memory #health #virus",
      tags: "immune system hindi, vaccine hindi, antibodies hindi, memory cells, biology hindi, immunity hindi, white blood cells, science shorts hindi, amazing facts hindi, health science",
      pinned_comment: "Body हर disease याद रखता है 🛡️\n\nMemory cells = decades तक guard पर\n\n👍 = Amazing defense\n💬 = और कौनसा immune fact?"
    },
    instagram: {
      caption: "Chickenpox दोबारा क्यों नहीं होती? 🛡️\n\n• Body हर disease याद रखता है\n• Memory cells decades तक जीते हैं\n• Vaccine = weakened pathogen दिखाओ\n• Memory बनाओ बिना बीमार हुए\n\nBiological library of every battle! 📚\n\nComment \"IMMUNE\" biology facts के लिए 👇\n\n#immune #vaccine #biology #hindi #reels #science #antibody #health #virus #facts #viral #india #hindicontent #amazingfacts #memory"
    },
    x: {
      post: "Chickenpox दोबारा क्यों नहीं होती? 🛡️\n\nBody याद रखता है!\n\n1. Pathogen आया\n2. Body ने fight किया\n3. Memory cells बने\n4. Decades तक guard पर\n\nVaccine = cheat code\nMemory बनाओ बिना बीमार हुए 💉"
    },
    hashtags: "#shorts #science #biology #hindi #immune #vaccine #health #india #antibody #virus"
  },

  93: {
    youtube: {
      title: "Plants Move करते हैं - तुम देख नहीं पाते 🌻 #shorts",
      description: "Plants का Secret Movement! 🌻\n\n🔥 Sunflowers sun को track करते हैं\n🔥 Venus flytrap COUNT करता है - 2 touches में SNAP\n🔥 Mimosa pudica touch पर fold हो जाती है\n🔥 Plants chemical warfare लड़ते हैं\n\nWo timescale पर operate करते हैं जो हम perceive नहीं कर सकते!\n\n👍 Like अगर mind blown हुआ\n💬 Comment - कौनसा plant सबसे interesting?\n🔔 Subscribe!\n\n#plants #movement #biology #science #hindi #shorts #venus #mimosa #nature #botany",
      tags: "plant movement hindi, venus flytrap hindi, mimosa pudica, phototropism hindi, biology hindi, plants communication, nature hindi, science shorts hindi, amazing facts hindi, botany hindi",
      pinned_comment: "Venus flytrap COUNT करता है 🌱\n\n1 touch = nothing\n2 touches in 20 sec = SNAP!\n\n👍 = Plants are smart\n💬 = कौनसा plant सबसे fascinating?"
    },
    instagram: {
      caption: "Plants Move करते हैं 🌻\n\n• Sunflowers sun track करते हैं\n• Venus flytrap COUNT करता है\n• 2 touches in 20 sec = SNAP!\n• Mimosa pudica touch पर fold\n\nWo communicate भी करते हैं - chemical warfare! ⚔️\n\nComment \"PLANTS\" more facts के लिए 👇\n\n#plants #biology #science #hindi #reels #venus #mimosa #nature #movement #facts #viral #india #hindicontent #amazingfacts #botany"
    },
    x: {
      post: "Plants move करते हैं 🌻\n\nSunflowers → Sun track\nVenus flytrap → COUNT करता है!\n\n1 touch = nothing\n2 touches in 20 sec = SNAP! 🪤\n\n1/10 second में close\nFalse alarms पर energy waste नहीं\n\nWo passive नहीं हैं - timescale अलग है"
    },
    hashtags: "#shorts #science #biology #hindi #plants #venus #mimosa #india #nature #botany"
  },

  94: {
    youtube: {
      title: "Math खुद को Prove नहीं कर सकती 🤯 #shorts",
      description: "Gödel's Incompleteness - Math का Paradox! 🤯\n\n🔥 कुछ true statements prove नहीं हो सकतीं\n🔥 \"This statement cannot be proven\"\n🔥 True तो है - prove नहीं हो सकती\n🔥 कोई भी system complete नहीं हो सकता\n\nMath को math ने तोड़ा!\n\n👍 Like अगर brain hurt हुआ\n💬 Comment - समझ आया या explain करूं?\n🔔 Subscribe!\n\n#godel #math #logic #science #hindi #shorts #paradox #proof #mathematics #philosophy",
      tags: "godel incompleteness hindi, mathematics paradox, logic hindi, math proof, philosophy hindi, godel theorem, undecidable statements, science shorts hindi, amazing facts hindi, math hindi",
      pinned_comment: "Math खुद को prove नहीं कर सकती 🤯\n\n\"This statement cannot be proven\"\n\nTrue hai? Prove नहीं हो सकती\nFalse है? Contradiction!\n\n👍 = Mind broken\n💬 = और कौनसा paradox?"
    },
    instagram: {
      caption: "Math खुद को Prove नहीं कर सकती 🤯\n\n• 1931: Kurt Gödel ने prove किया\n• \"This statement cannot be proven\"\n• True है → prove नहीं हो सकती\n• False है → contradiction!\n\nUniverse math से stranger है! 🌌\n\nComment \"GODEL\" philosophy के लिए 👇\n\n#godel #math #logic #hindi #reels #science #paradox #philosophy #proof #facts #viral #india #hindicontent #amazingfacts #mathematics"
    },
    x: {
      post: "Math खुद को prove नहीं कर सकती 🤯\n\n1931: Gödel ने prove किया\n\n\"This statement cannot be proven\"\n\nFalse? → prove हो सकती → True → Contradiction!\nTrue? → prove नहीं हो सकती → exactly what it claims\n\nTrue AND unprovable! Math broke itself."
    },
    hashtags: "#shorts #science #math #hindi #godel #logic #paradox #india #philosophy #mathematics"
  },

  95: {
    youtube: {
      title: "Brazil में Butterfly = Texas में Hurricane 🦋 #shorts",
      description: "Chaos Theory - Future Unpredictable है! 🦋\n\n🔥 Tiny change = massive effect\n🔥 0.506127 vs 0.506 = completely different weather\n🔥 Weather forecast 2 weeks बाद fail\n🔥 Universe random नहीं - chaotic है\n\nPerfect prediction impossible - hard नहीं, impossible!\n\n👍 Like अगर scary और fascinating लगा\n💬 Comment - Life में butterfly effect experience किया?\n🔔 Subscribe!\n\n#chaos #butterfly #math #science #hindi #shorts #weather #prediction #lorenz #physics",
      tags: "chaos theory hindi, butterfly effect hindi, edward lorenz, weather prediction hindi, math hindi, sensitive dependence, deterministic chaos, science shorts hindi, amazing facts hindi, physics hindi",
      pinned_comment: "Butterfly effect REAL है 🦋\n\n0.506127 vs 0.506\n= Completely different weather\n\n👍 = Scary\n💬 = अपना butterfly effect share करो!"
    },
    instagram: {
      caption: "Brazil में Butterfly = Texas में Hurricane 🦋\n\n• 1961: Lorenz ने discover किया\n• 0.506127 vs 0.506 round किया\n• Completely different weather prediction\n• Millionth decimal = massive change\n\nPerfect prediction impossible - hard नहीं, IMPOSSIBLE! 🌀\n\nComment \"CHAOS\" math facts के लिए 👇\n\n#chaos #butterfly #math #hindi #reels #science #weather #lorenz #physics #facts #viral #india #hindicontent #amazingfacts #prediction"
    },
    x: {
      post: "Butterfly effect REAL है 🦋\n\n1961: Edward Lorenz\n0.506127 → 0.506 round किया\n\nResult?\nCompletely different weather prediction\n\nTiny cause → massive effect\nWeather forecast 2 weeks बाद fail इसीलिए\n\nPerfect prediction impossible. Not hard. Impossible."
    },
    hashtags: "#shorts #science #math #hindi #chaos #butterfly #weather #india #physics #prediction"
  },

  96: {
    youtube: {
      title: "Internet की Security = 2000 साल पुराने Numbers 🔐 #shorts",
      description: "Prime Numbers - Digital World का Lock! 🔐\n\n🔥 Prime को multiply करना easy\n🔥 Factor करना nearly impossible\n🔥 600-digit number = sun burn out से पहले crack नहीं होगा\n🔥 RSA encryption हर secure website में\n\nMathematics abstract नहीं - tumhare pocket में है!\n\n👍 Like अगर interesting लगा\n💬 Comment - Math boring है क्या?\n🔔 Subscribe!\n\n#prime #encryption #math #science #hindi #shorts #RSA #security #internet #cryptography",
      tags: "prime numbers hindi, RSA encryption hindi, internet security, cryptography hindi, math hindi, factoring problem, cybersecurity hindi, science shorts hindi, amazing facts hindi, computer security",
      pinned_comment: "Internet security = Prime numbers 🔐\n\nMultiplication: Easy\nFactoring: Impossible\n\n👍 = Math is everywhere\n💬 = और कौनसी math daily life में?"
    },
    instagram: {
      caption: "Internet Security = 2000 साल पुराने Numbers 🔐\n\n• 15 = 3 × 5 (easy)\n• 600-digit product = which 2 primes?\n• Sun burn out से पहले crack नहीं होगा\n• Every secure website uses this\n\nMathematics abstract नहीं - tumhare pocket में है! 📱\n\nComment \"PRIME\" math facts के लिए 👇\n\n#prime #encryption #math #hindi #reels #science #RSA #security #internet #facts #viral #india #hindicontent #amazingfacts #cryptography"
    },
    x: {
      post: "Internet security = Prime numbers 🔐\n\n15 = 3 × 5 (easy)\n\n600-digit number = which 2 primes?\n\nNo computer can crack it\nNot in years\nNot in centuries\nNot before sun burns out ☀️\n\nMath discovered 2000 years ago = Digital world का lock"
    },
    hashtags: "#shorts #science #math #hindi #prime #encryption #RSA #india #security #cryptography"
  },

  97: {
    youtube: {
      title: "इस Problem को Solve करो = $1 Million 💰 #shorts",
      description: "Riemann Hypothesis - Math का सबसे बड़ा Mystery! 💰\n\n🔥 160 साल से unsolved\n🔥 10 trillion zeros check हुए - सब line up करते हैं\n🔥 पर proof नहीं है\n🔥 False हुई तो math collapse\n\n$1 million prize अभी भी wait कर रहा है!\n\n👍 Like अगर try करना है\n💬 Comment - Math में interested हो?\n🔔 Subscribe!\n\n#riemann #math #million #science #hindi #shorts #prime #unsolved #mathematics #prize",
      tags: "riemann hypothesis hindi, million dollar math problem, prime numbers mystery, unsolved math hindi, mathematics hindi, clay institute prize, math problems hindi, science shorts hindi, amazing facts hindi",
      pinned_comment: "160 साल से unsolved 💰\n\nTrue prove करो = $1 million\nFalse prove करो = $1 million\n\n👍 = I'll try\n💬 = Math का कौनसा mystery explore करूं?"
    },
    instagram: {
      caption: "इस Problem को Solve करो = $1 Million 💰\n\n• Riemann Hypothesis - 160 years unsolved\n• Primes कहाँ appear होते हैं\n• 10 trillion zeros checked - सब line up\n• पर proof नहीं है\n\nTrue या False prove करो - either way $1 million! 🏆\n\nComment \"RIEMANN\" unsolved mysteries के लिए 👇\n\n#riemann #math #million #hindi #reels #science #prime #unsolved #prize #facts #viral #india #hindicontent #amazingfacts #mathematics"
    },
    x: {
      post: "$1 Million problem 💰\n\nRiemann Hypothesis\n160 years unsolved\n\n10 trillion zeros checked\nSab line up karte hain\n\nPar proof nahi\n\nTrue prove karo = $1 million\nFalse prove karo = $1 million\n\nHistory ke greatest minds fail\nShayad tum karoge?"
    },
    hashtags: "#shorts #science #math #hindi #riemann #million #prime #india #unsolved #prize"
  },

  98: {
    youtube: {
      title: "Sugar Pill से Real Pain Cure 🍬 #shorts",
      description: "Placebo Effect - Mind की Power! 🍬\n\n🔥 Fake pill से real dopamine release\n🔥 Patients को बताया \"यह placebo है\" - फिर भी काम किया\n🔥 Ritual और expectation से healing\n🔥 Mind और body एक ही network\n\nSabse powerful pharmacy tumhare skull में है!\n\n👍 Like अगर mind-blowing लगा\n💬 Comment - Believe करते हो?\n🔔 Subscribe!\n\n#placebo #mind #psychology #science #hindi #shorts #brain #healing #medicine #belief",
      tags: "placebo effect hindi, mind body connection, psychology hindi, brain healing, belief medicine, open label placebo, mental health hindi, science shorts hindi, amazing facts hindi, neuroscience",
      pinned_comment: "Sugar pill = Real healing 🍬\n\nPatients ko pata tha fake hai\nPhir bhi काम किया!\n\n👍 = Mind is powerful\n💬 = और कौनसा psychology fact?"
    },
    instagram: {
      caption: "Sugar Pill से Real Pain Cure 🍬\n\n• Fake pill → real dopamine release\n• Brain scans में prefrontal cortex light up\n• 2010: Patients को बताया \"placebo है\"\n• फिर भी IBS improve हुआ\n\nSabse powerful pharmacy? Tumhare skull में! 🧠\n\nComment \"MIND\" psychology के लिए 👇\n\n#placebo #mind #psychology #hindi #reels #science #brain #healing #belief #facts #viral #india #hindicontent #amazingfacts #medicine"
    },
    x: {
      post: "Sugar pill = Real healing 🍬\n\nFake pill diya\nReal dopamine release हुआ\nPain actually कम हुआ\n\n2010: \"Yeh placebo hai\" bola\nPhir bhi काम किया\n\nExpectation = Biology\nBelief = Chemistry\n\nSabse powerful pharmacy skull में है 🧠"
    },
    hashtags: "#shorts #science #psychology #hindi #placebo #mind #brain #india #healing #belief"
  },

  99: {
    youtube: {
      title: "जितना कम जानो, उतना ज़्यादा Confident 🤔 #shorts",
      description: "Dunning-Kruger Effect - Overconfidence का Science! 🤔\n\n🔥 Worst performers ने खुद को above average rate किया\n🔥 Best performers ने underestimate किया\n🔥 Incompetent होने के लिए same knowledge चाहिए जो recognize करने के लिए\n🔥 Valley of despair - जब finally पता चले कितना नहीं पता\n\nTrue expertise = knowing what you don't know!\n\n👍 Like अगर relate किया\n💬 Comment - कब experience किया?\n🔔 Subscribe!\n\n#dunningkruger #psychology #confidence #science #hindi #shorts #mind #learning #expertise #bias",
      tags: "dunning kruger hindi, overconfidence bias, psychology hindi, learning curve, expertise hindi, cognitive bias hindi, self awareness, science shorts hindi, amazing facts hindi, mental models",
      pinned_comment: "कम जानो = ज़्यादा confident 🤔\n\nValley of despair में सब गुज़रते हैं!\n\n👍 = I've been there\n💬 = अपना experience share करो!"
    },
    instagram: {
      caption: "जितना कम जानो = उतना ज़्यादा Confident 🤔\n\n• Worst performers = above average feel\n• Best performers = underestimate\n• Valley of despair में finally पता चलता है\n• True expertise = knowing what you don't know\n\nConfident idiots promote होते हैं, qualified chup रहते हैं 😅\n\nComment \"KRUGER\" psychology के लिए 👇\n\n#dunningkruger #psychology #confidence #hindi #reels #science #mind #learning #bias #facts #viral #india #hindicontent #amazingfacts #expertise"
    },
    x: {
      post: "Dunning-Kruger Effect 🤔\n\nDay 1: Driving कितना hard? (fearless)\nWeek 2: Main terrible हूँ\nMonth 3: Better हो रहा पर doubt है\n\nWorst performers → above average feel\nBest performers → underestimate\n\nTrue expertise = exactly जानना कि क्या नहीं पता"
    },
    hashtags: "#shorts #science #psychology #hindi #dunningkruger #confidence #mind #india #learning #bias"
  },

  100: {
    youtube: {
      title: "बात करते हुए इंसान बदल गया - 75% को पता नहीं चला 😱 #shorts",
      description: "Change Blindness - तुम Actually देख नहीं रहे! 😱\n\n🔥 Mid-conversation person swap - 75% ने notice नहीं किया\n🔥 Invisible gorilla - आधे लोगों ने miss किया\n🔥 Brain 11 million bits process करता है, 50 consciously\n🔥 Reality partly hallucination है\n\nTumhari aankhen khuli hain, par tum really देख नहीं रहे!\n\n👍 Like अगर scary लगा\n💬 Comment - कभी experience किया?\n🔔 Subscribe!\n\n#changeblindness #psychology #brain #science #hindi #shorts #attention #perception #mind #gorilla",
      tags: "change blindness hindi, invisible gorilla hindi, attention psychology, perception hindi, brain facts, cognitive psychology hindi, Harvard experiment, science shorts hindi, amazing facts hindi, mind tricks",
      pinned_comment: "75% को पता नहीं चला 😱\n\nInsaan बदल गया mid-conversation!\n\n👍 = Scary\n💬 = Invisible gorilla test किया?"
    },
    instagram: {
      caption: "बात करते हुए इंसान बदल गया 😱\n\n• 1998 Harvard experiment\n• Door के पीछे person swap\n• 75% ने notice नहीं किया\n• Different clothes, height, voice\n\nBrain 11 million bits process करता है\nConsciously sirf 50 handle कर सकता है 🧠\n\nComment \"BLIND\" perception facts के लिए 👇\n\n#changeblindness #psychology #brain #hindi #reels #science #attention #mind #perception #facts #viral #india #hindicontent #amazingfacts #gorilla"
    },
    x: {
      post: "1998 Harvard experiment 😱\n\nStranger ने directions पूछे\nDoor बीच से गुज़रा\nPerson swap हो गया\n\n75% ने notice नहीं किया\nDifferent clothes. Different height. Different voice.\n\nBrain camera नहीं है\nWo rough sketch banata hai\n\nTumhari aankhen khuli hain, tum देख नहीं रहे"
    },
    hashtags: "#shorts #science #psychology #hindi #changeblindness #brain #attention #india #perception #mind"
  }
};

// Main function to update data.json
function addSocialMediaToTopics() {
  const dataPath = path.join(__dirname, '..', 'public', 'data.json');

  // Read existing data
  const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

  let updatedCount = 0;

  // Update topics 81-100
  data.forEach(topic => {
    if (topic.topic_id >= 81 && topic.topic_id <= 100) {
      const socialMedia = socialMediaData[topic.topic_id];
      if (socialMedia) {
        topic.social_media = socialMedia;
        updatedCount++;
        console.log(`✓ Updated topic ${topic.topic_id}: ${topic.title}`);
      }
    }
  });

  // Write updated data
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));

  console.log(`\n✅ Successfully added social media metadata to ${updatedCount} topics (81-100)`);
}

// Run the script
addSocialMediaToTopics();
