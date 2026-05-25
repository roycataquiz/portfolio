# Portfolio — Data Engineer

> Production-grade personal portfolio built for senior data engineering roles.

## Tech Stack

| Layer | Technology | Why |
|---|---|---|
| Framework | Next.js 14 (App Router) | Static export for GitHub Pages + ISR for Vercel |
| Language | TypeScript | Type-safe content schema, zero runtime surprises |
| Styling | Tailwind CSS | Utility-first, zero unused CSS in prod |
| Animations | Framer Motion | Physics-based spring animations, reduced-motion aware |
| Theme | next-themes | SSR-safe dark/light with zero flash |
| Icons | Lucide | Consistent, tree-shaken icon system |
| Content | Centralized `lib/data.ts` | Single source of truth, typed, version-controlled |
| SEO | Next.js metadata API | OG, Twitter, sitemap, robots auto-generated |

## Architecture

```
portfolio/
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root layout + metadata + ThemeProvider
│   ├── page.tsx                  # Home page (composes all sections)
│   ├── globals.css               # Design tokens, Tailwind, typography
│   ├── sitemap.ts                # Auto-generated sitemap
│   ├── robots.ts                 # SEO robots config
│   └── projects/[slug]/          # Dynamic project case study pages
│       └── page.tsx
│
├── components/
│   ├── layout/                   # App chrome
│   │   ├── Navbar.tsx            # Sticky nav + active section highlighting
│   │   ├── Footer.tsx
│   │   └── ThemeProvider.tsx
│   │
│   ├── sections/                 # Page sections (one file per section)
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── AchievementsSection.tsx
│   │   ├── GithubSection.tsx
│   │   └── ContactSection.tsx
│   │
│   └── ui/                       # Reusable primitives
│       ├── Reveal.tsx            # Scroll-triggered animations
│       ├── SectionHeader.tsx     # Consistent section headings
│       └── ProjectCard.tsx       # Expandable project cards
│
├── lib/
│   ├── data.ts                   # ALL CONTENT HERE — edit to personalize
│   ├── types.ts                  # TypeScript data models
│   └── utils.ts                  # cn(), formatDate(), animation variants
│
├── content/projects/             # MDX case studies (future expansion)
│
└── .github/workflows/deploy.yml  # GitHub Pages CI/CD
```

## Quick Start

```bash
# Install
npm install

# Dev server
npm run dev

# Production build
npm run build

# Preview the static export
npx serve out
```

## Personalization — 3 Steps

### Step 1: Edit `lib/data.ts`
This is the single file containing ALL your portfolio content:
- `siteConfig` — your name, title, email, links
- `skillCategories` — your tech stack
- `projects` — your projects with full detail
- `experiences` — your work history
- `certifications` — your certs
- `achievements` — awards, scholarships

### Step 2: Update `public/`
- Add `resume.pdf`
- Add `og-image.png` (1200×630)
- Add `favicon.ico`

### Step 3: Deploy

**Vercel (recommended):**
```bash
npx vercel
```

**GitHub Pages:**
1. Push to `main` branch
2. Enable GitHub Pages (Settings → Pages → GitHub Actions)
3. The workflow deploys automatically

## Design System

### Colors
- **Primary**: `hsl(25, 95%, 53%)` — ember orange
- **Background**: adaptive (dark: `hsl(220, 20%, 6%)`, light: `hsl(220, 20%, 97%)`)
- **Muted**: surface-level variants for cards and badges

### Typography
- **Display** (headings): Playfair Display — editorial, distinctive
- **Body**: DM Sans — clean, optimized for readability
- **Mono** (code, labels): JetBrains Mono — technical precision

### Animation Principles
- Scroll-triggered reveals via `react-intersection-observer`
- Spring physics for interactive elements
- `prefers-reduced-motion` respected via Framer Motion
- No animations on initial page load > 1s delay

## Performance Targets

| Metric | Target |
|---|---|
| Lighthouse Performance | ≥ 95 |
| Lighthouse Accessibility | ≥ 98 |
| Lighthouse SEO | 100 |
| LCP | < 1.5s |
| FID | < 50ms |
| CLS | < 0.05 |

## Future Expansions

The architecture is designed to scale:

- **Blog**: Add `app/blog/[slug]/page.tsx` + MDX content in `content/posts/`
- **Testimonials**: Add `testimonials` array to `lib/data.ts` + new section
- **Analytics Dashboard**: Create `app/dashboard/page.tsx` with recharts
- **AI Chat**: Add API route `app/api/chat/route.ts` with Vercel AI SDK
- **Certifications auto-fetch**: Pull from Credly API via `generateStaticParams`
- **GitHub real data**: Use GitHub REST API in `generateStaticProps`
