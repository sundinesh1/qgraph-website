import UseCaseLayout from "@/components/UseCaseLayout";
import CypherSnippet from "@/components/CypherSnippet";

export default function MLAIPage() {
  return (
    <UseCaseLayout
      icon="🤖"
      title="ML & AI"
      subtitle="Your GPUs sit idle 70% of the time waiting for data. That bottleneck ends here."
      problem="Your ML pipeline spends more time fetching and transforming data than running inference. Features live in a separate feature store. Training data has to be exported, transformed, and loaded into yet another system. Model serving requires a separate inference server that calls back to your database for features — adding network round-trips that dwarf the actual compute time. The data fetch bottleneck means your expensive GPUs sit idle 70% of the time, waiting for data. You're paying for compute that isn't computing."
      solution="QGraph serves features directly from the graph — no export, no separate feature store, no serialization overhead. Graph-native features like PageRank, community membership, and relationship patterns are first-class columns. Training reads features from the same engine that stores them. Inference happens where the data lives. Your GPUs stay busy doing compute, not waiting for data."
      differentiators={[
        "Features served directly from the graph — no separate feature store, no export-transform-reimport cycle",
        "Graph-native features: PageRank, community detection, relationship patterns available as first-class columns",
        "Training data stays fresh — features update in real-time as the graph changes, not in 24-hour batch cycles",
        "Model lifecycle management: experiment tracking, versioning, and staging integrated with governance",
        "Production inference without the data fetch bottleneck — features are already where the compute happens",
        "Full lineage: from raw data through feature engineering to model output, every step tracked automatically",
      ]}
    >
      {/* The Data Fetch Bottleneck */}
      <section className="my-10">
        <h3 className="mb-4 text-lg font-semibold">The Data Fetch Bottleneck Is Burning Your GPU Budget</h3>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-5">
            <h4 className="mb-2 text-sm font-semibold text-red-400">Today: GPUs sitting idle</h4>
            <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
              <li>• Features stored in a separate feature store</li>
              <li>• Training exports data, transforms it, loads it into another system</li>
              <li>• Inference server calls back to DB for features — network round-trip</li>
              <li>• GPU utilization: ~30% (waiting for data the rest of the time)</li>
              <li>• Feature freshness: 24 hours (batch refresh)</li>
            </ul>
          </div>
          <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-5">
            <h4 className="mb-2 text-sm font-semibold text-emerald-400">With QGraph: GPUs stay busy</h4>
            <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
              <li>• Features served directly from the graph — zero export</li>
              <li>• Training reads from the same engine that stores data</li>
              <li>• Inference happens where the data lives — no network hop</li>
              <li>• GPU utilization: 90%+ (data is always ready)</li>
              <li>• Feature freshness: real-time (updates as graph changes)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Graph-Native Feature Engineering */}
      <section className="my-10">
        <h3 className="mb-4 text-lg font-semibold">Graph-Native Feature Engineering</h3>
        <p className="text-sm text-[var(--text-secondary)] mb-4">
          Traditional ML pipelines extract tabular features from databases. But your data is a graph —
          users connect to products, services call other services, documents reference entities.
          Graph-native features capture the structural patterns that tabular features miss:
          how central is this user? What community do they belong to? How many hops to the
          nearest fraud signal? These features are the difference between a model that works
          and a model that dominates.
        </p>
        <CypherSnippet
          code={`// Extract graph-native features for ML training
MATCH (user:User {id: $user_id})
WITH user,
     qgraph.pagerank(user) AS influence,
     qgraph.community(user) AS community_id,
     qgraph.degree(user, 'PURCHASED') AS purchase_count
MATCH (user)-[:PURCHASED]->(item:Item)
RETURN user.id, user.embedding, influence, community_id,
       purchase_count, COLLECT(item.embedding) AS item_history`}
          caption="Graph-native features — PageRank, community membership, degree centrality — available as first-class columns"
        />
      </section>

      {/* Full ML Lifecycle */}
      <section className="my-10">
        <h3 className="mb-4 text-lg font-semibold">Full ML Lifecycle — No Separate Tools</h3>
        <div className="space-y-3">
          {[
            {
              step: "1. Feature Engineering",
              desc: "Extract features directly from the graph using Cypher. Graph-native features (PageRank, community, degree) alongside vector embeddings and time-series signals. No separate feature store.",
            },
            {
              step: "2. Experiment Tracking",
              desc: "Every training run tracked with parameters, metrics, and data snapshots. Time-travel queries reproduce exact training conditions. Full lineage from data to model.",
            },
            {
              step: "3. Model Registry",
              desc: "Version, stage, and compare models. Automatic promotion from staging to production with quality gates. Rollback to any previous version instantly.",
            },
            {
              step: "4. Production Serving",
              desc: "Inference happens where the data lives. Features served directly from the graph — no round-trip to a separate database. Real-time scoring at scale.",
            },
            {
              step: "5. Monitoring & Governance",
              desc: "Model inputs, outputs, and decisions tracked by the same governance layer. Data drift detection. Full audit trail. One system for the entire lifecycle.",
            },
          ].map((item) => (
            <div key={item.step} className="card-glow rounded-xl p-5">
              <h4 className="mb-1 text-sm font-semibold text-[var(--accent-light)]">{item.step}</h4>
              <p className="text-sm text-[var(--text-secondary)]">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Real-Time Recommendations */}
      <section className="my-10">
        <h3 className="mb-4 text-lg font-semibold">Example: Real-Time Recommendations</h3>
        <CypherSnippet
          code={`// Production recommendation query — features + inference in one pass
MATCH (user:User {id: $user_id})-[:CLICKED]->(history:Item)
WITH user, COLLECT(history.embedding) AS click_history
MATCH (candidate:Item)
WHERE NOT (user)-[:CLICKED]->(candidate)
WITH candidate,
     qgraph.vector_search(candidate.embedding, user.taste_vec, 100) AS similarity,
     qgraph.model_score('recsys_v3', user.embedding, candidate.embedding) AS score
RETURN candidate.name, candidate.category, score
ORDER BY score DESC
LIMIT 20`}
          caption="Feature retrieval, similarity search, and model scoring in one query — no separate inference server"
        />
      </section>

      {/* Reproducibility */}
      <section className="my-10 rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-5">
        <p className="text-sm font-semibold text-emerald-400 mb-1">The Result</p>
        <p className="text-sm text-[var(--text-secondary)]">
          Full ML lifecycle in one platform. Features served in microseconds from the graph.
          GPU utilization from ~30% to 90%+. Feature freshness from 24 hours to real-time.
          Every training run reproducible via time-travel queries. Every model decision
          tracked by the same governance layer that covers everything else in QGraph.
          No separate MLflow. No separate feature store. No separate inference server.
        </p>
      </section>
    </UseCaseLayout>
  );
}
