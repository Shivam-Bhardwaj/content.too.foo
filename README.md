# Precision Shorts - Production Database

100 educational short-form videos (90 seconds each) for Hindi YouTube channel.

## Project Structure

```
├── public/           # Static website (deployed to Cloudflare Pages)
│   ├── index.html    # Interactive storyboard viewer
│   ├── data.json     # All 100 storyboards with Hindi narration
│   ├── _headers      # Cloudflare caching headers
│   └── _redirects    # Redirect rules
├── data/             # Source data files
│   ├── Precision_Shorts_Storyboards_Master.json
│   └── final_entries.json
└── scripts/          # Processing scripts
    └── add_hindi_narration.js
```

## Stats

- **100** Topics across 15 categories
- **2,475** Total shots
- **1,541** Video shots (Runway)
- **724** Image shots (Midjourney)
- **210** Text overlay shots

## Features

- Shot-by-shot storyboard for each topic
- English + Hindi narration (with Indian unit conversions)
- One-click export for Midjourney and Runway prompts
- Category filtering and search

## Deployment

Deployed to Cloudflare Pages at: https://content.too.foo

### Manual Deploy
```bash
npx wrangler pages deploy public --project-name=precision-shorts
```

### Auto Deploy
Push to `main` branch triggers automatic deployment via Cloudflare Pages.

## Unit Conversions (Hindi)

- USD → ₹ crore/lakh (at 90 Rs per dollar)
- Miles → Kilometers
- Feet → Meters
- Pounds → Kilograms
- Fahrenheit → Celsius
- MPH → km/h
