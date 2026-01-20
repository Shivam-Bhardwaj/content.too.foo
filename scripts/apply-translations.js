#!/usr/bin/env node

/**
 * apply-translations.js
 *
 * Applies English translations for all misaligned Hindi narrations.
 * Translations by Claude based on understanding of Romanized Hindi.
 */

const fs = require('fs');
const path = require('path');

const DATA_PATH = path.join(__dirname, '..', 'public', 'data.json');
const BACKUP_PATH = path.join(__dirname, '..', 'data', 'data-translated-backup.json');

// Translation map: Hindi -> English
// Key is normalized (lowercase, trimmed)
const TRANSLATIONS = {
  // Topic 1: Antikythera Mechanism
  "yeh tha antikythera mechanism—ek mechanical computer jo 100 bce ke aas-paas bana tha.": "This was the Antikythera Mechanism—a mechanical computer built around 100 BCE.",
  "craftsmanship itni advanced thi ki aisi gear complexity 14th century ke medieval clockmakers tak dobara nahi dikhi.": "The craftsmanship was so advanced that this level of gear complexity wasn't seen again until 14th century medieval clockmakers.",
  "zara socho.": "Think about it.",
  "ancient greeks ne pocket-sized astronomical computer banaya, aur phir humanity bhool gayi ki aisa kuch banana kaise hai—hazaar saal se zyada tak.": "Ancient Greeks built a pocket-sized astronomical computer, and then humanity forgot how to make anything like it—for over a thousand years.",

  // Topic 2: Göbekli Tepe
  "1994 mein, turkey mein ek kurdish charwaha ne apne khet mein ajeeb pattharon ko zameen se bahar nikalta dekha.": "In 1994, a Kurdish shepherd in Turkey noticed strange stones emerging from his field.",
  "bhaari pattharon ke khambhe, kuch 20 ton wajan ke, perfect circles mein arranged.": "Massive stone pillars, some weighing 20 tons, arranged in perfect circles.",
  "inpe intricate jaanwar khude hue the: sher, bicchu, giddh, saanp.": "Intricate animals carved on them: lions, scorpions, vultures, snakes.",
  "tab bani jab insaan ko primitive hunter-gatherers maana jaata tha, bas din-pratidin survive karte hue.": "Built when humans were considered primitive hunter-gatherers, just surviving day-to-day.",
  "yeh specific star positions ke saath aligned hain—khaaskar woh constellation jise hum cygnus kehte hain.": "They're aligned with specific star positions—particularly the constellation we call Cygnus.",
  "aur phir, lagbhag 8,000 bce mein, unhone poori site ko jaan-boojhkar tonon mitti ke neeche daba diya.": "And then, around 8,000 BCE, they deliberately buried the entire site under tons of dirt.",
  "kyun?": "Why?",
  "göbekli tepe hume sawaal karne par majboor karta hai: kya civilization kheti se shuru hui, ya kheti civilization ki wajah se shuru hui? shayad hamare poorvaj utne sophisticated the jitna humne kabhi socha bhi nahi.": "Göbekli Tepe forces us to ask: did civilization start because of farming, or did farming start because of civilization? Perhaps our ancestors were far more sophisticated than we ever imagined.",

  // Topic 3: Roman Concrete
  "rome ka pantheon duniya ka sabse bada unreinforced concrete dome hai. 125 ad mein bana.": "Rome's Pantheon is the world's largest unreinforced concrete dome. Built in 125 AD.",
  "iske opposite, modern concrete structures decades mein degrade hone lagte hain.": "In contrast, modern concrete structures start degrading within decades.",
  "par hamare copies phir bhi crack ho jaate the. 2023 mein, mit scientists ne finally solve kiya.": "But our copies still cracked. In 2023, MIT scientists finally solved it.",
  "unhone ancient roman sites ke samples powerful microscopes ke neeche examine kiye aur kuch unexpected paaya: chhote white chunks jise lime clasts kehte hain, poore concrete mein faile hue.": "They examined samples from ancient Roman sites under powerful microscopes and found something unexpected: small white chunks called lime clasts, scattered throughout the concrete.",
  "jab roman concrete mein chhoti cracks banti hain, baarish ka paani andar jaata hai aur in lime chunks ke saath react karta hai, naya calcium crystite banaata hai jo literally crack ko heal kar deta hai. self-healing concrete.": "When small cracks form in Roman concrete, rainwater seeps in and reacts with these lime chunks, creating new calcium crystite that literally heals the crack. Self-healing concrete.",

  // Topic 4: Inca Stonework
  "aur hum abhi bhi copy nahi kar sakte. peru ke andes pahadon mein oopar sacsayhuamán hai, ek inca fortress jo 1500 ad ke aas-paas bana.": "And we still can't replicate it. High in Peru's Andes mountains sits Sacsayhuamán, an Inca fortress built around 1500 AD.",
  "yahan ke pathar massive hain—kuch 100 ton se zyada wajan ke. aur yeh itni precisely fit hote hain ki aap inke beech kagaz ka tukda bhi nahi daal sakte.": "The stones here are massive—some weighing over 100 tons. And they fit so precisely that you can't slide a piece of paper between them.",
  "phir bhi unhone aise joints banaye jo itne perfect, itne irregular, itne interlocking hain, ki har pathar ka apna unique shape hai jo sirf ek exact position mein fit hota hai. ab suniye interesting baat.": "Yet they created joints so perfect, so irregular, so interlocking, that each stone has its unique shape that fits in only one exact position. Here's the interesting part.",

  // Topic 5: Delhi Iron Pillar
  "delhi mein ek aisi pillar khadi hai jo exist hi nahi karni chahiye. saat meter oonchi, chhe ton iron ki, gupta empire ke samay bani lagbhag 400 ad mein.": "In Delhi stands a pillar that shouldn't exist. Seven meters tall, six tons of iron, built during the Gupta Empire around 400 AD.",
  "2002 mein, iit kanpur ke researchers ne finally mystery solve ki. jawab beautifully simple tha: ancient indian ironsmiths rust rokne ki koshish nahi kar rahe the.": "In 2002, IIT Kanpur researchers finally solved the mystery. The answer was beautifully simple: ancient Indian ironsmiths weren't trying to prevent rust.",
  "pillar ek unique process se forge hui thi jisme metal mein high phosphorus reh gaya. jab is iron mein oxidation shuru hua, phosphorus ne ek thin layer banayi jise misawite kehte hain—basically, protective rust.": "The pillar was forged through a unique process that left high phosphorus in the metal. When this iron began to oxidize, the phosphorus created a thin layer called misawite—essentially, protective rust.",
  "is layer ne pillar ko further corrosion se seal kar diya.": "This layer sealed the pillar from further corrosion.",
  "solah sau saal pehle, indian blacksmiths ne ek problem solve ki jo aaj bhi modern engineers ke liye challenge hai.": "Sixteen hundred years ago, Indian blacksmiths solved a problem that still challenges modern engineers today.",

  // Topic 6: Chinese Seismoscope
  "earthquakes door ke provinces ko tabah kar dete the, par jab tak messengers khabar le kar aate, help bhejne mein bahut der ho chuki hoti.": "Earthquakes devastated distant provinces, but by the time messengers arrived with news, it was too late to send help.",
  "tab aaye zhang heng—astronomer, mathematician, aur inventor. 132 ad mein, unhone duniya ka pehla seismoscope unveil kiya.": "Enter Zhang Heng—astronomer, mathematician, and inventor. In 132 AD, he unveiled the world's first seismoscope.",
  "jab earthquake aata—chahe sau kilometer door bhi—internal mechanisms ek dragon ko uski ball waiting toad ke muh mein release karwa dete the. woh dragon jis direction face kar raha tha, wahi batata tha earthquake kahan aaya.": "When an earthquake struck—even hundreds of kilometers away—internal mechanisms caused a dragon to release its ball into a waiting toad's mouth. The direction the dragon faced indicated where the earthquake occurred.",
  "dinon baad, ek messenger aaya: ek massive earthquake ne 500 kilometer paschim mein ek shehar tabah kar diya tha.": "Days later, a messenger arrived: a massive earthquake had destroyed a city 500 kilometers to the west.",
  "modern scientists ne replicas banaye pendulums aur lever systems use karke, par hum abhi bhi sure nahi ki original kaise kaam karta tha.": "Modern scientists have built replicas using pendulums and lever systems, but we still don't know exactly how the original worked.",

  // Topic 7: The Vasa
  "swedish warship vasa cheering crowds ke saamne sail karti hai. king gustav ii adolf ne duniya ka sabse powerful warship maanga tha.": "The Swedish warship Vasa sets sail before cheering crowds. King Gustav II Adolf had demanded the world's most powerful warship.",
  "64 bronze cannons.": "64 bronze cannons.",
  "shore se 1,300 meter door, hawa ka ek jhonka aaya.": "1,300 meters from shore, a gust of wind struck.",
  "unhone stability test kiya: tees aadmi deck par ek taraf se doosri taraf dode.": "They ran a stability test: thirty men running side to side on deck.",
  "vasa 333 saal bhuli rahi jab tak divers ne 1961 mein dobara nahi dhoondha. aaj yeh museum mein hai, 95% original—duniya ki sabse preserved 17th-century ship.": "The Vasa lay forgotten for 333 years until divers rediscovered it in 1961. Today it sits in a museum, 95% original—the world's best-preserved 17th-century ship.",

  // Topic 8: Mars Climate Orbiter
  "2943 crore rs ka spacecraft.": "A ₹2,943 crore spacecraft.",
  "kyunki kisine units convert nahi kiye. 23 september, 1999.": "Because someone didn't convert units. September 23, 1999.",
  "nasa ka mars climate orbiter nau mahine ki journey ke baad red planet ke paas pahunchta hai.": "NASA's Mars Climate Orbiter approaches the red planet after a nine-month journey.",
  "nasa ki navigation team ne assume kiya data metric units mein hai—newtons.": "NASA's navigation team assumed the data was in metric units—newtons.",
  "jab orbiter mars pahuncha, yeh planned se 100 kilometer neeche tha. ya toh atmosphere mein jal gaya ya space mein nikal gaya.": "When the orbiter reached Mars, it was 100 kilometers lower than planned. It either burned up in the atmosphere or flew off into space.",
  "gayab hua 4. 45 se multiply na karne ki wajah se.": "Lost because someone didn't multiply by 4.45.",
  "par schedule pressure ki wajah se teams ne verification steps skip kar diye. jo reviews hone chahiye the, nahi hue.": "But due to schedule pressure, teams skipped verification steps. Reviews that should have happened, didn't.",
  "yeh lesson seekhne mein 2943 crore rs lage: assumptions missions khatam karti hain. engineering mein, tum sab verify karo. ya kuch nahi.": "It cost ₹2,943 crore to learn this lesson: assumptions end missions. In engineering, you verify everything. Or nothing.",

  // Topic 9: Gimli Glider
  "ek 767 ka fuel 12.3 km par khatam. jo aage hua woh namumkin tha.": "A 767 runs out of fuel at 12.3 km altitude. What happened next was impossible.",
  "23 july, 1983.": "July 23, 1983.",
  "air canada flight 143 manitoba ke oopar 69 logon ke saath cruise kar rahi thi.": "Air Canada Flight 143 was cruising over Manitoba with 69 people aboard.",
  "12.3 km par.": "At 12.3 km altitude.",
  "ek nayi boeing 767, metric mein convert hui, galat calculations se fuel hui thi. workers ne kilograms ki jagah pounds use kiye.": "A new Boeing 767, converted to metric, was fueled with wrong calculations. Workers used pounds instead of kilograms.",
  "pearson ne aircraft ko 64 km sirf gravity aur skill se glide kiya.": "Pearson glided the aircraft 64 km using only gravity and skill.",
  "aur runway khaali nahi tha—ek local race car event mein families aur cars bharey the.": "And the runway wasn't empty—a local race car event had filled it with families and cars.",
  "pearson ne impossible decision liya: slow down karne ke liye nose-dive.": "Pearson made an impossible decision: nose-dive to slow down.",
  "saare 69 passengers bach gaye. captain pearson ko aviation's highest honors mile.": "All 69 passengers survived. Captain Pearson received aviation's highest honors.",
  "plane?": "The plane?",
  "repair hua aur 25 saal aur uda. kabhi kabhi disaster se nikalne ka ek hi raasta hota hai koi jo impossible accept karne se mana kar de.": "It was repaired and flew for another 25 years. Sometimes the only way out of disaster is someone who refuses to accept the impossible.",

  // Topic 10: Hubble's Mirror
  "90 rs.": "₹90.",
  "5 billion ka telescope.": "A ₹5 billion telescope.",
  "24 april, 1990.": "April 24, 1990.",
  "mirror ka edge sirf 2.": "The mirror's edge was just 2.",
  "2 microns flat tha. yeh ek baal ki width ka 1/50th hai.": "2 microns too flat. That's 1/50th the width of a human hair.",
  "us device mein ek chhota spacer 1. 3 millimeters galat jagah tha. har measurement kehta tha mirror perfect hai.": "A small spacer in that device was positioned 1.3 millimeters wrong. Every measurement said the mirror was perfect.",
  "phir 1993 mein, astronauts ne history ka sabse complex repair mission perform kiya. unhone corrective optics install kiye—basically, hubble ke liye glasses.": "Then in 1993, astronauts performed history's most complex repair mission. They installed corrective optics—essentially, glasses for Hubble.",
  "dark energy ka evidence. tees saal ki revolutionary science, sirf isliye kyunki engineers ne figure out kiya ki orbit mein telescope ko prescription lenses kaise dein.": "Evidence of dark energy. Thirty years of revolutionary science, all because engineers figured out how to give a telescope prescription lenses in orbit.",

  // Topic 11: Therac-25
  "aur high-power x-ray mode jo 100 guna zyada powerful tha—pehle metal shielding se guzarne ke liye.": "And a high-power X-ray mode that was 100 times more powerful—meant to pass through metal shielding first.",
  "patients ko intended dose se 100 guna zyada concentrated beam mein mila. unhe intense burning mehsoos hui.": "Patients received a concentrated beam 100 times stronger than intended. They felt intense burning.",
  "disaster ne ek horrifying sach reveal kiya: therac-25 ne hardware safety interlocks hata diye the jo pehle ke models mein the.": "The disaster revealed a horrifying truth: the Therac-25 had removed hardware safety interlocks that existed in earlier models.",
  "therac-25 har software engineering course mein sikhaya jaata hai ultimate warning ke taur par: safety-critical systems mein, untested code maarta hai.": "The Therac-25 is taught in every software engineering course as the ultimate warning: in safety-critical systems, untested code kills.",

  // Topic 12: Hyatt Regency Collapse
  "u.": "U.S.",
  "17 july, 1981.": "July 17, 1981.",
  "shaam 7:05 baje, fourth-floor walkway toot gaya. yeh second-floor walkway par gira, aur dono crowded dance floor par collapse ho gaye.": "At 7:05 PM, the fourth-floor walkway collapsed. It crashed into the second-floor walkway, and both collapsed onto the crowded dance floor.",
  "114 log mare.": "114 people died.",
  "200 se zyada injured. investigation ne ek devastating sach reveal kiya.": "Over 200 were injured. The investigation revealed a devastating truth.",
  "hamesha.": "Always.",

  // Topic 13: Ariane 5 Explosion
  "4500 crore rs dollars.": "₹4,500 crore.",
  "liftoff ke 37 seconds baad, rocket wildly off course jaata hai aur self-destruct ho jaata hai.": "37 seconds after liftoff, the rocket veers wildly off course and self-destructs.",
  "1986 ka software bug.": "A software bug from 1986.",
  "ariane 5 ka navigation system ariane 4 se copy hua tha.": "Ariane 5's navigation system was copied from Ariane 4.",
  "code ka ek particular piece 64-bit floating point number ko 16-bit signed integer mein convert karta tha.": "One particular piece of code converted a 64-bit floating point number into a 16-bit signed integer.",
  "iski horizontal velocity 32,767 se zyada thi—maximum value jo 16-bit signed integer hold kar sakta hai. number overflow ho gaya.": "Its horizontal velocity exceeded 32,767—the maximum value a 16-bit signed integer can hold. The number overflowed.",
  "chaar satellites.": "Four satellites.",
  "liability hota hai.": "Becomes liability.",

  // Topic 14: Tacoma Narrows Bridge
  "64 km/h ki hawa.": "A 64 km/h wind.",
  "7 november, 1940.": "November 7, 1940.",
  "us subah, steady 64 km/h winds ne ek aisa phenomenon create kiya jo engineers ne is scale par kabhi nahi dekha tha.": "That morning, steady 64 km/h winds created a phenomenon engineers had never seen at this scale.",
  "road deck 45 degrees tak rotate hone laga, cars sideways hone lage. us din sirf ek casualty hui—tubby naam ka cocker spaniel, ek chhodi hui car mein trapped.": "The road deck began rotating up to 45 degrees, cars tipping sideways. The only casualty that day was a cocker spaniel named Tubby, trapped in an abandoned car.",

  // Topic 15: Henry Maudslay
  "mind-blowing baat?": "The mind-blowing part?",

  // Topic 16: John Harrison
  "hazaaron sailors mar gaye kyunki koi samajh nahi paya wo samundar mein kahan hain. ek self-taught carpenter ne wo solve kar diya jo sabse bade scientists nahi kar paaye - aur isme use 40 saal lage.": "Thousands of sailors died because nobody could figure out where they were at sea. A self-taught carpenter solved what the greatest scientists couldn't—and it took him 40 years.",
  "1707 mein, chaar british warships un rocks se takra gayin jinke baare mein unhe pata hi nahi tha.": "In 1707, four British warships crashed into rocks they didn't know existed.",
  "lagbhag 2,000 aadmi ek hi raat mein doob gaye.": "Nearly 2,000 men drowned in a single night.",
  "problem?": "The problem?",
  "par longitude?": "But longitude?",
  "parliament ne 9000.0 kg offer kiye - aaj ke millions - jo bhi ise solve kare uske liye.": "Parliament offered £20,000—millions in today's money—to anyone who could solve it.",
  "sabne hasa.": "Everyone laughed.",
  "harrison ne 40 saal lagaye chaar revolutionary timepieces banane mein.": "Harrison spent 40 years building four revolutionary timepieces.",
  "uski final masterpiece, h4, ne 81 din samundar par sirf 5 seconds lose kiye.": "His final masterpiece, the H4, lost just 5 seconds over 81 days at sea.",
  "usne finally apna prize 80 saal ki umar mein paaya, apni death se teen saal pehle.": "He finally received his prize at age 80, three years before his death.",
  "mind-blowing sach?": "The mind-blowing truth?",

  // Topic 18: Carl Zeiss & Ernst Abbe
  "ye sab dikhte hain kyunki do german obsessives ne optics mein 'good enough' accept karne se mana kar diya. 1840s mein, microscope lenses banana ek art tha, science nahi.": "All of these are visible because two German obsessives refused to accept 'good enough' in optics. In the 1840s, making microscope lenses was an art, not a science.",
  "no more guessing.": "No more guessing.",
  "no more luck.": "No more luck.",
  "pure science.": "Pure science.",
  "toh unhone otto schott ke saath partner karke bilkul naye types ke optical glass invent kiye.": "So they partnered with Otto Schott to invent entirely new types of optical glass.",

  // Topic 19: Charles Stark Draper
  "ek mit professor ke gyroscopes ke junoon ki wajah se wo apne target ke feet ke andar land hue. charles stark draper ke paas 1930s mein ek crazy idea tha: agar aircraft bina bahar dekhe navigate kar sakein?": "One MIT professor's obsession with gyroscopes is why they landed within feet of their target. Charles Stark Draper had a crazy idea in the 1930s: what if aircraft could navigate without looking outside?",
  "no stars.": "No stars.",
  "no landmarks.": "No landmarks.",
  "yeh incredible hai: astronauts 40.0 hazaar km per hour par travel kar rahe the ek target ki taraf jo 384.0 hazaar km door tha.": "This is incredible: astronauts were traveling at 40,000 km per hour toward a target 384,000 km away.",

  // Topic 20: Great Gauge War
  "may 31, 1886 ko, southern railroads ne impossible kar dikaya.": "On May 31, 1886, Southern railroads did the impossible.",
  "sirf 36 hours mein, work crews ne 18.4 hazaar km track teen inch shift kar diya.": "In just 36 hours, work crews shifted 18,400 km of track by three inches.",
  "yeh proof hai ki sabse boring-seeming standards nations ki fate shape kar sakte hain.": "This is proof that the most boring-seeming standards can shape the fate of nations.",

  // Topic 21: AC vs DC War
  "1893 world's fair battleground bana.": "The 1893 World's Fair became the battleground.",
  "khatam.": "It was over.",
  "edison, 'wizard of menlo park,' isliye haara kyunki wo admit nahi kar saka wo galat tha.": "Edison, the 'Wizard of Menlo Park,' lost because he couldn't admit he was wrong.",

  // Topic 22: Battle of the Calendars
  "britain ne gregorian calendar 1752 tak adopt nahi kiya - tab tak unhe 11 din skip karne the.": "Britain didn't adopt the Gregorian calendar until 1752—by then they had to skip 11 days.",
  "yahan truly bizarre hota hai: russia ne 1918 tak wait kiya.": "Here's where it gets truly bizarre: Russia waited until 1918.",
  "jab russia ne finally revolution ke baad switch kiya, unhone 13 din skip kiye.": "When Russia finally switched after the Revolution, they skipped 13 days.",
  "gregorian calendar abhi bhi imperfect hai - wo har saal lagbhag 26 seconds off hai. 3,236 saalon mein, humein ek aur din skip karna hoga.": "The Gregorian calendar is still imperfect—it's off by about 26 seconds per year. In 3,236 years, we'll need to skip another day.",

  // Topic 23: Time Zones
  "ek single station mein chhe different clocks ho sakti thin chhe different railroad companies ke liye, har ek apna standard use karti thi.": "A single station could have six different clocks for six different railroad companies, each using their own standard.",
  "1853 ka great train wreck 21 logon ko partly time confusion ki wajah se maar gaya.": "The Great Train Wreck of 1853 killed 21 people partly due to time confusion.",
  "november 18, 1883 - 'the day of two noons' - railroads ne north america mein chaar standard time zones impose kar diye.": "November 18, 1883—'The Day of Two Noons'—railroads imposed four standard time zones across North America.",
  "government ne officially 1918 tak time zones adopt nahi kiye. mind-blowing sach?": "The government didn't officially adopt time zones until 1918. The mind-blowing truth?",

  // Topic 24: 2019 Kilogram
  "ise har 40 saal mein ek baar nikala aur weigh kiya jaata tha.": "It was taken out and weighed once every 40 years.",
  "ek century mein, isne lagbhag 50 micrograms khoye - ek eyelash ke weight jitna.": "Over a century, it lost about 50 micrograms—the weight of an eyelash.",
  "solution?": "The solution?",
  "2019 mein, kilogram ko planck constant use karke redefine kiya gaya - ek fundamental number jo reality ke fabric mein buna hua hai.": "In 2019, the kilogram was redefined using the Planck constant—a fundamental number woven into the fabric of reality.",

  // Topic 25: ASML's Mirrors
  "asml ke mirrors par molybdenum aur silicon ki 100 alternating layers coating hain, har layer exactly 3 atoms thick.": "ASML's mirrors are coated with 100 alternating layers of molybdenum and silicon, each layer exactly 3 atoms thick.",
  "flatness 50 picometers tak accurate honi chahiye - atom ki width ki aadhi.": "The flatness must be accurate to 50 picometers—half the width of an atom.",
  "atoms fire karte ho.": "You fire atoms.",
  "tumhare phone mein billions transistors hain jo sirf isliye exist karte hain kyunki kisine figure out kiya mirror ko atomic scales tak flat kaise banayein.": "Your phone has billions of transistors that exist only because someone figured out how to make a mirror flat to atomic scales.",

  // Topic 26: LIGO
  "yeh possible kaise hai? ligo do 4-kilometer laser arms use karta hai l-shape mein.": "How is this possible? LIGO uses two 4-kilometer laser arms in an L-shape.",
  "ek laser beam split hoti hai, dono arms mein jaati hai, aur wapas combine hoti hai.": "A laser beam splits, travels down both arms, and recombines.",
  "2015 mein, ligo ne 1.": "In 2015, LIGO detected something 1.",
  "3 billion light-years door do black holes merge hote detect kiye.": "3 billion light-years away: two black holes merging.",

  // Topic 27: GPS Time Dilation
  "gps satellites 14,000 kilometers per hour par orbit karte hain.": "GPS satellites orbit at 14,000 kilometers per hour.",
  "is speed par, unki clocks ground clocks ke comparison mein lagbhag 7 microseconds per day lose karti hain.": "At this speed, their clocks lose about 7 microseconds per day compared to ground clocks.",
  "20,200 kilometers altitude par, gravity weaker hai.": "At 20,200 kilometers altitude, gravity is weaker.",
  "yeh satellite clocks ko lagbhag 45 microseconds per day gain karata hai.": "This makes satellite clocks gain about 45 microseconds per day.",
  "satellite clocks 38 microseconds fast chalti hain per day.": "Satellite clocks run 38 microseconds fast per day.",

  // Topic 28: James Webb Mirror
  "problem yeh hai: james webb ka mirror 6. 5 meters across hai - kisi bhi rocket mein fit hone ke liye bahut bada.": "Here's the problem: James Webb's mirror is 6.5 meters across—too big to fit in any rocket.",
  "solution? 18 hexagonal segments se banao jo space mein unfold hon.": "The solution? Build it from 18 hexagonal segments that unfold in space.",
  "inhe ek doosre se 10 nanometers ke andar match karna tha - lagbhag human hair ka 1/10,000th.": "They had to match each other within 10 nanometers—about 1/10,000th of a human hair.",
  "mirrors beryllium ke bane hain jinpar gold ki layer coating hai sirf 100 nanometers thick - lagbhag 1,000 atoms.": "The mirrors are made of beryllium coated with a gold layer just 100 nanometers thick—about 1,000 atoms.",
  "gold infrared light perfectly reflect karta hai. beryllium -233 degrees celsius par stable rehta hai.": "Gold reflects infrared light perfectly. Beryllium stays stable at -233 degrees Celsius.",
  "webb sabse purani galaxies se infrared light dhundhta hai - light jo 13.": "Webb searches for infrared light from the oldest galaxies—light that has been traveling for 13.",
  "5 billion saal se travel kar rahi hai.": "5 billion years.",
  "big bang ke baad pehli galaxies ki light finally hum tak pahunch rahi hai. webb ise dekh sakta hai kyunki 18 mirrors itne perfectly positioned hain ki ek ki tarah kaam karein.": "Light from the first galaxies after the Big Bang is finally reaching us. Webb can see it because 18 mirrors are so perfectly positioned they work as one.",

  // Topic 29: Swiss Watch Escapements
  "har tick pichle se identical honi chahiye, 691,200 baar per day.": "Every tick must be identical to the last, 691,200 times per day.",
  "swiss watchmakers ne har problem ingenious solutions se solve ki - silicon hairsprings jo heat se expand nahi hote, tourbillon mechanisms jo gravitational effects average out karte hain.": "Swiss watchmakers solved each problem with ingenious solutions—silicon hairsprings that don't expand with heat, tourbillon mechanisms that average out gravitational effects.",
  "ek modern swiss chronometer 4 seconds se zyada per day lose ya gain nahi kar sakti.": "A modern Swiss chronometer can't lose or gain more than 4 seconds per day.",
  "yeh 99.": "That's 99.",
  "995% accuracy hai - completely mechanical means se achieve, rice ke grain se chhote parts ke saath.": "995% accuracy—achieved through completely mechanical means, with parts smaller than a grain of rice.",

  // Topic 30: Atomic Fountain Clocks
  "atomic clocks kuch use karti hain jo kabhi nahi badalta: wo frequency jis par electrons atom mein energy levels ke beech jump karte hain.": "Atomic clocks use something that never changes: the frequency at which electrons jump between energy levels in an atom.",
  "cesium-133 atoms hamesha exactly 9,192,631,770 cycles per second par oscillate karte hain. hamesha.": "Cesium-133 atoms always oscillate at exactly 9,192,631,770 cycles per second. Always.",
  "jaise ye rise aur fall karte hain - lagbhag ek meter high - ye measurement zone se do baar guzarte hain.": "As they rise and fall—about one meter high—they pass through the measurement zone twice.",
  "nist-f2, america ka primary time standard, yeh method use karta hai. 300 million saal lagenge ek single second gain ya lose karne mein.": "NIST-F2, America's primary time standard, uses this method. It would take 300 million years to gain or lose a single second.",
  "ek second hai 9,192,631,770 cesium oscillations.": "One second IS 9,192,631,770 cesium oscillations.",

  // Topic 34: Vinyl Records
  "agar aap baarah inch record ki groove stretch karo, yeh pandrah sau feet se zyada extend hogi - lagbhag ek mile ka teesra hissa - microscopically detailed sound information.": "If you stretched out a twelve-inch record's groove, it would extend over fifteen hundred feet—about a third of a mile—of microscopically detailed sound information.",
  "yeh beautiful irony hai.": "Here's the beautiful irony.",

  // Topic 35: Whiskey Barrel Char
  "bharne se pehle, coopers white oak barrels ke andar aag lagaate hain - typically payntalees se pachaspan seconds tak.": "Before filling, coopers set fire to the inside of white oak barrels—typically for 45 to 55 seconds.",
  "char activated carbon ki tarah kaam karta hai, harsh sulfur compounds remove karta hai jabki vanillin add karta hai - same molecule jo vanilla ko sweet smell deta hai.": "The char works like activated carbon, removing harsh sulfur compounds while adding vanillin—the same molecule that gives vanilla its sweet smell.",
  "distillers apni fire fine-tune karte hain signature tastes create karne ke liye.": "Distillers fine-tune their fire to create signature tastes.",
  "human history ki sabse purani chemistry, abhi bhi magic bana rahi hai.": "The oldest chemistry in human history, still making magic.",

  // Topic 36: Gauge Girls of WWII
  "human fingertips mein teen hazaar se zyada touch receptors hote hain per square centimeter - body pe kahin bhi highest density.": "Human fingertips have over 3,000 touch receptors per square centimeter—the highest density anywhere on the body.",
  "bas jaanti thin.": "They just knew.",

  // Topic 37: Microsurgeons
  "yeh surgeons severed fingers reattach kar sakte hain, thread se patli nerves reconnect kar sakte hain, aur tissue transplant kar sakte hain blood vessels connect karke jo aap mushkil se dekh sakte ho.": "These surgeons can reattach severed fingers, reconnect nerves thinner than thread, and transplant tissue by connecting blood vessels you can barely see.",
  "unhone apne nervous system ko tremors ignore karne ke liye train kiya hai, apni aankhon ko microscopic detail perceive karne ke liye, apne minds ko aath ghante procedures ke liye focus maintain karne ke liye.": "They've trained their nervous systems to ignore tremors, their eyes to perceive microscopic detail, their minds to maintain focus through eight-hour procedures.",

  // Topic 38: Human Eye
  "lekin eyes cameras se superior kyun hain - aapka brain is data ko aise process karta hai jo koi computer match nahi kar sakta.": "But here's why eyes are superior to cameras—your brain processes this data in ways no computer can match.",
  "aapki central vision - fovea - itni densely cones pack karti hai ki match karne ke liye paanch sau chhiyattar megapixels chahiye.": "Your central vision—the fovea—packs cones so densely it would take 576 megapixels to match.",
  "lekin aapki peripheral vision differently operate karti hai, detail ki jagah motion aur shapes detect karti hai.": "But your peripheral vision operates differently, detecting motion and shapes rather than detail.",

  // Topic 39: Human Echolocation
  "woh sound se dekhte hain - apni tongue click karke duniya ka mental map banate hain.": "They see with sound—creating mental maps of the world by clicking their tongues.",
  "jab echolocators click echoes process karte hain, unka visual cortex light up hota hai - same region jo sighted log images process karne ke liye use karte hain. unke brains ne visual processing center ko sound-based seeing ke liye repurpose kar liya hai.": "When echolocators process click echoes, their visual cortex lights up—the same region sighted people use to process images. Their brains have repurposed the visual processing center for sound-based seeing.",

  // Topic 40: Apollo's Computers
  "1969 mein, computers poore rooms fill karte the aur constantly crash hote the.": "In 1969, computers filled entire rooms and crashed constantly.",
  "apollo eleven ke descent ke dauran, is chhote computer ne famously error codes throw kiye - twelve oh two alarms jo landing abort kar sakte the.": "During Apollo 11's descent, this tiny computer famously threw error codes—1202 alarms that could have aborted the landing.",

  // Topic 41: Voyager's Golden Record
  "koi bhi civilization jo ise dhundhe, earth ko 1977 jaisa sunegi.": "Any civilization that finds it will hear Earth as it was in 1977.",

  // Topic 42: Gravity Assists
  "1964 mein, gary flandro naam ke graduate student ne ek rare planetary alignment discover ki.": "In 1964, a graduate student named Gary Flandro discovered a rare planetary alignment.",
  "humne liya.": "We took it.",
  "aur ab voyager human presence interstellar space tak le jaata hai - propelled not by fuel humne jalayi, but by momentum humne giants se udhaar liya.": "And now Voyager carries human presence into interstellar space—propelled not by fuel we burned, but by momentum we borrowed from giants.",
};

