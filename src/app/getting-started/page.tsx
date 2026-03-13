import Link from "next/link";
import CypherSnippet from "@/components/CypherSnippet";

const deployOptions = [
  {
    icon: "💻",
    title: "Local (Single Binary)",
    description: "One binary. Runs on your laptop. No Docker, no dependencies. Perfect for evaluation.",
    command: "curl -sSL https://get.qgraph.dev | sh && qgraph start",
  },
  {
    icon: "🐳",
    title: "Docker",
    description: "Container image with all components. Production-ready in one command.",
    command: "docker run -p 7474:7474 -p 7687:7687 qgraph/qgraph:latest",
  },
  {
    icon: "☁️",
    title: "AWS / GCP / Azure (Terraform)",
    description: "Auto-scaling deployment with persistent storage. Scales with your workload.",
    command: "terraform apply -var='cluster_size=3' modules/qgraph-aws",
  },
  {
    icon: "☸️",
    title: "Kubernetes",
    description: "Helm chart for EKS/GKE/AKS. Scales with your cluster.",
    command: "helm install qgraph qgraph/qgraph-distributed",
  },
];

const onboardingWeeks = [
  {
    week: "Week 1",
    title: "Deploy & Connect",
    items: [
      "Single binary or Docker deployment — running in minutes",
      "Connect your data sources: CDC from PostgreSQL/MySQL, telemetry from services",
      "Import existing data (CSV / Parquet / Arrow)",
      "Auto-discover schema from your existing infrastructure",
    ],
  },
  {
    week: "Week 2",
    title: "Query & Explore",
    items: [
      "Jupyter notebook integration for data exploration",
      "Connect existing Grafana dashboards — zero migration cost",
      "Use any Bolt driver (Python, Java, Go, JavaScript)",
      "REST API for application integration",
    ],
  },
  {
    week: "Week 3",
    title: "Govern & Secure",
    items: [
      "Connect to Active Directory / Okta for identity",
      "Storage-level access control enabled — zero information leakage",
      "Data quality rules defined and running continuously",
      "Lineage tracking active across all data operations",
    ],
  },
  {
    week: "Week 4",
    title: "Full Platform",
    items: [
      "Hallucination-free AI enabled with permission-aware RAG",
      "Observability: service topology + telemetry in one causal graph",
      "GRC: blast radius analysis, continuous compliance evidence",
      "All nine capabilities operational from one engine",
    ],
  },
];

const examples = [
  {
    title: "Create nodes and relationships",
    code: `CREATE (alice:Person {name: 'Alice', role: 'Engineer'})
CREATE (bob:Person {name: 'Bob', role: 'Manager'})
CREATE (alice)-[:REPORTS_TO {since: 2023}]->(bob)
RETURN alice, bob`,
  },
  {
    title: "Multi-hop graph traversal",
    code: `// Find the management chain 5 levels up
MATCH (me:Person {name: 'Alice'})-[:REPORTS_TO*1..5]->(mgr:Person)
RETURN mgr.name, mgr.role
ORDER BY length(path) ASC`,
  },
  {
    title: "Vector similarity + graph context",
    code: `// Semantic search enriched with organizational context
MATCH (doc:Document)
WHERE qgraph.vector_search(doc.embedding, $query_vec, 20) > 0.8
MATCH (doc)-[:AUTHORED_BY]->(author:Person)-[:MEMBER_OF]->(team:Team)
RETURN doc.title, author.name, team.name, doc.score
ORDER BY doc.score DESC`,
  },
  {
    title: "Permission-aware retrieval (zero information leakage)",
    code: `// Permissions checked BEFORE search, not after
MATCH (user:User {id: $uid})-[:HAS_ACCESS*]->(scope:Scope)
MATCH (doc:Document)-[:IN_SCOPE]->(scope)
WHERE qgraph.vector_search(doc.embedding, $q, 50) > 0.75
RETURN doc.title, doc.score
LIMIT 10`,
  },
  {
    title: "Real-time root-cause analysis",
    code: `// Follow the causal chain from alert to root cause
MATCH (alert:Service {name: 'api-gateway'})
      -[:CALLS*1..5]->(root:Service)
WHERE root.error_rate > 0.10
RETURN root.name, root.error_rate, length(path) AS depth
ORDER BY depth ASC
LIMIT 1`,
  },
];

