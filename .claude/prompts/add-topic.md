# Add New Topic Prompt

Use this when the user provides a production document for a new topic.

## Input Expected

A production document containing:
- Title (Hindi + English)
- Category
- Hook
- Full script (Hindi + English)
- Shot list with Midjourney prompts
- Social media metadata (YouTube, Instagram, X)

## Steps

1. Parse the production document
2. Extract topic_id (next available, check existing max)
3. Create topic object matching data structure in CLAUDE.md
4. Create a script file: `scripts/add_topic_{id}.js`
5. Run the script to add to data.json
6. Update status.json if needed
7. Commit and push

## Output Format

```javascript
const topic = {
  topic_id: XXX,
  title: "English Title",
  title_hindi: "Hindi Title",
  category: "Category",
  duration_sec: 90,
  total_shots: N,
  shot_breakdown: { video_shots: X, image_shots: Y, text_shots: Z },
  hook: "Hindi hook",
  hook_english: "English hook",
  script_hindi: `Full Hindi script...`,
  script_english: `Full English script...`,
  style: { ... },
  social_media: {
    youtube: { title, description, tags, pinned_comment },
    instagram: { caption },
    x: { post },
    hashtags: "..."
  },
  shots: [ ... ]
};
```

## Validation Checklist

- [ ] topic_id is unique and sequential
- [ ] All shots have narration_hindi
- [ ] All IMAGE shots have mj_prompt with --ar 9:16
- [ ] social_media has at least youtube.title
- [ ] Category matches existing categories
