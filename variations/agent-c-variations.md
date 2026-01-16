# Agent C Design Variations

## Overview
Five distinct brutalist landing page variations, each exploring a different visual direction while maintaining the core content and messaging.

---

## C1: Wireframe Ghost

### Concept
A minimal wireframe aesthetic where everything is rendered as outlines only - no fills, no solid backgrounds. The page appears as a technical blueprint or architectural drawing, with elements defined purely by their borders.

### Color Palette
- Background: `#FAFAFA` (near-white)
- Primary stroke: `#1A1A1A` (near-black)
- Secondary stroke: `#666666` (medium gray)
- Accent stroke: `#FF3E00` (orange, used sparingly)
- Dashed guides: `#CCCCCC` (light gray)

### Typography Changes
- Primary font: `'IBM Plex Mono'` at 400 weight (lighter than current)
- Headings: Outlined text effect using `-webkit-text-stroke`
- Body: Standard weight, slightly increased letter-spacing
- All text inherits stroke color, no solid fills on large text

### Layout Tweaks
- Remove all `bg-black` backgrounds, replace with borders only
- Add dashed grid lines as visual guides in background
- Cards become outlined boxes with no fill
- Increase whitespace between sections by 50%

### Signature Element
**Outlined typography**: Large headings appear as hollow letters with only their outlines visible, creating a technical drawing effect.

### CSS Changes

```css
/* C1: Wireframe Ghost - Add to index.css */

:root {
  --color-bg: #FAFAFA;
  --color-text: #1A1A1A;
  --color-stroke: #1A1A1A;
  --color-stroke-secondary: #666666;
  --color-accent: #FF3E00;
  --color-guide: #CCCCCC;
  --border-weight: 2px;
}

body {
  background-color: var(--color-bg);
  background-image:
    linear-gradient(var(--color-guide) 1px, transparent 1px),
    linear-gradient(90deg, var(--color-guide) 1px, transparent 1px);
  background-size: 40px 40px;
}

/* Outlined text effect */
.wireframe-heading {
  color: transparent;
  -webkit-text-stroke: 2px var(--color-stroke);
  text-stroke: 2px var(--color-stroke);
}

.wireframe-heading-accent {
  color: transparent;
  -webkit-text-stroke: 2px var(--color-accent);
  text-stroke: 2px var(--color-accent);
}

/* Ghost boxes - outline only */
.wireframe-box {
  background: transparent;
  border: var(--border-weight) solid var(--color-stroke);
}

.wireframe-box-dashed {
  background: transparent;
  border: var(--border-weight) dashed var(--color-stroke-secondary);
}

/* Inverted sections become outlined */
.wireframe-section-alt {
  background: transparent;
  border-top: var(--border-weight) solid var(--color-stroke);
  border-bottom: var(--border-weight) solid var(--color-stroke);
}

/* Highlight becomes underline */
.wireframe-highlight {
  background: transparent;
  color: var(--color-text);
  border-bottom: 3px solid var(--color-accent);
  padding-bottom: 2px;
}

/* Button/CTA style */
.wireframe-button {
  background: transparent;
  border: 2px solid var(--color-stroke);
  color: var(--color-stroke);
  padding: 0.75rem 1.5rem;
  transition: all 0.2s ease;
}

.wireframe-button:hover {
  border-color: var(--color-accent);
  color: var(--color-accent);
}
```

### Component Changes

**Hero.jsx**
```jsx
export default function Hero() {
  return (
    <section className="border-b-2 border-[#1A1A1A] p-8 md:p-16 md:p-24">
      <div className="max-w-4xl">
        <p className="font-mono text-sm uppercase tracking-[0.2em] mb-6 text-[#666666]">
          A methodology for AI-assisted frontend development
        </p>
        <h1 className="font-mono text-5xl md:text-7xl font-bold uppercase leading-none mb-8"
            style={{
              color: 'transparent',
              WebkitTextStroke: '2px #1A1A1A',
            }}>
          The<br />
          <span style={{ WebkitTextStroke: '2px #FF3E00' }}>Constraint</span><br />
          Method
        </h1>
        <p className="text-xl md:text-2xl max-w-xl leading-relaxed tracking-wide">
          Less freedom. Better results.<br />
          <span className="font-mono border-b-2 border-[#FF3E00]">This page is proof.</span>
        </p>
      </div>
    </section>
  )
}
```

**Problem.jsx**
```jsx
export default function Problem() {
  return (
    <section className="border-b-2 border-[#1A1A1A] p-8 md:p-16 md:p-24 bg-transparent">
      <div className="max-w-4xl">
        <h2 className="font-mono text-3xl md:text-4xl font-bold uppercase mb-8"
            style={{
              color: 'transparent',
              WebkitTextStroke: '1.5px #1A1A1A',
            }}>
          The Problem
        </h2>
        <div className="space-y-6 text-lg md:text-xl text-[#1A1A1A]">
          <p>
            "Make it look good" doesn't work.
          </p>
          <p>
            Open-ended prompts produce generic results. The AI has infinite
            choices, so it picks the safest ones. You get Bootstrap. You get
            gradient buttons. You get <span className="font-mono border-2 border-[#1A1A1A] px-2 py-1">corporate website #4,892</span>.
          </p>
          <p className="font-mono text-sm border-l-2 border-dashed border-[#666666] pl-4 text-[#666666]">
            The paradox: more freedom = worse output.
          </p>
        </div>
      </div>
    </section>
  )
}
```

