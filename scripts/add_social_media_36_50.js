const fs = require('fs');
const path = require('path');

// Social media metadata for topics 36-50
const socialMediaData = {
  36: {
    // Gauge Girls of WWII
    youtube: {
      title: "उंगलियों से Machines को हराया 👆 #shorts",
      description: "World War 2 में women की उंगलियां machines से ज़्यादा accurate थीं! 😱\n\n🔍 Is video में:\n• Human hair से पतला difference detect करती थीं\n• 2.5 microns तक feel कर सकती थीं (Red blood cell से छोटा!)\n• Months की special training\n• Lives बचाने वाले verdicts\n\n💡 Human sensitivity = Precision instrument\n\n👉 Follow करो ऐसी और amazing stories के लिए!\n\n#gauegirls #wwii #history #humantouch #amazingfacts",
      tags: "gauge girls hindi, wwii women workers, human touch precision, aircraft manufacturing, tactile expertise, world war 2 history hindi, women in war, science shorts hindi, amazing facts hindi, history facts",
      pinned_comment: "उंगलियों से 2.5 microns का difference! 👆\n\nRed blood cell से भी छोटा!\n\n👍 = Human body amazing है\n💬 = और कौनसी hidden history?"
    },
    instagram: {
      caption: "उंगलियों से Machines को हराया 👆\n\nWWII में women aircraft parts touch से measure करती थीं!\n\n• Human hair से पतला difference\n• 2.5 microns तक feel करती थीं\n• Machines fail हो जाती थीं जहां ये succeed करती थीं 🤯\n\nComment \"TOUCH\" more facts के लिए 👇\n\n#wwii #history #women #hindi #reels #science #humantouch #amazingfacts #gauegirls #viral #india #hindicontent #worldwar2 #precision #incredible"
    },
    x: {
      post: "WWII में women machines को हरा देती थीं 👆\n\nTouch से aircraft parts measure करती थीं\n2.5 microns तक feel करती थीं\nRed blood cell से छोटा! 🔬\n\nHuman body = Ultimate precision instrument"
    },
    hashtags: "#shorts #science #history #hindi #wwii #women #humantouch #precision #amazingfacts #india"
  },
  37: {
    // Microsurgeons
    youtube: {
      title: "बाल से भी पतली सुई से सिलाई 🧵 #shorts",
      description: "ये doctors human hair से भी पतली blood vessels सिलते हैं! 🤯\n\n🔍 Is video में:\n• Needles नंगी आँख से नहीं दिखतीं\n• 40x magnification पे operate करते हैं\n• Coffee banned है surgery से पहले!\n• Microns में error margin\n\n💡 Human hands doing what machines can't!\n\n👉 Subscribe करो ऐसी और incredible stories के लिए!\n\n#microsurgery #doctors #surgery #humanability #amazingfacts",
      tags: "microsurgery hindi, micro surgeons india, blood vessel surgery, medical marvel hindi, surgeon skills, medical science hindi, surgery facts, science shorts hindi, amazing doctors, incredible surgery",
      pinned_comment: "Human hair से पतली vessels सिलते हैं! 🧵\n\nCoffee भी banned है surgery से पहले!\n\n👍 = Doctors are superheroes\n💬 = कैसे possible है?"
    },
    instagram: {
      caption: "बाल से भी पतली सुई से सिलाई 🧵\n\nMicrosurgeons:\n• Human hair से पतली vessels सिलते हैं\n• Needles invisible होती हैं नंगी आँख से\n• Coffee banned surgery से पहले ☕\n• Error margin microns में 🤯\n\nComment \"SURGEON\" more facts के लिए 👇\n\n#microsurgery #doctors #surgery #hindi #reels #science #medical #amazing #superhuman #viral #india #hindicontent #health #precision #incredible"
    },
    x: {
      post: "बाल से भी पतली सुई से सिलाई 🧵\n\nMicrosurgeons:\n• 40x magnification\n• Coffee banned before surgery\n• Error margin: microns\n\nHuman hands doing what machines can't!"
    },
    hashtags: "#shorts #science #medical #hindi #surgery #doctors #precision #amazing #superhuman #india"
  },
  38: {
    // The Human Eye
    youtube: {
      title: "576 Megapixels की आँख 👁️ #shorts",
      description: "आपकी आँख दुनिया के best camera से भी powerful है! 🤯\n\n🔍 Is video में:\n• 576 megapixels resolution\n• 130 million light-sensitive cells\n• Starlight से noon तक adjust\n• 10 million bits per second process\n\n💡 Best camera ever = आपकी आँखें!\n\n👉 Follow करो human body की और amazing facts के लिए!\n\n#humaneye #biology #camera #amazingfacts #science",
      tags: "human eye hindi, eye resolution megapixels, eye vs camera, retina science hindi, vision science, biology facts hindi, human body facts, science shorts hindi, amazing eye facts, optical system",
      pinned_comment: "576 Megapixels! 👁️\n\nBest camera in the world!\n\n👍 = Mind blown\n💬 = और क्या कर सकती है आँख?"
    },
    instagram: {
      caption: "576 Megapixels की आँख 👁️\n\nआपकी आँखें:\n• 130 million light cells\n• Starlight से noon तक adjust\n• 10 million bits/second process\n• 99.99% brain filter कर देता है 🤯\n\nBest camera = आपकी आँखें!\n\nComment \"EYE\" more facts के लिए 👇\n\n#humaneye #biology #camera #hindi #reels #science #vision #amazing #humanbody #viral #india #hindicontent #megapixels #resolution #incredible"
    },
    x: {
      post: "आपकी आँख: 576 Megapixels 👁️\n\n130 million cells\nStarlight से noon तक adjust\n10 million bits/second\n\nBest camera? आपके पास है already! 📸"
    },
    hashtags: "#shorts #science #biology #hindi #eye #camera #humanbody #amazing #resolution #india"
  },
  39: {
    // Human Echolocation
    youtube: {
      title: "आँखें नहीं, फिर भी देखते हैं 🦇 #shorts",
      description: "कुछ blind लोग sound से देख सकते हैं! Bats की तरह! 🤯\n\n🔍 Is video में:\n• Tongue click करके mental map बनाते हैं\n• Bike चला सकते हैं, basketball खेल सकते हैं\n• Visual cortex light up होता है!\n• Perception = Software, Hardware नहीं\n\n💡 Brain reality experience करने के नए तरीके सीख सकता है!\n\n👉 Subscribe करो human brain की amazing powers के लिए!\n\n#echolocation #humanabilities #blindvision #brain #amazingfacts",
      tags: "human echolocation hindi, blind people seeing sound, daniel kish hindi, brain plasticity, visual cortex sound, sensory substitution hindi, science shorts hindi, blind navigation, amazing human abilities, neuroscience hindi",
      pinned_comment: "आँखें नहीं, फिर भी mountain biking! 🚴\n\nSound से देखते हैं!\n\n👍 = Brain is amazing\n💬 = और क्या कर सकता है brain?"
    },
    instagram: {
      caption: "आँखें नहीं, फिर भी देखते हैं 🦇\n\nHuman Echolocation:\n• Tongue click → Mental map\n• Bikes, basketball, forests navigate\n• Visual cortex light up होता है!\n• Perception = Software 🤯\n\nComment \"ECHO\" more facts के लिए 👇\n\n#echolocation #blind #brain #hindi #reels #science #human #amazing #neuroscience #viral #india #hindicontent #perception #senses #incredible"
    },
    x: {
      post: "आँखें नहीं, फिर भी देखते हैं 🦇\n\nBlind लोग:\n• Tongue click → See world\n• Bike चलाते हैं\n• Visual cortex light up!\n\nPerception software है, hardware नहीं!"
    },
    hashtags: "#shorts #science #brain #hindi #echolocation #blind #perception #amazing #neuroscience #india"
  },
  40: {
    // Apollo's Computers
    youtube: {
      title: "Calculator से कम Power से Moon पहुंचे 🌙 #shorts",
      description: "Apollo computer में आपके smartphone से 1 लाख गुना कम power थी! 🤯\n\n🔍 Is video में:\n• 74 KB memory (आपके phone में billions!)\n• Women ने हाथ से wires बुनी थीं\n• Landing के वक्त errors आए, फिर भी land किया\n• 17 seconds fuel बचा था!\n\n💡 Constraints create greatness!\n\n👉 Follow करो space history की और amazing stories के लिए!\n\n#apollo #moonlanding #nasa #spacehistory #amazingfacts",
      tags: "apollo computer hindi, moon landing computer, nasa history hindi, apollo guidance computer, space technology history, 1969 moon landing, neil armstrong hindi, space shorts hindi, technology history, computer history hindi",
      pinned_comment: "Calculator से कम power से Moon! 🌙\n\n17 seconds fuel बचा था landing पे!\n\n👍 = Perfect engineering\n💬 = आज के phone से land करते?"
    },
    instagram: {
      caption: "Calculator से कम Power से Moon पहुंचे 🌙\n\nApollo Computer:\n• 74 KB memory\n• Women ने हाथ से wires बुनी\n• Error आए, फिर भी land किया\n• 17 seconds fuel बचा था! 🤯\n\nComment \"APOLLO\" more facts के लिए 👇\n\n#apollo #moon #nasa #hindi #reels #space #computer #history #technology #viral #india #hindicontent #engineering #moonlanding #incredible"
    },
    x: {
      post: "Calculator से कम power से Moon पहुंचे 🌙\n\nApollo Computer:\n• 74 KB memory\n• Smartphone से 1 लाख गुना कम\n• 17 sec fuel बचा था landing पे!\n\nConstraints create greatness ✨"
    },
    hashtags: "#shorts #space #nasa #hindi #apollo #moon #computer #history #technology #india"
  },
  41: {
    // Voyager's Golden Record
    youtube: {
      title: "Aliens के लिए Love Letter 💛 #shorts",
      description: "1977 में हमने aliens को प्यार का message भेजा! 🤯\n\n🔍 Is video में:\n• 116 images, 55 languages में greetings\n• Bach से Chuck Berry तक music\n• Ann Druyan का heartbeat - नए प्यार की sound\n• 1 billion years तक exist करेगा!\n\n💡 Universe के लिए humanity का love letter!\n\n👉 Subscribe करो space की और emotional stories के लिए!\n\n#voyager #goldenrecord #nasa #aliens #loveletter",
      tags: "voyager golden record hindi, carl sagan hindi, ann druyan heartbeat, nasa voyager, space message aliens, interstellar travel hindi, voyager 1 hindi, space history, science shorts hindi, humanity message space",
      pinned_comment: "Aliens के लिए heartbeat 💛\n\nAnn Druyan के प्यार की sound!\n\n👍 = Beautiful\n💬 = अगर aliens मिले तो?"
    },
    instagram: {
      caption: "Aliens के लिए Love Letter 💛\n\nVoyager Golden Record:\n• 116 images\n• 55 languages\n• Ann Druyan का heartbeat\n• 1 billion years तक travel करेगा! 🤯\n\nComment \"VOYAGER\" more facts के लिए 👇\n\n#voyager #nasa #space #hindi #reels #aliens #goldenrecord #love #carlsagan #viral #india #hindicontent #universe #interstellar #incredible"
    },
    x: {
      post: "Aliens के लिए Love Letter 💛\n\nVoyager Golden Record:\n• Earth की sounds\n• 55 languages\n• Ann Druyan का heartbeat - नए प्यार की sound\n\n1 billion years तक travel करेगा ✨"
    },
    hashtags: "#shorts #space #nasa #hindi #voyager #aliens #love #carlsagan #universe #india"
  },
  42: {
    // Gravity Assists
    youtube: {
      title: "Planets से Speed चुराते हैं 🚀 #shorts",
      description: "NASA planets की speed चुराकर spacecraft उड़ाता है! 🤯\n\n🔍 Is video में:\n• Gravity assist - space का सबसे elegant hack\n• Planet से swing करो, speed बढ़ जाए\n• Voyager 2 ने 4 planets visit किए एक trip में!\n• 175 साल में एक बार का मौका था\n\n💡 Borrowed momentum from giants!\n\n👉 Follow करो space science की और amazing tricks के लिए!\n\n#gravityassist #nasa #voyager #spacescience #amazingfacts",
      tags: "gravity assist hindi, nasa slingshot, voyager grand tour, space navigation hindi, planetary alignment, gary flandro, space exploration hindi, orbital mechanics, science shorts hindi, nasa tricks",
      pinned_comment: "Planets से speed चुराते हैं! 🚀\n\n175 साल में एक मौका था!\n\n👍 = Genius NASA\n💬 = अगला grand tour कब?"
    },
    instagram: {
      caption: "Planets से Speed चुराते हैं 🚀\n\nGravity Assist:\n• Planet के पास जाओ\n• Swing around करो\n• Speed बढ़ जाए!\n• Voyager ने 4 planets एक trip में visit किए 🤯\n\nComment \"GRAVITY\" more facts के लिए 👇\n\n#gravityassist #nasa #space #hindi #reels #voyager #planets #science #slingshot #viral #india #hindicontent #spacescience #exploration #incredible"
    },
    x: {
      post: "NASA planets से speed चुराता है 🚀\n\nGravity Assist:\n• Planet से swing\n• Speed बढ़ जाए\n• Fuel नहीं जला\n\nVoyager ने 4 planets एक trip में visit किए! ✨"
    },
    hashtags: "#shorts #space #nasa #hindi #gravity #voyager #planets #science #exploration #india"
  },
  43: {
    // JWST Deployment
    youtube: {
      title: "344 Chances थे Fail होने के 😰 #shorts",
      description: "James Webb Telescope में 344 parts थे जो fail हो सकते थे! 🤯\n\n🔍 Is video में:\n• $10 billion का telescope\n• Origami की तरह fold हुआ था\n• Million miles दूर कोई fix नहीं कर सकता था\n• 29 days, 344 single points of failure\n• सब कुछ perfect चला!\n\n💡 25 साल की dedication एक machine में!\n\n👉 Subscribe करो space engineering की और nail-biting stories के लिए!\n\n#jwst #jameswebbtelescope #nasa #spaceengineering #amazingfacts",
      tags: "james webb telescope hindi, jwst deployment, nasa telescope, space engineering hindi, telescope launch, jwst sunshield, jwst mirror, space technology hindi, science shorts hindi, nasa success",
      pinned_comment: "344 में से एक भी fail नहीं हुआ! 😰\n\n$10 billion space में!\n\n👍 = Perfect engineering\n💬 = First image देखी थी?"
    },
    instagram: {
      caption: "344 Chances थे Fail होने के 😰\n\nJames Webb Telescope:\n• $10 billion\n• Origami की तरह fold\n• Million miles दूर\n• 344 single points of failure\n• सब perfect! 🤯\n\nComment \"WEBB\" more facts के लिए 👇\n\n#jwst #jameswebbtelescope #nasa #hindi #reels #space #telescope #engineering #science #viral #india #hindicontent #universe #deployment #incredible"
    },
    x: {
      post: "344 chances थे fail होने के 😰\n\nJames Webb Telescope:\n• $10 billion\n• Million miles दूर\n• कोई fix नहीं कर सकता था\n\nसब कुछ perfect चला! ✨"
    },
    hashtags: "#shorts #space #nasa #hindi #jwst #telescope #engineering #science #universe #india"
  },
  44: {
    // Lunar Laser Ranging
    youtube: {
      title: "50 साल से Moon पे Laser मारते हैं 🔴 #shorts",
      description: "Apollo astronauts ने Moon पे mirrors छोड़े थे - आज भी use होते हैं! 🤯\n\n🔍 Is video में:\n• 50 साल पुराने mirrors\n• Laser मारो, time measure करो\n• Moon की distance millimeter तक accurate\n• Moon 3.8 cm/year दूर जा रहा है!\n\n💡 Apollo missions ended, science never did!\n\n👉 Follow करो moon facts की और amazing stories के लिए!\n\n#lunarlaser #apollo #moon #nasa #amazingfacts",
      tags: "lunar laser ranging hindi, apollo mirrors moon, moon distance measurement, retroreflector moon, apollo legacy hindi, moon science hindi, laser moon experiment, einstein relativity test, science shorts hindi, moon facts hindi",
      pinned_comment: "50 साल से Moon पे laser! 🔴\n\nApollo का experiment आज भी चल रहा है!\n\n👍 = Mind blown\n💬 = Moon कितना दूर जा चुका?"
    },
    instagram: {
      caption: "50 साल से Moon पे Laser मारते हैं 🔴\n\nLunar Laser Ranging:\n• Apollo ने mirrors छोड़े\n• हर रात laser fire होता है\n• Millimeter accuracy\n• Moon 3.8 cm/year दूर जा रहा है! 🤯\n\nComment \"LASER\" more facts के लिए 👇\n\n#lunarlaser #apollo #moon #hindi #reels #nasa #space #laser #science #viral #india #hindicontent #moonmission #experiment #incredible"
    },
    x: {
      post: "50 साल से Moon पे laser मारते हैं 🔴\n\nApollo ने mirrors छोड़े थे:\n• हर रात laser fire\n• Millimeter accuracy\n• Moon 3.8 cm/year दूर जा रहा है!\n\nExperiment that never ends! ✨"
    },
    hashtags: "#shorts #space #apollo #hindi #moon #laser #nasa #science #experiment #india"
  },
  45: {
    // Honeycomb Geometry
    youtube: {
      title: "मधुमक्खियां Mathematicians हैं 🐝 #shorts",
      description: "Bees ने वो math problem solve किया जो humans को 2000 साल लगे! 🤯\n\n🔍 Is video में:\n• Hexagon सबसे efficient shape है\n• 2000 साल तक prove नहीं हो पाया\n• 1999 में finally mathematician ने prove किया\n• हर bee sirf अपना section बनाती है, फिर भी perfect alignment!\n\n💡 Evolution ने bees को mathematicians बनाया!\n\n👉 Subscribe करो nature की और mathematical stories के लिए!\n\n#honeycomb #bees #mathematics #nature #amazingfacts",
      tags: "honeycomb geometry hindi, hexagon efficiency, bees math, thomas hales proof, marcus varro, nature mathematics, bee hive structure hindi, science shorts hindi, mathematical nature, evolution math",
      pinned_comment: "2000 साल का math problem! 🐝\n\nBees पहले से जानती थीं!\n\n👍 = Nature is genius\n💬 = और क्या solve किया है nature ने?"
    },
    instagram: {
      caption: "मधुमक्खियां Mathematicians हैं 🐝\n\nHoneycomb:\n• Hexagon = Most efficient\n• 2000 साल तक prove नहीं हुआ\n• कोई architect नहीं\n• फिर भी perfect alignment! 🤯\n\nComment \"BEE\" more facts के लिए 👇\n\n#honeycomb #bees #math #hindi #reels #nature #hexagon #science #geometry #viral #india #hindicontent #evolution #efficiency #incredible"
    },
    x: {
      post: "मधुमक्खियां mathematicians हैं 🐝\n\nHexagon = Most efficient shape\n\n2000 साल humans को prove करने में लगे\nBees पहले से जानती थीं!\n\nEvolution = Best mathematician ✨"
    },
    hashtags: "#shorts #nature #bees #hindi #math #hexagon #honeycomb #science #geometry #india"
  },
  46: {
    // Mantis Shrimp Punch
    youtube: {
      title: "इसकी Punch से पानी उबल जाता है 🥊 #shorts",
      description: "Mantis shrimp की punch से पानी boil हो जाता है! Sun की surface से भी hot! 🤯\n\n🔍 Is video में:\n• Bullet से भी तेज़ accelerate होता है\n• Cavitation bubble बनता है\n• 8000°F temperature (Sun: 10000°F!)\n• Punch miss भी हो तो shockwave से prey मर जाए\n\n💡 4 inch की shrimp = Nature का perfect weapon!\n\n👉 Follow करो nature के और deadly creatures के लिए!\n\n#mantisshrimp #naturepunch #animalweapons #marinelife #amazingfacts",
      tags: "mantis shrimp punch hindi, fastest punch animal, cavitation bubble, marine animal weapons, shrimp vs bullet, nature weapons hindi, ocean creatures hindi, science shorts hindi, amazing animals, animal superpowers",
      pinned_comment: "पानी उबल जाता है punch से! 🥊\n\nSun से भी hot!\n\n👍 = Nature is scary\n💬 = और कौनसा deadly animal?"
    },
    instagram: {
      caption: "इसकी Punch से पानी उबल जाता है 🥊\n\nMantis Shrimp:\n• Bullet से तेज़\n• 8000°F temperature\n• Sun surface: 10000°F\n• Miss भी हो तो shockwave से prey मर जाए 🤯\n\nComment \"PUNCH\" more facts के लिए 👇\n\n#mantisshrimp #punch #nature #hindi #reels #ocean #marine #science #animal #viral #india #hindicontent #deadly #weapon #incredible"
    },
    x: {
      post: "4 inch की shrimp, punch से पानी उबल जाता है 🥊\n\nMantis Shrimp:\n• Bullet से तेज़\n• 8000°F temperature\n• Sun: 10000°F\n\nNature का perfect weapon! ✨"
    },
    hashtags: "#shorts #nature #ocean #hindi #mantisshrimp #punch #marine #animal #science #india"
  },
  47: {
    // Spider Silk
    youtube: {
      title: "Steel से Strong, Rubber से Elastic 🕸️ #shorts",
      description: "Spider silk से rope बनाओ तो jumbo jet catch कर सकते हो! 🤯\n\n🔍 Is video में:\n• Steel से 5 गुना strong\n• 140% stretch हो सकता है (Steel: 2%!)\n• Room temperature पे बनता है\n• Scientists 40 साल से copy नहीं कर पाए\n\n💡 Poppy seed जितना brain, फिर भी हम copy नहीं कर सकते!\n\n👉 Subscribe करो nature की और amazing materials के लिए!\n\n#spidersilk #nature #strongmaterial #spiders #amazingfacts",
      tags: "spider silk hindi, strongest natural material, spider silk vs steel, biomaterial science, spider silk elasticity, nature engineering hindi, science shorts hindi, animal materials, spider facts hindi, toughest material",
      pinned_comment: "Steel से 5 गुना strong! 🕸️\n\n40 साल से copy नहीं कर पाए!\n\n👍 = Nature is best engineer\n💬 = और क्या copy नहीं कर पाए?"
    },
    instagram: {
      caption: "Steel से Strong, Rubber से Elastic 🕸️\n\nSpider Silk:\n• Steel से 5x strong\n• 140% stretch (Steel: 2%!)\n• Room temperature पे बनता है\n• 40 साल से copy नहीं हो पाया 🤯\n\nComment \"SPIDER\" more facts के लिए 👇\n\n#spidersilk #spider #nature #hindi #reels #strong #elastic #science #material #viral #india #hindicontent #engineering #biomaterial #incredible"
    },
    x: {
      post: "Spider silk से jumbo jet catch कर सकते हो 🕸️\n\n• Steel से 5x strong\n• 140% stretch\n• Room temperature\n\n40 साल से copy नहीं हो पाया! ✨"
    },
    hashtags: "#shorts #nature #spider #hindi #silk #strong #material #science #engineering #india"
  },
  48: {
    // DNA Replication
    youtube: {
      title: "1 Billion में 1 Mistake 🧬 #shorts",
      description: "आपका body अभी 3 billion letters copy कर रहा है - 1 billion में 1 mistake! 🤯\n\n🔍 Is video में:\n• हर cell divide होने पे full genome copy होता है\n• 1000 letters per second की speed\n• Built-in proofreading system\n• Hard drive से ज़्यादा accurate!\n\n💡 Universe का सबसे precise copying system!\n\n👉 Follow करो human body की और mind-blowing facts के लिए!\n\n#dna #biology #genetics #humanbody #amazingfacts",
      tags: "dna replication hindi, dna polymerase, genetic copying, cell division hindi, dna accuracy, biology facts hindi, human body science, genome copying, science shorts hindi, molecular biology hindi",
      pinned_comment: "1 Billion में 1 mistake! 🧬\n\nHard drive से ज़्यादा accurate!\n\n👍 = Body is amazing\n💬 = और क्या कर रहा है body अभी?"
    },
    instagram: {
      caption: "1 Billion में 1 Mistake 🧬\n\nDNA Replication:\n• 3 billion letters copy\n• 1000 letters/second\n• Built-in proofreader\n• Hard drive से accurate 🤯\n\nComment \"DNA\" more facts के लिए 👇\n\n#dna #biology #genetics #hindi #reels #science #humanbody #cell #genome #viral #india #hindicontent #molecular #copying #incredible"
    },
    x: {
      post: "आपका body अभी 3 billion letters copy कर रहा है 🧬\n\n• 1000 letters/second\n• 1 billion में 1 mistake\n• Hard drive से accurate!\n\nUniverse का best copying system! ✨"
    },
    hashtags: "#shorts #biology #dna #hindi #genetics #humanbody #cell #science #genome #india"
  },
  49: {
    // Migrating Birds
    youtube: {
      title: "आँखों में Google Maps 🗺️ #shorts",
      description: "Birds literally Earth का magnetic field देख सकते हैं! 🤯\n\n🔍 Is video में:\n• Arctic terns 44,000 miles fly करते हैं yearly\n• Eyes में special protein: Cryptochrome\n• Quantum entanglement use करते हैं!\n• Baby birds को route DNA में मिलता है\n\n💡 Backyard sparrow भी quantum physicist है!\n\n👉 Subscribe करो nature के और superpowers के लिए!\n\n#birds #migration #magneticfield #navigation #amazingfacts",
      tags: "bird migration hindi, magnetic field vision, cryptochrome birds, bird navigation science, quantum biology hindi, arctic tern migration, bird compass hindi, science shorts hindi, animal superpowers, nature navigation",
      pinned_comment: "आँखों में GPS! 🗺️\n\nQuantum physics use करते हैं!\n\n👍 = Nature is magic\n💬 = और कौनसा animal superpower?"
    },
    instagram: {
      caption: "आँखों में Google Maps 🗺️\n\nBirds:\n• Magnetic field देख सकते हैं\n• 44,000 miles/year fly करते हैं\n• Quantum entanglement use करते हैं\n• Route DNA में लिखा है 🤯\n\nComment \"BIRD\" more facts के लिए 👇\n\n#birds #migration #magnetic #hindi #reels #nature #navigation #quantum #science #viral #india #hindicontent #gps #compass #incredible"
    },
    x: {
      post: "Birds की आँखों में GPS built-in है 🗺️\n\n• Magnetic field देखते हैं\n• Quantum entanglement!\n• Route DNA में लिखा है\n\n44,000 miles बिना lost हुए! ✨"
    },
    hashtags: "#shorts #nature #birds #hindi #migration #magnetic #quantum #navigation #science #india"
  },
  50: {
    // Banach-Tarski Paradox
    youtube: {
      title: "1 Ball से 2 Ball बन सकती है 🔮 #shorts",
      description: "Mathematically proven: 1 ball को 5 pieces में काटो, 2 identical balls बन जाएंगी! 🤯\n\n🔍 Is video में:\n• Banach-Tarski Paradox\n• Infinity का loophole use होता है\n• Volume के rules टूट जाते हैं\n• Prove हो सकता है, बना नहीं सकते!\n\n💡 Mathematics में ऐसे truths हैं जो fiction से stranger हैं!\n\n👉 Follow करो math के और mind-bending paradoxes के लिए!\n\n#banachtarski #mathematics #paradox #infinity #amazingfacts",
      tags: "banach tarski paradox hindi, mathematical paradox, infinity mathematics, duplication paradox, math mystery hindi, impossible math, set theory hindi, science shorts hindi, mind bending math, mathematical proof",
      pinned_comment: "1 से 2 balls! 🔮\n\nProve कर सकते हैं, बना नहीं सकते!\n\n👍 = Math is crazy\n💬 = और कौनसा paradox?"
    },
    instagram: {
      caption: "1 Ball से 2 Ball बन सकती है 🔮\n\nBanach-Tarski Paradox:\n• 5 pieces में काटो\n• 2 identical balls बन जाएं\n• Same size, same density\n• Mathematically proven! 🤯\n\nComment \"PARADOX\" more facts के लिए 👇\n\n#banachtarski #math #paradox #hindi #reels #infinity #science #mathematics #mindblown #viral #india #hindicontent #impossible #logic #incredible"
    },
    x: {
      post: "1 ball → 5 pieces → 2 identical balls 🔮\n\nBanach-Tarski Paradox:\n• Mathematically proven\n• Infinity का loophole\n• बना नहीं सकते!\n\nMath में truths fiction से stranger हैं! ✨"
    },
    hashtags: "#shorts #math #paradox #hindi #infinity #mathematics #banachtarski #science #logic #india"
  }
};

// Load existing data.json
const dataPath = path.join(__dirname, '..', 'public', 'data.json');
const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));

// Update topics with social media metadata
let updatedCount = 0;

data.forEach(topic => {
  if (socialMediaData[topic.topic_id]) {
    topic.social_media = socialMediaData[topic.topic_id];
    updatedCount++;
    console.log(`Updated topic ${topic.topic_id}: ${topic.title}`);
  }
});

// Write back to data.json
fs.writeFileSync(dataPath, JSON.stringify(data, null, 2), 'utf-8');

console.log(`\n✅ Successfully updated ${updatedCount} topics with social media metadata!`);
console.log('Topics 36-50 now have YouTube, Instagram, X, and hashtags content.');
