# Design Agent A - Brutalist Landing Page Variations

## Overview
Five distinct visual variations of the Constraint Method brutalist landing page. Each variation maintains the core content structure while exploring different aesthetic directions within the brutalist design philosophy.

---

## A1: Electric Magenta

### Name
Electric Magenta

### Concept
High contrast brutalism with shocking magenta as the accent color. The magenta cuts through the black and white like a neon sign, creating visual tension and demanding attention. Every accent element becomes a focal point.

### Color Palette
```css
--color-bg: #ffffff;
--color-text: #000000;
--color-accent: #FF00FF;
--color-accent-dark: #CC00CC;
--color-border: #000000;
```
- Primary: `#FFFFFF` (white)
- Secondary: `#000000` (black)
- Accent: `#FF00FF` (electric magenta)
- Accent Dark: `#CC00CC` (deep magenta)

### Typography Changes
- Headings: IBM Plex Mono 800 weight (extra bold)
- Increase letter-spacing on uppercase text to 0.15em
- Hero title: 8xl on desktop (larger than current)

### Layout Tweaks
- Add thick magenta left border (8px) to the hero section
- Cards in Solution section get magenta top border accent
- Asymmetric padding: more on left than right

### Signature Element
**Magenta highlight bars** - Horizontal magenta bars that appear behind key text, extending beyond the text container to the edge of the screen.

### CSS Changes

```css
/* index.css additions for Electric Magenta */
:root {
  --color-bg: #ffffff;
  --color-text: #000000;
  --color-accent: #FF00FF;
  --color-accent-dark: #CC00CC;
  --color-border: #000000;
  --font-mono: 'IBM Plex Mono', 'Courier New', monospace;
  --font-sans: 'IBM Plex Sans', 'Arial', sans-serif;
  --border-weight: 3px;
}

.highlight-box {
  background: var(--color-accent);
  color: var(--color-bg);
  padding: 0.25rem 0.5rem;
  display: inline-block;
}

/* Magenta bar effect */
.magenta-bar {
  position: relative;
}

.magenta-bar::before {
  content: '';
  position: absolute;
  left: -100vw;
  right: 0;
  height: 100%;
  background: var(--color-accent);
  z-index: -1;
}

/* Accent border utilities */
.border-accent-left {
  border-left: 8px solid var(--color-accent);
}

.border-accent-top {
  border-top: 4px solid var(--color-accent);
}

/* Selection with magenta */
::selection {
  background: var(--color-accent);
  color: var(--color-bg);
}

/* Extra bold headings */
.brutalist-heading {
  font-weight: 800;
  letter-spacing: 0.15em;
}
```

### Component Changes

**Hero.jsx**
```jsx
export default function Hero() {
  return (
    <section className="border-b-3 border-black p-8 md:p-16 border-l-8 border-l-[#FF00FF]">
      <div className="max-w-4xl">
        <p className="font-mono text-sm uppercase tracking-[0.15em] mb-4">
          A methodology for AI-assisted frontend development
        </p>
        <h1 className="font-mono text-5xl md:text-8xl font-extrabold uppercase leading-none mb-8 tracking-tight">
          The<br />
          <span className="bg-[#FF00FF] text-white px-2">Constraint</span><br />
          Method
        </h1>
        <p className="text-xl md:text-2xl max-w-xl leading-relaxed">
          Less freedom. Better results.<br />
          <span className="font-mono">This page is proof.</span>
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
    <section className="border-b-3 border-black p-8 md:p-16 bg-black text-white">
      <div className="max-w-4xl">
        <h2 className="font-mono text-3xl md:text-4xl font-extrabold uppercase mb-8 tracking-[0.15em]">
          The Problem
        </h2>
        <div className="space-y-6 text-lg md:text-xl">
          <p>
            "Make it look good" doesn't work.
          </p>
          <p>
            Open-ended prompts produce generic results. The AI has infinite
            choices, so it picks the safest ones. You get Bootstrap. You get
            gradient buttons. You get <span className="font-mono bg-[#FF00FF] text-white px-1">corporate website #4,892</span>.
          </p>
          <p className="font-mono text-sm border-l-4 border-[#FF00FF] pl-4">
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
    <section className="border-b-3 border-black p-8 md:p-16">
      <div className="max-w-4xl">
        <h2 className="font-mono text-3xl md:text-4xl font-extrabold uppercase mb-8 tracking-[0.15em]">
          The Solution
        </h2>
        <p className="text-xl md:text-2xl mb-12">
          Constrain the problem. <span className="bg-[#FF00FF] text-white px-1">Liberate the output.</span>
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="border-3 border-black border-t-4 border-t-[#FF00FF] p-6">
            <div className="font-mono text-4xl font-extrabold mb-2 text-[#FF00FF]">01</div>
            <h3 className="font-mono text-xl font-bold uppercase mb-2">Show</h3>
            <p>Reference images beat descriptions. Give the AI something to match, not imagine.</p>
          </div>

          <div className="border-3 border-black border-t-4 border-t-[#FF00FF] p-6 bg-black text-white">
            <div className="font-mono text-4xl font-extrabold mb-2 text-[#FF00FF]">02</div>
            <h3 className="font-mono text-xl font-bold uppercase mb-2">Limit</h3>
            <p>Pick your constraints upfront. Two colors. One font. Fewer choices = sharper output.</p>
          </div>

          <div className="border-3 border-black border-t-4 border-t-[#FF00FF] p-6">
            <div className="font-mono text-4xl font-extrabold mb-2 text-[#FF00FF]">03</div>
            <h3 className="font-mono text-xl font-bold uppercase mb-2">Specify</h3>
            <p>"Make the header 20px smaller" beats "make it look better." Precision over vibes.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
```

