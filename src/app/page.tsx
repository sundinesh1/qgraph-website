import Link from "next/link";
import FeatureCard from "@/components/FeatureCard";
import UseCaseTabs from "@/components/UseCaseTabs";
import CompetitorGrid from "@/components/CompetitorGrid";
import FAQ from "@/components/FAQ";

const pillars = [
  {
    icon: "🧠",
    title: "Hallucination-Free AI",
    subtitle: "The Vector-Graph Fusion",
    description: "Standard AI relies on standalone vector databases for RAG. But vectors only understand semantic similarity — they don't understand truth, hierarchy, or relationships. This is why enterprise AI hallucinates.",
    result: "QGraph executes hybrid vector-graph traversals natively in a single query. When your AI agent searches for a policy, it doesn't just find a semantically similar text chunk. It instantly traverses the graph to understand who wrote the document, which servers the policy applies to, and whether those servers are currently active. Absolute, deterministic grounding.",
    href: "/use-cases/rag",
  },
  {
    icon: "🔐",
    title: "AI-Safe Security",
    subtitle: "Hardware-Native RBAC",
    description: "CISOs are terrified of letting AI agents touch production data because traditional access control sits in the application layer, completely disconnected from the storage layer. If an AI goes rogue, data leaks.",
    result: "QGraph bakes permissions directly into the graph at the storage level. You can safely expose your entire corporate infrastructure to an AI agent. The agent can traverse the graph to analyze security postures, but the database physically blocks it from accessing row-level customer PII. Security enforced by architecture, not application logic.",
    href: "/use-cases/rbac",
  },
  {
    icon: "📜",
    title: "The Continuous Evidence Engine",
    subtitle: "Unified OLAP & Time-Series",
    description: "Auditors don't want point-in-time snapshots anymore. They want cryptographic proof that your infrastructure was secure for every minute of the last 365 days. Pulling this data across Snowflake, Datadog, and Neo4j takes weeks.",
    result: "QGraph ingests CloudTrail logs, GitHub commits, and telemetry at millions of operations per second. Your compliance team executes a point-in-time query in nanoseconds. You transition from reactive, overnight batch-job compliance to a real-time continuous proof engine.",
    href: "/use-cases/security",
  },
  {
    icon: "🔍",
    title: "Causal AI Telemetry",
    subtitle: "The Agentic Audit Trail",
    description: "As enterprises deploy AI agents to auto-remediate vulnerabilities, a massive problem arises: how do you audit a black-box neural network? Dumping AI logs into flat JSON files destroys the context of why a decision was made.",
    result: "QGraph treats AI telemetry as a directed acyclic graph. Every step of an AI agent's reasoning loop is written directly into the database. Auditors don't just see 'Access Revoked.' They query the graph to see the exact reasoning path the AI traversed. AI becomes a fully transparent, auditable asset.",
    href: "/use-cases/observability",
  },
  {
    icon: "⚡",
    title: "Built for the Bare Metal",
    subtitle: "The Zero-CPU Architecture",
    description: "QGraph achieves its speed because it bypasses the traditional bottlenecks. This is not a Java wrapper around existing databases. It's a ground-up Rust engine that pushes computation to the theoretical limits of silicon.",
    result: "Microsecond latency on queries that take legacy microservice architectures hours to process. Data streams directly from storage into the compute engine without serialization overhead. Billions of comparisons per second via hardware-parallel execution.",
    href: "/architecture",
  },
];

const businessImpact = [
  {
    metric: "80%",
    title: "Reduction in Cloud Spend",
    desc: "Consolidate 5–7 database vendors into a single binary. Eliminate the massive AWS egress fees and compute costs of pumping data between silos.",
  },
  {
    metric: "100×",
    title: "Query Acceleration",
    desc: "Hybrid graph-OLAP-vector queries in a single shared memory space. No network hops. No serialization overhead. No stitching results in application code.",
  },
  {
    metric: "∞",
    title: "Unblocked Enterprise AI",
    desc: "An architecture where AI agents operate autonomously, safely, and transparently — backed by deterministic proofs that satisfy the strictest SOC 2 and GDPR auditors.",
  },
];

