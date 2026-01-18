# Update Topic Status Prompt

Use this when the user says they've published a video or started working on one.

## Triggers

- "I published topic X"
- "Video X is now live"
- "Started working on topic X"
- "Here are the links for topic X"

## Steps

1. Identify topic_id from user message
2. Determine new status: `planned`, `in_progress`, or `published`
3. Extract any social URLs provided
4. Update `public/status.json`
5. Commit and push

## Command

```bash
node scripts/update-status.js <topic_id> <status> [--youtube URL] [--instagram URL] [--x URL]
```

## Examples

```bash
# Mark as in progress
node scripts/update-status.js 42 in_progress

# Mark as published with links
node scripts/update-status.js 7 published \
  --youtube "https://youtube.com/shorts/abc123" \
  --instagram "https://instagram.com/reel/xyz789"
```

## If No Script Available

Directly edit `public/status.json`:

```json
{
  "topics": {
    "7": {
      "status": "published",
      "youtube_url": "https://...",
      "instagram_url": "https://..."
    }
  }
}
```
