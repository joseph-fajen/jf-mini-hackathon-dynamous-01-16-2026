# Agent B Design Variations

Five distinct visual variations of the brutalist landing page, each with complete implementation details.

---

## B1: Blueprint Technical

### Concept
A technical drawing/engineering blueprint aesthetic with cyan-on-navy color scheme, grid lines, dimension markers, and annotation-style typography that makes the page feel like architectural documentation.

### Color Palette
```css
--color-bg: #0a1628;        /* Deep navy blue */
--color-text: #00d4ff;      /* Cyan/blueprint blue */
--color-accent: #ffffff;    /* White for highlights */
--color-border: #00d4ff;    /* Cyan borders */
--color-grid: #1a3a5c;      /* Subtle grid lines */
```

### Typography Changes
- Primary font: `'Courier New', 'IBM Plex Mono', monospace`
- All text uppercase
- Letter-spacing increased to 0.15em for labels
- Font sizes reduced by 10% for technical feel
- Line numbers added to code blocks

### Layout Tweaks
- Add subtle grid background (20px squares)
- Section dividers become dashed lines
- Cards have corner markers (L-shaped brackets)
- Add "scale" notation in footer
- Dimension lines between elements

### Signature Element
**Corner Brackets**: Every box/card has L-shaped corner markers like technical drawings, with small measurement annotations.

### CSS Changes

```css
/* Add to index.css */
@import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap');

:root {
  --color-bg: #0a1628;
  --color-text: #00d4ff;
  --color-accent: #ffffff;
  --color-border: #00d4ff;
  --color-grid: #1a3a5c;
  --font-mono: 'Share Tech Mono', 'Courier New', monospace;
  --font-sans: 'Share Tech Mono', 'Courier New', monospace;
  --border-weight: 1px;
}

body {
  background-color: var(--color-bg);
  color: var(--color-text);
  background-image:
    linear-gradient(var(--color-grid) 1px, transparent 1px),
    linear-gradient(90deg, var(--color-grid) 1px, transparent 1px);
  background-size: 20px 20px;
}

.border-brutal {
  border: 1px solid var(--color-border);
}

/* Blueprint corner brackets */
.blueprint-box {
  position: relative;
  border: 1px dashed var(--color-border);
  padding: 2rem;
  margin: 1rem;
}

.blueprint-box::before,
.blueprint-box::after {
  content: '';
  position: absolute;
  width: 20px;
  height: 20px;
  border-color: var(--color-text);
  border-style: solid;
}

.blueprint-box::before {
  top: -5px;
  left: -5px;
  border-width: 2px 0 0 2px;
}

.blueprint-box::after {
  bottom: -5px;
  right: -5px;
  border-width: 0 2px 2px 0;
}

/* Dimension annotation */
.dimension-marker {
  font-size: 0.65rem;
  letter-spacing: 0.1em;
  opacity: 0.7;
  position: absolute;
}

.highlight-box {
  background: transparent;
  color: var(--color-accent);
  border: 1px solid var(--color-accent);
  padding: 0.25rem 0.5rem;
}

/* Dashed section borders */
section {
  border-bottom: 1px dashed var(--color-border) !important;
}

/* Selection */
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
    <section className="border-b border-dashed border-[#00d4ff] p-8 md:p-16 relative">
      <div className="absolute top-4 right-4 text-xs opacity-50 tracking-widest">
        DWG-001 REV.A
      </div>
      <div className="max-w-4xl">
        <p className="text-xs uppercase tracking-[0.2em] mb-4 opacity-70">
          [SPECIFICATION] A methodology for AI-assisted frontend development
        </p>
        <h1 className="text-4xl md:text-6xl font-bold uppercase leading-none mb-8 tracking-wide">
          The<br />
          <span className="border border-white text-white px-2">Constraint</span><br />
          Method
        </h1>
        <p className="text-lg md:text-xl max-w-xl leading-relaxed opacity-90">
          Less freedom. Better results.<br />
          <span className="text-xs tracking-widest">[REF: THIS PAGE IS PROOF]</span>
        </p>
      </div>
      <div className="absolute bottom-4 left-8 text-xs opacity-40">
        SCALE: 1:1 | UNITS: PX
      </div>
    </section>
  )
}
```