**Solution.jsx**
```jsx
export default function Solution() {
  return (
    <section className="border-b-2 border-[#1A1A1A] p-8 md:p-16 md:p-24">
      <div className="max-w-4xl">
        <h2 className="font-mono text-3xl md:text-4xl font-bold uppercase mb-8"
            style={{
              color: 'transparent',
              WebkitTextStroke: '1.5px #1A1A1A',
            }}>
          The Solution
        </h2>
        <p className="text-xl md:text-2xl mb-12">
          Constrain the problem. <span className="border-b-3 border-[#FF3E00]">Liberate the output.</span>
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="border-2 border-[#1A1A1A] p-6 bg-transparent">
            <div className="font-mono text-4xl font-bold mb-2"
                 style={{ color: 'transparent', WebkitTextStroke: '1.5px #FF3E00' }}>01</div>
            <h3 className="font-mono text-xl font-bold uppercase mb-2">Show</h3>
            <p className="text-[#666666]">Reference images beat descriptions. Give the AI something to match, not imagine.</p>
          </div>

          <div className="border-2 border-dashed border-[#1A1A1A] p-6 bg-transparent">
            <div className="font-mono text-4xl font-bold mb-2"
                 style={{ color: 'transparent', WebkitTextStroke: '1.5px #FF3E00' }}>02</div>
            <h3 className="font-mono text-xl font-bold uppercase mb-2">Limit</h3>
            <p className="text-[#666666]">Pick your constraints upfront. Two colors. One font. Fewer choices = sharper output.</p>
          </div>

          <div className="border-2 border-[#1A1A1A] p-6 bg-transparent">
            <div className="font-mono text-4xl font-bold mb-2"
                 style={{ color: 'transparent', WebkitTextStroke: '1.5px #FF3E00' }}>03</div>
            <h3 className="font-mono text-xl font-bold uppercase mb-2">Specify</h3>
            <p className="text-[#666666]">"Make the header 20px smaller" beats "make it look better." Precision over vibes.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
```

---

## C2: Massive Type

### Concept
Typography becomes the dominant design element. Headings are absurdly large, filling the viewport width. Text wraps and breaks intentionally, creating visual interest through sheer scale. The words themselves become the visual design.

### Color Palette
- Background: `#000000` (pure black)
- Primary text: `#FFFFFF` (pure white)
- Accent: `#FFFF00` (electric yellow)
- Muted: `#444444` (dark gray for less important text)

### Typography Changes
- Hero heading: `clamp(5rem, 20vw, 15rem)` - massive responsive sizing
- Section headings: `clamp(3rem, 12vw, 8rem)`
- Body text remains readable at 1.125rem
- Letter-spacing tightened to `-0.05em` on large text
- Font: `'Impact', 'Haettenschweiler', sans-serif` for headings, monospace for body

### Layout Tweaks
- Full-bleed sections with no max-width on headings
- Headings span 100% width, text wraps naturally
- Body content in narrow column (max-width: 480px)
- Vertical spacing dramatically increased between sections

### Signature Element
**Viewport-filling headings**: The word "CONSTRAINT" literally fills the screen width, with letters potentially clipped at edges, creating an overwhelming, impactful presence.

### CSS Changes

```css
/* C2: Massive Type - Add to index.css */

@import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');

:root {
  --color-bg: #000000;
  --color-text: #FFFFFF;
  --color-accent: #FFFF00;
  --color-muted: #444444;
  --font-display: 'Anton', 'Impact', sans-serif;
  --font-mono: 'IBM Plex Mono', monospace;
}

body {
  background-color: var(--color-bg);
  color: var(--color-text);
}

.massive-heading {
  font-family: var(--font-display);
  font-size: clamp(5rem, 20vw, 15rem);
  line-height: 0.85;
  letter-spacing: -0.03em;
  text-transform: uppercase;
  margin: 0;
  width: 100%;
  overflow: hidden;
}

.massive-heading-section {
  font-family: var(--font-display);
  font-size: clamp(3rem, 12vw, 8rem);
  line-height: 0.9;
  letter-spacing: -0.02em;
  text-transform: uppercase;
}

.massive-accent {
  color: var(--color-accent);
}

.massive-body {
  max-width: 480px;
  font-family: var(--font-mono);
  font-size: 1.125rem;
  line-height: 1.6;
  color: var(--color-text);
}

.massive-muted {
  color: var(--color-muted);
}

.massive-highlight {
  background: var(--color-accent);
  color: var(--color-bg);
  padding: 0 0.25em;
}

.massive-section {
  padding: 6rem 2rem;
  border-bottom: 1px solid var(--color-muted);
}

@media (min-width: 768px) {
  .massive-section {
    padding: 10rem 4rem;
  }
}
```

### Component Changes

**Hero.jsx**
```jsx
export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center p-8 md:p-16 border-b border-[#444444]">
      <p className="font-mono text-sm uppercase tracking-[0.3em] mb-8 text-[#444444]">
        A methodology for AI-assisted frontend development
      </p>
      <h1 style={{
        fontFamily: "'Anton', Impact, sans-serif",
        fontSize: 'clamp(4rem, 18vw, 12rem)',
        lineHeight: 0.85,
        letterSpacing: '-0.03em',
        textTransform: 'uppercase',
        margin: 0,
      }}>
        <span className="text-white block">THE</span>
        <span className="text-[#FFFF00] block">CONSTRAINT</span>
        <span className="text-white block">METHOD</span>
      </h1>
      <div className="mt-12 max-w-md">
        <p className="font-mono text-lg md:text-xl text-white leading-relaxed">
          Less freedom. Better results.
        </p>
        <p className="font-mono text-lg md:text-xl mt-2">
          <span className="bg-[#FFFF00] text-black px-1">This page is proof.</span>
        </p>
      </div>
    </section>
  )
}
```

**Problem.jsx**
```jsx
export default function Problem() {
  return (
    <section className="p-8 md:p-16 py-24 md:py-40 border-b border-[#444444]">
      <h2 style={{
        fontFamily: "'Anton', Impact, sans-serif",
        fontSize: 'clamp(3rem, 15vw, 10rem)',
        lineHeight: 0.9,
        letterSpacing: '-0.02em',
        textTransform: 'uppercase',
      }} className="text-white mb-12">
        THE<br />PROBLEM
      </h2>
      <div className="max-w-lg space-y-6 font-mono text-lg">
        <p className="text-white">
          "Make it look good" doesn't work.
        </p>
        <p className="text-[#666666]">
          Open-ended prompts produce generic results. The AI has infinite
          choices, so it picks the safest ones. You get Bootstrap. You get
          gradient buttons. You get{' '}
          <span className="bg-[#FFFF00] text-black px-1">corporate website #4,892</span>.
        </p>
        <p className="text-[#FFFF00] text-2xl mt-8">
          More freedom = worse output.
        </p>
      </div>
    </section>
  )
}
```

