import Link from "next/link";
import CypherSnippet from "@/components/CypherSnippet";

export default function ArchitecturePage() {
  return (
    <div className="mx-auto max-w-4xl px-6 pt-28 pb-20">
      <div className="mb-2 inline-block rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/10 px-3 py-1 text-xs font-medium text-[var(--accent-light)]">
        Technical Architecture
      </div>
      <h1 className="text-4xl font-bold">The Universal Data Operating System</h1>
      <p className="mt-3 text-lg text-[var(--text-secondary)]">
        The &ldquo;Modern Data Stack&rdquo; shattered enterprise context. QGraph
        reunifies it — Graph, Vector, OLAP, Spatial, and Time-Series in a single,
        zero-copy memory space. Not a wrapper. Not a federation layer. A ground-up
        engine built in Rust that pushes computation to the theoretical limits of silicon.
      </p>

      {/* Why the fragmented stack is dead */}
      <section className="mt-12 rounded-xl border border-red-500/20 bg-red-500/5 p-8">
        <h2 className="mb-3 text-2xl font-bold text-red-400">
          The Fragmented Stack Is a Mathematical Dead End
        </h2>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
          For the last decade, the industry standard has been fragmentation. Engineering
          teams duct-taped together Snowflake for analytics, Neo4j for relationship mapping,
          Pinecone for vector search, and Datadog for observability. Before the AI era, this
          was an expensive annoyance. Today, it is a catastrophic liability. You cannot deploy
          autonomous AI agents, prove continuous SOC 2 compliance, or calculate an instant
          security blast-radius when your enterprise memory is scattered across five different
          database engines in three different data centers. The result: massive ETL pipelines,
          exorbitant AWS bills, and AI that hallucinates because it lacks systemic context.
        </p>
      </section>

      {/* Pillar 1: Hallucination-Free AI */}
      <section className="mt-16">
        <h2 className="mb-2 text-2xl font-bold">
          <span className="text-[var(--accent-light)]">Pillar 1:</span> Hallucination-Free AI
        </h2>
        <p className="text-xs font-medium uppercase tracking-widest text-[var(--text-secondary)] mb-4">
          The Vector-Graph Fusion
        </p>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          Standard AI deployments rely on standalone vector databases to perform RAG. But vectors
          only understand semantic similarity; they do not understand truth, hierarchy, or
          relationships. This is why enterprise AI hallucinates.
        </p>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
          QGraph executes hybrid vector-graph traversals natively in a single query. When your
          AI agent searches for a policy, it doesn&apos;t just find a semantically similar text chunk.
          It instantly traverses the graph to understand who wrote the document, which specific
          AWS servers the policy applies to, and whether those servers are currently active.
        </p>
        <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-5">
          <p className="text-sm font-semibold text-emerald-400 mb-1">The Result</p>
          <p className="text-sm text-[var(--text-secondary)]">
            Absolute, deterministic grounding. The AI answers complex procurement questionnaires
            and engineering queries with 100% accuracy, citing exact nodes and code lines in
            the graph. Not hallucinated citations — real, traversable proof paths.
          </p>
        </div>
      </section>

      {/* Pillar 2: AI-Safe Security */}
      <section className="mt-16">
        <h2 className="mb-2 text-2xl font-bold">
          <span className="text-[var(--accent-light)]">Pillar 2:</span> AI-Safe Security
        </h2>
        <p className="text-xs font-medium uppercase tracking-widest text-[var(--text-secondary)] mb-4">
          Hardware-Native RBAC
        </p>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          CISOs are terrified of letting AI agents touch production data because traditional
          access control (like Okta) sits in the application layer, completely disconnected from
          the storage layer. If an AI goes rogue, data leaks.
        </p>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
          QGraph bakes permissions directly into graph nodes and columns at the bare-metal storage
          level. This is not application-layer filtering that can be bypassed — it is architecturally
          enforced at the data plane.
        </p>
        <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-5">
          <p className="text-sm font-semibold text-emerald-400 mb-1">The Result</p>
          <p className="text-sm text-[var(--text-secondary)]">
            You can safely expose your entire corporate infrastructure graph to an AI agent.
            The agent traverses the graph to analyze security postures and audit rules, but
            the database physically blocks it from querying row-level customer PII. Security
            enforced by architecture, not application logic.
          </p>
        </div>
      </section>

      {/* Pillar 3: Continuous Evidence */}
      <section className="mt-16">
        <h2 className="mb-2 text-2xl font-bold">
          <span className="text-[var(--accent-light)]">Pillar 3:</span> The Continuous Evidence Engine
        </h2>
        <p className="text-xs font-medium uppercase tracking-widest text-[var(--text-secondary)] mb-4">
          Unified OLAP & Time-Series
        </p>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          Auditors no longer want point-in-time snapshots. They want cryptographic proof that your
          infrastructure was secure for every minute of the last 365 days. Pulling this data across
          Snowflake, Datadog, and Neo4j takes weeks.
        </p>
        <CypherSnippet
          code={`// Point-in-time compliance proof: was this bucket secure every minute of Q4?
MATCH (bucket:S3Bucket {name: 'customer-pii'})
      -[:CONFIG_AT]->(config:Config)
WHERE config.timestamp >= datetime('2025-10-01')
  AND config.timestamp < datetime('2026-01-01')
  AND (NOT config.encryption_enabled OR NOT config.public_access_blocked)
RETURN config.timestamp, config.encryption_enabled,
       config.public_access_blocked
ORDER BY config.timestamp ASC`}
          caption="Nanosecond point-in-time query proves infrastructure never drifted out of compliance"
        />
        <div className="mt-4 rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-5">
          <p className="text-sm font-semibold text-emerald-400 mb-1">The Result</p>
          <p className="text-sm text-[var(--text-secondary)]">
            Transition from reactive, overnight batch-job compliance to a real-time continuous
            proof engine. Auditors get instant answers. Compliance teams sleep at night.
          </p>
        </div>
      </section>

      {/* Pillar 4: Causal AI Telemetry */}
      <section className="mt-16">
        <h2 className="mb-2 text-2xl font-bold">
          <span className="text-[var(--accent-light)]">Pillar 4:</span> Causal AI Telemetry
        </h2>
        <p className="text-xs font-medium uppercase tracking-widest text-[var(--text-secondary)] mb-4">
          The Agentic Audit Trail
        </p>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          As enterprises deploy AI agents to auto-remediate vulnerabilities — changing firewall
          rules, revoking access, patching configs — a massive problem arises: how do you audit
          a black-box neural network? Dumping AI logs into flat JSON files destroys the context
          of why a decision was made.
        </p>
        <CypherSnippet
          code={`// Audit an AI agent's full reasoning chain
MATCH (action:AgentAction {id: $action_id})
      -[:TRIGGERED_BY]->(thought:Thought)
      -[:OBSERVED]->(observation:Observation)
      -[:BASED_ON]->(evidence:Evidence)
MATCH (action)-[:AFFECTED]->(resource)
RETURN action.type, thought.reasoning,
       observation.description,
       COLLECT(evidence.source) AS evidence_chain,
       COLLECT(resource.name) AS affected_systems`}
          caption="Every AI decision has a full Thought → Observation → Action graph trail"
        />
        <div className="mt-4 rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-5">
          <p className="text-sm font-semibold text-emerald-400 mb-1">The Result</p>
          <p className="text-sm text-[var(--text-secondary)]">
            Auditors don&apos;t just see &ldquo;Access Revoked.&rdquo; They query the graph to see
            the exact reasoning path the AI traversed. AI transforms from a compliance liability
            into a fully transparent, cryptographically auditable asset.
          </p>
        </div>
      </section>

      {/* Pillar 5: Built for Bare Metal */}
      <section className="mt-16">
        <h2 className="mb-2 text-2xl font-bold">
          <span className="text-[var(--accent-light)]">Pillar 5:</span> Built for the Bare Metal
        </h2>
        <p className="text-xs font-medium uppercase tracking-widest text-[var(--text-secondary)] mb-4">
          The Zero-CPU Architecture
        </p>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
          QGraph achieves its unprecedented speed because it bypasses the traditional bottlenecks
          of computer science. This is not a Java wrapper around existing databases. It is a
          ground-up, unsafe-free Rust engine that pushes computation to the theoretical limits
          of silicon.
        </p>
        <div className="grid gap-4 md:grid-cols-3 mb-6">
          <div className="card-glow rounded-xl p-5 text-center">
            <div className="text-2xl font-bold gradient-text">SIMD</div>
            <p className="mt-2 text-xs text-[var(--text-secondary)]">
              Vector distances, similarity searches, and blast-radius calculations parallelized
              across wide CPU registers — billions of comparisons per second.
            </p>
          </div>
          <div className="card-glow rounded-xl p-5 text-center">
            <div className="text-2xl font-bold gradient-text">Zero-Copy</div>
            <p className="mt-2 text-xs text-[var(--text-secondary)]">
              Data streams directly from NVMe storage into the compute engine without
              touching the CPU or passing through serialization boundaries.
            </p>
          </div>
          <div className="card-glow rounded-xl p-5 text-center">
            <div className="text-2xl font-bold gradient-text">µs Latency</div>
            <p className="mt-2 text-xs text-[var(--text-secondary)]">
              Microsecond latency on queries that take legacy microservice
              architectures hours to process.
            </p>
          </div>
        </div>
      </section>

      {/* Business Impact */}
      <section className="mt-16">
        <h2 className="mb-6 text-2xl font-bold">The Business Impact</h2>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
          Continuing to scale a fragmented data stack is a mathematical dead end. Every new tool
          you add — Pinecone for AI, PostGIS for spatial, Okta FGA for permissions — creates
          exponential ETL complexity and compounding network latency. By migrating to QGraph,
          enterprises achieve three immediate outcomes:
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-[var(--border)] bg-[var(--bg-card)] p-6 text-center">
            <div className="text-3xl font-bold gradient-text">80%</div>
            <h3 className="mt-1 font-semibold">Lower Cloud Spend</h3>
            <p className="mt-2 text-xs text-[var(--text-secondary)]">
              Consolidate 5–7 database vendors into a single binary. Eliminate AWS egress
              fees and cross-system compute costs.
            </p>
          </div>
          <div className="rounded-xl border border-[var(--border)] bg-[var(--bg-card)] p-6 text-center">
            <div className="text-3xl font-bold gradient-text">100×</div>
            <h3 className="mt-1 font-semibold">Faster Queries</h3>
            <p className="mt-2 text-xs text-[var(--text-secondary)]">
              Hybrid graph-OLAP-vector queries in a single shared memory space.
              No network hops. No serialization overhead.
            </p>
          </div>
          <div className="rounded-xl border border-[var(--border)] bg-[var(--bg-card)] p-6 text-center">
            <div className="text-3xl font-bold gradient-text">Safe AI</div>
            <h3 className="mt-1 font-semibold">Enterprise AI Unblocked</h3>
            <p className="mt-2 text-xs text-[var(--text-secondary)]">
              AI agents that operate autonomously, safely, and transparently — with
              deterministic proofs for SOC 2 and GDPR auditors.
            </p>
          </div>
        </div>
      </section>

      {/* Deploy */}
      <section className="mt-16">
        <h2 className="mb-6 text-2xl font-bold">Deploy Anywhere</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {[
            { icon: "💻", title: "Local", desc: "One binary on your laptop. No Docker required. Perfect for evaluation." },
            { icon: "🐳", title: "Docker", desc: "Container image with all components. Production-ready in one command." },
            { icon: "☁️", title: "Cloud", desc: "Terraform modules for AWS, GCP, Azure. Auto-scaling with persistent storage." },
            { icon: "☸️", title: "Kubernetes", desc: "Helm chart for any managed Kubernetes. Scales with your cluster." },
          ].map((opt) => (
            <div key={opt.title} className="card-glow rounded-xl p-5">
              <div className="mb-2 text-xl">{opt.icon}</div>
              <h3 className="mb-1 font-semibold">{opt.title}</h3>
              <p className="text-sm text-[var(--text-secondary)]">{opt.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-16 rounded-xl border border-[var(--accent)]/30 bg-[var(--accent)]/5 p-8 text-center">
        <h3 className="text-2xl font-bold mb-2">
          Stop duct-taping your infrastructure.
        </h3>
        <p className="text-lg text-[var(--accent-light)] font-semibold mb-6">Start operating on the truth.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/getting-started"
            className="inline-block rounded-lg bg-[var(--accent)] px-8 py-3 font-semibold text-white transition hover:bg-[var(--accent-light)]"
          >
            Deploy QGraph in 5 Minutes
          </Link>
          <Link
            href="/use-cases"
            className="inline-block rounded-lg border border-[var(--border)] px-8 py-3 font-semibold text-[var(--text-secondary)] transition hover:border-[var(--accent)] hover:text-[var(--text-primary)]"
          >
            Explore Use Cases
          </Link>
        </div>
      </section>
    </div>
  );
}
