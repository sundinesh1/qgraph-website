import Link from "next/link";

const competitors = [
  {
    name: "Neo4j",
    href: "/compare/neo4j",
    category: "Java Monolith",
    engine: "Java / JVM",
    memory: "JVM Garbage Collection",
    traversal: "Nested Loop Joins",
    vector: "Bolted-on (Lucene)",
    olap: "Very Slow",
    security: "Software-level",
    limitation: "Neo4j runs on the Java Virtual Machine, which means it suffers from non-deterministic Garbage Collection pauses during large analytical queries. To address AI workloads, they added a Lucene-based vector index — but it operates in a separate engine phase from graph traversals. The two never truly unify. Graph queries and vector searches remain disjointed operations that the application layer must stitch together.",
    advantage: "QGraph is written in Rust with deterministic memory control and zero GC pauses. Where Neo4j uses left-deep nested loop joins (which stall on complex patterns), QGraph uses Worst-Case Optimal Joins (WCOJ), executing complex multi-hop subgraphs in O(N^1.5) time — orders of magnitude faster on the same hardware.",
  },
  {
    name: "TigerGraph",
    href: "#tigergraph",
    category: "Heavyweight Analytics",
    engine: "C++ (MPP)",
    memory: "RAM-Dependent",
    traversal: "GSQL Compilation",
    vector: "None / External",
    olap: "Poor",
    security: "Software-level",
    limitation: "TigerGraph requires you to write queries in GSQL, which it then compiles into C++ before executing. This compilation step eliminates real-time, ad-hoc query velocity — every new analytical question requires a compile-deploy cycle. More critically, TigerGraph is extremely RAM-hungry. If your graph exceeds available memory, performance degrades dramatically.",
    advantage: "QGraph executes dynamic Cypher queries instantly via vectorized traversal kernels — no C++ compilation step. More importantly, QGraph uses tiered storage that streams data directly from NVMe into the compute engine. We process graphs far larger than RAM at bare-metal speeds without requiring massive, expensive memory clusters.",
  },
  {
    name: "StarRocks",
    href: "#starrocks",
    category: "Relational Analytics",
    engine: "C++ (MPP)",
    memory: "OS Cache",
    traversal: "SQL JOINs",
    vector: "None / External",
    olap: "Excellent",
    security: "RBAC Roles",
    limitation: "StarRocks is a phenomenal columnar OLAP engine for standard analytics. But it is entirely relational. If you need a 4-hop security blast-radius calculation or want to trace an AI agent's execution path, StarRocks must execute massive SQL JOINs. On highly connected data, intermediate tables grow exponentially — often causing out-of-memory failures on the exact queries that matter most.",
    advantage: "QGraph delivers StarRocks-level OLAP speed without the relational JOIN penalty. Columnar storage handles standard analytics, but the moment you need to traverse relationships, the engine seamlessly switches to CSR (Compressed Sparse Row) adjacency lists — navigating relationships via pointer arithmetic in L1 cache, not SQL JOINs.",
  },
  {
    name: "FalkorDB",
    href: "#falkordb",
    category: "In-Memory Graph",
    engine: "C (Redis)",
    memory: "RAM-Only",
    traversal: "GraphBLAS (SpMV)",
    vector: "Redis Extension",
    olap: "Poor",
    security: "Software-level",
    limitation: "FalkorDB (formerly RedisGraph) uses GraphBLAS, translating graph queries into sparse matrix multiplication. This is elegant for global graph algorithms like PageRank, but wildly inefficient for localized, deep path traversals — the exact queries enterprises need most (e.g., 'find this user's 5-hop access path'). Because it relies on Redis, it is strictly an in-memory database. If you exhaust RAM, the database becomes unavailable.",
    advantage: "QGraph scales beyond RAM using tiered storage and direct NVMe streaming. For localized traversals, our event-driven BFS engine evaluates only the exact edges needed — O(affected) — whereas FalkorDB multiplies entire sparse matrices regardless of query locality.",
  },
  {
    name: "Aerospike Graph",
    href: "#aerospike",
    category: "KV Retrofit",
    engine: "Java + KV",
    memory: "JVM / Network",
    traversal: "KV Lookups",
    vector: "External",
    olap: "Average",
    security: "Software-level",
    limitation: "Aerospike Graph layers the Apache TinkerPop (Gremlin) Java compute engine on top of their Key-Value storage. Every edge traversal requires the compute layer to translate a graph hop into a network-bound Key-Value lookup. The translation overhead compounds with every hop — a 5-hop traversal means 5 network round-trips through the KV layer.",
    advantage: "QGraph stores relationships natively in contiguous memory. When the engine reads a node, the CPU prefetcher has already loaded its edges into cache. No KV mapping. No network hops per traversal step. The difference is microseconds vs. milliseconds — per hop.",
  },
  {
    name: "Apache AGE",
    href: "#age",
    category: "Relational Retrofit",
    engine: "PostgreSQL (C)",
    memory: "OS Cache",
    traversal: "SQL JOINs",
    vector: "External (pgvector)",
    olap: "Slow",
    security: "Postgres RLS",
    limitation: "Apache AGE is a PostgreSQL extension that lets you write Cypher. Under the hood, it compiles Cypher into nested SQL JOIN operations. This means every graph traversal pays the full cost of relational query planning and execution. For deep traversals on connected data, the SQL planner generates execution plans that are orders of magnitude slower than native graph engines.",
    advantage: "QGraph does not translate graph queries to relational operations. We use SIMD-accelerated bitmap operations on hardware registers, executing deep traversals before AGE finishes building its SQL execution plan. Native graph storage with native graph execution — no translation layer.",
  },
  {
    name: "Alibaba GDB",
    href: "#alibaba",
    category: "Cloud Silo",
    engine: "Cloud Managed",
    memory: "Standard VM",
    traversal: "Average",
    vector: "DashVector (separate)",
    olap: "MaxCompute (separate)",
    security: "Cloud IAM",
    limitation: "Alibaba GDB is a managed cloud OLTP graph. To add AI capabilities, you must export your graph to DashVector. To run analytics, you must export to MaxCompute. This creates three separate databases, three separate bills, and massive ETL pipelines that must be maintained and monitored. Data freshness degrades with every export cycle.",
    advantage: "QGraph is a true unified engine. Vector search, graph traversal, and columnar analytics operate on the same data in the same zero-copy memory space. Zero ETL. Zero data movement. Zero extra vendor bills. Your data stays fresh because there is nothing to synchronize.",
  },
  {
    name: "AllegroGraph",
    href: "#allegrograph",
    category: "Semantic Store",
    engine: "LISP / Java",
    memory: "Standard",
    traversal: "SPARQL",
    vector: "None",
    olap: "None",
    security: "Software Inference",
    limitation: "AllegroGraph is an RDF/SPARQL triple-store focused on semantic ontologies. It excels at knowledge representation but was never designed for high-throughput vector math, continuous time-series ingestion, or hardware-accelerated operations. Its LISP/Java architecture cannot leverage modern hardware accelerators.",
    advantage: "QGraph enforces compliance via hardware-native RBAC bitmasks at the storage layer, while AllegroGraph relies on slower software-level logical inferencing. QGraph handles ontologies alongside vector search, OLAP analytics, and time-series ingestion — all in one engine, all at bare-metal speed.",
  },
  {
    name: "ArcadeDB",
    href: "#arcadedb",
    category: "Java Multi-Model",
    engine: "Java / JVM",
    memory: "JVM Heap",
    traversal: "Mixed",
    vector: "None",
    olap: "Average",
    security: "Software-level",
    limitation: "ArcadeDB (successor to OrientDB) is a Java-based multi-model database. Like all JVM databases, it is bound by Garbage Collection pauses and cannot leverage modern hardware accelerators such as GPU compute or AVX-512 SIMD instructions. Its multi-model approach spreads engineering effort across many paradigms without excelling at any.",
    advantage: "QGraph is written in unsafe-free Rust with direct hardware access. We bypass the OS page cache and the JVM heap entirely, operating in nanoseconds where JVM-based engines operate in milliseconds. Hardware-parallel execution via SIMD and GPU acceleration is native, not an afterthought.",
  },
];

