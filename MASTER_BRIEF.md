# TCS Link Hub — Master Brief for Claude Code

This is the single source of truth for all Claude Code build sessions.
Read this fully before touching any code.

---

## What This Project Is

A Linktree-style single-page link hub for Treasures Christian School (TCS).
Hosted at: https://linkhub.tcsch.com
GitHub repo: https://github.com/wheezy20/tcs-link-hub (master branch)
Deployed via: Cloudflare Pages (auto-deploys on git push to master)

A Lovable-generated demo already exists as the foundation.
We are REFINING and ENHANCING it — not rebuilding from scratch.

---

## Tech Stack

- HTML + CSS + Vanilla JS only
- NO React, NO TypeScript (even though the Lovable demo used it)
- NO build tools for the final version (Vite was Lovable's choice — we simplify)
- Single index.html file with linked style.css and script.js
- SVG background asset already in /public/background-waves.svg

**Why simplify from Lovable's React/Vite setup?**
Easier to maintain, faster to load, no npm build step needed for Cloudflare Pages.

---

## Project File Structure (Target)

```
tcs-link-hub/
├── index.html              ← Single page entry point
├── style.css               ← All styles
├── script.js               ← Animations + carousel logic
├── data/
│   └── links.js            ← All link data (easy to update without touching HTML)
└── public/
    ├── background-waves.svg          ← Approved TCS-branded waves background
    ├── tcs-logo-white.png            ← Logo for dark backgrounds
    ├── Full logo vertical - white bg.png   ← Logo on light backgrounds
    ├── Full logo vertical - deap teal bg.png
    ├── Full logo horizontal - white bg.png
    ├── logomark - white bg.png       ← Small icon version
    ├── favicon.ico
    └── [other favicon sizes]
```

---

## Brand Colors (EXACT — never approximate)

```css
--deep-jungle-green: #005E61;   /* Primary, most used (26%) */
--vivid-lime-green:  #ADF802;   /* Accent, highlights */
--mint-leaf:         #11B87A;   /* Secondary green */
--cayenne-red:       #F15E00;   /* Accent, CTAs */
--ocean-field:       #2F8C8F;   /* Supporting teal */
--deep-teal-shadow:  #0B4C50;   /* Dark backgrounds */
--lime-mist:         #F3FFD1;   /* Light tinted backgrounds */
--electric-bloom:    #D6FF66;   /* Softer lime accent */
```

---

## Typography (EXACT — Google Fonts)

- **Headings**: Cinzel, Bold weight only
  - Tracking: -30 (tight)
  - Title case always
- **Body / Buttons / Labels**: DM Sans
  - Body: Regular 18px, line-height 1.3
  - Subheading: Medium 24px, line-height 1.0
  - Tracking: -10

Load via Google Fonts in <head>:
```html
<link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@700&family=DM+Sans:wght@400;500&display=swap" rel="stylesheet">
```

---

## Page Sections (Top to Bottom)

### 1. Background
- Full-page background using /public/background-waves.svg
- SVG covers entire viewport, fixed or cover
- Waves flow from lime green (top) through mint, teal, deep green (bottom)

### 2. Card (main content container)
- White card, centered on page
- Border radius: 20px
- Max width: 480px (mobile-first)
- Generous padding: 40px top/bottom, 30px sides
- Subtle shadow: 0 10px 40px rgba(0,0,0,0.18)

### 3. Header (inside card)
- Logo: use /public/logomark - deap teal bg.png or tcs-logo-white.png
  - 80px diameter, circular crop
  - Centered
- School name: "Treasures Christian School"
  - Font: Cinzel Bold
  - Color: #005E61
  - Font size: 28px desktop, 22px mobile
- Tagline: "Every child is a treasure"
  - Font: DM Sans Regular
  - Color: #666
  - Font size: 15px

### 4. Links Section
Store all link data in /data/links.js like this:

```js
const links = [
  { label: "Inquiry Form",        icon: "file-text",      url: "https://admissions.tcsch.edu.gh/inquiry",           active: true  },
  { label: "Admissions Portal",   icon: "graduation-cap", url: "https://admissions.tcsch.edu.gh/apply",             active: true  },
  { label: "Career & Job Openings", icon: "briefcase",    url: "#",                                                 active: false, comingSoon: true },
  { label: "School Gallery",      icon: "image",          url: "#",                                                 active: false, comingSoon: true },
  { label: "Visit Us",            icon: "map-pin",        url: "https://maps.app.goo.gl/HtHD46jHLVhT5mDAA",        active: true  }
];
```

Icons use Lucide icon names (kebab-case). Contact section icons: Phone → "phone", Email → "mail", Location → "map-pin".
```

Button styles:
- Active buttons: background #005E61, text white, border-radius 12px
- Coming soon buttons: background #eee, text #999, cursor not-allowed
- Hover: lift 2px, shadow deepens, subtle lime green left-border accent
- Width: 100% inside card

### 5. Photo Carousel
- Appears BELOW the link buttons
- Horizontal scrollable row of photo cards
- Card size: 160px × 120px, border-radius 12px, overflow hidden
- Auto-scrolls slowly left (infinite loop), pauses on hover/touch
- Placeholder images: use placeholder.com or picsum.photos for now
  - 5-6 placeholder cards
  - Label each "TCS Photo" underneath
- Real photos replace placeholders later

### 6. Contact Section
- Background: #F3FFD1 (lime mist), border-radius 12px
- Title: "Get in Touch" — DM Sans Medium, #005E61, uppercase, letter-spacing 1px
- Phone: +233592651660 (tel: link)
- Email: info@tcsch.edu.gh (mailto: link)
- Location: Ho, Volta Region, Ghana

### 7. Footer
- "© 2026 Treasures Christian School. All rights reserved."
- DM Sans Regular, 12px, #999
- Centered

---

## Animation Spec

### On Page Load (Stagger — Style B)
Elements animate in sequentially, top to bottom:
1. Logo fades + slides up (delay: 0ms)
2. School name fades + slides up (delay: 100ms)
3. Tagline fades + slides up (delay: 200ms)
4. Each link button slides up with spring bounce (delay: 300ms + 80ms per button)
5. Carousel fades in (delay: 700ms)
6. Contact section fades in (delay: 850ms)

### Spring/Bounce (Style C) on buttons
- Buttons enter with a slight overshoot (spring effect)
- Use CSS: `transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)`
- This cubic-bezier creates the spring/bounce feel without JS

### Hover States
- Buttons: translateY(-2px), shadow deepens
- Buttons: left border flashes #ADF802 (lime green) for 0.2s
- Logo: subtle pulse scale(1.03) on hover

### Carousel
- CSS animation: auto-scroll left, infinite, 20s duration, linear
- Pause on hover: `animation-play-state: paused`
- On mobile: touch/swipe supported (vanilla JS touch events)

---

## What NOT to Do (Brand Rules)

- Never use emojis anywhere — buttons, labels, headings, contact section, footer, data files. The brand tone is Assured & Understated, Cultivated & Refined. Emojis are explicitly off-brand.
- Use Lucide Icons (https://lucide.dev) via CDN for all icons. Line/stroke style only, never filled. Size 18px, stroke color inherits from parent (white on active buttons, #999 on coming-soon). Import in index.html: `<script src="https://unpkg.com/lucide@latest"></script>` and call `lucide.createIcons()` after DOM load.
- Never use gradients on the logo
- Never use unapproved colors (no random blues, purples, etc.)
- Never use fonts other than Cinzel and DM Sans
- Never center-align body text (left-align only, except headings)
- Never apply drop shadows or glows to the logo
- Carousel must NOT autoplay video or audio
- No sticky headers, no nav bars — this is a single-scroll page

---

## Responsive Breakpoints

```css
/* Mobile first (default) */
/* max-width: 480px card */

