"use client";

import Link from "next/link";
import { useState } from "react";

const solutions = [
  { href: "/use-cases/htap", label: "Graph Database" },
  { href: "/use-cases/vector-search", label: "Vector Search" },
  { href: "/use-cases/rag", label: "GraphRAG" },
  { href: "/use-cases/observability", label: "Observability" },
  { href: "/use-cases/security", label: "Security & GRC" },
  { href: "/use-cases/ml-ai", label: "ML Training & Serving" },
  { href: "/use-cases/governance", label: "Data Governance" },
  { href: "/use-cases/rbac", label: "Access Control" },
  { href: "/use-cases/geospatial", label: "Geospatial" },
];

const comparisons = [
  { href: "/compare/neo4j", label: "vs Neo4j" },
  { href: "/compare/pinecone", label: "vs Pinecone" },
  { href: "/compare/datadog", label: "vs Datadog" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [compareOpen, setCompareOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--border)] bg-[var(--bg-primary)]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold tracking-tight">
          <span className="gradient-text">QGraph</span>
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-6 md:flex">
          {/* Solutions dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setSolutionsOpen(true)}
            onMouseLeave={() => setSolutionsOpen(false)}
          >
            <Link
              href="/use-cases"
              className="text-sm text-[var(--text-secondary)] transition hover:text-[var(--text-primary)]"
            >
              Solutions ▾
            </Link>
            {solutionsOpen && (
              <div className="absolute left-0 top-full pt-2">
                <div className="w-56 rounded-xl border border-[var(--border)] bg-[var(--bg-primary)] py-2 shadow-lg">
                  {solutions.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="block px-4 py-2 text-sm text-[var(--text-secondary)] transition hover:bg-[var(--accent)]/10 hover:text-[var(--text-primary)]"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Why QGraph dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setCompareOpen(true)}
            onMouseLeave={() => setCompareOpen(false)}
          >
            <span className="cursor-pointer text-sm text-[var(--text-secondary)] transition hover:text-[var(--text-primary)]">
              Why QGraph ▾
            </span>
            {compareOpen && (
              <div className="absolute left-0 top-full pt-2">
                <div className="w-48 rounded-xl border border-[var(--border)] bg-[var(--bg-primary)] py-2 shadow-lg">
                  <Link
                    href="/architecture"
                    className="block px-4 py-2 text-sm text-[var(--text-secondary)] transition hover:bg-[var(--accent)]/10 hover:text-[var(--text-primary)]"
                  >
                    How It Works
                  </Link>
                  <Link
                    href="/compare"
                    className="block px-4 py-2 text-sm text-[var(--text-secondary)] transition hover:bg-[var(--accent)]/10 hover:text-[var(--text-primary)]"
                  >
                    Competitor Landscape
                  </Link>
                  <div className="mx-4 my-1 border-t border-[var(--border)]" />
                  {comparisons.map((c) => (
                    <Link
                      key={c.href}
                      href={c.href}
                      className="block px-4 py-2 text-sm text-[var(--text-secondary)] transition hover:bg-[var(--accent)]/10 hover:text-[var(--text-primary)]"
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link
            href="/pricing"
            className="text-sm text-[var(--text-secondary)] transition hover:text-[var(--text-primary)]"
          >
            Pricing
          </Link>

          <Link
            href="/getting-started"
            className="text-sm text-[var(--text-secondary)] transition hover:text-[var(--text-primary)]"
          >
            Docs
          </Link>

          <Link
            href="/getting-started"
            className="rounded-lg bg-[var(--accent)] px-4 py-1.5 text-sm font-semibold text-white transition hover:bg-[var(--accent-light)]"
          >
            Start Free
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-[var(--text-secondary)]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-[var(--border)] bg-[var(--bg-primary)] px-6 py-4 md:hidden">
          <p className="mb-2 text-xs font-medium uppercase tracking-widest text-[var(--text-secondary)]">Solutions</p>
          {solutions.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="block py-1.5 text-sm text-[var(--text-secondary)]"
              onClick={() => setMobileOpen(false)}
            >
              {s.label}
            </Link>
          ))}
          <div className="my-3 border-t border-[var(--border)]" />
          <p className="mb-2 text-xs font-medium uppercase tracking-widest text-[var(--text-secondary)]">Compare</p>
          {comparisons.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="block py-1.5 text-sm text-[var(--text-secondary)]"
              onClick={() => setMobileOpen(false)}
            >
              {c.label}
            </Link>
          ))}
          <div className="my-3 border-t border-[var(--border)]" />
          <Link href="/architecture" className="block py-2 text-sm text-[var(--text-secondary)]" onClick={() => setMobileOpen(false)}>
            How It Works
          </Link>
          <Link href="/compare" className="block py-2 text-sm text-[var(--text-secondary)]" onClick={() => setMobileOpen(false)}>
            Competitor Landscape
          </Link>
          <Link href="/pricing" className="block py-2 text-sm text-[var(--text-secondary)]" onClick={() => setMobileOpen(false)}>
            Pricing
          </Link>
          <Link href="/getting-started" className="block py-2 text-sm text-[var(--text-secondary)]" onClick={() => setMobileOpen(false)}>
            Docs
          </Link>
        </div>
      )}
    </nav>
  );
}
