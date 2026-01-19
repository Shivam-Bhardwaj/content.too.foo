#!/usr/bin/env node

/**
 * add_topics_102_103.js
 *
 * Adds two new topics:
 * - Topic 102: VLAs (Vision-Language-Action Models) - Tech category
 * - Topic 103: Nobel Prize in Physics 2024 - News category
 */

const fs = require('fs');
const path = require('path');

const topic102 = {
  "topic_id": 102,
  "title": "VLAs: Teaching Robots to See, Think, and Act",
  "title_hindi": "VLA: Robots Ko Dekhna, Sochna Aur Karna Sikhana",
  "category": "Tech",
  "duration_sec": 90,
  "total_shots": 22,
  "content_type": "shorts",
  "shot_breakdown": {
    "video_shots": 4,
    "image_shots": 16,
    "text_shots": 2
  },
  "hook": "Ek robot jo tumhari baat sunega... camera se dekhega... aur khud decide karega ki kya karna hai. Science fiction? Nahi. Google ne ise real bana diya.",
  "hook_english": "A robot that listens to you... sees through a camera... and decides on its own what to do. Science fiction? No. Google made it real.",
  "script_hindi": `Ek robot jo tumhari baat sunega... camera se dekhega... aur khud decide karega ki kya karna hai. Science fiction? Nahi. Google ne ise real bana diya.

Isko kehte hain VLA — Vision-Language-Action model.

Pehle robots sirf code follow karte the. Step 1, Step 2, Step 3. Agar kuch unexpected hua — game over.

Lekin ab? Google DeepMind ka RT-2 aur Gemini Robotics ne sab badal diya.

Ye models teen cheezein combine karte hain. Vision — camera se duniya dekhna. Language — tumhari instructions samajhna. Action — actually kuch karna.

Tum bolo "red apple uthao" — robot dekhega, samjhega, aur uthayega. Bina kisi specific programming ke.

Sabse crazy part? Ye models generalize kar sakte hain. Matlab agar tune ise sirf apples sikhaaye... ye oranges bhi utha lega. Kyunki ye objects ko samajhta hai, sirf yaad nahi karta.

RT-2 mein 55 billion parameters hain. Gemini Robotics origami fold kar sakta hai. Cards khel sakta hai.

2025 mein ye on-device bhi aa gaya — matlab robot ke andar hi chalega, cloud ki zaroorat nahi.

Agle 5 saal mein tumhare ghar mein ek robot hoga jo tumhari baat sunkar kaam karega.

Future aa chuka hai. Bas deliver hona baaki hai.`,
  "script_english": `A robot that listens to you... sees through a camera... and decides on its own what to do. Science fiction? No. Google made it real.

It's called a VLA — Vision-Language-Action model.

Earlier, robots just followed code. Step 1, Step 2, Step 3. If something unexpected happened — game over.

But now? Google DeepMind's RT-2 and Gemini Robotics changed everything.

These models combine three things. Vision — seeing the world through cameras. Language — understanding your instructions. Action — actually doing something.

You say "pick up the red apple" — the robot sees, understands, and picks it up. Without any specific programming.

The craziest part? These models can generalize. Meaning if you taught it only apples... it can pick up oranges too. Because it understands objects, doesn't just memorize them.

RT-2 has 55 billion parameters. Gemini Robotics can fold origami. Play cards.

In 2025, it went on-device — meaning it runs inside the robot itself, no cloud needed.

In the next 5 years, you'll have a robot at home that works by listening to you.

The future has arrived. It just needs to be delivered.`,
  "style": {
    "color_palette": {
      "primary": "#0EA5E9",
      "secondary": "#1E293B",
      "accent": "#22D3EE",
      "background": "Dark slate, deep blue"
    },
    "lighting": "Cool LED lighting, tech lab ambiance, blue rim lights",
    "reference": "Black Mirror, Ex Machina, Boston Dynamics videos"
  },
  "social_media": {
    "youtube": {
      "title": "Robots Jo Tumhari Baat Sunenge 🤖 #shorts",
      "description": "Google ne ek aisa AI banaya hai jo robots ko dekhna, samajhna aur kaam karna sikhata hai.\n\nVLA = Vision + Language + Action\n\n🔬 RT-2: 55 billion parameters\n🤖 Gemini Robotics: Origami fold kar sakta hai\n📱 2025: On-device version launch\n\nFuture of robotics is HERE.",
      "tags": "VLA, Google DeepMind, RT-2, Gemini Robotics, AI robots, robotics hindi, tech explained hindi, artificial intelligence, machine learning, future technology",
      "pinned_comment": "Ghar mein robot kab aayega? 🤖\n\n👍 = 5 saal mein\n💬 = 10 saal mein"
    },
    "instagram": {
      "caption": "Robots jo tumhari baat sunenge 🤖\n\nGoogle ka VLA model:\n→ Dekhta hai (Vision)\n→ Samajhta hai (Language)\n→ Karta hai (Action)\n\nNo coding needed. Just talk.\n\n#AI #Robotics #Google #Tech #Future"
    },
    "x": {
      "post": "Google's VLA models are insane 🤖\n\nRT-2 → 55B params, understands objects\nGemini Robotics → Folds origami, plays cards\n\nRobots that see, understand, and act.\n\nThe future just arrived."
    },
    "hashtags": "#shorts #tech #AI #robotics #google #future #VLA #deepmind"
  },
  "shots": [
    {
      "shot_id": "S01",
      "tc_in": "0:00",
      "tc_out": "0:04",
      "duration": 4,
      "section": "HOOK",
      "narration": "A robot that listens to you... sees through a camera... and decides on its own what to do.",
      "narration_hindi": "Ek robot jo tumhari baat sunega... camera se dekhega... aur khud decide karega ki kya karna hai.",
      "asset": "VIDEO",
      "frame": "MS",
      "subject": "Sleek humanoid robot head turning toward camera, eyes lighting up",
      "animation": "Slow zoom in",
      "camera": { "move": "zoom_in", "speed": "slow" },
      "style": { "lighting": "Blue LED rim lighting", "mood": "futuristic, mysterious" },
      "mj_prompt": "sleek white humanoid robot head turning toward camera, blue LED eyes activating, dark tech lab background, volumetric blue lighting, cinematic, photorealistic --ar 9:16 --v 6.1 --s 400",
      "runway_prompt": "Robot head slowly turns toward camera, eyes illuminate with soft blue glow"
    },
    {
      "shot_id": "S02",
      "tc_in": "0:04",
      "tc_out": "0:06",
      "duration": 2,
      "section": "HOOK",
      "narration": "Science fiction? No. Google made it real.",
      "narration_hindi": "Science fiction? Nahi. Google ne ise real bana diya.",
      "asset": "IMAGE",
      "frame": "CU",
      "subject": "Google DeepMind logo on screen",
      "animation": "Slow push in",
      "camera": { "move": "push", "speed": "slow" },
      "style": { "lighting": "Clean tech lighting", "mood": "professional, powerful" },
      "mj_prompt": "Google DeepMind logo glowing on large curved display screen, dark modern tech office, minimal clean aesthetic, blue accent lighting --ar 9:16 --v 6.1 --s 350",
      "runway_prompt": null
    },
    {
      "shot_id": "S03",
      "tc_in": "0:06",
      "tc_out": "0:09",
      "duration": 3,
      "section": "CONTEXT",
      "narration": "It's called a VLA — Vision-Language-Action model.",
      "narration_hindi": "Isko kehte hain VLA — Vision-Language-Action model.",
      "asset": "TEXT",
      "frame": "TEXT",
      "subject": "VLA text reveal with icons",
      "animation": "Text animation",
      "camera": { "move": "static", "speed": "slow" },
      "style": { "lighting": "Dark background", "mood": "educational" },
      "mj_prompt": null,
      "runway_prompt": null
    },
    {
      "shot_id": "S04",
      "tc_in": "0:09",
      "tc_out": "0:13",
      "duration": 4,
      "section": "CONTEXT",
      "narration": "Earlier, robots just followed code. Step 1, Step 2, Step 3. If something unexpected happened — game over.",
      "narration_hindi": "Pehle robots sirf code follow karte the. Step 1, Step 2, Step 3. Agar kuch unexpected hua — game over.",
      "asset": "IMAGE",
      "frame": "MS",
      "subject": "Old industrial robot arm frozen mid-motion, error message",
      "animation": "Slow pan right",
      "camera": { "move": "pan_R", "speed": "slow" },
      "style": { "lighting": "Industrial harsh lighting", "mood": "frustrating, limited" },
      "mj_prompt": "vintage industrial robot arm frozen in place, red error warning light flashing, factory setting, harsh fluorescent lighting, 1990s technology aesthetic --ar 9:16 --v 6.1 --s 350",
      "runway_prompt": null
    },
    {
      "shot_id": "S05",
      "tc_in": "0:13",
      "tc_out": "0:17",
      "duration": 4,
      "section": "BUILD",
      "narration": "But now? Google DeepMind's RT-2 and Gemini Robotics changed everything.",
      "narration_hindi": "Lekin ab? Google DeepMind ka RT-2 aur Gemini Robotics ne sab badal diya.",
      "asset": "VIDEO",
      "frame": "WS",
      "subject": "Modern robot lab with multiple robots working",
      "animation": "Drone shot revealing lab",
      "camera": { "move": "crane_down", "speed": "medium" },
      "style": { "lighting": "Clean modern lab", "mood": "impressive, advanced" },
      "mj_prompt": "modern robotics research lab, multiple sleek robots performing tasks, Google DeepMind aesthetic, white and blue color scheme, high tech, cinematic wide shot --ar 9:16 --v 6.1 --s 400",
      "runway_prompt": "Camera cranes down revealing expansive robotics lab with robots in motion"
    },
    {
      "shot_id": "S06",
      "tc_in": "0:17",
      "tc_out": "0:21",
      "duration": 4,
      "section": "BUILD",
      "narration": "These models combine three things. Vision — seeing the world through cameras.",
      "narration_hindi": "Ye models teen cheezein combine karte hain. Vision — camera se duniya dekhna.",
      "asset": "IMAGE",
      "frame": "ECU",
      "subject": "Robot camera eye with data overlay",
      "animation": "Slow zoom in",
      "camera": { "move": "zoom_in", "speed": "slow" },
      "style": { "lighting": "Blue tech glow", "mood": "analytical" },
      "mj_prompt": "extreme closeup robot camera lens eye, data visualization overlay, object detection boxes, blue holographic interface, futuristic aesthetic --ar 9:16 --v 6.1 --s 400",
      "runway_prompt": null
    },
    {
      "shot_id": "S07",
      "tc_in": "0:21",
      "tc_out": "0:24",
      "duration": 3,
      "section": "BUILD",
      "narration": "Language — understanding your instructions.",
      "narration_hindi": "Language — tumhari instructions samajhna.",
      "asset": "IMAGE",
      "frame": "MS",
      "subject": "Sound waves entering robot, text appearing",
      "animation": "Slow push in",
      "camera": { "move": "push", "speed": "slow" },
      "style": { "lighting": "Soft blue glow", "mood": "intelligent" },
      "mj_prompt": "humanoid robot with visible sound wave visualization entering its head, text bubbles forming around it, neural network patterns, dark background with blue accents --ar 9:16 --v 6.1 --s 350",
      "runway_prompt": null
    },
    {
      "shot_id": "S08",
      "tc_in": "0:24",
      "tc_out": "0:27",
      "duration": 3,
      "section": "BUILD",
      "narration": "Action — actually doing something.",
      "narration_hindi": "Action — actually kuch karna.",
      "asset": "VIDEO",
      "frame": "MS",
      "subject": "Robot hand picking up object smoothly",
      "animation": "Follow action",
      "camera": { "move": "follow", "speed": "medium" },
      "style": { "lighting": "Clean lab lighting", "mood": "capable, precise" },
      "mj_prompt": "robotic hand with sleek white fingers precisely picking up small object, smooth mechanical movement, lab setting, shallow depth of field --ar 9:16 --v 6.1 --s 400",
      "runway_prompt": "Robot hand reaches down and smoothly picks up object with precision"
    },
    {
      "shot_id": "S09",
      "tc_in": "0:27",
      "tc_out": "0:32",
      "duration": 5,
      "section": "BUILD",
      "narration": "You say 'pick up the red apple' — the robot sees, understands, and picks it up. Without any specific programming.",
      "narration_hindi": "Tum bolo 'red apple uthao' — robot dekhega, samjhega, aur uthayega. Bina kisi specific programming ke.",
      "asset": "IMAGE",
      "frame": "MS",
      "subject": "Robot arm reaching for red apple among fruits",
      "animation": "Slow zoom in",
      "camera": { "move": "zoom_in", "speed": "slow" },
      "style": { "lighting": "Natural soft lighting", "mood": "impressive, simple" },
      "mj_prompt": "sleek robot arm reaching toward red apple among various fruits on table, highlight on apple, modern kitchen setting, soft natural lighting, photorealistic --ar 9:16 --v 6.1 --s 400",
      "runway_prompt": null
    },
    {
      "shot_id": "S10",
      "tc_in": "0:32",
      "tc_out": "0:37",
      "duration": 5,
      "section": "CLIMAX",
      "narration": "The craziest part? These models can generalize. If you taught it only apples... it can pick up oranges too.",
      "narration_hindi": "Sabse crazy part? Ye models generalize kar sakte hain. Agar tune ise sirf apples sikhaaye... ye oranges bhi utha lega.",
      "asset": "IMAGE",
      "frame": "CU",
      "subject": "Split screen: apple training, orange execution",
      "animation": "Wipe transition",
      "camera": { "move": "static", "speed": "slow" },
      "style": { "lighting": "Clean demonstration lighting", "mood": "mind-blowing" },
      "mj_prompt": "split screen image, left side robot learning with apple, right side robot successfully picking orange, neural connection visualization between them, clean tech aesthetic --ar 9:16 --v 6.1 --s 350",
      "runway_prompt": null
    },
    {
      "shot_id": "S11",
      "tc_in": "0:37",
      "tc_out": "0:40",
      "duration": 3,
      "section": "CLIMAX",
      "narration": "Because it understands objects, doesn't just memorize them.",
      "narration_hindi": "Kyunki ye objects ko samajhta hai, sirf yaad nahi karta.",
      "asset": "IMAGE",
      "frame": "ECU",
      "subject": "Neural network visualization understanding object properties",
      "animation": "Slow zoom out",
      "camera": { "move": "zoom_out", "speed": "slow" },
      "style": { "lighting": "Dark with node highlights", "mood": "deep, intelligent" },
      "mj_prompt": "abstract neural network visualization, nodes connecting to form understanding of round fruit concept, data flowing between connections, deep blue and cyan colors, futuristic --ar 9:16 --v 6.1 --s 400",
      "runway_prompt": null
    },
    {
      "shot_id": "S12",
      "tc_in": "0:40",
      "tc_out": "0:43",
      "duration": 3,
      "section": "CLIMAX",
      "narration": "RT-2 has 55 billion parameters.",
      "narration_hindi": "RT-2 mein 55 billion parameters hain.",
      "asset": "TEXT",
      "frame": "TEXT",
      "subject": "55 BILLION counter animation",
      "animation": "Number count up",
      "camera": { "move": "static", "speed": "fast" },
      "style": { "lighting": "Dark background", "mood": "impressive scale" },
      "mj_prompt": null,
      "runway_prompt": null
    },
    {
      "shot_id": "S13",
      "tc_in": "0:43",
      "tc_out": "0:48",
      "duration": 5,
      "section": "CLIMAX",
      "narration": "Gemini Robotics can fold origami. Play cards.",
      "narration_hindi": "Gemini Robotics origami fold kar sakta hai. Cards khel sakta hai.",
      "asset": "IMAGE",
      "frame": "CU",
      "subject": "Robot hands delicately folding origami crane",
      "animation": "Slow zoom in",
      "camera": { "move": "zoom_in", "speed": "slow" },
      "style": { "lighting": "Soft focused lighting", "mood": "delicate, precise" },
      "mj_prompt": "robot hands with articulated fingers delicately folding origami paper crane, incredible precision, soft studio lighting, shallow depth of field, photorealistic detail --ar 9:16 --v 6.1 --s 450",
      "runway_prompt": null
    },
    {
      "shot_id": "S14",
      "tc_in": "0:48",
      "tc_out": "0:52",
      "duration": 4,
      "section": "REVEAL",
      "narration": "In 2025, it went on-device — meaning it runs inside the robot itself, no cloud needed.",
      "narration_hindi": "2025 mein ye on-device bhi aa gaya — matlab robot ke andar hi chalega, cloud ki zaroorat nahi.",
      "asset": "IMAGE",
      "frame": "ECU",
      "subject": "Chip inside robot head glowing",
      "animation": "Zoom into robot head",
      "camera": { "move": "zoom_in", "speed": "medium" },
      "style": { "lighting": "Internal glow", "mood": "self-contained, powerful" },
      "mj_prompt": "cutaway view of robot head showing glowing AI chip inside, neural pathways lighting up, no external connections, self-contained intelligence, blue and white color scheme --ar 9:16 --v 6.1 --s 400",
      "runway_prompt": null
    },
    {
      "shot_id": "S15",
      "tc_in": "0:52",
      "tc_out": "0:56",
      "duration": 4,
      "section": "REVEAL",
      "narration": "In the next 5 years, you'll have a robot at home that works by listening to you.",
      "narration_hindi": "Agle 5 saal mein tumhare ghar mein ek robot hoga jo tumhari baat sunkar kaam karega.",
      "asset": "IMAGE",
      "frame": "WS",
      "subject": "Friendly robot in modern home helping family",
      "animation": "Slow pan",
      "camera": { "move": "pan_L", "speed": "slow" },
      "style": { "lighting": "Warm home lighting", "mood": "hopeful, domestic" },
      "mj_prompt": "friendly humanoid robot in modern living room helping family, warm afternoon lighting, cozy home interior, robot handing object to smiling person, near-future aesthetic --ar 9:16 --v 6.1 --s 350",
      "runway_prompt": null
    },
    {
      "shot_id": "S16",
      "tc_in": "0:56",
      "tc_out": "0:60",
      "duration": 4,
      "section": "HOOK_OUT",
      "narration": "The future has arrived. It just needs to be delivered.",
      "narration_hindi": "Future aa chuka hai. Bas deliver hona baaki hai.",
      "asset": "VIDEO",
      "frame": "MS",
      "subject": "Robot walking toward camera confidently",
      "animation": "Robot approaches",
      "camera": { "move": "static", "speed": "slow" },
      "style": { "lighting": "Backlit silhouette", "mood": "powerful, inevitable" },
      "mj_prompt": "silhouette of humanoid robot walking toward camera, bright backlight, dramatic fog, cinematic composition, future is now aesthetic --ar 9:16 --v 6.1 --s 450",
      "runway_prompt": "Robot silhouette walks confidently toward camera through atmospheric lighting"
    }
  ]
};

