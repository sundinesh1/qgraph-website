import UseCaseLayout from "@/components/UseCaseLayout";
import CypherSnippet from "@/components/CypherSnippet";

export default function HTAPPage() {
  return (
    <UseCaseLayout
      icon="⚡"
      title="Graph Database"
      subtitle="The RAM ceiling is over. Petabyte-scale traversals on standard hardware."
      problem="Your graph database is a JVM application that stores everything in RAM on a single machine. When your data outgrows that machine, you're stuck — pay for increasingly massive instances, or shard your graph and destroy the traversal performance that made graphs useful in the first place. Meanwhile, you're running separate systems for transactions and analytics, with ETL pipelines syncing data between them. The data is always slightly stale. The bills are always slightly terrifying."
      solution="QGraph handles both real-time transactions and complex analytics from one engine built in Rust — not a JVM wrapper. Your data doesn't have to fit in RAM. Hot data stays in memory for speed. Warm data moves to NVMe automatically. Cold data is compressed but still queryable. The engine manages the tiering — you don't touch it. Scale to petabytes on standard hardware without the single-machine ceiling. No separate OLTP and OLAP deployments. No ETL lag. Write a transaction and immediately query the result."
      differentiators={[
        "No single-machine ceiling — scales horizontally across standard hardware, not oversized RAM instances",
        "Automatic three-tier storage: hot data fast, warm data cheap, cold data compressed but queryable",
        "Transactions and analytics from one engine — no separate systems, no ETL delay, no stale data",
        "Ground-up Rust engine — not a JVM application. Microsecond latency, not milliseconds",
        "One query language (Cypher) for everything — relationships, patterns, aggregations, traversals",
        "Deploy on your infrastructure — laptop, Docker, cloud, Kubernetes. Zero vendor lock-in",
      ]}
    >
      <CypherSnippet
        code={`// Write a transaction and immediately analyze the pattern
CREATE (tx:Transaction {
  amount: 4999.99, merchant: 'Electronics',
  timestamp: datetime(), card_id: $card_id
})
WITH tx
MATCH (tx)<-[:MADE]-(card:Card)-[:MADE]->(prev:Transaction)
      -[:AT]->(m:Merchant)<-[:AT]-(suspicious:Transaction)
WHERE prev.timestamp > datetime() - duration('PT1H')
  AND suspicious.flagged = true
RETURN COUNT(DISTINCT suspicious) AS fraud_signals,
       COLLECT(DISTINCT m.name) AS linked_merchants`}
        caption="Write a transaction and immediately traverse the graph to detect fraud patterns — in one query, in microseconds"
      />

      <section className="my-10">
        <h3 className="mb-4 text-lg font-semibold">The RAM Ceiling Is a Mathematical Dead End</h3>
        <div className="space-y-4">
          <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-5">
            <h4 className="mb-1 text-sm font-semibold text-red-400">Today: trapped by a single machine</h4>
            <p className="text-sm text-[var(--text-secondary)]">
              Your graph database keeps everything in memory. When your data grows, you
              upgrade to larger instances. When you hit the ceiling of the largest instance,
              you&apos;re stuck. Sharding a graph database means breaking traversals across
              network boundaries — destroying the performance that made graphs useful.
              The six-figure annual license doesn&apos;t include the six-figure AWS bill
              for the oversized instances.
            </p>
          </div>
          <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-5">
            <h4 className="mb-1 text-sm font-semibold text-emerald-400">With QGraph: scale without compromise</h4>
            <p className="text-sm text-[var(--text-secondary)]">
              Frequently accessed data stays in memory for microsecond access. Less active data
              moves to NVMe automatically. Archived data is compressed but still queryable in
              the same Cypher query. The engine manages the tiering transparently. Scale to
              petabytes without renting data-center-class machines. Deploy on standard hardware.
              Keep your budget intact.
            </p>
          </div>
        </div>
      </section>
    </UseCaseLayout>
  );
}
