// B1: Blueprint Technical - Cyan-on-navy engineering drawing style

export function HeroBlueprint() {
  return (
    <section className="border-b border-dashed border-[#00d4ff] p-8 md:p-16 relative bg-[#0a1628]"
             style={{
               backgroundImage: 'linear-gradient(#1a3a5c 1px, transparent 1px), linear-gradient(90deg, #1a3a5c 1px, transparent 1px)',
               backgroundSize: '20px 20px'
             }}>
      <div className="absolute top-4 right-4 text-xs opacity-50 tracking-widest text-[#00d4ff]">
        DWG-001 REV.A
      </div>
      <div className="max-w-4xl">
        <p className="text-xs uppercase tracking-[0.2em] mb-4 opacity-70 text-[#00d4ff]" style={{ fontFamily: "'Share Tech Mono', 'Courier New', monospace" }}>
          [SPECIFICATION] A methodology for AI-assisted frontend development
        </p>
        <h1 className="text-4xl md:text-6xl font-bold uppercase leading-none mb-8 tracking-wide text-[#00d4ff]" style={{ fontFamily: "'Share Tech Mono', 'Courier New', monospace" }}>
          The<br />
          <span className="border border-white text-white px-2">Constraint</span><br />
          Method
        </h1>
        <p className="text-lg md:text-xl max-w-xl leading-relaxed opacity-90 text-[#00d4ff]" style={{ fontFamily: "'Share Tech Mono', 'Courier New', monospace" }}>
          Less freedom. Better results.<br />
          <span className="text-xs tracking-widest">[REF: THIS PAGE IS PROOF]</span>
        </p>
      </div>
      <div className="absolute bottom-4 left-8 text-xs opacity-40 text-[#00d4ff]">
        SCALE: 1:1 | UNITS: PX
      </div>
    </section>
  )
}

export function ProblemBlueprint() {
  return (
    <section className="border-b border-dashed border-[#00d4ff] p-8 md:p-16 bg-[#0a1628] text-[#00d4ff]"
             style={{
               backgroundImage: 'linear-gradient(#1a3a5c 1px, transparent 1px), linear-gradient(90deg, #1a3a5c 1px, transparent 1px)',
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
          <p className="text-sm border-l border-dashed border-[#00d4ff] pl-4 opacity-70">
            NOTE: The paradox: more freedom = worse output.
          </p>
        </div>
      </div>
    </section>
  )
}

export function SolutionBlueprint() {
  return (
    <section className="border-b border-dashed border-[#00d4ff] p-8 md:p-16 bg-[#0a1628] text-[#00d4ff]"
             style={{
               backgroundImage: 'linear-gradient(#1a3a5c 1px, transparent 1px), linear-gradient(90deg, #1a3a5c 1px, transparent 1px)',
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
            <div key={item.num} className="border border-dashed border-[#00d4ff] p-6 relative">
              {/* Corner brackets */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#00d4ff]" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#00d4ff]" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#00d4ff]" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#00d4ff]" />

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

export function HowItWorksBlueprint() {
  return (
    <section className="border-b border-dashed border-[#00d4ff] p-8 md:p-16 bg-[#0a1628] text-[#00d4ff]"
             style={{
               backgroundImage: 'linear-gradient(#1a3a5c 1px, transparent 1px), linear-gradient(90deg, #1a3a5c 1px, transparent 1px)',
               backgroundSize: '20px 20px',
               fontFamily: "'Share Tech Mono', 'Courier New', monospace"
             }}>
      <div className="max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold uppercase mb-8 tracking-wide">
          [SECTION 04] Build Specifications
        </h2>

        <div className="space-y-8">
          {[
            { id: '4.1', title: 'Constraint #1: Brutalist Aesthetic', desc: 'Instead of "make it pretty," we said: black and white, monospace type, raw borders, no gradients, no shadows.', code: '"Use a brutalist style: high contrast, visible grid, intentional roughness"' },
            { id: '4.2', title: 'Constraint #2: Three Sections', desc: 'Problem → Solution → How. No navigation, no footer links, no scope creep. The structure was locked before the first line of code.', code: null },
            { id: '4.3', title: 'Constraint #3: Specific Feedback', desc: 'When something didn\'t look right, we didn\'t say "fix it." We said exactly what to change.', code: '"Make the heading text-7xl instead of text-5xl"' }
          ].map((item) => (
            <div key={item.id} className="border-l border-dashed border-[#00d4ff] pl-6">
              <div className="text-xs opacity-50 mb-1">[{item.id}]</div>
              <h3 className="text-xl font-bold uppercase mb-2">{item.title}</h3>
              <p className="mb-2 opacity-80">{item.desc}</p>
              {item.code && (
                <code className="text-sm bg-[#0a1628] border border-dashed border-[#00d4ff] text-white/70 p-2 block">
                  {item.code}
                </code>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 border border-[#00d4ff] p-6 relative">
          <div className="absolute -top-3 left-4 bg-[#0a1628] px-2 text-xs uppercase tracking-wider">
            Output Note
          </div>
          <p className="text-sm uppercase tracking-widest mb-2 opacity-70">// VERIFICATION:</p>
          <p className="text-lg">
            This page was built in 1 hour using Claude Code CLI.<br />
            The method described is the method used.
          </p>
        </div>
      </div>
    </section>
  )
}

export function FooterBlueprint() {
  return (
    <footer className="p-8 md:p-16 text-sm bg-[#0a1628] text-[#00d4ff]"
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
