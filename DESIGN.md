---
name: Digital Heroism
colors:
  surface: '#f3fcf4'
  surface-dim: '#d3dcd5'
  surface-bright: '#f3fcf4'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#edf6ef'
  surface-container: '#e7f0e9'
  surface-container-high: '#e1eae3'
  surface-container-highest: '#dce5de'
  on-surface: '#151d19'
  on-surface-variant: '#414943'
  inverse-surface: '#2a322e'
  inverse-on-surface: '#eaf3ec'
  outline: '#717973'
  outline-variant: '#c1c9c1'
  surface-tint: '#3b6750'
  primary: '#27533d'
  on-primary: '#ffffff'
  primary-container: '#3f6b54'
  on-primary-container: '#b9eacd'
  inverse-primary: '#a2d1b5'
  secondary: '#895116'
  on-secondary: '#ffffff'
  secondary-container: '#feb471'
  on-secondary-container: '#784408'
  tertiary: '#225432'
  on-tertiary: '#ffffff'
  tertiary-container: '#3b6d48'
  on-tertiary-container: '#b5ecbf'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#bdeed1'
  primary-fixed-dim: '#a2d1b5'
  on-primary-fixed: '#002113'
  on-primary-fixed-variant: '#234f3a'
  secondary-fixed: '#ffdcc1'
  secondary-fixed-dim: '#ffb877'
  on-secondary-fixed: '#2e1500'
  on-secondary-fixed-variant: '#6c3a00'
  tertiary-fixed: '#b8f0c2'
  tertiary-fixed-dim: '#9dd3a7'
  on-tertiary-fixed: '#00210c'
  on-tertiary-fixed-variant: '#1e502e'
  background: '#f3fcf4'
  on-background: '#151d19'
  surface-variant: '#dce5de'
  deep-forest: '#3F6B54'
  muted-sage: '#6FA37A'
  heritage-gold: '#CD8A4B'
  carbon-ink: '#0F1713'
  paper-cream: '#F5F0E8'
typography:
  display-lg:
    fontFamily: Space Grotesk
    fontSize: 72px
    fontWeight: '700'
    lineHeight: 80px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 52px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 56px
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.1em
  code-sm:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 64px
  container-max: 1280px
---

## Brand & Style

This design system embodies a "High-End Technical Boutique" aesthetic—a blend of **Minimalism** and **Modern Corporate** with a distinct developer-centric edge. It targets growth-stage technology companies and digital innovators who value precision, transparency, and high-performance engineering.

The visual narrative is built on the tension between organic, sophisticated tones and rigid, technical precision. It evokes a feeling of "calculated craft"—where high-level strategy meets boots-on-the-ground execution. The UI should feel airy and expansive, utilizing generous whitespace to allow technical details and bold typography to command attention.

Key stylistic pillars include:
- **Technical Rigor:** Monospaced accents and sharp geometric shapes.
- **Organic Sophitication:** A warm, off-white foundation contrasted by deep, forest-inspired greens.
- **Editorial Clarity:** High-contrast serif headlines for a premium, authoritative voice.

## Colors

The palette is anchored by **Paper Cream (#F5F0E8)**, providing a warm, high-end alternative to stark white. This reduces eye strain and reinforces a premium "printed" quality.

- **Primary (Deep Forest):** Used for core branding, primary calls to action, and structural accents. It represents stability and growth.
- **Secondary (Heritage Gold):** Reserved for high-value highlights, success states, or premium interactive elements.
- **Tertiary (Muted Sage):** Used for subtle backgrounds, secondary buttons, or decorative iconography.
- **Neutral (Carbon Ink):** The primary color for typography and heavy borders, ensuring maximum legibility against the cream background.

Color application should follow a 60-30-10 rule, with the background cream dominating the space, deep forest providing the structure, and gold/sage acting as strategic accents.

## Typography

This system employs a three-tier typographic hierarchy to balance editorial impact with technical utility.

1.  **Space Grotesk (Headlines):** Its geometric, slightly eccentric curves provide a modern, futuristic feel to all major titles.
2.  **Inter (Body):** Selected for its exceptional legibility and neutral tone, ensuring long-form content is accessible and professional.
3.  **JetBrains Mono (Labels/Technical):** Used for small metadata, labels (often in all-caps), and code snippets to inject a "builder" aesthetic.

**Note on "Instrument Serif":** Use this font sparingly for pull-quotes or large, low-contrast background watermarks to add a layer of prestige and traditional craftsmanship.

## Layout & Spacing

The layout follows a **Fixed Grid** model for desktop, transitioning to a fluid model for smaller screens. We use an 8px base unit to ensure all components and spacing values are divisible by 4 or 8, maintaining a rhythmic vertical flow.

- **Desktop (1200px+):** 12-column grid, 24px gutters, 64px margins.
- **Tablet (768px - 1199px):** 8-column grid, 20px gutters, 40px margins.
- **Mobile (Up to 767px):** 4-column grid, 16px gutters, 20px margins.

Sections should be separated by significant vertical padding (80px - 160px) to maintain the "Minimalist" aesthetic and allow the high-quality typography to breathe.

## Elevation & Depth

This design system avoids traditional drop shadows in favor of **Tonal Layers** and **Bold Outlines**. Depth is communicated through structural layering:

- **Flat Surfaces:** Most components sit directly on the `paper-cream` background.
- **Low-Contrast Outlines:** Instead of shadows, use 1px borders in `carbon-ink` at 10-15% opacity to define container boundaries.
- **Interactive Depth:** On hover, elements may shift slightly (e.g., 2px up) and gain a sharp, 4px "hard shadow" in `carbon-ink` to mimic a tactile, Brutalist card.
- **Backdrop Blurs:** Use subtle blurs (8px - 12px) behind navigation bars to maintain context during scrolling while keeping the technical feel.

## Shapes

The shape language is **Soft (0.25rem)**. This slight rounding takes the edge off the technical Brutalism, making the interface feel modern and approachable without becoming "bubbly."

- **Buttons & Inputs:** Standard 4px radius.
- **Cards:** 8px radius (`rounded-lg`) for larger containers to differentiate them from smaller interactive elements.
- **Avatars/Icons:** Generally kept in squares with the standard 4px radius to maintain the rigid, technical theme.

## Components

### Buttons
- **Primary:** `carbon-ink` background with `paper-cream` text. Sharp transitions. 
- **Secondary:** `deep-forest` outline (1px) with `deep-forest` text.
- **Tertiary:** `jetbrains-mono` all-caps text with a small arrow icon, no background.

### Input Fields
- Use a solid 1px border in `carbon-ink` (20% opacity). On focus, the border becomes 100% opacity `deep-forest` with a very subtle inner tint. Labels must always use `jetbrains-mono` in all-caps.

### Cards
- Cards use the `paper-cream` background but are defined by the low-contrast outline. For featured content, use a `muted-sage` background with `carbon-ink` text.

### Chips & Tags
- Rectangular with 4px radius. Use `muted-sage` at 10% opacity for the background and `deep-forest` for the text. Typography should be `label-caps`.

### Progress Indicators
- Use `heritage-gold` for high-visibility progress bars or status indicators to provide a warm "win" state against the cooler green and cream palette.