"use client";

import { useState } from "react";

const faqs = [
  {
    q: "How does QGraph handle nine capabilities in one engine?",
    a: "QGraph is built from the ground up as a unified engine \u2014 not a collection of acquired products. All nine capabilities share the same storage layer, the same query engine, and the same security model. A single Cypher query can combine vector similarity, graph traversal, spatial filtering, and permission checks without leaving the engine.",
  },
  {
    q: "Can I migrate from Neo4j / Pinecone / Datadog?",
    a: "Yes. QGraph speaks Cypher (compatible with Neo4j) and the Bolt protocol, so existing Neo4j client code works with minimal changes. For vector stores, QGraph accepts standard embedding formats and supports bulk import from Parquet, CSV, and Arrow files. For observability, QGraph accepts OpenTelemetry (OTLP) and Prometheus remote_write, and existing Grafana dashboards work unchanged via PromQL compatibility.",
  },
  {
    q: "What happens when my data outgrows RAM?",
    a: "QGraph automatically tiers data: hot data stays in memory, warm data moves to Vortex-compressed SSD storage, and archived data is compressed but still fully queryable. The 11-codec compression pipeline achieves up to 95% compression ratios. You can scale to petabytes on standard hardware.",
  },
  {
    q: "How does permission-aware search work?",
    a: "Permissions are stored as graph edges in the same engine as your content. When a query executes, the RBAC guard pushes permission checks into the query plan before data is ever read from disk. Unauthorized data is never decompressed, never scored, never returned. This is pre-filter security \u2014 not post-filter remediation.",
  },
  {
    q: "What about hallucination \u2014 how does QGraph eliminate it?",
    a: "Hallucination is a retrieval problem, not a model problem. Vector databases strip structural context when they chunk documents. QGraph preserves the full relationship graph, so when an AI agent asks a question, it traverses the actual connections between entities. The LLM receives structured graph facts \u2014 there is nothing to hallucinate about.",
  },
  {
    q: "Is QGraph open source?",
    a: "Yes. QGraph is fully open source. Deploy it on your own infrastructure \u2014 laptop, Docker, cloud VMs, or Kubernetes. Your data never leaves your environment. No managed-service lock-in, no per-query billing surprises.",
  },
  {
    q: "What query language does QGraph use?",
    a: "Cypher \u2014 the industry-standard graph query language, extended with native functions for vector search (qgraph.vector_search), spatial queries, time-series operations, PromQL metrics, and permission predicates. One language for everything.",
  },
  {
    q: "How does this compare to a data lakehouse like Snowflake or Databricks?",
    a: "Lakehouses are SQL-first and treat graph relationships as an afterthought. QGraph is graph-native: relationships are first-class data, traversals are fundamental operations. A lakehouse still needs separate systems for graph traversal, real-time observability, access control, and vector search. QGraph handles all of that natively in a single binary.",
  },
  {
    q: "How fast is it really?",
    a: "Sub-microsecond graph hop latency (375ns). Vector search with graph re-ranking at 10K+ QPS. PromQL queries over billions of time-series points in milliseconds. The engine uses SIMD, zero-copy Arrow memory, and Vortex 11-codec compression. No serialization tax between any internal boundary.",
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <div className="space-y-[2px]">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className="border border-[var(--border)]"
          style={{ background: "var(--surface)" }}
        >
          <button
            onClick={() => setOpenIdx(openIdx === i ? null : i)}
            className="flex w-full items-center justify-between px-6 py-4 text-left"
          >
            <span className="font-medium text-[var(--text)]">{faq.q}</span>
            <span className="ml-4 shrink-0 text-[var(--muted)]">
              {openIdx === i ? "\u2212" : "+"}
            </span>
          </button>
          {openIdx === i && (
            <div className="border-t border-[var(--border)] px-6 py-4">
              <p className="text-sm leading-relaxed text-[var(--muted)]">{faq.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
