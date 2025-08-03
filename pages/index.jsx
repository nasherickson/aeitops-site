'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Playfair_Display } from 'next/font/google';
import { usePathname } from 'next/navigation';

// initialize the font
const playfair = Playfair_Display({ subsets: ['latin'] });
export default function Home() {
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="bg-black text-white min-h-screen font-sans relative">
      {pathname !== '/ae-clear' && (
        <div className="fixed inset-0 z-0 opacity-10 blur-sm grayscale brightness-5 pointer-events-none">
          <Image
            src="/aeitops.png"
            alt="aeitops Logo Background"
            fill
            style={{ objectFit: 'contain', transform: 'translateX(-10%)' }}
            priority
          />
        </div>
      )}

      <header className="fixed top-0 left-0 w-full z-10 bg-transparent h-[30rem] flex flex-col justify-center items-center">
        <img
          src="/aeitops.png"
          alt="AE-iT.OPS Logo"
          className={`w-[20rem] h-[20rem] object-contain rounded-full mb-4 transition-all duration-500 ${
            scrolled ? 'blur-sm opacity-70 scale-95' : 'blur-0 opacity-100'
          }`}
        />
        <h1
          className={`text-4xl font-serif font-bold transition-all duration-500 ${
            scrolled ? 'blur-sm opacity-70 scale-100' : 'blur-0 opacity-100'
          }`}
        >
          AE-iT.OPS
        </h1>
        <p
          className={`${playfair.className} text-xl italic mt-2 transition-all duration-500 ${
            scrolled ? 'blur-sm opacity-70 scale-95' : 'blur-0 opacity-100'
          }`}
        >
          Where chaos meets logic; allows ingenuity evermore.
        </p>
      </header>

      <main className="relative z-10 pt-[32rem] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
        {['zipPattern', 'Llamora', 'AE-Clear'].map((project) => (
          <Link href={`/${project.toLowerCase()}`} key={project}>
            <div className="p-4 rounded-lg transition text-center hover:scale-105 transform duration-300">
              <img
                src={`/${project === 'Llamora' ? 'llamora' : project.toLowerCase()}.png`}
                alt={`${project} preview`}
                className={`object-contain mx-auto rounded-xl shadow-lg ${
                  project === 'AE-Clear' ? 'w-72 h-56' : 'w-52 h-40'
                }`}
              />
              <h2 className="text-2xl font-semibold mt-4">{project}</h2>
              <p className="text-sm text-gray-400">
                More information about this project. {project}.
              </p>
            </div>
          </Link>
        ))}
      </main>

      <section className="relative z-10 mt-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-4">Other Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {['ProjectX', 'ToolKit', 'ShadowDB'].map((project) => (
            <Link href={`/${project.toLowerCase()}`} key={project}>
              <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition text-center">
                <img
                  src={`/${project.toLowerCase()}.png`}
                  alt={`${project} preview`}
                  className="w-full h-40 object-cover rounded mb-4"
                />
                <h3 className="text-2xl font-semibold mb-2">{project}</h3>
                <p className="text-sm">Learn more about {project}.</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="relative z-10 mt-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-4">ProjectX</h2>
        <div className="bg-gray-800 p-6 rounded-lg max-w-3xl mx-auto">
          <p className="text-lg mb-4">
            ProjectX is an experimental initiative from AE-iT.OPS that combines adaptive logic systems with real-time user customization.
          </p>
          <p className="text-sm text-blue-400">
            Check out the{' '}
            <a
              href="https://github.com/aeitops/projectx"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              ProjectX repository
            </a>{' '}
            on GitHub.
          </p>
        </div>
      </section>

      <section className="relative z-10 mt-24 text-center max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-4">Who Am I</h2>
        <p className="text-lg leading-relaxed mb-6">
          Not just your average dev. What to expect and my process.
        </p>
        <Link
          href="/whoami"
          className="inline-block bg-red-600 hover:bg-red-500 text-white font-semibold py-2 px-6 rounded transition"
        >
          Read the Manifesto
        </Link>
      </section>

      <footer className="relative z-10 text-center mt-16 py-6 text-gray-400">
        <p>© 2025 AE-iT.OPS</p>
      </footer>
    </div>
  )
}