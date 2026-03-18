import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)]" style={{ background: "var(--surface)" }}>
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-3" style={{ fontFamily: "var(--heading-font)", fontSize: "22px", letterSpacing: "2px", color: "var(--accent)" }}>QGRAPH</h3>
            <p className="text-sm" style={{ color: "var(--muted)" }}>
              The safe, secure, deterministic operating system for enterprise AI. Nine products. One engine.
            </p>
          </div>
          <div>
            <h4 className="mb-3" style={{ fontFamily: "var(--mono)", fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase", color: "var(--muted)" }}>
              Products
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/use-cases/htap" style={{ color: "var(--muted)" }} className="hover:text-[var(--text)]">Graph OLAP Engine</Link></li>
              <li><Link href="/use-cases/vector-search" style={{ color: "var(--muted)" }} className="hover:text-[var(--text)]">Vector Search</Link></li>
              <li><Link href="/use-cases/rag" style={{ color: "var(--muted)" }} className="hover:text-[var(--text)]">Structure-Preserving RAG</Link></li>
              <li><Link href="/use-cases/observability" style={{ color: "var(--muted)" }} className="hover:text-[var(--text)]">GraphDog Observability</Link></li>
              <li><Link href="/use-cases/rbac" style={{ color: "var(--muted)" }} className="hover:text-[var(--text)]">Enterprise RBAC</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3" style={{ fontFamily: "var(--mono)", fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase", color: "var(--muted)" }}>
              Platform
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/architecture" style={{ color: "var(--muted)" }} className="hover:text-[var(--text)]">Architecture</Link></li>
              <li><Link href="/use-cases" style={{ color: "var(--muted)" }} className="hover:text-[var(--text)]">Use Cases</Link></li>
              <li><Link href="/compare" style={{ color: "var(--muted)" }} className="hover:text-[var(--text)]">Competitor Landscape</Link></li>
              <li><Link href="/getting-started" style={{ color: "var(--muted)" }} className="hover:text-[var(--text)]">Getting Started</Link></li>
              <li><Link href="/pricing" style={{ color: "var(--muted)" }} className="hover:text-[var(--text)]">Pricing</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3" style={{ fontFamily: "var(--mono)", fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase", color: "var(--muted)" }}>
              Compare
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/compare/neo4j" style={{ color: "var(--muted)" }} className="hover:text-[var(--text)]">vs Neo4j</Link></li>
              <li><Link href="/compare/pinecone" style={{ color: "var(--muted)" }} className="hover:text-[var(--text)]">vs Pinecone</Link></li>
              <li><Link href="/compare/datadog" style={{ color: "var(--muted)" }} className="hover:text-[var(--text)]">vs Datadog</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-[var(--border)] pt-6 text-center text-xs" style={{ color: "var(--muted)" }}>
          &copy; {new Date().getFullYear()} QGraph. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
