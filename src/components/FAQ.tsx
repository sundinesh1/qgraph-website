"use client";

import { useState } from "react";

const faqs = [
  {
    q: "How does QGraph handle seven capabilities in one engine?",
    a: "QGraph is built from the ground up as a unified engine — not a collection of acquired products. All seven capabilities (graph, vector, observability, governance, access control, geospatial, compliance) share the same storage layer, the same query engine, and the same security model. This means queries can naturally cross capability boundaries: a single Cypher query can combine vector similarity, graph traversal, and permission checks without leaving the engine.",
  },
  {
    q: "Can I migrate from Neo4j / Pinecone / Datadog?",
    a: "Yes. QGraph speaks Cypher (compatible with Neo4j's query language) and the Bolt protocol, so existing Neo4j client code works with minimal changes. For vector stores, QGraph accepts standard embedding formats and supports bulk import from Parquet, CSV, and Arrow files. For observability, QGraph accepts OpenTelemetry (OTLP) and Prometheus remote_write, and existing Grafana dashboards work unchanged via PromQL compatibility.",
  },
  {
    q: "What happens when my data outgrows RAM?",
    a: "QGraph automatically tiers data: frequently accessed data stays in memory for speed, less active data moves to fast SSD storage, and archived data is compressed but still fully queryable. You don't manage this — the engine handles tiering automatically. This means you can scale to petabytes on standard hardware without renting data-center-class machines.",
  },
  {
    q: "Is QGraph open source?",
    a: "Yes. QGraph is open source and you can deploy it on your own infrastructure — laptop, Docker, cloud VMs, or Kubernetes. Your data never leaves your environment. There's no managed-service lock-in.",
  },
  {
    q: "How does permission-aware search work?",
    a: "Permissions are stored as connected data in the same engine as your content. When a user searches, the query engine first determines which documents they can access (via graph traversal through the permission model), then runs the search only against those documents. Users never see results they're not authorized to access — and they never learn that restricted documents exist. Zero information leakage.",
  },
  {
    q: "What query language does QGraph use?",
    a: "Cypher — the industry-standard graph query language. QGraph extends Cypher with native functions for vector search, spatial queries, time-series operations, and permission predicates. Your team learns one language for everything, not a different query language per system.",
  },
  {
    q: "How does QGraph compare to using a data lakehouse like Snowflake or Databricks?",
    a: "Data lakehouses are SQL-first and treat graph relationships as an afterthought (if at all). QGraph is graph-native: relationships are first-class data, traversals are fundamental operations, and vector/spatial/time-series are integrated at the engine level. A lakehouse would still need separate systems for graph traversal, real-time observability, access control, and compliance. QGraph handles all of that natively.",
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className="rounded-xl border border-[var(--border)] bg-[var(--bg-card)]"
        >
          <button
            onClick={() => setOpenIdx(openIdx === i ? null : i)}
            className="flex w-full items-center justify-between px-6 py-4 text-left"
          >
            <span className="font-medium text-[var(--text-primary)]">{faq.q}</span>
            <span className="ml-4 shrink-0 text-[var(--text-secondary)]">
              {openIdx === i ? "−" : "+"}
            </span>
          </button>
          {openIdx === i && (
            <div className="border-t border-[var(--border)] px-6 py-4">
              <p className="text-sm leading-relaxed text-[var(--text-secondary)]">{faq.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
