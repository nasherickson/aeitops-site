import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen font-sans p-8">
      <Head>
        <title>AE-iT.OPS</title>
        <meta name="description" content="Where chaos meets logic; allows ingenuity evermore." />
      </Head>
      <header className="text-center mb-12">
        <img src="/logo.png" alt="AE-iT.OPS Logo" className="mx-auto w-32 h-32 mb-4" />
        <h1 className="text-4xl font-bold">AE-iT.OPS</h1>
        <p className="text-xl italic mt-2">Where chaos meets logic; allows ingenuity evermore.</p>
      </header>
      <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {['zipPattern', 'Lamora', 'Parley'].map((project) => (
          <Link href={`/${project.toLowerCase()}`} key={project} legacyBehavior>
            <a className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition">
              <h2 className="text-2xl font-semibold mb-2">{project}</h2>
              <p className="text-sm">Click to explore more about {project}.</p>
            </a>
          </Link>
        ))}
      </main>
    </div>
  )
}