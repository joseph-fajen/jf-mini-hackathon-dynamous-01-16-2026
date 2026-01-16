export default function Solution() {
  return (
    <section className="border-b-3 border-black p-8 md:p-16">
      <div className="max-w-4xl">
        <h2 className="font-mono text-3xl md:text-4xl font-bold uppercase mb-8">
          The Solution
        </h2>
        <p className="text-xl md:text-2xl mb-12">
          Constrain the problem. <span className="bg-black text-white px-1">Liberate the output.</span>
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="border-3 border-black p-6">
            <div className="font-mono text-4xl font-bold mb-2">01</div>
            <h3 className="font-mono text-xl font-bold uppercase mb-2">Show</h3>
            <p>Reference images beat descriptions. Give the AI something to match, not imagine.</p>
          </div>

          <div className="border-3 border-black p-6 bg-black text-white">
            <div className="font-mono text-4xl font-bold mb-2">02</div>
            <h3 className="font-mono text-xl font-bold uppercase mb-2">Limit</h3>
            <p>Pick your constraints upfront. Two colors. One font. Fewer choices = sharper output.</p>
          </div>

          <div className="border-3 border-black p-6">
            <div className="font-mono text-4xl font-bold mb-2">03</div>
            <h3 className="font-mono text-xl font-bold uppercase mb-2">Specify</h3>
            <p>"Make the header 20px smaller" beats "make it look better." Precision over vibes.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
