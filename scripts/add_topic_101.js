#!/usr/bin/env node
/**
 * Add Topic 101: Neutron Star to the database
 */

const fs = require('fs');
const path = require('path');

const DATA_FILE = path.join(__dirname, '../public/data.json');

const topic101 = {
  "topic_id": 101,
  "title": "Neutron Star: A Teaspoon Weighs as Much as the Himalayas",
  "title_hindi": "Neutron Star: Ek Chamach = Poora Himalaya",
  "category": "Space",
  "duration_sec": 90,
  "total_shots": 22,
  "shot_breakdown": {
    "video_shots": 0,
    "image_shots": 22,
    "text_shots": 0
  },
  "hook": "Socha hai kabhi... ki jis cheez ke tum bane ho — tumhara khoon, haddiyan, ye sab — ye kahan se aaya? Ek taare ka antim sanskar hua tha. Jo raakh bachi — ussi se bane ho tum.",
  "hook_english": "Have you ever wondered... where did the things you're made of — your blood, your bones — where did they come from? A star's funeral happened. The ashes that remained — you're made from those.",
  "script_hindi": `Socha hai kabhi... ki jis cheez ke tum bane ho — tumhara khoon, haddiyan — ye kahan se aaya?

Ek taare ka antim sanskar hua tha. Jo raakh bachi — ussi se bane ho tum.

Taara kaise kaam karta hai? Do cheezein lad rahi hain. Gravity crush karna chahti hai. Nuclear reactions bahar dhakkel rahe hain — har second 1000 crore Hiroshima bombs jitni energy.

Jab tak balance hai — taara jeeta hai.

Andar hydrogen se helium banta hai. Phir carbon. Oxygen. Silicon. Aur finally — loha.

Lohe pe khel khatam. Fusion band. Gravity berok.

Core collapse hota hai — ek second se bhi kam mein. Atoms ka dhaancha toot jaata hai. Electrons aur protons mil ke neutrons ban jaate hain.

Bachta kya hai? Ek gola — sirf 20 kilometer chauda. Delhi jitna.

Lekin wajan? Ek chai ka chamach uthao iska — poora Himalaya utha liya.

Ek chamach. Poora Himalaya.

Isko bolte hain neutron star.

Aur agar taara aur bada ho? Toh neutron star bhi nahi bachta. Cheez collapse hoti jaati hai... aur hoti jaati hai...

Bacha kya? Sirf ek ched. Space mein. Jahan se light bhi nahi nikal sakti.

Black hole.

Wo kahani... agli baar.`,
  "script_english": `Have you ever wondered... where did the things you're made of — your blood, your bones — where did they come from?

A star's funeral happened. The ashes that remained — you're made from those.

How does a star work? Two things are fighting. Gravity wants to crush it. Nuclear reactions are pushing outward — energy equal to 10 billion Hiroshima bombs every second.

As long as there's balance — the star lives.

Inside, hydrogen becomes helium. Then carbon. Oxygen. Silicon. And finally — iron.

At iron, game over. Fusion stops. Gravity unopposed.

The core collapses — in less than one second. The structure of atoms breaks. Electrons and protons merge into neutrons.

What's left? A ball — only 20 kilometers wide. The size of Delhi.

But the weight? Pick up a teaspoon of it — you've lifted the entire Himalayas.

One teaspoon. Entire Himalayas.

This is called a neutron star.

And if the star is even bigger? Even the neutron star doesn't survive. The thing keeps collapsing... and collapsing...

What's left? Just a hole. In space. From which even light can't escape.

Black hole.

That story... next time.`,
  "style": {
    "color_palette": {
      "deep_space": "#000000",
      "stars": "Cool white, hint of blue",
      "healthy_star": "Warm oranges, yellows, white core",
      "dying_star": "Deep reds, crimson, fading orange",
      "neutron_star": "Intense cyan-blue, electric white",
      "black_hole": "Warm orange accretion, absolute black center"
    },
    "lighting": "Single dominant light source, strong rim lighting, volumetric god rays, deep contrast",
    "reference": "Interstellar (2014), Cosmos (2014), Kurzgesagt"
  },
  "social_media": {
    "youtube": {
      "title": "Ek Chamach = Himalaya 😱 #shorts",
      "description": `Tumhare haath mein jo carbon hai — woh kisi taare ke pet mein bana tha 🔥

Aur jab wo taara mara — uski laash itni bhaari thi ki ek chamach ka wajan Himalaya ke barabar ho gaya 🏔️

Soch lo.

1054 mein Chinese astronomers ne ek taara marte dekha tha ☄️ Itna bright ki din mein dikhta tha. 2 saal tak. Aaj uski raakh ko hum Crab Nebula bolte hain.

Aur agar taara aur bada ho? Toh neutron star bhi nahi bachta.

Bacha kya?

Ek ched. Space mein. Jahan se light bhi bahar nahi aa sakti ⚫

Wo kahani agli baar 👀

—
"Kaala jaadu" lagta hai? Comment mein batao 👇 explain karunga.`,
      "tags": "neutron star hindi, space science hindi, astronomy hindi, black hole explained hindi, science shorts, taare kaise marte hain, neutron star kya hai, supernova hindi, physics hindi, space facts hindi",
      "pinned_comment": "Black hole ki quantum physics samajhni hai? ⚫\n\n👍 = Haan bhai\n💬 = Kaunsa topic explain karun"
    },
    "instagram": {
      "caption": `Ek chamach ☕ Poora Himalaya 🏔️

Soch lo.

Comment mein likho "BLACK HOLE" ⚫ agli video usi pe 👇

#space #science #neutronstar #hindi #reels #astronomy #cosmos #blackhole #india #sciencefacts #physics #universe #spacescience #hindicontent #viral`
    },
    "x": {
      "post": `Ek chamach neutron star ka uthao ☕

Poora Himalaya utha liya 🏔️

Tum taaron ki raakh ho 💀

Black hole ki kahani jaldi... ⚫`
    },
    "hashtags": "#shorts #science #space #hindi #neutronstar #blackhole #astronomy #india #physics #universe"
  },
  "shots": [
    {
      "shot_id": "S01",
      "tc_in": "0:00",
      "tc_out": "0:04",
      "duration": 4,
      "section": "HOOK",
      "narration": "Socha hai kabhi... ki jis cheez ke tum bane ho",
      "narration_hindi": "Socha hai kabhi... ki jis cheez ke tum bane ho",
      "asset": "IMAGE",
      "frame": "ECU",
      "subject": "Eye with Cosmos reflected",
      "animation": "Slow zoom IN toward pupil",
      "camera": { "move": "zoom_in", "speed": "slow" },
      "style": { "lighting": "Single warm golden light from left", "mood": "intimate, philosophical" },
      "mj_prompt": "extreme macro closeup photograph of a human eye, South Asian skin tone, dark brown iris with golden flecks visible, the entire Milky Way galaxy and thousands of stars reflected in the wet glossy surface of the cornea, nebula clouds in purple and blue visible in the reflection, single warm golden light source from the left side creating a catchlight, visible skin texture and pores around the eye, individual eyelashes slightly out of focus in foreground, shallow depth of field, the eye is looking slightly upward as if gazing at the cosmos, photorealistic, shot on Canon EOS R5 with 100mm macro lens, cinematic color grading with teal shadows and warm highlights, intimate and philosophical mood --ar 9:16",
      "runway_prompt": null
    },
    {
      "shot_id": "S02",
      "tc_in": "0:04",
      "tc_out": "0:06",
      "duration": 2,
      "section": "HOOK",
      "narration": "tumhara khoon",
      "narration_hindi": "tumhara khoon",
      "asset": "IMAGE",
      "frame": "MICRO",
      "subject": "Blood cells flowing",
      "animation": "Slow pan RIGHT (flowing motion)",
      "camera": { "move": "pan_R", "speed": "slow" },
      "style": { "lighting": "Warm red tones", "mood": "scientific, life" },
      "mj_prompt": "microscopic view of human blood flowing through a vein, hundreds of red blood cells floating and tumbling in plasma, the cells are bright red discs with concave centers, warm red tones throughout, some cells in sharp focus others blurred showing motion and depth, medical scientific visualization, cinematic lighting, the building blocks of human life --ar 9:16",
      "runway_prompt": null
    },
    {
      "shot_id": "S03",
      "tc_in": "0:06",
      "tc_out": "0:08",
      "duration": 2,
      "section": "HOOK",
      "narration": "haddiyan — ye kahan se aaya?",
      "narration_hindi": "haddiyan — ye kahan se aaya?",
      "asset": "IMAGE",
      "frame": "CU",
      "subject": "Human bones",
      "animation": "Slow zoom IN",
      "camera": { "move": "zoom_in", "speed": "slow" },
      "style": { "lighting": "Warm lighting on pale bone", "mood": "dramatic, anatomical" },
      "mj_prompt": "dramatic closeup of human skeleton bones, detailed bone texture showing calcium structure and subtle porosity, warm lighting on pale white-cream bone surface, could be femur or spine or ribcage, anatomical scientific visualization, shallow depth of field, the solid framework of human body, cinematic moody lighting with dark background --ar 9:16",
      "runway_prompt": null
    },
    {
      "shot_id": "S04",
      "tc_in": "0:08",
      "tc_out": "0:11",
      "duration": 3,
      "section": "HOOK",
      "narration": "Ek taare ka antim sanskar hua tha. Jo raakh bachi — ussi se bane ho tum.",
      "narration_hindi": "Ek taare ka antim sanskar hua tha. Jo raakh bachi — ussi se bane ho tum.",
      "asset": "IMAGE",
      "frame": "WS",
      "subject": "Star Ashes / Cosmic Dust",
      "animation": "Slow zoom OUT (revealing vastness)",
      "camera": { "move": "zoom_out", "speed": "slow" },
      "style": { "lighting": "Grey and orange tones", "mood": "somber, spiritual" },
      "mj_prompt": "abstract visualization blending two concepts, cosmic nebula dust resembling the swirling ashes and smoke of a funeral pyre, grey and orange tones like burning embers and ash, the stellar remains spreading outward like smoke rising, antim sanskar of a star, the ashes that will become new life, somber spiritual mood, cinematic artistic, deep black background --ar 9:16",
      "runway_prompt": null
    },
    {
      "shot_id": "S05",
      "tc_in": "0:11",
      "tc_out": "0:15",
      "duration": 4,
      "section": "CONTEXT",
      "narration": "Taara kaise kaam karta hai?",
      "narration_hindi": "Taara kaise kaam karta hai?",
      "asset": "IMAGE",
      "frame": "WS",
      "subject": "Massive Blue Star",
      "animation": "Slow zoom OUT (show full scale)",
      "camera": { "move": "zoom_out", "speed": "slow" },
      "style": { "lighting": "Intensely bright white-blue core", "mood": "awe, cosmic scale" },
      "mj_prompt": "massive blue supergiant star floating alone in deep space, the star is enormous and dominates the upper two thirds of the vertical frame, surface of the star showing roiling plasma convection cells visible as granular bright bubbling texture, multiple solar prominences and flares erupting violently from the limb of the star in orange and yellow arcs reaching outward, the star is intensely bright white-blue at the center core gradually fading to yellow then orange at the outer edges, visible corona extending outward as faint ethereal glowing haze, volumetric light rays emanating outward from the star into space, deep pure black space background with tiny scattered distant stars below the star for scale, NASA Solar Dynamics Observatory photography style, photorealistic rendering of plasma dynamics --ar 9:16",
      "runway_prompt": null
    },
    {
      "shot_id": "S06",
      "tc_in": "0:15",
      "tc_out": "0:20",
      "duration": 5,
      "section": "CONTEXT",
      "narration": "Do cheezein lad rahi hain. Gravity crush karna chahti hai. Nuclear reactions bahar dhakkel rahe hain",
      "narration_hindi": "Do cheezein lad rahi hain. Gravity crush karna chahti hai. Nuclear reactions bahar dhakkel rahe hain",
      "asset": "IMAGE",
      "frame": "CU",
      "subject": "Gravity vs Fusion battle",
      "animation": "Slow zoom IN toward core",
      "camera": { "move": "zoom_in", "speed": "slow" },
      "style": { "lighting": "Dramatic contrast warm vs cold", "mood": "tension, battle" },
      "mj_prompt": "artistic scientific visualization showing the two forces battling inside a living star, the star rendered semi-transparent to reveal internal dynamics, at the center a blindingly bright white-yellow fusion core radiating intense energy waves pushing outward represented by concentric light rings expanding from center, simultaneously dark shadowy pressure represented by blue-purple compression waves pushing inward from the surface toward the core representing gravitational collapse force, the two opposing forces meeting in a turbulent boundary layer in the middle showing visible tension and distortion, star surface in orange and red tones, the core in brilliant white transitioning to yellow, dramatic contrast between warm outward nuclear energy and cold inward gravitational pressure, black space background, cinematic dramatic lighting --ar 9:16",
      "runway_prompt": null
    },
    {
      "shot_id": "S07",
      "tc_in": "0:20",
      "tc_out": "0:24",
      "duration": 4,
      "section": "CONTEXT",
      "narration": "har second 1000 crore Hiroshima bombs jitni energy",
      "narration_hindi": "har second 1000 crore Hiroshima bombs jitni energy",
      "asset": "IMAGE",
      "frame": "CU",
      "subject": "Nuclear fusion intensity",
      "animation": "Slow zoom IN (intensity)",
      "camera": { "move": "zoom_in", "speed": "slow" },
      "style": { "lighting": "Blindingly bright", "mood": "overwhelming power" },
      "mj_prompt": "interior of a star core, blindingly bright nuclear fusion explosion, thousands of overlapping white-hot energy bursts radiating outward, overwhelming amount of light and power concentrated in the center, layers of explosive energy waves expanding, the scale of energy is incomprehensible, pure white and yellow and orange light, cinematic volumetric rays, scientific visualization of stellar nuclear fusion energy output --ar 9:16",
      "runway_prompt": null
    },
    {
      "shot_id": "S08",
      "tc_in": "0:24",
      "tc_out": "0:26",
      "duration": 2,
      "section": "BUILD",
      "narration": "Andar hydrogen se helium banta hai",
      "narration_hindi": "Andar hydrogen se helium banta hai",
      "asset": "IMAGE",
      "frame": "CU",
      "subject": "Hydrogen atom",
      "animation": "Slow zoom IN",
      "camera": { "move": "zoom_in", "speed": "slow" },
      "style": { "lighting": "Blue-white glow", "mood": "scientific" },
      "mj_prompt": "glowing hydrogen atom visualization inside a star core, small bright blue-white luminous sphere, the simplest element, surrounded by hot orange plasma environment, single proton at center with electron cloud, the sphere pulses with energy, cinematic lighting, scientific visualization style, black and orange background of stellar interior --ar 9:16",
      "runway_prompt": null
    },
    {
      "shot_id": "S09",
      "tc_in": "0:26",
      "tc_out": "0:28",
      "duration": 2,
      "section": "BUILD",
      "narration": "Phir carbon",
      "narration_hindi": "Phir carbon",
      "asset": "IMAGE",
      "frame": "CU",
      "subject": "Helium forming",
      "animation": "Slow zoom IN",
      "camera": { "move": "zoom_in", "speed": "slow" },
      "style": { "lighting": "Golden-yellow glow", "mood": "progression" },
      "mj_prompt": "glowing helium atom visualization inside a star core, bright golden-yellow luminous sphere slightly larger than hydrogen, two protons fused together, radiating warm light, surrounded by hot plasma environment in orange tones, the birth of a new element from fusion, cinematic volumetric lighting, scientific visualization --ar 9:16",
      "runway_prompt": null
    },
    {
      "shot_id": "S10",
      "tc_in": "0:28",
      "tc_out": "0:30",
      "duration": 2,
      "section": "BUILD",
      "narration": "Oxygen",
      "narration_hindi": "Oxygen",
      "asset": "IMAGE",
      "frame": "CU",
      "subject": "Carbon forming",
      "animation": "Slow zoom IN",
      "camera": { "move": "zoom_in", "speed": "slow" },
      "style": { "lighting": "Pure white glow", "mood": "life element" },
      "mj_prompt": "glowing carbon atom visualization inside a star core, bright white luminous sphere with subtle crystalline structure visible, six protons in nucleus, the element that will become life, surrounded by intense white-hot plasma environment, the sphere radiates pure white light, cinematic dramatic lighting, scientific visualization style --ar 9:16",
      "runway_prompt": null
    },
    {
      "shot_id": "S11",
      "tc_in": "0:30",
      "tc_out": "0:32",
      "duration": 2,
      "section": "BUILD",
      "narration": "Silicon",
      "narration_hindi": "Silicon",
      "asset": "IMAGE",
      "frame": "CU",
      "subject": "Oxygen forming",
      "animation": "Slow zoom IN",
      "camera": { "move": "zoom_in", "speed": "slow" },
      "style": { "lighting": "Cyan-blue glow", "mood": "cooling" },
      "mj_prompt": "glowing oxygen atom visualization inside a star core, pale cyan-blue luminous sphere, eight protons in nucleus, cool blue tone contrasting with hot orange stellar plasma surrounding it, the element of air and water being forged in nuclear fire, cinematic lighting with blue glow against orange background, scientific visualization --ar 9:16",
      "runway_prompt": null
    },
    {
      "shot_id": "S12",
      "tc_in": "0:32",
      "tc_out": "0:34",
      "duration": 2,
      "section": "BUILD",
      "narration": "Aur finally — loha",
      "narration_hindi": "Aur finally — loha",
      "asset": "IMAGE",
      "frame": "CU",
      "subject": "Silicon forming",
      "animation": "Slow zoom IN",
      "camera": { "move": "zoom_in", "speed": "slow" },
      "style": { "lighting": "Blue-grey metallic", "mood": "ominous" },
      "mj_prompt": "glowing silicon atom visualization inside a star core, steel blue-grey luminous sphere with metallic sheen, fourteen protons in nucleus, the element of rocks and computer chips, surrounded by dimming stellar plasma as the star ages, cooler blue-grey tone showing the star is running out of fuel, cinematic ominous lighting, scientific visualization --ar 9:16",
      "runway_prompt": null
    },
    {
      "shot_id": "S13",
      "tc_in": "0:34",
      "tc_out": "0:40",
      "duration": 6,
      "section": "BUILD",
      "narration": "Lohe pe khel khatam. Fusion band. Gravity berok.",
      "narration_hindi": "Lohe pe khel khatam. Fusion band. Gravity berok.",
      "asset": "IMAGE",
      "frame": "CU",
      "subject": "Iron Core (Dead End)",
      "animation": "NO MOTION (dead, no energy)",
      "camera": { "move": "static", "speed": "none" },
      "style": { "lighting": "Dull, no glow", "mood": "finality, doom" },
      "mj_prompt": "iron atom visualization inside a dying star core, dull grey metallic sphere with no glow, cold and dead looking, twenty-six protons in nucleus, the element that kills stars, surrounded by fading dim red plasma, no light radiates from the iron itself it only absorbs, ominous dark lighting with red undertones, sense of finality and doom, scientific visualization --ar 9:16",
      "runway_prompt": null
    },
    {
      "shot_id": "S14",
      "tc_in": "0:40",
      "tc_out": "0:46",
      "duration": 6,
      "section": "CLIMAX",
      "narration": "Core collapse hota hai — ek second se bhi kam mein. Atoms ka dhaancha toot jaata hai.",
      "narration_hindi": "Core collapse hota hai — ek second se bhi kam mein. Atoms ka dhaancha toot jaata hai.",
      "asset": "IMAGE",
      "frame": "WS",
      "subject": "Core Collapse",
      "animation": "Fast zoom IN (violence)",
      "camera": { "move": "zoom_in", "speed": "fast" },
      "style": { "lighting": "Blinding white center", "mood": "catastrophic" },
      "mj_prompt": "a massive star in the first moments of catastrophic core collapse, the outer layers of the star in red and orange visibly falling inward toward the center with motion blur streaks showing the direction of movement, stellar material streaming rapidly toward a blinding white point at the center which is the collapsing core, visible shockwaves rippling outward through the star body as concentric circular distortions in the stellar material, the spherical shape of the star beginning to distort and compress and deform, colors dramatically shifting from orange-red outer layers to intense white-blue at the crushing center, debris and plasma spiraling inward in swirling patterns, overwhelming sense of violent implosion and catastrophic collapse, dramatic lighting with the collapsing core as the primary blinding light source, cinematic disaster movie aesthetic, photorealistic --ar 9:16",
      "runway_prompt": null
    },
    {
      "shot_id": "S15",
      "tc_in": "0:46",
      "tc_out": "0:50",
      "duration": 4,
      "section": "CLIMAX",
      "narration": "Electrons aur protons mil ke neutrons ban jaate hain.",
      "narration_hindi": "Electrons aur protons mil ke neutrons ban jaate hain.",
      "asset": "IMAGE",
      "frame": "ECU",
      "subject": "Electron-Proton Merge",
      "animation": "Slow zoom IN",
      "camera": { "move": "zoom_in", "speed": "slow" },
      "style": { "lighting": "White flash", "mood": "quantum transformation" },
      "mj_prompt": "visualization of atomic collapse under extreme gravity, a single atom being crushed, blue electron sphere being forced inward toward red proton sphere at the center, the two particles merging and fusing together, moment of collision creating bright white flash of light, a neutral grey neutron particle emerging from the fusion, surrounding space warping and compressing, quantum physics visualization, dramatic cinematic lighting, scientific illustration style --ar 9:16",
      "runway_prompt": null
    },
    {
      "shot_id": "S16",
      "tc_in": "0:50",
      "tc_out": "0:54",
      "duration": 4,
      "section": "REVEAL",
      "narration": "Bachta kya hai? Ek gola — sirf 20 kilometer chauda. Delhi jitna.",
      "narration_hindi": "Bachta kya hai? Ek gola — sirf 20 kilometer chauda. Delhi jitna.",
      "asset": "IMAGE",
      "frame": "WS",
      "subject": "Neutron Star",
      "animation": "Slow zoom IN",
      "camera": { "move": "zoom_in", "speed": "slow" },
      "style": { "lighting": "Intense cyan-blue", "mood": "awe, impossibility" },
      "mj_prompt": "a neutron star floating alone in the void of deep space, an incredibly tiny sphere only 20 kilometers in diameter but impossibly dense and heavy, the surface glowing with intense cyan-blue and white light, surface texture appearing like cracked ceramic or crystallized material under extreme pressure with visible fracture patterns, faint blue magnetic field lines emanating from the north and south poles of the star curving gracefully around and back forming the magnetosphere, subtle but visible gravitational lensing effect where background stars directly behind the neutron star appear slightly warped and distorted bent by the extreme gravity, deep pure black space background with scattered distant stars, NASA scientific visualization style, photorealistic --ar 9:16",
      "runway_prompt": null
    },
    {
      "shot_id": "S17",
      "tc_in": "0:54",
      "tc_out": "0:58",
      "duration": 4,
      "section": "REVEAL",
      "narration": "Delhi jitna",
      "narration_hindi": "Delhi jitna",
      "asset": "IMAGE",
      "frame": "WS",
      "subject": "Delhi vs Neutron Star comparison",
      "animation": "Slow zoom OUT (show both)",
      "camera": { "move": "zoom_out", "speed": "slow" },
      "style": { "lighting": "Infographic overlay", "mood": "scale comparison" },
      "mj_prompt": "satellite aerial photograph of Delhi India from above, a small solid glowing blue-white sphere overlaid on top of the city matching the 20km diameter of the urban area, the sphere is semi-transparent so the city is visible underneath, the sphere glows like hot metal with bright edges, shows scale comparison of neutron star size versus city size, scientific visualization overlay, infographic style --ar 9:16",
      "runway_prompt": null
    },
    {
      "shot_id": "S18",
      "tc_in": "0:58",
      "tc_out": "1:04",
      "duration": 6,
      "section": "REVEAL",
      "narration": "Lekin wajan? Ek chai ka chamach uthao iska — poora Himalaya utha liya. Ek chamach. Poora Himalaya.",
      "narration_hindi": "Lekin wajan? Ek chai ka chamach uthao iska — poora Himalaya utha liya. Ek chamach. Poora Himalaya.",
      "asset": "IMAGE",
      "frame": "WS",
      "subject": "Spoon vs Himalaya",
      "animation": "Slow pan LEFT to RIGHT",
      "camera": { "move": "pan_L_R", "speed": "slow" },
      "style": { "lighting": "Dramatic rim lighting", "mood": "surreal, impossible" },
      "mj_prompt": "surreal impossible cosmic comparison image illustrating neutron star density, on the left side of the frame a single ordinary stainless steel Indian chai spoon floating in the void of black space, the spoon rendered photorealistically with accurate metallic reflections and the curved bowl of the spoon catching faint starlight, on the right side of the frame the entire Himalayan mountain range photographed from space showing dozens of snow-capped peaks including Mount Everest and K2 and Kangchenjunga stretching across the frame, the mountains rendered in NASA satellite photography style with realistic snow and rock textures, both objects floating in deep black space surrounded by distant tiny stars, the composition implies a balance scale with the tiny spoon on one side equaling the massive mountain range on the other, dramatic rim lighting on both objects, photorealistic rendering, cinematic color grading with cool blue tones overall --ar 9:16",
      "runway_prompt": null
    },
    {
      "shot_id": "S19",
      "tc_in": "1:04",
      "tc_out": "1:08",
      "duration": 4,
      "section": "EXTENSION",
      "narration": "Aur agar taara aur bada ho? Toh neutron star bhi nahi bachta.",
      "narration_hindi": "Aur agar taara aur bada ho? Toh neutron star bhi nahi bachta.",
      "asset": "IMAGE",
      "frame": "WS",
      "subject": "Massive Red Hypergiant",
      "animation": "Slow zoom OUT (menacing scale)",
      "camera": { "move": "zoom_out", "speed": "slow" },
      "style": { "lighting": "Angry red, ominous", "mood": "doom, menace" },
      "mj_prompt": "massive red hypergiant star floating in space, the most massive type of star that exists, so enormous it would engulf entire solar systems, surface is angry red and orange with violent plasma eruptions and solar flares, this star is too heavy to become a neutron star it will collapse into a black hole, unstable and doomed, the star dominates the frame menacingly, surrounding space feels small, cinematic ominous lighting, sense of inevitable doom --ar 9:16",
      "runway_prompt": null
    },
    {
      "shot_id": "S20",
      "tc_in": "1:08",
      "tc_out": "1:12",
      "duration": 4,
      "section": "EXTENSION",
      "narration": "Cheez collapse hoti jaati hai... aur hoti jaati hai...",
      "narration_hindi": "Cheez collapse hoti jaati hai... aur hoti jaati hai...",
      "asset": "IMAGE",
      "frame": "CU",
      "subject": "Neutron Star Collapsing",
      "animation": "Zoom IN toward center (getting sucked in)",
      "camera": { "move": "zoom_in", "speed": "medium" },
      "style": { "lighting": "White cracks, warping space", "mood": "doom, inevitability" },
      "mj_prompt": "a neutron star in the process of collapsing further into a black hole, the tiny dense cyan-blue sphere is being crushed even smaller by its own gravity, visible compression distortion waves rippling across its surface, cracks and fractures forming across the surface with blinding white light escaping through the cracks from within, the surrounding space itself beginning to visibly warp and distort and bend, background stars near the collapsing object are stretching and smearing slightly being pulled toward it, sense of impending doom as even the incredibly strong neutron star cannot survive this gravitational force, the lighting is dramatic with the neutron star as the light source but the light itself appears to be bending and being pulled back, photorealistic with artistic interpretation of extreme gravitational effects on spacetime --ar 9:16",
      "runway_prompt": null
    },
    {
      "shot_id": "S21",
      "tc_in": "1:12",
      "tc_out": "1:18",
      "duration": 6,
      "section": "CLIMAX",
      "narration": "Bacha kya? Sirf ek ched. Space mein. Jahan se light bhi nahi nikal sakti. Black hole.",
      "narration_hindi": "Bacha kya? Sirf ek ched. Space mein. Jahan se light bhi nahi nikal sakti. Black hole.",
      "asset": "IMAGE",
      "frame": "WS",
      "subject": "Black Hole Forming",
      "animation": "Slow zoom IN (infinite, final)",
      "camera": { "move": "zoom_in", "speed": "slow" },
      "style": { "lighting": "Absolute black center, orange accretion", "mood": "terror, beauty" },
      "mj_prompt": "a black hole in the exact moment of formation, at the center a perfect sphere of absolute total darkness blacker than the void of space itself this is the event horizon, surrounding the black void a bright accretion disk of superheated gas spiraling rapidly inward glowing in intense orange and yellow and white colors, extreme gravitational lensing effect clearly visible where light from behind the black hole bends around it creating an Einstein ring, background stars visible but warped and stretched into arcs and smeared lines bent by the extreme curvature of spacetime, the void at the center is pure absolute black containing no detail whatsoever darker than anything else in the image, inspired by the black hole visualization from Christopher Nolan Interstellar movie, scientifically accurate gravitational lensing, photorealistic, simultaneously terrifying and hauntingly beautiful --ar 9:16",
      "runway_prompt": null
    },
    {
      "shot_id": "S22",
      "tc_in": "1:18",
      "tc_out": "1:23",
      "duration": 5,
      "section": "HOOK_OUT",
      "narration": "Wo kahani... agli baar.",
      "narration_hindi": "Wo kahani... agli baar.",
      "asset": "IMAGE",
      "frame": "WS",
      "subject": "Final Black Hole",
      "animation": "Very slow zoom IN",
      "camera": { "move": "zoom_in", "speed": "very_slow" },
      "style": { "lighting": "Absolute void, orange ring", "mood": "cosmic finality, cliffhanger" },
      "mj_prompt": "a supermassive black hole in its stable final state floating in the infinite void of deep space, the event horizon is a perfect circle of absolute void and darkness at the center of the image containing no light no detail pure black, a thin bright accretion disk in orange and white orbiting at an angle around the black hole appearing warped due to gravitational lensing, visible photon sphere as a thin ring of captured light encircling the black hole just outside the event horizon, extreme gravitational lensing warping all background stars into distorted arcs and rings, the black hole is positioned in the center of the frame with the warped starfield surrounding it in all directions, Christopher Nolan Interstellar movie black hole aesthetic, scientifically accurate gravitational physics visualization, photorealistic, sense of infinite gravity and cosmic finality --ar 9:16",
      "runway_prompt": null
    }
  ]
};

// Load existing data
const data = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));

// Check if topic 101 already exists
const existingIndex = data.findIndex(t => t.topic_id === 101);
if (existingIndex !== -1) {
  data[existingIndex] = topic101;
  console.log('Updated existing topic 101');
} else {
  data.push(topic101);
  console.log('Added new topic 101');
}

// Save
fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
console.log('Saved to', DATA_FILE);
console.log('Total topics:', data.length);
