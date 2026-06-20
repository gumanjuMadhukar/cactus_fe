# Cactus IT Solution Frontend

Next.js public website for Cactus IT Solution.

## Features

- Next.js App Router
- Static fallback data matching Laravel API structure
- API integration layer in `lib/api.ts`
- API POST helper in `lib/client-api.ts`
- Animated hero with premium abstract Cactus OS visual
- Framer Motion UI animations
- GSAP ScrollTrigger story section
- Pages: Home, About, Services, Service detail, Portfolio, Portfolio detail, Blog, Blog detail, Careers, Contact

## Run

```bash
cp .env.example .env.local
npm install
npm run dev
```

## Connect backend

```env
NEXT_PUBLIC_API_BASE_URL=http://localhost:8000
```

When the Laravel API is unavailable, the frontend falls back to `data/site.ts` automatically.
