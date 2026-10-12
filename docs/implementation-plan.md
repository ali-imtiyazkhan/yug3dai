# Yug3DAI Implementation Plan

> **Last updated:** 2026-10-11
> **Stack:** Next.js 16 App Router + TypeScript (strict) + Tailwind CSS v4

---

## Route Map

| Route | Page Component | Content Source | Priority |
|---|---|---|---|
| `/` | `app/page.tsx` | Live homepage sections | M3 |
| `/about-yug3dai` | `app/about-yug3dai/page.tsx` | Live about page | M4 |
| `/ai-services` | `app/ai-services/page.tsx` | Live AI services page | M4 |
| `/3d-services` | `app/3d-services/page.tsx` | Live 3D printing page | M4 |
| `/am-designing-optimization-and-prototyping` | `app/am-designing-optimization-and-prototyping/page.tsx` | Live page | M4 |
| `/am-application-engineering` | `app/am-application-engineering/page.tsx` | Live page | M4 |
| `/cad-engineering-service` | `app/cad-engineering-service/page.tsx` | Live page | M4 |
| `/contact-us` | `app/contact-us/page.tsx` | Live contact page | M4 |
| `/learn-centre` | `app/learn-centre/page.tsx` | Blog listing | M5 |
| `/blog/[slug]` | `app/blog/[slug]/page.tsx` | Blog articles | M5 |
| `/privacy-policy` | `app/privacy-policy/page.tsx` | If content available | M4 |
| `/sitemap.xml` | `app/sitemap.ts` | Auto-generated | M6 |
| `/robots.txt` | `app/robots.ts` | Auto-generated | M6 |

## Component Map

### Layout Components (`src/components/layout/`)
- `Header.tsx` — Logo, desktop nav, 3D Printing dropdown, mobile hamburger
- `MobileNav.tsx` — Slide-out mobile navigation
- `Footer.tsx` — Service/company/blog links, social, copyright
- `WhatsAppButton.tsx` — Floating CTA (bottom-right)

### Home Page Components (`src/components/home/`)
- `Hero.tsx` — Headline, supporting copy, two CTAs, network bg
- `AiServicesSection.tsx` — Brain illustration, service cards
- `ThreeDPrintingSection.tsx` — 3D printing illustration, service cards
- `FeaturedService.tsx` — Featured service block with image + CTA
- `LatestArticles.tsx` — Blog card grid from Learn Centre

### Shared UI (`src/components/ui/`)
- `Button.tsx` — Primary/secondary/outline variants
- `Container.tsx` — Max-width wrapper with padding
- `SectionHeading.tsx` — Consistent h2 styling
- `ServiceCard.tsx` — Reusable service card
- `BlogCard.tsx` — Blog listing card

### Content Pages
- Each page uses shared layout + page-specific content components
- Service pages share common patterns (hero banner, content blocks, CTAs)

### Forms (`src/components/forms/`)
- `ContactForm.tsx` — Client Component with validation, success/error states

## Content Strategy

- **Static content files** in `src/content/` as TypeScript data objects
- Blog posts stored as markdown files in `src/content/posts/` with frontmatter
- Content utility functions in `src/lib/content.ts`
- No database dependency
- No headless WordPress dependency

## Asset Strategy

1. Download original images from `yug3dai.com/wp-content/uploads/` to `public/images/`
2. Use `next/image` with local sources, proper `width`/`height`/`alt`
3. Optimize images for web (keep originals as source of truth)
4. Logo stored at `public/images/logo.jpg`

## Form/Email Strategy

1. Build contact form UI with client-side validation
2. Create API route at `app/api/contact/route.ts`
3. Server-side validation and rate limiting
4. Email delivery: **pending configuration** — document integration interface
5. No hardcoded credentials; use environment variables

## SEO/Redirect Plan

### Metadata
- Use Next.js `Metadata` API on every page
- Preserve verified Yoast SEO titles and descriptions
- Add Open Graph metadata (title, description, image, URL)
- Add Twitter card metadata
- Generate `sitemap.xml` and `robots.txt`

### Redirects (in `next.config.ts`)
- `/fdm-vs-sla-vs-sls-complete-comparison-guide-for-2026/` → `/blog/fdm-vs-sla-vs-sls-complete-comparison-guide-for-2026/` (308)
- `/how-much-does-3d-printing-cost-in-india-in-2026/` → `/blog/how-much-does-3d-printing-cost-in-india-in-2026/` (308)
- `/pla-vs-abs-vs-petg-which-3d-printing-material-is-best-for-your-project/` → `/blog/pla-vs-abs-vs-petg-which-3d-printing-material-is-best-for-your-project/` (308)
- `/is-3d-printing-too-complex-expensive/` → `/blog/is-3d-printing-too-complex-expensive/` (308)

### Constants
- `QUOTE_APP_URL = "https://3dquote.yug3dai.com/"` in `src/lib/urls.ts`
- All quote CTAs use this constant

## Testing Checklist