---

## A2: Void Mode

### Name
Void Mode

### Concept
Inverted dark mode brutalism where deep black backgrounds dominate with stark white typography. Creates a sense of looking into a void, with content emerging from darkness. Borders become luminous white lines cutting through the black space.

### Color Palette
```css
--color-bg: #0A0A0A;
--color-text: #FFFFFF;
--color-accent: #FFFFFF;
--color-muted: #666666;
--color-border: #FFFFFF;
```
- Primary Background: `#0A0A0A` (near black)
- Text: `#FFFFFF` (pure white)
- Muted: `#666666` (dark gray)
- Border: `#FFFFFF` (white)

### Typography Changes
- Reduce font weight on body text for better readability on dark backgrounds
- Headings remain bold but with slightly increased line-height
- Add subtle text-shadow for depth perception

### Layout Tweaks
- Invert all background colors
- White borders become the primary structural element
- Add 1px white lines between sections (minimal borders)
- Increase padding for more breathing room

### Signature Element
**Floating white containers** - Key content blocks appear to float on the void with white borders and subtle offset shadows in dark gray.

### CSS Changes

```css
/* index.css for Void Mode */
:root {
  --color-bg: #0A0A0A;
  --color-text: #FFFFFF;
  --color-accent: #FFFFFF;
  --color-muted: #666666;
  --color-border: #FFFFFF;
  --font-mono: 'IBM Plex Mono', 'Courier New', monospace;
  --font-sans: 'IBM Plex Sans', 'Arial', sans-serif;
  --border-weight: 2px;
}

body {
  margin: 0;
  padding: 0;
  background-color: var(--color-bg);
  color: var(--color-text);
  font-family: var(--font-sans);
  line-height: 1.6;
}

/* Floating container effect */
.void-float {
  border: 2px solid var(--color-border);
  box-shadow: 8px 8px 0 var(--color-muted);
  background: var(--color-bg);
}

/* Inverted highlight */
.highlight-box {
  background: var(--color-text);
  color: var(--color-bg);
  padding: 0.25rem 0.5rem;
  display: inline-block;
}

/* Subtle glow on borders */
.border-brutal {
  border: var(--border-weight) solid var(--color-border);
}

/* Muted section backgrounds */
.section-alt {
  background: #111111;
}

::selection {
  background: var(--color-text);
  color: var(--color-bg);
}
```

### Component Changes

**Hero.jsx**
```jsx
export default function Hero() {
  return (
    <section className="border-b-2 border-white p-8 md:p-20 bg-[#0A0A0A]">
      <div className="max-w-4xl">
        <p className="font-mono text-sm uppercase tracking-widest mb-4 text-[#666666]">
          A methodology for AI-assisted frontend development
        </p>
        <h1 className="font-mono text-5xl md:text-7xl font-bold uppercase leading-tight mb-8 text-white">
          The<br />
          <span className="bg-white text-[#0A0A0A] px-2">Constraint</span><br />
          Method
        </h1>
        <p className="text-xl md:text-2xl max-w-xl leading-relaxed text-white/90">
          Less freedom. Better results.<br />
          <span className="font-mono text-white">This page is proof.</span>
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
    <section className="border-b-2 border-white p-8 md:p-20 bg-[#111111] text-white">
      <div className="max-w-4xl">
        <h2 className="font-mono text-3xl md:text-4xl font-bold uppercase mb-8">
          The Problem
        </h2>
        <div className="space-y-6 text-lg md:text-xl text-white/90">
          <p>
            "Make it look good" doesn't work.
          </p>
          <p>
            Open-ended prompts produce generic results. The AI has infinite
            choices, so it picks the safest ones. You get Bootstrap. You get
            gradient buttons. You get <span className="font-mono bg-white text-[#0A0A0A] px-1">corporate website #4,892</span>.
          </p>
          <p className="font-mono text-sm border-l-2 border-white pl-4 text-[#666666]">
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
    <section className="border-b-2 border-white p-8 md:p-20 bg-[#0A0A0A]">
      <div className="max-w-4xl">
        <h2 className="font-mono text-3xl md:text-4xl font-bold uppercase mb-8 text-white">
          The Solution
        </h2>
        <p className="text-xl md:text-2xl mb-12 text-white/90">
          Constrain the problem. <span className="bg-white text-[#0A0A0A] px-1">Liberate the output.</span>
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="border-2 border-white p-6 shadow-[8px_8px_0_#666666]">
            <div className="font-mono text-4xl font-bold mb-2 text-white">01</div>
            <h3 className="font-mono text-xl font-bold uppercase mb-2 text-white">Show</h3>
            <p className="text-white/80">Reference images beat descriptions. Give the AI something to match, not imagine.</p>
          </div>

          <div className="border-2 border-white p-6 bg-white text-[#0A0A0A]">
            <div className="font-mono text-4xl font-bold mb-2">02</div>
            <h3 className="font-mono text-xl font-bold uppercase mb-2">Limit</h3>
            <p>Pick your constraints upfront. Two colors. One font. Fewer choices = sharper output.</p>
          </div>

          <div className="border-2 border-white p-6 shadow-[8px_8px_0_#666666]">
            <div className="font-mono text-4xl font-bold mb-2 text-white">03</div>
            <h3 className="font-mono text-xl font-bold uppercase mb-2 text-white">Specify</h3>
            <p className="text-white/80">"Make the header 20px smaller" beats "make it look better." Precision over vibes.</p>
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
    <footer className="p-8 md:p-20 font-mono text-sm bg-[#0A0A0A] text-[#666666]">
      <div className="max-w-4xl flex flex-col md:flex-row justify-between gap-4">
        <div>
          <span className="uppercase tracking-widest text-white">The Constraint Method</span>
          <span className="mx-2">/</span>
          <span>Built with Claude Code CLI</span>
        </div>
        <div>
          Mini Hackathon 2026
        </div>
      </div>
    </footer>
  )
}
```

