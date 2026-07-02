# HealthFoundry.ai — Theme System Specification
### Dark & Light Mode Support for the New Astro Build
**Add this to: healthfoundry_new_project_addendum.md (replaces Section 2)**

---

## Overview

The site supports both dark and light themes, with dark as the default. The theme is toggled by the user via a button in the nav, persisted in `localStorage`, and respects the OS `prefers-color-scheme` preference on first visit.

The entire theme system is implemented via **CSS custom properties on the `:root` element**, with a `data-theme="light"` attribute on `<html>` switching the token values. No Tailwind `dark:` variants are needed — all colour references go through the token system.

---

## 1. CSS Custom Properties — Full Token Set

**`src/styles/global.css`:**

```css
/* ============================================================
   THEME TOKENS — DARK (default)
   ============================================================ */
:root,
[data-theme="dark"] {

  /* --- Backgrounds --- */
  --bg-primary:        #000000;
  --bg-secondary:      #0a0a0a;
  --bg-tertiary:       #111111;
  --bg-card:           rgba(255, 255, 255, 0.04);
  --bg-card-hover:     rgba(255, 255, 255, 0.08);
  --bg-card-border:    rgba(255, 255, 255, 0.08);
  --bg-nav:            rgba(0, 0, 0, 0.85);
  --bg-nav-scrolled:   rgba(0, 0, 0, 0.95);
  --bg-overlay:        rgba(0, 0, 0, 0.7);
  --bg-highlight:      rgba(255, 255, 255, 0.06);

  /* --- Text --- */
  --text-primary:      #ffffff;
  --text-secondary:    #a3a3a3;   /* neutral-400 */
  --text-muted:        #525252;   /* neutral-600 */
  --text-inverse:      #000000;

  /* --- Borders --- */
  --border-subtle:     rgba(255, 255, 255, 0.06);
  --border-default:    rgba(255, 255, 255, 0.12);
  --border-strong:     rgba(255, 255, 255, 0.24);

  /* --- Accent (white-based in dark mode) --- */
  --accent-primary:    #ffffff;
  --accent-secondary:  #a3a3a3;
  --accent-glow:       rgba(255, 255, 255, 0.5);
  --accent-glow-soft:  rgba(255, 255, 255, 0.15);

  /* --- CTA Button --- */
  --btn-primary-bg:       #ffffff;
  --btn-primary-text:     #000000;
  --btn-primary-hover-bg: #e5e5e5;
  --btn-secondary-bg:     transparent;
  --btn-secondary-text:   #ffffff;
  --btn-secondary-border: rgba(255, 255, 255, 0.3);
  --btn-secondary-hover-bg: rgba(255, 255, 255, 0.08);

  /* --- Nav --- */
  --nav-link-color:       #a3a3a3;
  --nav-link-hover:       #ffffff;
  --nav-cta-bg:           #ffffff;
  --nav-cta-text:         #000000;
  --nav-dropdown-bg:      #111111;
  --nav-dropdown-border:  rgba(255, 255, 255, 0.1);

  /* --- Sections --- */
  --section-label-color:  #525252;
  --hero-title-color:     #ffffff;
  --stat-val-color:       #ffffff;
  --stat-lbl-color:       #525252;
  --highlight-color:      #ffffff;

  /* --- Cards --- */
  --card-bg:           rgba(255, 255, 255, 0.03);
  --card-bg-hover:     rgba(255, 255, 255, 0.07);
  --card-border:       rgba(255, 255, 255, 0.08);
  --card-border-hover: rgba(255, 255, 255, 0.18);
  --card-shadow:       0 4px 24px rgba(0, 0, 0, 0.4);

  /* --- Timeline & Diagrams --- */
  --timeline-line:     rgba(255, 255, 255, 0.12);
  --timeline-dot:      #ffffff;
  --timeline-dot-bg:   rgba(255, 255, 255, 0.1);
  --diagram-bg:        rgba(255, 255, 255, 0.03);
  --diagram-border:    rgba(255, 255, 255, 0.1);
  --layer-connector:   rgba(255, 255, 255, 0.15);

  /* --- HITL Spectrum --- */
  --hitl-zone-a-bg:    rgba(255, 255, 255, 0.04);
  --hitl-zone-b-bg:    rgba(255, 255, 255, 0.07);
  --hitl-zone-c-bg:    rgba(255, 255, 255, 0.11);
  --hitl-gradient:     linear-gradient(
                         90deg,
                         rgba(255,255,255,0.04) 0%,
                         rgba(255,255,255,0.08) 50%,
                         rgba(255,255,255,0.14) 100%
                       );

  /* --- Team --- */
  --team-card-bg:      rgba(255, 255, 255, 0.03);
  --team-avatar-border: rgba(255, 255, 255, 0.1);
  --team-role-color:   #525252;

  /* --- Footer --- */
  --footer-bg:         #000000;
  --footer-border:     rgba(255, 255, 255, 0.08);
  --footer-text:       #525252;
  --footer-link:       #a3a3a3;
  --footer-link-hover: #ffffff;

  /* --- Scrollbar --- */
  --scrollbar-track:   #0a0a0a;
  --scrollbar-thumb:   #333333;

  /* --- Theme toggle icon shown in this mode --- */
  --theme-icon-show:   "☀️";   /* show sun icon = switch to light */
}

/* ============================================================
   THEME TOKENS — LIGHT
   ============================================================ */
[data-theme="light"] {

  /* --- Backgrounds --- */
  --bg-primary:        #ffffff;
  --bg-secondary:      #f8f8f8;
  --bg-tertiary:       #f0f0f0;
  --bg-card:           rgba(0, 0, 0, 0.03);
  --bg-card-hover:     rgba(0, 0, 0, 0.06);
  --bg-card-border:    rgba(0, 0, 0, 0.08);
  --bg-nav:            rgba(255, 255, 255, 0.90);
  --bg-nav-scrolled:   rgba(255, 255, 255, 0.98);
  --bg-overlay:        rgba(255, 255, 255, 0.7);
  --bg-highlight:      rgba(0, 0, 0, 0.04);

  /* --- Text --- */
  --text-primary:      #0a0a0a;
  --text-secondary:    #525252;   /* neutral-600 */
  --text-muted:        #a3a3a3;   /* neutral-400 */
  --text-inverse:      #ffffff;

  /* --- Borders --- */
  --border-subtle:     rgba(0, 0, 0, 0.06);
  --border-default:    rgba(0, 0, 0, 0.12);
  --border-strong:     rgba(0, 0, 0, 0.24);

  /* --- Accent (dark-based in light mode) --- */
  --accent-primary:    #0a0a0a;
  --accent-secondary:  #525252;
  --accent-glow:       rgba(0, 0, 0, 0.3);
  --accent-glow-soft:  rgba(0, 0, 0, 0.08);

  /* --- CTA Button --- */
  --btn-primary-bg:       #0a0a0a;
  --btn-primary-text:     #ffffff;
  --btn-primary-hover-bg: #262626;
  --btn-secondary-bg:     transparent;
  --btn-secondary-text:   #0a0a0a;
  --btn-secondary-border: rgba(0, 0, 0, 0.25);
  --btn-secondary-hover-bg: rgba(0, 0, 0, 0.06);

  /* --- Nav --- */
  --nav-link-color:       #525252;
  --nav-link-hover:       #0a0a0a;
  --nav-cta-bg:           #0a0a0a;
  --nav-cta-text:         #ffffff;
  --nav-dropdown-bg:      #ffffff;
  --nav-dropdown-border:  rgba(0, 0, 0, 0.1);

  /* --- Sections --- */
  --section-label-color:  #a3a3a3;
  --hero-title-color:     #0a0a0a;
  --stat-val-color:       #0a0a0a;
  --stat-lbl-color:       #a3a3a3;
  --highlight-color:      #0a0a0a;

  /* --- Cards --- */
  --card-bg:           rgba(0, 0, 0, 0.02);
  --card-bg-hover:     rgba(0, 0, 0, 0.05);
  --card-border:       rgba(0, 0, 0, 0.08);
  --card-border-hover: rgba(0, 0, 0, 0.18);
  --card-shadow:       0 4px 24px rgba(0, 0, 0, 0.08);

  /* --- Timeline & Diagrams --- */
  --timeline-line:     rgba(0, 0, 0, 0.12);
  --timeline-dot:      #0a0a0a;
  --timeline-dot-bg:   rgba(0, 0, 0, 0.08);
  --diagram-bg:        rgba(0, 0, 0, 0.02);
  --diagram-border:    rgba(0, 0, 0, 0.1);
  --layer-connector:   rgba(0, 0, 0, 0.12);

  /* --- HITL Spectrum --- */
  --hitl-zone-a-bg:    rgba(0, 0, 0, 0.03);
  --hitl-zone-b-bg:    rgba(0, 0, 0, 0.06);
  --hitl-zone-c-bg:    rgba(0, 0, 0, 0.10);
  --hitl-gradient:     linear-gradient(
                         90deg,
                         rgba(0,0,0,0.03) 0%,
                         rgba(0,0,0,0.06) 50%,
                         rgba(0,0,0,0.11) 100%
                       );

  /* --- Team --- */
  --team-card-bg:      rgba(0, 0, 0, 0.02);
  --team-avatar-border: rgba(0, 0, 0, 0.1);
  --team-role-color:   #a3a3a3;

  /* --- Footer --- */
  --footer-bg:         #f0f0f0;
  --footer-border:     rgba(0, 0, 0, 0.08);
  --footer-text:       #a3a3a3;
  --footer-link:       #525252;
  --footer-link-hover: #0a0a0a;

  /* --- Scrollbar --- */
  --scrollbar-track:   #f0f0f0;
  --scrollbar-thumb:   #cccccc;

  --theme-icon-show:   "🌙";   /* show moon icon = switch to dark */
}

/* ============================================================
   DOMAIN COLOURS — same in both themes (intentional)
   ============================================================ */
:root {
  --domain-cx:          #0d9488;   /* teal-600 */
  --domain-cx-muted:    rgba(13, 148, 136, 0.12);
  --domain-cx-border:   rgba(13, 148, 136, 0.25);

  --domain-finops:      #d97706;   /* amber-600 */
  --domain-finops-muted: rgba(217, 119, 6, 0.12);
  --domain-finops-border: rgba(217, 119, 6, 0.25);

  --domain-grc:         #2563eb;   /* blue-600 */
  --domain-grc-muted:   rgba(37, 99, 235, 0.12);
  --domain-grc-border:  rgba(37, 99, 235, 0.25);

  --domain-platform:    inherit;   /* follows --text-primary */
}

/* ============================================================
   BASE STYLES — reference tokens only, never hardcoded colours
   ============================================================ */
html {
  background-color: var(--bg-primary);
  color: var(--text-primary);
  font-family: 'Inter', sans-serif;
  transition: background-color 0.3s ease, color 0.3s ease;
  scroll-behavior: smooth;
}

body {
  background-color: var(--bg-primary);
  color: var(--text-primary);
}

/* Smooth theme transition on all colour properties */
*, *::before, *::after {
  transition:
    background-color 0.3s ease,
    border-color 0.3s ease,
    color 0.15s ease,
    box-shadow 0.3s ease;
}

/* Opt-out for elements where transition causes visual glitches */
img, svg, video, canvas {
  transition: none;
}

/* Scrollbar */
::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: var(--scrollbar-track); }
::-webkit-scrollbar-thumb { background: var(--scrollbar-thumb); border-radius: 3px; }
```

