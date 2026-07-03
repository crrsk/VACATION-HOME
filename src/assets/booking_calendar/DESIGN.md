---
name: Serene Stays
colors:
  surface: '#fcf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0eded'
  surface-container-high: '#eae7e7'
  surface-container-highest: '#e4e2e1'
  on-surface: '#1b1c1c'
  on-surface-variant: '#41484b'
  inverse-surface: '#303030'
  inverse-on-surface: '#f3f0f0'
  outline: '#72787c'
  outline-variant: '#c1c7cb'
  surface-tint: '#406372'
  primary: '#315563'
  on-primary: '#ffffff'
  primary-container: '#4a6d7c'
  on-primary-container: '#caeeff'
  inverse-primary: '#a8ccdd'
  secondary: '#5f5e59'
  on-secondary: '#ffffff'
  secondary-container: '#e5e2db'
  on-secondary-container: '#65645f'
  tertiary: '#4b524b'
  on-tertiary: '#ffffff'
  tertiary-container: '#636a63'
  on-tertiary-container: '#e3eae1'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#c3e8fa'
  primary-fixed-dim: '#a8ccdd'
  on-primary-fixed: '#001f29'
  on-primary-fixed-variant: '#284b59'
  secondary-fixed: '#e5e2db'
  secondary-fixed-dim: '#c9c6c0'
  on-secondary-fixed: '#1c1c18'
  on-secondary-fixed-variant: '#474742'
  tertiary-fixed: '#dde4db'
  tertiary-fixed-dim: '#c1c8c0'
  on-tertiary-fixed: '#171d18'
  on-tertiary-fixed-variant: '#424942'
  background: '#fcf9f8'
  on-background: '#1b1c1c'
  surface-variant: '#e4e2e1'
typography:
  display-lg:
    fontFamily: Source Serif 4
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Source Serif 4
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Source Serif 4
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.2'
  headline-sm:
    fontFamily: Source Serif 4
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.3'
  body-lg:
    fontFamily: DM Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: DM Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: DM Sans
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.01em
  label-sm:
    fontFamily: DM Sans
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: 0.04em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
---

## Brand & Style
The design system is centered on the concept of "The Modern Sanctuary." It targets travelers seeking high-quality, curated accommodations through a lens of tranquility and effortless discovery. The visual narrative combines **Minimalism** with **Tactile** warmth, ensuring the UI feels like a breath of fresh air rather than a complex utility.

The emotional response should be one of immediate relief and trust. By utilizing generous whitespace, soft transitions, and high-quality imagery, the design system removes cognitive load, guiding the user toward their next getaway with a sense of calm anticipation.

## Colors
The palette is inspired by natural coastal and woodland landscapes to evoke a "cozy" yet "professional" atmosphere.

- **Primary (#4A6D7C):** A muted Mediterranean Blue used for primary calls to action, active states, and brand-critical markers. It provides a stable, trustworthy anchor.
- **Secondary (#F4F1EA):** A warm "Oatmeal" beige used for large background areas to avoid the sterile feel of pure white.
- **Tertiary (#D9E0D7):** A soft "Sage" green used for success states, badges, or subtle background highlights in secondary sections.
- **Neutral (#2D2D2D):** A deep "Charcoal" for primary text and iconography to ensure high legibility and a premium feel.
- **Surface White (#FFFFFF):** Reserved for elevated cards and input fields to create clear separation from the secondary background.

## Typography
This design system employs a sophisticated pairing of **Source Serif 4** and **DM Sans**. 

- **Serif (Source Serif 4):** Used for headlines and editorial moments. It conveys the "Modern Sanctuary" brand, offering a sense of history and premium service.
- **Sans-Serif (DM Sans):** Used for all UI elements, navigation, and body copy. Its low-contrast, geometric forms maintain a clean and contemporary look that balances the traditional weight of the serif headings.
- **Scale:** Maintain generous line heights (1.6x) for body text to improve readability and reinforce the "spacious" layout philosophy.

## Layout & Spacing
The layout follows a **Fixed Grid** philosophy on desktop to maintain an editorial feel, centered within the viewport. 

- **Desktop (1280px+):** 12-column grid with 24px gutters. Outer margins are generous (64px) to create a "framed" appearance for the content.
- **Tablet:** 8-column grid with 20px gutters and 40px margins.
- **Mobile:** 4-column grid with 16px gutters and 20px margins.

Vertical rhythm is strictly based on 8px increments. Content sections should be separated by large padding (80px to 120px on desktop) to allow the design to "breathe."

## Elevation & Depth
The design system uses **Ambient Shadows** to create a soft, inviting depth. Shadows should never be harsh or pure black; instead, they are tinted with the primary blue or neutral charcoal to maintain a natural look.

- **Low Elevation:** Used for cards and interactive elements. (0px 4px 20px rgba(74, 109, 124, 0.08))
- **High Elevation:** Used for floating headers or modals. (0px 12px 40px rgba(45, 45, 45, 0.12))
- **Interactive Depth:** On hover, cards should slightly lift (increase shadow spread) rather than change color, simulating a tactile physical response.

## Shapes
Shapes are defined by **Roundedness Level 2**. This provides a 0.5rem base radius that feels friendly and approachable without becoming "bubbly" or juvenile. 

- **Standard Elements (Buttons, Inputs):** 8px radius.
- **Containers (Cards, Section Backgrounds):** 16px (rounded-lg) to 24px (rounded-xl) radius.
- **Imagery:** Photos of properties should always use the 16px radius to maintain a consistent softness across the visual field.

## Components
- **Buttons:** Primary buttons use the Mediterranean Blue background with white text. Secondary buttons use a Charcoal outline or a ghost style with the Primary Blue text.
- **Cards:** Property cards are the hero of the interface. They feature a white surface, soft ambient shadows, and a subtle 1px border (#E5E5E5) for definition.
- **Inputs:** Search and booking inputs should feel "high-end." Use the Oatmeal background (#F4F1EA) for the input field with a clear focus state that transitions the border to Primary Blue.
- **Date Pickers:** Use a clean, custom-styled calendar that highlights the selected range in a soft tint of the primary color, keeping the typography in DM Sans for clarity.
- **Chips/Badges:** Use the Sage Green (#D9E0D7) with dark green text for positive attributes (e.g., "Verified," "Superhost").
- **Lists:** Use generous vertical padding and soft dividers (1px, #E5E5E5) to ensure information-dense lists (like amenities) don't feel cluttered.