---

## A3: Daily Broadsheet

### Name
Daily Broadsheet

### Concept
Newspaper/editorial brutalism inspired by classic broadsheet newspapers. Multi-column layouts, serif headlines mixed with sans-serif body text, rule lines, and dateline formatting. Content feels like an important news story.

### Color Palette
```css
--color-bg: #F5F5F0;
--color-text: #1A1A1A;
--color-accent: #CC0000;
--color-muted: #767676;
--color-border: #1A1A1A;
--color-rule: #CCCCCC;
```
- Paper: `#F5F5F0` (warm off-white)
- Ink: `#1A1A1A` (newspaper black)
- Red accent: `#CC0000` (editorial red)
- Muted: `#767676` (gray)
- Rules: `#CCCCCC` (light gray lines)

### Typography Changes
- Headlines: Playfair Display (serif) for main headings
- Body: IBM Plex Sans remains
- Subheads: IBM Plex Mono for datelines and labels
- Add drop caps to first paragraphs

### Layout Tweaks
- Hero becomes a newspaper masthead with date
- Two or three column layouts for content sections
- Thin rule lines (1px) between columns
- Pull quotes styled as editorial callouts

### Signature Element
**Drop cap and masthead** - Large decorative first letters on paragraphs and a newspaper-style masthead header with publication date.

### CSS Changes

```css
/* index.css for Daily Broadsheet */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=IBM+Plex+Mono:wght@400;600;700&family=IBM+Plex+Sans:wght@400;600&display=swap');

:root {
  --color-bg: #F5F5F0;
  --color-text: #1A1A1A;
  --color-accent: #CC0000;
  --color-muted: #767676;
  --color-border: #1A1A1A;
  --color-rule: #CCCCCC;
  --font-serif: 'Playfair Display', Georgia, serif;
  --font-mono: 'IBM Plex Mono', monospace;
  --font-sans: 'IBM Plex Sans', sans-serif;
  --border-weight: 1px;
}

body {
  background-color: var(--color-bg);
  color: var(--color-text);
  font-family: var(--font-sans);
  line-height: 1.6;
}

/* Masthead styling */
.masthead {
  border-bottom: 3px double var(--color-border);
  text-align: center;
  padding: 2rem 0;
}

.masthead-title {
  font-family: var(--font-serif);
  font-weight: 900;
  font-size: 4rem;
  letter-spacing: -0.02em;
  line-height: 1;
}

/* Dateline */
.dateline {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-muted);
}

/* Drop cap */
.drop-cap::first-letter {
  float: left;
  font-family: var(--font-serif);
  font-size: 4rem;
  line-height: 0.8;
  padding-right: 0.5rem;
  padding-top: 0.25rem;
  font-weight: 700;
}

/* Column rules */
.column-rule {
  border-left: 1px solid var(--color-rule);
  padding-left: 1.5rem;
}

/* Editorial callout */
.pullquote {
  font-family: var(--font-serif);
  font-size: 1.5rem;
  font-style: italic;
  border-top: 2px solid var(--color-border);
  border-bottom: 2px solid var(--color-border);
  padding: 1rem 0;
  margin: 2rem 0;
}

/* Section headers */
.section-header {
  font-family: var(--font-serif);
  font-weight: 700;
  border-bottom: 1px solid var(--color-border);
  padding-bottom: 0.5rem;
  margin-bottom: 1.5rem;
}

/* Red accent for important items */
.editorial-red {
  color: var(--color-accent);
}

::selection {
  background: var(--color-accent);
  color: white;
}
```

### Component Changes

