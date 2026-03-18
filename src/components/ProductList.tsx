"use client";

const products = [
  {
    num: "01",
    name: "GRAPH OLAP ENGINE",
    kills: "REPLACES NEO4J + SNOWFLAKE",
    desc: "Hybrid transactional-analytical graph engine with vectorized morsel-driven execution, Vortex 11-codec compression, and WCOJ for multi-way joins. Sub-microsecond hop latency at petabyte scale.",
    badge: "done",
  },
  {
    num: "02",
    name: "NATIVE VECTOR SEARCH",
    kills: "REPLACES PINECONE",
    desc: "Vamana-HNSW hybrid index with graph-aware re-ranking. Embeddings live as node properties — search results come back with full relationship context, not flat arrays.",
    badge: "done",
  },
  {
    num: "03",
    name: "STRUCTURE-PRESERVING RAG",
    kills: "REPLACES LANGCHAIN + PINECONE RAG",
    desc: "Hybrid BM25 + vector + graph traversal retrieval. Community-based summarization. The LLM receives structured graph context — not 512-token chunks stripped of meaning.",
    badge: "done",
  },
  {
    num: "04",
    name: "GRAPHDOG OBSERVABILITY",
    kills: "REPLACES DATADOG",
    desc: "Metrics, traces, logs in a connected graph. PromQL-compatible queries, OpenTelemetry ingestion, topology-aware root cause analysis. No cardinality pricing surprises.",
    badge: "done",
  },
  {
    num: "05",
    name: "ENTERPRISE RBAC",
    kills: "REPLACES OKTA FGA + CUSTOM AUTH",
    desc: "Permissions as graph edges. Pre-filter security at the storage layer — unauthorized data is never decompressed. Zero information leakage. Instant revocation.",
    badge: "done",
  },
  {
    num: "06",
    name: "ML TRAINING & SERVING",
    kills: "REPLACES FEATURE STORES",
    desc: "Graph-native feature engineering, model lifecycle management, real-time serving. PageRank, community detection, degree centrality as first-class computed columns.",
    badge: "beta",
  },
  {
    num: "07",
    name: "GEOSPATIAL ANALYTICS",
    kills: "REPLACES POSTGIS",
    desc: "Spatial + relational + semantic queries unified. R-tree spatial indexing, geofence-aware access control, real-time fleet and IoT tracking within the graph.",
    badge: "beta",
  },
  {
    num: "08",
    name: "QUANTUM BRIDGE",
    kills: "QUANTUM-CLASSICAL HYBRID",
    desc: "Maps graph problems to QUBO formulations for quantum annealing hardware. Classical simulation fallback. Portfolio optimization, drug discovery, logistics routing.",
    badge: "alpha",
  },
  {
    num: "09",
    name: "OPENCLAW AGENTIC CLI",
    kills: "AGENTIC DEVELOPMENT TOOL",
    desc: "AI-native development environment that uses QGraph as its memory and reasoning substrate. Deterministic agent collaboration with full audit trails.",
    badge: "alpha",
  },
];

const badgeStyles: Record<string, { color: string; borderColor: string; bg: string }> = {
  done:  { color: "var(--accent)", borderColor: "rgba(0,255,178,0.4)", bg: "rgba(0,255,178,0.05)" },
  beta:  { color: "var(--accent3)", borderColor: "rgba(77,126,255,0.4)", bg: "rgba(77,126,255,0.05)" },
  alpha: { color: "#FFC107", borderColor: "rgba(255,193,7,0.4)", bg: "rgba(255,193,7,0.05)" },
};

const badgeLabel: Record<string, string> = {
  done: "CODE COMPLETE",
  beta: "BETA",
  alpha: "ALPHA",
};

export default function ProductList() {
  return (
    <div className="flex flex-col gap-[2px]">
      {products.map((p) => {
        const bs = badgeStyles[p.badge];
        return (
          <div
            key={p.num}
            className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8 px-6 py-6 md:px-8 md:py-8 border transition-colors cursor-default"
            style={{
              background: "var(--surface)",
              borderColor: "var(--border)",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(0,255,178,0.3)")}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
          >
            {/* number */}
            <div
              className="hidden md:block shrink-0 w-[60px]"
              style={{
                fontFamily: "var(--heading-font)",
                fontSize: "36px",
                color: "var(--muted)",
                opacity: 0.4,
                lineHeight: 1,
                paddingTop: "4px",
              }}
            >
              {p.num}
            </div>

            {/* name + kills */}
            <div className="md:w-[240px] shrink-0">
              <div className="flex items-center gap-3 md:block">
                <span
                  className="md:hidden shrink-0"
                  style={{
                    fontFamily: "var(--heading-font)",
                    fontSize: "24px",
                    color: "var(--muted)",
                    opacity: 0.4,
                  }}
                >
                  {p.num}
                </span>
                <div>
                  <div
                    style={{
                      fontFamily: "var(--heading-font)",
                      fontSize: "24px",
                      letterSpacing: "1px",
                      lineHeight: "1.1",
                      marginBottom: "4px",
                    }}
                  >
                    {p.name}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: "10px",
                      color: "var(--accent2)",
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                    }}
                  >
                    {p.kills}
                  </div>
                </div>
              </div>
            </div>

            {/* description */}
            <div
              className="flex-1"
              style={{
                fontSize: "14px",
                color: "var(--muted)",
                lineHeight: "1.6",
              }}
            >
              {p.desc}
            </div>

            {/* badge */}
            <div
              className="shrink-0 self-start"
              style={{
                fontFamily: "var(--mono)",
                fontSize: "10px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                padding: "6px 14px",
                whiteSpace: "nowrap",
                color: bs.color,
                borderColor: bs.borderColor,
                background: bs.bg,
                border: `1px solid ${bs.borderColor}`,
              }}
            >
              {badgeLabel[p.badge]}
            </div>
          </div>
        );
      })}
    </div>
  );
}