---

## 2. Theme Toggle Component

**`src/components/ui/ThemeToggle.astro`:**

```astro
---
// No props needed
---

<button
  id="theme-toggle"
  class="theme-toggle"
  aria-label="Toggle theme"
  title="Toggle dark/light mode"
>
  <!-- Sun icon — shown in dark mode (click to go light) -->
  <svg class="icon-sun" xmlns="http://www.w3.org/2000/svg" width="18" height="18"
    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
    stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="4"/>
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41
             M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
  </svg>
  <!-- Moon icon — shown in light mode (click to go dark) -->
  <svg class="icon-moon" xmlns="http://www.w3.org/2000/svg" width="18" height="18"
    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
    stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
  </svg>
</button>

<style>
  .theme-toggle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    border-radius: 8px;
    border: 1px solid var(--border-default);
    background: transparent;
    color: var(--nav-link-color);
    cursor: pointer;
    padding: 0;
    flex-shrink: 0;
  }

  .theme-toggle:hover {
    background: var(--bg-card-hover);
    color: var(--text-primary);
    border-color: var(--border-strong);
  }

  /* Dark mode: show sun, hide moon */
  [data-theme="dark"] .icon-sun  { display: block; }
  [data-theme="dark"] .icon-moon { display: none;  }

  /* Light mode: show moon, hide sun */
  [data-theme="light"] .icon-sun  { display: none;  }
  [data-theme="light"] .icon-moon { display: block; }

  /* Default (before JS runs): show sun */
  .icon-sun  { display: block; }
  .icon-moon { display: none;  }
</style>

<script>
  const STORAGE_KEY = 'hf-theme';
  const html = document.documentElement;

  function getInitialTheme(): 'dark' | 'light' {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'dark' || stored === 'light') return stored;
    // Fall back to OS preference
    return window.matchMedia('(prefers-color-scheme: light)').matches
      ? 'light'
      : 'dark';
  }

  function applyTheme(theme: 'dark' | 'light') {
    html.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);
  }

  // Apply on load (before paint to avoid flash)
  applyTheme(getInitialTheme());

  // Toggle on button click
  document.getElementById('theme-toggle')?.addEventListener('click', () => {
    const current = html.getAttribute('data-theme') as 'dark' | 'light';
    applyTheme(current === 'dark' ? 'light' : 'dark');
  });
</script>
```