**Hero.jsx**
```jsx
export default function Hero() {
  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <section className="border-b-[3px] border-double border-[#1A1A1A] p-8 md:p-16 bg-[#F5F5F0]">
      <div className="max-w-4xl mx-auto text-center">
        <p className="font-mono text-xs uppercase tracking-[0.2em] mb-2 text-[#767676]">
          {today} | A Methodology for AI-Assisted Development
        </p>
        <h1 className="font-serif text-6xl md:text-8xl font-black leading-none mb-6 tracking-tight" style={{fontFamily: 'Playfair Display, serif'}}>
          THE CONSTRAINT<br />METHOD
        </h1>
        <p className="font-mono text-xs uppercase tracking-[0.15em] border-t border-b border-[#CCCCCC] py-2 max-w-md mx-auto">
          Less Freedom. Better Results. This Page Is Proof.
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
    <section className="border-b border-[#CCCCCC] p-8 md:p-16 bg-[#F5F5F0]">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 border-b border-[#1A1A1A] pb-2 inline-block" style={{fontFamily: 'Playfair Display, serif'}}>
          The Problem
        </h2>
        <div className="md:columns-2 gap-8 text-lg leading-relaxed">
          <p className="first-letter:float-left first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:pr-2 first-letter:leading-none mb-4">
            "Make it look good" doesn't work. Open-ended prompts produce generic results. The AI has infinite choices, so it picks the safest ones.
          </p>
          <p className="mb-4">
            You get Bootstrap. You get gradient buttons. You get <span className="font-mono bg-[#1A1A1A] text-[#F5F5F0] px-1">corporate website #4,892</span>.
          </p>
          <p className="font-serif italic text-xl border-t-2 border-b-2 border-[#1A1A1A] py-4 my-4" style={{fontFamily: 'Playfair Display, serif'}}>
            "The paradox: more freedom equals worse output."
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
    <section className="border-b border-[#CCCCCC] p-8 md:p-16 bg-[#F5F5F0]">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl font-bold mb-2 border-b border-[#1A1A1A] pb-2 inline-block" style={{fontFamily: 'Playfair Display, serif'}}>
          The Solution
        </h2>
        <p className="font-mono text-xs uppercase tracking-[0.1em] text-[#767676] mb-8">
          Three principles for constraint-based design
        </p>

        <div className="grid md:grid-cols-3 gap-0">
          <div className="p-6 pr-8">
            <div className="font-mono text-sm text-[#CC0000] mb-1">PRINCIPLE I</div>
            <h3 className="font-serif text-2xl font-bold mb-3" style={{fontFamily: 'Playfair Display, serif'}}>Show</h3>
            <p className="text-base leading-relaxed">Reference images beat descriptions. Give the AI something to match, not imagine.</p>
          </div>

          <div className="p-6 px-8 border-l border-r border-[#CCCCCC]">
            <div className="font-mono text-sm text-[#CC0000] mb-1">PRINCIPLE II</div>
            <h3 className="font-serif text-2xl font-bold mb-3" style={{fontFamily: 'Playfair Display, serif'}}>Limit</h3>
            <p className="text-base leading-relaxed">Pick your constraints upfront. Two colors. One font. Fewer choices = sharper output.</p>
          </div>

          <div className="p-6 pl-8">
            <div className="font-mono text-sm text-[#CC0000] mb-1">PRINCIPLE III</div>
            <h3 className="font-serif text-2xl font-bold mb-3" style={{fontFamily: 'Playfair Display, serif'}}>Specify</h3>
            <p className="text-base leading-relaxed">"Make the header 20px smaller" beats "make it look better." Precision over vibes.</p>
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
    <footer className="p-8 md:p-16 font-mono text-xs bg-[#F5F5F0] border-t-[3px] border-double border-[#1A1A1A]">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between gap-4 text-[#767676]">
        <div className="uppercase tracking-[0.15em]">
          The Constraint Method | Built with Claude Code CLI
        </div>
        <div className="uppercase tracking-[0.15em]">
          Mini Hackathon 2026
        </div>
      </div>
    </footer>
  )
}
```

---

## A4: Corrupt Signal

### Name
Corrupt Signal

### Concept
Glitch/digital artifact aesthetic that embraces the imperfect nature of digital transmission. Text appears corrupted, colors shift unexpectedly, and elements seem to malfunction. Brutalism meets digital decay.

### Color Palette
```css
--color-bg: #0D0D0D;
--color-text: #FFFFFF;
--color-glitch-1: #FF0040;
--color-glitch-2: #00FFFF;
--color-glitch-3: #FF00FF;
--color-border: #333333;
```
- Background: `#0D0D0D` (near black)
- Text: `#FFFFFF` (white)
- Glitch Red: `#FF0040` (error red)
- Glitch Cyan: `#00FFFF` (digital cyan)
- Glitch Magenta: `#FF00FF` (RGB magenta)

### Typography Changes
- All text in monospace (VT323 or IBM Plex Mono)
- Random characters appear "corrupted" using strikethrough or different colors
- Text occasionally has RGB split effect on hover

### Layout Tweaks
- Sections have slight rotation (0.5-1 degree)
- Elements appear offset or duplicated
- Scanline overlay effect across entire page
- "Broken" borders that don't quite connect

### Signature Element
**RGB chromatic split** - Text and key elements have a subtle RGB color separation effect, as if the display is malfunctioning. On hover, the effect intensifies.

### CSS Changes