**Solution.jsx**
```jsx
export default function Solution() {
  return (
    <section className="p-8 md:p-16 py-24 md:py-40 border-b border-[#444444]">
      <h2 style={{
        fontFamily: "'Anton', Impact, sans-serif",
        fontSize: 'clamp(3rem, 15vw, 10rem)',
        lineHeight: 0.9,
        letterSpacing: '-0.02em',
        textTransform: 'uppercase',
      }} className="text-white mb-4">
        THE<br />SOLUTION
      </h2>
      <p className="font-mono text-xl md:text-2xl mb-16 max-w-lg">
        Constrain the problem. <span className="text-[#FFFF00]">Liberate the output.</span>
      </p>

      <div className="space-y-16">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <span style={{
            fontFamily: "'Anton', Impact, sans-serif",
            fontSize: 'clamp(4rem, 10vw, 8rem)',
            lineHeight: 0.9,
          }} className="text-[#FFFF00]">01</span>
          <div className="max-w-md">
            <h3 className="font-mono text-2xl uppercase mb-2">Show</h3>
            <p className="font-mono text-[#666666]">Reference images beat descriptions. Give the AI something to match, not imagine.</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-start">
          <span style={{
            fontFamily: "'Anton', Impact, sans-serif",
            fontSize: 'clamp(4rem, 10vw, 8rem)',
            lineHeight: 0.9,
          }} className="text-[#FFFF00]">02</span>
          <div className="max-w-md">
            <h3 className="font-mono text-2xl uppercase mb-2">Limit</h3>
            <p className="font-mono text-[#666666]">Pick your constraints upfront. Two colors. One font. Fewer choices = sharper output.</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-start">
          <span style={{
            fontFamily: "'Anton', Impact, sans-serif",
            fontSize: 'clamp(4rem, 10vw, 8rem)',
            lineHeight: 0.9,
          }} className="text-[#FFFF00]">03</span>
          <div className="max-w-md">
            <h3 className="font-mono text-2xl uppercase mb-2">Specify</h3>
            <p className="font-mono text-[#666666]">"Make the header 20px smaller" beats "make it look better." Precision over vibes.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
```

---

## C3: Broken Grid Chaos

### Concept
Elements intentionally overlap, rotate, and break free from traditional alignment. Text runs at angles, boxes collide, and negative margins create visual tension. Controlled chaos that feels like a deconstructed magazine spread.

### Color Palette
- Background: `#F0F0F0` (light gray)
- Primary: `#000000` (black)
- Accent 1: `#FF0000` (pure red)
- Accent 2: `#0000FF` (pure blue)
- Overlay: `#FFFFFF` at 90% opacity

### Typography Changes
- Mixed orientation: some text vertical, some rotated -3 to 5 degrees
- Variable sizing within same section
- `'Space Grotesk'` for headings (geometric, modern)
- Body remains monospace

### Layout Tweaks
- Elements overlap using negative margins and absolute positioning
- Content containers rotated slightly
- Grid columns intentionally misaligned
- Some elements extend beyond viewport

### Signature Element
**Colliding layers**: Multiple content boxes overlap each other with different background colors showing through, creating depth and visual energy through deliberate collision.

### CSS Changes

```css
/* C3: Broken Grid Chaos - Add to index.css */

@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;700&display=swap');

:root {
  --color-bg: #F0F0F0;
  --color-text: #000000;
  --color-red: #FF0000;
  --color-blue: #0000FF;
  --color-overlay: rgba(255, 255, 255, 0.9);
  --font-display: 'Space Grotesk', sans-serif;
  --font-mono: 'IBM Plex Mono', monospace;
}

body {
  background-color: var(--color-bg);
  overflow-x: hidden;
}

.chaos-section {
  position: relative;
  padding: 4rem 2rem;
  min-height: 80vh;
}

.chaos-box {
  background: var(--color-overlay);
  border: 3px solid var(--color-text);
  padding: 2rem;
  position: relative;
}

.chaos-box-red {
  background: var(--color-red);
  color: white;
}

.chaos-box-blue {
  background: var(--color-blue);
  color: white;
}

.chaos-rotate-left {
  transform: rotate(-3deg);
}

.chaos-rotate-right {
  transform: rotate(2deg);
}

.chaos-rotate-heavy {
  transform: rotate(-8deg);
}

.chaos-overlap-left {
  margin-left: -3rem;
  margin-top: -2rem;
}

.chaos-overlap-right {
  margin-right: -3rem;
  margin-top: -4rem;
}

.chaos-vertical-text {
  writing-mode: vertical-rl;
  text-orientation: mixed;
}

.chaos-heading {
  font-family: var(--font-display);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: -0.02em;
}

.chaos-offset-box {
  position: absolute;
  padding: 0.5rem 1rem;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  text-transform: uppercase;
}

.chaos-stripe {
  position: absolute;
  height: 20px;
  background: repeating-linear-gradient(
    90deg,
    var(--color-text),
    var(--color-text) 10px,
    transparent 10px,
    transparent 20px
  );
}

/* Z-index layers */
.z-back { z-index: 1; }
.z-mid { z-index: 2; }
.z-front { z-index: 3; }
```

### Component Changes

