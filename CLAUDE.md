# CLAUDE.md - Project Context for AI Assistants

## Project Overview

**Content.too.foo** is a production database for 101 educational short-form videos (90 seconds each) for a Hindi YouTube channel. The website serves as both a production tracker and reading material.

**Live Site:** https://content.too.foo
**GitHub:** https://github.com/Shivam-Bhardwaj/content.too.foo

## Quick Commands

```bash
# Development
npm run dev                    # Start dev server with hot reload (localhost:3000)
npm run deploy                 # Deploy to Cloudflare Pages

# Status Management
node scripts/update-status.js <id> in_progress
node scripts/update-status.js <id> published --youtube URL --instagram URL --x URL

# Asset Sync
./scripts/sync-assets.sh <id> midjourney   # Sync Midjourney assets
./scripts/sync-assets.sh <id> all          # Sync all assets for topic
./scripts/sync-assets.sh all               # Sync everything to server
```

## File Structure

```
content.too.foo/
├── public/                    # Deployed to Cloudflare Pages
│   ├── index.html             # Main website (single-page app)
│   ├── data.json              # All 101 topics with storyboards
│   └── status.json            # Production status for each topic
├── assets/                    # Generated content (synced to server)
│   └── {id}/                  # e.g., 001/, 042/, 101/
│       ├── midjourney/        # Key frames (cover.png, shot_01.png...)
│       ├── runway/            # Video clips (shot_01.mp4...)
│       ├── voice/             # Narration (narration_en.mp3, narration_hi.mp3)
│       └── final/             # Exports (final_youtube.mp4...)
├── scripts/
│   ├── update-status.js       # Update topic status
│   ├── sync-assets.sh         # Upload assets to server
│   ├── add_hindi_narration.js # Generate Hindi narration
│   └── add_topic_101.js       # Example: adding new topic
└── data/                      # Source data backups
```

## Data Structure

### Topic Object (in data.json)

```javascript
{
  "topic_id": 101,
  "title": "English Title",
  "title_hindi": "Hindi Title",           // Optional
  "category": "Space",                     // Ancient, Disaster, Space, Physics, etc.
  "duration_sec": 90,
  "total_shots": 22,
  "shot_breakdown": {
    "video_shots": 0,
    "image_shots": 22,
    "text_shots": 0
  },
  "hook": "Opening hook in Hindi",
  "hook_english": "Opening hook in English",
  "script_hindi": "Full 90-second script in Hindi",
  "script_english": "Full 90-second script in English",
  "style": {
    "color_palette": { ... },
    "lighting": "Description",
    "reference": "Interstellar, Cosmos, Kurzgesagt"
  },
  "social_media": {
    "youtube": {
      "title": "Video Title 😱 #shorts",
      "description": "Full description with emojis...",
      "tags": "comma, separated, tags",
      "pinned_comment": "Engagement comment"
    },
    "instagram": {
      "caption": "Caption with #hashtags"
    },
    "x": {
      "post": "Tweet text"
    },
    "hashtags": "#common #hashtags"
  },
  "shots": [ ... ]  // Array of shot objects
}
```

### Shot Object

```javascript
{
  "shot_id": "S01",
  "tc_in": "0:00",
  "tc_out": "0:04",
  "duration": 4,
  "section": "HOOK",              // HOOK, CONTEXT, BUILD, CLIMAX, REVEAL, EXTENSION, HOOK_OUT
  "narration": "English narration for this shot",
  "narration_hindi": "Hindi narration for this shot",
  "asset": "IMAGE",               // IMAGE, VIDEO, TEXT
  "frame": "ECU",                 // ECU, CU, MS, WS, MICRO
  "subject": "What we see",
  "animation": "Slow zoom IN",    // Ken Burns style animation
  "camera": {
    "move": "zoom_in",            // zoom_in, zoom_out, pan_L, pan_R, static
    "speed": "slow"               // slow, medium, fast, very_slow
  },
  "style": {
    "lighting": "Description",
    "mood": "philosophical, awe"
  },
  "mj_prompt": "Full Midjourney prompt --ar 9:16",
  "runway_prompt": "Runway prompt if VIDEO asset"
}
```

### Status Object (in status.json)

```javascript
{
  "last_updated": "2026-01-18T00:00:00Z",
  "topics": {
    "7": {
      "status": "published",      // planned, in_progress, published
      "youtube_url": "https://...",
      "instagram_url": "https://...",
      "x_url": "https://..."
    }
  }
}
```

## Categories

