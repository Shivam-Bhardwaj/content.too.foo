# Refine Midjourney/Runway Prompts

Use this when user wants to improve AI generation prompts for a topic.

## Input

- Topic ID or title
- Specific shot(s) to refine
- Feedback on what's not working

## Midjourney Prompt Structure

```
[SUBJECT] [ACTION/POSE] [SETTING], [LIGHTING], [STYLE], [COMPOSITION] --ar 9:16 --v 6.1 --s [250-450]
```

### Key Elements
- **Subject**: Clear, specific description
- **Lighting**: "golden hour", "rim lighting", "volumetric rays"
- **Style**: "cinematic documentary", "photorealistic", "scientific visualization"
- **Mood**: Include emotional tone
- **Technical**: Always end with `--ar 9:16 --v 6.1 --s 300`

### Stylization Values
- `--s 250`: More literal, follows prompt closely
- `--s 350`: Balanced (recommended)
- `--s 450`: More artistic interpretation

## Runway Prompt Structure

```
[SUBJECT in ACTION], [CAMERA MOVEMENT], [LIGHTING/MOOD], [ATMOSPHERE], [MOTION DYNAMICS]
```

### Camera Movements
- "slow dolly forward"
- "gentle pan left to right"
- "static shot with subtle movement"
- "slow zoom in"
- "camera pulling back revealing..."

### Motion Keywords
- "slow contemplative pace"
- "dynamic movement"
- "subtle atmospheric motion"
- "particles drifting"

## Steps

1. Read the topic from data.json
2. Identify the problematic shots
3. Analyze current prompts
4. Rewrite with improvements
5. Update data.json
6. Commit with descriptive message

## Common Fixes

| Problem | Solution |
|---------|----------|
| Too generic | Add specific details, textures, materials |
| Wrong mood | Adjust lighting and color descriptions |
| Not vertical | Ensure --ar 9:16 is present |
| Static feeling | Add motion verbs and camera directions |
| Inconsistent style | Use same style tokens across all shots |
