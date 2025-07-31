import Link from "next/link";
export default function WhoAmI() {
  return (
    <div className="bg-black min-h-screen text-white font-sans px-6 py-14 max-w-4xl mx-auto leading-relaxed">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-red-500 mb-10 tracking-tight">
        Who Am I?
      </h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3 text-white">Built from the Ground Up</h2>
        <p className="mb-6 text-gray-200">
          I didn’t inherit this path—I built it. No mentor, no map, no scripted origin story. Just relentless curiosity, problems that demanded answers, and the drive to create when nothing else worked.
        </p>
        <StatCard
          title="Developer Profile"
          stats={[
            { label: "Languages", value: "Swift, Java, HTML/CSS, with a touch of chaos" },
            { label: "Frameworks", value: "SwiftUI, PostgresNIO, whatever delivers results" },
            { label: "Tools", value: "Terminal, BlueJ, persistence" },
            { label: "Style", value: "Iterative, intentional, and uncompromising" },
          ]}
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3 text-white">Building with Purpose</h2>
        <p className="mb-6 text-gray-200">
          Every project starts with friction—something broken, slow, or needlessly complicated. I create tools that challenge assumptions and prioritize clarity.
        </p>
        <StatCard
          title="Process Signals"
          stats={[
            { label: "Projects Iterated", value: "Over 70% scrapped after v1" },
            { label: "Solutions Self-Built", value: "100%" },
            { label: "Late-Night Refinements", value: "Always" },
          ]}
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3 text-white">Tools That Matter</h2>
        <p className="mb-6 text-gray-200">
          My work begins with, “I wish this existed.” zipPattern—for precision-driven makers. Lamora—an AI-driven console built for developers. Tools that solve real problems, not just check boxes.
        </p>
        <StatCard
          title="Current Focus"
          stats={[
            { label: "zipPattern", value: "Precision-first pattern projection" },
            { label: "Lamora", value: "Developer-focused AI console" },
            { label: "Status", value: "Constant evolution over static versioning" },
          ]}
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3 text-white">Design with Intention</h2>
        <p className="mb-6 text-gray-200">
          Design isn’t decoration—it’s communication. Geometry creates hierarchy. Contrast ensures clarity. Every choice exists to make interaction seamless.
        </p>
        <StatCard
          title="Design Principles"
          stats={[
            { label: "Principle", value: "Function → Flow → Form" },
            { label: "Philosophy", value: "If a button needs a tooltip, it’s already a failure" },
            { label: "UI Approach", value: "Interfaces should feel like second nature" },
          ]}
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3 text-white">Relentless Iteration</h2>
        <p className="mb-6 text-gray-200">
          My process is simple: build, test, refine, repeat. Not from uncertainty, but from a refusal to settle for less than what’s possible.
        </p>
        <StatCard
          title="Core Workflow"
          stats={[
            { label: "Loop", value: "[ IDENTIFY ] → [ FOCUS ] → [ BUILD ] → [ TEST ] → [ LISTEN ] → [ REVISE ] → [ LAUNCH ] → [ REPEAT ]" },
          ]}
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3 text-white">A Mission Beyond Myself</h2>
        <p className="mb-6 text-gray-200">
          I’m not chasing titles. I’m building platforms that empower others—tools that help people go further than I ever could alone.
        </p>
        <StatCard
          title="Mission Focus"
          stats={[
            { label: "Goal", value: "Empower builders and creators" },
            { label: "Approach", value: "Tools that adapt, designs that disappear, flows that fit" },
            { label: "Commitment", value: "Cut the noise. Amplify what matters." },
          ]}
        />
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3 text-white">Let’s Build Something Real</h2>
        <p className="text-gray-200">
          I’m not here for transactions—I’m here for impact. If you’re chasing an idea that refuses to let go, I’m ready to help make it real.
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