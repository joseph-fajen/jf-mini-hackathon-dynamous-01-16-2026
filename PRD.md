# PRD: The Constraint Method Landing Page

## 1. Executive Summary

A brutalist-style landing page that showcases a method for building beautiful frontends with AI coding agents. The core thesis: **constraints are the secret weapon** — limiting scope, showing references instead of describing, and iterating with specific feedback produces better results than open-ended prompting.

The page itself is proof of the method. Built in one hour using Claude Code CLI with the exact workflow it describes, the landing page is both documentation and demonstration.

**MVP Goal:** Ship a visually distinctive, content-rich landing page that stands out from typical AI-generated sites and provides actionable insights for other developers.

## 2. Mission

**Mission Statement:** Demonstrate that intentional constraints produce better AI-assisted frontend development than unlimited freedom.

**Core Principles:**
1. **Show, don't tell** — Reference images beat verbal descriptions
2. **Constraints liberate** — Limiting options improves output quality
3. **Specific feedback wins** — "Make header 20px smaller" beats "make it look better"
4. **Ship, then polish** — Working code you can see beats perfect code you imagine
5. **The meta is the message** — This page proves its own thesis

## 3. Target Users

**Primary Persona:** Developers exploring AI-assisted frontend development
- Comfortable with React/modern frontend tooling
- Curious about AI coding workflows
- Looking for practical, specific techniques (not hype)

**Secondary Persona:** Hackathon judges
- Evaluating visual polish (40%), content quality (40%), creativity (20%)
- Looking for distinctive style and actionable insights

## 4. MVP Scope

### In Scope
✅ Single-page React + Tailwind application
✅ Brutalist visual aesthetic (raw, intentional, unconventional)
✅ Three main content sections (Problem → Solution → How)
✅ Mobile-responsive layout
✅ Deployed to Render with shareable URL
✅ Method-focused branding ("The Constraint Method")

### Out of Scope
❌ Multi-page navigation
❌ Backend/API functionality
❌ User authentication
❌ Analytics/tracking
❌ Blog or dynamic content
❌ Dark/light mode toggle

## 5. User Stories

1. **As a developer**, I want to see a real example of AI-assisted frontend work, so that I can evaluate whether this approach would work for me.

2. **As a hackathon judge**, I want to see visual craft and distinctive style, so that I can assess the quality of the work.

3. **As a visitor**, I want to understand the method quickly, so that I can decide if the content is worth my time.

4. **As a developer**, I want specific, actionable techniques, so that I can apply them to my own projects.

5. **As a skeptic**, I want to see proof that the method works, so that I can trust the claims being made.

## 6. Core Architecture & Patterns

### Directory Structure
```
src/
├── components/
│   ├── Hero.jsx          # Opening statement + hook
│   ├── Problem.jsx       # Why open-ended prompting fails
│   ├── Solution.jsx      # The constraint method overview
│   ├── HowItWorks.jsx    # Specific techniques
│   └── Footer.jsx        # Minimal closer
├── App.jsx               # Main layout
├── index.css             # Tailwind + brutalist overrides
└── main.jsx              # Entry point
```

### Design Patterns
- **Component-per-section** — Each content block is isolated
- **Utility-first CSS** — Tailwind for speed, custom properties for brutalist touches
- **Content-driven** — Structure follows narrative, not template

## 7. Features/Sections

### Section 1: Hero
- Bold, brutalist headline
- One-sentence value prop
- Visual hook (unconventional layout or typography)

### Section 2: The Problem
- Why "just ask Claude to make it pretty" doesn't work
- The paradox of choice in AI prompting
- Visual: could show a "bad" generic AI output

### Section 3: The Solution (Constraint Method)
- Core thesis: constraints → better results
- Three pillars: References, Limits, Specificity
- Visual: method diagram or manifesto-style layout

### Section 4: How It Works
- **Show, don't tell**: Using reference screenshots
- **Limit the palette**: Picking constraints upfront (colors, fonts, layout rules)
- **Iterate with precision**: "Make X smaller" vs "make it better"
- Could include actual prompts used to build this page

