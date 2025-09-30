# Design Guidelines: Heritage Borewell Drilling Company Website

## Design Approach
**Reference-Based Heritage/Classic Theme** - Drawing inspiration from traditional Indian business aesthetics and established industrial company websites that emphasize trust, longevity, and authenticity.

## Core Design Principles
- **Heritage & Trust**: Visual language that reflects 30+ years of industry experience
- **Authenticity**: Personal touch through owner imagery and handwritten-style elements
- **Clarity**: Simple, accessible navigation for all user demographics
- **Professionalism**: Industrial strength meets traditional Indian business values

## Color Palette

### Primary Colors
- **Deep Earth Brown**: 25 35% 30% (primary brand, headers, CTA buttons)
- **Warm Beige**: 35 40% 85% (backgrounds, card surfaces)
- **Heritage Blue**: 210 45% 25% (secondary actions, accents)

### Accent & Supporting
- **Rich Gold**: 45 75% 50% (trust badges, borders, highlights - use sparingly)
- **Forest Green**: 140 30% 35% (service icons, success states)
- **Cream White**: 40 20% 95% (page backgrounds)
- **Charcoal**: 0 0% 20% (body text)

### Dark Mode
Not required - heritage theme emphasizes warmth and tradition over modern dark interfaces

## Typography

### Font Families
- **Headings**: Playfair Display or Merriweather (serif, conveys heritage)
- **Body**: Open Sans or Lato (clean sans-serif, readable)
- **Accents**: Great Vibes or Dancing Script (for signature-style elements)

### Hierarchy
- **H1**: 3.5rem (56px) bold serif - hero headlines
- **H2**: 2.5rem (40px) bold serif - page titles
- **H3**: 1.75rem (28px) semibold serif - section headers
- **Body**: 1.125rem (18px) regular sans-serif
- **Small**: 0.875rem (14px) - captions, metadata

## Layout System

### Spacing
Use Tailwind units: **4, 6, 8, 12, 16, 20, 24** for consistent rhythm
- Section padding: py-16 to py-24
- Card spacing: p-6 to p-8
- Element gaps: gap-4 to gap-8

### Container Strategy
- Max-width: 1280px (max-w-7xl)
- Content sections: max-w-6xl
- Text content: max-w-4xl for readability

## Component Library

### Navigation
- Classic horizontal nav with brown/beige color scheme
- Sticky header with company logo (owner's signature style) on left
- Gold underline animation on hover for nav items
- Mobile: Hamburger menu with slide-in drawer

### Hero Section (Homepage)
- Full-width background: Photo of owner with drilling machines
- Overlay: Semi-transparent brown gradient (bottom to top)
- Centered content: Company name (large serif), tagline, 30+ years badge
- Prominent CTA button with gold border

### Cards & Sections
- Service cards: Beige backgrounds, green icons, rounded corners (rounded-lg)
- Machine showcase: Grid layout with photo, name, description
- Bordered cards with subtle gold accent on hover

### Trust Elements
- "Since 1995" badge: Circular gold border, brown background
- Owner signature: Handwritten font in gold color
- Client count: Large numbers in heritage blue

### Buttons
- Primary: Deep brown background, cream text, gold border on hover
- Secondary: Outline style with brown border, brown text
- On images: Blurred background, white text, white border

### Gallery
- Masonry grid layout for nostalgic photos
- Timeline sections: 1990s, 2000s, 2010s, Present
- Sepia tone overlays on historical images

### Forms (Contact)
- Clean white/beige backgrounds
- Brown borders on inputs
- Gold focus states
- Large, accessible input fields

## Images

### Required Images
1. **Hero Image**: Owner standing with drilling machines in background - warm lighting, authentic industrial setting
2. **About Page**: Owner portrait photo - professional headshot for credibility
3. **Service Icons**: Custom illustrations or photos for each service type (drilling rig, compressor, mud pump, tractor-mounted, solar setup)
4. **Machines Gallery**: 8-12 photos of various equipment - both vintage and modern machines
5. **Historical Timeline**: 6-10 nostalgic photos showing company evolution
6. **Contact Page**: India map graphic highlighting "We work nationwide"

### Image Treatment
- Warm color grading throughout
- Subtle vignette on hero images
- Sepia tones for historical gallery photos
- High-quality, professional industrial photography

## Page-Specific Layouts

### Homepage
Hero (100vh) → Company Intro (2 columns: text + stats) → Services Preview (3-column grid) → Trust Section (owner message + signature) → CTA Section

### About Us
Header → Timeline (vertical layout) → Owner Section (photo + story, 2 columns) → Mission/Values cards

### Services
Grid layout (2 columns on desktop) → Each service: icon, title, detailed description → Inquiry CTA

### Machines
4-column grid (responsive to 1 column mobile) → Modal view for machine details

### Gallery
Masonry grid → Timeline filters → Lightbox for full-size viewing

### Contact
2-column layout: Form (left) + Info + India map (right)

## Animation & Interactions
- Minimal, purposeful animations
- Fade-in on scroll for sections
- Smooth hover states on cards (subtle lift + shadow)
- Gold border glow on CTA hover
- No distracting effects - maintain professional dignity

This heritage design conveys 30+ years of trusted service through authentic imagery, traditional color palettes, and time-tested design patterns that resonate with Indian business values.