**Hero.jsx**
```jsx
export default function Hero() {
  return (
    <section className="relative min-h-screen p-8 md:p-16 overflow-hidden bg-[#F0F0F0]">
      {/* Background stripe */}
      <div className="absolute top-1/4 left-0 right-0 h-8"
           style={{
             background: 'repeating-linear-gradient(90deg, #000 0, #000 20px, transparent 20px, transparent 40px)',
             transform: 'rotate(-2deg)',
             opacity: 0.1
           }} />

      {/* Floating label */}
      <div className="absolute top-8 right-8 bg-[#FF0000] text-white px-4 py-2 font-mono text-xs uppercase"
           style={{ transform: 'rotate(3deg)' }}>
        AI-assisted frontend
      </div>

      <div className="relative pt-20 md:pt-32">
        <p className="font-mono text-sm uppercase tracking-widest mb-4 transform -rotate-1">
          A methodology for AI-assisted frontend development
        </p>

        <div className="relative">
          <h1 className="text-6xl md:text-8xl font-bold uppercase leading-none mb-8"
              style={{ fontFamily: "'Space Grotesk', sans-serif", transform: 'rotate(-2deg)' }}>
            <span className="block">The</span>
            <span className="block bg-black text-white px-4 inline-block transform rotate-1 -ml-4">
              Constraint
            </span>
            <span className="block">Method</span>
          </h1>

          {/* Overlapping box */}
          <div className="absolute -bottom-8 right-0 md:right-20 bg-[#0000FF] text-white p-6 max-w-xs"
               style={{ transform: 'rotate(4deg)' }}>
            <p className="font-mono text-lg">Less freedom. Better results.</p>
          </div>
        </div>

        <p className="font-mono text-xl max-w-sm mt-20 transform rotate-1">
          <span className="bg-[#FF0000] text-white px-2">This page is proof.</span>
        </p>
      </div>

      {/* Vertical text */}
      <div className="absolute bottom-20 right-4 md:right-8 font-mono text-xs uppercase tracking-widest text-gray-400"
           style={{ writingMode: 'vertical-rl' }}>
        Scroll to continue
      </div>
    </section>
  )
}
```

**Problem.jsx**
```jsx
export default function Problem() {
  return (
    <section className="relative p-8 md:p-16 py-24 bg-[#F0F0F0] overflow-hidden">
      {/* Offset background box */}
      <div className="absolute top-12 left-8 right-8 bottom-12 bg-black"
           style={{ transform: 'rotate(1deg)' }} />

      <div className="relative z-10 max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold uppercase mb-12 text-white"
            style={{ fontFamily: "'Space Grotesk', sans-serif", transform: 'rotate(-1deg)' }}>
          The Problem
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 border-3 border-black"
               style={{ transform: 'rotate(-2deg)', marginTop: '2rem' }}>
            <p className="text-xl">
              "Make it look good" doesn't work.
            </p>
          </div>

          <div className="bg-[#FF0000] text-white p-6"
               style={{ transform: 'rotate(3deg)', marginTop: '-1rem' }}>
            <p className="font-mono">
              Open-ended prompts produce generic results. You get{' '}
              <span className="bg-white text-black px-1">corporate website #4,892</span>.
            </p>
          </div>
        </div>

        <div className="mt-8 bg-white p-4 max-w-md ml-auto"
             style={{ transform: 'rotate(1deg)' }}>
          <p className="font-mono text-sm border-l-4 border-[#0000FF] pl-4">
            The paradox: more freedom = worse output.
          </p>
        </div>
      </div>
    </section>
  )
}
```

**Solution.jsx**
```jsx
export default function Solution() {
  return (
    <section className="relative p-8 md:p-16 py-24 bg-[#F0F0F0] overflow-hidden">
      <h2 className="text-4xl md:text-6xl font-bold uppercase mb-4"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
        The Solution
      </h2>
      <p className="text-xl md:text-2xl mb-16 transform -rotate-1">
        Constrain the problem. <span className="bg-black text-white px-2 transform rotate-2 inline-block">Liberate the output.</span>
      </p>

      <div className="relative">
        {/* Card 1 */}
        <div className="bg-white border-3 border-black p-8 max-w-sm"
             style={{ transform: 'rotate(-3deg)' }}>
          <div className="font-mono text-6xl font-bold text-[#FF0000] mb-4">01</div>
          <h3 className="font-mono text-2xl font-bold uppercase mb-2">Show</h3>
          <p>Reference images beat descriptions.</p>
        </div>

        {/* Card 2 - overlapping */}
        <div className="bg-[#0000FF] text-white p-8 max-w-sm -mt-8 ml-20 md:ml-40"
             style={{ transform: 'rotate(2deg)' }}>
          <div className="font-mono text-6xl font-bold text-white/30 mb-4">02</div>
          <h3 className="font-mono text-2xl font-bold uppercase mb-2">Limit</h3>
          <p>Two colors. One font. Fewer choices = sharper output.</p>
        </div>

        {/* Card 3 - overlapping more */}
        <div className="bg-black text-white p-8 max-w-sm -mt-12 ml-8"
             style={{ transform: 'rotate(-1deg)' }}>
          <div className="font-mono text-6xl font-bold text-[#FF0000] mb-4">03</div>
          <h3 className="font-mono text-2xl font-bold uppercase mb-2">Specify</h3>
          <p>"Make the header 20px smaller" beats "make it look better."</p>
        </div>

        {/* Floating accent */}
        <div className="absolute top-4 right-4 bg-[#FF0000] text-white px-4 py-2 font-mono text-sm"
             style={{ transform: 'rotate(8deg)' }}>
          Precision over vibes
        </div>
      </div>
    </section>
  )
}
```

---

## C4: Classified Document

### Concept
The page appears as a declassified government document, complete with redaction bars, stamps, and official document styling. Some text is "classified" (redacted), creating mystery and intrigue while maintaining readability.

### Color Palette
- Background: `#FDF5E6` (aged paper cream)
- Text: `#1C1C1C` (dark gray/black)
- Redaction: `#000000` (pure black)
- Stamp red: `#8B0000` (dark red)
- Stamp blue: `#00008B` (dark blue)
- Faded text: `#666666`

