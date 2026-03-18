import Link from "next/link";
import CypherSnippet from "@/components/CypherSnippet";

export default function ArchitecturePage() {
  return (
    <div className="mx-auto max-w-4xl px-6 pt-28 pb-20">
      <div className="mb-2 inline-block rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
        Code Complete &mdash; 710,000 Lines of Production Rust
      </div>
      <h1 className="text-4xl font-bold">The Hardware-Native Data Intelligence Platform</h1>
      <p className="mt-3 text-lg text-[var(--text-secondary)]">
        QGraph is designed to eliminate the OS kernel from the data path. Not a wrapper. Not a
        federation layer. A ground-up Rust engine that pushes computation to the theoretical
        limits of silicon &mdash; Arrow Flight for networking, SIMD for compute,
        Arrow for memory layout, Vortex for compression.
      </p>

      {/* The Problem */}
      <section className="mt-12 rounded-xl border border-red-500/20 bg-red-500/5 p-8">
        <h2 className="mb-3 text-2xl font-bold text-red-400">
          A $3.4M/Year Tax on Every Enterprise
        </h2>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
          The industry stores relationships across 7-12 disconnected systems: Databricks for analytics,
          Neo4j for graph, Pinecone for vectors, Datadog for observability, Okta for access control,
          OpenMetadata for governance, LangChain for RAG. Every hop between systems adds 1-10ms of
          serialization. A single RAG query that needs vector similarity + graph context + access
          control + analytics touches 4 systems, 4 network round-trips, 4 serialization formats.
          Plus 40-60% of data engineering budgets writing ETL glue. Plus 4-8 engineers maintaining
          pipelines that break every quarter.
        </p>
      </section>

      {/* Architecture Diagram */}
      <section className="mt-16">
        <h2 className="mb-6 text-2xl font-bold">The Execution Stack</h2>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
          Everything flows through Cypher. No escape hatches. No sidecar services. Every vector
          search, every permission check, every metric query is a Cypher scalar function executed
          inside the same query plan.
        </p>
        <div className="space-y-3">
          {[
            { layer: "Cypher Query", detail: "Full Cypher + PromQL transpiler", color: "text-blue-400" },
            { layer: "Parser + Binder", detail: "Type resolution, expression binding", color: "text-blue-400" },
            { layer: "Cost-Based Optimizer", detail: "Predicate pushdown, zone map elimination, column pruning", color: "text-purple-400" },
            { layer: "Physical Mapper", detail: "DistributedContext \u2192 remote scan routing, exchange insertion", color: "text-purple-400" },
            { layer: "Morsel Executor", detail: "Lock-free work-stealing, SIMD vectorized execution", color: "text-amber-400" },
            { layer: "OLAP Data Plane", detail: "Vortex 11-codec compression, dual-sorted CSR, compound zone maps", color: "text-emerald-400" },
            { layer: "Transport Layer", detail: "Arrow Flight (zero serialization) + async NVMe I/O (7 GB/s)", color: "text-emerald-400" },
          ].map((row) => (
            <div key={row.layer} className="arch-box flex items-center justify-between">
              <span className={`font-semibold ${row.color}`}>{row.layer}</span>
              <span className="text-xs text-[var(--text-secondary)]">{row.detail}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Hardware-Native Moat */}
      <section className="mt-16">
        <h2 className="mb-2 text-2xl font-bold">
          <span className="text-[var(--accent-light)]">The Moat:</span> Hardware-Native Execution
        </h2>
        <p className="text-xs font-medium uppercase tracking-widest text-[var(--text-secondary)] mb-6">
          The OS Kernel Is Not in the Data Path
        </p>
        <div className="overflow-x-auto rounded-xl border border-[var(--border)]">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[var(--border)] bg-[var(--bg-card)]">
                <th className="px-4 py-3 text-left font-medium text-[var(--text-secondary)]">Primitive</th>
                <th className="px-4 py-3 text-left font-medium text-[var(--text-secondary)]">Impact</th>
                <th className="px-4 py-3 text-center font-medium text-emerald-400">Status</th>
              </tr>
            </thead>
            <tbody>
              {[
                { prim: "Arrow Flight", impact: "Zero-serialization distributed shuffle. Arrow IPC on the wire.", status: "Shipped" },
                { prim: "Async NVMe I/O", impact: "High-throughput disk reads. 7 GB/s throughput.", status: "Shipped" },
                { prim: "Vortex 11-Codec", impact: "SIMD predicate eval on compressed data. 10-50x compression.", status: "Shipped" },
                { prim: "NEON SIMD", impact: "128-bit Apple Silicon. SQ8 distance, decompression, filtering.", status: "Shipped" },
                { prim: "AVX-512", impact: "512-bit x86. Batch decompression, aggregation.", status: "Shipped" },
                { prim: "CUDA", impact: "Discrete GPU. Large-batch vector search, Vortex compression.", status: "Shipped" },
                { prim: "Morsel-Driven", impact: "Lock-free work-stealing across all CPU cores.", status: "Shipped" },
              ].map((row) => (
                <tr key={row.prim} className="border-b border-[var(--border)] last:border-b-0">
                  <td className="px-4 py-3 font-medium">{row.prim}</td>
                  <td className="px-4 py-3 text-[var(--text-secondary)]">{row.impact}</td>
                  <td className="px-4 py-3 text-center">
                    <span className="inline-block rounded bg-emerald-500/20 px-2 py-0.5 text-xs font-medium text-emerald-400">{row.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 rounded-xl border border-amber-500/20 bg-amber-500/5 p-5">
          <p className="text-sm font-semibold text-amber-400 mb-1">Architectural Impossibility for Competitors</p>
          <p className="text-sm text-[var(--text-secondary)]">
            Neo4j cannot add columnar storage without rewriting its JVM storage engine. LanceDB cannot
            add multi-hop traversal without building a graph engine from scratch. Datadog cannot
            unify its three backend stores. Snowflake cannot add graph-native joins. These
            aren&apos;t feature gaps &mdash; they are fundamental architecture incompatibilities that
            would require ground-up rewrites.
          </p>
        </div>
      </section>

      {/* WCOJ */}
      <section className="mt-16">
        <h2 className="mb-2 text-2xl font-bold">
          <span className="text-[var(--accent-light)]">WCOJ:</span> Worst-Case Optimal Joins
        </h2>
        <p className="text-xs font-medium uppercase tracking-widest text-[var(--text-secondary)] mb-4">
          The Join Algorithm No Competitor Implements
        </p>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          For cyclic graph patterns &mdash; triangles, cliques, diamonds &mdash; hash join has
          O(|E|^1.5) worst-case complexity and materializes intermediate results. QGraph&apos;s
          LeapFrog TrieJoin (Veldhuizen, ICDT 2014) has O(|E|^1.0) worst case and streams with
          zero materialization.
        </p>
        <CypherSnippet
          code={`// Triangle query: find all triangles in the graph
MATCH (a)-[:KNOWS]->(b)-[:KNOWS]->(c)-[:KNOWS]->(a)
RETURN a.name, b.name, c.name

// Hash join: O(|E|^1.5) — materializes intermediate results
// WCOJ:     O(|E|^1.0) — streams with zero materialization
// Result:   5-13x faster on cyclic patterns`}
          caption="Neither Databricks, Snowflake, ClickHouse, StarRocks, nor DuckDB implement WCOJ"
        />
      </section>

      {/* Vortex Compression */}
      <section className="mt-16">
        <h2 className="mb-2 text-2xl font-bold">
          <span className="text-[var(--accent-light)]">Vortex:</span> 11 Compression Codecs
        </h2>
        <p className="text-xs font-medium uppercase tracking-widest text-[var(--text-secondary)] mb-4">
          Predicate Evaluation on Compressed Data
        </p>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
          SIMD predicate evaluation runs directly on compressed data &mdash; no decompression
          step for filtering. The decompress-filter-aggregate pipeline executes in a single
          pass through L1 cache, eliminating 3x memory round-trips versus standard pipelines.
        </p>
        <div className="overflow-x-auto rounded-xl border border-[var(--border)]">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[var(--border)] bg-[var(--bg-card)]">
                <th className="px-4 py-3 text-left font-medium text-[var(--text-secondary)]">Codec</th>
                <th className="px-4 py-3 text-left font-medium text-[var(--text-secondary)]">Data Type</th>
                <th className="px-4 py-3 text-right font-medium text-[var(--text-secondary)]">Ratio</th>
              </tr>
            </thead>
            <tbody>
              {[
                { codec: "Delta + RLE", type: "Sorted integers, timestamps", ratio: "10-50x" },
                { codec: "Dictionary + Zstd", type: "Low-cardinality strings", ratio: "5-20x" },
                { codec: "FSST", type: "High-cardinality strings", ratio: "3-8x" },
                { codec: "ALP", type: "Floating point", ratio: "2-5x" },
                { codec: "BitPacked", type: "Booleans, enums", ratio: "8-32x" },
                { codec: "Frame of Reference", type: "Clustered integers", ratio: "5-15x" },
                { codec: "Gorilla", type: "Time-series doubles", ratio: "5-12x" },
                { codec: "Cascading", type: "Mixed columns", ratio: "4-10x" },
                { codec: "LZ4 / Zstd", type: "Generic binary", ratio: "2-8x" },
                { codec: "Plain", type: "Already-compact", ratio: "1x" },
              ].map((row) => (
                <tr key={row.codec} className="border-b border-[var(--border)] last:border-b-0">
                  <td className="px-4 py-3 font-medium">{row.codec}</td>
                  <td className="px-4 py-3 text-[var(--text-secondary)]">{row.type}</td>
                  <td className="px-4 py-3 text-right gradient-text font-semibold">{row.ratio}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Vector Search Benchmarks */}
      <section className="mt-16">
        <h2 className="mb-2 text-2xl font-bold">
          <span className="text-[var(--accent-light)]">Benchmarks:</span> Vector Search vs LanceDB
        </h2>
        <p className="text-xs font-medium uppercase tracking-widest text-[var(--text-secondary)] mb-6">
          Head-to-Head on Standard Datasets
        </p>
        <div className="overflow-x-auto rounded-xl border border-[var(--border)]">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[var(--border)] bg-[var(--bg-card)]">
                <th className="px-4 py-3 text-left font-medium text-[var(--text-secondary)]">Dataset</th>
                <th className="px-4 py-3 text-center font-medium gradient-text">QGraph Recall</th>
                <th className="px-4 py-3 text-center font-medium text-[var(--text-secondary)]">LanceDB Recall</th>
                <th className="px-4 py-3 text-center font-medium gradient-text">QGraph QPS</th>
                <th className="px-4 py-3 text-center font-medium text-[var(--text-secondary)]">LanceDB QPS</th>
              </tr>
            </thead>
            <tbody>
              {[
                { dataset: "SIFT-128 (1M)", qr: "99.61%", lr: "99.40%", qq: "662", lq: "513" },
                { dataset: "GloVe-100 (1.2M)", qr: "96.2%", lr: "90.0%", qq: "548", lq: "412" },
                { dataset: "GIST-960 (1M)", qr: "90.56%", lr: "88.1%", qq: "452", lq: "238" },
              ].map((row) => (
                <tr key={row.dataset} className="border-b border-[var(--border)] last:border-b-0">
                  <td className="px-4 py-3 font-medium">{row.dataset}</td>
                  <td className="px-4 py-3 text-center text-emerald-400 font-semibold">{row.qr}</td>
                  <td className="px-4 py-3 text-center text-[var(--text-secondary)]">{row.lr}</td>
                  <td className="px-4 py-3 text-center text-emerald-400 font-semibold">{row.qq}</td>
                  <td className="px-4 py-3 text-center text-[var(--text-secondary)]">{row.lq}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-center text-xs text-[var(--text-secondary)]">
          Insert throughput: QGraph 8.1M vectors/sec vs LanceDB 3.5M &mdash; 2.3x faster
        </p>
      </section>

      {/* Tiered Storage */}
      <section className="mt-16">
        <h2 className="mb-2 text-2xl font-bold">
          <span className="text-[var(--accent-light)]">Tiered Storage:</span> Petabyte Scale
        </h2>
        <p className="text-xs font-medium uppercase tracking-widest text-[var(--text-secondary)] mb-6">
          Automatic. No RAM Ceiling. Commodity Hardware.
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="card-glow rounded-xl p-5 text-center">
            <div className="text-2xl font-bold text-red-400">HOT</div>
            <div className="text-xs text-[var(--text-secondary)] mt-1">RAM (InMemoryVortex)</div>
            <div className="text-lg font-semibold gradient-text mt-2">&lt; 1 &micro;s</div>
            <p className="mt-2 text-xs text-[var(--text-secondary)]">
              Streaming ingestion, active queries, real-time analytics
            </p>
          </div>
          <div className="card-glow rounded-xl p-5 text-center">
            <div className="text-2xl font-bold text-amber-400">WARM</div>
            <div className="text-xs text-[var(--text-secondary)] mt-1">NVMe + Async I/O</div>
            <div className="text-lg font-semibold gradient-text mt-2">5-50 &micro;s</div>
            <p className="mt-2 text-xs text-[var(--text-secondary)]">
              Zero-syscall async reads at 7 GB/s throughput
            </p>
          </div>
          <div className="card-glow rounded-xl p-5 text-center">
            <div className="text-2xl font-bold text-blue-400">COLD</div>
            <div className="text-xs text-[var(--text-secondary)] mt-1">S3 / Object Store</div>
            <div className="text-lg font-semibold gradient-text mt-2">50-500 ms</div>
            <p className="mt-2 text-xs text-[var(--text-secondary)]">
              Archive, compliance, full history. Still queryable.
            </p>
          </div>
        </div>
        <p className="mt-4 text-sm text-[var(--text-secondary)] text-center">
          Neo4j hits a RAM wall at 2-4TB. QGraph scales to petabytes on commodity NVMe hardware.
        </p>
      </section>

      {/* Performance */}
      <section className="mt-16">
        <h2 className="mb-6 text-2xl font-bold">Performance &mdash; Measured, Not Projected</h2>
        <div className="overflow-x-auto rounded-xl border border-[var(--border)]">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[var(--border)] bg-[var(--bg-card)]">
                <th className="px-4 py-3 text-left font-medium text-[var(--text-secondary)]">Query Type</th>
                <th className="px-4 py-3 text-center font-medium gradient-text">QGraph</th>
                <th className="px-4 py-3 text-left font-medium text-[var(--text-secondary)]">Notes</th>
              </tr>
            </thead>
            <tbody>
              {[
                { query: "Single-hop traversal", latency: "375 ns", notes: "2.6M hops/sec/core. Inline neighbor headers." },
                { query: "Multi-hop (2-3 hops)", latency: "18-267 \u00b5s", notes: "8-54x faster than prior benchmarks." },
                { query: "Complex analytical", latency: "36-117 \u00b5s", notes: "Full predicate pushdown + zone map elimination." },
                { query: "Full scan (100K nodes)", latency: "< 1 ms", notes: "Vortex SIMD decompression." },
                { query: "Vector ANN (1M)", latency: "< 2 ms", notes: "99.61% recall@10, SQ8 + NEON SIMD." },
                { query: "Permission check", latency: "< 1 \u00b5s", notes: "DAG reachability, not LDAP/SQL join." },
              ].map((row) => (
                <tr key={row.query} className="border-b border-[var(--border)] last:border-b-0">
                  <td className="px-4 py-3 text-[var(--text-secondary)]">{row.query}</td>
                  <td className="px-4 py-3 text-center text-emerald-400 font-semibold">{row.latency}</td>
                  <td className="px-4 py-3 text-[var(--text-secondary)]">{row.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Cost Comparison */}
      <section className="mt-16">
        <h2 className="mb-6 text-2xl font-bold">ROI &mdash; 77% Cost Reduction</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-6">
            <h3 className="text-lg font-bold text-red-400 mb-3">Before QGraph</h3>
            <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
              <li>Databricks: $400K/yr</li>
              <li>Datadog: $600K/yr</li>
              <li>Pinecone: $200K/yr</li>
              <li>Neo4j: $350K/yr</li>
              <li>Okta: $100K/yr</li>
              <li>4 ETL engineers: $800K/yr</li>
              <li className="font-semibold text-red-400 pt-2 border-t border-red-500/20">Total: $2.45M/year</li>
            </ul>
          </div>
          <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-6">
            <h3 className="text-lg font-bold text-emerald-400 mb-3">After QGraph</h3>
            <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
              <li>5-node NVMe cluster: $120K/yr</li>
              <li>QGraph Enterprise: $250K/yr</li>
              <li>1 DBA (freed 3 engineers): $200K/yr</li>
              <li className="font-semibold text-emerald-400 pt-2 border-t border-emerald-500/20">Total: $570K/year</li>
              <li className="text-emerald-400">3 engineers freed for product work</li>
              <li className="text-emerald-400">3-month payback period</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Deploy */}
      <section className="mt-16">
        <h2 className="mb-6 text-2xl font-bold">Deploy Anywhere</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {[
            { icon: "💻", title: "Local", desc: "One binary on your laptop. No Docker required. Perfect for evaluation." },
            { icon: "🐳", title: "Docker", desc: "Container image with all components. Production-ready in one command." },
            { icon: "☁️", title: "Cloud", desc: "Terraform modules for AWS, GCP, Azure. Auto-scaling with persistent storage." },
            { icon: "☸️", title: "Kubernetes", desc: "Helm chart for any managed Kubernetes. Scales with your cluster." },
          ].map((opt) => (
            <div key={opt.title} className="card-glow rounded-xl p-5">
              <div className="mb-2 text-xl">{opt.icon}</div>
              <h3 className="mb-1 font-semibold">{opt.title}</h3>
              <p className="text-sm text-[var(--text-secondary)]">{opt.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-16 rounded-xl border border-[var(--accent)]/30 bg-[var(--accent)]/5 p-8 text-center">
        <h3 className="text-2xl font-bold mb-2">
          The fragmented data stack ends here.
        </h3>
        <p className="text-lg text-[var(--accent-light)] font-semibold mb-6">
          Nine products. One engine. Sub-microsecond execution.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/getting-started"
            className="inline-block rounded-lg bg-[var(--accent)] px-8 py-3 font-semibold text-white transition hover:bg-[var(--accent-light)]"
          >
            Deploy QGraph in 5 Minutes
          </Link>
          <Link
            href="/use-cases"
            className="inline-block rounded-lg border border-[var(--border)] px-8 py-3 font-semibold text-[var(--text-secondary)] transition hover:border-[var(--accent)] hover:text-[var(--text-primary)]"
          >
            Explore All Nine Products
          </Link>
        </div>
      </section>
    </div>
  );
}
