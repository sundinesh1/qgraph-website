import Link from "next/link";
import CypherSnippet from "@/components/CypherSnippet";

const rows = [
  { metric: "Storage architecture", qgraph: "One unified causal graph", competitor: "3 separate stores (metrics, traces, logs)" },
  { metric: "Root cause analysis", qgraph: "One query follows the causal chain", competitor: "Manual correlation across 3 dashboards" },
  { metric: "Cardinality pricing", qgraph: "Predictable, no per-metric surprises", competitor: "Per-series pricing that spikes unpredictably" },
  { metric: "Topology awareness", qgraph: "Service dependencies are first-class edges", competitor: "Derived overlay, refreshed periodically" },
  { metric: "Query language", qgraph: "Cypher (unified) + PromQL compatibility", competitor: "PromQL + LogQL + TraceQL (3 languages)" },
  { metric: "Graph relationships", qgraph: "Native graph traversal for any query", competitor: "Not available" },
  { metric: "Vector search", qgraph: "Built-in semantic search", competitor: "Not available" },
  { metric: "Access control", qgraph: "Storage-level RBAC with proof paths", competitor: "Basic role-based" },
  { metric: "Data governance", qgraph: "Built-in lineage and quality", competitor: "Not available" },
  { metric: "GRC / Compliance", qgraph: "Blast radius, continuous evidence", competitor: "Not available" },
  { metric: "Ingestion protocol", qgraph: "OTLP + Prometheus remote_write", competitor: "Proprietary agents required" },
  { metric: "Deployment", qgraph: "Your infrastructure, single binary", competitor: "Managed SaaS only" },
  { metric: "Grafana dashboards", qgraph: "Work unchanged (PromQL compat)", competitor: "Requires Datadog UI" },
];

export default function VsDatadogPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 pt-28 pb-20">
      <div className="mb-2 inline-block rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/10 px-3 py-1 text-xs font-medium text-[var(--accent-light)]">
        Why QGraph
      </div>
      <h1 className="text-4xl font-bold">QGraph vs Datadog</h1>
      <p className="mt-3 text-lg text-[var(--text-secondary)]">
        Datadog stores metrics, traces, and logs in three separate systems correlated
        after the fact. QGraph stores them in one connected graph where causality
        is a first-class concept. Here&apos;s how that changes everything.
      </p>

      <section className="mt-10 rounded-xl border border-red-500/20 bg-red-500/5 p-6">
        <h2 className="mb-2 text-lg font-semibold text-red-400">The Three-Dashboard Problem Is Costing You Hours</h2>
        <p className="text-sm text-[var(--text-secondary)]">
          When a service breaks at 2 AM, an engineer opens the metrics dashboard, the traces
          dashboard, and the logs dashboard. They spend 30 minutes manually correlating
          across all three to find root cause. The actual fix takes 2 minutes. With Datadog,
          you&apos;re paying for three separate storage systems, three query languages, and the
          cardinality pricing that spikes every time someone adds a new label. Multiply this
          across every incident, every week. The cost is not just the bill — it&apos;s the
          engineering hours burned on investigation instead of building product.
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
                <th className="px-4 py-3 text-left font-medium text-[var(--text-secondary)]">Datadog</th>
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
        <h2 className="mb-4 text-2xl font-bold">Root Cause in Seconds, Not Minutes</h2>
        <CypherSnippet
          code={`// One query: follow the causal chain from alert to root cause
MATCH (alert:Service {name: 'checkout'})
      -[:CALLS*1..5]->(root:Service)
WHERE root.error_rate > 0.10
RETURN root.name, root.error_rate,
       length(path) AS hops_from_alert
ORDER BY hops_from_alert ASC
LIMIT 1`}
          caption="In Datadog: 30 minutes across 3 dashboards. In QGraph: one query, seconds."
        />
      </section>

      <section className="mt-10 card-glow rounded-xl p-6">
        <h3 className="mb-2 font-semibold text-[var(--accent-light)]">Your Grafana Dashboards Keep Working</h3>
        <p className="text-sm text-[var(--text-secondary)]">
          QGraph supports PromQL compatibility, so your existing Grafana dashboards work
          unchanged. Zero migration cost for what you&apos;ve already built. Accepts telemetry
          via OpenTelemetry (OTLP) and Prometheus remote_write — drop-in replacement for
          any OpenTelemetry-instrumented service. No proprietary agents. No vendor lock-in.
        </p>
      </section>

      <section className="mt-10 rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-5">
        <p className="text-sm font-semibold text-emerald-400 mb-1">No Cardinality Tax</p>
        <p className="text-sm text-[var(--text-secondary)]">
          Datadog charges per metric series. Add a new label? Your bill spikes. With QGraph,
          pricing is predictable. No surprise bills when your usage grows. No penalties for
          adding labels or dimensions to your data. Scale your observability without scaling
          your costs.
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