### Typography Changes
- Primary: `'Courier New'` or `'Courier Prime'` (typewriter style)
- All caps for headers with letter-spacing
- Irregular alignment to simulate typed documents
- "Classified" stamps use stencil-style fonts

### Layout Tweaks
- Single column document layout
- Horizontal rules between sections
- "TOP SECRET" headers and footers
- Margin annotations and stamp marks
- Numbered paragraphs like legal documents

### Signature Element
**Redaction bars**: Key phrases are covered with black bars, with some "partially revealed" using semi-transparent overlays, implying hidden information.

### CSS Changes

```css
/* C4: Classified Document - Add to index.css */

@import url('https://fonts.googleapis.com/css2?family=Courier+Prime:wght@400;700&family=Special+Elite&display=swap');

:root {
  --color-paper: #FDF5E6;
  --color-text: #1C1C1C;
  --color-redacted: #000000;
  --color-stamp-red: #8B0000;
  --color-stamp-blue: #00008B;
  --color-faded: #888888;
  --font-typewriter: 'Courier Prime', 'Courier New', monospace;
  --font-stamp: 'Special Elite', cursive;
}

body {
  background-color: var(--color-paper);
  background-image:
    url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E");
  color: var(--color-text);
  font-family: var(--font-typewriter);
}

.classified-header {
  font-family: var(--font-stamp);
  font-size: 0.875rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--color-stamp-red);
  border: 2px solid var(--color-stamp-red);
  padding: 0.25rem 0.75rem;
  display: inline-block;
  transform: rotate(-2deg);
}

.classified-stamp {
  font-family: var(--font-stamp);
  font-size: 2rem;
  color: var(--color-stamp-red);
  border: 4px solid var(--color-stamp-red);
  padding: 0.5rem 1rem;
  transform: rotate(-5deg);
  opacity: 0.7;
  position: absolute;
}

.redacted {
  background: var(--color-redacted);
  color: var(--color-redacted);
  padding: 0 0.25em;
  user-select: none;
}

.redacted-partial {
  background: rgba(0, 0, 0, 0.7);
  color: rgba(255, 255, 255, 0.3);
  padding: 0 0.25em;
}

.document-section {
  border-bottom: 1px solid var(--color-faded);
  padding: 2rem 0;
  position: relative;
}

.paragraph-number {
  font-size: 0.75rem;
  color: var(--color-faded);
  margin-right: 1rem;
}

.margin-note {
  position: absolute;
  right: -2rem;
  font-size: 0.625rem;
  color: var(--color-stamp-blue);
  transform: rotate(90deg);
  transform-origin: right center;
}

.typewriter-heading {
  font-family: var(--font-typewriter);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  border-bottom: 2px solid var(--color-text);
  padding-bottom: 0.5rem;
  display: inline-block;
}

.document-footer {
  font-size: 0.75rem;
  color: var(--color-faded);
  text-align: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}
```

### Component Changes

**Hero.jsx**
```jsx
export default function Hero() {
  return (
    <section className="p-8 md:p-16 relative" style={{ fontFamily: "'Courier Prime', monospace" }}>
      {/* Document header */}
      <div className="flex justify-between items-start mb-8 border-b-2 border-black pb-4">
        <div>
          <span className="text-xs tracking-widest text-[#888]">DOCUMENT ID: TCM-2026-001</span>
        </div>
        <div className="border-2 border-[#8B0000] text-[#8B0000] px-3 py-1 text-sm tracking-widest"
             style={{ fontFamily: "'Special Elite', cursive", transform: 'rotate(-2deg)' }}>
          TOP SECRET
        </div>
      </div>

      {/* Stamp overlay */}
      <div className="absolute top-24 right-16 text-[#8B0000] border-4 border-[#8B0000] px-4 py-2 text-3xl opacity-60"
           style={{ fontFamily: "'Special Elite', cursive", transform: 'rotate(-12deg)' }}>
        DECLASSIFIED
      </div>

      <div className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.3em] mb-6 text-[#888]">
          RE: Methodology for AI-assisted frontend development
        </p>

        <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-wide leading-tight mb-8">
          THE<br />
          <span className="border-b-4 border-black">CONSTRAINT</span><br />
          METHOD
        </h1>

        <div className="space-y-4 text-lg">
          <p>
            <span className="text-[#888] text-sm mr-4">1.1</span>
            Less freedom. Better results.
          </p>
          <p>
            <span className="text-[#888] text-sm mr-4">1.2</span>
            This page is <span className="bg-black text-black px-1">classified</span> proof.
          </p>
        </div>
      </div>

      {/* Footer classification */}
      <div className="mt-16 pt-4 border-t border-[#888] text-xs text-center text-[#888] tracking-widest">
        CLASSIFICATION: TOP SECRET // NOFORN // REL TO USA
      </div>
    </section>
  )
}
```

**Problem.jsx**
```jsx
export default function Problem() {
  return (
    <section className="p-8 md:p-16 border-t-2 border-black" style={{ fontFamily: "'Courier Prime', monospace" }}>
      <div className="max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-wide mb-8 border-b-2 border-black pb-2 inline-block">
          SECTION 2: THE PROBLEM
        </h2>

        <div className="space-y-6">
          <p className="flex">
            <span className="text-[#888] text-sm mr-4 shrink-0">2.1</span>
            <span>"Make it look good" doesn't work.</span>
          </p>

          <p className="flex">
            <span className="text-[#888] text-sm mr-4 shrink-0">2.2</span>
            <span>
              Open-ended prompts produce <span className="bg-black text-black px-1">generic</span> results.
              The AI has <span className="bg-black/70 text-white/30 px-1">infinite</span> choices,
              so it picks the safest ones.
            </span>
          </p>

          <p className="flex">
            <span className="text-[#888] text-sm mr-4 shrink-0">2.3</span>
            <span>
              You get Bootstrap. You get gradient buttons. You get{' '}
              <span className="border border-black px-2">corporate website #4,892</span>.
            </span>
          </p>

          <div className="ml-8 mt-8 pl-4 border-l-4 border-[#8B0000]">
            <p className="text-sm uppercase tracking-wide">
              <span className="text-[#8B0000] font-bold">CLASSIFIED FINDING:</span><br />
              The paradox: more freedom = worse output.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
```

