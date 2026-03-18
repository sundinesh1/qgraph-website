"use client";

import Link from "next/link";
import { useState } from "react";

const products = [
  { href: "/use-cases/htap", label: "Graph OLAP Engine" },
  { href: "/use-cases/vector-search", label: "Vector Search" },
  { href: "/use-cases/rag", label: "Structure-Preserving RAG" },
  { href: "/use-cases/observability", label: "GraphDog Observability" },
  { href: "/use-cases/rbac", label: "Enterprise RBAC" },
  { href: "/use-cases/ml-ai", label: "ML Training & Serving" },
  { href: "/use-cases/geospatial", label: "Geospatial Analytics" },
  { href: "/use-cases/security", label: "Security & GRC" },
  { href: "/use-cases/governance", label: "Data Governance" },
];

const comparisons = [
  { href: "/compare/neo4j", label: "vs Neo4j" },
  { href: "/compare/pinecone", label: "vs Pinecone" },
  { href: "/compare/datadog", label: "vs Datadog" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [compareOpen, setCompareOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-xl"
      style={{
        borderColor: "var(--border)",
        background: "rgba(5,6,10,0.85)",
      }}
    >
      <div className="inner flex items-center justify-between px-6 md:px-10 py-5">
        <Link
          href="/"
          style={{
            fontFamily: "var(--heading-font)",
            fontSize: "28px",
            letterSpacing: "3px",
            color: "var(--accent)",
            textDecoration: "none",
          }}
        >
          QGRAPH
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {/* Products dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <Link
              href="/use-cases"
              style={{
                fontFamily: "var(--mono)",
                fontSize: "12px",
                color: productsOpen ? "var(--text)" : "var(--muted)",
                letterSpacing: "1px",
                textTransform: "uppercase",
                textDecoration: "none",
              }}
            >
              Products &#9662;
            </Link>
            {productsOpen && (
              <div className="absolute left-0 top-full pt-2 z-50">
                <div
                  className="w-60 py-2 shadow-xl"
                  style={{
                    background: "var(--bg)",
                    border: "1px solid var(--border)",
                  }}
                >
                  {products.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="block px-4 py-2 text-sm"
                      style={{
                        color: "var(--muted)",
                        textDecoration: "none",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.background =
                          "rgba(0,255,178,0.06)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.background = "transparent")
                      }
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
            <span
              className="cursor-pointer"
              style={{
                fontFamily: "var(--mono)",
                fontSize: "12px",
                color: compareOpen ? "var(--text)" : "var(--muted)",
                letterSpacing: "1px",
                textTransform: "uppercase",
              }}
            >
              Why QGraph &#9662;
            </span>
            {compareOpen && (
              <div className="absolute left-0 top-full pt-2 z-50">
                <div
                  className="w-52 py-2 shadow-xl"
                  style={{
                    background: "var(--bg)",
                    border: "1px solid var(--border)",
                  }}
                >
                  <Link
                    href="/architecture"
                    className="block px-4 py-2 text-sm"
                    style={{
                      color: "var(--muted)",
                      textDecoration: "none",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.background =
                        "rgba(0,255,178,0.06)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.background = "transparent")
                    }
                  >
                    How It Works
                  </Link>
                  <Link
                    href="/compare"
                    className="block px-4 py-2 text-sm"
                    style={{
                      color: "var(--muted)",
                      textDecoration: "none",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.background =
                        "rgba(0,255,178,0.06)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.background = "transparent")
                    }
                  >
                    Competitor Landscape
                  </Link>
                  <div
                    className="mx-4 my-1"
                    style={{ borderTop: "1px solid var(--border)" }}
                  />
                  {comparisons.map((c) => (
                    <Link
                      key={c.href}
                      href={c.href}
                      className="block px-4 py-2 text-sm"
                      style={{
                        color: "var(--muted)",
                        textDecoration: "none",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.background =
                          "rgba(0,255,178,0.06)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.background = "transparent")
                      }
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
            style={{
              fontFamily: "var(--mono)",
              fontSize: "12px",
              color: "var(--muted)",
              letterSpacing: "1px",
              textTransform: "uppercase",
              textDecoration: "none",
            }}
          >
            Pricing
          </Link>

          <Link
            href="/getting-started"
            style={{
              fontFamily: "var(--mono)",
              fontSize: "12px",
              color: "var(--muted)",
              letterSpacing: "1px",
              textTransform: "uppercase",
              textDecoration: "none",
            }}
          >
            Docs
          </Link>

          <Link
            href="/getting-started"
            style={{
              fontFamily: "var(--mono)",
              fontSize: "12px",
              color: "var(--accent)",
              border: "1px solid var(--accent)",
              padding: "8px 20px",
              letterSpacing: "1px",
              textTransform: "uppercase",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--accent)";
              e.currentTarget.style.color = "var(--bg)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "var(--accent)";
            }}
          >
            Start Free
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-xl"
          style={{ color: "var(--muted)" }}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? "\u2715" : "\u2630"}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="md:hidden px-6 py-4"
          style={{
            background: "var(--bg)",
            borderTop: "1px solid var(--border)",
          }}
        >
          <p
            className="mb-2 text-xs font-medium uppercase tracking-widest"
            style={{ color: "var(--muted)" }}
          >
            Products
          </p>
          {products.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="block py-1.5 text-sm"
              style={{ color: "var(--muted)", textDecoration: "none" }}
              onClick={() => setMobileOpen(false)}
            >
              {s.label}
            </Link>
          ))}
          <div
            className="my-3"
            style={{ borderTop: "1px solid var(--border)" }}
          />
          <p
            className="mb-2 text-xs font-medium uppercase tracking-widest"
            style={{ color: "var(--muted)" }}
          >
            Compare
          </p>
          {comparisons.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="block py-1.5 text-sm"
              style={{ color: "var(--muted)", textDecoration: "none" }}
              onClick={() => setMobileOpen(false)}
            >
              {c.label}
            </Link>
          ))}
          <div
            className="my-3"
            style={{ borderTop: "1px solid var(--border)" }}
          />
          <Link
            href="/architecture"
            className="block py-2 text-sm"
            style={{ color: "var(--muted)", textDecoration: "none" }}
            onClick={() => setMobileOpen(false)}
          >
            How It Works
          </Link>
          <Link
            href="/pricing"
            className="block py-2 text-sm"
            style={{ color: "var(--muted)", textDecoration: "none" }}
            onClick={() => setMobileOpen(false)}
          >
            Pricing
          </Link>
          <Link
            href="/getting-started"
            className="block py-2 text-sm"
            style={{ color: "var(--muted)", textDecoration: "none" }}
            onClick={() => setMobileOpen(false)}
          >
            Docs
          </Link>
        </div>
      )}
    </nav>
  );
}
