export default function Ticker() {
  const items = [
    "Graph OLAP Engine",
    "Native Vector Search",
    "Structure-Preserving RAG",
    "GraphDog Observability",
    "Enterprise RBAC",
    "ML Serving Infrastructure",
    "Geospatial Analytics",
    "Quantum Bridge",
    "OpenClaw Agentic CLI",
  ];

  return (
    <div className="ticker-wrap">
      <div className="ticker">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="ticker-item">
            <span className="dot">&#9670;</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