### Section 5: Footer
- Minimal — "Built in 1 hour with Claude Code CLI"
- Optional: link to repo or author

## 8. Technology Stack

### Core
- **React 18** — Component framework
- **Vite** — Build tool and dev server
- **Tailwind CSS 3** — Utility-first styling

### Brutalist Style Approach
- High contrast (black/white base, one accent color)
- Raw borders, visible structure
- Unconventional typography (monospace, oversized, or mixed weights)
- Intentional "roughness" — not polished gradients

### Deployment
- **Render** — Static site hosting
- Build command: `npm run build`
- Publish directory: `dist`

## 9. Security & Configuration

### Security Scope
✅ Static site only — no user input, no backend
✅ No secrets or API keys required
❌ Authentication (not needed)
❌ Environment variables (not needed)

### Configuration
- Vite config for build optimization
- Tailwind config for custom brutalist theme

## 10. Success Criteria

### MVP Success Definition
A deployed, shareable URL showing a visually distinctive landing page that:

✅ Looks intentionally brutalist (not accidentally ugly)
✅ Contains specific, actionable workflow insights
✅ Demonstrates the constraint method through its own existence
✅ Works on mobile viewports
✅ Loads fast (static, minimal assets)

### Quality Indicators
- **Visual Polish (40%)**: Distinctive style, intentional design choices, not generic
- **Content Quality (40%)**: Specific techniques, not vague platitudes
- **Creativity (20%)**: Surprising element — the brutalist choice + meta-narrative

## 11. Implementation Phases

### Phase 1: Scaffold (10 min)
**Goal:** Working React + Tailwind app with placeholder sections

**Deliverables:**
✅ Vite + React project initialized
✅ Tailwind configured with brutalist base styles
✅ Component files created for all sections
✅ Dev server running

**Validation:** Can see placeholder content in browser

### Phase 2: Content + Structure (20 min)
**Goal:** All sections populated with real content

**Deliverables:**
✅ Hero with headline and hook
✅ Problem section explaining the pain point
✅ Solution section with constraint method overview
✅ How It Works with specific techniques
✅ Footer with attribution

**Validation:** Full narrative flow readable in browser

### Phase 3: Visual Polish (20 min)
**Goal:** Brutalist aesthetic fully realized

**Deliverables:**
✅ Typography dialed in (sizes, weights, spacing)
✅ Color palette applied (high contrast + accent)
✅ Layout tweaks for visual interest
✅ Mobile responsiveness verified
✅ Any brutalist "signature" elements (borders, raw edges, etc.)

**Validation:** Looks intentionally brutalist, not broken

### Phase 4: Deploy + Buffer (10 min)
**Goal:** Live URL, time for fixes

**Deliverables:**
✅ Code pushed to GitHub
✅ Render static site configured
✅ Deployed URL verified working
✅ Any critical fixes addressed

**Validation:** Shareable URL works on mobile and desktop

## 12. Future Considerations

- Add actual screenshots of the build process
- Include code snippets from the prompts used
- Interactive elements (hover states, scroll animations)
- "View source" section showing the conversation that built it

## 13. Risks & Mitigations

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| Brutalist looks broken, not intentional | Medium | High | Use consistent system (borders, monospace, grid) to signal intentionality |
| Content too generic | Medium | High | Include actual prompts/specifics from this build |
| Time runs out before deploy | Medium | High | Phase 4 buffer; ship ugly if needed, polish is bonus |
| Tailwind fights brutalist aesthetic | Low | Medium | Override defaults early; embrace utility classes for raw positioning |

## 14. Appendix

### Brutalist Design References
- brutalistwebsites.com for inspiration
- Key elements: visible grid, monospace type, high contrast, raw borders, anti-polish

### Key Interview Inputs
- **Setup:** Claude Code CLI only
- **Design input:** Reference sites/screenshots
- **Validation:** Browser preview + iterate
- **Iteration:** Specific feedback
- **Aesthetic:** Brutalist/unconventional
- **Key insight:** Constraints help
- **Structure:** Problem → Solution → How

### Judging Criteria (from assignment)
- Visual Polish: 40%
- Content Quality: 40%
- Creativity: 20%
