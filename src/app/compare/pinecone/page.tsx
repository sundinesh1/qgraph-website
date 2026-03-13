import Link from "next/link";
import CypherSnippet from "@/components/CypherSnippet";

const rows = [
  { metric: "Search results", qgraph: "Enriched with relationships, authorship, permissions", competitor: "Flat similarity scores" },
  { metric: "Graph relationships", qgraph: "Native traversal + pattern matching", competitor: "Not available" },
  { metric: "Access control", qgraph: "Permission-aware (pre-filter, zero leakage)", competitor: "Post-filter (leaks metadata)" },
  { metric: "Scale approach", qgraph: "Automatic tiering: RAM → NVMe → compressed", competitor: "RAM-limited managed service" },
  { metric: "Data format", qgraph: "Connected graph (live data)", competitor: "Flat arrays (disconnected copies)" },
  { metric: "Reranking", qgraph: "Graph-topology-aware cascade reranking", competitor: "Embedding distance only" },
  { metric: "Observability", qgraph: "Built-in metrics, traces, logs", competitor: "Not available" },
  { metric: "Data governance", qgraph: "Lineage, quality, discovery built in", competitor: "Not available" },
  { metric: "GRC / Compliance", qgraph: "Blast radius, continuous evidence", competitor: "Not available" },
  { metric: "Deployment", qgraph: "Your infrastructure, any cloud, single binary", competitor: "Managed SaaS only" },
  { metric: "Data residency", qgraph: "Your data stays on your servers", competitor: "Data hosted by vendor" },
  { metric: "License", qgraph: "Open source", competitor: "Proprietary SaaS" },
];

export default function VsPineconePage() {
  return (
    <div className="mx-auto max-w-4xl px-6 pt-28 pb-20">
      <div className="mb-2 inline-block rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/10 px-3 py-1 text-xs font-medium text-[var(--accent-light)]">
        Why QGraph
      </div>
      <h1 className="text-4xl font-bold">QGraph vs Pinecone</h1>
      <p className="mt-3 text-lg text-[var(--text-secondary)]">
        Pinecone stores vectors. QGraph stores vectors alongside the graph they belong to —
        with relationships, permissions, and governance intact. Flat vectors are blind.
        Context-aware vectors are intelligent.
      </p>

      <section className="mt-10 rounded-xl border border-red-500/20 bg-red-500/5 p-6">
        <h2 className="mb-2 text-lg font-semibold text-red-400">The Flat Vector Problem Is a Liability</h2>
        <p className="text-sm text-[var(--text-secondary)]">
          Pinecone strips your documents down to embedding arrays. Who wrote it, what project
          it belongs to, who&apos;s allowed to see it — all destroyed on ingest. To get context
          back, you make separate API calls to other systems and stitch results in application
          code. Three round-trips. Three failure points. And permission checks happen after
          retrieval — the system already accessed content the user shouldn&apos;t see. This is
          not a theoretical risk. It is an information leakage vulnerability in production.
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
                <th className="px-4 py-3 text-left font-medium text-[var(--text-secondary)]">Pinecone</th>
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
        <h2 className="mb-4 text-2xl font-bold">The Difference in Practice</h2>
        <p className="text-sm text-[var(--text-secondary)] mb-4">
          With Pinecone, &ldquo;find similar documents written by my team that I can see&rdquo;
          requires three API calls: vector store, access control service, user database.
          Then application code to stitch results. With QGraph, it&apos;s one query.
        </p>
        <CypherSnippet
          code={`// With QGraph: one query, full context, permission-safe
MATCH (user:User {id: $uid})-[:HAS_ACCESS*]->(scope:Scope)
MATCH (doc:Document)-[:IN_SCOPE]->(scope)
WHERE qgraph.vector_search(doc.embedding, $query_vec, 50) > 0.75
MATCH (doc)-[:AUTHORED_BY]->(author:Person)
MATCH (doc)-[:ABOUT]->(project:Project)
RETURN doc.title, author.name, project.name, doc.score
ORDER BY doc.score DESC
LIMIT 10`}
          caption="Permission check + vector search + graph context in one query. Pinecone needs 3 separate API calls."
        />
      </section>

      <section className="mt-10 card-glow rounded-xl p-6">
        <h3 className="mb-2 font-semibold text-[var(--accent-light)]">Your Data Stays on Your Infrastructure</h3>
        <p className="text-sm text-[var(--text-secondary)]">
          Pinecone is a managed SaaS — your embeddings live on their servers. For enterprises
          with data residency requirements, this is a non-starter. QGraph deploys as a single
          binary on your infrastructure. Your data never leaves your environment. GDPR and data
          sovereignty requirements met architecturally.
        </p>
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
