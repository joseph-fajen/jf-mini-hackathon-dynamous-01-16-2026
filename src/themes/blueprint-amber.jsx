// B1-ALT: Blueprint Amber - Warm technical drawing variant

export function HeroAmber() {
  return (
    <section className="border-b border-dashed border-[#FFB000] p-8 md:p-16 relative bg-[#1a1408]"
             style={{
               backgroundImage: 'linear-gradient(#3d2e0a 1px, transparent 1px), linear-gradient(90deg, #3d2e0a 1px, transparent 1px)',
               backgroundSize: '20px 20px'
             }}>
      <div className="absolute top-4 right-4 text-xs opacity-50 tracking-widest text-[#FFB000]">
        DWG-001 REV.B
      </div>
      <div className="max-w-4xl">
        <p className="text-xs uppercase tracking-[0.2em] mb-4 opacity-70 text-[#FFB000]" style={{ fontFamily: "'Share Tech Mono', 'Courier New', monospace" }}>
          [SPECIFICATION] A methodology for AI-assisted frontend development
        </p>
        <h1 className="text-4xl md:text-6xl font-bold uppercase leading-none mb-8 tracking-wide text-[#FFB000]" style={{ fontFamily: "'Share Tech Mono', 'Courier New', monospace" }}>
          The<br />
          <span className="border border-white text-white px-2">Constraint</span><br />
          Method
        </h1>
        <p className="text-lg md:text-xl max-w-xl leading-relaxed opacity-90 text-[#FFB000]" style={{ fontFamily: "'Share Tech Mono', 'Courier New', monospace" }}>
          Less freedom. Better results.<br />
          <span className="text-xs tracking-widest">[REF: THIS PAGE IS PROOF]</span>
        </p>
      </div>
      <div className="absolute bottom-4 left-8 text-xs opacity-40 text-[#FFB000]">
        SCALE: 1:1 | UNITS: PX
      </div>
    </section>
  )
}

export function ProblemAmber() {
  return (
    <section className="border-b border-dashed border-[#FFB000] p-8 md:p-16 bg-[#1a1408] text-[#FFB000]"
             style={{
               backgroundImage: 'linear-gradient(#3d2e0a 1px, transparent 1px), linear-gradient(90deg, #3d2e0a 1px, transparent 1px)',
               backgroundSize: '20px 20px',
               fontFamily: "'Share Tech Mono', 'Courier New', monospace"
             }}>
      <div className="max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold uppercase mb-8 tracking-wide">
          [SECTION 02] The Problem
        </h2>
        <div className="space-y-6 text-lg opacity-90">
          <p>"Make it look good" doesn't work.</p>
          <p>
            Open-ended prompts produce generic results. The AI has infinite
            choices, so it picks the safest ones. You get Bootstrap. You get
            gradient buttons. You get <span className="border border-white text-white px-1">corporate website #4,892</span>.
          </p>
          <p className="text-sm border-l border-dashed border-[#FFB000] pl-4 opacity-70">
            NOTE: The paradox: more freedom = worse output.
          </p>
        </div>
      </div>
    </section>
  )
}

