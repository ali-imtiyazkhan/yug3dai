# Yug3DAI WordPress → Next.js Migration Plan

> **Purpose:** This document is the implementation brief for coding agents in Cursor, Antigravity, and OpenCode. Read it before changing code. Build a standalone Next.js website that replaces the main WordPress website while keeping the existing 3D Quote application separate and working.
>
> **Main site:** https://yug3dai.com  
> **Existing quote app:** https://3dquote.yug3dai.com/  
> **Current WordPress theme:** Blockskit Base 1.1.7  
> **Target stack:** Next.js App Router + TypeScript + Tailwind CSS

---

## 1. Project goal

Rebuild the main Yug3DAI website as a production-ready, responsive, standalone Next.js application.

The new site must preserve the current business content, key page URLs, blog content, SEO metadata, useful images/media, navigation, contact pathways, and the link to the existing 3D Quote application.

The final public website should not depend on WordPress running as its frontend or as a headless CMS. WordPress is the source to migrate away from. Content should live in the Next.js project or in a separately chosen content system only if the project owner explicitly approves it.

### Non-negotiable constraints

1. **Do not modify or break the live WordPress website during development.**
2. **Do not change DNS, hosting, domain settings, WordPress themes, or plugins.**
3. **Do not delete or deactivate WordPress plugins.**
4. **Do not assume the WordPress XML export contains the actual image/video files.** It contains content and media references; asset files may need to be retrieved separately.
5. **Keep `https://3dquote.yug3dai.com/` as a separate, existing application.** Buttons intended to request a 3D printing quote must continue to link to it.
6. Never invent page content, customer testimonials, statistics, certifications, prices, addresses, or contact details. Reuse verified source content or mark missing content for owner review.
7. Do not expose passwords, API keys, SMTP credentials, or other secrets in source code or documentation.
8. Do not publish the new site or replace the current site until the owner explicitly approves after testing.

---

## 2. Current site overview

The existing site presents Yug3DAI as a business combining AI services and 3D printing/additive manufacturing.

### Design observed from supplied screenshots

- White/light background with generous whitespace.
- Dark navy headings and blue-gray body copy.
- Deep teal rectangular call-to-action buttons.
- Pale blue geometric/network pattern in the home hero background.
- Header with Yug3DAI logo and navigation: About Yug3DAI, AI Services, 3D Printing dropdown, Contact Us.
- Home hero headline: **“AI & 3D Printing Individual Or Combined Excellence”**
- Hero supporting copy describes research-backed AI and 3D printing solutions.
- Two visible hero CTAs: **“Start 3D Printing Services”** and **“Explore AI Capabilities”**.
- AI section uses a brain/AI illustration and service cards.
- 3D printing section uses 3D printing/robot illustrations.
- A featured 3D Printing Services section includes an image, explanatory copy, and a “Read More” CTA.
- “Latest From The Learn Centre” section displays blog cards with thumbnail, title, author, and date.
- Light blue footer includes service links, company links, and Learn & Share links.
- Floating WhatsApp button appears at the bottom-right of pages.
- Some sections appear visually sparse or inconsistently spaced in the current site. Recreate the brand and content, but improve spacing, responsiveness, accessibility, and consistency without changing the business meaning.

The screenshots show the home page sections, not necessarily every section or exact ordering on the full page. Inspect the live website and exported content before finalizing.

### WordPress setup observed

- Theme: **Blockskit Base 1.1.7**.
- WordPress admin showed 20 page records: 13 published, 7 drafts, 1 trashed (the displayed totals can change; verify the XML and live site rather than relying only on screenshots).
- WordPress plugin list showed 14 plugins, 9 active and 5 inactive.
- Visible plugins included:
  - Advanced Import
  - Akismet Anti-spam (inactive)
  - Click to Chat
  - Hello Dolly (inactive)
  - Image optimization service by Optimole
  - Limit Login Attempts Reloaded
  - Otter – Page Builder Blocks & Extensions for Gutenberg
  - Sassy Social Share (inactive)
  - Simple Share Buttons Adder (inactive)
  - Site Kit by Google
  - Social Media and Share Icons (Ultimate Social Media)
  - WP Mail SMTP (inactive)
  - WPForms Lite
  - Yoast SEO