**Solution.jsx - Card wrapper**
```jsx
{/* Wrap each card in blueprint-box class */}
<div className="blueprint-box relative">
  <span className="dimension-marker top-0 right-2">W:280px</span>
  <div className="text-3xl font-bold mb-2 opacity-70">01</div>
  <h3 className="text-lg font-bold uppercase mb-2 tracking-wide">Show</h3>
  <p className="text-sm opacity-80">Reference images beat descriptions. Give the AI something to match, not imagine.</p>
</div>
```

---

## B2: Constructivist Propaganda

### Concept
Bold Russian Constructivist aesthetic with dramatic diagonal lines, red/black/cream palette, dynamic angular compositions, and propaganda poster typography with strong geometric shapes.

### Color Palette
```css
--color-bg: #f5f0e6;        /* Aged cream/paper */
--color-text: #1a1a1a;      /* Near black */
--color-accent: #cc0000;    /* Soviet red */
--color-border: #1a1a1a;    /* Black borders */
--color-secondary: #cc0000; /* Red accents */
```

### Typography Changes
- Primary font: `'Oswald', 'Impact', sans-serif` for headings
- Body: `'PT Sans', 'Arial', sans-serif`
- Extreme weight contrast (900 for headings, 400 for body)
- Diagonal text elements at -15deg angles
- Oversized first letters (drop caps)

### Layout Tweaks
- Diagonal stripe backgrounds at 45deg
- Asymmetric grid with overlapping elements
- Red bars/stripes as dividers
- Content blocks at slight angles
- Geometric shapes (circles, triangles) as accents

### Signature Element
**Diagonal Red Stripes**: Bold red diagonal stripes that cut across sections, with content appearing to be placed on top of them.

### CSS Changes

```css
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@700;900&family=PT+Sans:wght@400;700&display=swap');

:root {
  --color-bg: #f5f0e6;
  --color-text: #1a1a1a;
  --color-accent: #cc0000;
  --color-border: #1a1a1a;
  --font-heading: 'Oswald', 'Impact', sans-serif;
  --font-body: 'PT Sans', 'Arial', sans-serif;
  --border-weight: 4px;
}

body {
  background-color: var(--color-bg);
  color: var(--color-text);
  font-family: var(--font-body);
}

/* Diagonal stripe background */
.diagonal-stripes {
  background: repeating-linear-gradient(
    -45deg,
    transparent,
    transparent 40px,
    var(--color-accent) 40px,
    var(--color-accent) 45px
  );
}

/* Constructivist heading style */
.constructivist-heading {
  font-family: var(--font-heading);
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: -0.03em;
  line-height: 0.9;
  position: relative;
}

/* Rotated accent text */
.rotated-text {
  transform: rotate(-15deg);
  display: inline-block;
  background: var(--color-accent);
  color: var(--color-bg);
  padding: 0.5rem 1rem;
}

/* Red bar divider */
.red-bar {
  height: 8px;
  background: var(--color-accent);
  transform: skewX(-15deg);
  margin: 2rem 0;
}

/* Geometric accent circle */
.accent-circle {
  width: 100px;
  height: 100px;
  background: var(--color-accent);
  border-radius: 50%;
  position: absolute;
}

/* Card with angular border */
.angular-card {
  border: 4px solid var(--color-text);
  padding: 2rem;
  position: relative;
  transform: rotate(-1deg);
}

.angular-card:hover {
  transform: rotate(0deg);
  background: var(--color-accent);
  color: var(--color-bg);
}

.highlight-box {
  background: var(--color-accent);
  color: var(--color-bg);
  padding: 0.25rem 0.75rem;
  transform: skewX(-5deg);
  display: inline-block;
}

::selection {
  background: var(--color-accent);
  color: var(--color-bg);
}
```

### Component Changes

**Hero.jsx**
```jsx
export default function Hero() {
  return (
    <section className="border-b-4 border-black p-8 md:p-16 relative overflow-hidden">
      {/* Diagonal red stripe background element */}
      <div className="absolute -right-20 top-0 w-40 h-full bg-[#cc0000] transform rotate-12 opacity-90"></div>

      <div className="max-w-4xl relative z-10">
        <p className="font-['PT_Sans'] text-sm uppercase tracking-widest mb-4">
          A methodology for AI-assisted frontend development
        </p>
        <h1 className="font-['Oswald'] text-6xl md:text-8xl font-black uppercase leading-[0.85] mb-8">
          The<br />
          <span className="bg-[#cc0000] text-[#f5f0e6] px-3 inline-block transform -skew-x-6">Constraint</span><br />
          Method
        </h1>
        <p className="text-xl md:text-2xl max-w-xl leading-relaxed">
          Less freedom. Better results.<br />
          <span className="font-bold transform -rotate-3 inline-block mt-2 border-b-4 border-[#cc0000]">This page is proof.</span>
        </p>
      </div>

      {/* Geometric accent */}
      <div className="absolute bottom-8 right-8 w-16 h-16 border-4 border-black transform rotate-45"></div>
    </section>
  )
}
```