/* Tablet */
@media (min-width: 768px) {
  /* card: max-width 520px */
}

/* Desktop */
@media (min-width: 1024px) {
  /* card: max-width 560px */
  /* background waves: full viewport */
}
```

---

## Session Plan

### Session 1 (NOW)
**Goal**: Replace Lovable's React structure with clean HTML/CSS/JS.
Build the complete static page (no animations yet, no carousel yet).
Use real logo, real fonts, waves background, all 5 link buttons, contact section, footer.

Deliver:
- index.html
- style.css
- data/links.js

### Session 2
**Goal**: Add all animations (stagger, spring on buttons, hover states).
No new HTML structure — only CSS animation additions and script.js.

### Session 3
**Goal**: Build photo carousel.
Auto-scrolling, pause on hover, touch support, 6 placeholder images.

### Session 4
**Goal**: Content pass.
Update all live links, remove "Coming Soon" from active buttons,
update phone number, confirm email, double-check Maps link.

### Session 5
**Goal**: Polish + mobile audit.
Test on 320px, 375px, 414px, 768px, 1280px.
Fix any overflow, touch target sizes (min 44px), contrast issues.

---

## How to Deploy After Each Session

```bash
git add .
git commit -m "Session [N]: [what changed]"
git push origin master
# Cloudflare auto-deploys in 2-3 minutes
# Live at: https://linkhub.tcsch.com
```

---

## Links Reference

| Label | URL | Status |
|-------|-----|--------|
| Inquiry Form | https://admissions.tcsch.edu.gh/inquiry | ✅ Live |
| Admissions Portal | https://admissions.tcsch.edu.gh/apply | ✅ Live |
| Career & Job Openings | # | ⏳ Coming soon |
| School Gallery | # | ⏳ Coming soon |
| Visit Us | https://maps.app.goo.gl/HtHD46jHLVhT5mDAA | ✅ Live |
| Phone | tel:+233592651660 | ✅ Live |
| Email | mailto:info@tcsch.edu.gh | ✅ Live |

---

## Assets in /public (Ready to Use)

| File | Use Case |
|------|----------|
| background-waves.svg | Full page background |
| tcs-logo-white.png | Logo on dark backgrounds |
| logomark - deap teal bg.png | Small circular logo mark |
| Full logo vertical - white bg.png | Full logo on white card |
| Full logo vertical - deap teal bg.png | Full logo on dark bg |
| Full logo horizontal - white bg.png | Horizontal layout variant |
| favicon.ico | Browser tab icon |

---

## START SESSION 1 PROMPT (Copy this to Claude Code)

"Read the master brief at /MASTER_BRIEF.md before doing anything.

Then build Session 1: a clean, static single-page HTML/CSS implementation of the TCS link hub.

Requirements:
- Single index.html, style.css, and data/links.js — no frameworks, no build tools
- Use Google Fonts: Cinzel Bold (headings) and DM Sans (body)
- Background: /public/background-waves.svg covering full viewport
- Logo: use /public/logomark - deap teal bg.png in an 80px circle in the card header
- Card: white, centered, max-width 480px, border-radius 20px
- Generate link buttons dynamically from data/links.js
- Coming soon buttons styled differently (greyed out, not clickable)
- Contact section with phone +233592651660, email info@tcsch.edu.gh, location Ho, Ghana
- Footer: © 2026 Treasures Christian School
- NO animations yet (that is Session 2)
- NO carousel yet (that is Session 3)
- Mobile-first, responsive

Do not use the existing Lovable React code. Write fresh HTML/CSS/JS only."