const capabilities = [
  { href: "/use-cases/htap", icon: "⚡", title: "Graph Database", description: "Relationships and traversals at any scale — without the RAM ceiling or the six-figure license." },
  { href: "/use-cases/vector-search", icon: "🔍", title: "Vector Search", description: "Semantic similarity that understands context, relationships, and permissions." },
  { href: "/use-cases/observability", icon: "📊", title: "Observability", description: "Metrics, traces, and logs in one connected store. Root cause in seconds." },
  { href: "/use-cases/governance", icon: "🛡️", title: "Data Governance", description: "Lineage, quality, pipelines, and ML lifecycle — built in from day one." },
  { href: "/use-cases/rbac", icon: "🔐", title: "Access Control", description: "Hardware-native RBAC. Instant validation. Full audit trail." },
  { href: "/use-cases/geospatial", icon: "🌍", title: "Geospatial", description: "Spatial + relational + semantic in one query. Data sovereignty built in." },
  { href: "/use-cases/security", icon: "🏛️", title: "Security & GRC", description: "Blast radius, continuous evidence, automated auditing — one engine." },
  { href: "/use-cases/ml-ai", icon: "🤖", title: "ML & AI", description: "Graph-native features, model lifecycle, production inference." },
];

const integrations = [
  "Bolt Protocol", "Python", "Java", "Go", "JavaScript",
  "Grafana", "Jupyter", "OpenTelemetry", "Prometheus",
  "Docker", "Kubernetes", "Terraform", "Arrow Flight",
  "Active Directory", "Okta", "PostgreSQL CDC", "Parquet",
];

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--accent)]/5 to-transparent" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <div className="mb-4 inline-block rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/10 px-4 py-1.5 text-xs font-medium text-[var(--accent-light)]">
            The Data Operating System for the AI Enterprise
          </div>
          <h1 className="text-5xl font-bold leading-tight md:text-6xl">
            The End of the
            <br />
            <span className="gradient-text">Fragmented Data Stack</span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-[var(--text-secondary)]">
            The &ldquo;Modern Data Stack&rdquo; is dead. It didn&apos;t fail because it was slow — it
            failed because it shattered enterprise context. You cannot deploy autonomous AI
            agents, prove continuous SOC 2 compliance, or calculate an instant security
            blast-radius when your enterprise memory is scattered across five database
            engines in three data centers.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-lg font-semibold">
            QGraph unifies Graph, Vector, OLAP, Spatial, and Time-Series into a single
            zero-copy memory space.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/getting-started"
              className="rounded-lg bg-[var(--accent)] px-8 py-3 font-semibold text-white transition hover:bg-[var(--accent-light)]"
            >
              Deploy in 5 Minutes
            </Link>
            <Link
              href="/architecture"
              className="rounded-lg border border-[var(--border)] px-8 py-3 font-semibold text-[var(--text-secondary)] transition hover:border-[var(--accent)] hover:text-[var(--text-primary)]"
            >
              Read the Architecture
            </Link>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="border-y border-[var(--border)] bg-[var(--bg-secondary)] py-8">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-8 px-6 text-center text-sm">
          {[
            "8 Capabilities, 1 Engine",
            "Open Source",
            "Cypher Query Language",
            "Cloud & On-Prem",
            "Linear Scalability",
            "Deploy in 5 Minutes",
          ].map((stat) => (
            <div key={stat} className="flex items-center gap-2 text-[var(--text-secondary)]">
              <span className="text-[var(--accent-light)]">✓</span>
              <span className="font-medium">{stat}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Integration Ecosystem */}
      <section className="py-10">
        <div className="mx-auto max-w-5xl px-6">
          <p className="mb-4 text-center text-xs font-medium uppercase tracking-widest text-[var(--text-secondary)]">
            Works with your existing stack
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {integrations.map((name) => (
              <span
                key={name}
                className="rounded-full border border-[var(--border)] bg-[var(--bg-card)] px-3 py-1 text-xs text-[var(--text-secondary)]"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* The Five Pillars */}
      <section className="border-y border-[var(--border)] bg-[var(--bg-secondary)] py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-3 text-center text-3xl font-bold">
            The Five Pillars of <span className="gradient-text">QGraph</span>
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-[var(--text-secondary)]">
            Not features. Architectural breakthroughs that eliminate entire categories
            of enterprise pain.
          </p>
          <div className="space-y-6">
            {pillars.map((p) => (
              <div key={p.title} className="card-glow rounded-xl p-8">
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{p.icon}</span>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-baseline gap-3">
                      <h3 className="text-xl font-bold">{p.title}</h3>
                      <span className="text-sm text-[var(--accent-light)]">{p.subtitle}</span>
                    </div>
                    <p className="mt-3 text-sm text-[var(--text-secondary)]">{p.description}</p>
                    <p className="mt-3 text-sm text-[var(--text-secondary)]">
                      <strong className="text-[var(--text-primary)]">The Result:</strong> {p.result}
                    </p>
                    <Link
                      href={p.href}
                      className="mt-4 inline-block text-sm font-medium text-[var(--accent-light)] transition hover:underline"
                    >
                      Learn more →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Impact */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-3 text-center text-3xl font-bold">
            The Business Impact
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-[var(--text-secondary)]">
            Continuing to scale a fragmented stack is a mathematical dead end. Every new
            tool you add creates exponential ETL complexity and compounding network latency.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {businessImpact.map((item) => (
              <div key={item.title} className="rounded-xl border border-[var(--border)] bg-[var(--bg-card)] p-6 text-center">
                <div className="text-4xl font-bold gradient-text">{item.metric}</div>
                <h3 className="mt-2 font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-[var(--text-secondary)]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Case Tabs */}
      <section className="border-y border-[var(--border)] bg-[var(--bg-secondary)] py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-3 text-center text-3xl font-bold">
            Purpose-Built to <span className="gradient-text">Your Use Case</span>
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-[var(--text-secondary)]">
            Every capability shares the same data, the same query engine,
            and the same security model. Not a suite of acquired products.
          </p>
          <UseCaseTabs />
        </div>
      </section>

      {/* Competitive Comparison */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-3 text-center text-3xl font-bold">
            Compare Across <span className="gradient-text">What Matters</span>
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-[var(--text-secondary)]">
            No other engine covers more than two of these capabilities.
          </p>
          <CompetitorGrid />
        </div>
      </section>

      {/* All Capabilities Grid */}
      <section className="border-t border-[var(--border)] bg-[var(--bg-secondary)] py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-3 text-center text-3xl font-bold">
            Eight Capabilities. <span className="gradient-text">One Engine.</span>
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-[var(--text-secondary)]">
            Explore each capability in depth.
          </p>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((c) => (
              <FeatureCard key={c.href} {...c} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="mb-10 text-center text-3xl font-bold">Frequently Asked Questions</h2>
          <FAQ />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-[var(--border)] bg-[var(--bg-secondary)] py-20">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-3xl font-bold">
            Stop Duct-Taping. <span className="gradient-text">Start Operating on Truth.</span>
          </h2>
          <p className="mt-4 text-[var(--text-secondary)]">
            Deploy on your laptop in 5 minutes. Scale to your entire organization.
            No credit card required.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/getting-started"
              className="inline-block rounded-lg bg-[var(--accent)] px-8 py-3 font-semibold text-white transition hover:bg-[var(--accent-light)]"
            >
              Deploy QGraph Now
            </Link>
            <Link
              href="/architecture"
              className="inline-block rounded-lg border border-[var(--border)] px-8 py-3 font-semibold text-[var(--text-secondary)] transition hover:border-[var(--accent)] hover:text-[var(--text-primary)]"
            >
              Read the Technical Architecture
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