| Category | Description | Visual Style |
|----------|-------------|--------------|
| Ancient | Historical mysteries | Epic documentary, warm gold tones |
| Disaster | Engineering failures | Tense thriller, high contrast |
| Space | Astrophysics | Sci-fi epic, deep blacks, blues |
| Physics | Physics concepts | Clean modern, electric blue |
| Chemistry | Chemical reactions | Scientific, molecular |
| Biology | Life sciences | Nature documentary, organic |
| Psychology | Mind & behavior | Intimate, shallow DoF |
| Genius | Inventor profiles | Biographical, warm |
| Modern | Modern standards | Technical, precise |
| Nature | Natural phenomena | Organic greens, flowing |
| Math | Mathematical concepts | Abstract, geometric |
| Unexpected | Surprising facts | Varied by topic |

## Workflow for Adding New Topics

### 1. From Claude Web Chat

When user provides a production document from Claude web:

1. Extract all fields (title, scripts, shots, social media)
2. Create topic object matching the data structure above
3. Add to `public/data.json`
4. Update status in `public/status.json`

Example script pattern:
```javascript
// scripts/add_topic_XXX.js
const topic = {
  topic_id: XXX,
  title: "...",
  // ... full structure
};

const data = JSON.parse(fs.readFileSync('public/data.json'));
data.push(topic);
fs.writeFileSync('public/data.json', JSON.stringify(data, null, 2));
```

### 2. Required Fields for New Topics

**Minimum:**
- topic_id, title, category, duration_sec
- shots array with: shot_id, narration, narration_hindi, asset, mj_prompt

**Ideal (like Topic 101):**
- Full Hindi + English scripts
- Hook in both languages
- All social media metadata
- Style notes and color palette
- Detailed shot objects with camera, animation, mood

## Hindi Narration Guidelines

### Unit Conversions (automatic)
| Original | Hindi |
|----------|-------|
| $X million | ₹X crore (at 90₹/$) |
| $X billion | ₹X arab (at 90₹/$) |
| X miles | X km |
| X feet | X meters |
| X pounds | X kg |
| X°F | X°C |
| X mph | X km/h |

### Style
- Conversational Hindi with English technical terms
- Short punchy sentences for 90-second format
- Hook must grab attention in first 3 seconds
- End with cliffhanger or call to wonder

## Server Information

**Asset Server:** 144.126.145.3
**User:** content
**SSH Key:** ~/.ssh/content_too_foo
**Remote Path:** /home/content/assets/content/

## Deployment

- **Auto:** Push to `main` → Cloudflare Pages builds automatically
- **Manual:** `npm run deploy` or `npx wrangler pages deploy public`

## Common Tasks

### Mark topic as published
```bash
node scripts/update-status.js 42 published \
  --youtube "https://youtube.com/shorts/xxx" \
  --instagram "https://instagram.com/reel/xxx"
```

### Add social media metadata to existing topic
Edit `public/data.json` and add `social_media` object to the topic.

### Regenerate Hindi narration for all topics
```bash
node scripts/add_hindi_narration.js
```

### Check topic count
```bash
cat public/data.json | grep '"topic_id"' | wc -l
```

## Website Features

1. **Filters:** Category, Status (Published/In Progress/Planned)
2. **Search:** By title or category
3. **Modal Tabs:**
   - Storyboard: Shot-by-shot with prompts
   - Script: Full Hindi/English narration
   - Social Media: Copy-paste content for YouTube/Instagram/X
4. **Export:** Midjourney prompts, Runway prompts, JSON
5. **Progress Bar:** Shows published percentage
6. **About:** Full workflow documentation

## Style Reference

| Aspect | Guideline |
|--------|-----------|
| Aspect Ratio | 9:16 (vertical shorts) |
| Duration | 90 seconds |
| Midjourney | --ar 9:16 --v 6.1 --s 300-450 |
| Animation | Ken Burns (slow zoom/pan) |
| Lighting | Single dominant source, rim lighting, volumetric |
| Reference | Interstellar, Cosmos, Kurzgesagt |

## Tips for AI Assistants

1. **Always use topic_id** - Not array index. Topic 101 is `topic_id: 101`.

2. **Hindi is primary** - This is a Hindi channel. English is reference only.

3. **Social media matters** - Include YouTube title/desc/tags, Instagram caption, X post.

4. **Preserve structure** - Match existing data structure exactly when adding topics.

5. **Status tracking** - Update status.json when topics change state.

6. **No hardcoded paths** - Use path.join and __dirname for scripts.

7. **Commit messages** - Include topic numbers and what changed.

8. **Test locally** - Run `npm run dev` to preview changes before pushing.