- These plugins must not be copied into Next.js. Identify which user-visible functions are actually used and implement or replace those features appropriately.

### Content/export observations

A WordPress WXR export was uploaded in this conversation: `yug3dai.WordPress.2026-10-11.xml`.

It is a **content export, not a complete site backup**. It contains pages/posts, taxonomy, some SEO metadata, template/navigation-related records, and media attachment references. It does not guarantee the actual media binary files or all WordPress settings/plugin configuration are included.

Observed/mentioned content includes:
- About Yug3DAI
- AI Services (several similarly titled published entries/versions exist)
- 3D Printing / 3D Printing Services
- AM Application Engineering
- AM Designing, Optimization & Prototyping
- CAD Engineering Service
- Contact us
- Privacy Policy draft
- Draft AI-related pages
- Learn Centre/blog posts
- Duplicate or similarly named AI Services and 3D Printing pages

The exported content and current live site may differ. Do not blindly migrate every draft, duplicate, or trashed page. Build an inventory and identify the live/canonical version of each page before publishing routes.

### Blog examples visible in the supplied screenshots

- “PLA Vs ABS Vs PETG: Which 3D Printing Material Is Best For Your Project?”
- “How Much Does 3D Printing Cost In India In 2026?”
- “FDM Vs SLA Vs SLS: Complete Comparison Guide For 2026”

Use exact article content, slug, publication date, metadata, and image assets from the export/live source where available. Do not recreate full articles from just the title.

---

## 3. Scope

### In scope

- Main website at `yug3dai.com`.
- Responsive home page.
- Header/navigation/dropdown and footer.
- About/company page.
- AI services overview and service details confirmed as public.
- 3D printing services overview.
- AM Designing, Optimization & Prototyping page.
- AM Application Engineering page.
- CAD Engineering Service page.
- Contact page and working form.
- Blog/Learn Centre listing and individual blog article routes.
- Privacy Policy, if confirmed/published and content can be obtained.
- Floating WhatsApp CTA, using the verified existing contact number/link.
- Quote CTAs that open `https://3dquote.yug3dai.com/`.
- SEO titles, descriptions, canonical URLs, Open Graph metadata, sitemap, robots, structured data where appropriate.
- Content/media migration inventory and redirect plan.
- Accessibility, responsive layout, performance, testing, and deployment documentation.

### Out of scope unless separately approved

- Rebuilding the 3D Quote application.
- Changing the quote application’s backend or database.
- Replacing its domain or moving it under the main Next.js app.
- Rebuilding WordPress admin/CMS capabilities.
- Building authentication, dashboards, e-commerce, payment, or quote-processing logic not confirmed on the main website.
- Changing DNS, hosting, or production deployment without owner approval.

---

## 4. First tasks for the coding agent

Before implementing, inspect the repository and source files. Do not assume the project is empty.

### Step 1: Inspect the workspace

- Check whether a Next.js project already exists.
- Read `package.json`, `tsconfig.json`, `next.config.*`, Tailwind setup, lint scripts, and existing components.
- Preserve useful existing work. Do not overwrite or regenerate a project unnecessarily.
- Check for the WordPress WXR XML in the workspace. If not present, ask the owner to place it in a safe local path or provide the relevant content. Do not fabricate its contents.

### Step 2: Create an inventory

Create `docs/migration-inventory.md` with a table containing:

- WordPress title
- Existing public URL / slug
- Content type (page/post)
- Published/draft/trash status
- Canonical version decision
- Featured image/media references
- SEO title/description
- Target Next.js route
- Migration status
- Notes / unresolved questions

Use the live website, WordPress export, and available screenshots as evidence. Flag duplicates for owner review instead of guessing.

### Step 3: Create an implementation plan

