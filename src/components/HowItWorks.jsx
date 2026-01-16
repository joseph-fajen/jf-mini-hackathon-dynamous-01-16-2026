export default function HowItWorks() {
  return (
    <section className="border-b-3 border-black p-8 md:p-16">
      <div className="max-w-4xl">
        <h2 className="font-mono text-3xl md:text-4xl font-bold uppercase mb-8">
          How This Page Was Built
        </h2>

        <div className="space-y-8">
          <div className="border-l-4 border-black pl-6">
            <h3 className="font-mono text-xl font-bold uppercase mb-2">
              Constraint #1: Brutalist Aesthetic
            </h3>
            <p className="mb-2">
              Instead of "make it pretty," we said: black and white, monospace type,
              raw borders, no gradients, no shadows. The AI knew exactly what to do.
            </p>
            <code className="font-mono text-sm bg-gray-100 p-2 block">
              "Use a brutalist style: high contrast, visible grid, intentional roughness"
            </code>
          </div>

          <div className="border-l-4 border-black pl-6">
            <h3 className="font-mono text-xl font-bold uppercase mb-2">
              Constraint #2: Three Sections
            </h3>
            <p className="mb-2">
              Problem → Solution → How. No navigation, no footer links, no scope creep.
              The structure was locked before the first line of code.
            </p>
          </div>

          <div className="border-l-4 border-black pl-6">
            <h3 className="font-mono text-xl font-bold uppercase mb-2">
              Constraint #3: Specific Feedback
            </h3>
            <p className="mb-2">
              When something didn't look right, we didn't say "fix it." We said
              exactly what to change: padding, font size, spacing.
            </p>
            <code className="font-mono text-sm bg-gray-100 p-2 block">
              "Make the heading text-7xl instead of text-5xl"
            </code>
          </div>
        </div>

        <div className="mt-12 bg-black text-white p-6 font-mono">
          <p className="text-sm uppercase tracking-widest mb-2">The meta truth:</p>
          <p className="text-xl">
            This page was built in 1 hour using Claude Code CLI.<br />
            The method described is the method used.
          </p>
        </div>
      </div>
    </section>
  )
}