// Add more translations for remaining topics...
const MORE_TRANSLATIONS = {
  // Missing from Topic 1
  "paanch known planets ki movement track kar sakta tha.": "It could track the movement of five known planets.",
  "hume abhi bhi nahi pata kisne ise banaya.": "We still don't know who built it.",
  "chaand ke phases calculate kar sakta tha.": "It could calculate the phases of the moon.",
  "yahan tak ki next olympic games kab honge yeh bhi bata sakta tha.": "It could even tell when the next Olympic Games would occur.",
  "yeh solar eclipses decades pehle predict kar sakta tha.": "It could predict solar eclipses decades in advance.",

  // Missing from Topic 2
  "archaeologists aaye aur unhone kuch aisa khoja jo hamari insaani history ki samajh ko hila kar rakh diya.": "Archaeologists arrived and discovered something that shook our understanding of human history.",
  "yeh jagah stonehenge se do guna purani hai. pyramids se paanch hazaar saal purani.": "This place is twice as old as Stonehenge. Five thousand years older than the pyramids.",

  // Missing from Topic 3
  "abhi bhi perfect.": "Still perfect.",
  "woh galat the. yeh lime clasts hi raaz hain.": "They were wrong. These lime clasts are the secret.",

  // Missing from Topic 4
  "koi mortar nahi jodta inhe. koi metal tools nahi tarshe inhe—sirf stone aur bronze. phir bhi unhone aise joints banaye jo itne perfect, itne irregular, itne interlocking hain.": "No mortar holds them together. No metal tools carved them—just stone and bronze. Yet they created joints so perfect, so irregular, so interlocking.",

  // Missing from Topic 5
  "koi bhi aur iron structure ab tak rust ka dhher ban chuka hota.": "Any other iron structure would be a pile of rust by now.",
  "rust khud armor ban gaya.": "The rust itself became armor.",

  // Missing from Topic 6
  "aath dragons iske bahar gol ghoomte the, har ek ke muh mein ek bronze ball.": "Eight dragons ringed the outside, each holding a bronze ball in its mouth.",
  "neeche waiting toads baithe the, muh khule hue.": "Below them sat waiting toads with open mouths.",

  // Topic 43: JWST Deployment
  "toh engineers ne ise origami ki tarah fold hone aur earth se das lakh miles door khud unfold hone ke liye design kiya jahan koi fix nahi kar sakta tha.": "So engineers designed it to fold like origami and unfold itself a million miles from Earth where no one could fix it.",
  "ise saikdon pulleys, cables, aur release mechanisms ke through perfectly unfold hona tha.": "It had to unfold perfectly through hundreds of pulleys, cables, and release mechanisms.",
  "phir mirrors.": "Then the mirrors.",

  // Topic 44: Lunar Laser Ranging
  "yeh ordinary mirrors nahi hain - yeh retroreflectors hain jo light seedha source ki taraf bounce karte hain.": "These aren't ordinary mirrors—they're retroreflectors that bounce light straight back toward its source.",
  "light ko return hone mein kitna time lagta hai time karke, hum moon ki distance millimeter tak measure kar sakte hain.": "By timing how long light takes to return, we can measure the Moon's distance to the millimeter.",
  "ek simple mirror, human hands se doosri duniya pe place kiya gaya, fundamental physics probe karne ke liye hamare sabse sensitive instruments mein se ek ban gaya.": "A simple mirror, placed by human hands on another world, became one of our most sensitive instruments for probing fundamental physics.",
  "lekin unki science kabhi nahi hui.": "But their science never stopped.",

  // Topic 45: Honeycomb Geometry
  "jab aapko ek flat surface ko identical shapes se cover karna ho bina gaps ke, aapke paas sirf teen options hain: triangles, squares, ya hexagons.": "When you need to cover a flat surface with identical shapes without gaps, you have only three options: triangles, squares, or hexagons.",
  "36 bc mein, ek roman scholar marcus varro ne propose kiya ki hexagons sabse efficient shape hai.": "In 36 BC, a Roman scholar named Marcus Varro proposed that hexagons were the most efficient shape.",
  "phir 1999 mein, mathematician thomas hales ne finally prove kiya jo bees pehle se jaanti thi. hexagons sabse kam perimeter use karte hain given area enclose karne mein.": "Then in 1999, mathematician Thomas Hales finally proved what bees already knew. Hexagons use the least perimeter to enclose a given area.",

  // Topic 50: Banach-Tarski continued
  "same size.": "Same size.",
  "jab tum infinite points ko certain ways mein divide karte ho, volume ke rules completely break ho jaate hain.": "When you divide infinite points in certain ways, the rules of volume completely break down.",
  "bas bana nahi sakte.": "We just can't build them.",

  // Topic 51: Gabriel's Horn continued
  "lagbhag 3.": "About 3.",
  "14 cubic units.": "14 cubic units.",
  "toh tum isse completely fill kar sakte ho, par kabhi paint nahi kar sakte.": "So you can completely fill it, but never paint it.",
  "jaise horn infinity tak jaata hai, itna patla ho jaata hai ki har naya section volume mein almost kuch nahi add karta par surface area badhta rehta hai.": "As the horn goes to infinity, it gets so thin that each new section adds almost nothing to volume but keeps adding to surface area.",

  // Topic 52: Monty Hall continued
  "host—jo jaanta hai kya kahan hai—door three kholta hai, goat dikhata hai.": "The host—who knows what's where—opens door three, revealing a goat.",
  "50-50 chance, right?": "50-50 chance, right?",
  "agar switch karo, 66% time jeeto.": "If you switch, you win 66% of the time.",
  "agar raho, sirf 33%.": "If you stay, only 33%.",
  "jab ye puzzle 1990 mein parade magazine mein aaya, almost hazaar phds ne likha ki ye galat hai.": "When this puzzle appeared in Parade magazine in 1990, nearly a thousand PhDs wrote in saying it was wrong.",
  "switch kyun kaam karta hai: jab tumne pehli baar choose kiya, 1-in-3 chance tha sahi hone ka. matlab 2-in-3 chance hai car dusre doors mein hai.": "Why switching works: when you first chose, there was a 1-in-3 chance of being right. That means a 2-in-3 chance the car is behind the other doors.",
  "jab host ek goat eliminate karta hai, wo pura 66% probability remaining door pe concentrate ho jaata hai.": "When the host eliminates a goat, that entire 66% probability concentrates on the remaining door.",

  // Topic 53: Tardigrades
  "2007 mein scientists ne tardigrades ko space bheja.": "In 2007, scientists sent tardigrades to space.",
  "direct vacuum, cosmic radiation, aur absolute zero ke paas temperature.": "Direct vacuum, cosmic radiation, and temperatures near absolute zero.",
  "ye mount everest pe mile, ocean bottom pe, antarctic ice mein, aur haan, tumhari body pe bhi.": "They've been found on Mount Everest, at the ocean bottom, in Antarctic ice, and yes, on your body too.",
  "6,000 atmospheres pressure survive kiya. -272°c se 150°c temperature.": "They've survived 6,000 atmospheres of pressure. Temperatures from -272°C to 150°C.",

  // Topic 54: Immortal Jellyfish
  "turritopsis dohrnii ek jellyfish hai tumhari pinky nail ke size ki.": "Turritopsis dohrnii is a jellyfish the size of your pinky nail.",
  "jab ye jellyfish old, stressed, ya sick hota hai, ye kuch impossible karta hai: ye apna life cycle reverse kar deta hai.": "When this jellyfish gets old, stressed, or sick, it does something impossible: it reverses its life cycle.",
  "solved.": "Solved.",
  "hum 1996 se ye jaante hain.": "We've known this since 1996.",

  // Topic 55: Octopus Intelligence
  "octopuses ke paas teen hearts hain, blue blood hai, aur nine brains hain.": "Octopuses have three hearts, blue blood, and nine brains.",
  "ek central brain, plus har eight arms mein ek mini-brain jo independently act kar sakta hai.": "One central brain, plus a mini-brain in each of eight arms that can act independently.",
  "hamara last common ancestor 750 million saal pehle ek flatworm tha.": "Our last common ancestor 750 million years ago was a flatworm.",
  "aur sirf 1-2 saal jeete hain.": "And they only live 1-2 years.",
  "evolution ne ek aisi mind banaayi jo hum barely recognize karte hain—aur use almost no time diya.": "Evolution created a mind we barely recognize—and gave it almost no time.",

  // Topic 56: Gavrilo Princip
  "28 june, 1914.": "June 28, 1914.",
  "wo aage badha. do shots.": "He stepped forward. Two shots.",
  "phir britain.": "Then Britain.",
  "phir sab. world war i mein 20 million log mare. directly world war ii lead hua, jismein 70 million aur mare.": "Then everyone. 20 million died in World War I. It led directly to World War II, where 70 million more died.",

  // Topic 57: Norman Borlaug
  "1970 mein, norman borlaug ne nobel peace prize jeeta.": "In 1970, Norman Borlaug won the Nobel Peace Prize.",
  "1960s mein, experts ne predict kiya mass famines india aur pakistan mein 1980s tak hundreds of millions ko maar dengi.": "In the 1960s, experts predicted mass famines in India and Pakistan would kill hundreds of millions by the 1980s.",
  "usne high-yield, disease-resistant wheat varieties develop kiye mexico mein, phir india aur pakistan ko convince kiya adopt karne ke liye.": "He developed high-yield, disease-resistant wheat varieties in Mexico, then convinced India and Pakistan to adopt them.",
  "pakistan ki triple.": "Pakistan's tripled.",
  "wo 95 saal ka hua, fields mein kaam karte raha.": "He lived to 95, still working in the fields.",
  "ek scientist.": "One scientist.",
  "ek seed.": "One seed.",

  // Topic 58: Library of Alexandria
  "library of alexandria—humanity ka sabse bada ancient knowledge collection—ek dramatic fire mein destroy nahi hua.": "The Library of Alexandria—humanity's greatest collection of ancient knowledge—was not destroyed in one dramatic fire.",
  "wo myth hai.": "That's a myth.",
  "sach zyada sad hai. 300 bce ke around founded, shayad 400,000 scrolls the.": "The truth is sadder. Founded around 300 BCE, it may have held 400,000 scrolls.",
  "caesar ki fire ne 48 bce mein damage kiya.": "Caesar's fire damaged it in 48 BCE.",
  "christian mobs ne 391 ce mein temple destroy kiya jismein wo tha.": "Christian mobs destroyed the temple housing it in 391 CE.",
  "ye scarier truth hai: hum knowledge dramatic disasters mein nahi khote.": "Here's the scarier truth: we don't lose knowledge in dramatic disasters.",
  "tab khote hain jab societies care karna band kar dein.": "We lose it when societies stop caring.",

  // Topic 59: Double-Slit
  "par tumhe interference pattern milta hai—stripes, jaise waves overlap ho rahi hon.": "But you get an interference pattern—stripes, as if waves were overlapping.",
  "har single electron somehow dono slits se simultaneously jaata hai aur khud se interfere karta hai.": "Each single electron somehow goes through both slits simultaneously and interferes with itself.",
  "knowing ka act—information existing ka act—reality ko change karta hai.": "The act of knowing—the act of information existing—changes reality.",
  "ye quantum mechanics ka foundation hai, 1927 se hazaaron baar replicate hua.": "This is the foundation of quantum mechanics, replicated thousands of times since 1927.",

  // Topic 60: Time Dilation
  "gps satellites 20,000 kilometers altitude pe orbit karte hain 14,000 km/hour pe.": "GPS satellites orbit at 20,000 kilometers altitude at 14,000 km/hour.",
  "us speed pe, unke clocks 7 microseconds slow tick karte hain per day—special relativity.": "At that speed, their clocks tick 7 microseconds slower per day—special relativity.",
  "par wo weaker gravity mein bhi hain, toh unke clocks 45 microseconds fast tick karte hain—general relativity.": "But they're also in weaker gravity, so their clocks tick 45 microseconds faster per day—general relativity.",
  "net effect: gps clocks 38 microseconds daily gain karte hain.": "Net effect: GPS clocks gain 38 microseconds daily.",
  "chota lagta hai.": "Sounds tiny.",
  "par light 38 microseconds mein 11 kilometers travel karti hai.": "But light travels 11 kilometers in 38 microseconds.",
  "correction ke bina, tumhara gps rozaana 10 kilometers drift karta.": "Without correction, your GPS would drift 10 kilometers daily.",

  // Topic 61: Quantum Entanglement
  "ek earth pe, ek 100 light-years door.": "One on Earth, one 100 light-years away.",
  "2022 mein, nobel prize un scientists ko mila jinhone ye beyond doubt prove kiya.": "In 2022, the Nobel Prize went to scientists who proved this beyond doubt.",

  // Topic 62: Microwave Oven
  "1945 mein, percy spencer magnetrons pe kaam kar raha tha—devices jo radar systems ke liye microwaves generate karti hain.": "In 1945, Percy Spencer was working on magnetrons—devices that generate microwaves for radar systems.",
  "wo ek active radar set ke paas khada tha jab usne kuch strange notice kiya: pocket mein chocolate bar pighal gayi thi.": "He was standing next to an active radar set when he noticed something strange: the chocolate bar in his pocket had melted.",
  "do saal mein, raytheon ne pehla microwave oven patent file kar diya.": "Within two years, Raytheon filed the first microwave oven patent.",
  "pehla commercial model chhe feet tall tha aur 4.5 lakh rs cost karta tha.": "The first commercial model was six feet tall and cost ₹4.5 lakh.",
  "spencer ko kabhi significant bonus nahi mila—sirf standard 180 rs patent award. wo retirement tak raytheon mein senior engineer raha.": "Spencer never received a significant bonus—just the standard ₹180 patent award. He remained a senior engineer at Raytheon until retirement.",
  "par socho: radar technology, jo enemy aircraft detect karne ke liye bani thi, ab tumhara leftover pizza reheat karti hai.": "But think about it: radar technology, built to detect enemy aircraft, now reheats your leftover pizza.",

  // Topic 63: Penicillin
  "september 1928.": "September 1928.",
  "alexander fleming vacation se lauta aur dekha lab bench contaminated petri dishes se bhari thi.": "Alexander Fleming returned from vacation to find his lab bench covered in contaminated petri dishes.",
  "d-day 1944 tak, itni penicillin thi ki har wounded allied soldier treat ho sake.": "By D-Day 1944, there was enough penicillin to treat every wounded Allied soldier.",
  "estimate hai antibiotics ne 200 million se zyada lives bachayi hain. shayad zyada.": "Estimates suggest antibiotics have saved over 200 million lives. Probably more.",

  // Topic 64: Vulcanized Rubber
  "1839 mein, charles goodyear rubber ke obsessed tha.": "In 1839, Charles Goodyear was obsessed with rubber.",
  "car industry.": "The car industry.",
  "sab ek aise process pe built hain jo ek bankrupt aadmi ne discover kiya jo haar nahi mana aur stove pe lucky ho gaya.": "All built on a process discovered by a bankrupt man who refused to give up and got lucky at a stove.",

  // Topic 65: McGurk Effect
  "'ba' nahi.": "Not 'ba.'",
  "ye mcgurk effect hai, 1976 mein discover hua.": "This is the McGurk effect, discovered in 1976.",
  "tumhara brain visual aur auditory information combine karta hai speech determine karne ke liye.": "Your brain combines visual and auditory information to determine speech.",

  // Topic 66: Invisible Gorilla
  "focus karo.": "Focus hard.",
  "par unme se aadhe miss karte hain gorilla suit mein person ko jo game ke beech se walk karta hai, ruk ke seena peetta hai, phir chala jaata hai.": "But half of them miss the person in a gorilla suit who walks through the game, stops to beat their chest, then walks off.",
  "ye inattentional blindness hai—psychologists daniel simons aur christopher chabris ne 1999 mein discover kiya.": "This is inattentional blindness—discovered by psychologists Daniel Simons and Christopher Chabris in 1999.",
  "jab tum attention ek task pe focus karte ho, tumhara brain literally irrelevant information filter kar deta hai—gorilla bhi.": "When you focus attention on one task, your brain literally filters out irrelevant information—even a gorilla.",
  "drivers ne motorcycles hit ki hain jinhe dekh rahe the.": "Drivers have hit motorcycles they were looking at.",

  // Topic 67: Doorway Effect
  "2011 mein, researchers ne logon ko virtual environment mein doorways se objects carry karwaye.": "In 2011, researchers had people carry objects through doorways in a virtual environment.",
  "sirf doorway se guzarne se forgetting 3 guna badh gayi compared to same distance ek room mein walk karne se. kyun?": "Just passing through a doorway tripled forgetting compared to walking the same distance in one room. Why?",
  "tumhara brain sab kuch active memory mein nahi rakh sakta, toh boundaries use karta hai—doors, locations, conversation mein topic changes bhi—triggers ki tarah archive aur clear karne ke liye.": "Your brain can't keep everything in active memory, so it uses boundaries—doors, locations, even topic changes in conversation—as triggers to archive and clear.",
  "zor se bolo.": "Say it out loud.",

  // Topic 68: Atoms Empty Space
  "tumhare body ka har atom 99.": "Every atom in your body is 99.",
  "9999% khaali hai.": "9999% empty.",
  "1911 mein, rutherford ne gold foil par particles maare.": "In 1911, Rutherford fired particles at gold foil.",
  "electrons?": "Electrons?",
  "bohr ne isse aur refine kiya, dikhaya ki electrons specific energy levels mein orbit karte hain, jaise planets sun ke around.": "Bohr refined this further, showing electrons orbit in specific energy levels, like planets around the sun.",
  "par yahan crazy part aata hai. agar tum earth ke har insaan ke har atom se empty space nikal do, poore 8 billion log ek sugar cube mein fit ho jayenge.": "But here's the crazy part. If you removed all the empty space from every atom in every human on Earth, all 8 billion people would fit in a sugar cube.",

  // Topic 69: Mendeleev
  "dmitri mendeleev 63 known elements arrange kar raha tha jab usne kuch aisa dekha jo kisi ne nahi dekha tha—patterns.": "Dmitri Mendeleev was arranging 63 known elements when he noticed something nobody else had—patterns.",
  "eka-aluminum ke liye, usne predict kiya atomic weight 68, density 5.": "For eka-aluminum, he predicted atomic weight 68, density 5.",
  "9, low melting point.": "9, low melting point.",
  "1875 mein, gallium discover hua. atomic weight: 69. 7.": "In 1875, gallium was discovered. Atomic weight: 69.7.",
  "density: 5.": "Density: 5.",
  "91.": "91.",
  "usne predict kiya eka-silicon ka atomic weight 72 hoga, density 5. 5, white oxide banayega. 1886 mein, germanium mila.": "He predicted eka-silicon would have atomic weight of 72, density of 5.5, form a white oxide. In 1886, germanium was found.",
  "weight: 72.": "Weight: 72.",
  "6.": "6.",
  "density: 5. 47.": "Density: 5.47.",
  "usne discover kiya ki nature itne perfect patterns follow karti hai ki future predictable ban jaata hai.": "He discovered that nature follows such perfect patterns that the future becomes predictable.",

  // More missing translations
  "archaeologists aaye aur unhone kuch aisa khoja jo hamari insaani history ki samajh ko hila kar rakh diya.": "Archaeologists arrived and discovered something that shook our understanding of human history.",
  "koi mortar nahi jodta inhe. koi metal tools nahi tarshe inhe—sirf stone aur bronze.": "No mortar holds them together. No metal tools carved them—just stone and bronze.",
  "koi bhi aur iron structure ab tak rust ka dhher ban chuka hota.": "Any other iron structure would be a pile of rust by now.",
  "aath dragons iske bahar gol ghoomte the, har ek ke muh mein ek bronze ball. neeche waiting toads.": "Eight dragons ringed the outside, each holding a bronze ball. Below them, waiting toads.",
  "tees log mare. toh galat kya hua?": "Thirty people died. So what went wrong?",
  "truly shocking baat? nasa ke paas protocols the exactly is tarah ki errors rokne ke liye.": "The truly shocking part? NASA had protocols to prevent exactly this type of error.",
  "captain bob pearson ne kuch gadbad notice ki: dono engines band.": "Captain Bob Pearson noticed something wrong: both engines out.",
  "pearson ke paas decide karne ke liye seconds the.": "Pearson had seconds to decide.",
  "nose runway par ghista raha, plane slow karta raha. aircraft finally ruk gaya, nose down, tail up.": "The nose scraped along the runway, slowing the plane. The aircraft finally stopped, nose down, tail up.",
  "ek baal se bhi chhota.": "Smaller than a human hair.",

  // More Topic continuations
  "usne popcorn try kiya.": "He tried popcorn.",
  "perfect pop.": "Perfect pop.",
  "wo mold—penicillium notatum—bacteria maar raha tha.": "That mold—Penicillium notatum—was killing the bacteria.",
  "problem yeh thi: natural rubber garmi mein pighal jata tha aur thandi mein crack ho jata tha.": "The problem was: natural rubber melted in heat and cracked in cold.",
  "usne galti se sulfur mixed rubber stove par gira diya.": "He accidentally dropped sulfur-mixed rubber on a hot stove.",
  "ye jalti mein sticky nahi hui. thandi mein crack nahi hui.": "It didn't get sticky in heat. It didn't crack in cold.",
  "ye stable thi.": "It was stable.",
  "goodyear ne gareebi mein apne discovery ke saath patent fight karte hue maut payi.": "Goodyear died in poverty, fighting patent battles over his discovery.",
  "aaj rubber industry $200 billion ki hai.": "Today the rubber industry is worth $200 billion.",

  // Topic 70: Body held together by theft
  "carbon share karta hai.": "Carbon shares.",
  "char electrons dene ya lene ke saath, wo covalent bonds banata hai—neighbors ke saath electrons share karta hai, chori ki jagah haath pakadta hai.": "With four electrons to give or take, it forms covalent bonds—sharing electrons with neighbors, holding hands instead of stealing.",

  // Topic 71: pH
  "ab yahan terrifying part aata hai. tumhara blood 7.": "Now here's the terrifying part. Your blood is 7.",
  "35 se 7. 45 ke beech rehna chahiye.": "35 to 7.45.",
  "wo sirf 0. 1 ka range hai normal function ke liye.": "That's a range of just 0.1 for normal function.",
  "7.": "7.",
  "0 par giro—acidosis.": "Drop to 7.0—acidosis.",
  "tumhare enzymes denature ho jaate hain, cells kaam karna band kar dete hain, tum mar jaate ho. 7.": "Your enzymes denature, cells stop working, you die. 7.",
  "8 par jaao—alkalosis.": "Rise to 7.8—alkalosis.",
  "tumhare body mein buffer systems har second kaam kar rahe hain ye impossible balance maintain karne ke liye.": "Buffer systems in your body work every second to maintain this impossible balance.",

  // Topic 72: Brain is a Battery
  "par tumhara brain?": "But your brain?",
  "jab neurons saath fire karte hain, wo ek chhoti led power karne layak electricity generate kar sakte hain.": "When neurons fire together, they can generate enough electricity to power a small LED.",

  // Topic 73: Carbon
  "branches.": "Branches.",
  "rings.": "Rings.",
  "double bonds.": "Double bonds.",
  "triple bonds.": "Triple bonds.",

  // Topic 74: Plastic
  "koi bacteria plastic khane ke liye evolve nahi hua kyunki plastic 1907 tak exist hi nahi karta tha.": "No bacteria evolved to eat plastic because plastic didn't exist until 1907.",
  "plastic bag ko degrade hone mein 500 se 1000 saal lagte hain—aur wo disappear nahi hota, wo microplastics mein break hota hai.": "A plastic bag takes 500 to 1000 years to degrade—and it doesn't disappear, it breaks into microplastics.",
  "humne 1950s se 8 billion tons plastic produce kiya hai.": "We've produced 8 billion tons of plastic since the 1950s.",
  "landfills mein.": "In landfills.",
  "oceans mein.": "In oceans.",
  "wo chemistry jo plastic ko break hone se resistant banati hai use jaane se bhi resistant banati hai.": "The chemistry that makes plastic resistant to breaking down also makes it resistant to going away.",

  // Topic 75: Radioactive bananas
  "potassium tumhare nerves aur muscles ke liye essential hai. par sab potassium ka lagbhag 0.": "Potassium is essential for your nerves and muscles. But about 0.",
  "012% potassium-40 hai, ek radioactive isotope.": "012% of all potassium is potassium-40, a radioactive isotope.",
  "ek banana lagbhag 0.": "One banana equals about 0.",
  "1 microsieverts radiation exposure ke equal hai.": "1 microsieverts of radiation exposure.",
  "sau bananas khao aur tumne chest x-ray ke equal kar liya. tumhare body mein lagbhag 140 grams potassium hai.": "Eat a hundred bananas and you've equaled a chest X-ray. Your body contains about 140 grams of potassium.",
  "kisi ke saath so jao aur tum dono ek doosre ko irradiate kar rahe ho—lagbhag 0.": "Sleep next to someone and you're both irradiating each other—about 0.",
  "05 microsieverts har raat.": "05 microsieverts per night.",
  "par yahan beautiful part hai.": "But here's the beautiful part.",
  "half-life.": "Half-life.",
  "potassium-40 ki half-life 1.": "Potassium-40 has a half-life of 1.",
  "25 billion years hai.": "25 billion years.",
  "jab earth bani tab jo potassium-40 exist karta tha uska aadha abhi bhi yahan hai.": "Half the potassium-40 that existed when Earth formed is still here.",

  // Topic 76: Car chemistry
  "unburned fuel water aur co2 ban jaata hai.": "Unburned fuel becomes water and CO2.",

  // More general phrases
  "haan.": "Yes.",
  "nahi.": "No.",
  "kyun?": "Why?",
  "kaise?": "How?",
  "kab?": "When?",
  "kahan?": "Where?",
  "bilkul.": "Exactly.",
  "sahi.": "Correct.",
  "galat.": "Wrong.",
  "shayad.": "Perhaps.",
  "definitely.": "Definitely.",
  "impossible.": "Impossible.",
  "possible.": "Possible.",
  "interesting.": "Interesting.",
  "amazing.": "Amazing.",
  "incredible.": "Incredible.",
  "unbelievable.": "Unbelievable.",
  "fascinating.": "Fascinating.",

  // More topic-specific translations needed
  "same wahi result.": "Same result.",
  "do baar.": "Twice.",
  "teen baar.": "Three times.",
  "hazaaron baar.": "Thousands of times.",

  // Topic 70-102 additional translations...
  // Topic 43-102 translations
  "engineers ne ek aur problem face ki: sunshield.": "Engineers faced another problem: the sunshield.",
  "agar ek bhi step fail hota, telescope bilkul useless hoti.": "If a single step failed, the telescope would be completely useless.",
  "344 single points of failure the.": "There were 344 single points of failure.",

  // Topic 50: Banach-Tarski
  "1924 mein do mathematicians ne kuch aisa prove kiya jo impossible lagta hai.": "In 1924, two mathematicians proved something that seems impossible.",
  "ek solid ball lo.": "Take a solid ball.",
  "usse exactly 5 pieces mein kaato.": "Cut it into exactly 5 pieces.",
  "grind nahi, stretch nahi—sirf cut.": "No grinding, no stretching—just cutting.",
  "phir un pieces ko rotate karo aur reassemble karo.": "Then rotate those pieces and reassemble them.",
  "tumhe do identical balls milti hain.": "You get two identical balls.",
  "same size. same density. same everything.": "Same size. Same density. Same everything.",
  "yeh math hai, magic nahi.": "This is math, not magic.",
  "catch? pieces infinitely complex hain.": "The catch? The pieces are infinitely complex.",
  "unhe physically banana impossible hai.": "Making them physically is impossible.",
  "lekin mathematically? yeh 100% proven hai.": "But mathematically? This is 100% proven.",

  // Topic 51: Gabriel's Horn
  "imagine karo ek trumpet jo forever jaaye.": "Imagine a trumpet that goes on forever.",
  "infinity tak stretch ho, patli hoti jaaye par khatam na ho.": "It stretches to infinity, getting thinner but never ending.",
  "ye hai gabriel's horn—ek shape jo 1643 mein mathematicians ne banaya aur jo tumhara dimaag ghuma dega.": "This is Gabriel's Horn—a shape mathematicians created in 1643 that will blow your mind.",
  "iski surface area infinite hai.": "Its surface area is infinite.",
  "lekin iski volume finite hai.": "But its volume is finite.",
  "tum ise paint se bhar sakte ho.": "You can fill it with paint.",
  "lekin us paint se iski surface paint nahi kar sakte.": "But you can't paint its surface with that paint.",

  // Topic 52: Monty Hall Problem
  "teen doors.": "Three doors.",
  "ek ke peeche car.": "Behind one, a car.",
  "do ke peeche goats.": "Behind two, goats.",
  "galat.": "Wrong.",
  "switch karo aur tumhari winning chances double ho jaate hain.": "Switch and your winning chances double.",
  "66% vs 33%.": "66% vs 33%.",
  "thousands of phds got this wrong.": "Thousands of PhDs got this wrong.",
  "marilyn vos savant ko hate mail mila jab usne sahi jawab diya.": "Marilyn vos Savant received hate mail when she gave the correct answer.",

  // Topic 57: Norman Borlaug
  "ek aadmi ne billion logon ko bhukhmari se bachaya.": "One man saved a billion people from starvation.",
  "aur shayad aapne uska naam kabhi nahi suna.": "And you've probably never heard his name.",
  "norman borlaug.": "Norman Borlaug.",
  "1960s mein, experts predict kar rahe the ki hundreds of millions bhukh se marenge.": "In the 1960s, experts predicted hundreds of millions would die of hunger.",
  "borlaug ne unhe galat saabit kiya.": "Borlaug proved them wrong.",
  "usne disease-resistant, high-yield wheat varieties develop kiye.": "He developed disease-resistant, high-yield wheat varieties.",
  "green revolution shuru hui.": "The Green Revolution began.",

  // Topic 58: Library of Alexandria
  "duniya ka sabse bada library.": "The world's greatest library.",
  "aag mein nahi jala.": "Didn't burn in a fire.",
  "slowly, neglect se mara.": "Died slowly, from neglect.",
  "alexandria mein scholars ne centuries tak knowledge collect kiya.": "Scholars in Alexandria collected knowledge for centuries.",
  "700,000 scrolls.": "700,000 scrolls.",
  "har ship jo port mein aati, uske scrolls copy hote the.": "Every ship that entered port had its scrolls copied.",

  // Topic 60: Time Dilation
  "time sabke liye same speed se nahi chalta.": "Time doesn't move at the same speed for everyone.",
  "ye science fiction nahi hai.": "This isn't science fiction.",
  "ye proven physics hai.": "This is proven physics.",
  "gps satellites mein clocks literally different speed se chalti hain ground ke comparison mein.": "Clocks in GPS satellites literally run at different speeds compared to the ground.",
  "astronauts jo space station par months rehte hain, technically future mein travel karte hain.": "Astronauts who spend months on the space station technically travel to the future.",
  "sirf milliseconds, but measurable.": "Only milliseconds, but measurable.",

  // Topic 68: Atoms 99.9999% Empty
  "agar ek atom ko stadium ki size tak blow up karo.": "If you blew up an atom to the size of a stadium.",
  "nucleus ek matar hogi center mein.": "The nucleus would be a pea in the center.",
  "electrons? parking lot mein kahin.": "Electrons? Somewhere in the parking lot.",
  "beech mein? nothing. literally nothing.": "In between? Nothing. Literally nothing.",
  "tum mostly empty space ho.": "You are mostly empty space.",
  "jab tum chair par baithe ho, tum actually nahi baithe.": "When you sit on a chair, you're not actually sitting.",
  "electromagnetic forces tumhe repel kar rahi hain.": "Electromagnetic forces are repelling you.",

  // Topic 69: Mendeleev's Predictions
  "1869 mein, ek russian chemist ne elements ko cards par likha.": "In 1869, a Russian chemist wrote elements on cards.",
  "unhe arrange kiya. aur gaps chhode.": "Arranged them. And left gaps.",
  "un gaps mein, usne elements predict kiye jo exist nahi karte the.": "In those gaps, he predicted elements that didn't exist.",
  "eka-aluminum. eka-boron. eka-silicon.": "Eka-aluminum. Eka-boron. Eka-silicon.",
  "15 saal mein, teeno discover hue.": "Within 15 years, all three were discovered.",
  "exactly wahi properties jinki usne predict ki thi.": "With exactly the properties he predicted.",
  "mendeleev ne future dekh liya tha.": "Mendeleev had seen the future.",

  // Topic 71: pH That Keeps You Alive
  "tumhara blood ph exactly 7.35 se 7.45 ke beech rehna chahiye.": "Your blood pH must stay exactly between 7.35 and 7.45.",
  "itna strict kyun? enzymes.": "Why so strict? Enzymes.",
  "ye molecular machines hain jo tumhari body chalati hain.": "These are molecular machines that run your body.",
  "wrong ph par, they stop working.": "At the wrong pH, they stop working.",
  "tum minutes mein mar sakte ho.": "You can die within minutes.",
  "tumhari body constantly is balance ke liye fight kar rahi hai.": "Your body is constantly fighting to maintain this balance.",

  // Topic 75: Bananas Are Radioactive
  "tum radioactive ho.": "You are radioactive.",
  "actually, har living thing radioactive hai.": "Actually, every living thing is radioactive.",
  "bananas mein potassium-40 hota hai—ek naturally radioactive isotope.": "Bananas contain potassium-40—a naturally radioactive isotope.",
  "tumhare andar bhi same potassium hai.": "You have the same potassium inside you.",
  "har second, tumhari body mein 4,400 atoms decay hote hain.": "Every second, 4,400 atoms decay inside your body.",
  "par relax—tum safe ho.": "But relax—you're safe.",
  "tumhe 10 million bananas ek saath khane padenge harmful dose ke liye.": "You'd need to eat 10 million bananas at once for a harmful dose.",

  // Topic 92 and higher
  "agar ye misalign hote.": "If these misaligned.",
  "toh kya hota?": "What would happen?",
  "puri machine useless ho jaati.": "The entire machine would become useless.",

  // Common phrases that appear across multiple topics
  "yeh fascinating hai.": "This is fascinating.",
  "par story yahan khatam nahi hoti.": "But the story doesn't end here.",
  "aur yeh sirf shuruwaat hai.": "And this is just the beginning.",
  "sochiye iske baare mein.": "Think about that.",
  "ab samjhe?": "Now you understand?",
  "yahi hai asli raaz.": "This is the real secret.",
  "koi nahi jaanta.": "Nobody knows.",
  "mystery abhi bhi unsolved hai.": "The mystery is still unsolved.",

  // ========== REMAINING 82 TRANSLATIONS ==========

  // Topic 8: Mars Climate Orbiter (remaining)
  "yeh lesson seekhne mein 2943 crore rs lage: assumptions missions khatam karti hain. engineering mein, tum sab verify karo. ya kuch nahi.": "It cost ₹2,943 crore to learn this lesson: assumptions end missions. In engineering, you verify everything. Or nothing.",

  // Topic 13: Ariane 5 Explosion
  "4500 crore rs dollars.": "₹4,500 crore.",

  // Topic 16: John Harrison - Solved the Longitude Problem
  "parliament ne 9000.0 kg offer kiye - aaj ke millions - jo bhi ise solve kare uske liye.": "Parliament offered a prize worth millions in today's money—to whoever could solve it.",

  // Topic 20: The Great Gauge War
  "sirf 36 hours mein, work crews ne 18.4 hazaar km track teen inch shift kar diya.": "In just 36 hours, work crews shifted 18,400 km of track by three inches.",

  // Topic 67: The Doorway Effect
  "sirf doorway se guzarne se forgetting 3 guna badh gayi compared to same distance ek room mein walk karne se. kyun?": "Just passing through a doorway tripled forgetting compared to walking the same distance in one room. Why?",

  // Topic 71: The pH That Keeps You Alive
  "0 par giro—acidosis.": "Drop to 7.0—acidosis.",
  "8 par jaao—alkalosis.": "Rise to 7.8—alkalosis.",

  // Topic 72: Your Brain is a Battery
  "jab neurons saath fire karte hain, wo ek chhoti led power karne layak electricity generate kar sakte hain. jo device par tum ye dekh rahe ho aur jo brain se tum ye dekh rahe ho dono same fundamental principle par chalte hain: chemical reactions through charged particles ka controlled movement.": "When neurons fire together, they can generate enough electricity to power a small LED. The device you're watching this on and the brain you're watching it with both operate on the same fundamental principle: controlled movement of charged particles through chemical reactions.",

  // Topic 75: Bananas Are Radioactive
  "012% potassium-40 hai, ek radioactive isotope. bananas potassium se rich hain, toh wo measurably radioactive hain.": "0.012% is potassium-40, a radioactive isotope. Bananas are rich in potassium, so they're measurably radioactive.",
  "05 microsieverts har raat. par yahan beautiful part hai.": "0.05 microsieverts every night. But here's the beautiful part.",
  "25 billion years hai. jab earth bani tab jo potassium-40 exist karta tha uska aadha abhi bhi yahan hai.": "1.25 billion years. Half the potassium-40 that existed when Earth formed is still here.",

  // Topic 76: Your Car Does Chemistry
  "enzymes ke bina, ek meal digest karne mein lagbhag 50 saal lagte.": "Without enzymes, digesting a single meal would take about 50 years.",

  // Topic 77: The Fourth State of Matter
  "plasma.": "Plasma.",

  // Topic 78: The 300-Year-Old Law
  "wo tumhe pakadti hai aur force karti hai car ke saath rukne ke liye instead of continuing through it. iske bina, tumhara 70-kilogram body ek 70-kilogram projectile ban jaata hai.": "It catches you and forces you to stop with the car instead of continuing through it. Without it, your 70-kilogram body becomes a 70-kilogram projectile.",

  // Topic 79: The Sound That Found the Big Bang
  "clock ko backwards chalaao aur sab kuch ek jagah tha.": "Run the clock backwards and everything was in one place.",
  "the big bang. starlight mein doppler shift ne humein bataya ki universe ki ek age hai, ek beginning hai, ek birth moment 13.": "The Big Bang. Doppler shift in starlight told us the universe has an age, a beginning, a birth moment 13.",
  "8 billion saal pehle. wo annoying pitch change jab ambulance pass hoti hai wohi physics hai jo reveal karti hai ki hum ek expanding universe mein rehte hain jo nothing se start hua.": "8 billion years ago. That annoying pitch change when an ambulance passes is the same physics that reveals we live in an expanding universe that started from nothing.",

  // Topic 80: You Can Only See 0.0035% of Reality
  "tum sirf 0.": "You can only see 0.",
  "0035% light dekh sakte ho jo exist karti hai.": "0035% of the light that exists.",
  "visible light—wo chhoti si slice jo tum dekh sakte ho—middle mein hai, wavelengths 380 aur 700 nanometers ke beech.": "Visible light—that tiny slice you can see—sits in the middle, wavelengths between 380 and 700 nanometers.",
  "bas itna.": "That's it.",
  "bees isse dekhte hain.": "Bees can see it.",

  // Topic 81: A Golf Ball With the Power of a City
  "uranium-235 unstable hai.": "Uranium-235 is unstable.",
  "ek uranium fuel pellet pencil eraser jitni ek ton coal, 567 liter oil, ya 17,000 cubic feet natural gas jitni energy produce karti hai. humne atom crack kar ke universe mein sabse concentrated energy source dhoondha.": "A single uranium fuel pellet the size of a pencil eraser produces as much energy as one ton of coal, 567 liters of oil, or 17,000 cubic feet of natural gas. By cracking the atom, we found the most concentrated energy source in the universe.",

  // Topic 82: Einstein's REAL Nobel Prize Discovery
  "par hamesha nahi.": "But not always.",
  "par aisa nahi hua.": "But that didn't happen.",

  // Topic 85: Light Marching in Perfect Lockstep
  "same phase.": "Same phase.",
  "same direction.": "Same direction.",
  "chaos se order.": "Chaos to order.",

  // Topic 86: Cell Division
  "abhi is second, tumhara body 3.": "Right this second, your body is making 3.",
  "8 million naye cells bana raha hai.": "8 million new cells.",
  "answer hai mitosis - aur ye breathtaking hai. har cell ke andar, 2 meter dna itna tightly coiled hai ki ek baal ki width ke hazarve hisse mein fit ho jata hai.": "The answer is mitosis—and it's breathtaking. Inside every cell, 2 meters of DNA is coiled so tightly it fits in a space a thousandth the width of a hair.",
  "error rate?": "Error rate?",

  // Topic 88: The Nervous System
  "tumhare brain mein signals 432 km per hour se travel karte hain.": "Signals in your brain travel at 432 km per hour.",
  "tumhare paas 86 billion neurons hain.": "You have 86 billion neurons.",
  "har ek 10,000 doosron se connect hota hai.": "Each one connects to 10,000 others.",
  "ye ek electrical spike create karta hai jo 432 km/h pe neuron ke neeche rocket karta hai.": "This creates an electrical spike that rockets down the neuron at 432 km/h.",
  "known universe ki sabse complex object 20 watts pe chalti hai.": "The most complex object in the known universe runs on 20 watts.",

  // Topic 89: Hormones
  "aur abhi ye invisible chemicals tumhare har emotion ko control kar rahe hain.": "And right now, these invisible chemicals are controlling your every emotion.",
  "wo har jagah travel karte hain, lekin sirf specific cells unhe receive kar sakti hain - jaise ek key sirf ek lock mein fit hoti hai.": "They travel everywhere, but only specific cells can receive them—like a key that only fits one lock.",

  // Topic 90: Evolution Evidence
  "wo ear muscles?": "Those ear muscles?",
  "tum 3.": "You are 3.",
  "8 billion years ki trial aur error ka walking record ho.": "8 billion years of trial and error, walking.",

  // Topic 91: CRISPR
  "gene copy karo.": "Copy the gene.",
  "phir cas9 enzyme exactly usi spot pe dna cut karta hai. cell cut repair karne ki koshish karta hai, aur scientists jo changes chahiye wo slip kar dete hain.": "Then the Cas9 enzyme cuts the DNA at exactly that spot. The cell tries to repair the cut, and scientists slip in whatever changes they want.",
  "2018 mein, china mein ek scientist ne human embryos edit kiye jo hiv resistant hon.": "In 2018, a scientist in China edited human embryos to be HIV resistant.",
  "same tool jo genetic diseases eliminate kar sakta hai, babies design karne ke liye bhi use ho sakta hai - unki height, intelligence, athleticism choose karo.": "The same tool that could eliminate genetic diseases could also be used to design babies—choose their height, intelligence, athleticism.",
  "3.": "3.",
  "8 billion years tak, dna ne humein control kiya.": "For 8 billion years, DNA controlled us.",

  // Topic 93: Plant Movements
  "uski trigger hairs ka ek touch - kuch nahi. 20 seconds mein do touches - snap.": "Touch its trigger hairs once—nothing. Two touches within 20 seconds—SNAP.",
  "wo bas ek timescale pe operate kar rahe hain jo hum perceive nahi kar sakte.": "They're just operating on a timescale we can't perceive.",

  // Topic 94: Gödel's Incompleteness
  "socho iske baare mein.": "Think about that.",
  "gödel ne prove kiya ki kisi bhi mathematical system mein jo basic arithmetic karne ke liye enough complex ho, hamesha true statements hongi jo us system ke andar prove nahi ki ja saktin.": "Gödel proved that in any mathematical system complex enough to do basic arithmetic, there will always be true statements that cannot be proven within that system.",

  // Topic 95: Chaos Theory
  "1961 mein, meteorologist edward lorenz computer pe weather simulations run kar rahe the.": "In 1961, meteorologist Edward Lorenz was running weather simulations on a computer.",
  "unhone ek variable ke liye 0.": "He entered 0.",
  "506127 enter kiya.": "506127 for one variable.",
  "baad mein, unhone time bachane ke liye 0.": "Later, to save time, he entered 0.",
  "506 round kiya.": "506, rounding off.",
  "real hai.": "It's real.",

  // Topic 96: Prime Numbers
  "2, 3, 5, 7, 11 - simple enough.": "2, 3, 5, 7, 11—simple enough.",
  "15 lo.": "Take 15.",
  "ye 3 times 5 hai.": "It's 3 times 5.",
  "easy.": "Easy.",
  "ab ek 600-digit number lo jo do 300-digit primes ka product hai.": "Now take a 600-digit number that's the product of two 300-digit primes.",
  "years mein nahi.": "Not in years.",

  // Topic 97: The Riemann Hypothesis
  "ek math problem itna important hai ki ise solve karne ke liye ek million dollar ka prize hai. 160 saal ho gaye.": "One math problem is so important there's a million dollar prize for solving it. It's been 160 years.",
  "primes random lagte hain - 2, 3, 5, 7, 11, 13.": "Primes seem random—2, 3, 5, 7, 11, 13.",
  "infinity mein kahin ek exception chhupi ho sakti hai jo sab kuch break kar de.": "Somewhere in infinity, an exception could be hiding that breaks everything.",
  "160 saal se, ye simple statement ne har attack resist kiya hai.": "For 160 years, this simple statement has resisted every attack.",
  "shayad tum karoge. prize abhi bhi wait kar raha hai.": "Maybe you will. The prize is still waiting.",

  // Topic 98: Placebo Effect
  "koi dhoka nahi.": "No deception.",
  "phir bhi kaam kiya.": "It still worked.",
  "scientists ise 'open-label placebo' kehte hain, aur yeh medicine ki poori understanding badal raha hai.": "Scientists call this 'open-label placebo,' and it's changing our entire understanding of medicine.",

  // Topic 99: Dunning-Kruger Effect
  "yeh kyun hota hai: jab aap kisi cheez mein bure ho, aapke paas skills nahi hain yeh recognize karne ki ki aap bure ho. yeh ek brutal catch-22 hai.": "Here's why it happens: when you're bad at something, you lack the skills to recognize that you're bad. It's a brutal catch-22.",
  "competent hone ke liye jo knowledge chahiye, wahi knowledge chahiye incompetence recognize karne ke liye.": "The knowledge needed to be competent is the same knowledge needed to recognize incompetence.",
  "driving seekhna socho.": "Think about learning to drive.",
  "feedback lo.": "Seek feedback.",

  // Topic 100: Change Blindness
  "1998 mein harvard ke researchers ne ek devious experiment setup kiya.": "In 1998, Harvard researchers set up a devious experiment.",
  "aur bhi weird hai.": "It gets weirder.",
  "yeh kyun hota hai?": "Why does this happen?",
  "aapka brain 11 million bits information per second process karta hai par consciously sirf 50 handle kar sakta hai.": "Your brain processes 11 million bits of information per second but can only consciously handle 50.",

  // ========== FINAL 11 (EXACT CASING) ==========
  // Topic 8: Mars Climate Orbiter
  "2943 crore rs ka spacecraft.": "A ₹2,943 crore spacecraft.",
  "yeh lesson seekhne mein 2943 crore rs lage: assumptions missions khatam karti hain. engineering mein, tum sab verify karo. ya kuch nahi.": "It cost ₹2,943 crore to learn this lesson: assumptions end missions. In engineering, you verify everything. Or nothing.",

  // Topic 13: Ariane 5
  "4500 crore rs dollars.": "₹4,500 crore.",

  // Topic 16: John Harrison
  "parliament ne 9000.0 kg offer kiye - aaj ke millions - jo bhi ise solve kare uske liye.": "Parliament offered a prize worth millions in today's money—to whoever could solve it.",

  // Topic 20: Great Gauge War
  "sirf 36 hours mein, work crews ne 18.4 hazaar km track teen inch shift kar diya.": "In just 36 hours, work crews shifted 18,400 km of track by three inches.",

  // Topic 67: Doorway Effect
  "sirf doorway se guzarne se forgetting 3 guna badh gayi compared to same distance ek room mein walk karne se. kyun?": "Just passing through a doorway tripled forgetting compared to walking the same distance in one room. Why?",

  // Topic 71: pH (numbers without 7.)
  "0 par giro—acidosis.": "Drop to 7.0—acidosis.",
  "8 par jaao—alkalosis.": "Rise to 7.8—alkalosis.",

  // Topic 75: Bananas (numbers without leading 0.)
  "012% potassium-40 hai, ek radioactive isotope. bananas potassium se rich hain, toh wo measurably radioactive hain.": "0.012% is potassium-40, a radioactive isotope. Bananas are rich in potassium, so they're measurably radioactive.",
  "05 microsieverts har raat. par yahan beautiful part hai.": "0.05 microsieverts every night. But here's the beautiful part.",
  "25 billion years hai. jab earth bani tab jo potassium-40 exist karta tha uska aadha abhi bhi yahan hai.": "1.25 billion years. Half the potassium-40 that existed when Earth formed is still here.",

  // ========== TOPIC 101: What Are You Made Of? ==========
  "socha hai kabhi... ki jis cheez ke tum bane ho": "Have you ever thought... about what you're made of?",
  "haddiyan — ye kahan se aaya?": "Bones—where did they come from?",
  "ek taare ka antim sanskar hua tha. jo raakh bachi — ussi se bane ho tum.": "A star had its final cremation. The ashes that remained—that's what you're made of.",
  "taara kaise kaam karta hai?": "How does a star work?",
  "do cheezein lad rahi hain. gravity crush karna chahti hai. nuclear reactions bahar dhakelte hain.": "Two things are fighting. Gravity wants to crush. Nuclear reactions push outward.",
  "do cheezein lad rahi hain. gravity crush karna chahti hai. nuclear reactions bahar dhakkel rahe hain": "Two things are fighting. Gravity wants to crush. Nuclear reactions push outward.",
  "andar hydrogen se helium banta hai": "Inside, hydrogen becomes helium.",
  "aur finally — loha": "And finally—iron.",
  "core collapse hota hai — ek second se bhi kam mein. atoms ka dhaancha toot jaata hai.": "The core collapses—in less than a second. The structure of atoms breaks apart.",
  "electrons aur protons mil ke neutrons ban jaate hain.": "Electrons and protons combine to become neutrons.",
  "bachta kya hai? ek gola — sirf 20 kilometer chauda. delhi jitna.": "What remains? A sphere—only 20 kilometers wide. The size of Delhi.",
  "lekin wajan? ek chai ka chamach uthao iska — poora himalaya utha liya. ek chamach = pura himalaya.": "But the weight? Pick up a teaspoon of it—you've lifted the entire Himalayas. One teaspoon = the whole Himalayas.",
  "lekin wajan? ek chai ka chamach uthao iska — poora himalaya utha liya. ek chamach. poora himalaya.": "But the weight? Pick up a teaspoon of it—you've lifted the entire Himalayas. One teaspoon. The whole Himalayas.",
  "aur agar taara aur bada ho? toh neutron star bhi nahi bachta.": "And if the star is even bigger? Then not even a neutron star survives.",
  "cheez collapse hoti jaati hai... aur hoti jaati hai...": "Matter keeps collapsing... and collapsing...",
  "bacha kya? sirf ek ched. space mein. jahan se light bhi nahi nikal sakti. black hole.": "What's left? Just a hole. In space. From which even light cannot escape. A black hole.",
  "wo kahani... agli baar.": "That story... next time."
};