Create `docs/implementation-plan.md` with:
- route map
- component map
- content strategy
- asset strategy
- form/email strategy
- SEO/redirect plan
- testing checklist
- deployment checklist
- risks and open questions

Then begin implementation in small, testable increments.

---

## 5. Technical implementation requirements

### Framework and code

- Next.js with App Router.
- TypeScript in strict mode.
- Tailwind CSS.
- Use Server Components by default. Use Client Components only for interactive UI.
- Use semantic HTML and accessible controls.
- Use `next/image` for local or approved remote images, with correct dimensions/sizes and configured remote patterns when needed.
- Use `next/link` for internal navigation.
- Use reusable, typed components; avoid one huge page component.
- Avoid unnecessary dependencies and client-side JavaScript.
- Do not add a database unless a confirmed feature needs one.
- Do not introduce a headless WordPress dependency.
- Use current stable compatible package versions, and commit/package-lock changes consistently with the existing package manager.
- Follow the repository’s current linting/formatting conventions.

### Suggested structure

Adapt to the existing repository rather than blindly creating every file:

```text
src/
  app/
    layout.tsx
    page.tsx
    globals.css
    about-yug3dai/
      page.tsx
    ai-services/
      page.tsx
    3d-services/
      page.tsx
    am-designing-optimization-and-prototyping/
      page.tsx
    am-application-engineering/
      page.tsx
    cad-engineering-service/
      page.tsx
    contact-us/
      page.tsx
    learn-centre/
      page.tsx
    blog/
      [slug]/
        page.tsx
    privacy-policy/
      page.tsx
    sitemap.ts
    robots.ts
  components/
    layout/
      Header.tsx
      Footer.tsx
      MobileNavigation.tsx
    home/
      Hero.tsx
      AiServicesSection.tsx
      ThreeDPrintingSection.tsx
      FeaturedService.tsx
      LatestArticles.tsx
    blog/
      BlogCard.tsx
      ArticleContent.tsx
    forms/
      ContactForm.tsx
    ui/
      Button.tsx
      Container.tsx
      SectionHeading.tsx
      WhatsAppButton.tsx
  content/
    pages/
    posts/
  lib/
    content.ts
    seo.ts
    urls.ts
  types/
    content.ts
public/
  images/
  videos/
docs/
  migration-inventory.md
  implementation-plan.md
  testing-checklist.md
```

This is a starting suggestion, not a mandatory exact structure. Keep content easy to maintain. Markdown/MDX or typed local data may be suitable for static content and blog articles; select a strategy based on the actual export and document it. Do not copy unsafe or malformed WordPress HTML directly into the page without sanitization/controlled rendering.

---

## 6. Visual design requirements

### Brand tokens

Start with these approximate values based on screenshots, then tune them against the live site and actual logo/assets:

- Page background: white / very light neutral.
- Primary heading: dark navy, approximately `#1B243B`.
- Body copy: muted blue-gray, approximately `#465B86`.
- Primary CTA: deep teal, approximately `#164653`.
- Footer background: pale blue, approximately `#DDEFF2`.
- Hero decoration: subtle pale blue geometric network pattern.
- Typography: clean modern sans-serif; use an appropriate licensed web font or `next/font` option.

Do not treat these sample hex values as verified official brand colors. Inspect the real site and assets before finalizing.

### Layout principles

- Recreate the header with logo, desktop navigation, a usable 3D Printing dropdown, and a mobile menu.
- Keep hero content readable and the two CTA actions visible.
- Use consistent content widths, vertical rhythm, and section spacing.
- Use responsive two-column layouts where the original has image/text pairs.
- Use responsive service cards with consistent spacing and hover/focus states.
- Keep blog cards visually aligned and make each card clickable accessibly.
- Build a reusable footer with correct links.
- Keep the floating WhatsApp button positioned safely and ensure it does not cover important controls.
- Add proper loading/fallback behavior for missing assets.
- Ensure the page looks good at mobile, tablet, laptop, and wide desktop sizes.
- Do not use generic placeholder stock imagery when authentic existing assets can be recovered.

