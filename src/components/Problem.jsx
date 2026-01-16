export default function Problem() {
  return (
    <section className="border-b-3 border-black p-8 md:p-16 bg-black text-white">
      <div className="max-w-4xl">
        <h2 className="font-mono text-3xl md:text-4xl font-bold uppercase mb-8">
          The Problem
        </h2>
        <div className="space-y-6 text-lg md:text-xl">
          <p>
            "Make it look good" doesn't work.
          </p>
          <p>
            Open-ended prompts produce generic results. The AI has infinite
            choices, so it picks the safest ones. You get Bootstrap. You get
            gradient buttons. You get <span className="font-mono bg-white text-black px-1">corporate website #4,892</span>.
          </p>
          <p className="font-mono text-sm border-l-4 border-white pl-4">
            The paradox: more freedom = worse output.
          </p>
        </div>
      </div>
    </section>
  )
}