const topic103 = {
  "topic_id": 103,
  "title": "Nobel Prize 2024: The Godfathers of AI",
  "title_hindi": "Nobel Prize 2024: AI Ke Godfathers",
  "category": "News",
  "duration_sec": 90,
  "total_shots": 22,
  "content_type": "shorts",
  "shot_breakdown": {
    "video_shots": 2,
    "image_shots": 18,
    "text_shots": 2
  },
  "hook": "Physics ka Nobel Prize... AI ko mila? Haan. 2024 mein do scientists ne wo kiya jo impossible tha — machines ko sochna sikhaya.",
  "hook_english": "The Nobel Prize in Physics... went to AI? Yes. In 2024, two scientists did the impossible — they taught machines to think.",
  "script_hindi": `Physics ka Nobel Prize... AI ko mila? Haan. 2024 mein do scientists ne wo kiya jo impossible tha — machines ko sochna sikhaya.

John Hopfield. 91 saal ke. Princeton professor.

Geoffrey Hinton. 76 saal ke. Google chhod diya taaki AI ke dangers ke baare mein freely bol sake.

Inki kahani 1980s mein shuru hoti hai.

Hopfield ne 1982 mein ek network banaya. Idea physics se liya — atomic spin. Har atom ek tiny magnet hai. Usne socha — agar neurons bhi aise kaam karein toh?

Result? Ek network jo patterns yaad rakh sakta hai. Aur incomplete information se complete picture bana sakta hai.

Phir aaya Hinton. Usne Hopfield network ko aur aage le gaya. Boltzmann machine banaya. Statistical physics use karke.

Iska matlab? Machine khud seekh sakti hai. Bina bataye ki kya important hai.

In dono ki discoveries ke bina... koi ChatGPT nahi hota. Koi image recognition nahi hota. Koi self-driving car nahi hoti.

Irony dekho. Hinton ab AI ke sabse bade critics mein se ek hai. Kehta hai — "Humne kuch aisa bana diya jo humse zyada smart ho sakta hai."

11 million Swedish Krona. Do logon mein baanta gaya.

Lekin unka actual contribution? Priceless.

Ye hai 2024 ka Physics Nobel. AI ke godfathers ko.`,
  "script_english": `The Nobel Prize in Physics... went to AI? Yes. In 2024, two scientists did the impossible — they taught machines to think.

John Hopfield. 91 years old. Princeton professor.

Geoffrey Hinton. 76 years old. Left Google so he could freely speak about the dangers of AI.

Their story begins in the 1980s.

In 1982, Hopfield created a network. He took the idea from physics — atomic spin. Every atom is a tiny magnet. He thought — what if neurons work the same way?

Result? A network that can remember patterns. And create complete pictures from incomplete information.

Then came Hinton. He took the Hopfield network further. Created the Boltzmann machine. Using statistical physics.

What does this mean? The machine can learn on its own. Without being told what's important.

Without these two discoveries... there would be no ChatGPT. No image recognition. No self-driving cars.

The irony? Hinton is now one of AI's biggest critics. He says — "We created something that might become smarter than us."

11 million Swedish Krona. Split between two people.

But their actual contribution? Priceless.

This is the 2024 Physics Nobel. For the godfathers of AI.`,
  "style": {
    "color_palette": {
      "primary": "#F59E0B",
      "secondary": "#1F2937",
      "accent": "#FCD34D",
      "background": "Dark with gold accents"
    },
    "lighting": "Prestigious, warm gold tones, Nobel ceremony aesthetic",
    "reference": "Documentary style, The Social Network, historical footage"
  },
  "social_media": {
    "youtube": {
      "title": "AI Ko Nobel Prize Kaise Mila? 🏆 #shorts",
      "description": "2024 Physics Nobel Prize gaya John Hopfield aur Geoffrey Hinton ko.\n\nInhone 1980s mein AI ki foundation rakhi thi.\n\n🧠 Hopfield Network (1982)\n🤖 Boltzmann Machine\n💡 Modern AI ki neev\n\nBina inke: No ChatGPT, No Image Recognition, No Self-driving cars.\n\nHinton ab AI ke critic hain. Irony.",
      "tags": "Nobel Prize 2024, Physics Nobel, John Hopfield, Geoffrey Hinton, AI history, neural networks, machine learning, ChatGPT, artificial intelligence hindi, science news",
      "pinned_comment": "AI ke baare mein Hinton sahi keh rahe hain?\n\n👍 = Haan, danger hai\n👎 = Nahi, exaggeration hai"
    },
    "instagram": {
      "caption": "Physics Nobel 2024 🏆\n\nWinners:\n→ John Hopfield (91)\n→ Geoffrey Hinton (76)\n\nFor: Teaching machines to think\n\nWithout them:\n❌ No ChatGPT\n❌ No Image Recognition\n❌ No Self-driving cars\n\nHinton quit Google to warn us about AI. Irony? 🤔\n\n#NobelPrize #AI #Physics #Science"
    },
    "x": {
      "post": "Physics Nobel 2024 went to AI pioneers 🏆\n\nHopfield (91) + Hinton (76)\n→ Created neural networks in 1980s\n→ Foundation of ALL modern AI\n\nIrony: Hinton quit Google to warn about AI dangers.\n\nThe godfathers... now the critics."
    },
    "hashtags": "#shorts #NobelPrize #AI #Physics #Science #Hinton #Hopfield #news"
  },
  "shots": [
    {
      "shot_id": "S01",
      "tc_in": "0:00",
      "tc_out": "0:04",
      "duration": 4,
      "section": "HOOK",
      "narration": "The Nobel Prize in Physics... went to AI? Yes.",
      "narration_hindi": "Physics ka Nobel Prize... AI ko mila? Haan.",
      "asset": "IMAGE",
      "frame": "CU",
      "subject": "Nobel Prize medal with AI neural network reflection",
      "animation": "Slow zoom in",
      "camera": { "move": "zoom_in", "speed": "slow" },
      "style": { "lighting": "Golden prestigious lighting", "mood": "surprising, historic" },
      "mj_prompt": "Nobel Prize gold medal close-up, neural network pattern reflected on surface, dark velvet background, golden rim lighting, prestigious atmosphere --ar 9:16 --v 6.1 --s 450",
      "runway_prompt": null
    },
    {
      "shot_id": "S02",
      "tc_in": "0:04",
      "tc_out": "0:08",
      "duration": 4,
      "section": "HOOK",
      "narration": "In 2024, two scientists did the impossible — they taught machines to think.",
      "narration_hindi": "2024 mein do scientists ne wo kiya jo impossible tha — machines ko sochna sikhaya.",
      "asset": "IMAGE",
      "frame": "MS",
      "subject": "Two silhouettes with brain/neural network visualization",
      "animation": "Slow push in",
      "camera": { "move": "push", "speed": "slow" },
      "style": { "lighting": "Dramatic backlight", "mood": "legendary" },
      "mj_prompt": "two scientist silhouettes standing side by side, massive neural network hologram between them, dark dramatic background, blue and gold color scheme, epic cinematic composition --ar 9:16 --v 6.1 --s 400",
      "runway_prompt": null
    },
    {
      "shot_id": "S03",
      "tc_in": "0:08",
      "tc_out": "0:11",
      "duration": 3,
      "section": "CONTEXT",
      "narration": "John Hopfield. 91 years old. Princeton professor.",
      "narration_hindi": "John Hopfield. 91 saal ke. Princeton professor.",
      "asset": "IMAGE",
      "frame": "CU",
      "subject": "John Hopfield portrait, dignified elderly scientist",
      "animation": "Slow zoom in",
      "camera": { "move": "zoom_in", "speed": "slow" },
      "style": { "lighting": "Warm portrait lighting", "mood": "wise, dignified" },
      "mj_prompt": "elderly scientist portrait, wise kind eyes, 90 years old, Princeton professor aesthetic, warm lighting, bookshelf background blur, documentary style photography --ar 9:16 --v 6.1 --s 350",
      "runway_prompt": null
    },
    {
      "shot_id": "S04",
      "tc_in": "0:11",
      "tc_out": "0:15",
      "duration": 4,
      "section": "CONTEXT",
      "narration": "Geoffrey Hinton. 76 years old. Left Google so he could freely speak about the dangers of AI.",
      "narration_hindi": "Geoffrey Hinton. 76 saal ke. Google chhod diya taaki AI ke dangers ke baare mein freely bol sake.",
      "asset": "IMAGE",
      "frame": "CU",
      "subject": "Geoffrey Hinton portrait, concerned expression",
      "animation": "Slow push in",
      "camera": { "move": "push", "speed": "slow" },
      "style": { "lighting": "Moody portrait lighting", "mood": "concerned, thoughtful" },
      "mj_prompt": "Geoffrey Hinton portrait, 76 year old scientist with beard, thoughtful concerned expression, dark background, moody dramatic lighting, documentary style --ar 9:16 --v 6.1 --s 350",
      "runway_prompt": null
    },
    {
      "shot_id": "S05",
      "tc_in": "0:15",
      "tc_out": "0:18",
      "duration": 3,
      "section": "CONTEXT",
      "narration": "Their story begins in the 1980s.",
      "narration_hindi": "Inki kahani 1980s mein shuru hoti hai.",
      "asset": "IMAGE",
      "frame": "WS",
      "subject": "1980s computer lab, vintage terminals",
      "animation": "Slow pan",
      "camera": { "move": "pan_R", "speed": "slow" },
      "style": { "lighting": "Warm vintage", "mood": "nostalgic, origins" },
      "mj_prompt": "1980s university computer lab, vintage CRT monitors, scientists working, warm tungsten lighting, retro technology aesthetic, film grain, nostalgic atmosphere --ar 9:16 --v 6.1 --s 350",
      "runway_prompt": null
    },
    {
      "shot_id": "S06",
      "tc_in": "0:18",
      "tc_out": "0:23",
      "duration": 5,
      "section": "BUILD",
      "narration": "In 1982, Hopfield created a network. He took the idea from physics — atomic spin. Every atom is a tiny magnet.",
      "narration_hindi": "Hopfield ne 1982 mein ek network banaya. Idea physics se liya — atomic spin. Har atom ek tiny magnet hai.",
      "asset": "IMAGE",
      "frame": "ECU",
      "subject": "Atomic spin visualization, tiny magnets aligning",
      "animation": "Slow zoom out",
      "camera": { "move": "zoom_out", "speed": "slow" },
      "style": { "lighting": "Scientific visualization", "mood": "educational, fascinating" },
      "mj_prompt": "atomic spin visualization, multiple atoms shown as tiny magnets with arrows indicating spin direction, physics diagram aesthetic, dark background, blue and red magnetic field lines --ar 9:16 --v 6.1 --s 400",
      "runway_prompt": null
    },
    {
      "shot_id": "S07",
      "tc_in": "0:23",
      "tc_out": "0:26",
      "duration": 3,
      "section": "BUILD",
      "narration": "He thought — what if neurons work the same way?",
      "narration_hindi": "Usne socha — agar neurons bhi aise kaam karein toh?",
      "asset": "IMAGE",
      "frame": "ECU",
      "subject": "Neuron network mimicking atomic structure",
      "animation": "Morph transition",
      "camera": { "move": "static", "speed": "slow" },
      "style": { "lighting": "Bio-tech fusion", "mood": "eureka moment" },
      "mj_prompt": "split visualization, atoms on left morphing into neurons on right, showing parallel structure, scientific diagram style, blue bioluminescent neurons, physics meets biology --ar 9:16 --v 6.1 --s 400",
      "runway_prompt": null
    },
    {
      "shot_id": "S08",
      "tc_in": "0:26",
      "tc_out": "0:31",
      "duration": 5,
      "section": "BUILD",
      "narration": "Result? A network that can remember patterns. And create complete pictures from incomplete information.",
      "narration_hindi": "Result? Ek network jo patterns yaad rakh sakta hai. Aur incomplete information se complete picture bana sakta hai.",
      "asset": "IMAGE",
      "frame": "MS",
      "subject": "Hopfield network completing partial image",
      "animation": "Image completion animation",
      "camera": { "move": "static", "speed": "slow" },
      "style": { "lighting": "Clean diagram style", "mood": "impressive capability" },
      "mj_prompt": "visualization of neural network completing partial pixelated face image, left side corrupted right side reconstructed, data flow visualization, clean technical aesthetic --ar 9:16 --v 6.1 --s 350",
      "runway_prompt": null
    },
    {
      "shot_id": "S09",
      "tc_in": "0:31",
      "tc_out": "0:36",
      "duration": 5,
      "section": "BUILD",
      "narration": "Then came Hinton. He took the Hopfield network further. Created the Boltzmann machine. Using statistical physics.",
      "narration_hindi": "Phir aaya Hinton. Usne Hopfield network ko aur aage le gaya. Boltzmann machine banaya. Statistical physics use karke.",
      "asset": "IMAGE",
      "frame": "MS",
      "subject": "Boltzmann machine diagram, complex network",
      "animation": "Slow zoom in",
      "camera": { "move": "zoom_in", "speed": "slow" },
      "style": { "lighting": "Technical diagram", "mood": "complex, advanced" },
      "mj_prompt": "Boltzmann machine neural network diagram, interconnected nodes with probability weights, statistical physics equations floating nearby, dark background with glowing connections --ar 9:16 --v 6.1 --s 400",
      "runway_prompt": null
    },
    {
      "shot_id": "S10",
      "tc_in": "0:36",
      "tc_out": "0:40",
      "duration": 4,
      "section": "BUILD",
      "narration": "What does this mean? The machine can learn on its own. Without being told what's important.",
      "narration_hindi": "Iska matlab? Machine khud seekh sakti hai. Bina bataye ki kya important hai.",
      "asset": "VIDEO",
      "frame": "MS",
      "subject": "Neural network self-organizing, patterns emerging",
      "animation": "Time-lapse of learning",
      "camera": { "move": "static", "speed": "slow" },
      "style": { "lighting": "Dynamic node lighting", "mood": "autonomous, intelligent" },
      "mj_prompt": "neural network visualization with nodes lighting up in patterns, self-organizing behavior, no external input shown, autonomous learning visualization, blue and purple color scheme --ar 9:16 --v 6.1 --s 400",
      "runway_prompt": "Neural network nodes light up in sequence showing autonomous pattern recognition"
    },
    {
      "shot_id": "S11",
      "tc_in": "0:40",
      "tc_out": "0:46",
      "duration": 6,
      "section": "CLIMAX",
      "narration": "Without these two discoveries... there would be no ChatGPT. No image recognition. No self-driving cars.",
      "narration_hindi": "In dono ki discoveries ke bina... koi ChatGPT nahi hota. Koi image recognition nahi hota. Koi self-driving car nahi hoti.",
      "asset": "IMAGE",
      "frame": "WS",
      "subject": "Montage: ChatGPT, face recognition, Tesla",
      "animation": "Quick cuts",
      "camera": { "move": "static", "speed": "fast" },
      "style": { "lighting": "Modern tech lighting", "mood": "impact, significance" },
      "mj_prompt": "triptych image showing ChatGPT interface, facial recognition scan, and Tesla self-driving car, all connected by neural network lines, modern technology montage, clean design --ar 9:16 --v 6.1 --s 350",
      "runway_prompt": null
    },
    {
      "shot_id": "S12",
      "tc_in": "0:46",
      "tc_out": "0:52",
      "duration": 6,
      "section": "CLIMAX",
      "narration": "The irony? Hinton is now one of AI's biggest critics. He says — 'We created something that might become smarter than us.'",
      "narration_hindi": "Irony dekho. Hinton ab AI ke sabse bade critics mein se ek hai. Kehta hai — 'Humne kuch aisa bana diya jo humse zyada smart ho sakta hai.'",
      "asset": "IMAGE",
      "frame": "CU",
      "subject": "Hinton looking concerned, AI shadow looming",
      "animation": "Slow push in",
      "camera": { "move": "push", "speed": "slow" },
      "style": { "lighting": "Dramatic shadow", "mood": "ominous, ironic" },
      "mj_prompt": "elderly scientist Geoffrey Hinton looking concerned, large ominous AI neural network shadow looming behind him, dramatic chiaroscuro lighting, worried expression, documentary style --ar 9:16 --v 6.1 --s 400",
      "runway_prompt": null
    },
    {
      "shot_id": "S13",
      "tc_in": "0:52",
      "tc_out": "0:55",
      "duration": 3,
      "section": "REVEAL",
      "narration": "11 million Swedish Krona. Split between two people.",
      "narration_hindi": "11 million Swedish Krona. Do logon mein baanta gaya.",
      "asset": "TEXT",
      "frame": "TEXT",
      "subject": "Prize amount display",
      "animation": "Number reveal",
      "camera": { "move": "static", "speed": "medium" },
      "style": { "lighting": "Gold accent", "mood": "prestigious" },
      "mj_prompt": null,
      "runway_prompt": null
    },
    {
      "shot_id": "S14",
      "tc_in": "0:55",
      "tc_out": "0:58",
      "duration": 3,
      "section": "REVEAL",
      "narration": "But their actual contribution? Priceless.",
      "narration_hindi": "Lekin unka actual contribution? Priceless.",
      "asset": "IMAGE",
      "frame": "WS",
      "subject": "Global AI network visualization spanning Earth",
      "animation": "Zoom out to global view",
      "camera": { "move": "zoom_out", "speed": "medium" },
      "style": { "lighting": "Global tech glow", "mood": "immense impact" },
      "mj_prompt": "Earth from space with glowing neural network connections spanning across continents, AI infrastructure visualization, blue and gold nodes, epic scale, cinematic --ar 9:16 --v 6.1 --s 450",
      "runway_prompt": null
    },
    {
      "shot_id": "S15",
      "tc_in": "0:58",
      "tc_out": "0:62",
      "duration": 4,
      "section": "HOOK_OUT",
      "narration": "This is the 2024 Physics Nobel. For the godfathers of AI.",
      "narration_hindi": "Ye hai 2024 ka Physics Nobel. AI ke godfathers ko.",
      "asset": "VIDEO",
      "frame": "MS",
      "subject": "Nobel ceremony, two laureates receiving medal",
      "animation": "Slow motion ceremony",
      "camera": { "move": "slow_zoom", "speed": "slow" },
      "style": { "lighting": "Prestigious ceremony lighting", "mood": "historic, honoring" },
      "mj_prompt": "Nobel Prize ceremony stage, two elderly scientists receiving medals from Swedish royalty, golden lighting, prestigious atmosphere, historic moment, documentary style --ar 9:16 --v 6.1 --s 400",
      "runway_prompt": "Slow motion of Nobel medal being placed in scientist's hands, golden light reflecting"
    }
  ]
};

// Main execution
const dataPath = path.join(__dirname, '..', 'public', 'data.json');
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

// Check if topics already exist
const existing102 = data.find(t => t.topic_id === 102);
const existing103 = data.find(t => t.topic_id === 103);

if (existing102) {
  console.log('⚠️  Topic 102 already exists, updating...');
  const idx = data.findIndex(t => t.topic_id === 102);
  data[idx] = topic102;
} else {
  data.push(topic102);
  console.log('✅ Added Topic 102: VLAs - Teaching Robots to See, Think, and Act');
}

if (existing103) {
  console.log('⚠️  Topic 103 already exists, updating...');
  const idx = data.findIndex(t => t.topic_id === 103);
  data[idx] = topic103;
} else {
  data.push(topic103);
  console.log('✅ Added Topic 103: Nobel Prize 2024 - The Godfathers of AI');
}

// Sort by topic_id
data.sort((a, b) => a.topic_id - b.topic_id);

fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
console.log(`\n📊 Total topics: ${data.length}`);
console.log('💾 Saved to public/data.json');