**Solution.jsx**
```jsx
export default function Solution() {
  return (
    <section className="p-8 md:p-16 border-t-2 border-black relative" style={{ fontFamily: "'Courier Prime', monospace" }}>
      {/* Side stamp */}
      <div className="absolute top-1/2 -right-2 text-[#00008B] text-xs tracking-widest"
           style={{ transform: 'rotate(90deg) translateX(-50%)', transformOrigin: 'right center' }}>
        PAGE 2 OF 4
      </div>

      <div className="max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-wide mb-4 border-b-2 border-black pb-2 inline-block">
          SECTION 3: THE SOLUTION
        </h2>

        <p className="text-lg mb-12">
          <span className="text-[#888] text-sm mr-4">3.0</span>
          Constrain the problem. <span className="bg-[#8B0000] text-white px-2">Liberate the output.</span>
        </p>

        <div className="space-y-8">
          <div className="border border-black p-6">
            <div className="flex items-baseline mb-4">
              <span className="text-[#888] text-sm mr-4">3.1</span>
              <span className="font-bold uppercase tracking-wide">PROTOCOL: SHOW</span>
            </div>
            <p className="ml-8">
              Reference images beat descriptions. Give the AI something to match,
              not <span className="bg-black text-black">imagine</span>.
            </p>
          </div>

          <div className="border border-black p-6 bg-black text-white relative">
            <div className="absolute -top-3 left-4 bg-[#FDF5E6] text-[#8B0000] px-2 text-xs uppercase tracking-wider">
              High Priority
            </div>
            <div className="flex items-baseline mb-4">
              <span className="text-[#888] text-sm mr-4">3.2</span>
              <span className="font-bold uppercase tracking-wide">PROTOCOL: LIMIT</span>
            </div>
            <p className="ml-8">
              Pick your constraints upfront. Two colors. One font. Fewer choices = sharper output.
            </p>
          </div>

          <div className="border border-black p-6">
            <div className="flex items-baseline mb-4">
              <span className="text-[#888] text-sm mr-4">3.3</span>
              <span className="font-bold uppercase tracking-wide">PROTOCOL: SPECIFY</span>
            </div>
            <p className="ml-8">
              "Make the header 20px smaller" beats "make it look better."
              <span className="border-b-2 border-[#8B0000]">Precision over vibes.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
```

---

## C5: Hazard Industrial

### Concept
Industrial warning aesthetic with hazard tape patterns, caution symbols, and high-visibility design language. The page feels like a construction site or factory floor with urgent, attention-grabbing visual elements.

### Color Palette
- Background: `#1A1A1A` (near-black)
- Primary: `#FFD700` (safety yellow/gold)
- Secondary: `#FFFFFF` (white)
- Danger: `#FF4500` (orange-red)
- Stripe pattern: Black and yellow alternating

### Typography Changes
- Primary: `'Oswald'` condensed sans-serif (industrial feel)
- All uppercase, heavy weight
- Warning labels in stencil-style font
- Body text in high-contrast white on dark

### Layout Tweaks
- Hazard tape borders on sections
- Diagonal stripe patterns as dividers
- Warning iconography (triangles, exclamation marks)
- Heavy use of borders and containment boxes

### Signature Element
**Hazard tape borders**: Sections are divided by animated or static diagonal stripe patterns mimicking caution/hazard tape, creating visual rhythm and urgency.

### CSS Changes

```css
/* C5: Hazard Industrial - Add to index.css */

@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;600;700&family=Black+Ops+One&display=swap');

:root {
  --color-bg: #1A1A1A;
  --color-text: #FFFFFF;
  --color-yellow: #FFD700;
  --color-danger: #FF4500;
  --font-industrial: 'Oswald', sans-serif;
  --font-stencil: 'Black Ops One', cursive;
}

body {
  background-color: var(--color-bg);
  color: var(--color-text);
  font-family: var(--font-industrial);
}

/* Hazard tape pattern */
.hazard-tape {
  background: repeating-linear-gradient(
    -45deg,
    var(--color-yellow),
    var(--color-yellow) 20px,
    #000000 20px,
    #000000 40px
  );
  height: 20px;
  width: 100%;
}

.hazard-tape-thin {
  background: repeating-linear-gradient(
    -45deg,
    var(--color-yellow),
    var(--color-yellow) 10px,
    #000000 10px,
    #000000 20px
  );
  height: 10px;
}

.hazard-border {
  border: 4px solid var(--color-yellow);
  position: relative;
}

.hazard-border::before {
  content: '';
  position: absolute;
  top: -8px;
  left: -8px;
  right: -8px;
  bottom: -8px;
  border: 4px solid var(--color-yellow);
  pointer-events: none;
}

.industrial-heading {
  font-family: var(--font-industrial);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--color-yellow);
}

.stencil-text {
  font-family: var(--font-stencil);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.warning-box {
  background: var(--color-yellow);
  color: #000000;
  padding: 1rem 1.5rem;
  font-weight: 700;
  text-transform: uppercase;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.warning-box::before {
  content: '';
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 18px solid #000000;
  display: inline-block;
}

.danger-box {
  background: var(--color-danger);
  color: #000000;
  font-weight: 700;
  padding: 0.5rem 1rem;
}

.industrial-section {
  padding: 4rem 2rem;
}

.chevron-pattern {
  background: repeating-linear-gradient(
    90deg,
    transparent 0,
    transparent 20px,
    var(--color-yellow) 20px,
    var(--color-yellow) 22px
  );
}
```

### Component Changes

