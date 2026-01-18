# Generate Social Media Content

Use this to add social media metadata to topics that don't have it.

## Input

- Topic ID
- The topic's script/narration (read from data.json)

## Output Structure

```javascript
"social_media": {
  "youtube": {
    "title": "Hook + emoji 😱 #shorts",        // Max 100 chars, punchy
    "description": "Multi-line description...", // Emojis, story, CTA
    "tags": "comma, separated, tags",           // 10-15 relevant tags
    "pinned_comment": "Engagement question"     // Optional
  },
  "instagram": {
    "caption": "Short hook\n\nCTA\n\n#hashtags" // 2200 char max
  },
  "x": {
    "post": "4 lines max, emojis, hook"         // 280 char max
  },
  "hashtags": "#common #tags #for #all"
}
```

## YouTube Guidelines

### Title (max 100 chars)
- Start with hook/surprise
- Use 1-2 emojis
- End with #shorts
- Example: `Ek Chamach = Himalaya 😱 #shorts`

### Description
- Open with the most shocking fact
- Add context and story
- Include call-to-action
- Use emojis strategically (🔥 ☄️ ⚫ 👀 👇)
- End with engagement prompt

### Tags
- Mix Hindi and English
- Include: topic name, category, "hindi", "shorts"
- Example: `neutron star hindi, space science hindi, astronomy hindi`

### Pinned Comment
- Ask a question
- Offer to explain more
- Use emoji reactions: 👍 💬

## Instagram Guidelines

### Caption
- Hook in first line (visible in preview)
- Short story or fact
- CTA: "Comment X for next video"
- 5-10 relevant hashtags at end

## X (Twitter) Guidelines

### Post (280 chars)
- 4 short punchy lines
- Each line = one thought
- End with teaser
- 2-3 emojis max

## Hindi Style

- Conversational, not formal
- Mix Hindi + English naturally
- Use relatable comparisons (chai ka chamach, Delhi jitna)
- End with curiosity hook

## Steps

1. Read topic from data.json
2. Understand the core hook/surprise
3. Generate social_media object
4. Add to topic in data.json
5. Commit and push

## Example for Neutron Star

```javascript
"youtube": {
  "title": "Ek Chamach = Himalaya 😱 #shorts",
  "description": "Tumhare haath mein jo carbon hai — woh kisi taare ke pet mein bana tha 🔥\n\nAur jab wo taara mara...",
  "tags": "neutron star hindi, space science hindi, astronomy hindi",
  "pinned_comment": "Black hole ki quantum physics samajhni hai? ⚫\n\n👍 = Haan bhai"
}
```