**Problem.jsx**
```jsx
export default function Problem() {
  return (
    <section className="border-b-4 border-black p-8 md:p-16 bg-[#1a1a1a] text-[#f5f0e6] relative">
      <div className="absolute top-0 left-0 w-2 h-full bg-[#cc0000]"></div>
      <div className="max-w-4xl ml-6">
        <h2 className="font-['Oswald'] text-4xl md:text-5xl font-black uppercase mb-8 transform -skew-x-3">
          The Problem
        </h2>
        <div className="space-y-6 text-lg md:text-xl">
          <p className="text-2xl font-bold">
            "Make it look good" doesn't work.
          </p>
          <p>
            Open-ended prompts produce generic results. The AI has infinite
            choices, so it picks the safest ones.
          </p>
          <p className="bg-[#cc0000] text-[#f5f0e6] p-4 transform -rotate-1 inline-block">
            The paradox: more freedom = worse output.
          </p>
        </div>
      </div>
    </section>
  )
}
```

---

## B3: Stencil Spray Paint

### Concept
Urban street art aesthetic with stencil-cut typography, spray paint texture overlays, drip effects, and a gritty concrete/asphalt color scheme that feels like guerrilla art on city walls.

### Color Palette
```css
--color-bg: #2d2d2d;        /* Dark concrete gray */
--color-text: #ffffff;      /* White spray paint */
--color-accent: #ffcc00;    /* Safety yellow */
--color-border: #ffffff;    /* White borders */
--color-secondary: #ff6b35; /* Orange accent */
--color-drip: #ffffff33;    /* Semi-transparent drips */
```

### Typography Changes
- Primary font: `'Black Ops One', 'Stencil', fantasy` for headings
- Body: `'Roboto Condensed', 'Arial Narrow', sans-serif`
- Stencil-style gaps in letterforms (achieved with text-shadow tricks)
- Rough, uneven baseline
- Spray paint "overspray" glow effects

### Layout Tweaks
- Textured/noisy background (CSS grain)
- Paint drip effects on borders
- Stencil-cut boxes (dashed borders with gaps)
- Content blocks appear "sprayed" onto surface
- Tape/marker annotations

### Signature Element
**Drip Effect Borders**: Borders have intentional "paint drip" shapes extending downward, created with CSS pseudo-elements.

### CSS Changes

```css
@import url('https://fonts.googleapis.com/css2?family=Black+Ops+One&family=Roboto+Condensed:wght@400;700&display=swap');

:root {
  --color-bg: #2d2d2d;
  --color-text: #ffffff;
  --color-accent: #ffcc00;
  --color-border: #ffffff;
  --color-secondary: #ff6b35;
  --font-stencil: 'Black Ops One', 'Stencil', fantasy;
  --font-body: 'Roboto Condensed', 'Arial Narrow', sans-serif;
  --border-weight: 3px;
}

body {
  background-color: var(--color-bg);
  color: var(--color-text);
  font-family: var(--font-body);
  /* Noise texture overlay */
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E");
}

/* Stencil heading with spray effect */
.stencil-heading {
  font-family: var(--font-stencil);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  text-shadow:
    0 0 20px rgba(255, 255, 255, 0.3),
    2px 2px 0 rgba(0, 0, 0, 0.5);
  position: relative;
}

/* Spray paint glow */
.spray-glow {
  text-shadow:
    0 0 10px var(--color-text),
    0 0 20px var(--color-text),
    0 0 30px var(--color-text);
}

/* Drip effect border */
.drip-border {
  border: 3px solid var(--color-text);
  position: relative;
}

.drip-border::after {
  content: '';
  position: absolute;
  bottom: -20px;
  left: 20%;
  width: 4px;
  height: 20px;
  background: var(--color-text);
  border-radius: 0 0 2px 2px;
}

.drip-border::before {
  content: '';
  position: absolute;
  bottom: -35px;
  left: 60%;
  width: 3px;
  height: 35px;
  background: var(--color-text);
  border-radius: 0 0 2px 2px;
}

/* Stencil box (dashed with gaps) */
.stencil-box {
  border: 3px dashed var(--color-text);
  padding: 2rem;
  position: relative;
}

/* Yellow caution tape accent */
.caution-tape {
  background: repeating-linear-gradient(
    -45deg,
    var(--color-accent),
    var(--color-accent) 10px,
    #1a1a1a 10px,
    #1a1a1a 20px
  );
  height: 24px;
  margin: 1rem 0;
}

.highlight-box {
  background: var(--color-accent);
  color: #1a1a1a;
  padding: 0.25rem 0.75rem;
  display: inline-block;
  transform: rotate(-1deg);
}

/* Marker annotation style */
.marker-note {
  font-family: 'Comic Sans MS', cursive;
  color: var(--color-secondary);
  transform: rotate(-3deg);
  display: inline-block;
}

::selection {
  background: var(--color-accent);
  color: #1a1a1a;
}
```