**Hero.jsx**
```jsx
export default function Hero() {
  return (
    <section className="bg-[#1A1A1A] text-white">
      {/* Hazard tape top */}
      <div style={{
        background: 'repeating-linear-gradient(-45deg, #FFD700, #FFD700 20px, #000 20px, #000 40px)',
        height: '24px'
      }} />

      <div className="p-8 md:p-16">
        {/* Warning label */}
        <div className="inline-flex items-center gap-3 bg-[#FFD700] text-black px-4 py-2 mb-8">
          <span style={{
            width: 0,
            height: 0,
            borderLeft: '12px solid transparent',
            borderRight: '12px solid transparent',
            borderBottom: '20px solid black',
            display: 'inline-block'
          }} />
          <span className="font-bold uppercase tracking-wider" style={{ fontFamily: "'Oswald', sans-serif" }}>
            Methodology Alert
          </span>
        </div>

        <p className="text-sm uppercase tracking-[0.3em] mb-4 text-[#888]"
           style={{ fontFamily: "'Oswald', sans-serif" }}>
          AI-assisted frontend development
        </p>

        <h1 className="text-6xl md:text-8xl font-bold uppercase leading-none mb-8 text-[#FFD700]"
            style={{ fontFamily: "'Oswald', sans-serif", letterSpacing: '0.02em' }}>
          THE<br />
          CONSTRAINT<br />
          <span className="text-white">METHOD</span>
        </h1>

        <div className="flex flex-col md:flex-row gap-4 items-start">
          <p className="text-xl md:text-2xl max-w-md" style={{ fontFamily: "'Oswald', sans-serif" }}>
            Less freedom. Better results.
          </p>
          <div className="bg-[#FF4500] text-black px-4 py-2 font-bold uppercase"
               style={{ fontFamily: "'Black Ops One', cursive" }}>
            This page is proof
          </div>
        </div>
      </div>

      {/* Hazard tape bottom */}
      <div style={{
        background: 'repeating-linear-gradient(-45deg, #FFD700, #FFD700 20px, #000 20px, #000 40px)',
        height: '12px'
      }} />
    </section>
  )
}
```

**Problem.jsx**
```jsx
export default function Problem() {
  return (
    <section className="bg-[#1A1A1A] text-white p-8 md:p-16">
      <div className="max-w-4xl">
        {/* Section header with warning style */}
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 bg-[#FFD700] flex items-center justify-center">
            <span className="text-black text-3xl font-bold">!</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold uppercase text-[#FFD700]"
              style={{ fontFamily: "'Oswald', sans-serif" }}>
            The Problem
          </h2>
        </div>

        <div className="space-y-6">
          <p className="text-xl" style={{ fontFamily: "'Oswald', sans-serif" }}>
            "Make it look good" <span className="text-[#FF4500]">doesn't work.</span>
          </p>

          <div className="border-4 border-[#FFD700] p-6">
            <p className="text-lg" style={{ fontFamily: "'Oswald', sans-serif" }}>
              Open-ended prompts produce generic results. The AI has infinite
              choices, so it picks the safest ones.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <span className="bg-[#FFD700] text-black px-3 py-1 font-bold uppercase text-sm">Bootstrap</span>
            <span className="bg-[#FFD700] text-black px-3 py-1 font-bold uppercase text-sm">Gradient Buttons</span>
            <span className="bg-[#FF4500] text-black px-3 py-1 font-bold uppercase text-sm">Corporate Website #4,892</span>
          </div>

          <div className="mt-8 bg-[#FFD700] text-black p-4">
            <p className="font-bold uppercase text-lg" style={{ fontFamily: "'Black Ops One', cursive" }}>
              Warning: More freedom = worse output
            </p>
          </div>
        </div>
      </div>

      {/* Thin hazard tape */}
      <div className="mt-12" style={{
        background: 'repeating-linear-gradient(-45deg, #FFD700, #FFD700 10px, #000 10px, #000 20px)',
        height: '8px'
      }} />
    </section>
  )
}
```

**Solution.jsx**
```jsx
export default function Solution() {
  return (
    <section className="bg-[#FFD700] text-black p-8 md:p-16">
      <div className="max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4"
            style={{ fontFamily: "'Oswald', sans-serif" }}>
          The Solution
        </h2>
        <p className="text-xl mb-12" style={{ fontFamily: "'Oswald', sans-serif" }}>
          Constrain the problem. <span className="bg-black text-[#FFD700] px-2">Liberate the output.</span>
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-black text-white p-6 border-4 border-white">
            <div className="text-5xl font-bold text-[#FFD700] mb-4"
                 style={{ fontFamily: "'Black Ops One', cursive" }}>01</div>
            <h3 className="text-2xl font-bold uppercase mb-2" style={{ fontFamily: "'Oswald', sans-serif" }}>
              Show
            </h3>
            <p style={{ fontFamily: "'Oswald', sans-serif" }}>
              Reference images beat descriptions. Give the AI something to match.
            </p>
          </div>

          <div className="bg-[#FF4500] text-black p-6 border-4 border-black">
            <div className="text-5xl font-bold mb-4"
                 style={{ fontFamily: "'Black Ops One', cursive" }}>02</div>
            <h3 className="text-2xl font-bold uppercase mb-2" style={{ fontFamily: "'Oswald', sans-serif" }}>
              Limit
            </h3>
            <p style={{ fontFamily: "'Oswald', sans-serif" }}>
              Two colors. One font. Fewer choices = sharper output.
            </p>
          </div>

          <div className="bg-black text-white p-6 border-4 border-[#FFD700]">
            <div className="text-5xl font-bold text-[#FFD700] mb-4"
                 style={{ fontFamily: "'Black Ops One', cursive" }}>03</div>
            <h3 className="text-2xl font-bold uppercase mb-2" style={{ fontFamily: "'Oswald', sans-serif" }}>
              Specify
            </h3>
            <p style={{ fontFamily: "'Oswald', sans-serif" }}>
              "Make the header 20px smaller" beats "make it look better."
            </p>
          </div>
        </div>

        {/* Bottom warning */}
        <div className="mt-12 flex items-center justify-center gap-4">
          <div style={{
            background: 'repeating-linear-gradient(-45deg, #000, #000 10px, #FFD700 10px, #FFD700 20px)',
            height: '4px',
            flex: 1
          }} />
          <span className="font-bold uppercase tracking-wider" style={{ fontFamily: "'Black Ops One', cursive" }}>
            Precision Over Vibes
          </span>
          <div style={{
            background: 'repeating-linear-gradient(-45deg, #000, #000 10px, #FFD700 10px, #FFD700 20px)',
            height: '4px',
            flex: 1
          }} />
        </div>
      </div>
    </section>
  )
}
```