const matrixHeaders = [
  "Core Engine",
  "Memory Control",
  "Graph Traversal",
  "Vector DB",
  "Time-Series / OLAP",
  "Security / RBAC",
];

const matrixData = [
  {
    name: "QGraph",
    highlight: true,
    values: [
      "Rust (Bare-Metal)",
      "Tiered Storage + Direct NVMe",
      "CSR + WCOJ",
      "Native (Unified)",
      "Native Columnar",
      "Hardware-Native Bitmask",
    ],
  },
  {
    name: "Neo4j",
    highlight: false,
    values: ["Java / JVM", "JVM Garbage Collection", "Nested Loop Joins", "Bolted-on (Lucene)", "Very Slow", "Software-level"],
  },
  {
    name: "TigerGraph",
    highlight: false,
    values: ["C++ (MPP)", "RAM-Dependent", "GSQL Compilation", "None / External", "Poor", "Software-level"],
  },
  {
    name: "StarRocks",
    highlight: false,
    values: ["C++ (MPP)", "OS Cache", "SQL JOINs", "None / External", "Excellent", "RBAC Roles"],
  },
  {
    name: "FalkorDB",
    highlight: false,
    values: ["C (Redis)", "RAM-Only", "GraphBLAS (SpMV)", "Redis Extension", "Poor", "Software-level"],
  },
  {
    name: "Aerospike",
    highlight: false,
    values: ["Java + KV", "JVM / Network", "KV Lookups", "External", "Average", "Software-level"],
  },
  {
    name: "Apache AGE",
    highlight: false,
    values: ["PostgreSQL (C)", "OS Cache", "SQL JOINs", "External (pgvector)", "Slow", "Postgres RLS"],
  },
  {
    name: "Alibaba GDB",
    highlight: false,
    values: ["Cloud Managed", "Standard VM", "Average", "DashVector (separate)", "MaxCompute (separate)", "Cloud IAM"],
  },
];

