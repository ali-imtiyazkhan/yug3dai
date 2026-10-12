# Yug3DAI Migration Inventory

> **Last updated:** 2026-10-11
> **Source:** Live website (yug3dai.com), Yoast sitemap, page-by-page HTML inspection

---

## Published Pages

| WordPress Title | Live URL | Type | Status | SEO Title | SEO Description | Featured Image | Target Next.js Route | Migration Status | Notes |
|---|---|---|---|---|---|---|---|---|---|
| Home | `/` | page | Published | Yug3DAI - AI & 3D Printing Individual or Combined Excellence | AI & 3D Printing Individual or Combined Excellence | Logo via Optimole | `/` | **To do** | Hero, AI section, 3D printing section, blog cards, WhatsApp button |
| About Yug3DAI | `/about-yug3dai/` | page | Published | About Yug3DAI: Innovative Solutions for Your Needs - Yug3DAI | Explore about Yug3DAI, where innovative technologies meet visionary solutions in AI and additive manufacturing. | Screenshot_2023-11-02_at_15.25.33-removebg-preview.png | `/about-yug3dai/` | **To do** | — |
| AI Services | `/ai-services/` | page | Published | AI Research & Development Services \| Custom AI Innovation Solutions - Yug3DAI | Accelerate innovation with AI research and development services. Build custom AI solutions, validate concepts, develop prototypes, and deploy intelligent systems. | image-edited.png | `/ai-services/` | **To do** | Canonical version confirmed live |
| 3D Printing Services | `/3d-services/` | page | Published | 3D printing - Yug3DAI | *(none set)* | image-4.png | `/3d-services/` | **To do** | Canonical version confirmed live |
| AM Designing, Optimization & Prototyping | `/am-designing-optimization-and-prototyping/` | page | Published | AM Designing, Optimization & Prototyping - Yug3DAI | *(none set)* | image-9.png (900x280) | `/am-designing-optimization-and-prototyping/` | **To do** | — |
| AM Application Engineering | `/am-application-engineering/` | page | Published | AM Application Engineering - Yug3DAI | *(none set)* | image-13.png (928x313) | `/am-application-engineering/` | **To do** | — |
| CAD Engineering Service | `/cad-engineering-service/` | page | Published | CAD Engineering Service - Yug3DAI | *(none set)* | image-21.png (321x244) | `/cad-engineering-service/` | **To do** | — |
| Contact Us | `/contact-us/` | page | Published | Contact us - Yug3DAI | *(none set)* | *(none)* | `/contact-us/` | **To do** | WPForms form; fields TBD |
| data-driven-solution | `/data-driven-solution/` | page | Published | data-driven-solution - Yug3DAI | *(none set)* | *(none)* | **Redirect or skip** | **Owner decision needed** | Appears to be old/placeholder page with no SEO value. No nav link to it. |

## Published Blog Posts

| WordPress Title | Live URL | Type | Published | Modified | SEO Title | SEO Description | Featured Image | Target Next.js Route | Migration Status |
|---|---|---|---|---|---|---|---|---|---|
| FDM vs SLA vs SLS: Complete Comparison Guide for 2026 | `/fdm-vs-sla-vs-sls-complete-comparison-guide-for-2026/` | post | 2026-10-03 | 2026-10-06 | FDM vs SLA vs SLS: Complete Comparison Guide for 2026 - Yug3DAI | *(from OG desc)* | istockphoto-1044776338-612x612-1.jpg | `/blog/fdm-vs-sla-vs-sls-complete-comparison-guide-for-2026/` | **To do** |
| How Much Does 3D Printing Cost in India in 2026? | `/how-much-does-3d-printing-cost-in-india-in-2026/` | post | 2026-10-03 | 2026-10-06 | How Much Does 3D Printing Cost in India in 2026? - Yug3DAI | Learn what affects 3D printing costs in India... | istockphoto-2207294214-612x612-1.jpg | `/blog/how-much-does-3d-printing-cost-in-india-in-2026/` | **To do** |
| PLA vs ABS vs PETG: Which Material Is Best? | `/pla-vs-abs-vs-petg-which-3d-printing-material-is-best-for-your-project/` | post | 2026-10-03 | 2026-10-06 | Which 3D Printing Material Is Best for Your Project? - Yug3DAI | Compare PLA, ABS, and PETG... | image-16.png (1600x900) | `/blog/pla-vs-abs-vs-petg-which-3d-printing-material-is-best-for-your-project/` | **To do** |
| Is 3D Printing Too Complex/Expensive? | `/is-3d-printing-too-complex-expensive/` | post | 2023-12-12 | 2023-12-13 | Is 3D printing costly and complex? - Yug3DAI | *(long OG desc)* | DALL-E generated image | `/blog/is-3d-printing-too-complex-expensive/` | **To do** |

