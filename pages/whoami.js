
import Link from "next/link";
export default function WhoAmI() {
  return (
    <div className="bg-black min-h-screen text-white font-sans px-6 py-14 max-w-4xl mx-auto leading-relaxed">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-red-500 mb-10 tracking-tight">
        Who Am I?
      </h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3 text-white">Built from the bones up</h2>
        <p className="mb-6 text-gray-200">
          I didn’t grow into this. I clawed my way toward it. No mentor. No roadmap. No polished origin story. Just a mind that couldn’t sit still, a problem that wouldn’t solve itself, and a hunger that didn’t wait for permission.
        </p>
        <StatCard
          title="Dev Profile"
          stats={[
            { label: "Languages", value: "Swift, Java, HTML/CSS, a dash of chaos" },
            { label: "Frameworks", value: "SwiftUI, PostgresNIO, whatever works" },
            { label: "Tools", value: "Terminal, BlueJ, raw instinct" },
            { label: "Style", value: "Brutally iterative, stubbornly elegant" },
          ]}
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3 text-white">Build like it matters—because it does.</h2>
        <p className="mb-6 text-gray-200">
          Every tool I touch starts with a wound. Something that rubbed wrong, slowed things down, or made me think, “Why the hell does it have to be like this?”
        </p>
        <StatCard
          title="Process Signals"
          stats={[
            { label: "Projects scrapped after v1", value: "72%" },
            { label: "Tools built because nothing else cut it", value: "100%" },
            { label: "Apps refined at 3AM", value: "Yes. Always." },
          ]}
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3 text-white">Tools with teeth. Born from bruises.</h2>
        <p className="mb-6 text-gray-200">
          Everything I’ve made started with “I wish this existed.” zipPattern—for makers, sewists, and precision-obsessed weirdos like me. Lamora—a dev console with a voice and brain.
        </p>
        <StatCard
          title="Tool Stack Snapshot"
          stats={[
            { label: "zipPattern", value: "Precision-first pattern projection" },
            { label: "Lamora", value: "Developer-aligned AI console" },
            { label: "Status", value: "Both in active evolution—versioning means nothing if you’re still thinking" },
          ]}
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3 text-white">Geometry. Contrast. Clarity. Intention.</h2>
        <p className="mb-6 text-gray-200">
          Design isn’t decoration. It’s strategy. It’s signal. It’s structure. I use geometry because shape is the fastest way to communicate hierarchy. I use contrast because clarity is non-negotiable.
        </p>
        <StatCard
          title="Design Logic"
          stats={[
            { label: "Principle", value: "Function → Flow → Form" },
            { label: "Philosophy", value: "If a button needs a tooltip, it’s already a failure." },
            { label: "UI", value: "Should behave like muscle memory waiting to happen." },
          ]}
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3 text-white">Burn it down. Build it better.</h2>
        <p className="mb-6 text-gray-200">
          My process is ruthless. I build. I break. I listen. Then I break it again. Not because I don’t know what I’m doing—but because I do.
        </p>
        <StatCard
          title="Core Loop"
          stats={[
            { label: "Loop", value: "[ IDENTIFY ] → [ OBSESS ] → [ BUILD ] → [ BREAK ] → [ LISTEN ] → [ REBUILD ] → [ LAUNCH ] → [ REPEAT ]" },
          ]}
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3 text-white">Forge the tools. Empower the outliers. Change the damn standard.</h2>
        <p className="mb-6 text-gray-200">
          I’m not trying to be the next big name. I’m trying to be the reason someone else makes it further than I did. Because no one handed me anything.
        </p>
        <StatCard
          title="Mission Outcome"
          stats={[
            { label: "Goal", value: "Amplify the builder’s brain" },
            { label: "Tactics", value: "Tools that listen. Design that vanishes. Flow that fits." },
            { label: "Focus", value: "Empower the uncredentialed. Expose the bloat. Burn it all down." },
          ]}
        />
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3 text-white">Bring me something real.</h2>
        <p className="text-gray-200">
          I’m not looking for clients. I’m looking for collisions. If you’ve got something honest, raw, and worth building—if you’re chasing an idea that won’t leave you alone—then I’m here.
        </p>
      </section>
    </div>
  );
}

function StatCard({ title, stats }) {
  return (
    <div className="bg-[#18181b] border border-red-500 rounded-lg shadow-md p-6 mb-6">
      <div className="text-lg font-bold text-red-500 tracking-wide mb-3 uppercase">{title}</div>
      <dl>
        {stats.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col sm:flex-row sm:items-baseline py-1 border-b border-gray-800 last:border-b-0"
          >
            <dt className="text-gray-400 w-48 shrink-0 font-medium">{item.label}</dt>
            <dd className="text-gray-100 font-semibold flex-1">{item.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}