import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg-secondary)]">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-3 text-lg font-bold gradient-text">QGraph</h3>
            <p className="text-sm text-[var(--text-secondary)]">
              The graph engine for everything. One unified platform for graphs,
              vectors, time-series, spatial data, and AI.
            </p>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-[var(--text-secondary)]">
              Platform
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/architecture" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)]">Architecture</Link></li>
              <li><Link href="/use-cases" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)]">Use Cases</Link></li>
              <li><Link href="/getting-started" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)]">Getting Started</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-[var(--text-secondary)]">
              Solutions
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/use-cases/observability" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)]">Observability</Link></li>
              <li><Link href="/use-cases/vector-search" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)]">Vector Search</Link></li>
              <li><Link href="/use-cases/rag" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)]">RAG / AI</Link></li>
              <li><Link href="/use-cases/geospatial" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)]">Geospatial</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-[var(--border)] pt-6 text-center text-xs text-[var(--text-secondary)]">
          &copy; {new Date().getFullYear()} QGraph. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