### Component Changes

**Hero.jsx**
```jsx
export default function Hero() {
  return (
    <section className="border-b-3 border-white p-8 md:p-16 relative">
      {/* Caution tape accent */}
      <div className="caution-tape absolute top-0 left-0 right-0"></div>

      <div className="max-w-4xl mt-8">
        <p className="text-sm uppercase tracking-[0.3em] mb-4 opacity-70">
          // A methodology for AI-assisted frontend development
        </p>
        <h1 className="font-['Black_Ops_One'] text-5xl md:text-7xl uppercase leading-none mb-8 stencil-heading">
          The<br />
          <span className="bg-[#ffcc00] text-[#1a1a1a] px-3 inline-block transform -rotate-1">Constraint</span><br />
          Method
        </h1>
        <p className="text-xl md:text-2xl max-w-xl leading-relaxed">
          Less freedom. Better results.<br />
          <span className="marker-note text-lg">^ This page is proof!</span>
        </p>
      </div>

      {/* Spray drip effect */}
      <div className="absolute bottom-0 right-20 w-1 h-12 bg-white rounded-b-full opacity-60"></div>
      <div className="absolute bottom-0 right-32 w-2 h-8 bg-white rounded-b-full opacity-40"></div>
    </section>
  )
}
```

**Solution.jsx**
```jsx
export default function Solution() {
  return (
    <section className="border-b-3 border-white p-8 md:p-16">
      <div className="max-w-4xl">
        <h2 className="font-['Black_Ops_One'] text-3xl md:text-4xl uppercase mb-8 stencil-heading">
          The Solution
        </h2>
        <p className="text-xl md:text-2xl mb-12">
          Constrain the problem. <span className="bg-[#ffcc00] text-[#1a1a1a] px-2 transform rotate-1 inline-block">Liberate the output.</span>
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="stencil-box drip-border">
            <div className="font-['Black_Ops_One'] text-4xl mb-2 opacity-50">01</div>
            <h3 className="font-['Black_Ops_One'] text-xl uppercase mb-2">Show</h3>
            <p>Reference images beat descriptions. Give the AI something to match, not imagine.</p>
          </div>

          <div className="stencil-box bg-white text-[#2d2d2d]">
            <div className="font-['Black_Ops_One'] text-4xl mb-2 opacity-50">02</div>
            <h3 className="font-['Black_Ops_One'] text-xl uppercase mb-2">Limit</h3>
            <p>Pick your constraints upfront. Two colors. One font. Fewer choices = sharper output.</p>
          </div>

          <div className="stencil-box drip-border">
            <div className="font-['Black_Ops_One'] text-4xl mb-2 opacity-50">03</div>
            <h3 className="font-['Black_Ops_One'] text-xl uppercase mb-2">Specify</h3>
            <p>"Make the header 20px smaller" beats "make it look better." Precision over vibes.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
```

---

## B4: Concrete Brutalism

### Concept
Architectural brutalism with heavy concrete textures, monolithic block forms, deep shadows, and the raw aesthetic of 1960s institutional buildings. Massive typography that feels carved into stone.

