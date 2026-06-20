# Cactus IT Solutions Laravel API Contract

This frontend can run without Laravel using static fallback data. When Laravel is ready, return the same shapes below.

## Base URL

Set this in `.env.local`:

```env
NEXT_PUBLIC_API_BASE_URL=http://localhost:8000
```

## Envelope support

The frontend supports both formats:

```json
{ "data": {} }
```

or direct JSON:

```json
{}
```

## GET /api/home

Returns all homepage content.

```json
{
  "data": {
    "siteConfig": {},
    "stats": [],
    "services": [],
    "processSteps": [],
    "projects": [],
    "techStack": [],
    "reasons": [],
    "testimonials": [],
    "blogs": [],
    "scrollStory": []
  }
}
```

## GET /api/settings/site

```json
{
  "data": {
    "name": "Cactus IT Solutions",
    "shortName": "Cactus",
    "url": "https://cactusitsolutions.com",
    "email": "hello@cactusitsolutions.com",
    "phone": "+977 9800000000",
    "location": "Kathmandu, Nepal",
    "tagline": "Sharp digital solutions for ambitious brands.",
    "description": "Cactus IT Solutions builds websites, apps, software, and digital growth systems.",
    "nav": [
      { "label": "Home", "href": "/" },
      { "label": "About", "href": "/about" }
    ]
  }
}
```

## Service object

Used by:

```txt
GET /api/services
GET /api/services/{slug}
```

```json
{
  "title": "Web Development",
  "slug": "web-development",
  "iconKey": "code",
  "eyebrow": "Fast, secure, scalable",
  "short": "Conversion-focused websites built with modern frontend, CMS control, and clean performance foundations.",
  "description": "We design and build high-performance websites that feel premium, load fast, and give your team simple content control through a CMS.",
  "features": ["Next.js websites", "Laravel CMS", "Landing pages", "Speed optimization"]
}
```

Allowed `iconKey` values:

```txt
app-window
bar-chart
blocks
cloud
code
cpu
layers
line-chart
lock
palette
rocket
search
shield
smartphone
workflow
```

## Project object

Used by:

```txt
GET /api/projects
GET /api/projects/{slug}
```

```json
{
  "title": "Luxury Brand Website",
  "slug": "luxury-brand-website",
  "category": "Website / CMS",
  "image": "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80",
  "summary": "A premium content-managed website with elegant visuals, SEO pages, and high-converting landing sections.",
  "result": "Stronger brand trust, faster editing, and improved campaign landing page control.",
  "tags": ["Next.js", "CMS", "SEO", "Animation"]
}
```

## Blog object

Used by:

```txt
GET /api/blogs
GET /api/blogs/{slug}
```

```json
{
  "title": "How a Laravel CMS gives your team better control",
  "slug": "laravel-cms-team-control",
  "category": "CMS",
  "date": "2026-05-21",
  "excerpt": "A custom CMS gives your business the freedom to manage pages, services, blogs, careers, and leads from one dashboard.",
  "content": "Full blog content goes here."
}
```

## Job object

Used by:

```txt
GET /api/careers
```

```json
{
  "title": "Frontend Developer",
  "slug": "frontend-developer",
  "type": "Full-time",
  "location": "Kathmandu / Remote",
  "summary": "Build modern Next.js interfaces with clean components, animation, and strong frontend performance.",
  "requirements": ["React and Next.js experience", "Strong Tailwind CSS skills"]
}
```

## POST /api/contact

Payload from frontend:

```json
{
  "name": "Client Name",
  "email": "client@example.com",
  "service": "Web Development",
  "message": "Project details"
}
```

Recommended Laravel response:

```json
{
  "message": "Inquiry received successfully."
}
```
