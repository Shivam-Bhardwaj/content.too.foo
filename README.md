# Content.too.foo - Production Database

100 educational short-form videos (90 seconds each) for Hindi YouTube channel.

**Live:** https://content.too.foo

The website serves two purposes:
1. **Production Tracker** - Track progress from planned → in progress → published
2. **Reading Material** - Browse narrations, storyboards, and prompts like a blog

---

## Quick Start

```bash
# Clone the repo
git clone git@github.com:Shivam-Bhardwaj/content.too.foo.git
cd content.too.foo

# Install dependencies
npm install

# Start dev server with hot reloading
npm run dev
```

Dev server runs at `http://localhost:3000` - changes to files refresh automatically.

---

## Workflow

### Phase 1: Refine Content (WSL + Claude Code)

Work on prompts and narration using Claude Code in WSL:

1. **Start dev server** for live preview:
   ```bash
   npm run dev
   ```

2. **Edit storyboards** in `public/data.json`:
   - Refine English narration
   - Adjust Hindi narration (auto-converted units)
   - Polish Midjourney/Runway prompts
   - View changes instantly in browser

3. **Commit refinements**:
   ```bash
   git add public/data.json
   git commit -m "Refine topic X narration and prompts"
   git push
   ```

### Phase 2: Generate Assets

Once content is finalized, generate assets in this order:

#### 1. Cover Images (Midjourney)
Generate cover/thumbnail for each topic first - makes the website engaging immediately.

```
assets/
└── 001/
    └── midjourney/
        └── cover.png       # Main thumbnail
```

#### 2. Voice Narration
Generate audio for both languages:

```
assets/
└── 001/
    └── voice/
        ├── narration_en.mp3
        └── narration_hi.mp3
```

#### 3. Scene Images (Midjourney)
Key frames for each shot:

```
assets/
└── 001/
    └── midjourney/
        ├── cover.png
        ├── shot_01.png
        ├── shot_02.png
        └── ...
```

#### 4. Video Clips (Runway)
Animate the key frames:

```
assets/
└── 001/
    └── runway/
        ├── shot_01.mp4
        ├── shot_02.mp4
        └── ...
```

#### 5. Final Export
Combined video ready for upload:

```
assets/
└── 001/
    └── final/
        ├── final_youtube.mp4
        ├── final_instagram.mp4
        └── final_x.mp4
```

### Phase 3: Sync to Server

Upload assets to the production server:

```bash
# Sync specific topic
./scripts/sync-assets.sh 1 midjourney    # Just Midjourney assets
./scripts/sync-assets.sh 1 all           # All assets for topic 1

# Sync everything
./scripts/sync-assets.sh all
```

### Phase 4: Update Status

Track progress with the status script:

```bash
# Mark as in progress
node scripts/update-status.js 1 in_progress

# Mark as published with social links
node scripts/update-status.js 1 published \
  --youtube "https://youtube.com/shorts/xxx" \
  --instagram "https://instagram.com/reel/xxx" \
  --x "https://x.com/user/status/xxx"
```

Then commit and push:
```bash
git add public/status.json
git commit -m "Topic 1 published"
git push
```

---

## Project Structure

```
content.too.foo/
├── public/                    # Deployed to Cloudflare Pages
│   ├── index.html             # Interactive viewer
│   ├── data.json              # 100 storyboards with narration
│   ├── status.json            # Production status & social links
│   ├── _headers               # Caching headers
│   └── _redirects             # Redirect rules
│
├── assets/                    # Generated content (synced to server)
│   ├── 001/
│   │   ├── midjourney/        # Key frames, cover image
│   │   ├── runway/            # Video clips
│   │   ├── voice/             # Audio narration
│   │   └── final/             # Exported videos
│   ├── 002/
│   └── ...
│
├── scripts/
│   ├── sync-assets.sh         # Upload assets to server
│   ├── update-status.js       # Update topic status
│   └── add_hindi_narration.js # Add Hindi narration
│
├── data/                      # Source data
│   ├── Precision_Shorts_Storyboards_Master.json
│   └── final_entries.json
│
├── .github/workflows/
│   └── sync-assets.yml        # GitHub Actions asset sync
│
├── package.json
├── wrangler.toml
└── README.md
```

---

## Stats

| Metric | Count |
|--------|-------|
| Topics | 100 |
| Total Shots | 2,475 |
| Video Shots | 1,541 |
| Image Shots | 724 |
| Text Shots | 210 |
| Categories | 15 |

---

## Website Features

- **Status Tracking**: Planned → In Progress → Published
- **Progress Bar**: Visual completion percentage
- **Category Filters**: Filter by topic category
- **Status Filters**: Filter by production status
- **Search**: Find topics by title or category
- **Bilingual**: English + Hindi narration side by side
- **Export Prompts**: One-click copy for Midjourney/Runway
- **Social Links**: Direct links to published videos

---

## Server Setup

Assets are stored on: `144.126.145.3`

```bash
# SSH into server
ssh -i ~/.ssh/content_too_foo content@144.126.145.3

# Asset location
/home/content/assets/content/001-100/
```

GitHub Secrets configured:
- `DEPLOY_HOST`: Server IP
- `DEPLOY_USER`: `content`
- `DEPLOY_KEY`: Base64-encoded SSH private key

---

## Unit Conversions (Hindi Narration)

| Original | Converted |
|----------|-----------|
| $X million | ₹X crore (at 90₹/$) |
| X miles | X km |
| X feet | X meters |
| X pounds | X kg |
| X°F | X°C |
| X mph | X km/h |

---

## Deployment

**Auto Deploy**: Push to `main` → Cloudflare Pages builds automatically

**Manual Deploy**:
```bash
npm run deploy
# or
npx wrangler pages deploy public --project-name=precision-shorts
```

---

## Scripts Reference

| Script | Purpose |
|--------|---------|
| `npm run dev` | Start dev server with hot reload |
| `npm run deploy` | Deploy to Cloudflare Pages |
| `./scripts/sync-assets.sh` | Upload assets to server |
| `node scripts/update-status.js` | Update topic status |
| `node scripts/add_hindi_narration.js` | Regenerate Hindi narration |
