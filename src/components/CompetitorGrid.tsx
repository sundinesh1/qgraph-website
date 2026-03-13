"use client";

import { useState } from "react";

const capabilities = [
  "Graph DB",
  "Vector Search",
  "Observability",
  "Governance",
  "Access Control",
  "Geospatial",
  "GRC / Compliance",
  "ML Training & Serving",
];

type Support = "full" | "partial" | "none";

interface Competitor {
  name: string;
  caps: Support[];
  notes: string;
}

const competitors: Competitor[] = [
  {
    name: "Neo4j",
    caps: ["full", "partial", "none", "none", "partial", "none", "none", "none"],
    notes: "Graph-only. Single-machine RAM ceiling. No native vector, observability, or governance.",
  },
  {
    name: "Pinecone",
    caps: ["none", "full", "none", "none", "none", "none", "none", "none"],
    notes: "Vector-only. No graph relationships, no access control, no lineage tracking.",
  },
  {
    name: "Datadog",
    caps: ["none", "none", "full", "none", "none", "none", "none", "none"],
    notes: "Observability-only. Per-metric cardinality pricing. No graph or vector capabilities.",
  },
  {
    name: "Snowflake",
    caps: ["partial", "partial", "none", "partial", "partial", "none", "none", "partial"],
    notes: "SQL warehouse. Limited graph support. No native observability or geospatial. Snowpark ML is partial.",
  },
  {
    name: "Vanta / Diligent",
    caps: ["none", "none", "none", "partial", "partial", "none", "full", "none"],
    notes: "GRC-only. Built on stitched-together data systems under the hood.",
  },
  {
    name: "FalkorDB",
    caps: ["full", "partial", "none", "none", "none", "none", "none", "none"],
    notes: "Graph with vector add-on. No observability, governance, geospatial, or GRC.",
  },
  {
    name: "Databricks",
    caps: ["partial", "partial", "none", "partial", "partial", "none", "none", "full"],
    notes: "Strong ML platform, but no native graph, observability, geospatial, or compliance. Graph support is limited.",
  },
];

const tabs = competitors.map((c) => c.name);

function Badge({ level }: { level: Support }) {
  if (level === "full")
    return <span className="inline-block rounded bg-emerald-500/20 px-2 py-0.5 text-xs font-medium text-emerald-400">Core</span>;
  if (level === "partial")
    return <span className="inline-block rounded bg-amber-500/20 px-2 py-0.5 text-xs font-medium text-amber-400">Partial</span>;
  return <span className="inline-block rounded bg-red-500/10 px-2 py-0.5 text-xs font-medium text-red-400/60">None</span>;
}

export default function CompetitorGrid() {
  const [activeIdx, setActiveIdx] = useState(0);
  const comp = competitors[activeIdx];

  return (
    <div>
      {/* Competitor tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {tabs.map((name, i) => (
          <button
            key={name}
            onClick={() => setActiveIdx(i)}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
              activeIdx === i
                ? "bg-[var(--accent)] text-white"
                : "border border-[var(--border)] text-[var(--text-secondary)] hover:border-[var(--accent)] hover:text-[var(--text-primary)]"
            }`}
          >
            {name}
          </button>
        ))}
      </div>

      {/* Comparison table */}
      <div className="overflow-x-auto rounded-xl border border-[var(--border)]">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-[var(--border)] bg-[var(--bg-card)]">
              <th className="px-4 py-3 text-left font-medium text-[var(--text-secondary)]">Capability</th>
              <th className="px-4 py-3 text-center font-medium gradient-text">QGraph</th>
              <th className="px-4 py-3 text-center font-medium text-[var(--text-secondary)]">{comp.name}</th>
            </tr>
          </thead>
          <tbody>
            {capabilities.map((cap, i) => (
              <tr key={cap} className="border-b border-[var(--border)] last:border-b-0">
                <td className="px-4 py-3 text-[var(--text-secondary)]">{cap}</td>
                <td className="px-4 py-3 text-center">
                  <Badge level="full" />
                </td>
                <td className="px-4 py-3 text-center">
                  <Badge level={comp.caps[i]} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-center text-xs text-[var(--text-secondary)]">
        {comp.notes}
      </p>
    </div>
  );
}