### Color Palette
```css
--color-bg: #c4beb4;        /* Warm concrete gray */
--color-text: #2c2c2c;      /* Dark charcoal */
--color-accent: #8b4513;    /* Rust/oxidized metal */
--color-border: #2c2c2c;    /* Dark borders */
--color-shadow: #00000033;  /* Deep shadows */
--color-light: #d9d3c9;     /* Light concrete */
```

### Typography Changes
- Primary font: `'Bebas Neue', 'Impact', sans-serif` for headings
- Body: `'Source Sans Pro', 'Arial', sans-serif`
- Ultra-condensed, heavy weight headings
- Large x-height for readability
- Minimal kerning (tight letter spacing)

### Layout Tweaks
- Heavy box shadows (8px+) for depth
- Overlapping "concrete slab" sections
- Inset/embossed text effects
- Thick dividing bars
- Asymmetric weight distribution

### Signature Element
**Concrete Texture Overlay**: Subtle noise/grain texture on backgrounds with heavy drop shadows on all elements, creating a tactile, architectural feel.

### CSS Changes

```css
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Source+Sans+Pro:wght@400;600;700&display=swap');

:root {
  --color-bg: #c4beb4;
  --color-text: #2c2c2c;
  --color-accent: #8b4513;
  --color-border: #2c2c2c;
  --color-shadow: #00000033;
  --color-light: #d9d3c9;
  --font-heading: 'Bebas Neue', 'Impact', sans-serif;
  --font-body: 'Source Sans Pro', 'Arial', sans-serif;
  --border-weight: 0;
}

body {
  background-color: var(--color-bg);
  color: var(--color-text);
  font-family: var(--font-body);
  /* Concrete texture */
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)' opacity='0.12'/%3E%3C/svg%3E");
}

/* Concrete slab block */
.concrete-slab {
  background: var(--color-light);
  box-shadow:
    8px 8px 0 var(--color-shadow),
    inset 0 0 50px rgba(0,0,0,0.05);
  padding: 2.5rem;
  position: relative;
}

/* Inset/embossed heading */
.brutalist-arch-heading {
  font-family: var(--font-heading);
  font-size: 5rem;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: var(--color-text);
  text-shadow:
    2px 2px 0 var(--color-light),
    -1px -1px 0 rgba(0,0,0,0.2);
}

/* Heavy divider bar */
.heavy-bar {
  height: 12px;
  background: var(--color-text);
  margin: 3rem 0;
  box-shadow: 4px 4px 0 var(--color-shadow);
}

/* Monolithic card */
.monolith-card {
  background: var(--color-bg);
  box-shadow:
    12px 12px 0 rgba(0,0,0,0.15),
    inset 0 0 30px rgba(0,0,0,0.03);
  padding: 2rem;
  transition: transform 0.2s ease;
}

.monolith-card:hover {
  transform: translate(-4px, -4px);
  box-shadow:
    16px 16px 0 rgba(0,0,0,0.2),
    inset 0 0 30px rgba(0,0,0,0.03);
}

.highlight-box {
  background: var(--color-text);
  color: var(--color-bg);
  padding: 0.5rem 1rem;
  box-shadow: 4px 4px 0 var(--color-shadow);
  display: inline-block;
}

/* Rust accent */
.rust-accent {
  color: var(--color-accent);
  border-left: 6px solid var(--color-accent);
  padding-left: 1rem;
}

section {
  border-bottom: none !important;
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
    <section className="p-8 md:p-16 pb-24">
      <div className="max-w-4xl">
        <p className="text-sm uppercase tracking-[0.2em] mb-6 opacity-60">
          A methodology for AI-assisted frontend development
        </p>
        <h1 className="font-['Bebas_Neue'] text-7xl md:text-[10rem] leading-[0.85] mb-8 tracking-tight">
          The<br />
          <span className="bg-[#2c2c2c] text-[#c4beb4] px-4 inline-block shadow-[8px_8px_0_rgba(0,0,0,0.2)]">Constraint</span><br />
          Method
        </h1>
        <p className="text-xl md:text-2xl max-w-xl leading-relaxed">
          Less freedom. Better results.<br />
          <span className="font-semibold border-l-4 border-[#8b4513] pl-3 inline-block mt-2">This page is proof.</span>
        </p>
      </div>
      <div className="heavy-bar max-w-4xl mt-12"></div>
    </section>
  )
}
```

