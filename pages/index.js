'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Home() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="bg-black text-white min-h-screen font-sans p-8">
      <header className="text-center fixed top-0 left-0 w-full z-0 backdrop-blur-2xl bg-black/70 h-[30rem]">
        <img
          src="/aeitops.png"
          alt="AE-iT.OPS Logo"
          className={`mx-auto w-80 h-80 mb-4 transition-all duration-500 ${
            scrolled ? 'blur-sm opacity-70 scale-95' : 'blur-0 opacity-100'
          }`}
        />
        <h1 className={`text-4xl font-serif font-bold transition-all duration-500 ${
          scrolled ? 'blur-sm opacity-70 scale-95' : 'blur-0 opacity-100'
        }`}>
          AE-iT.OPS
        </h1>
        <p className={`text-xl italic mt-2 transition-all duration-500 ${
          scrolled ? 'blur-sm opacity-70 scale-95' : 'blur-0 opacity-100'
        }`}>
          Where chaos meets logic; allows ingenuity evermore.
        </p>
      </header>

      <main className="relative z-10 pt-[30rem] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {['zipPattern', 'Lamora', 'Parley'].map((project) => (
          <Link href={`/${project.toLowerCase()}`} key={project}>
            <div className="p-4 rounded-lg transition text-center bg-transparent hover:scale-105 transform duration-300">
              <img
                src={`/${project.toLowerCase()}.png`}
                alt={`${project} preview`}
                className="w-40 h-40 object-contain mx-auto rounded-xl shadow-lg"
              />
              <h2 className="text-2xl font-semibold mt-4">{project}</h2>
              <p className="text-sm text-gray-400">Click to explore more about {project}.</p>
            </div>
          </Link>
        ))}
      </main>

      <section className="relative z-10 mt-16">
        <h2 className="text-3xl font-bold text-center mb-4">Other Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {['ProjectX', 'ToolKit', 'ShadowDB'].map((project) => (
            <Link href={`/${project.toLowerCase()}`} key={project}>
              <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition text-center">
                <img src={`/${project.toLowerCase()}.png`} alt={`${project} preview`} className="w-full h-40 object-cover rounded mb-4" />
                <h3 className="text-2xl font-semibold mb-2">{project}</h3>
                <p className="text-sm">Learn more about {project}.</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="relative z-10 mt-16">
        <h2 className="text-3xl font-bold text-center mb-4">ProjectX</h2>
        <div className="bg-gray-800 p-6 rounded-lg max-w-3xl mx-auto">
          <p className="text-lg mb-4">
            ProjectX is an experimental initiative from AE-iT.OPS that combines adaptive logic systems with real-time user customization.
          </p>
          <p className="text-sm text-blue-400">
            Check out the <a href="https://github.com/aeitops/projectx" target="_blank" rel="noopener noreferrer" className="underline">ProjectX repository</a> on GitHub.
          </p>
        </div>
      </section>

      <section className="relative z-10 mt-24 text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-lg leading-relaxed">
          I'm Archer Erickson — a developer, designer, and systems thinker with a builder's instinct and a hacker's curiosity. My work spans tools that merge usability with power, like <em>zipPattern</em> for digital sewing, <em>Lamora</em> for intuitive AI integration, and <em>Parley</em> for clean, effective communication systems.
          <br /><br />
          I thrive in chaos and complexity — distilling messy ideas into structured, actionable tools. I don’t just chase trends; I chase utility, clarity, and a bit of elegance in the mess. Whether it’s reverse engineering a tangled system, designing a UI that just makes sense, or solving a problem no one else wanted to touch — that’s my lane.
          <br /><br />
          I’m self-taught, constantly iterating, and hungry to collaborate on things that matter. If you’re looking for someone who brings grit, curiosity, and high standards — we should talk.
        </p>
        <div className="mt-8 text-center">
          <p className="text-lg">
            Curious to collaborate? Want to talk shop or solve something unconventional together?
          </p>
          <a
            href="mailto:nasherickson2710@gmail.com"
            className="inline-block mt-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-6 rounded transition"
          >
            Let’s Build Something Great
          </a>
        </div>
      </section>
    </div>
  )
}