- [ ] `npm run lint` passes
- [ ] `npx tsc --noEmit` passes
- [ ] `npm run build` succeeds
- [ ] All routes render without console errors
- [ ] Header navigation works (desktop + mobile)
- [ ] 3D Printing dropdown works
- [ ] Footer links work
- [ ] Quote CTAs open `https://3dquote.yug3dai.com/`
- [ ] WhatsApp button opens correct contact
- [ ] Contact form validates and shows states
- [ ] Blog posts render correct content
- [ ] Responsive at 375px, 768px, 1024px, 1440px
- [ ] Keyboard navigation works
- [ ] No broken images or 404s
- [ ] SEO metadata present on all pages
- [ ] Sitemap and robots.txt correct

## Deployment Checklist

- [ ] Production build succeeds
- [ ] Preview deployment reviewed by owner
- [ ] Full WordPress backup obtained
- [ ] DNS/hosting provider identified
- [ ] Rollback plan documented
- [ ] Analytics configuration confirmed
- [ ] Owner approval obtained
- [ ] Production domain pointed after approval

## Risks and Open Questions

1. **Missing XML export:** The WordPress WXR XML file is not in the workspace. Blog post full content needs to be extracted from the live site or the owner needs to provide the XML.
2. **WhatsApp number:** Cannot be extracted without inspecting the live site's Click to Chat plugin configuration.
3. **Contact form email:** No SMTP/email provider details available.
4. **Analytics IDs:** Need owner to provide Google Analytics/Search Console IDs.
5. **Image licensing:** iStockPhoto images may have licensing restrictions.
6. **Privacy Policy:** No published privacy policy page found.
7. **`/data-driven-solution/`:** Unclear if this page should be migrated.

## Implementation Milestones

### M1 — Audit & Foundation ✅
- [x] Inspect repo and live site
- [x] Locate and inspect WordPress XML export (`yug3dai.WordPress.2026-10-11.xml`)
- [x] Create migration inventory (`docs/migration-inventory.md`)
- [x] Create implementation plan (`docs/implementation-plan.md`)
- [x] Set up brand tokens and typography
- [x] Create `src/lib/urls.ts` constants (centralized quote app URL and verified WhatsApp)
- [x] Download essential assets (`public/images/`)

### M2 — Shared Layout ✅
- [x] Header with desktop nav + 3D Printing dropdown + mobile menu (`src/components/layout/Header.tsx`)
- [x] Mobile navigation
- [x] Footer (`src/components/layout/Footer.tsx`)
- [x] WhatsApp floating button (`src/components/layout/WhatsAppButton.tsx`)
- [x] Root layout with metadata and OpenGraph (`app/layout.tsx`)

### M3 — Homepage ✅
- [x] Hero section with dual CTAs and metrics (`src/components/home/Hero.tsx`)
- [x] Dual Pillars section (`src/components/home/PillarsSection.tsx`)
- [x] AI services section (`src/components/home/AiSection.tsx`)
- [x] 3D printing section (`src/components/home/ThreeDSection.tsx`)
- [x] Pan-India additive manufacturing overview (`src/components/home/IndiaOverviewSection.tsx`)
- [x] Latest articles section (`src/components/home/BlogPreviewSection.tsx`)
- [x] Homepage component (`app/page.tsx`)

### M4 — Content Pages ✅
- [x] About page (`app/about-yug3dai/page.tsx`)
- [x] AI Services page (`app/ai-services/page.tsx`)
- [x] 3D Printing overview (`app/3d-services/page.tsx`)
- [x] AM Designing page (`app/am-designing-optimization-and-prototyping/page.tsx`)
- [x] AM Application Engineering page (`app/am-application-engineering/page.tsx`)
- [x] CAD Engineering page (`app/cad-engineering-service/page.tsx`)
- [x] Contact page with verified details & interactive form (`app/contact-us/page.tsx`)
- [x] Privacy Policy page (`app/privacy-policy/page.tsx`)

### M5 — Blog ✅
- [x] Learn Centre listing page (`app/learn-centre/page.tsx`)
- [x] Dynamic blog post routes (`app/blog/[slug]/page.tsx`)
- [x] Pre-rendered static generation for all 6 articles (`generateStaticParams`)
- [x] Complete content extraction from WordPress export (`src/content/posts.ts`)

### M6 — Integrations & SEO ✅
- [x] Contact form API route (`app/api/contact/route.ts`)
- [x] SEO metadata on all pages with OpenGraph & Twitter
- [x] Next.js dynamic sitemap generator (`app/sitemap.ts`)
- [x] Dynamic robots.txt (`app/robots.ts`)
- [x] Legacy URL 308 redirects in `next.config.ts`
- [x] Quote app isolation: all quote buttons target `https://3dquote.yug3dai.com/`
- [ ] Sitemap and robots
- [ ] Blog post redirects
- [ ] Canonical URLs
- [ ] Structured data

### M7 — QA & Deployment
- [ ] Responsive testing
- [ ] Accessibility audit
- [ ] Performance check
- [ ] Lint + type check + build
- [ ] Preview deployment
- [ ] Owner review