// Merge translations
Object.assign(TRANSLATIONS, MORE_TRANSLATIONS);

/**
 * Normalize Hindi text for lookup
 */
function normalizeHindi(text) {
  return text.toLowerCase().trim().replace(/\s+/g, ' ');
}

/**
 * Find translation for Hindi text
 */
function findTranslation(hindiText) {
  const normalized = normalizeHindi(hindiText);

  // Direct lookup
  if (TRANSLATIONS[normalized]) {
    return TRANSLATIONS[normalized];
  }

  // Try without punctuation
  const noPunct = normalized.replace(/[.,!?;:'"()—-]/g, '').trim();
  for (const [key, value] of Object.entries(TRANSLATIONS)) {
    const keyNoPunct = key.replace(/[.,!?;:'"()—-]/g, '').trim();
    if (keyNoPunct === noPunct) {
      return value;
    }
  }

  return null;
}

/**
 * Apply translations to data.json
 */
function applyTranslations() {
  // Load data
  const data = JSON.parse(fs.readFileSync(DATA_PATH, 'utf8'));

  // Create backup
  if (!fs.existsSync(path.dirname(BACKUP_PATH))) {
    fs.mkdirSync(path.dirname(BACKUP_PATH), { recursive: true });
  }
  fs.writeFileSync(BACKUP_PATH, JSON.stringify(data, null, 2));
  console.log(`\n💾 Backup saved to: ${BACKUP_PATH}\n`);

  let updated = 0;
  let notFound = 0;
  const missing = [];

  // Process each topic
  data.forEach(topic => {
    const shots = topic.shots || [];
    shots.forEach(shot => {
      const hindi = shot.narration_hindi;
      if (!hindi) return;

      const translation = findTranslation(hindi);
      if (translation) {
        shot.narration = translation;
        updated++;
      } else {
        // Check if current English needs updating
        const current = shot.narration || '';
        // Only flag as missing if Hindi and English seem different
        if (hindi.length > 10 && current.length > 0) {
          // Rough heuristic: check if they share key numbers
          const hindiNums = hindi.match(/\d+/g) || [];
          const engNums = current.match(/\d+/g) || [];
          const overlap = hindiNums.filter(n => engNums.includes(n));
          if (overlap.length < Math.max(hindiNums.length, engNums.length) / 2) {
            notFound++;
            if (missing.length < 20) {
              missing.push({ topic_id: topic.topic_id, shot_id: shot.shot_id, hindi });
            }
          }
        }
      }
    });
  });

  // Save updated data
  fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2));

  console.log(`📥 TRANSLATION COMPLETE`);
  console.log(`${'═'.repeat(50)}`);
  console.log(`   Updated: ${updated} shots`);
  console.log(`   Translations not found: ${notFound}`);

  if (missing.length > 0) {
    console.log(`\n⚠️  Sample missing translations:`);
    missing.slice(0, 10).forEach(m => {
      console.log(`   #${m.topic_id} ${m.shot_id}: "${m.hindi.substring(0, 60)}..."`);
    });
  }

  console.log(`\n✅ data.json has been updated.`);
}

applyTranslations();
