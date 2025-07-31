'use client';
import Image from 'next/image';

export default function ZipPatternPage() {
  return (
    <div className="relative min-h-screen bg-transparent text-white flex flex-col justify-start px-6 py-16 text-center">

      <main className="relative z-10 w-full lg:max-w-7xl mx-auto px-6 flex flex-col items-center text-center min-h-screen py-40">
        <section className="relative w-full min-h-screen flex flex-col items-center justify-center text-white text-center mb-12 overflow-hidden">
          {/* Grayscale wolf background */}
          <div className="absolute top-0 left-0 w-full h-full z-0 opacity-30 blur-sm grayscale brightness-50 pointer-events-none">
            <Image
              src="/wolf-bg.png"
              alt="AE-iT.OPS Wolf Background"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
          {/* Foreground: zipPattern logo and tagline */}
          <div className="absolute z-10 flex flex-col justify-center items-center">
            <img
              src="/zippattern.png"
              alt="zipPattern Logo"
              className="w-[20rem] h-[20rem] object-contain rounded-full mb-4 transition-all duration-500"
            />
            <h1 className="text-4xl font-serif font-bold transition-all duration-500">
              zipPattern
            </h1>
            <p className="text-xl italic mt-2 transition-all duration-500 text-gray-300">
              Redefining outdated traditions with modern solutions.
            </p>
          </div>
        </section>

        <section className="text-lg leading-relaxed projects min-h-screen py-40">
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Philosophy</h2>
            <p>
              zipPattern was born from a simple idea: what if projecting sewing patterns onto fabric was as easy and precise as printing on paper?
              By merging maker logic with precision tools, zipPattern replaces printers, paper waste, and frustration with seamless
              projection workflows — customizable and intuitive.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Why?</h2>
            <p>
              Because creative tools should empower, not frustrate. Because “that’s how it’s always been done”
              isn’t a good enough reason to keep doing something inefficient. zipPattern exists to answer the why
              behind every step of pattern making — and to offer something radically better.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 justify-items-center">            {[
              { src: "/pattern1.png", alt: "Pattern 1 Preview", label: "Adjustable Grid Tiling" },
              { src: "/pattern2.png", alt: "Pattern 2 Preview", label: "Mobile Calibration Flow" },
              { src: "/pattern3.png", alt: "Pattern 3 Preview", label: "Projection Mapping Preview" }
            ].map(({ src, alt, label }, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={src}
                  alt={alt}
                  width={400}
                  height={250}
                  className="object-cover transform group-hover:scale-105 transition-transform duration-300 ease-in-out"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white text-sm text-center py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {label}
                </div>
              </div>
            ))}
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Explore More</h2>
            <ul className="list-disc list-inside text-indigo-300 hover:text-indigo-400 transition-colors duration-200">
              <li>Auto-scaling + calibration for any projector setup</li>
              <li>Grid overlays and tile stitching</li>
              <li>Built-in pattern import &amp; preview</li>
              <li>Mobile and desktop workflows</li>
              <li>Smart adjustments with future AI-assisted pattern placement</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