**HowItWorks.jsx**
```jsx
export default function HowItWorks() {
  return (
    <section className="bg-[#1A1A1A] text-white">
      {/* Hazard tape */}
      <div style={{
        background: 'repeating-linear-gradient(-45deg, #FFD700, #FFD700 20px, #000 20px, #000 40px)',
        height: '16px'
      }} />

      <div className="p-8 md:p-16">
        <div className="max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold uppercase mb-8 text-[#FFD700]"
              style={{ fontFamily: "'Oswald', sans-serif" }}>
            How This Page Was Built
          </h2>

          <div className="space-y-8">
            <div className="border-l-4 border-[#FFD700] pl-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-[#FFD700] text-black px-2 py-1 text-sm font-bold">CONSTRAINT #1</span>
              </div>
              <h3 className="text-xl font-bold uppercase mb-2" style={{ fontFamily: "'Oswald', sans-serif" }}>
                Brutalist Aesthetic
              </h3>
              <p className="text-gray-300">
                Black and white, monospace type, raw borders, no gradients, no shadows.
              </p>
              <div className="mt-3 bg-[#333] p-3 font-mono text-sm text-[#FFD700]">
                "Use a brutalist style: high contrast, visible grid, intentional roughness"
              </div>
            </div>

            <div className="border-l-4 border-[#FF4500] pl-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-[#FF4500] text-black px-2 py-1 text-sm font-bold">CONSTRAINT #2</span>
              </div>
              <h3 className="text-xl font-bold uppercase mb-2" style={{ fontFamily: "'Oswald', sans-serif" }}>
                Three Sections
              </h3>
              <p className="text-gray-300">
                Problem - Solution - How. No navigation, no footer links, no scope creep.
              </p>
            </div>

            <div className="border-l-4 border-[#FFD700] pl-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-[#FFD700] text-black px-2 py-1 text-sm font-bold">CONSTRAINT #3</span>
              </div>
              <h3 className="text-xl font-bold uppercase mb-2" style={{ fontFamily: "'Oswald', sans-serif" }}>
                Specific Feedback
              </h3>
              <p className="text-gray-300">
                Exactly what to change: padding, font size, spacing.
              </p>
              <div className="mt-3 bg-[#333] p-3 font-mono text-sm text-[#FFD700]">
                "Make the heading text-7xl instead of text-5xl"
              </div>
            </div>
          </div>

          <div className="mt-12 border-4 border-[#FFD700] p-6">
            <p className="text-sm uppercase tracking-widest mb-2 text-[#FFD700]"
               style={{ fontFamily: "'Black Ops One', cursive" }}>
              The Meta Truth
            </p>
            <p className="text-xl" style={{ fontFamily: "'Oswald', sans-serif" }}>
              This page was built in 1 hour using Claude Code CLI.<br />
              <span className="text-[#FFD700]">The method described is the method used.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
```

**Footer.jsx**
```jsx
export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A]">
      {/* Hazard tape */}
      <div style={{
        background: 'repeating-linear-gradient(-45deg, #FFD700, #FFD700 20px, #000 20px, #000 40px)',
        height: '12px'
      }} />

      <div className="p-8 md:p-16 text-white">
        <div className="max-w-4xl flex flex-col md:flex-row justify-between gap-4"
             style={{ fontFamily: "'Oswald', sans-serif" }}>
          <div className="flex items-center gap-4">
            <span className="bg-[#FFD700] text-black px-3 py-1 font-bold uppercase">
              The Constraint Method
            </span>
            <span className="text-gray-500">/</span>
            <span className="text-gray-400">Built with Claude Code CLI</span>
          </div>
          <div className="text-[#FFD700] font-bold uppercase">
            Mini Hackathon 2026
          </div>
        </div>
      </div>
    </footer>
  )
}
```

---

## Implementation Notes

### Quick Reference: What Makes Each Variation Unique

| Variation | Key Visual | Primary Colors | Typography |
|-----------|------------|----------------|------------|
| C1: Wireframe Ghost | Outlined text, no fills | Near-white bg, black strokes | Text-stroke effect |
| C2: Massive Type | Viewport-filling headings | Black bg, yellow accent | Anton display font |
| C3: Broken Grid Chaos | Overlapping rotated elements | Gray bg, red/blue accents | Space Grotesk |
| C4: Classified Document | Redaction bars, stamps | Cream paper, dark red stamps | Courier typewriter |
| C5: Hazard Industrial | Hazard tape patterns | Black/yellow, orange danger | Oswald industrial |

### CSS Custom Properties Summary

Each variation redefines the base CSS variables. To switch between variations, you would:

1. Update the `:root` variables in `index.css`
2. Add the variation-specific utility classes
3. Modify the component JSX to use the new classes/styles

### Font Loading

All variations require Google Fonts. Add these imports to your HTML head or CSS:

```html
<!-- C1 uses default IBM Plex -->
<!-- C2 --> <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet">
<!-- C3 --> <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;700&display=swap" rel="stylesheet">
<!-- C4 --> <link href="https://fonts.googleapis.com/css2?family=Courier+Prime:wght@400;700&family=Special+Elite&display=swap" rel="stylesheet">
<!-- C5 --> <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;600;700&family=Black+Ops+One&display=swap" rel="stylesheet">
```

---

## Author
Design Agent C - Mini Hackathon 2026