**Problem.jsx**
```jsx
export default function Problem() {
  return (
    <section className="p-8 md:p-16 bg-[#2c2c2c] text-[#c4beb4]">
      <div className="max-w-4xl">
        <h2 className="font-['Bebas_Neue'] text-5xl md:text-7xl mb-8 tracking-tight">
          The Problem
        </h2>
        <div className="concrete-slab text-[#2c2c2c] -ml-4 md:-ml-8">
          <div className="space-y-6 text-lg md:text-xl">
            <p className="text-2xl font-bold">
              "Make it look good" doesn't work.
            </p>
            <p>
              Open-ended prompts produce generic results. The AI has infinite
              choices, so it picks the safest ones.
            </p>
            <p className="rust-accent text-lg">
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
    <section className="p-8 md:p-16">
      <div className="max-w-4xl">
        <h2 className="font-['Bebas_Neue'] text-5xl md:text-7xl mb-8 tracking-tight">
          The Solution
        </h2>
        <p className="text-xl md:text-2xl mb-12">
          Constrain the problem. <span className="bg-[#2c2c2c] text-[#c4beb4] px-3 py-1 shadow-[6px_6px_0_rgba(0,0,0,0.15)]">Liberate the output.</span>
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="monolith-card">
            <div className="font-['Bebas_Neue'] text-5xl mb-2 opacity-30">01</div>
            <h3 className="font-['Bebas_Neue'] text-2xl mb-2">SHOW</h3>
            <p>Reference images beat descriptions. Give the AI something to match, not imagine.</p>
          </div>

          <div className="monolith-card bg-[#2c2c2c] text-[#c4beb4]">
            <div className="font-['Bebas_Neue'] text-5xl mb-2 opacity-30">02</div>
            <h3 className="font-['Bebas_Neue'] text-2xl mb-2">LIMIT</h3>
            <p>Pick your constraints upfront. Two colors. One font. Fewer choices = sharper output.</p>
          </div>

          <div className="monolith-card">
            <div className="font-['Bebas_Neue'] text-5xl mb-2 opacity-30">03</div>
            <h3 className="font-['Bebas_Neue'] text-2xl mb-2">SPECIFY</h3>
            <p>"Make the header 20px smaller" beats "make it look better." Precision over vibes.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
```

---

## B5: Punk Zine Collage

### Concept
Chaotic punk rock zine aesthetic with cut-and-paste typography, ransom-note style mixed fonts, torn paper edges, photocopied texture, and anarchic layout that breaks all grid rules intentionally.

### Color Palette
```css
--color-bg: #fffef0;        /* Yellowed paper */
--color-text: #000000;      /* Pure black (photocopied) */
--color-accent: #ff0066;    /* Hot pink */
--color-border: #000000;    /* Black borders */
--color-secondary: #00ff00; /* Neon green */
--color-paper: #f0ede4;     /* Torn paper color */
```

### Typography Changes
- Mixed fonts: `'Courier New'`, `'Impact'`, `'Times New Roman'`, `'Comic Sans MS'`
- Different fonts for each word/letter
- Varying sizes within same line
- Some text "cut out" and rotated
- Handwritten annotations

### Layout Tweaks
- Elements overlapping randomly
- Torn/rough paper edge effects
- "Taped" elements with visible tape
- Crossed-out and handwritten corrections
- Photocopier artifacts (black bars, skewed content)

### Signature Element
**Ransom Note Typography**: Each heading has words in different fonts, sizes, and rotations, as if cut from different magazines and glued together.

### CSS Changes

