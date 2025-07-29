'use client';
import Image from 'next/image';

export default function ZipPatternPage() {
  return (
    <div className="relative min-h-screen bg-black text-white flex flex-col justify-start px-6 py-16 text-center">
      <div className="fixed inset-0 z-0 opacity-10 blur-sm grayscale brightness-50 pointer-events-none">
        <Image
          src="/zippattern.png"
          alt="zipPattern Logo Background"
          fill
          style={{ objectFit: 'contain', width: '120%', height: 'auto', transform: 'translateX(-10%)' }}  //or 'contasin', transform: 'scale(1)', transformOrigin: 'center' }}
          priority
          
        />
      </div>

      <main className="relative z-10 w-full lg:max-w-7xl mx-auto px-6 flex flex-col items-center text-center min-h-screen py-40">
        <section className="relative w-full h-screen flex flex-col items-center justify-center text-white text-center mb-12">
          <Image
            src="/zippattern.png"
            alt="zipPattern Fullscreen Logo"
            fill
            style={{ objectFit: 'contain' }}
            className="opacity-100 z-0"
            priority
          />
          <div className="absolute z-10">
            <h1 className="text-6xl font-bold tracking-wide uppercase">zipPattern</h1>
            <p className="text-2xl text-gray-300 font-light mt-4">
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
