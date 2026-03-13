"use client";

import { useState } from "react";
import Link from "next/link";

const tabs = [
  {
    id: "graph",
    label: "Graph Database",
    icon: "⚡",
    href: "/use-cases/htap",
    description: "Full graph database with relationship traversals, pattern matching, and complex analytics — without the single-machine RAM ceiling.",
    highlights: [
      "Scales beyond single-machine RAM limits",
      "Real-time transactions AND analytics from one engine",
      "No separate OLTP and OLAP deployments",
    ],
  },
  {
    id: "vector",
    label: "Vector Search",
    icon: "🔍",
    href: "/use-cases/vector-search",
    description: "Semantic similarity search where results come back with full context — authorship, projects, permissions — not stripped into flat arrays.",
    highlights: [
      "Search results enriched with graph relationships",
      "Permission-aware: users only see what they can access",
      "No separate vector store to sync and maintain",
    ],
  },
  {
    id: "observability",
    label: "Observability",
    icon: "📊",
    href: "/use-cases/observability",
    description: "Metrics, traces, and logs in one connected store. Trace causality from alert to root cause in a single query instead of switching between three dashboards.",
    highlights: [
      "One store replaces three (metrics + traces + logs)",
      "Root cause analysis in seconds, not 30 minutes",
      "No cardinality pricing surprises",
    ],
  },
  {
    id: "security",
    label: "Security & GRC",
    icon: "🏛️",
    href: "/use-cases/security",
    description: "Governance, Risk, and Compliance without duct-taping five systems together. Blast radius analysis, continuous compliance evidence, and automated auditing.",
    highlights: [
      "Instant blast radius for compromised credentials",
      "Continuous compliance evidence, not overnight batch reports",
      "AI-powered security questionnaire automation",
    ],
  },
  {
    id: "governance",
    label: "Data Governance",
    icon: "🛡️",
    href: "/use-cases/governance",
    description: "Lineage, quality monitoring, data discovery, and pipeline orchestration built into the engine — not a separate catalog vendor that's always playing catch-up.",
    highlights: [
      "Automatic lineage tracking for every operation",
      "Quality rules run continuously, not as overnight batch jobs",
      "ML feature engineering and model lifecycle management",
    ],
  },
  {
    id: "rbac",
    label: "Access Control",
    icon: "🔐",
    href: "/use-cases/rbac",
    description: "Permissions as connected data. Instant validation, instant revocation, full audit trail with proof paths that auditors can inspect directly.",
    highlights: [
      "Instant permission checks, not table scans",
      "Immediate revocation, no sync lag",
      "Zero information leakage in search results",
    ],
  },
  {
    id: "geospatial",
    label: "Geospatial",
    icon: "🌍",
    href: "/use-cases/geospatial",
    description: "Location-aware queries that also understand relationships and semantic similarity. 'What's nearby, connected to me, and matches my preferences?' — one query.",
    highlights: [
      "Spatial + relational + semantic in one query",
      "Real-time fleet and IoT tracking",
      "Geofence-aware access control for data sovereignty",
    ],
  },
  {
    id: "ml",
    label: "ML & AI",
    icon: "🤖",
    href: "/use-cases/ml-ai",
    description: "Feature engineering from the graph, model lifecycle management, and production inference — without the data fetch bottleneck that keeps your expensive GPUs idle.",
    highlights: [
      "Graph-native features: PageRank, community, degree as first-class columns",
      "Real-time feature freshness — no 24-hour batch refresh",
      "Full ML lifecycle: training, versioning, serving, monitoring — all governed",
    ],
  },
];

export default function UseCaseTabs() {
  const [activeTab, setActiveTab] = useState("graph");
  const active = tabs.find((t) => t.id === activeTab)!;

  return (
    <div>
      {/* Tab bar */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
              activeTab === tab.id
                ? "bg-[var(--accent)] text-white"
                : "border border-[var(--border)] text-[var(--text-secondary)] hover:border-[var(--accent)] hover:text-[var(--text-primary)]"
            }`}
          >
            <span className="mr-1.5">{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="card-glow rounded-xl p-8">
        <div className="flex items-start gap-4 mb-4">
          <span className="text-3xl">{active.icon}</span>
          <div>
            <h3 className="text-xl font-bold">{active.label}</h3>
            <p className="mt-2 text-[var(--text-secondary)]">{active.description}</p>
          </div>
        </div>
        <ul className="mt-4 space-y-2">
          {active.highlights.map((h, i) => (
            <li key={i} className="flex items-start gap-2 text-sm">
              <span className="mt-0.5 text-emerald-400">✓</span>
              <span className="text-[var(--text-secondary)]">{h}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <Link
            href={active.href}
            className="inline-block rounded-lg border border-[var(--accent)] px-5 py-2 text-sm font-semibold text-[var(--accent-light)] transition hover:bg-[var(--accent)] hover:text-white"
          >
            Learn More →
          </Link>
        </div>
      </div>
    </div>
  );
}
