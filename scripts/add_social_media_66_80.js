const fs = require('fs');
const path = require('path');

// Social media metadata for topics 66-80
const socialMediaData = {
  66: {
    youtube: {
      title: "50% लोग Gorilla नहीं देखते 🦍 #shorts",
      description: "क्या तुम सब कुछ देख रहे हो? 🤔\n\n🦍 Video में gorilla walk करता है\n🏀 लोग basketball count कर रहे हैं\n👀 आधे लोग gorilla MISS करते हैं\n\nये Inattentional Blindness है!\n\nTumhara brain irrelevant information filter kar deta hai... gorilla bhi 😱\n\n❌ Radiologists ne tumors miss kiye\n❌ Drivers ne motorcycles hit ki\n❌ Pilots ne occupied runways pe land kiya\n\nAbhi tum kya nahi dekh rahe? 👁️\n\n#psychology #brain #attention #hindi #science #facts #viral",
      tags: "invisible gorilla hindi, inattentional blindness, psychology hindi, brain facts hindi, attention experiment, daniel simons, mind tricks hindi, science shorts hindi, amazing facts, brain science hindi",
      pinned_comment: "Gorilla सामने से गुज़रा और लोगों ने नहीं देखा! 🦍\n\n👍 = Mind blown\n💬 = तुमने experiment try किया?"
    },
    instagram: {
      caption: "50% लोग Gorilla नहीं देखते 🦍\n\nVideo में gorilla walk करता है। Chest beat करता है। फिर चला जाता है।\n\nआधे लोग देखते ही नहीं 😱\n\nTumhara brain filter है, spotlight नहीं!\n\nComment \"BRAIN\" more facts के लिए 👇\n\n#psychology #brain #attention #hindi #reels #science #mind #facts #viral #india #hindicontent #amazingfacts #experiment #awareness"
    },
    x: {
      post: "50% लोग video में gorilla नहीं देखते 🦍\n\nWalk करता है\nChest beat करता है\nफिर चला जाता है\n\nLab-tested fact!\n\nTumhara attention spotlight नहीं है। Filter है। और zyada delete kar deta hai 🧠"
    },
    hashtags: "#shorts #psychology #brain #hindi #science #attention #mind #facts #viral #india"
  },

  67: {
    youtube: {
      title: "Room में जाते ही भूल गए क्यों आए? 🚪 #shorts",
      description: "Ye tumhare saath bhi hota hai! 🚪\n\n🧠 Kitchen में गए, रुक गए\n❓ \"Yahan kyun aaye?\"\n🔬 Scientists ने prove किया - Doorway Effect!\n\n📊 Doorway से गुज़रने से forgetting 3X बढ़ जाती है\n\nTumhara brain memories को chapters में organize karta hai। New room = new chapter। Purana thought archived! 📁\n\n✅ Solution: Zor se bolo kya chahiye door cross karne se pehle!\n\n#psychology #memory #brain #hindi #science #facts #viral",
      tags: "doorway effect hindi, memory loss hindi, psychology hindi, brain facts, forgetting why you entered room, science shorts hindi, memory science, brain tricks hindi, amazing facts, cognitive psychology hindi",
      pinned_comment: "Kitchen गए और भूल गए क्यों आए? 🚪\n\n👍 = हां मेरे साथ होता है!\n💬 = Solution try करोगे?"
    },
    instagram: {
      caption: "Room में जाते ही भूल गए क्यों आए? 🚪\n\nYe Doorway Effect hai!\n\nDoorway cross = Brain new chapter start karta hai\nPurana thought = Archived! 📁\n\nSolution: Zor se bolo kya chahiye 🗣️\n\nComment \"DOOR\" अगर tumhare saath hota hai 👇\n\n#psychology #memory #brain #hindi #reels #science #facts #viral #india #hindicontent #doorwayeffect #mind #cognitive"
    },
    x: {
      post: "Kitchen गए। रुक गए। \"Yahan kyun aaye?\" 🚪\n\nDoorway Effect:\n• Door cross = New mental chapter\n• Purana thought = Archived\n• 3X zyada forgetting\n\nSolution: Zor se bolo kya chahiye door cross karne se pehle! 🧠"
    },
    hashtags: "#shorts #psychology #memory #hindi #brain #science #doorwayeffect #facts #viral #india"
  },

  68: {
    youtube: {
      title: "तुमने कभी कुछ छुआ नहीं 😱 #shorts",
      description: "Shocking truth! 🤯\n\n⚛️ Tumhare body ka har atom 99.9999% EMPTY है!\n🏟️ Agar atom stadium ho, nucleus marble hoga\n🅿️ Electrons? Parking lot mein kahin!\n\nToh touch ka sensation kya hai? 🤔\n\n⚡ Electromagnetic repulsion!\n🛡️ Force fields collide kar rahe hain!\n\n🌍 8 billion insaan compress karo = Sugar cube mein fit! 😱\n\n#chemistry #atoms #physics #hindi #science #facts #viral",
      tags: "atoms empty space hindi, never touched anything, chemistry hindi, physics hindi, rutherford experiment, electromagnetic force, science shorts hindi, amazing facts hindi, atom structure hindi, quantum physics hindi",
      pinned_comment: "Tumne zindagi mein kabhi kuch chhua hi nahi! ⚛️\n\n👍 = Reality shattered\n💬 = Ye pata tha?"
    },
    instagram: {
      caption: "तुमने कभी कुछ छुआ नहीं ⚛️\n\nHar atom 99.9999% empty hai!\n\nTouch = Force fields colliding 💥\nTable छूते हो = Electrons push kar rahe hain\n\n8 billion log = 1 sugar cube mein fit 🤯\n\nComment \"ATOM\" mind blown हो तो 👇\n\n#chemistry #atoms #physics #hindi #reels #science #facts #viral #india #hindicontent #quantum #mindblown #reality"
    },
    x: {
      post: "Tumne apni poori zindagi mein kabhi kuch chhua nahi ⚛️\n\nHar atom 99.9999% empty hai\n\nTouch feel karte ho?\nWo force fields hain collide karte hue 💥\n\n8 billion insaan compress karo\nSugar cube mein fit 😱"
    },
    hashtags: "#shorts #chemistry #atoms #hindi #physics #science #quantum #facts #viral #india"
  },

  69: {
    youtube: {
      title: "जो Element थे ही नहीं वो Predict कर दिए 🔮 #shorts",
      description: "1869 की chemistry prophecy! 🔮\n\n👨‍🔬 Mendeleev ने 63 elements arrange किए\n📊 Patterns देखे जो किसी ने नहीं देखे\n🕳️ Table में gaps छोड़े - predictions!\n\n✅ Eka-aluminum predict किया → Gallium मिला!\n✅ Eka-silicon predict किया → Germanium मिला!\n✅ Weight, density, properties - SAB SAHI!\n\nPeriodic table prophecy hai chemistry mein! 📜\n\n#chemistry #mendeleev #periodictable #hindi #science #facts #viral",
      tags: "mendeleev hindi, periodic table hindi, chemistry predictions, gallium germanium hindi, science history hindi, element discovery, chemistry shorts hindi, amazing facts, russian scientist hindi, periodic table story",
      pinned_comment: "Elements discover hone se pehle predict kar diye! 🔮\n\n👍 = Genius\n💬 = School mein ye kyun nahi padhaya?"
    },
    instagram: {
      caption: "जो Element थे ही नहीं वो Predict कर दिए 🔮\n\n1869: Mendeleev ने table में gaps छोड़े\n\nEka-aluminum → Gallium (1875) ✅\nEka-silicon → Germanium (1886) ✅\n\nWeight, density, properties - SAB SAHI! 😱\n\nComment \"PREDICT\" more chemistry facts के लिए 👇\n\n#chemistry #mendeleev #periodictable #hindi #reels #science #prediction #facts #viral #india #hindicontent #genius #elements"
    },
    x: {
      post: "1869: Mendeleev ने 3 elements predict किए जो exist नहीं करते थे 🔮\n\nWeight बताया ✅\nDensity बताई ✅\nProperties बताईं ✅\n\nSaal बाद मिले - EXACTLY जैसा बताया था! 😱\n\nPeriodic table sirf organization नहीं, prophecy है!"
    },
    hashtags: "#shorts #chemistry #mendeleev #hindi #periodictable #science #prediction #facts #viral #india"
  },

  70: {
    youtube: {
      title: "Tumhara Body चोरी से बना है 🔓 #shorts",
      description: "Chemistry of life! 🔬\n\n💨 Tumhari har saans electrons ke liye jung hai!\n\n🧂 Sodium: Electron dena chahta hai desperately\n🟢 Chlorine: Ek electron chahiye complete hone ke liye\n💥 CHORI! Ionic bond = Table salt!\n\n🔗 Carbon: Share karta hai, chori nahi\n🧬 Isliye DNA, muscles, brain carbon se bane!\n\nChor aur sharers - universe bana rahe hain! ⚛️\n\n#chemistry #bonds #science #hindi #facts #viral",
      tags: "chemical bonding hindi, ionic bonds hindi, covalent bonds hindi, chemistry hindi, electrons hindi, carbon chemistry, sodium chlorine reaction, science shorts hindi, amazing facts, chemistry of life hindi",
      pinned_comment: "Table salt atomic chori ka result hai! 🧂\n\n👍 = Chemistry interesting hai\n💬 = Aur chemistry facts chahiye?"
    },
    instagram: {
      caption: "Tumhara Body चोरी से बना है 🔓\n\nSodium: Electron dena chahta hai\nChlorine: Chahiye ek electron\nResult: CHORI! = Table salt 🧂\n\nCarbon: Share karta hai = DNA, brain, muscles! 🧬\n\nComment \"BOND\" chemistry lover ho toh 👇\n\n#chemistry #bonds #ionic #covalent #hindi #reels #science #facts #viral #india #hindicontent #atoms #electrons #life"
    },
    x: {
      post: "Tumhara body electrons ke chor aur sharers se bana hai 🔓\n\n🧂 Salt = Sodium se electron chori\n🧬 DNA = Carbon atoms sharing\n\nHar saans electrons ke liye jung hai ⚔️\n\nChemistry of life = Atomic theft aur friendship!"
    },
    hashtags: "#shorts #chemistry #bonds #hindi #science #electrons #atoms #facts #viral #india"
  },

  71: {
    youtube: {
      title: "pH 0.4 shift हुआ तो मर जाओगे 💀 #shorts",
      description: "Tumhara body knife's edge par hai! 🔪\n\n🧪 Stomach acid: pH 1.5-2 (Razor blade gala de!)\n🩸 Blood: pH 7.35-7.45 (Sirf 0.1 range!)\n\n⚠️ pH 7.0 = Acidosis = Death\n⚠️ pH 7.8 = Alkalosis = Death\n\n🫁 Har saans pH regulation hai!\n🧬 Kidneys, lungs, blood - sab balance kar rahe hain!\n\nTumhara body existence ka sabse precise chemistry lab hai! 🧫\n\n#chemistry #ph #body #hindi #science #facts #viral",
      tags: "ph scale hindi, blood ph hindi, stomach acid hindi, body chemistry hindi, acidosis alkalosis hindi, science shorts hindi, human body facts hindi, chemistry of life, buffer systems, amazing facts hindi",
      pinned_comment: "Blood pH sirf 0.4 shift = Death! 💀\n\n👍 = Body amazing hai\n💬 = Ye pata tha?"
    },
    instagram: {
      caption: "pH 0.4 shift हुआ तो मर जाओगे 💀\n\nStomach: pH 1.5 (Razor blade gala de!)\nBlood: pH 7.35-7.45 (Life ya death!)\n\n0.1 range ke bahar = Game over 😱\n\nTumhara body = Most precise chemistry lab! 🧫\n\nComment \"PH\" body facts chahiye toh 👇\n\n#chemistry #ph #body #hindi #reels #science #health #facts #viral #india #hindicontent #biology #human #survival"
    },
    x: {
      post: "Tumhara stomach acid razor blade gala sakta hai 🔪\n\nPar blood pH sirf 0.4 shift = Tum mar jaoge 💀\n\nStomach: pH 1.5\nBlood: 7.35-7.45 (0.1 range!)\n\nHar saans pH regulation hai! Tumhara body = Precision chemistry lab 🧫"
    },
    hashtags: "#shorts #chemistry #ph #hindi #body #science #health #facts #viral #india"
  },

  72: {
    youtube: {
      title: "Tumhara Brain bhi Battery hai 🔋 #shorts",
      description: "Electrochemistry of life! ⚡\n\n🔋 Phone battery = Chemical reaction\n🧠 Brain = SAME principle!\n\n💡 Lithium atoms electrons release karte hain → Phone chale\n⚡ Neurons mein sodium-potassium ion exchange → Thoughts!\n\n🧠 Brain tumhari 20% energy consume karta hai\n💡 Neurons saath fire karein = Small LED power ho sakti hai!\n\nBatteries aur brains same principle par chalte hain! 🤯\n\n#chemistry #brain #battery #hindi #science #facts #viral",
      tags: "electrochemistry hindi, brain electricity hindi, battery chemistry hindi, neurons hindi, sodium potassium pump, science shorts hindi, brain facts hindi, chemistry of brain, lithium battery hindi, amazing facts",
      pinned_comment: "Brain aur phone battery same chemistry! 🔋🧠\n\n👍 = Mind = Blown\n💬 = Aur brain facts chahiye?"
    },
    instagram: {
      caption: "Tumhara Brain bhi Battery hai 🔋\n\nPhone: Lithium electrons release → Power\nBrain: Sodium-potassium exchange → Thoughts! 🧠\n\nBrain = 20% body energy\nNeurons fire = Small LED power! 💡\n\nComment \"BRAIN\" electrochemistry lover ho toh 👇\n\n#chemistry #brain #battery #hindi #reels #science #neurons #facts #viral #india #hindicontent #electricity #mind #technology"
    },
    x: {
      post: "Phone battery = Chemical reaction 🔋\nTumhara brain = SAME principle! 🧠\n\nNeurons mein sodium-potassium ion exchange\n= Tumhare thoughts, memories, consciousness!\n\nTechnology ne wo borrow kiya jo biology ne billions saal pehle perfect kiya ⚡"
    },
    hashtags: "#shorts #chemistry #brain #hindi #battery #science #neurons #facts #viral #india"
  },

  73: {
    youtube: {
      title: "Carbon भगवान का Building Block है 🧬 #shorts",
      description: "Why life is carbon-based! 🌍\n\n⚛️ Carbon = 10 million+ compounds\n🔗 4 electrons = 4 bonds simultaneously\n🔄 Khud se bond karta hai = Infinite chains!\n\n🧬 DNA = 3 billion units lambi carbon chain\n💪 Muscles = Carbon chains folded\n🍬 Sugars = Carbon rings with oxygen\n\n👽 Alien life bhi carbon use karegi - Physics guarantee!\n\nCarbon sirf life enable nahi karta. Carbon wo LANGUAGE hai jismein life likhi hai! 📝\n\n#chemistry #carbon #life #hindi #science #facts #viral",
      tags: "carbon chemistry hindi, why carbon is special, organic chemistry hindi, carbon bonds hindi, dna carbon hindi, life chemistry hindi, science shorts hindi, carbon element, silicon vs carbon, amazing facts hindi",
      pinned_comment: "Carbon = God's building block! 🧬\n\n👍 = Chemistry is beautiful\n💬 = Silicon kyun nahi?"
    },
    instagram: {
      caption: "Carbon भगवान का Building Block है 🧬\n\n10 million+ compounds bana sakta hai!\n4 bonds. Infinite chains. 🔗\n\nDNA = Carbon chain (3 billion units!)\nMuscles, fats, sugars = Sab carbon!\n\nAlien life bhi carbon based hogi! 👽\n\nComment \"CARBON\" chemistry lover ho toh 👇\n\n#chemistry #carbon #life #hindi #reels #science #organic #dna #facts #viral #india #hindicontent #biology #universe"
    },
    x: {
      post: "Carbon 10 million+ compounds bana sakta hai ⚛️\n\nSilicon closest competitor hai, par:\n• Silicon bonds weak\n• Silicon chains toot jaati hain\n• Carbon chains strong!\n\nIsliye life carbon-based hai 🧬\n\nCarbon wo LANGUAGE hai jismein life likhi hai!"
    },
    hashtags: "#shorts #chemistry #carbon #hindi #life #science #organic #dna #facts #viral"
  },

  74: {
    youtube: {
      title: "Plastic Bag तुम्हारे परपोतों से ज्यादा जिएगी 😱 #shorts",
      description: "Immortality we accidentally created! ♾️\n\n🛍️ Plastic bag = 500-1000 saal degrade hone mein\n🏛️ Most buildings se zyada jiega\n🌍 Shayad human civilization se bhi zyada!\n\n⚗️ Polyethylene bonds itne stable = Nature break nahi kar sakti\n🦠 Koi bacteria evolve nahi hua (plastic 1907 tak exist nahi tha!)\n\n🩸 Microplastics: Blood, lungs, brains mein!\n📊 8 billion tons since 1950s\n\nHumein convenience chahiye thi. Humne permanence create ki! 😰\n\n#chemistry #plastic #environment #hindi #science #facts #viral",
      tags: "plastic pollution hindi, microplastics hindi, plastic chemistry hindi, polyethylene hindi, environment hindi, plastic bag decomposition, science shorts hindi, climate change hindi, pollution facts, amazing facts hindi",
      pinned_comment: "Plastic bag 1000 saal jeegi! 🛍️\n\n👍 = Shocking\n💬 = Tum kya kar rahe ho plastic reduce karne ke liye?"
    },
    instagram: {
      caption: "Plastic Bag तुम्हारे परपोतों से ज्यादा जिएगी 🛍️\n\n500-1000 saal degrade hone mein!\n\nKoi bacteria plastic nahi kha sakta 🦠\nMicroplastics: Blood, lungs, brains mein! 😱\n\nConvenience chahiye thi. Permanence mil gayi!\n\nComment \"REDUCE\" plastic kam karte ho toh 👇\n\n#plastic #environment #chemistry #hindi #reels #pollution #microplastics #facts #viral #india #hindicontent #earth #climate #sustainability"
    },
    x: {
      post: "Tumhare kitchen ki plastic bag:\n\n• Tumhare great-grandchildren se zyada jiegi 🛍️\n• 500-1000 saal degrade hone mein\n• Microplastics blood, lungs, brains mein mil chuke\n\nFuture archaeologists rock mein plastic layer dhundhenge 😰\n\nConvenience chahiye thi. Permanence create kar di!"
    },
    hashtags: "#shorts #plastic #environment #hindi #chemistry #pollution #microplastics #facts #viral #india"
  },

  75: {
    youtube: {
      title: "Bananas Radioactive हैं (तुम भी हो) ☢️ #shorts",
      description: "You're a walking radiation source! ☢️\n\n🍌 Bananas = Measurably radioactive\n⚛️ Abhi tumhare body mein 4,400 atoms/second decay ho rahe hain!\n\n🥔 Potassium-40 = Radioactive isotope\n📊 100 bananas = 1 chest X-ray ke equal\n\n💑 Kisi ke saath so jao = Dono ek doosre ko irradiate kar rahe ho!\n\n⏰ Potassium-40 ki half-life = 1.25 billion years\n🌟 Tumhare body mein timekeepers hain jo solar system se bhi purane!\n\n#chemistry #radioactive #banana #hindi #science #facts #viral",
      tags: "bananas radioactive hindi, potassium 40 hindi, radioactivity hindi, half life hindi, radiation facts hindi, science shorts hindi, chemistry hindi, human body radiation, carbon dating hindi, amazing facts",
      pinned_comment: "Tum abhi radiation emit kar rahe ho! ☢️\n\n👍 = Kya?!\n💬 = Kitne bananas khate ho?"
    },
    instagram: {
      caption: "Bananas Radioactive हैं (तुम भी हो) ☢️🍌\n\nPotassium-40 radioactive hai!\n\nTumhare body mein 4,400 atoms/sec decay ho rahe hain 😱\n\n100 bananas = 1 chest X-ray\n\nTum solar system se purane timekeepers carry kar rahe ho! ⏰\n\nComment \"RADIOACTIVE\" shocked ho toh 👇\n\n#radioactive #banana #chemistry #hindi #reels #science #potassium #facts #viral #india #hindicontent #radiation #physics #amazing"
    },
    x: {
      post: "Bananas radioactive hain ☢️🍌\nTum bhi ho!\n\nAbhi tumhare body mein 4,400 atoms/second decay ho rahe\n\n100 bananas = 1 chest X-ray\n\nPotassium-40 ki half-life = 1.25 billion years\nTum solar system se purane timekeepers carry kar rahe ho! ⏰"
    },
    hashtags: "#shorts #radioactive #banana #hindi #chemistry #science #potassium #facts #viral #india"
  },

  76: {
    youtube: {
      title: "Years का काम Seconds में 🚗 #shorts",
      description: "Chemistry's greatest hack! ⚡\n\n🚗 Car exhaust = Carbon monoxide, nitrogen oxides (TOXIC!)\n⚗️ Catalytic converter = Platinum, palladium, rhodium\n💰 Metals itne expensive = Thieves converters churate hain!\n\n⏱️ Bina catalyst = Reactions months/years lagti\n⚡ Catalyst se = Milliseconds mein!\n\n🍽️ Tumhara body bhi: Enzymes ke bina 1 meal digest = 50 saal!\n\nModern civilization catalysis par chalti hai! 🌍\n\n#chemistry #catalyst #cars #hindi #science #facts #viral",
      tags: "catalytic converter hindi, catalyst chemistry hindi, enzymes hindi, car exhaust hindi, platinum palladium rhodium, science shorts hindi, chemistry hindi, reaction speed, digestion enzymes, amazing facts hindi",
      pinned_comment: "Meal digest karne mein 50 saal lagte enzymes ke bina! 🍽️\n\n👍 = Chemistry amazing hai\n💬 = Car mein catalytic converter hai?"
    },
    instagram: {
      caption: "Years का काम Seconds में ⚡\n\nCatalytic converter:\n• Toxic gas → Harmless molecules\n• Years ka kaam → Milliseconds mein!\n\nTumhara body:\n• Enzymes ke bina 1 meal = 50 saal digest! 🍽️\n\nComment \"CATALYST\" chemistry fan ho toh 👇\n\n#chemistry #catalyst #cars #hindi #reels #science #enzymes #facts #viral #india #hindicontent #technology #digestion #reaction"
    },
    x: {
      post: "Catalytic converter: Toxic gas → Harmless molecules 🚗\n\nBina catalyst = Years lagti reactions\nCatalyst se = Milliseconds mein! ⚡\n\nTumhara body bhi:\nEnzymes ke bina 1 meal digest = 50 saal! 🍽️\n\nModern civilization catalysis par chalti hai!"
    },
    hashtags: "#shorts #chemistry #catalyst #hindi #cars #science #enzymes #facts #viral #india"
  },

  77: {
    youtube: {
      title: "99% Universe इससे बना है (School ने नहीं बताया) 🔥 #shorts",
      description: "The 4th state of matter! 🔥\n\n📚 School: Solid, liquid, gas\n🌌 Reality: 99% visible universe = PLASMA!\n\n⚡ Gas ko heat karo → Electrons escape → Plasma!\n☀️ Sun = Plasma\n⚡ Lightning = Plasma\n💡 Neon signs = Plasma\n📺 TV screens = Plasma\n\n🌍 Fusion reactors plasma use karenge = Unlimited clean energy!\n\nSolid, liquid, gas = Exceptions\nPlasma = RULE! 👑\n\n#chemistry #plasma #physics #hindi #science #facts #viral",
      tags: "plasma state of matter hindi, fourth state hindi, sun plasma, lightning plasma, fusion energy hindi, science shorts hindi, states of matter hindi, physics hindi, chemistry hindi, amazing facts",
      pinned_comment: "School ne 4th state nahi padhaya! 🔥\n\n👍 = Ye nahi pata tha\n💬 = Plasma examples aur batao?"
    },
    instagram: {
      caption: "99% Universe इससे बना है 🔥\n\nSchool: Solid, liquid, gas\nReality: PLASMA! 99%!\n\n☀️ Sun = Plasma\n⚡ Lightning = Plasma\n💡 Neon signs = Plasma\n\nFusion reactors = Unlimited clean energy! 🌍\n\nComment \"PLASMA\" shocked ho toh 👇\n\n#plasma #physics #chemistry #hindi #reels #science #universe #facts #viral #india #hindicontent #energy #sun #lightning"
    },
    x: {
      post: "School: Solid, liquid, gas\nReality: 4th state = PLASMA 🔥\n\n99% visible universe plasma se bana hai!\n\n☀️ Sun = Plasma\n⚡ Lightning = Plasma\n📺 TV = Plasma\n\nSolid, liquid, gas = Exceptions\nPlasma = Rule! 👑"
    },
    hashtags: "#shorts #plasma #physics #hindi #chemistry #science #universe #sun #facts #viral"
  },

  78: {
    youtube: {
      title: "300 साल पुराना Law तुम्हारी जान बचाता है 🚗 #shorts",
      description: "Newton is keeping you alive! 🍎\n\n📜 1687: Newton's First Law\n🚗 \"Motion mein object motion mein rehta hai\"\n\n💥 Car 60 kph par hai. TUM bhi 60 kph par ho!\n🧱 Wall car rokti hai. PAR TUMHE NAHI!\n😱 Tum dashboard ki taraf jaate rehte ho!\n\n🔒 Seatbelt = External force jo tumhe rokti hai\n🎈 Airbags = Soft deceleration\n🏗️ Crumple zones = Longer stopping time = Less force\n\n300 saal pehle likha law aaj tumhari jaan bacha raha hai! 🙏\n\n#physics #newton #seatbelt #hindi #science #facts #viral",
      tags: "newton first law hindi, seatbelt physics hindi, car safety hindi, inertia hindi, physics hindi, airbag science, crash physics hindi, science shorts hindi, newton laws hindi, amazing facts",
      pinned_comment: "Newton ka law tumhare around wrapped hai! 🚗\n\n👍 = Seatbelt lagaata hoon\n💬 = Physics class yaad aa gayi?"
    },
    instagram: {
      caption: "300 साल पुराना Law तुम्हारी जान बचाता है 🚗\n\nNewton 1687: Object motion mein rehta hai!\n\nCar 60 kph. Tum bhi 60 kph.\nCar ruki. TUM NAHI! 😱\n\nSeatbelt = External force jo tumhe rokti hai! 🔒\n\nComment \"NEWTON\" physics fan ho toh 👇\n\n#physics #newton #seatbelt #hindi #reels #science #car #safety #facts #viral #india #hindicontent #inertia #crash"
    },
    x: {
      post: "Seatbelts exist karti hain 300 saal purane law ki wajah se 🚗\n\nNewton 1687: Motion mein object motion mein rehta hai\n\nCar 60 kph → Wall rokti hai car ko\nPar TUMHE kuch nahi rokta! 😱\n\nSeatbelt = External force\n\n300 saal purana physics, aaj bhi jaan bacha raha hai!"
    },
    hashtags: "#shorts #physics #newton #hindi #seatbelt #science #car #safety #facts #viral"
  },

  79: {
    youtube: {
      title: "Ambulance की Sound ने Big Bang prove किया 🚑 #shorts",
      description: "Same physics, different scale! 🌌\n\n🚑 Ambulance aati hai = High pitch\n🚑 Ambulance jaati hai = Low pitch\n📊 This is Doppler Effect!\n\n🔭 1929: Edwin Hubble ne notice kiya\n🌌 Distant galaxies ki light = Red shifted\n⬅️ Sab kuch humse DOOR ja raha hai!\n\n⏪ Clock backwards chalaao = Sab ek jagah tha\n💥 THE BIG BANG! 13.8 billion saal pehle!\n\nAmbulance siren = Universe ki age reveal! 🤯\n\n#physics #doppler #bigbang #hindi #science #facts #viral",
      tags: "doppler effect hindi, big bang hindi, edwin hubble hindi, redshift hindi, universe expanding hindi, physics hindi, science shorts hindi, ambulance pitch, cosmology hindi, amazing facts",
      pinned_comment: "Ambulance ne universe ka secret bataya! 🚑🌌\n\n👍 = Physics beautiful hai\n💬 = Doppler effect kabhi notice kiya?"
    },
    instagram: {
      caption: "Ambulance की Sound ने Big Bang prove किया 🚑\n\nAmbulance aati hai = High pitch\nJaati hai = Low pitch\n= Doppler Effect!\n\nHubble 1929: Galaxies ki light red shifted\n= Universe expanding! 🌌\n\nSame physics! 💥 Big Bang 13.8 billion saal pehle!\n\nComment \"DOPPLER\" physics lover ho toh 👇\n\n#physics #doppler #bigbang #hindi #reels #science #universe #facts #viral #india #hindicontent #hubble #cosmology #space"
    },
    x: {
      post: "Ambulance siren alag sound karti hai aate vs jaate waqt 🚑\n\n= Doppler Effect\n\n1929: Hubble ne dekha galaxies ki light red shifted = Door ja rahi hain\n\nSab kuch door ja raha hai = Big Bang 13.8 billion saal pehle! 💥\n\nSame physics. Ambulance se universe tak! 🌌"
    },
    hashtags: "#shorts #physics #doppler #hindi #bigbang #science #universe #hubble #facts #viral"
  },

  80: {
    youtube: {
      title: "तुम Reality का 0.0035% ही देख सकते हो 👁️ #shorts",
      description: "Your eyes are nearly blind! 👁️\n\n📊 Electromagnetic spectrum HUGE hai\n📻 Radio waves = Kilometers lambi\n☢️ Gamma rays = Atoms se chhoti\n👀 Visible light = Sirf 380-700 nanometers!\n\n🔥 Infrared: Tum abhi glow kar rahe ho!\n🐍 Snakes isse hunt karte hain\n🐝 Bees UV dekhte hain (flowers ke hidden patterns!)\n📡 Radio waves: WiFi, phone calls, BIG BANG echo!\n\nTum reality keyhole se dekh rahe ho! 🔑\nUniverse frequencies mein cheekh raha hai jo tum kabhi perceive nahi karoge! 😱\n\n#physics #light #spectrum #hindi #science #facts #viral",
      tags: "electromagnetic spectrum hindi, visible light hindi, infrared ultraviolet hindi, physics hindi, human vision hindi, science shorts hindi, radio waves hindi, gamma rays hindi, perception reality, amazing facts",
      pinned_comment: "0.0035% reality dekh sakte ho! 👁️\n\n👍 = Mind blown\n💬 = Kaunsi invisible frequency dekhna chahte ho?"
    },
    instagram: {
      caption: "तुम Reality का 0.0035% ही देख सकते हो 👁️\n\nVisible light = 380-700 nanometers ONLY!\n\n🔥 Infrared: Tum glow kar rahe ho!\n🐝 UV: Bees flowers ke patterns dekhte hain\n📡 Radio: WiFi, Big Bang echo!\n\nKeyhole se reality dekh rahe ho! 🔑\n\nComment \"SPECTRUM\" physics fan ho toh 👇\n\n#physics #light #spectrum #hindi #reels #science #vision #facts #viral #india #hindicontent #electromagnetic #perception #reality"
    },
    x: {
      post: "Tum sirf 0.0035% light dekh sakte ho 👁️\n\n🔥 Infrared: Tum abhi glow kar rahe ho\n🐍 Snakes isse hunt karte hain\n🐝 Bees UV dekhte hain\n📡 Radio waves: Big Bang ki echo carry karti hain!\n\nReality keyhole se dekh rahe ho 🔑\nUniverse frequencies mein cheekh raha hai!"
    },
    hashtags: "#shorts #physics #light #hindi #spectrum #science #vision #perception #facts #viral"
  }
};

// Read the current data.json
const dataPath = path.join(__dirname, '..', 'public', 'data.json');
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

// Update topics with social media metadata
let updatedCount = 0;
for (const topic of data) {
  if (socialMediaData[topic.topic_id]) {
    topic.social_media = socialMediaData[topic.topic_id];
    updatedCount++;
    console.log(`Updated topic ${topic.topic_id}: ${topic.title}`);
  }
}

// Write the updated data back
fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));

console.log(`\nSuccessfully updated ${updatedCount} topics with social media metadata!`);
console.log('Topics updated: 66-80');
