import Image from 'next/image';
export default function Home() {
  return (
    <div className="relative min-h-screen bg-black text-white flex flex-col justify-start px-6 py-16">
      <div className="fixed inset-0 z-0 opacity-10 blur-sm grayscale brightness-50 pointer-events-none">
        <Image
          src="/aeitops.png"
          alt="aeitops Logo Background"
          fill
          style={{ objectFit: 'contain', transform: 'translateX(-10%)' }}
          priority
        />
      </div>
      <main className="relative z-10 w-full">
        <header>
          <h1>AE-iT.OPS</h1>
          <p className="tagline">Where chaos meets logic; allows ingenuity evermore.</p>
        </header>
        <section className="projects min-h-screen py-40">
          <h2>Featured Projects</h2>
          <div className="project">
            <div className="bg-[#0e0e0e] rounded-md p-4">
              <img 
                src="/path/to/zipPattern-logo.png" 
                alt="zipPattern logo" 
                className="w-[55vh] h-auto mx-auto mb-4 drop-shadow-[0_0_32px_rgba(112,214,255,0.8)] bg-[#0e0e0e] rounded-lg p-2 object-contain"
              />
            </div>
            <h3><a href="#">zipPattern</a></h3>
            <p>A modern projection tool for precision patterning.</p>
          </div>
          <div className="project">
            <h3><a href="#">Lamora</a></h3>
            <p>A console-native AI interface for developers and tinkerers.</p>
          </div>
          <div className="project">
            <h3><a href="#">LLaMA Parley</a></h3>
            <p>Conversational agent manager with PostgreSQL backend.</p>
          </div> {/* Missing closing tag added here */}
        </section>
        <footer>
          <p>© 2025 AE-iT.OPS</p>
        </footer>
      </main>
    </div>
  );
}