```css
@import url('https://fonts.googleapis.com/css2?family=Special+Elite&family=Permanent+Marker&family=Staatliches&display=swap');

:root {
  --color-bg: #fffef0;
  --color-text: #000000;
  --color-accent: #ff0066;
  --color-border: #000000;
  --color-secondary: #00ff00;
  --color-paper: #f0ede4;
  --border-weight: 2px;
}

body {
  background-color: var(--color-bg);
  color: var(--color-text);
  font-family: 'Times New Roman', serif;
  /* Photocopy texture */
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)' opacity='0.06'/%3E%3C/svg%3E");
}

/* Ransom note word - varies each use */
.ransom-word {
  display: inline-block;
  padding: 0.1em 0.3em;
  margin: 0 0.1em;
  background: var(--color-paper);
  box-shadow: 2px 2px 0 rgba(0,0,0,0.2);
}

.ransom-word:nth-child(odd) {
  transform: rotate(-3deg);
  font-family: 'Impact', sans-serif;
}

.ransom-word:nth-child(even) {
  transform: rotate(2deg);
  font-family: 'Courier New', monospace;
}

/* Cut-out box with tape */
.taped-box {
  background: var(--color-paper);
  padding: 1.5rem;
  position: relative;
  transform: rotate(-1deg);
  box-shadow: 3px 3px 0 rgba(0,0,0,0.1);
}

.taped-box::before {
  content: '';
  position: absolute;
  top: -8px;
  left: 20%;
  width: 60px;
  height: 20px;
  background: rgba(255, 255, 200, 0.7);
  transform: rotate(-5deg);
  border: 1px solid rgba(0,0,0,0.1);
}

/* Torn paper edge */
.torn-edge {
  position: relative;
}

.torn-edge::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 20px;
  background: linear-gradient(135deg, var(--color-bg) 25%, transparent 25%) -10px 0,
              linear-gradient(225deg, var(--color-bg) 25%, transparent 25%) -10px 0;
  background-size: 20px 20px;
}

/* Crossed out text */
.crossed-out {
  text-decoration: line-through;
  text-decoration-thickness: 3px;
  opacity: 0.5;
}

/* Handwritten note */
.handwritten {
  font-family: 'Permanent Marker', cursive;
  color: var(--color-accent);
  transform: rotate(-5deg);
  display: inline-block;
}

/* Photocopier artifact - black bar */
.copy-artifact {
  background: #000;
  height: 3px;
  width: 100%;
  margin: 1rem 0;
  opacity: 0.3;
}

/* Highlight with marker */
.marker-highlight {
  background: linear-gradient(180deg, transparent 50%, var(--color-secondary) 50%);
  padding: 0 0.2em;
}

/* Zine card - random rotations */
.zine-card {
  background: var(--color-paper);
  border: 2px solid var(--color-text);
  padding: 1.5rem;
  position: relative;
}

.zine-card:nth-child(1) { transform: rotate(-2deg); }
.zine-card:nth-child(2) { transform: rotate(1deg); }
.zine-card:nth-child(3) { transform: rotate(-1deg); }

.highlight-box {
  background: var(--color-accent);
  color: white;
  padding: 0.2rem 0.5rem;
  transform: rotate(2deg);
  display: inline-block;
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
  return (
    <section className="border-b-2 border-black p-8 md:p-16 relative overflow-hidden">
      {/* Photocopier artifact */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-black opacity-20"></div>

      <div className="max-w-4xl">
        <p className="font-['Special_Elite'] text-sm uppercase tracking-widest mb-4">
          A methodology for AI-assisted frontend development
        </p>

        {/* Ransom note heading */}
        <h1 className="text-5xl md:text-7xl leading-tight mb-8">
          <span className="inline-block bg-[#f0ede4] px-2 font-['Impact'] transform -rotate-2 shadow-[2px_2px_0_rgba(0,0,0,0.2)]">The</span><br />
          <span className="inline-block bg-[#ff0066] text-white px-3 font-['Courier_New'] transform rotate-1 shadow-[3px_3px_0_rgba(0,0,0,0.3)] text-6xl md:text-8xl">CONSTRAINT</span><br />
          <span className="inline-block bg-[#f0ede4] px-2 font-['Staatliches'] transform -rotate-1 shadow-[2px_2px_0_rgba(0,0,0,0.2)]">Method</span>
        </h1>

        <p className="text-xl md:text-2xl max-w-xl leading-relaxed">
          <span className="crossed-out">More options. Better results.</span><br />
          Less freedom. Better results.<br />
          <span className="handwritten text-lg ml-4">^ This page is proof!</span>
        </p>
      </div>

      {/* Random tape piece */}
      <div className="absolute top-20 right-10 w-16 h-6 bg-yellow-100/70 transform rotate-45 border border-yellow-200"></div>
    </section>
  )
}
```

