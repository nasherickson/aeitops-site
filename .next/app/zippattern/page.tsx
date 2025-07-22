import React from 'react';

const ZipPatternPage = () => {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <header className="text-center mb-12">
        <img src="/zippattern.png" alt="ZipPattern Logo" className="w-40 h-40 mx-auto mb-4" loading="lazy" />
        <h1 className="text-4xl font-bold">zipPattern</h1>
        <p className="text-lg text-gray-400 italic">Revolutionizing sewing with real-world precision.</p>
      </header>

      <section className="max-w-4xl mx-auto text-lg leading-relaxed">
        <h2 className="text-2xl font-semibold mb-4">Philosophy</h2>
        <p className="mb-6">
          zipPattern was born from a simple idea: what if projecting sewing patterns onto fabric was as seamless as opening an app? 
          By merging maker logic with precision tools, zipPattern replaces printers, paper waste, and pattern taping with clean 
          projection workflows — customizable and intuitive.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Why?</h2>
        <p className="mb-6">
          Because creative tools should empower, not frustrate. Because &quot;that’s how it’s always been&quot; isn’t a good enough reason 
          to keep doing something inefficient. zipPattern exists to answer the why behind every tangled process in traditional 
          pattern making — and to offer something radically better.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Explore More</h2>
        <ul className="list-disc list-inside text-blue-400">
          <li>📐 Auto-scaling + calibration for any projector setup</li>
          <li>🧵 Grid overlays and tile stitching</li>
          <li>📂 Built-in pattern import &amp; preview</li>
          <li>🎯 Mobile and desktop workflows</li>
          <li>🧠 Smart adjustments with future AI-assisted pattern placement</li>
        </ul>
      </section>
    </div>
  );
}

export default ZipPatternPage;