## URL Redirect Plan

Blog posts currently live at root-level slugs. The migration plan nests them under `/blog/[slug]/`:
- **301 redirect** from `/fdm-vs-sla-vs-sls-complete-comparison-guide-for-2026/` → `/blog/fdm-vs-sla-vs-sls-complete-comparison-guide-for-2026/`
- **301 redirect** from `/how-much-does-3d-printing-cost-in-india-in-2026/` → `/blog/how-much-does-3d-printing-cost-in-india-in-2026/`
- **301 redirect** from `/pla-vs-abs-vs-petg-which-3d-printing-material-is-best-for-your-project/` → `/blog/pla-vs-abs-vs-petg-which-3d-printing-material-is-best-for-your-project/`
- **301 redirect** from `/is-3d-printing-too-complex-expensive/` → `/blog/is-3d-printing-too-complex-expensive/`

## Navigation Structure (verified from live site)

### Header
- About Yug3DAI → `/about-yug3dai/`
- AI Services → `/ai-services/`
- 3D Printing (dropdown):
  - 3D Printing Services → `/3d-services/`
  - AM Designing, Optimization & Prototyping → `/am-designing-optimization-and-prototyping/`
  - AM Application Engineering → `/am-application-engineering/`
  - CAD Engineering Service → `/cad-engineering-service/`
- Contact Us → `/contact-us/`

### Footer
- Service links, company links, Learn & Share links (exact structure TBD from live site)

## Media/Asset Inventory

All images served through Optimole CDN. Originals at `yug3dai.com/wp-content/uploads/`.

| Asset | Original WP Path | Used On | Status |
|---|---|---|---|
| Logo | `/wp-content/uploads/2023/11/logo_AI-1.jpg` (377x369) | All pages | **Need to download** |
| About hero | `/wp-content/uploads/2023/11/Screenshot_2023-11-02_at_15.25.33-removebg-preview.png` | About | **Need to download** |
| AI Services | `/wp-content/uploads/2023/11/image-edited.png` (978x978) | AI Services | **Need to download** |
| 3D Services | `/wp-content/uploads/2023/10/image-4.png` (207x206) | 3D Services | **Need to download** |
| AM Designing | `/wp-content/uploads/2023/10/image-9.png` (900x280) | AM Designing | **Need to download** |
| AM Engineering | `/wp-content/uploads/2023/10/image-13.png` (928x313) | AM Engineering | **Need to download** |
| CAD Engineering | `/wp-content/uploads/2023/10/image-21.png` (321x244) | CAD Engineering | **Need to download** |
| Blog: FDM | `/wp-content/uploads/2026/10/istockphoto-1044776338-612x612-1.jpg` | Blog | **Need to download** |
| Blog: Cost | `/wp-content/uploads/2026/10/istockphoto-2207294214-612x612-1.jpg` | Blog | **Need to download** |
| Blog: PLA | `/wp-content/uploads/2023/10/image-16.png` (1600x900) | Blog | **Need to download** |

## Verified Details (from WordPress XML Export)

1. **WhatsApp Contact:** Verified as `https://wa.me/918006854554?text=Hello,%20I%20need%20a%20quote%20for%20a%203D%20printing%20project.`
2. **Phone Number:** `(+91) 8006854554`
3. **Email Address:** `info@yug3dai.com`
4. **Office Address:** `Shop No. 34, 2nd Floor, Signum Plaza III, Sector 36, Sohna, Gurugram, Haryana 122103`
5. **Contact Form:** Otter Form with 3 fields: Name (text, required), Email (email, required), Message (textarea)
6. **Blog Posts:** All 6 published posts extracted directly from WordPress XML export with complete text, headers, and metadata.
7. **3D Quote Link:** Verified as `https://3dquote.yug3dai.com/` across all 3D printing CTAs.

## Open Questions Remaining

1. **Email Delivery Provider:** Need SMTP / Resend / SendGrid credentials to wire production contact form email dispatch. Form currently validates and logs safely.
2. **Google Analytics / GTM:** GTM ID to embed if desired by site owner.
