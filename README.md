# FITLOG — Workout Library

A responsive workout library and daily training planner built with Next.js App Router and Tailwind CSS. Browse exercises, review details, add lifts to today's plan, and save workouts for later.

## Technologies
- Next.js App Router
- React
- Tailwind CSS
- JavaScript
- Lucide React icons
- React Hot Toast notifications
- Browser localStorage for plan persistence

## Features
1. Responsive dark UI inspired by the supplied FITLOG Figma designs.
2. Workout library with category tags, equipment, duration, calories, and rating.
3. Workout detail pages with specifications and instructions.
4. Add to today's plan with a five-workout daily limit.
5. Save workouts for later and switch between plan tabs.
6. Live exercise, minutes, and calories metrics.
7. Sort lists by duration, calories, or rating.
8. Mark planned workouts as done and remove entries.
9. localStorage persistence across reloads.
10. Loading and empty states, toast notifications, and a custom 404 page.

## Getting started
```bash
npm install
npm run dev
```
Visit http://localhost:3000.

## API
The app attempts to fetch workout data from `https://api.api-store.workers.dev/api/fitlog`. A built-in fallback dataset keeps the UI usable if the API is unavailable or its response shape differs. Adjust the normalizer in `lib/workouts.js` if your API uses different field names.

## Deployment
Import the repository into Vercel or Netlify and use the standard Next.js build settings. For Vercel, the defaults are sufficient.
