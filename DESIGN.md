---
name: Technical Analysis System
colors:
  surface: '#051424'
  surface-dim: '#051424'
  surface-bright: '#2c3a4c'
  surface-container-lowest: '#010f1f'
  surface-container-low: '#0d1c2d'
  surface-container: '#122131'
  surface-container-high: '#1c2b3c'
  surface-container-highest: '#273647'
  on-surface: '#d4e4fa'
  on-surface-variant: '#b9caca'
  inverse-surface: '#d4e4fa'
  inverse-on-surface: '#233143'
  outline: '#849495'
  outline-variant: '#3a494a'
  surface-tint: '#00dce5'
  primary: '#e9feff'
  on-primary: '#003739'
  primary-container: '#00f5ff'
  on-primary-container: '#006c71'
  inverse-primary: '#00696e'
  secondary: '#bcc7de'
  on-secondary: '#263143'
  secondary-container: '#3e495d'
  on-secondary-container: '#aeb9d0'
  tertiary: '#fbf9ff'
  on-tertiary: '#283044'
  tertiary-container: '#d5ddf7'
  on-tertiary-container: '#596177'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#63f7ff'
  primary-fixed-dim: '#00dce5'
  on-primary-fixed: '#002021'
  on-primary-fixed-variant: '#004f53'
  secondary-fixed: '#d8e3fb'
  secondary-fixed-dim: '#bcc7de'
  on-secondary-fixed: '#111c2d'
  on-secondary-fixed-variant: '#3c475a'
  tertiary-fixed: '#dae2fd'
  tertiary-fixed-dim: '#bec6e0'
  on-tertiary-fixed: '#131b2e'
  on-tertiary-fixed-variant: '#3f465c'
  background: '#051424'
  on-background: '#d4e4fa'
  surface-variant: '#273647'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  body-base:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  code-block:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 16px
  max-width: 1280px
---

## Brand & Style

This design system is engineered for the precise world of data science and technical research. The brand personality is clinical, authoritative, and intellectual, designed to facilitate deep focus and reduce cognitive load during complex analysis. It prioritizes information density without sacrificing legibility.

The style is **Modern Minimalist with a Technical Edge**. It utilizes a structured "blueprint" aesthetic, incorporating subtle dot-grid patterns and thin architectural lines that evoke the feeling of a sophisticated IDE or a precision instrument. The UI remains quiet, allowing data visualizations and code blocks to act as the primary narrative drivers. Key characteristics include:
- **High Information Density:** Compact layouts that respect the professional user's ability to process complex data.
- **Data-Driven Aesthetics:** Backgrounds feature subtle 24px dot grids to ground elements in a measurable space.
- **Technical Honesty:** No decorative gradients or unnecessary skeuomorphism; depth is achieved through layering and tonal shifts.

## Colors

The palette is anchored in a dark-mode-first technical environment to reduce eye strain during prolonged periods of analysis.

- **Primary (Vibrant Cyan):** Used exclusively for interactive states, progress indicators, and key data highlights. It serves as a high-contrast beacon against the dark background.
- **Secondary (Deep Slate Blue):** The primary surface color for cards and secondary navigation elements.
- **Tertiary (Charcoal/Foundation):** The deep base layer of the application, used for main backgrounds and "hollow" areas.
- **Semantic Accents:** 
    - **Code/Mono:** A muted teal for technical strings.
    - **Success/Warning/Error:** Desaturated versions of green, amber, and red to maintain the professional tone.

Surface colors utilize a 1px border of `Slate-700` to define boundaries without heavy shadows.

## Typography

This design system utilizes **Inter** for all functional and narrative text, chosen for its exceptional legibility and tall x-height in technical documentation. For data-specific labels, coordinates, and code snippets, **JetBrains Mono** is employed to provide a distinct visual "technical" mode.

- **Headlines:** Keep tight tracking and bold weights to provide strong entry points into sections.
- **Body:** Maintain generous line height (1.5x) for long-form case study reading.
- **Technical Callouts:** Labels and metadata should always use the monospaced font to differentiate data from description.
- **Hierarchy:** Use color (Slate-400 vs Slate-100) rather than just size to denote importance.

## Layout & Spacing

The layout is built on a **12-column fixed-width grid** for desktop, ensuring that charts and code snippets maintain an optimal line length for readability.

- **Rhythm:** An 8px base grid governs all spatial relationships. Small components use 4px increments.
- **Structure:** Content is housed in "soft cards" that span 4, 6, 8, or 12 columns.
- **Breakpoints:**
    - **Desktop (1280px+):** 12 columns, 64px margins.
    - **Tablet (768px - 1279px):** 8 columns, 32px margins.
    - **Mobile (< 767px):** 4 columns, 16px margins. 
- **Data Density:** In analytical views, use "Compact Mode" reducing gutters to 12px to maximize the visible data range.

## Elevation & Depth

This system avoids traditional shadows to maintain a clean, "flat-plus" technical aesthetic. Depth is communicated through:

1.  **Tonal Stacking:** The background is the darkest layer (#0F172A). Cards are one step lighter (#1E293B). Hover states or active elements are another step lighter or outlined in Primary Cyan.
2.  **Thin Outlines:** Every container uses a 1px solid border. This mimics the look of technical schematics.
3.  **Backdrop Blurs:** When modals or overlays are required, use a 12px blur with a 40% opacity Slate-900 fill to maintain context of the underlying data without visual clutter.
4.  **The "Glow" Exception:** Only the Primary Cyan accent may use a soft outer glow (4px - 8px blur) to simulate "active" status in a digital dashboard environment.

## Shapes

The shape language is "Soft-Technical." Elements use a small 4px (0.25rem) radius to feel modern and accessible, while still appearing structured and precise.

- **Containers:** 4px radius for all standard cards and input fields.
- **Outer Shells:** Large content containers or page wrappers can use 8px (rounded-lg) for a more distinct framing effect.
- **Buttons:** Strictly rectangular or 4px rounded; no pill shapes are used, as they feel too "consumer" for a technical case study.
- **Dividers:** Horizontal and vertical rules should be 1px wide, often using a dashed stroke (2px dash, 2px gap) to suggest grid-alignment.

## Components

### Cards & Containers
Cards are the primary structural unit. Use a background of Slate-800, a Slate-700 border, and a 4px corner radius. Include a header section with a monospaced label in the top-left for "Type" or "ID."

### Technical Callouts
Use a distinct "Code Block" component for equations, snippets, or raw data.
- **Background:** Deepest black (#020617).
- **Border:** Primary Cyan (left-edge only, 2px width).
- **Font:** JetBrains Mono.

### Buttons
- **Primary:** Solid Cyan background with Charcoal text. No shadow, but a subtle glow on hover.
- **Secondary:** Ghost style with a Slate-600 border and Cyan text.
- **Action:** Square icons for "Run," "Export," or "Filter" actions.

### Inputs & Selects
Inputs should be dark-filled with a bottom-only border in Slate-500, which transitions to a full Cyan border on focus. Labels sit above the input in `label-caps` typography.

### Data Chips
Small, 2px rounded tags with a background of 10% opacity Cyan and a 1px Cyan border. Used for categorizing data points or showing active filters.

### Progress & Status
Use "Pulse" indicators for live data streams—a small circular dot with a CSS animation. Cyan for active, Slate-500 for idle.