---

## 3. Prevent Flash of Wrong Theme (FOUT)

Add this **inline script** as the very first child of `<head>` in `Layout.astro` — before any stylesheets load. This runs synchronously and sets the theme attribute before the browser paints:

```astro
<!-- Layout.astro <head> — MUST be first script, before any <link> tags -->
<script is:inline>
  (function() {
    var stored = localStorage.getItem('hf-theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var theme = stored || (prefersDark ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', theme);
  })();
</script>
```

**Why `is:inline`:** Astro normally bundles and defers scripts. `is:inline` keeps this synchronous so it runs before paint, preventing the flash.

---

## 4. Nav Integration

Add `<ThemeToggle />` to `Nav.astro` between the nav links and the CTA button:

```astro
---
import ThemeToggle from './ui/ThemeToggle.astro';
---

<nav class="nav">
  <div class="nav-container">
    <a href="/" class="nav-logo">...</a>
    <div class="nav-links">
      <!-- nav links here -->
    </div>
    <div class="nav-actions">
      <ThemeToggle />
      <a href="/contact" class="nav-cta">Book a Call</a>
    </div>
    <!-- mobile toggle -->
  </div>
</nav>
```

On mobile, include the toggle in the mobile menu overlay as well — place it at the top of the mobile nav links.

---

