"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function LlamoraPage() {
  return (
    <div className="bg-black text-white min-h-screen font-sans relative">
      {/* Background wolf */}
      <div className="fixed inset-0 z-0 opacity-10 blur-sm grayscale brightness-50 pointer-events-none">
        <Image
          src="/wolf-bg.png"
          alt="Wolf Background"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>

      <header className="fixed top-0 left-0 w-full z-10 bg-transparent h-[30rem] flex flex-col justify-center items-center">
        <div className="relative flex items-center justify-center">
          <Image
            src="/llamora.png"
            alt="Llamora Logo"
            width={400}
            height={400}
            className="object-contain mb-4 opacity-70 mix-blend-lighten"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-transparent pointer-events-none"></div>
        </div>
        <h1 className="text-4xl font-bold text-red-400">Llamora</h1>
        <p className="text-xl italic mt-2 text-gray-300">
          Your adaptive assistant — clarity at the speed of thought.
        </p>
      </header>

      <main className="relative z-10 pt-[32rem] px-6 max-w-4xl mx-auto text-center">
        <section className="mb-16 text-left">
          <h2 className="text-3xl font-bold mb-4 text-center">About Llamora</h2>
          <div className="space-y-12 text-lg leading-relaxed text-gray-300">
            <section>
              <h3 className="text-2xl font-semibold text-red-400 mb-4">Why Llamora Exists</h3>
              <p>
                Llamora was never meant to be just another tool. It was born out of frustration
                with systems that promised clarity but delivered complexity — frameworks that
                boxed in innovation instead of fueling it. I didn’t set out to build an app;
                I set out to build a companion for those of us who refuse to settle for “good
                enough.”
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-red-400 mb-4">What Llamora Is</h3>
              <p>
                At its core, Llamora is about adaptability. It grows with you, reshaping itself
                to fit the contours of your workflow instead of forcing you into rigid molds.
                Whether you’re calibrating precision with zipPattern, chasing visual clarity
                with AE‑Clear, or venturing into uncharted territory where no blueprint exists,
                Llamora is built to move with you — never against you.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-red-400 mb-4">How Llamora Works</h3>
              <p>
                The “how” isn’t hidden behind jargon or gates. Llamora uses a foundation of
                clean architecture, modular systems, and intentional design to ensure it scales
                without losing focus. It’s the console at your fingertips when you need control,
                the quiet structure running in the background when you don’t. Instead of asking
                you to bend, it flexes — so you can stay focused on building.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-red-400 mb-4">The Vision</h3>
              <p>
                Why Llamora? Because innovation doesn’t wait for perfect conditions. Because
                clarity shouldn’t be a luxury. Because tools should empower, not restrict. The
                world doesn’t need another app to learn — it needs a framework that learns you.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-red-400 mb-4">A Call to Builders</h3>
              <p>
                This isn’t about someday. This isn’t about eventually. Llamora is for the
                builders, dreamers, and doers who are tired of waiting for permission. It’s for
                the ones who look at “the way it’s always been done” and see a challenge, not a
                rule. If you’ve ever felt that tug — that insistence that there’s more — then
                you already understand why Llamora exists.
              </p>
              <p className="italic text-gray-400 mt-4">
                Llamora isn’t here to follow the rules. It’s here to help you rewrite them.
              </p>
            </section>
          </div>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="bg-transparent p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2 text-red-400">Adaptive</h3>
            <p className="text-sm text-gray-300">
              Learns from your workflow to deliver smarter, faster results.
            </p>
          </div>
          <div className="bg-transparent p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2 text-red-400">Developer First</h3>
            <p className="text-sm text-gray-300">
              Built to simplify and accelerate your creative process.
            </p>
          </div>
          <div className="bg-transparent p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2 text-red-400">Seamless Integration</h3>
            <p className="text-sm text-gray-300">
              Works hand-in-hand with AE-Clear and zipPattern.
            </p>
          </div>
        </section>

        <section className="mt-16">
          <Link
            href="/"
            className="inline-block bg-red-600 hover:bg-red-500 text-white font-semibold py-2 px-6 rounded transition"
          >
            Back to Home
          </Link>
        </section>
      </main>

      <footer className="relative z-10 text-center mt-16 py-6 text-gray-400">
        <p>© 2025 AE-iT.OPS</p>
      </footer>
    </div>
  );
}
