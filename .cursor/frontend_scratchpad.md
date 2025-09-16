# Harvard Student Representative Campaign Website Frontend Development

## Background and Motivation
A clean, professional, and trustworthy 3-page static campaign website for a Harvard student representative election. Priorities: credibility, clarity, fast loading, WCAG 2.1 AA accessibility, and compatibility with GitHub Pages. Design language emphasizes Harvard crimson accents, academic tone, and generous whitespace.

## Key Challenges and Analysis
- Pure HTML/CSS/vanilla JS: no frameworks; keep JS minimal and progressively enhance.
- Accessibility: WCAG 2.1 AA for navigation, color contrast, keyboard flows, semantics, and media alt text.
- Performance: optimized images (WebP), minimal CSS/JS, fast LCP on landing hero.
- Responsive layout: mobile-first with grid/flex and careful typography scale.
- SEO: semantic structure, meta tags, social sharing (Open Graph/Twitter), structured data on About.
- GitHub Pages constraints: static hosting, no server code; optional contact form via Formspree.

## High-level Task Breakdown
1) Initialize repository and base structure
- Create files: `index.html`, `about.html`, `initiatives.html`.
- Create directories: `css/` (`main.css`, `responsive.css`), `js/` (`main.js`), `images/` (including `icons/`), `assets/` (`favicon.ico`).
- Add project meta: `.gitignore`, `README.md`, optional `CNAME`.
- Success: Repo skeleton builds locally, pages load with base scaffold and shared header/footer.

2) Global styles, tokens, and typography
- CSS variables for palette: primary `#A51C30`, secondary `#1E3A8A`, text, background, accent.
- Typography: headings `Inter, sans-serif` (with `font-display: swap`), body `system-ui, sans-serif`.
- Base styles: reset/normalize, fluid type scale, spacing scale, focus-visible outlines, container widths.
- Responsive breakpoints: mobile (<768px), tablet (768–1024px), desktop (>1024px).
- Success: Consistent visual system across pages; color contrast >= AA; readable at all sizes.

3) Navigation (sticky header, mobile hamburger)
- Semantic `<header>`/`<nav>`, skip link, sticky positioning, active page indicator.
- Mobile menu toggle (button with `aria-controls`, `aria-expanded`), smooth scroll, ESC closes menu.
- Success: Fully keyboard-accessible, screen-reader friendly; no scroll-jank; correct active link.

4) Landing page (hero + CTA)
- Full-height hero with professional photo background (optimized WebP) and gradient overlay.
- Prominent candidate name, slogan (e.g., “No One Left Behind”), position tagline; primary CTA to About.
- Success: Text legible over image at all sizes; LCP image optimized; lighthouse perf > 90.

5) About page (responsive split layout + socials)
- Split grid (photo/content) that stacks on mobile; accessible alt text for headshot.
- Sections: Background & Education, Experience & Leadership (bulleted), Vision & Values.
- Social links (LinkedIn, Instagram, Email) with clear labels and hover/focus states.
- Success: Layout reflows cleanly; headings hierarchy correct; links keyboard/focus-visible.

6) Initiatives page (accessible accordion)
- Accordion per WAI-ARIA Authoring Practices: button toggles with `aria-expanded`, `aria-controls`, panel regions with `role="region"` and `aria-labelledby`.
- Categories: Education & Academic Affairs, Student Life & Community, Career & Professional Development, Advocacy & Representation.
- Smooth expand/collapse animation, rotate icons on expand; all collapsed by default.
- Success: Keyboard (Enter/Space) toggles; ARIA states accurate; optional arrow-key navigation.

7) Accessibility pass (WCAG 2.1 AA)
- Heading hierarchy, landmarks, labels, alt text; skip link; visible focus; adequate color contrast.
- Keyboard-only navigation; `prefers-reduced-motion` respected for animations.
- Success: Lighthouse Accessibility ≥ 95; screen-reader sanity check (VoiceOver) passes.

8) SEO & social sharing
- Unique titles/meta descriptions per page; canonical URLs.
- Open Graph & Twitter card tags; share images in correct aspect ratio.
- About page: Schema.org Person (JSON-LD) with name, sameAs links.
- Success: Meta linters/validators pass; Lighthouse SEO ≥ 90.

9) Performance optimization
- WebP images with reasonable dimensions; `loading="lazy"` where appropriate (not for hero).
- Minify CSS (simple one-time minify step) and keep JS minimal.
- Consider preconnect/preload for fonts if hosting Inter; otherwise prefer system stack for body.
- Success: Lighthouse Performance ≥ 90; CLS and TBT within green thresholds.

10) QA and cross-browser testing
- Responsive checks at mobile/tablet/desktop; browsers: Chrome, Firefox, Safari, Edge.
- Accessibility keyboard checks and screen reader pass; forms (if added) validate.
- Success: All checklist items pass; no console errors; layout stable.

11) GitHub Pages deployment
- Main branch, Pages from `/` (root); optional custom domain with `CNAME`.
- Success: Live site reachable, HTTPS enabled, correct canonical links.

## Project Status Board
- [x] Initialize repo and base structure
- [ ] Global styles, tokens, and typography
- [ ] Navigation (sticky header, mobile hamburger)
- [ ] Landing page (hero + CTA)
- [ ] About page (split layout + socials)
- [ ] Initiatives page (accessible accordion)
- [ ] Accessibility pass (WCAG 2.1 AA)
- [ ] SEO & social sharing
- [ ] Performance optimization
- [ ] QA and cross-browser testing
- [ ] GitHub Pages deployment

## Current Status / Progress Tracking
Repo scaffold created with `index.html`, `about.html`, `initiatives.html`, `css/`, `js/`, `images/`, and `assets/`. Navigation wired with sticky header and mobile toggle. Added campus overlay and profile avatar to hero, moved About to full-width content, restyled accordion and enhanced JS (close others + arrow keys). Next: responsive tuning and polish.

Provided details for implementation:
- Candidate name: "Akaash Preetham"
- Slogan: "Slogan comes here"
- LinkedIn: `https://in.linkedin.com/in/akaash-preetham`
- Profile/hero image to use: LinkedIn media URL (to be downloaded and converted to WebP): `https://media.licdn.com/dms/image/v2/D5603AQEvUMdgt1qEfQ/profile-displayphoto-crop_800_800/B56ZfBzH2XHoAI-/0/1751303094074?e=1761177600&v=beta&t=HDTh8ykGKt1qezFv6ZK_jAP0QbC-GLAGUeL43hY7STU`
- Repository name: `harvard2025-secb-presi`
- Hosting: GitHub Pages project site under `akaashpreetham.github.io/harvard2025-secb-presi/`

Pending clarifications (will proceed with placeholders if not provided):
- Instagram handle/URL
- Preferred contact email address

## Executor's Feedback or Assistance Requests
- I will reference the provided LinkedIn image as a temporary remote source and place local placeholders `images/profile.webp` and `images/hero-bg.webp` to be replaced once assets are downloaded/optimized.
- Instagram and Email links will be marked as "Coming soon" until provided.

## Lessons
- Favor semantic HTML and ARIA patterns before adding JS.
- Keep interactions operable with keyboard; confirm focus management for mobile menu and accordion.
- Optimize hero image early to keep LCP strong on landing.