```css
/* index.css for Corrupt Signal */
@import url('https://fonts.googleapis.com/css2?family=VT323&family=IBM+Plex+Mono:wght@400;700&display=swap');

:root {
  --color-bg: #0D0D0D;
  --color-text: #FFFFFF;
  --color-glitch-1: #FF0040;
  --color-glitch-2: #00FFFF;
  --color-glitch-3: #FF00FF;
  --color-border: #333333;
  --font-mono: 'IBM Plex Mono', monospace;
  --font-glitch: 'VT323', monospace;
}

body {
  background-color: var(--color-bg);
  color: var(--color-text);
  font-family: var(--font-mono);
  line-height: 1.6;
  position: relative;
}

/* Scanline overlay */
body::after {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: repeating-linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.1) 0px,
    rgba(0, 0, 0, 0.1) 1px,
    transparent 1px,
    transparent 2px
  );
  pointer-events: none;
  z-index: 1000;
}

/* RGB split text effect */
.glitch-text {
  position: relative;
  display: inline-block;
}

.glitch-text::before,
.glitch-text::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.glitch-text::before {
  color: var(--color-glitch-2);
  left: 2px;
  clip-path: inset(0 0 50% 0);
  animation: glitch-top 2s infinite linear alternate-reverse;
}

.glitch-text::after {
  color: var(--color-glitch-1);
  left: -2px;
  clip-path: inset(50% 0 0 0);
  animation: glitch-bottom 3s infinite linear alternate-reverse;
}

@keyframes glitch-top {
  0%, 100% { transform: translate(0); }
  20% { transform: translate(-2px, 2px); }
  40% { transform: translate(2px, -2px); }
  60% { transform: translate(-1px, 1px); }
  80% { transform: translate(1px, -1px); }
}

@keyframes glitch-bottom {
  0%, 100% { transform: translate(0); }
  25% { transform: translate(2px, -2px); }
  50% { transform: translate(-2px, 2px); }
  75% { transform: translate(1px, -1px); }
}

/* Corrupted border */
.corrupt-border {
  border: 2px solid var(--color-border);
  position: relative;
}

.corrupt-border::before {
  content: '';
  position: absolute;
  top: -4px;
  left: 10%;
  width: 30%;
  height: 4px;
  background: var(--color-glitch-1);
}

.corrupt-border::after {
  content: '';
  position: absolute;
  bottom: -4px;
  right: 15%;
  width: 25%;
  height: 4px;
  background: var(--color-glitch-2);
}

/* Slight rotation */
.skew-section {
  transform: rotate(-0.3deg);
}

/* Error highlight */
.error-box {
  background: var(--color-glitch-1);
  color: var(--color-bg);
  padding: 0.25rem 0.5rem;
  display: inline-block;
}

/* Flickering animation */
@keyframes flicker {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.8; }
  75% { opacity: 0.9; }
}

.flicker {
  animation: flicker 0.1s infinite;
}

::selection {
  background: var(--color-glitch-3);
  color: var(--color-bg);
}
```

### Component Changes

**Hero.jsx**
```jsx
export default function Hero() {
  return (
    <section className="border-b-2 border-[#333333] p-8 md:p-16 bg-[#0D0D0D] transform -rotate-[0.3deg]">
      <div className="max-w-4xl transform rotate-[0.3deg]">
        <p className="font-mono text-sm uppercase tracking-widest mb-4 text-[#00FFFF]">
          [SYS] A methodology for AI-assisted frontend development
        </p>
        <h1 className="font-mono text-5xl md:text-7xl font-bold uppercase leading-none mb-8 relative">
          <span className="relative inline-block">
            <span className="absolute -left-[3px] text-[#00FFFF] opacity-70">The</span>
            <span className="absolute left-[3px] text-[#FF0040] opacity-70">The</span>
            <span className="relative">The</span>
          </span>
          <br />
          <span className="bg-[#FF0040] text-white px-2 relative inline-block">
            <span className="absolute -left-[2px] -top-[2px] text-[#00FFFF] opacity-50">Constraint</span>
            Constraint
          </span>
          <br />
          <span className="relative inline-block">
            <span className="absolute -left-[3px] text-[#FF00FF] opacity-70">Method</span>
            <span className="absolute left-[3px] text-[#00FFFF] opacity-70">Method</span>
            <span className="relative">Method</span>
          </span>
        </h1>
        <p className="text-xl md:text-2xl max-w-xl leading-relaxed text-white/90">
          Less freedom. Better results.<br />
          <span className="font-mono text-[#00FFFF]">[PROOF_LOADED]</span>
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
    <section className="border-b-2 border-[#333333] p-8 md:p-16 bg-[#111111] text-white transform rotate-[0.2deg]">
      <div className="max-w-4xl transform -rotate-[0.2deg]">
        <h2 className="font-mono text-3xl md:text-4xl font-bold uppercase mb-8 text-[#FF0040]">
          &gt;&gt; THE_PROBLEM.exe
        </h2>
        <div className="space-y-6 text-lg md:text-xl">
          <p>
            <span className="text-[#333333]">[00:01]</span> "Make it look good" doesn't work.
          </p>
          <p>
            <span className="text-[#333333]">[00:02]</span> Open-ended prompts produce generic results. The AI has infinite
            choices, so it picks the <span className="line-through text-[#FF0040]">safest</span> ones. You get Bootstrap. You get
            gradient buttons. You get <span className="font-mono bg-[#FF0040] text-white px-1 relative">
              <span className="absolute -right-1 -top-1 text-[#00FFFF] text-xs">ERR</span>
              corporate website #4,892
            </span>.
          </p>
          <p className="font-mono text-sm border-l-4 border-[#00FFFF] pl-4 text-[#00FFFF]">
            [PARADOX_DETECTED] more_freedom == worse_output;
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
    <section className="border-b-2 border-[#333333] p-8 md:p-16 bg-[#0D0D0D]">
      <div className="max-w-4xl">
        <h2 className="font-mono text-3xl md:text-4xl font-bold uppercase mb-8 text-white">
          &gt;&gt; SOLUTION.dll <span className="text-[#00FF00]">[LOADED]</span>
        </h2>
        <p className="text-xl md:text-2xl mb-12 text-white/90">
          Constrain the problem. <span className="bg-[#00FFFF] text-[#0D0D0D] px-1">Liberate the output.</span>
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="border-2 border-[#333333] p-6 relative before:absolute before:top-[-4px] before:left-[10%] before:w-[30%] before:h-[4px] before:bg-[#FF0040]">
            <div className="font-mono text-4xl font-bold mb-2 text-[#00FFFF]">01</div>
            <h3 className="font-mono text-xl font-bold uppercase mb-2">Show</h3>
            <p className="text-white/70">Reference images beat descriptions. Give the AI something to match, not imagine.</p>
          </div>

          <div className="border-2 border-[#333333] p-6 bg-[#FF0040] text-white relative after:absolute after:bottom-[-4px] after:right-[15%] after:w-[25%] after:h-[4px] after:bg-[#00FFFF]">
            <div className="font-mono text-4xl font-bold mb-2">02</div>
            <h3 className="font-mono text-xl font-bold uppercase mb-2">Limit</h3>
            <p>Pick your constraints upfront. Two colors. One font. Fewer choices = sharper output.</p>
          </div>

          <div className="border-2 border-[#333333] p-6 relative before:absolute before:top-[-4px] before:right-[20%] before:w-[20%] before:h-[4px] before:bg-[#FF00FF]">
            <div className="font-mono text-4xl font-bold mb-2 text-[#FF00FF]">03</div>
            <h3 className="font-mono text-xl font-bold uppercase mb-2">Specify</h3>
            <p className="text-white/70">"Make the header 20px smaller" beats "make it look better." Precision over vibes.</p>
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
    <footer className="p-8 md:p-16 font-mono text-sm bg-[#0D0D0D] text-[#333333]">
      <div className="max-w-4xl flex flex-col md:flex-row justify-between gap-4">
        <div>
          <span className="uppercase tracking-widest text-[#00FFFF]">[SYSTEM]</span>
          <span className="mx-2 text-[#FF0040]">//</span>
          <span className="text-white">The Constraint Method</span>
          <span className="mx-2">/</span>
          <span>Built with Claude Code CLI</span>
        </div>
        <div className="text-[#FF0040]">
          Mini Hackathon 2026 <span className="animate-pulse">_</span>
        </div>
      </div>
    </footer>
  )
}
```