const categories = [
  {
    name: "Java Monoliths",
    color: "red",
    desc: "Bound by Garbage Collection pauses. Non-deterministic latency spikes during analytical queries. Cannot leverage modern hardware accelerators.",
    members: "Neo4j, ArcadeDB, AllegroGraph",
  },
  {
    name: "Relational / KV Retrofits",
    color: "orange",
    desc: "Graph operations translated into SQL JOINs or Key-Value lookups. Every hop pays a translation tax. Deep traversals on connected data cause exponential intermediate state.",
    members: "Apache AGE, Aerospike Graph, StarRocks, Alibaba GDB",
  },
  {
    name: "Niche Analytics Engines",
    color: "yellow",
    desc: "Fast at one thing, but isolated from vector search and time-series data. Require separate systems for AI and observability workloads.",
    members: "TigerGraph, FalkorDB",
  },
];

export default function CompetitorLandscapePage() {
  return (
    <div className="mx-auto max-w-5xl px-6 pt-28 pb-20">
      <div className="mb-2 inline-block rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/10 px-3 py-1 text-xs font-medium text-[var(--accent-light)]">
        Competitive Landscape
      </div>
      <h1 className="text-4xl font-bold">
        How QGraph Compares to <span className="gradient-text">Every Major Player</span>
      </h1>
      <p className="mt-3 text-lg text-[var(--text-secondary)]">
        The database market is divided into three categories — each with fundamental
        architectural constraints that no amount of feature releases can fix. QGraph
        was designed from the ground up to avoid all of them.
      </p>

      {/* Three Categories */}
      <section className="mt-12">
        <h2 className="mb-6 text-2xl font-bold">Three Categories of Architectural Constraint</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {categories.map((cat) => (
            <div key={cat.name} className="rounded-xl border border-red-500/20 bg-red-500/5 p-5">
              <h3 className="mb-2 font-semibold text-red-400">{cat.name}</h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">{cat.desc}</p>
              <p className="text-xs text-[var(--text-secondary)]/70">
                <span className="font-medium">Includes:</span> {cat.members}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-5">
          <h3 className="mb-2 font-semibold text-emerald-400">QGraph: A Different Category Entirely</h3>
          <p className="text-sm text-[var(--text-secondary)]">
            QGraph is not a database application. It is a bare-metal, hardware-accelerated
            engine written in unsafe-free Rust. It unifies graph topology (CSR), columnar
            analytics, and vector math into a single zero-copy memory space — bypassing the
            architectural constraints that limit every other player in the market.
          </p>
        </div>
      </section>

      {/* Comparison Matrix */}
      <section className="mt-16">
        <h2 className="mb-6 text-2xl font-bold">Architecture Comparison Matrix</h2>
        <div className="overflow-x-auto rounded-xl border border-[var(--border)]">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[var(--border)] bg-[var(--bg-card)]">
                <th className="px-3 py-3 text-left font-medium text-[var(--text-secondary)] whitespace-nowrap">Engine</th>
                {matrixHeaders.map((h) => (
                  <th key={h} className="px-3 py-3 text-left font-medium text-[var(--text-secondary)] whitespace-nowrap">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {matrixData.map((row) => (
                <tr key={row.name} className={`border-b border-[var(--border)] last:border-b-0 ${row.highlight ? "bg-[var(--accent)]/5" : ""}`}>
                  <td className={`px-3 py-3 font-semibold whitespace-nowrap ${row.highlight ? "gradient-text" : "text-[var(--text-secondary)]"}`}>
                    {row.name}
                  </td>
                  {row.values.map((v, i) => (
                    <td key={i} className={`px-3 py-3 whitespace-nowrap ${row.highlight ? "text-emerald-400" : "text-[var(--text-secondary)]"}`}>
                      {v}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Individual Competitor Deep Dives */}
      <section className="mt-16">
        <h2 className="mb-8 text-2xl font-bold">Detailed Comparison by Competitor</h2>
        <div className="space-y-8">
          {competitors.map((c) => (
            <div key={c.name} id={c.name.toLowerCase().replace(/\s+/g, "-")} className="card-glow rounded-xl p-6">
              <div className="flex flex-wrap items-baseline gap-3 mb-4">
                <h3 className="text-xl font-bold">{c.name}</h3>
                <span className="rounded-full border border-[var(--border)] px-2 py-0.5 text-xs text-[var(--text-secondary)]">
                  {c.category}
                </span>
                {c.href.startsWith("/") && (
                  <Link href={c.href} className="text-xs text-[var(--accent-light)] hover:underline">
                    Full comparison →
                  </Link>
                )}
              </div>

              <div className="grid gap-4 md:grid-cols-5 mb-4">
                <div className="text-center">
                  <p className="text-xs text-[var(--text-secondary)] mb-1">Engine</p>
                  <p className="text-xs font-medium">{c.engine}</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-[var(--text-secondary)] mb-1">Memory</p>
                  <p className="text-xs font-medium">{c.memory}</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-[var(--text-secondary)] mb-1">Traversal</p>
                  <p className="text-xs font-medium">{c.traversal}</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-[var(--text-secondary)] mb-1">Vector</p>
                  <p className="text-xs font-medium">{c.vector}</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-[var(--text-secondary)] mb-1">OLAP</p>
                  <p className="text-xs font-medium">{c.olap}</p>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-lg border border-red-500/15 bg-red-500/5 p-4">
                  <h4 className="mb-2 text-sm font-semibold text-red-400">Key Limitation</h4>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{c.limitation}</p>
                </div>
                <div className="rounded-lg border border-emerald-500/15 bg-emerald-500/5 p-4">
                  <h4 className="mb-2 text-sm font-semibold text-emerald-400">QGraph&apos;s Advantage</h4>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{c.advantage}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* The Summary */}
      <section className="mt-16 rounded-xl border border-[var(--accent)]/30 bg-[var(--accent)]/5 p-8">
        <h2 className="mb-4 text-2xl font-bold text-center">The Architecture Gap</h2>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed max-w-3xl mx-auto text-center mb-6">
          Neo4j is constrained by Java Garbage Collection. StarRocks is fast for tables but
          cannot handle deep graph traversals. TigerGraph requires massive RAM clusters.
          FalkorDB becomes unavailable when data exceeds memory. And every &ldquo;multi-model&rdquo;
          cloud offering is actually three separate systems with ETL pipelines between them.
        </p>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed max-w-3xl mx-auto text-center mb-8">
          QGraph was not built on legacy architectural assumptions. By storing graph, vector,
          and columnar data in a single zero-copy memory space — and leveraging bare-metal
          hardware acceleration — QGraph delivers the analytical speed of StarRocks, the deep
          relationship traversal of Neo4j, and the AI capabilities of Pinecone.
          All in one binary. All on standard hardware.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/getting-started"
            className="inline-block rounded-lg bg-[var(--accent)] px-8 py-3 font-semibold text-white transition hover:bg-[var(--accent-light)]"
          >
            Deploy QGraph in 5 Minutes
          </Link>
          <Link
            href="/architecture"
            className="inline-block rounded-lg border border-[var(--border)] px-8 py-3 font-semibold text-[var(--text-secondary)] transition hover:border-[var(--accent)] hover:text-[var(--text-primary)]"
          >
            Read the Architecture
          </Link>
        </div>
      </section>
    </div>
  );
}
