

## Pokedex, gotta catch em all!
<p align="center">
<img width="250" alt="pokedex logo" src="https://github.com/enesergun/pokedex/assets/63712936/4dd444af-20cb-4a61-aa0a-ccb9b427bb81"/>
</p>
This application utilizes the Pokemon API to provide a comprehensive Pokemon listing and detail viewing experience. Users can easily browse through a list of all available Pokemon. Upon selecting a Pokemon, a detailed view is presented, showcasing its abilities, stats, and types.
<br />
<br />
<p align="center">
<img width="500" alt="pokedex logo" src="https://github.com/enesergun/pokedex/assets/63712936/bf0f4f99-ed7f-432b-b8cf-9bcaa6282388"/>
  <img width="250" alt="pokedex logo" src="https://github.com/enesergun/pokedex/assets/63712936/2993230d-f93d-41f8-a82e-82557ec74474"/>  
</p>

## 🔥 Featuring

- Next.js App Router
- Typescript
- Optimized for SEO using Next.js's Metadata
- Optimized for Core Web Vitals
- Styling with Tailwind CSS + shadcn/ui
- React Server Components (RSCs) and Suspense
- New fetching and caching paradigms

## 📁 Project Organization and File Colocation

Each folder represents a route segment that is mapped to a corresponding segment in a URL path.

```
pokedex
├── app
│   ├── error.tsx
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── pokemon-detail
│       └── [slug]
│           └── page.tsx
├── components
│   ├── detail
│   │   └── detail-content.tsx
│   ├── list
│   │   ├── poke-card.tsx
│   │   ├── poke-list.tsx
│   │   └── poke-search.tsx
│   ├── shared
│   │   ├── pagination-wrapper.tsx
│   │   └── skeletons.tsx
│   └── ui
│       ├── badge.tsx
│       ├── button.tsx
│       ├── card.tsx
│       ├── pagination.tsx
│       ├── progress.tsx
│       ├── separator.tsx
│       └── skeleton.tsx
├── components.json
├── lib
│   ├── data.ts
│   ├── definitions.ts
│   └── utils.ts
```

## ✈️ Core Web Vitals
Core Web Vitals (LCP, FID, CLS) are key metrics assessing webpage loading speed, interactivity, and visual stability, crucial for user satisfaction and search rankings. Optimizing them enhances website performance and visibility. 

**What was done in application?**
- Image Optimization for LCP
- Used Skeletons of components for CLS
- ... 

**Page speed report:**
<a target="_blank" href="https://page-speed.dev/pokedex-kohl-eight.vercel.app">page-speed.dev</a>

## 📞 Get Feedback

You can contact me via enesergun1515@gmail.com or through <a href="https://www.linkedin.com/in/enesergun/" >LinkedInd</a> to provide feedback on the project.
