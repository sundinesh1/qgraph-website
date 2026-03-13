import Link from "next/link";
import CypherSnippet from "@/components/CypherSnippet";

const rows = [
  { metric: "Scale ceiling", qgraph: "Petabytes (automatic three-tier storage)", competitor: "Single-machine RAM" },
  { metric: "Storage cost", qgraph: "Standard hardware + NVMe", competitor: "Oversized RAM instances + six-figure license" },
  { metric: "Engine", qgraph: "Ground-up Rust, microsecond latency", competitor: "JVM application, millisecond latency" },
  { metric: "Vector search", qgraph: "Native, permission-aware, graph-topology reranking", competitor: "Bolt-on / not available" },
  { metric: "Observability", qgraph: "Built-in (metrics, traces, logs in one graph)", competitor: "Not available" },
  { metric: "Access control", qgraph: "Storage-level RBAC with proof paths", competitor: "Basic role-based" },
  { metric: "Data governance", qgraph: "Built-in lineage, quality, discovery", competitor: "Not available" },
  { metric: "Geospatial", qgraph: "Native spatial + graph + vector fusion", competitor: "Point-only (limited)" },
  { metric: "GRC / Compliance", qgraph: "Blast radius, continuous evidence, AI audit trails", competitor: "Not available" },
  { metric: "ML serving", qgraph: "Graph-native features, model lifecycle", competitor: "Not available" },
  { metric: "HTAP", qgraph: "Transactions + analytics, one engine", competitor: "Separate OLTP/OLAP deployments" },
  { metric: "Query language", qgraph: "Cypher (compatible)", competitor: "Cypher" },
  { metric: "Deployment", qgraph: "Single binary, any infrastructure", competitor: "JVM application, managed cloud" },
  { metric: "License", qgraph: "Open source", competitor: "Enterprise features paywalled" },
];

export default function VsNeo4jPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 pt-28 pb-20">
      <div className="mb-2 inline-block rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/10 px-3 py-1 text-xs font-medium text-[var(--accent-light)]">
        Why QGraph
      </div>
      <h1 className="text-4xl font-bold">QGraph vs Neo4j</h1>
      <p className="mt-3 text-lg text-[var(--text-secondary)]">
        Neo4j is a graph database. QGraph is a graph database that also handles
        vector search, observability, governance, access control, geospatial,
        compliance, and ML — from one engine. One replaces one tool. The other
        replaces your entire fragmented stack.
      </p>

      <section className="mt-10 rounded-xl border border-red-500/20 bg-red-500/5 p-6">
        <h2 className="mb-2 text-lg font-semibold text-red-400">The Neo4j Dead End</h2>
        <p className="text-sm text-[var(--text-secondary)]">
          Neo4j is a JVM application that stores everything in RAM on a single machine.
          When your graph outgrows that machine, you&apos;re stuck — either pay for increasingly
          massive instances, or shard your graph and destroy the traversal performance that
          made graphs useful. The six-figure annual license doesn&apos;t include the six-figure
          AWS bill for the oversized instances. And for every capability Neo4j doesn&apos;t have
          (vector search, observability, governance, GRC), you add another system, another bill,
          another integration to maintain. The fragmented stack grows. The complexity compounds.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="mb-6 text-2xl font-bold">Head-to-Head</h2>
        <div className="overflow-x-auto rounded-xl border border-[var(--border)]">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[var(--border)] bg-[var(--bg-card)]">
                <th className="px-4 py-3 text-left font-medium text-[var(--text-secondary)]">Capability</th>
                <th className="px-4 py-3 text-left font-medium gradient-text">QGraph</th>
                <th className="px-4 py-3 text-left font-medium text-[var(--text-secondary)]">Neo4j</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.metric} className="border-b border-[var(--border)] last:border-b-0">
                  <td className="px-4 py-3 font-medium text-[var(--text-secondary)]">{r.metric}</td>
                  <td className="px-4 py-3 text-emerald-400">{r.qgraph}</td>
                  <td className="px-4 py-3 text-[var(--text-secondary)]">{r.competitor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="mb-4 text-2xl font-bold">Zero-Friction Migration</h2>
        <div className="card-glow rounded-xl p-6">
          <p className="text-sm text-[var(--text-secondary)] mb-4">
            QGraph speaks Cypher and the Bolt protocol. Your existing Neo4j client code
            works with minimal changes. Import your data via CSV, Parquet, or Arrow.
            Existing Cypher queries run without rewriting. Same language, dramatically
            more capability.
          </p>
          <CypherSnippet
            code={`// Your existing Neo4j Cypher works in QGraph
MATCH (p:Person)-[:KNOWS*1..3]->(friend:Person)
WHERE p.name = 'Alice'
RETURN friend.name, length(path) AS distance
ORDER BY distance ASC`}
            caption="Same Cypher query language — your existing queries work without rewriting"
          />
        </div>
      </section>

      <section className="mt-12">
        <h2 className="mb-6 text-2xl font-bold">What You Gain by Switching</h2>
        <div className="space-y-3">
          {[
            "Scale beyond single-machine RAM — automatic three-tier storage to petabytes on standard hardware",
            "Vector search alongside your graph — permission-aware, graph-topology reranking. No separate Pinecone",
            "Built-in observability — metrics, traces, logs in one causal graph. No separate Datadog",
            "Storage-level access control with proof paths — not just roles, but auditable permission chains",
            "Data governance built in — lineage, quality, discovery without a separate vendor",
            "GRC from one engine — blast radius, continuous evidence, automated auditing. No Vanta/Diligent stack",
            "One bill instead of seven — graph + vector + observability + governance + RBAC + geospatial + compliance",
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-2">
              <span className="mt-0.5 text-emerald-400">✓</span>
              <p className="text-sm text-[var(--text-secondary)]">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-12 text-center">
        <Link
          href="/getting-started"
          className="inline-block rounded-lg bg-[var(--accent)] px-8 py-3 font-semibold text-white transition hover:bg-[var(--accent-light)]"
        >
          Deploy QGraph in 5 Minutes
        </Link>
      </div>
    </div>
  );
}
