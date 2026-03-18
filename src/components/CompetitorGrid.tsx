const capabilities = [
  "Graph Traversal",
  "Vector ANN",
  "BM25 Full-Text",
  "OLAP Analytics",
  "Time-Series",
  "Geospatial",
  "RBAC Pre-Filter",
  "PromQL Compat",
  "Distributed",
  "Open Source",
];

type Score = "full" | "partial" | "none";

const competitors: { name: string; scores: Score[] }[] = [
  { name: "QGRAPH",      scores: ["full","full","full","full","full","full","full","full","full","full"] },
  { name: "Neo4j",        scores: ["full","partial","full","partial","none","none","none","none","partial","partial"] },
  { name: "Snowflake",    scores: ["none","none","partial","full","partial","partial","partial","none","full","none"] },
  { name: "Pinecone",     scores: ["none","full","none","none","none","none","none","none","full","none"] },
  { name: "Datadog",      scores: ["none","none","partial","partial","full","none","partial","full","full","none"] },
  { name: "Milvus",       scores: ["none","full","none","none","none","none","none","none","full","full"] },
  { name: "ClickHouse",   scores: ["none","none","partial","full","full","none","partial","partial","full","full"] },
  { name: "TigerGraph",   scores: ["full","none","none","partial","none","none","partial","none","full","partial"] },
  { name: "Weaviate",     scores: ["none","full","full","none","none","none","none","none","partial","full"] },
];

const dot: Record<Score, { cls: string; char: string }> = {
  full:    { cls: "text-lg", char: "\u25CF" },
  partial: { cls: "text-lg opacity-70", char: "\u25D2" },
  none:    { cls: "text-lg opacity-20", char: "\u25CB" },
};

const dotColor: Record<Score, string> = {
  full: "var(--accent)",
  partial: "#FFC107",
  none: "var(--muted)",
};

export default function CompetitorGrid() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse" style={{ fontSize: "13px" }}>
        <thead>
          <tr>
            <th className="text-left px-4 py-3.5 border-b border-[var(--border)]" style={{ fontFamily: "var(--mono)", fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase", color: "var(--muted)" }}>
              &nbsp;
            </th>
            {capabilities.map((c) => (
              <th key={c} className="text-center px-4 py-3.5 border-b border-[var(--border)]" style={{ fontFamily: "var(--mono)", fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase", color: "var(--muted)" }}>
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {competitors.map((comp) => {
            const isQGraph = comp.name === "QGRAPH";
            return (
              <tr key={comp.name}>
                <td
                  className="text-left px-4 py-3.5 border-b"
                  style={{
                    borderColor: "rgba(255,255,255,0.03)",
                    fontFamily: isQGraph ? "var(--heading-font)" : "var(--mono)",
                    fontSize: isQGraph ? "18px" : "12px",
                    letterSpacing: isQGraph ? "2px" : "0",
                    color: isQGraph ? "var(--accent)" : "var(--muted)",
                    fontWeight: isQGraph ? 600 : 400,
                    background: isQGraph ? "rgba(0,255,178,0.04)" : "transparent",
                  }}
                >
                  {comp.name}
                </td>
                {comp.scores.map((s, i) => (
                  <td
                    key={i}
                    className="text-center px-4 py-3.5 border-b align-middle"
                    style={{
                      borderColor: "rgba(255,255,255,0.03)",
                      background: isQGraph ? "rgba(0,255,178,0.04)" : "transparent",
                      color: dotColor[s],
                    }}
                  >
                    <span className={dot[s].cls}>{dot[s].char}</span>
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
