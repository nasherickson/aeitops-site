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
          If you were a fly on the wall while I worked, you’d see more than clean lines of code. You’d see sketches, notes, and a process that looks chaotic at first but always bends toward clarity. I don’t follow a script — I dismantle problems, test approaches, and rebuild until everything feels inevitable.
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
          Every project begins with friction — the stubborn problem, the overlooked detail, the missing piece. I don’t chase perfect conditions. I thrive in the tension, finding clarity by shaping solutions that others don’t see. That’s where my best work comes from.
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
          My workflow isn’t about indecision — it’s about relentless pursuit. Build, break, refine, repeat. I don’t settle for “good enough.” I push until the design and the code both feel inevitable, like they couldn’t exist any other way.
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
          I’m not here for transactions — I’m here for transformation. If you’re chasing an idea that keeps you up at night, let’s tackle it together. I bring energy, adaptability, and fresh thinking — not to rewrite the rules, but to hopefully rewrite the standards.
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