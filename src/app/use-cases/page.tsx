import Link from "next/link";
import FeatureCard from "@/components/FeatureCard";

const useCases = [
  {
    href: "/use-cases/htap",
    icon: "⚡",
    title: "Graph Database",
    description: "The RAM ceiling is over. Petabyte-scale graph traversals on standard hardware — transactions and analytics from one engine, not two.",
  },
  {
    href: "/use-cases/vector-search",
    icon: "🔍",
    title: "Vector Search",
    description: "Flat vectors are blind. QGraph returns search results with relationships, authorship, and permissions intact — not stripped arrays disconnected from reality.",
  },
  {
    href: "/use-cases/rag",
    icon: "🧠",
    title: "Hallucination-Free AI (RAG)",
    description: "Enterprise AI hallucinates because it lacks context. QGraph fuses vector similarity with graph traversal to deliver deterministic, permission-aware grounding.",
  },
  {
    href: "/use-cases/observability",
    icon: "📊",
    title: "Observability",
    description: "Three dashboards. Three query languages. Three bills. Zero correlation. QGraph unifies metrics, traces, and logs into one causal graph.",
  },
  {
    href: "/use-cases/governance",
    icon: "🛡️",
    title: "Data Governance",
    description: "Bolt-on catalogs are always one version behind. QGraph tracks lineage, quality, and provenance automatically — because all data lives in one engine.",
  },
  {
    href: "/use-cases/rbac",
    icon: "🔐",
    title: "Access Control",
    description: "Application-layer filtering can be bypassed. QGraph bakes permissions into the storage layer — architecturally enforced, instantly revocable, fully auditable.",
  },
  {
    href: "/use-cases/geospatial",
    icon: "🌍",
    title: "Geospatial",
    description: "Spatial databases can't traverse. Graph databases can't geofence. QGraph does both — spatial, relational, and semantic in one query.",
  },
  {
    href: "/use-cases/security",
    icon: "🏛️",
    title: "Security & Compliance",
    description: "GRC platforms duct-tape five systems to prove compliance. QGraph delivers blast radius analysis, continuous evidence, and automated auditing from one engine.",
  },
  {
    href: "/use-cases/ml-ai",
    icon: "🤖",
    title: "ML & AI",
    description: "Your GPUs sit idle 70% of the time waiting for data. QGraph serves graph-native features directly — no export, no feature store, no serialization tax.",
  },
];

export default function UseCasesPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 pt-28 pb-20">
      <div className="mb-2 inline-block rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/10 px-3 py-1 text-xs font-medium text-[var(--accent-light)]">
        Solutions
      </div>
      <h1 className="text-4xl font-bold">
        Nine Capabilities. <span className="gradient-text">One Engine.</span>
      </h1>
      <p className="mt-3 mb-4 text-lg text-[var(--text-secondary)]">
        The &ldquo;Modern Data Stack&rdquo; forced you to run a separate system for each capability.
        Each system has its own storage, its own query language, its own bill, and its own
        failure modes. The result: exponential ETL complexity, compounding network latency,
        and AI that hallucinates because it lacks systemic context.
      </p>
      <p className="mb-12 text-lg font-semibold">
        QGraph eliminates the entire fragmented stack. One engine. One query language.
        One security model. One bill.
      </p>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {useCases.map((uc) => (
          <FeatureCard key={uc.href} {...uc} />
        ))}
      </div>

      {/* The Fragmentation Tax */}
      <section className="mt-20">
        <h2 className="mb-6 text-center text-2xl font-bold text-red-400">
          The Fragmentation Tax Is a Mathematical Dead End
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-6">
            <div className="mb-3 text-2xl">💸</div>
            <h3 className="mb-2 font-semibold text-red-400">Exponential Cloud Spend</h3>
            <p className="text-sm text-[var(--text-secondary)]">
              Every new tool you add — Pinecone for AI, PostGIS for spatial, Okta FGA for
              permissions — creates another compute bill, another storage bill, another set of
              AWS egress fees. The same data stored five times across five systems.
            </p>
          </div>
          <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-6">
            <div className="mb-3 text-2xl">🔧</div>
            <h3 className="mb-2 font-semibold text-red-400">Compounding Integration Debt</h3>
            <p className="text-sm text-[var(--text-secondary)]">
              Sync pipelines between systems break constantly. Schema changes upstream cascade
              into downstream failures. Your engineers spend more time on plumbing than on
              product. Every new integration multiplies the surface area for failure.
            </p>
          </div>
          <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-6">
            <div className="mb-3 text-2xl">🕳️</div>
            <h3 className="mb-2 font-semibold text-red-400">Destroyed Enterprise Context</h3>
            <p className="text-sm text-[var(--text-secondary)]">
              Moving data between systems strips away relationships, permissions, and lineage.
              You cannot deploy autonomous AI agents, prove continuous compliance, or calculate
              an instant security blast-radius when your enterprise memory is scattered across
              five database engines in three data centers.
            </p>
          </div>
        </div>
      </section>

      {/* The Unified Advantage */}
      <section className="mt-16 rounded-xl border border-[var(--accent)]/30 bg-[var(--accent)]/5 p-8 text-center">
        <h3 className="mb-2 text-xl font-semibold text-[var(--accent-light)]">
          When Everything Shares One Engine
        </h3>
        <p className="text-sm text-[var(--text-secondary)] max-w-2xl mx-auto mb-6">
          Queries cross capability boundaries naturally. &ldquo;Find similar documents that this
          user can access, written by their team, about servers in the EU region, with full
          lineage to the source&rdquo; is one Cypher query — not five API calls and an
          application layer to stitch them together.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/getting-started"
            className="inline-block rounded-lg bg-[var(--accent)] px-8 py-3 font-semibold text-white transition hover:bg-[var(--accent-light)]"
          >
            Deploy QGraph in 5 Minutes
          </Link>
          <Link
            href="/architecture"
            className="inline-block rounded-lg border border-[var(--border)] px-8 py-3 font-semibold text-[var(--text-secondary)] transition hover:border-[var(--accent)] hover:text-[var(--text-primary)]"
          >
            Read the Architecture
          </Link>
        </div>
      </section>
    </div>
  );
}