**Problem.jsx**
```jsx
export default function Problem() {
  return (
    <section className="border-b-2 border-black p-8 md:p-16 bg-black text-white relative">
      <div className="copy-artifact absolute top-4 left-0"></div>

      <div className="max-w-4xl">
        <h2 className="text-3xl md:text-5xl mb-8">
          <span className="font-['Impact'] bg-white text-black px-2 inline-block transform -rotate-1">The</span>
          <span className="font-['Courier_New'] bg-[#ff0066] px-2 inline-block transform rotate-2 ml-2">PROBLEM</span>
        </h2>

        <div className="taped-box text-black transform rotate-1">
          <div className="space-y-4 text-lg md:text-xl">
            <p className="font-['Special_Elite'] text-2xl">
              "Make it look good" <span className="handwritten">doesn't work!!!</span>
            </p>
            <p className="font-serif">
              Open-ended prompts produce <span className="marker-highlight">generic results</span>. The AI has infinite
              choices, so it picks the safest ones.
            </p>
            <p className="font-['Permanent_Marker'] text-xl transform -rotate-2 inline-block border-2 border-black p-2 mt-4">
              more freedom = worse output
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
    <section className="border-b-2 border-black p-8 md:p-16">
      <div className="max-w-4xl">
        <h2 className="text-3xl md:text-5xl mb-8">
          <span className="font-['Staatliches'] bg-[#f0ede4] px-2 inline-block transform rotate-1">The</span>
          <span className="font-['Impact'] bg-[#00ff00] px-2 inline-block transform -rotate-2 ml-2">SOLUTION</span>
        </h2>

        <p className="text-xl md:text-2xl mb-12 font-['Special_Elite']">
          Constrain the problem.
          <span className="bg-[#ff0066] text-white px-2 inline-block transform rotate-2 ml-1">Liberate the output.</span>
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="zine-card">
            <div className="font-['Impact'] text-5xl opacity-30">01</div>
            <h3 className="font-['Permanent_Marker'] text-2xl mb-2 transform -rotate-1">SHOW</h3>
            <p className="font-serif">Reference images beat descriptions. Give the AI something to <span className="marker-highlight">match</span>, not imagine.</p>
          </div>

          <div className="zine-card bg-black text-white">
            <div className="font-['Courier_New'] text-5xl opacity-30">02</div>
            <h3 className="font-['Staatliches'] text-2xl mb-2">LIMIT</h3>
            <p>Pick your constraints upfront. Two colors. One font. <span className="handwritten text-[#ff0066]">Fewer = better!</span></p>
          </div>

          <div className="zine-card">
            <div className="font-['Impact'] text-5xl opacity-30">03</div>
            <h3 className="font-['Permanent_Marker'] text-2xl mb-2 transform rotate-1">SPECIFY</h3>
            <p className="font-serif">"Make the header 20px smaller" beats <span className="crossed-out">"make it look better."</span></p>
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
    <footer className="p-8 md:p-16 text-sm relative">
      <div className="copy-artifact mb-4"></div>
      <div className="max-w-4xl flex flex-col md:flex-row justify-between gap-4">
        <div className="font-['Special_Elite']">
          <span className="bg-[#f0ede4] px-1 transform -rotate-1 inline-block">The Constraint Method</span>
          <span className="mx-2">/</span>
          <span className="handwritten">Built with Claude Code CLI</span>
        </div>
        <div className="font-['Permanent_Marker'] transform rotate-2">
          Mini Hackathon 2026
        </div>
      </div>
    </footer>
  )
}
```

---

## Implementation Notes

### Shared Requirements

All variations require updating `index.css` with the new CSS variables and styles. The component changes can be implemented by:

1. Copying the relevant component file
2. Replacing content with the variation's JSX
3. Ensuring the CSS classes are available

### Font Loading

Each variation uses Google Fonts. Add the appropriate `@import` statement to `index.css`:

- **B1 Blueprint**: `Share Tech Mono`
- **B2 Constructivist**: `Oswald`, `PT Sans`
- **B3 Stencil**: `Black Ops One`, `Roboto Condensed`
- **B4 Concrete**: `Bebas Neue`, `Source Sans Pro`
- **B5 Punk Zine**: `Special Elite`, `Permanent Marker`, `Staatliches`

### CSS Custom Properties

Each variation redefines the `:root` custom properties. To switch variations:

1. Replace the `:root` block in `index.css`
2. Add variation-specific utility classes
3. Update component JSX to use new classes

### Responsive Considerations

All variations maintain the existing responsive breakpoints (`md:` prefix for 768px+). Typography scales appropriately, and grid layouts collapse to single column on mobile.