## 5. Tailwind Config — Theme-Aware

Since the project uses hybrid Tailwind + custom CSS, configure Tailwind to not conflict with the token system. In `tailwind.config.mjs`:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],

  // Disable Tailwind's own dark mode — we handle it via data-theme attribute
  darkMode: ['selector', '[data-theme="dark"]'],

  theme: {
    extend: {
      colors: {
        // Map Tailwind colour utilities to CSS tokens
        // Use sparingly — prefer direct var() references in component CSS
        'bg-primary':   'var(--bg-primary)',
        'text-primary': 'var(--text-primary)',
        'domain-cx':    'var(--domain-cx)',
        'domain-finops':'var(--domain-finops)',
        'domain-grc':   'var(--domain-grc)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },

  plugins: [],
}
```

**Rule for the build:** Use Tailwind for layout utilities (`flex`, `grid`, `gap-*`, `p-*`, `m-*`, `rounded-*`) and use CSS custom properties via `var()` for all colours. Never hardcode a colour value in a Tailwind class like `bg-black` or `text-white` — always go through the token.

---

## 6. Component Authoring Rules

Every component in the codebase must follow these rules to be theme-compatible:

### ✅ Do this:
```astro
<style>
  .hero-title {
    color: var(--text-primary);
    background: var(--bg-primary);
  }

  .stat-val {
    color: var(--stat-val-color);
  }

  .domain-badge {
    background: var(--domain-cx-muted);
    color: var(--domain-cx);
    border: 1px solid var(--domain-cx-border);
  }
</style>
```

### ❌ Never do this:
```astro
<style>
  .hero-title {
    color: #ffffff;          /* hardcoded — breaks light mode */
    background: black;       /* hardcoded — breaks light mode */
  }
</style>
```

### ❌ Never do this in Tailwind classes:
```astro
<!-- hardcoded colours that don't respond to theme -->
<h1 class="text-white bg-black">...</h1>
```

### ✅ For Tailwind layout + CSS tokens together:
```astro
<div class="flex flex-col gap-6 p-8 rounded-xl" style="background: var(--card-bg); border: 1px solid var(--card-border);">
```

Or better — define a reusable CSS class:
```css
.card {
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  box-shadow: var(--card-shadow);
  border-radius: 0.75rem;
  transition: background 0.3s ease, border-color 0.3s ease;
}
.card:hover {
  background: var(--card-bg-hover);
  border-color: var(--card-border-hover);
}
```

---

## 7. SVG Diagram Theme Compatibility

All SVG diagrams (architecture layers, claims timeline, blueprint cycle, etc.) must use `currentColor` and CSS custom properties rather than hardcoded fills:

```svg
<!-- ✅ Theme-compatible SVG -->
<svg>
  <rect fill="var(--diagram-bg)" stroke="var(--diagram-border)" />
  <text fill="var(--text-primary)">Layer 1</text>
  <line stroke="var(--layer-connector)" />
</svg>
```

```svg
<!-- ❌ Theme-breaking SVG -->
<svg>
  <rect fill="#1a1a1a" stroke="#333" />
  <text fill="white">Layer 1</text>
</svg>
```

For React components (`.tsx` islands), pass theme-aware styles using CSS variables:

```tsx
// HITLSpectrum.tsx
<div style={{ background: 'var(--hitl-gradient)' }}>
  <div style={{ background: 'var(--hitl-zone-a-bg)' }}>Agent autonomous</div>
  <div style={{ background: 'var(--hitl-zone-b-bg)' }}>Agent + Human</div>
  <div style={{ background: 'var(--hitl-zone-c-bg)' }}>Human leads</div>
</div>
```

---

## 8. Image & Asset Considerations

Some assets need theme variants or special handling:

| Asset | Dark mode | Light mode | Approach |
|-------|-----------|------------|----------|
| `logo.png` | White logo on dark bg | Dark logo on light bg | Supply two variants: `logo-dark.png` and `logo-light.png`. Switch via CSS: `[data-theme="light"] .nav-logo-img { content: url('/images/logo-light.png'); }` — or use an SVG logo with `currentColor` fill (preferred) |
| `dashboard-mockup.png` | ✅ Works | May look out of place on white | Add a subtle drop shadow in light mode: `[data-theme="light"] .hero-dashboard-img { box-shadow: 0 8px 40px rgba(0,0,0,0.15); }` |
| `opd-snapshot.png`, `claims-snapshot.png`, `grc.png` | ✅ Works | Same — add shadow in light mode | Same treatment as dashboard mockup |
| Team photos | ✅ Works both | ✅ Works both | No changes needed |
| Architecture diagram (from marketecture HTML) | Needs dark bg | Needs light bg | Convert to SVG with theme-aware colours (see Section 7 above) |

**Recommendation:** Ask the design team to provide an SVG version of the logo with `fill="currentColor"` — this eliminates the logo swap problem entirely.

---

## 9. Mission Statement React Island — Theme Update

The existing `MissionStatement.tsx` uses hardcoded Tailwind colours (`text-white`, `text-neutral-400`, `text-neutral-500`, `bg-white/10`). These need to be replaced with CSS variable references in the new build:

```tsx
// MissionStatement.tsx — theme-aware version
// Replace:   text-white        →  style={{ color: 'var(--text-primary)' }}
// Replace:   text-neutral-400  →  style={{ color: 'var(--text-secondary)' }}
// Replace:   text-neutral-500  →  style={{ color: 'var(--text-muted)' }}
// Replace:   bg-white/10       →  style={{ background: 'var(--bg-card)' }}
// Replace:   bg-white          →  style={{ background: 'var(--accent-primary)' }}
// Replace:   text-black        →  style={{ color: 'var(--text-inverse)' }}
// Replace:   shadow-[0_0_20px_rgba(255,255,255,0.6)]  →  style={{ boxShadow: '0 0 20px var(--accent-glow)' }}
```

Apply the same audit to **any other React island** that uses hardcoded Tailwind colour classes.

---

## 10. Testing Checklist

Before marking any page complete, verify both themes:

```
For each page:
□ Dark mode default — loads correctly with no flash
□ Light mode — toggle works, all sections readable
□ OS preference respected on first visit (no localStorage set)
□ Theme persists on page reload
□ Theme persists across page navigation
□ No hardcoded colours visible in dev tools (inspect computed styles)
□ All SVG diagrams visible in both themes
□ Logo legible in both themes
□ Nav links readable in both themes
□ CTA buttons have sufficient contrast in both themes
□ Domain colour badges (CX teal, FinOps amber, GRC blue) legible in both themes
□ Card backgrounds distinguishable from page background in both themes
□ Team photos look natural in both themes (check shadow treatment)
```

---

## 11. Update to Claude Code Prompt (Revised Opening)

Replace the Claude Code prompt in the addendum with this updated version:

---

> **Prompt:**
>
> You are building a new Astro v5 website for HealthFoundry.ai — a healthcare Agentic AI platform company.
>
> **Four reference documents are attached — read all of them before writing any code:**
> 1. `healthfoundry_new_project_addendum.md` — tech stack, project structure, navigation, assets, team data
> 2. `healthfoundry_theme_system.md` — complete dark/light theme token system, ThemeToggle component, FOUT prevention, component authoring rules (this document — **highest priority**)
> 3. `healthfoundry_website_content_plan.md` — page-by-page content specification
> 4. `healthfoundry_visual_design_spec.md` — visual component specifications
>
> **Start by:**
> 1. Reading all four documents
> 2. Creating the Astro project with the structure in the addendum (Section 3)
> 3. Setting up `src/styles/global.css` with the **complete token system** from the theme document (Section 1) — both dark and light tokens
> 4. Setting up `src/styles/animations.css` (addendum Section 6)
> 5. Building `ThemeToggle.astro` (theme document Section 2)
> 6. Building `Layout.astro` with the FOUT prevention inline script as the **first child of `<head>`** (theme document Section 3)
> 7. Building `Nav.astro` with ThemeToggle integrated (theme document Section 4)
> 8. Building `Footer.astro`
>
> **Non-negotiable rules for every component:**
> - All colours via `var(--token-name)` — never hardcode hex, rgb, or named colours
> - All SVG diagrams use `currentColor` and CSS variable fills
> - Tailwind for layout only (`flex`, `grid`, `gap`, `p`, `m`, `rounded`, `w`, `h`)
> - After each page: verify it renders correctly in **both** dark and light modes before moving on
>
> **Build pages in this order:**
> 1. Homepage → 2. Platform → 3. Customer Experience → 4. FinOps → 5. GRC → 6. Why Us → 7. Security → 8. Company → 9. Contact → 10. Blog index
>
> Start with project setup and the Layout/Nav/Footer components. Run `astro dev` to confirm the theme toggle works in both modes before beginning the Homepage. Confirm when ready.

---

*This document is the fourth file in the complete build brief.*
*Read order: addendum → this document → content plan → visual spec*
*Prepared July 2026*