---

## A5: Phosphor Terminal

### Name
Phosphor Terminal

### Concept
Retro terminal/green screen aesthetic reminiscent of 1980s computer monitors. Glowing green text on black, CRT scan lines, and that nostalgic phosphor glow. Everything feels like you're accessing classified information on an old mainframe.

### Color Palette
```css
--color-bg: #0A0A0A;
--color-text: #00FF41;
--color-text-dim: #00AA2A;
--color-text-bright: #00FF9F;
--color-amber: #FFB000;
--color-scanline: rgba(0, 255, 65, 0.03);
```
- Background: `#0A0A0A` (CRT black)
- Primary Green: `#00FF41` (phosphor green)
- Dim Green: `#00AA2A` (darker green)
- Bright Green: `#00FF9F` (highlight)
- Amber Accent: `#FFB000` (optional amber mode reference)

### Typography Changes
- All monospace (VT323 for authentic feel, or IBM Plex Mono)
- Consistent sizing that mimics fixed-width terminal output
- Blinking cursor effects on headings
- ALL_CAPS for system messages

### Layout Tweaks
- Fixed-width container (80 characters wide feel)
- ASCII art borders and dividers
- Command-prompt style prefixes (>, $, //)
- Loading/progress bar elements

### Signature Element
**CRT glow and scanlines** - Text has a subtle green glow effect (text-shadow), and the entire page has a scanline overlay. Cursor blinks at key positions.

### CSS Changes

```css
/* index.css for Phosphor Terminal */
@import url('https://fonts.googleapis.com/css2?family=VT323&family=IBM+Plex+Mono:wght@400;700&display=swap');

:root {
  --color-bg: #0A0A0A;
  --color-text: #00FF41;
  --color-text-dim: #00AA2A;
  --color-text-bright: #00FF9F;
  --color-amber: #FFB000;
  --font-terminal: 'VT323', 'IBM Plex Mono', monospace;
}

body {
  background-color: var(--color-bg);
  color: var(--color-text);
  font-family: var(--font-terminal);
  font-size: 18px;
  line-height: 1.4;
  position: relative;
}

/* CRT scanline effect */
body::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: repeating-linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.15) 0px,
    rgba(0, 0, 0, 0.15) 1px,
    transparent 1px,
    transparent 2px
  );
  pointer-events: none;
  z-index: 1000;
}

/* CRT screen curvature effect (optional) */
body::after {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(
    ellipse at center,
    transparent 0%,
    rgba(0, 0, 0, 0.2) 90%,
    rgba(0, 0, 0, 0.4) 100%
  );
  pointer-events: none;
  z-index: 999;
}

/* Phosphor glow text */
.glow {
  text-shadow:
    0 0 5px var(--color-text),
    0 0 10px var(--color-text),
    0 0 20px var(--color-text-dim);
}

.glow-bright {
  color: var(--color-text-bright);
  text-shadow:
    0 0 5px var(--color-text-bright),
    0 0 15px var(--color-text),
    0 0 30px var(--color-text-dim);
}

/* Blinking cursor */
@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

.cursor::after {
  content: '_';
  animation: blink 1s infinite;
}

/* Terminal box */
.terminal-box {
  border: 1px solid var(--color-text-dim);
  padding: 1rem;
  background: rgba(0, 255, 65, 0.02);
}

/* Command prompt */
.prompt::before {
  content: '> ';
  color: var(--color-text-dim);
}

/* ASCII divider */
.ascii-divider {
  font-family: var(--font-terminal);
  color: var(--color-text-dim);
  overflow: hidden;
  white-space: nowrap;
}

/* Progress bar style */
.progress-bar {
  font-family: var(--font-terminal);
  color: var(--color-text);
}

/* Selection */
::selection {
  background: var(--color-text);
  color: var(--color-bg);
}

/* Dim text */
.dim {
  color: var(--color-text-dim);
}
```

### Component Changes

**Hero.jsx**
```jsx
export default function Hero() {
  return (
    <section className="p-8 md:p-16 bg-[#0A0A0A] border-b border-[#00AA2A]">
      <div className="max-w-3xl font-mono">
        <p className="text-[#00AA2A] text-sm mb-2">
          ========================================
        </p>
        <p className="text-[#00AA2A] text-sm mb-4">
          CONSTRAINT_METHOD v1.0 | SESSION ACTIVE
        </p>
        <p className="text-[#00AA2A] text-sm mb-6">
          ========================================
        </p>

        <div className="mb-8" style={{textShadow: '0 0 5px #00FF41, 0 0 10px #00FF41'}}>
          <p className="text-[#00FF41] text-lg mb-2">&gt; LOADING MODULE...</p>
          <h1 className="text-[#00FF9F] text-4xl md:text-6xl font-bold leading-tight" style={{fontFamily: 'VT323, monospace', textShadow: '0 0 10px #00FF9F, 0 0 20px #00FF41'}}>
            THE CONSTRAINT<br />
            METHOD<span className="animate-pulse">_</span>
          </h1>
        </div>

        <p className="text-xl text-[#00FF41] mb-4">
          &gt; Less freedom. Better results.
        </p>
        <p className="text-[#00AA2A]">
          &gt; STATUS: This page is proof. [VERIFIED]
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
    <section className="p-8 md:p-16 bg-[#0A0A0A] border-b border-[#00AA2A]">
      <div className="max-w-3xl font-mono">
        <p className="text-[#00AA2A] text-sm mb-4">
          {'>'} cat /var/log/problem.log
        </p>
        <h2 className="text-[#00FF41] text-2xl md:text-3xl font-bold mb-6" style={{textShadow: '0 0 5px #00FF41'}}>
          [ERROR] THE PROBLEM
        </h2>

        <div className="space-y-4 text-lg">
          <p className="text-[#00FF41]">
            <span className="text-[#00AA2A]">[LOG]</span> "Make it look good" doesn't work.
          </p>
          <p className="text-[#00FF41]">
            <span className="text-[#00AA2A]">[LOG]</span> Open-ended prompts produce generic results.
          </p>
          <p className="text-[#00FF41]">
            <span className="text-[#00AA2A]">[LOG]</span> The AI has infinite choices, so it picks the safest ones.
          </p>
          <p className="text-[#00FF41]">
            <span className="text-[#00AA2A]">[LOG]</span> Output: <span className="bg-[#00FF41] text-[#0A0A0A] px-1">corporate website #4,892</span>
          </p>

          <div className="border border-[#FFB000] p-4 mt-6 bg-[rgba(255,176,0,0.05)]">
            <p className="text-[#FFB000]">
              [WARNING] PARADOX DETECTED<br />
              <span className="text-sm">&gt; more_freedom = worse_output</span>
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
    <section className="p-8 md:p-16 bg-[#0A0A0A] border-b border-[#00AA2A]">
      <div className="max-w-3xl font-mono">
        <p className="text-[#00AA2A] text-sm mb-4">
          {'>'} ./solution.sh --execute
        </p>
        <h2 className="text-[#00FF41] text-2xl md:text-3xl font-bold mb-2" style={{textShadow: '0 0 5px #00FF41'}}>
          [SOLUTION] LOADING...
        </h2>
        <p className="text-[#00AA2A] text-sm mb-8">
          [========================================] 100%
        </p>

        <p className="text-xl text-[#00FF41] mb-8">
          &gt; Constrain the problem. <span className="bg-[#00FF41] text-[#0A0A0A] px-1">Liberate the output.</span>
        </p>

        <div className="space-y-6">
          <div className="border border-[#00AA2A] p-4 bg-[rgba(0,255,65,0.02)]">
            <p className="text-[#00FF9F] text-2xl font-bold mb-2" style={{textShadow: '0 0 5px #00FF9F'}}>01: SHOW</p>
            <p className="text-[#00FF41]">&gt; Reference images beat descriptions.</p>
            <p className="text-[#00AA2A] text-sm">&gt; Give the AI something to match, not imagine.</p>
          </div>

          <div className="border border-[#00FF41] p-4 bg-[rgba(0,255,65,0.1)]">
            <p className="text-[#00FF9F] text-2xl font-bold mb-2" style={{textShadow: '0 0 5px #00FF9F'}}>02: LIMIT</p>
            <p className="text-[#00FF41]">&gt; Pick your constraints upfront.</p>
            <p className="text-[#00AA2A] text-sm">&gt; Two colors. One font. Fewer choices = sharper output.</p>
          </div>

          <div className="border border-[#00AA2A] p-4 bg-[rgba(0,255,65,0.02)]">
            <p className="text-[#00FF9F] text-2xl font-bold mb-2" style={{textShadow: '0 0 5px #00FF9F'}}>03: SPECIFY</p>
            <p className="text-[#00FF41]">&gt; "Make the header 20px smaller" beats "make it look better."</p>
            <p className="text-[#00AA2A] text-sm">&gt; Precision over vibes.</p>
          </div>
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
    <section className="p-8 md:p-16 bg-[#0A0A0A] border-b border-[#00AA2A]">
      <div className="max-w-3xl font-mono">
        <p className="text-[#00AA2A] text-sm mb-4">
          {'>'} cat README.md
        </p>
        <h2 className="text-[#00FF41] text-2xl md:text-3xl font-bold mb-8" style={{textShadow: '0 0 5px #00FF41'}}>
          [DOCUMENTATION] HOW THIS PAGE WAS BUILT
        </h2>

        <div className="space-y-6">
          <div className="pl-4 border-l-2 border-[#00FF41]">
            <p className="text-[#00FF9F] font-bold mb-2">## CONSTRAINT #1: BRUTALIST AESTHETIC</p>
            <p className="text-[#00FF41] mb-2">
              Instead of "make it pretty," we said: black and white, monospace type, raw borders.
            </p>
            <div className="bg-[rgba(0,255,65,0.05)] p-2 text-[#00AA2A] text-sm">
              PROMPT: "Use a brutalist style: high contrast, visible grid"
            </div>
          </div>

          <div className="pl-4 border-l-2 border-[#00FF41]">
            <p className="text-[#00FF9F] font-bold mb-2">## CONSTRAINT #2: THREE SECTIONS</p>
            <p className="text-[#00FF41]">
              Problem → Solution → How. No navigation, no footer links, no scope creep.
            </p>
          </div>

          <div className="pl-4 border-l-2 border-[#00FF41]">
            <p className="text-[#00FF9F] font-bold mb-2">## CONSTRAINT #3: SPECIFIC FEEDBACK</p>
            <p className="text-[#00FF41] mb-2">
              When something didn't look right, we said exactly what to change.
            </p>
            <div className="bg-[rgba(0,255,65,0.05)] p-2 text-[#00AA2A] text-sm">
              PROMPT: "Make the heading text-7xl instead of text-5xl"
            </div>
          </div>
        </div>

        <div className="mt-8 border border-[#00FF41] p-4 bg-[rgba(0,255,65,0.1)]">
          <p className="text-[#00AA2A] text-sm mb-2">[SYSTEM MESSAGE]</p>
          <p className="text-[#00FF41]">
            &gt; This page was built in 1 hour using Claude Code CLI.<br />
            &gt; The method described is the method used.<br />
            &gt; <span className="animate-pulse">_</span>
          </p>
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
    <footer className="p-8 md:p-16 font-mono text-sm bg-[#0A0A0A]">
      <div className="max-w-3xl">
        <p className="text-[#00AA2A] mb-2">
          ========================================
        </p>
        <div className="flex flex-col md:flex-row justify-between gap-4 text-[#00FF41]">
          <div>
            <span className="text-[#00AA2A]">[SYS]</span> THE CONSTRAINT METHOD | CLAUDE CODE CLI
          </div>
          <div>
            <span className="text-[#00AA2A]">[DATE]</span> MINI HACKATHON 2026
          </div>
        </div>
        <p className="text-[#00AA2A] mt-2">
          ========================================
        </p>
        <p className="text-[#00AA2A] mt-4">
          {'>'} END OF LINE<span className="animate-pulse">_</span>
        </p>
      </div>
    </footer>
  )
}
```

---

## Summary Table

| Variation | Mood | Primary Accent | Key Feature |
|-----------|------|----------------|-------------|
| A1: Electric Magenta | Bold, Attention-grabbing | #FF00FF | Magenta highlight bars |
| A2: Void Mode | Dark, Minimal | #FFFFFF on black | Floating white containers |
| A3: Daily Broadsheet | Editorial, Sophisticated | #CC0000 | Drop caps + masthead |
| A4: Corrupt Signal | Chaotic, Digital | #FF0040 / #00FFFF | RGB chromatic split |
| A5: Phosphor Terminal | Retro, Nostalgic | #00FF41 | CRT glow + scanlines |

---

## Implementation Notes

1. **Font Loading**: Variations A3-A5 require additional Google Fonts imports
2. **Performance**: A4 and A5 use CSS animations that may impact performance on low-end devices
3. **Accessibility**: A5's green-on-black may need contrast adjustments for some users
4. **Browser Support**: CSS features like `text-shadow` and `backdrop-filter` have good modern support
5. **Tailwind Config**: Some variations may require extending the Tailwind config for custom colors

Each variation can be implemented by:
1. Replacing the contents of `src/index.css` with the CSS changes
2. Updating each component file with the provided JSX
3. Adding any required font imports to the CSS file