export default function GettingStartedPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 pt-28 pb-20">
      <div className="mb-2 inline-block rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/10 px-3 py-1 text-xs font-medium text-[var(--accent-light)]">
        Documentation
      </div>
      <h1 className="text-4xl font-bold">Get Started</h1>
      <p className="mt-3 text-lg text-[var(--text-secondary)]">
        From zero to production in 4 weeks. QGraph deploys as a single binary
        with no external dependencies. Start on your laptop. Scale to your entire organization.
      </p>

      {/* Quick Start */}
      <section className="mt-12">
        <h2 className="mb-6 text-2xl font-bold">Quick Start (5 Minutes)</h2>
        <ol className="space-y-6">
          <li className="flex gap-4">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--accent)] text-sm font-bold text-white">1</div>
            <div className="flex-1">
              <h3 className="font-semibold">Install</h3>
              <div className="cypher-block mt-2">curl -sSL https://get.qgraph.dev | sh && qgraph start</div>
            </div>
          </li>
          <li className="flex gap-4">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--accent)] text-sm font-bold text-white">2</div>
            <div className="flex-1">
              <h3 className="font-semibold">Connect</h3>
              <p className="mt-1 text-sm text-[var(--text-secondary)]">
                Use the built-in CLI, any Bolt driver (Python, Java, Go, JS), or the REST API.
              </p>
              <div className="cypher-block mt-2">qgraph connect bolt://localhost:7687</div>
            </div>
          </li>
          <li className="flex gap-4">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--accent)] text-sm font-bold text-white">3</div>
            <div className="flex-1">
              <h3 className="font-semibold">Query</h3>
              <p className="mt-1 text-sm text-[var(--text-secondary)]">
                Graphs, vectors, time-series, spatial, permissions — all through Cypher.
                Nine capabilities from one query language.
              </p>
            </div>
          </li>
        </ol>
      </section>

      {/* Onboarding Journey */}
      <section className="mt-16">
        <h2 className="mb-6 text-2xl font-bold">Enterprise Onboarding (4 Weeks)</h2>
        <div className="space-y-4">
          {onboardingWeeks.map((w) => (
            <div key={w.week} className="card-glow rounded-xl p-6">
              <div className="flex items-baseline gap-3">
                <span className="rounded-full bg-[var(--accent)]/20 px-3 py-0.5 text-xs font-semibold text-[var(--accent-light)]">
                  {w.week}
                </span>
                <h3 className="font-semibold">{w.title}</h3>
              </div>
              <ul className="mt-3 space-y-1">
                {w.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                    <span className="mt-1 text-[var(--accent)]">&bull;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Cypher Examples */}
      <section className="mt-16">
        <h2 className="mb-6 text-2xl font-bold">Cypher Examples</h2>
        <p className="mb-8 text-[var(--text-secondary)]">
          One query language for every workload. QGraph extends Cypher with
          native vector search, spatial functions, permission predicates, and
          time-series operations.
        </p>
        {examples.map((ex) => (
          <div key={ex.title} className="mb-8">
            <h3 className="mb-2 text-sm font-semibold text-[var(--accent-light)]">
              {ex.title}
            </h3>
            <CypherSnippet code={ex.code} />
          </div>
        ))}
      </section>

      {/* Deployment Options */}
      <section className="mt-16">
        <h2 className="mb-6 text-2xl font-bold">Deploy Anywhere</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {deployOptions.map((opt) => (
            <div key={opt.title} className="card-glow rounded-xl p-6">
              <div className="mb-2 text-2xl">{opt.icon}</div>
              <h3 className="mb-1 text-lg font-semibold">{opt.title}</h3>
              <p className="mb-4 text-sm text-[var(--text-secondary)]">{opt.description}</p>
              <div className="cypher-block text-xs">{opt.command}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-16 rounded-xl border border-[var(--accent)]/30 bg-[var(--accent)]/5 p-8 text-center">
        <h3 className="mb-2 text-xl font-semibold">
          Stop duct-taping your infrastructure.
        </h3>
        <p className="mb-6 text-lg text-[var(--accent-light)] font-semibold">
          Start operating on the truth.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/use-cases"
            className="inline-block rounded-lg bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--accent-light)]"
          >
            Explore Use Cases
          </Link>
          <Link
            href="/architecture"
            className="inline-block rounded-lg border border-[var(--border)] px-6 py-3 text-sm font-semibold text-[var(--text-secondary)] transition hover:border-[var(--accent)] hover:text-[var(--text-primary)]"
          >
            Read the Architecture
          </Link>
        </div>
      </section>
    </div>
  );
}