### Design quality bar

The goal is a polished business website, not a raw WordPress-to-HTML dump. Improve spacing and responsive behavior while preserving the brand, meaning, and recognizable visual identity. Do not invent new claims or change service meaning.

---

## 7. Routes and URL preservation

Treat URL preservation as a major requirement for SEO.

1. Collect all public WordPress page/post slugs from the XML and verify them against the live site.
2. Record the current public URL and intended Next.js route for every migrated item.
3. Preserve existing slugs where possible.
4. For any URL that must change, define an explicit permanent redirect (typically 301/308 as supported by the hosting setup).
5. Avoid multiple routes competing for the same content.
6. Resolve duplicate pages carefully. In particular, several AI Services and 3D Printing page records appear in WordPress.
7. Preserve article slugs, dates, metadata, and internal links when verified.
8. Ensure the canonical URL points to the intended production URL, not localhost or preview domains.
9. Keep `https://3dquote.yug3dai.com/` as an external application URL and verify every quote CTA.
10. Do not redirect all old pages to the home page as a shortcut.

Possible routes based on observed names include:
- `/`
- `/about-yug3dai/`
- `/ai-services/`
- `/3d-services/`
- `/am-designing-optimization-and-prototyping/`
- `/am-application-engineering/`
- `/cad-engineering-service/`
- `/contact-us/`
- `/learn-centre/`
- `/blog/[slug]/`
- `/privacy-policy/`

These are proposed routes, not all verified canonical URLs. Confirm exact live slugs before implementation.

---

## 8. Content migration

### Content source of truth

Use this order of preference:
1. Current published live page/post for what users see today.
2. WordPress WXR export for content, metadata, slugs, dates, and taxonomy.
3. Existing original media files.
4. Owner confirmation where sources conflict or are missing.

Do not use drafts as public pages unless the owner approves them.

### Content data

Create typed content structures for pages and posts. Store:
- title
- slug
- excerpt/summary
- body content
- publication date (posts)
- author (if appropriate)
- category/tags (if useful)
- featured image
- SEO title/description
- canonical URL when needed
- alt text for images where known

### Media assets

- The WXR file contains attachment URLs/metadata, but may not contain the binary files.
- Create an asset inventory from attachment URLs and live page references.
- Retrieve/download only assets that the owner is authorized to reuse.
- Keep original file names when sensible, use optimized formats when possible, and retain meaningful alt text.
- Store local assets under `public/images` or `public/videos` unless a documented external asset strategy is approved.
- Do not hotlink to the old WordPress media library as the permanent final strategy unless explicitly approved.
- If an asset cannot be recovered, list it in `docs/migration-inventory.md` and ask the owner rather than silently replacing it with a random image.
- Large videos should be optimized and handled intentionally, not copied without checking file size.

---

## 9. Forms, email, WhatsApp, and external quote flow

### 3D Quote application

Keep the quote application separate:
- Quote CTAs link to `https://3dquote.yug3dai.com/`.
- Do not rebuild or modify the quote application in this project.
- Test the links from desktop and mobile.
- Use a single constant for the quote URL to avoid inconsistent links.

Example:

```ts
// src/lib/urls.ts
export const QUOTE_APP_URL = "https://3dquote.yug3dai.com/";
```

Use the constant in quote CTA components. If the quote link should open in the same tab, use normal navigation. If a new tab is explicitly required, add `target="_blank"` and `rel="noopener noreferrer"`.

### WhatsApp

- Recreate the floating WhatsApp CTA only after verifying the exact official contact URL/number from the current site or owner.
- Do not invent a phone number.
- Ensure the icon has an accessible label and does not cover mobile controls.

### Contact form

- Inspect the current WPForms form fields, validation, recipient, and delivery behavior if accessible.
- The Next.js form must validate input on the server, show accessible success/error states, and avoid exposing SMTP/API secrets to the browser.
- Do not hardcode credentials.
- If SMTP/email provider details are unavailable, implement the UI and a documented server-side integration interface, then mark email delivery as pending configuration.
- Test spam protection/rate limiting where appropriate.
- Do not claim the form sends emails until the server-side provider has been configured and tested.