export function SolutionAmber() {
  return (
    <section className="border-b border-dashed border-[#FFB000] p-8 md:p-16 bg-[#1a1408] text-[#FFB000]"
             style={{
               backgroundImage: 'linear-gradient(#3d2e0a 1px, transparent 1px), linear-gradient(90deg, #3d2e0a 1px, transparent 1px)',
               backgroundSize: '20px 20px',
               fontFamily: "'Share Tech Mono', 'Courier New', monospace"
             }}>
      <div className="max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold uppercase mb-8 tracking-wide">
          [SECTION 03] The Solution
        </h2>
        <p className="text-xl mb-12">
          Constrain the problem. <span className="border border-white text-white px-1">Liberate the output.</span>
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { num: '01', title: 'Show', desc: 'Reference images beat descriptions. Give the AI something to match, not imagine.' },
            { num: '02', title: 'Limit', desc: 'Pick your constraints upfront. Two colors. One font. Fewer choices = sharper output.' },
            { num: '03', title: 'Specify', desc: '"Make the header 20px smaller" beats "make it look better." Precision over vibes.' }
          ].map((item) => (
            <div key={item.num} className="border border-dashed border-[#FFB000] p-6 relative">
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#FFB000]" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#FFB000]" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#FFB000]" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#FFB000]" />

              <div className="text-3xl font-bold mb-2 opacity-50">{item.num}</div>
              <h3 className="text-lg font-bold uppercase mb-2 tracking-wide">{item.title}</h3>
              <p className="text-sm opacity-80">{item.desc}</p>
              <div className="absolute -top-2 right-4 text-xs opacity-50">W:280px</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function HowItWorksAmber() {
  const steps = [
    {
      id: '4.1',
      title: 'Structured Interview → PRD',
      desc: 'Instead of diving into code, Claude interviewed me with targeted questions: What\'s your setup? How do you guide design? What aesthetic? Each answer constrained the solution space.',
      code: 'Q: "What visual style?" → A: "Brutalist/unconventional"\nQ: "Key insight?" → A: "Constraints help"'
    },
    {
      id: '4.2',
      title: 'Reusable Command Templates',
      desc: 'Pulled proven command templates from another project. The create-prd.md template structured our requirements doc. No reinventing the wheel — leverage what works.',
      code: 'rsync -av ../obsidian-ai-agent/.agents/reference/upstream-commands/ .agents/'
    },
    {
      id: '4.3',
      title: 'Scaffold with Locked Constraints',
      desc: 'Tech stack decided upfront: React + Vite + Tailwind. Aesthetic locked: brutalist. Structure locked: Problem → Solution → How. No scope creep allowed.',
      code: null
    },
    {
      id: '4.4',
      title: 'Parallel Subagents for Variations',
      desc: '3 AI agents ran simultaneously, each generating 5 design variations. 15 options in minutes. Void Mode, Blueprint Technical, Hazard Industrial, Punk Zine, Classified Document...',
      code: 'Agent A: Electric Magenta, Void Mode, Daily Broadsheet, Corrupt Signal, Phosphor Terminal\nAgent B: Blueprint, Constructivist, Stencil Spray, Concrete Brutalism, Punk Zine\nAgent C: Wireframe Ghost, Massive Type, Broken Grid, Classified, Hazard Industrial'
    },
    {
      id: '4.5',
      title: 'Theme Switcher for Rapid Preview',
      desc: 'Built a dropdown to toggle between 4 finalist themes live in the browser. No guessing from descriptions — see the actual rendered output before committing.',
      code: null
    },
    {
      id: '4.6',
      title: 'Select and Strip',
      desc: 'Picked Blueprint. Deleted the other themes, removed the switcher, committed. Ship the winner, discard the rest.',
      code: 'rm src/themes/void.jsx src/themes/hazard.jsx src/components/ThemeSwitcher.jsx'
    }
  ]

  return (
    <section className="border-b border-dashed border-[#FFB000] p-8 md:p-16 bg-[#1a1408] text-[#FFB000]"
             style={{
               backgroundImage: 'linear-gradient(#3d2e0a 1px, transparent 1px), linear-gradient(90deg, #3d2e0a 1px, transparent 1px)',
               backgroundSize: '20px 20px',
               fontFamily: "'Share Tech Mono', 'Courier New', monospace"
             }}>
      <div className="max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold uppercase mb-4 tracking-wide">
          [SECTION 04] Actual Build Process
        </h2>
        <p className="text-sm opacity-70 mb-8">// Not theory. This is exactly what we did.</p>

        <div className="space-y-8">
          {steps.map((item) => (
            <div key={item.id} className="border-l border-dashed border-[#FFB000] pl-6">
              <div className="text-xs opacity-50 mb-1">[{item.id}]</div>
              <h3 className="text-xl font-bold uppercase mb-2">{item.title}</h3>
              <p className="mb-2 opacity-80">{item.desc}</p>
              {item.code && (
                <code className="text-sm bg-[#1a1408] border border-dashed border-[#FFB000] text-white/70 p-2 block whitespace-pre-wrap">
                  {item.code}
                </code>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 border border-[#FFB000] p-6 relative">
          <div className="absolute -top-3 left-4 bg-[#1a1408] px-2 text-xs uppercase tracking-wider">
            Verification
          </div>
          <p className="text-sm uppercase tracking-widest mb-2 opacity-70">// OUTPUT METRICS:</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-white">1</div>
              <div className="text-xs opacity-70">HOUR</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">15</div>
              <div className="text-xs opacity-70">VARIATIONS</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">3</div>
              <div className="text-xs opacity-70">PARALLEL AGENTS</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">1</div>
              <div className="text-xs opacity-70">SHIPPED</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function FooterAmber() {
  return (
    <footer className="p-8 md:p-16 text-sm bg-[#1a1408] text-[#FFB000]"
            style={{ fontFamily: "'Share Tech Mono', 'Courier New', monospace" }}>
      <div className="max-w-4xl flex flex-col md:flex-row justify-between gap-4 opacity-70">
        <div>
          <span className="uppercase tracking-widest">THE CONSTRAINT METHOD</span>
          <span className="mx-2">|</span>
          <span>BUILT WITH CLAUDE CODE CLI</span>
        </div>
        <div>DWG DATE: 2026-01-16</div>
      </div>
    </footer>
  )
}
