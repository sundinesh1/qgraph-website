import UseCaseLayout from "@/components/UseCaseLayout";
import CypherSnippet from "@/components/CypherSnippet";

export default function ObservabilityPage() {
  return (
    <UseCaseLayout
      icon="📊"
      title="Observability"
      subtitle="Three dashboards. Three query languages. Three bills. Zero correlation. That era is over."
      problem="Your metrics are in one tool. Your traces are in another. Your logs are in a third. When something breaks at 2 AM, an engineer wakes up and starts the same painful ritual: check the metrics dashboard, check the traces dashboard, check the logs dashboard, and spend 30 minutes manually correlating across all three to find root cause. The actual fix takes 2 minutes. You're paying for three separate storage systems, three query languages, and the cardinality pricing that spikes every time someone adds a new label."
      solution="QGraph stores your services, their dependencies, and all their telemetry in one connected graph where causality is a first-class concept. 'What caused the checkout service to fail?' is a single query that follows the causal chain — not a human clicking between three dashboards trying to piece together a timeline. Service topology is native graph data, not a periodically-refreshed overlay."
      differentiators={[
        "One store replaces three — metrics, traces, and logs unified in a single causal graph",
        "Root cause in seconds: follow the dependency chain from alert to source in one Cypher query",
        "No cardinality surprises — predictable costs that don't spike when you add labels or dimensions",
        "Topology-aware alerting: 'alert when anything upstream of checkout degrades' — impossible in tag-based systems",
        "Existing Grafana dashboards keep working — PromQL compatibility, zero migration cost",
        "Drop-in replacement: accepts telemetry via OTLP + Prometheus remote_write. No proprietary agents required",
      ]}
    >
      <CypherSnippet
        code={`// Find root cause: follow the dependency chain from the alert
MATCH (alert:Service {name: 'checkout'})
      -[:CALLS*1..5]->(root:Service)
WHERE root.error_rate > 0.10
RETURN root.name, root.error_rate,
       length(path) AS hops_from_alert
ORDER BY hops_from_alert ASC
LIMIT 1`}
        caption="In Datadog: 30 minutes across 3 dashboards. In QGraph: one query, seconds."
      />

      <section className="my-10">
        <h3 className="mb-4 text-lg font-semibold">The Three-Dashboard Problem Is Costing You Hours Every Incident</h3>
        <div className="space-y-4">
          <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-5">
            <h4 className="mb-1 text-sm font-semibold text-red-400">Today: 30 minutes to root cause</h4>
            <p className="text-sm text-[var(--text-secondary)]">
              Engineer gets paged. Opens metrics dashboard — sees latency spike on checkout.
              Opens traces dashboard — sees slow database calls. Opens logs dashboard — sees
              connection pool exhaustion on a different service two hops upstream. Correlating
              these three signals manually took 30 minutes. The actual fix took 2 minutes.
              Multiply this by every incident, every week, across your entire engineering org.
            </p>
          </div>
          <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-5">
            <h4 className="mb-1 text-sm font-semibold text-emerald-400">With QGraph: seconds to root cause</h4>
            <p className="text-sm text-[var(--text-secondary)]">
              Engineer gets paged. Runs one query that follows the dependency chain from checkout
              through every upstream service, checking error rates and latency at each hop.
              Root cause identified in seconds: connection pool exhaustion on the auth service,
              two hops upstream. Same 2-minute fix — but 30 minutes of investigation eliminated.
              Every single time.
            </p>
          </div>
        </div>
      </section>

      <section className="my-10 card-glow rounded-xl p-6">
        <h3 className="mb-2 font-semibold text-[var(--accent-light)]">Your Grafana Dashboards Keep Working</h3>
        <p className="text-sm text-[var(--text-secondary)]">
          QGraph supports PromQL compatibility, so your existing Grafana dashboards work
          unchanged. Zero migration cost for what you&apos;ve already built. Accepts telemetry
          via OpenTelemetry (OTLP) and Prometheus remote_write — drop-in replacement for
          any OpenTelemetry-instrumented service. No proprietary agents required.
        </p>
      </section>
    </UseCaseLayout>
  );
}