---

## 10. SEO, analytics, and performance

### SEO

- Preserve verified title tags, descriptions, slugs, and canonical URLs.
- Add page-specific metadata via Next.js Metadata API.
- Create `sitemap.ts` and `robots.ts`.
- Add Open Graph/social metadata and suitable image references.
- Add structured data only where factual information is verified.
- Avoid duplicate titles, duplicate canonical URLs, broken internal links, and accidental `noindex`.
- Preserve useful heading hierarchy and image alt text.
- If the old WordPress SEO plugin has metadata not present in visible content, extract it from the WXR export when possible.

### Analytics

- Check whether Site Kit indicates Google Analytics, Search Console, or other integrations.
- Do not add guessed tracking IDs.
- If tracking IDs are unavailable, document what needs owner configuration.
- Confirm analytics continues working only after the owner supplies/approves the configuration.

### Performance

- Use optimized local images and `next/image` when practical.
- Avoid loading large images or videos unnecessarily above the fold.
- Use lazy loading for below-the-fold images.
- Keep client components minimal.
- Check layout shift, font loading, responsive images, and accessibility.
- Target good Core Web Vitals, but do not claim scores without running real tests.

---

## 11. Accessibility and responsive behavior

- Use semantic `header`, `nav`, `main`, `section`, `article`, and `footer` landmarks.
- Provide visible keyboard focus.
- Ensure the dropdown and mobile menu work with keyboard and touch.
- Use descriptive accessible names for icon-only controls.
- Ensure adequate contrast and readable font sizes.
- Add alt text to meaningful images; use empty alt for decorative images.
- Associate form fields with labels and inline error messages.
- Respect reduced-motion preferences if animations are introduced.
- Check responsive breakpoints and avoid horizontal scrolling.

---

## 12. Testing and acceptance criteria

Do not mark the project complete until the following are verified.

### Functionality

- [ ] Home page loads without console errors.
- [ ] Header links work.
- [ ] Desktop 3D Printing dropdown works.
- [ ] Mobile navigation works with keyboard/touch.
- [ ] About page loads.
- [ ] AI Services page loads.
- [ ] 3D Printing overview loads.
- [ ] Each approved engineering service page loads.
- [ ] Learn Centre/blog listing loads.
- [ ] Individual blog posts render correct content and images.
- [ ] Contact form validates and displays success/error states.
- [ ] Actual email delivery is tested after credentials are configured.
- [ ] WhatsApp CTA points to the verified contact.
- [ ] Every 3D Quote CTA opens `https://3dquote.yug3dai.com/`.
- [ ] Footer links work.
- [ ] No important images, fonts, or routes return 404.
- [ ] No unapproved draft content is public.

### SEO and content

- [ ] Current public URL inventory completed.
- [ ] Canonical route chosen for each duplicate page.
- [ ] Important WordPress slugs preserved or redirected.
- [ ] Page titles/descriptions migrated where available.
- [ ] Sitemap and robots are correct.
- [ ] Blog dates and slugs are verified.
- [ ] No accidental `noindex`.
- [ ] No broken internal links.

### Quality

- [ ] Responsive checks at mobile, tablet, laptop, and desktop widths.
- [ ] Keyboard navigation and focus visible.
- [ ] Forms have labels and accessible errors.
- [ ] Images have suitable alt text.
- [ ] `npm run lint` passes (or project equivalent).
- [ ] `npx tsc --noEmit` passes where compatible with project scripts.
- [ ] `npm run build` passes.
- [ ] Links and forms tested manually.
- [ ] Preview deployment reviewed by the owner.

---

## 13. Deployment and launch plan

