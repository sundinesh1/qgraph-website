import UseCaseLayout from "@/components/UseCaseLayout";
import CypherSnippet from "@/components/CypherSnippet";

export default function GovernancePage() {
  return (
    <UseCaseLayout
      icon="🛡️"
      title="Data Governance"
      subtitle="Bolt-on catalogs are always playing catch-up. QGraph tracks lineage, quality, and provenance automatically."
      problem="Your data catalog is a separate system that tries to track where data came from after it's already been moved between a dozen tools. Lineage is incomplete because ETL pipelines between systems lose provenance at every hop. Quality checks run overnight in batch jobs that discover problems hours after they happened. When the compliance team asks 'where did this number come from?' nobody can trace it end to end. You're paying a separate vendor for a governance layer that's architecturally guaranteed to be incomplete."
      solution="QGraph tracks lineage, quality, and access automatically — because all your data lives in one engine. There's no ETL pipeline to lose provenance across. Quality rules run continuously inside the engine, not as overnight batch jobs. When auditors ask 'where did this number come from?' the answer is one query — not a multi-week archaeological dig through pipeline logs."
      differentiators={[
        "Lineage is automatic — every read, write, and transformation tracked because it all happens in one engine",
        "Quality rules run continuously, not in overnight batch jobs that discover problems hours too late",
        "No separate catalog vendor — discovery, lineage, and quality monitoring built in from day one",
        "End-to-end traceability: from raw ingest to final output, every step recorded",
        "SOC 2, GDPR, HIPAA lineage requirements met out of the box — compliance from day one, not month six",
        "Pipeline orchestration built in: Bronze → Silver → Gold data refinement without separate ETL tools",
      ]}
    >
      <section className="my-10 rounded-xl border border-[var(--border)] bg-[var(--bg-card)] p-6">
        <h3 className="mb-4 text-lg font-semibold">Why Bolt-On Catalogs Are a Dead End</h3>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border border-red-500/20 bg-red-500/5 p-4">
            <h4 className="mb-2 text-sm font-semibold text-red-400">The Bolt-On Approach</h4>
            <ul className="space-y-1 text-xs text-[var(--text-secondary)]">
              <li>• Data lands in warehouse, then catalog tries to track it</li>
              <li>• ETL between systems loses provenance at each hop</li>
              <li>• Quality checks run overnight, problems found hours later</li>
              <li>• Separate vendor, separate bill, always out of sync</li>
              <li>• Auditors get partial lineage at best — incomplete by design</li>
            </ul>
          </div>
          <div className="rounded-lg border border-emerald-500/20 bg-emerald-500/5 p-4">
            <h4 className="mb-2 text-sm font-semibold text-emerald-400">The Built-In Approach</h4>
            <ul className="space-y-1 text-xs text-[var(--text-secondary)]">
              <li>• All data lives in one engine — nothing to sync</li>
              <li>• Every operation tracked automatically — complete by architecture</li>
              <li>• Quality rules run continuously, catch problems immediately</li>
              <li>• One system, one bill, always in sync by definition</li>
              <li>• Complete lineage from ingest to output — always, guaranteed</li>
            </ul>
          </div>
        </div>
      </section>

      <CypherSnippet
        code={`// Data quality check — runs continuously, not as an overnight batch
MATCH (t:Table {name: 'transactions'})
MATCH (t)-[:HAS_COLUMN]->(col:Column {name: 'amount'})
WITH col, qgraph.null_ratio(col) AS null_pct,
     qgraph.distinct_ratio(col) AS cardinality
WHERE null_pct > 0.01 OR cardinality < 0.001
RETURN col.name, null_pct, cardinality,
       'QUALITY_ALERT' AS status`}
        caption="Quality rules are Cypher queries that run inside the engine — not separate batch jobs"
      />

      {/* Pipeline Orchestration */}
      <section className="my-10">
        <h3 className="mb-4 text-lg font-semibold">Pipeline Orchestration — No Airflow Required</h3>
        <p className="text-sm text-[var(--text-secondary)] mb-4">
          Define your data transformations in Cypher and schedule them through the built-in
          pipeline interface. Bronze → Silver → Gold data refinement happens inside the
          engine — no separate ETL tool, no separate scheduling system, no Airflow DAGs
          to maintain. Periodic jobs and continuous pipelines both work through the same interface.
        </p>
        <CypherSnippet
          code={`// Hourly finance rollup: Bronze → Silver → Gold
FROM STREAM(SilverTransactions)
WINDOW(1 hour)
MATCH (t:Transaction)
RETURN sum(t.amount) AS hourly_volume,
       count(t) AS transaction_count,
       avg(t.amount) AS avg_amount`}
          caption="Data pipelines defined in Cypher, scheduled through the built-in orchestrator — no Airflow, no Dagster"
        />
      </section>

      {/* ML Feature Engineering */}
      <section className="my-10">
        <h3 className="mb-4 text-lg font-semibold">ML Feature Engineering — No Separate Feature Store</h3>
        <p className="text-sm text-[var(--text-secondary)] mb-4">
          Extract features directly from the graph for ML training — no separate feature
          store, no export-transform-reimport cycle. Graph-native features like PageRank,
          community membership, and relationship patterns are first-class columns.
        </p>
        <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-5">
          <p className="text-sm font-semibold text-emerald-400 mb-1">The Result</p>
          <p className="text-sm text-[var(--text-secondary)]">
            One system for the full data lifecycle: ingestion → quality → transformation →
            feature engineering → model training → production serving. All governed by the same
            lineage and access control. No separate MLflow server. No separate feature store.
            No separate model registry. One engine. One bill.
          </p>
        </div>
      </section>
    </UseCaseLayout>
  );
}