1. Build locally and keep WordPress live.
2. Use local assets and migrated content.
3. Run lint, TypeScript checks, build, and manual QA.
4. Deploy a preview/staging build without replacing production.
5. Review all pages with the owner.
6. Obtain a **full WordPress backup** (database and files) through the authorized host/admin before any production change. The WXR XML is not sufficient.
7. Identify the actual domain/DNS/hosting provider; do not assume it is known.
8. Prepare a rollback plan and redirects.
9. Only with explicit owner approval, point the main domain to the new deployment.
10. Keep the quote subdomain and application untouched.
11. Verify the live site, quote flow, contact form, SEO, redirects, and analytics after launch.
12. Keep the old site backup available for rollback.

Never change production DNS or hosting settings without a direct, explicit instruction from the owner.

---

## 14. Agent workflow and reporting

Coding agents (Cursor, Antigravity, OpenCode) should follow this process:

1. Inspect the current workspace before editing.
2. Summarize what already exists.
3. Create/maintain the migration inventory and implementation plan.
4. Work in small increments: foundation → header/footer → home → service pages → blog → contact → SEO → testing.
5. After each increment, run available checks and fix regressions.
6. Keep changes scoped and explain files created/changed.
7. Never claim that a feature works until it has been tested.
8. Track missing content/assets/secrets as open questions.
9. Ask the owner before making business-content decisions, deleting existing code, adding a database, or changing external integrations.
10. Keep WordPress and quote application untouched.

At each milestone, report:
- What was implemented
- Files changed
- Commands/checks run and their actual results
- What remains incomplete
- Any owner action required

---

## 15. Suggested implementation milestones

### Milestone 1 — Audit and foundation
- Inspect repo and XML.
- Create inventory and implementation plan.
- Initialize or adapt Next.js + TypeScript + Tailwind.
- Establish fonts, colors, container, buttons, and layout.

### Milestone 2 — Shared layout
- Header, responsive mobile navigation, dropdown, footer, WhatsApp button.
- Centralize route and quote URL constants.

### Milestone 3 — Homepage
- Hero and network background.
- AI section and service cards.
- 3D printing section and featured service.
- Latest Learn Centre articles.
- Responsive design.

### Milestone 4 — Content pages
- About page.
- AI Services page(s) after resolving duplicates.
- 3D Printing overview.
- AM Designing, AM Application Engineering, CAD Engineering.
- Contact and privacy pages where verified.

### Milestone 5 — Blog
- Blog listing and individual article routes.
- Import exact content, metadata, categories/tags, dates, images.
- Preserve slugs and internal links.

### Milestone 6 — Integrations and SEO
- Contact form backend/email provider after configuration.
- Verified WhatsApp link.
- Quote CTAs.
- Metadata, canonical URLs, sitemap, robots, redirects, analytics configuration.

### Milestone 7 — QA and deployment preparation
- Responsive/accessibility checks.
- Link and image checks.
- Lint, type check, production build.
- Preview deployment.
- Owner approval and launch checklist.

---

## 16. Open questions the agent must not guess

Record these in `docs/migration-inventory.md` or a separate `docs/open-questions.md`:

- Which exact WordPress AI Services page is canonical/live?
- Which exact 3D Printing page is canonical/live?
- What is the correct home page source and whether any separate “Homepage” draft is relevant?
- Are all blog post bodies, images, and metadata available in the WXR export?
- Where can the original uploaded images/videos be obtained?
- What is the verified WhatsApp contact URL/number?
- What fields does the current WPForms form use, and where are emails sent?
- Which analytics/Search Console IDs should be retained?
- What is the hosting/DNS provider for `yug3dai.com`?
- What is the current canonical URL/redirect behavior for each page?
- Are there any additional live forms or integrations not shown in screenshots?

The agent should resolve questions using evidence where possible and ask the owner for anything that cannot be verified.

---

## Final instruction to the coding agent

**Start by auditing the existing repository and the available WordPress XML. Do not immediately generate a generic website or overwrite existing code.** Build a migration inventory, confirm public routes and content, then implement a polished, responsive Next.js + TypeScript + Tailwind CSS site in stages. Keep the current WordPress site and the separate 3D Quote application untouched until the owner explicitly approves launch.
