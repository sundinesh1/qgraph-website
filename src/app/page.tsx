import Link from "next/link";
import Ticker from "@/components/Ticker";
import ProductList from "@/components/ProductList";
import CompetitorGrid from "@/components/CompetitorGrid";
import FAQ from "@/components/FAQ";

export default function HomePage() {
  return (
    <>
      {/* ═══════════════════ HERO ═══════════════════ */}
      <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-10 pt-28 pb-20 overflow-hidden">
        {/* bg effects */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 80% 40%, rgba(0,255,178,0.06) 0%, transparent 70%), radial-gradient(ellipse 40% 60% at 10% 80%, rgba(77,126,255,0.05) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            maskImage:
              "radial-gradient(ellipse 80% 70% at 70% 40%, black, transparent)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 70% at 70% 40%, black, transparent)",
          }}
        />

        <div className="inner relative z-10">
          <div
            className="flex items-center gap-3 mb-8 animate-[fadeUp_0.8s_ease_0.1s_both]"
            style={{
              fontFamily: "var(--mono)",
              fontSize: "11px",
              color: "var(--accent)",
              letterSpacing: "4px",
              textTransform: "uppercase",
            }}
          >
            <span className="inline-block w-10 h-px" style={{ background: "var(--accent)" }} />
            The Deterministic AI Infrastructure
          </div>

          <h1
            className="animate-[fadeUp_0.8s_ease_0.2s_both]"
            style={{
              fontFamily: "var(--heading-font)",
              fontSize: "clamp(56px, 10vw, 140px)",
              lineHeight: "0.92",
              letterSpacing: "2px",
            }}
          >
            THE <span style={{ color: "rgba(232,234,240,0.25)" }}>FRAGMENTED</span>
            <br />
            DATA STACK
            <br />
            <span style={{ color: "var(--accent)" }}>ENDS TODAY.</span>
          </h1>

          <p
            className="mt-4 max-w-[700px] animate-[fadeUp_0.8s_ease_0.3s_both]"
            style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(18px, 2.5vw, 28px)",
              color: "rgba(232,234,240,0.7)",
              fontStyle: "italic",
              lineHeight: "1.4",
            }}
          >
            The safe, secure, and deterministic operating system for enterprise AI. One engine. Nine products. The
            infrastructure layer the agentic world has been missing.
          </p>

          <div className="flex flex-wrap gap-8 md:gap-14 mt-12 md:mt-16 animate-[fadeUp_0.8s_ease_0.4s_both]">
            {[
              { num: "710K+", label: "Lines of Production Rust" },
              { num: "9", label: "Product Surfaces" },
              { num: "9,500+", label: "Automated Tests" },
              { num: "100%", label: "Code Complete" },
            ].map((s) => (
              <div key={s.label}>
                <div
                  style={{
                    fontFamily: "var(--heading-font)",
                    fontSize: "clamp(36px, 5vw, 48px)",
                    color: "var(--accent)",
                    letterSpacing: "1px",
                    lineHeight: 1,
                  }}
                >
                  {s.num}
                </div>
                <div
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: "11px",
                    color: "var(--muted)",
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    marginTop: "4px",
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ TICKER ═══════════════════ */}
      <Ticker />

      {/* ═══════════════════ MCKINSEY INTERSTITIAL ═══════════════════ */}
      <section
        className="relative overflow-hidden py-20 md:py-24 px-6 md:px-10"
        style={{
          background: "var(--bg)",
          borderTop: "1px solid var(--border)",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 50% 80% at 15% 50%, rgba(255,77,106,0.04) 0%, transparent 60%), radial-gradient(ellipse 40% 60% at 85% 50%, rgba(77,126,255,0.03) 0%, transparent 60%)",
          }}
        />
        <div className="inner relative z-10">
          <div
            className="flex items-center gap-3 mb-14"
            style={{
              fontFamily: "var(--mono)",
              fontSize: "10px",
              color: "var(--muted)",
              letterSpacing: "3px",
              textTransform: "uppercase",
            }}
          >
            <span className="inline-block w-8 h-px" style={{ background: "var(--muted)" }} />
            McKinsey Global Survey &middot; November 2025
          </div>

          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 mb-16">
            <div className="flex-1">
              <div
                style={{
                  fontFamily: "var(--heading-font)",
                  fontSize: "clamp(80px, 14vw, 180px)",
                  lineHeight: "0.9",
                  color: "var(--accent)",
                  letterSpacing: "-2px",
                }}
              >
                88<span style={{ fontSize: "0.5em", verticalAlign: "super", letterSpacing: 0 }}>%</span>
              </div>
              <div
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: "20px",
                  color: "rgba(232,234,240,0.55)",
                  fontStyle: "italic",
                  lineHeight: "1.4",
                }}
              >
                of companies report using AI
                <br />
                in at least one business function
              </div>
            </div>

            <div className="flex md:flex-col items-center gap-3 shrink-0">
              <div className="hidden md:block w-px h-14" style={{ background: "var(--border)" }} />
              <div
                style={{
                  fontFamily: "var(--heading-font)",
                  fontSize: "22px",
                  color: "var(--muted)",
                  letterSpacing: "4px",
                }}
              >
                BUT
              </div>
              <div className="hidden md:block w-px h-14" style={{ background: "var(--border)" }} />
            </div>

            <div className="flex-1">
              <div
                style={{
                  fontFamily: "var(--heading-font)",
                  fontSize: "clamp(80px, 14vw, 180px)",
                  lineHeight: "0.9",
                  color: "var(--accent2)",
                  letterSpacing: "-2px",
                  opacity: 0.9,
                }}
              >
                33<span style={{ fontSize: "0.5em", verticalAlign: "super", letterSpacing: 0 }}>%</span>
              </div>
              <div
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: "20px",
                  color: "rgba(232,234,240,0.55)",
                  fontStyle: "italic",
                  lineHeight: "1.4",
                }}
              >
                have actually
                <br />
                scaled it
              </div>
            </div>
          </div>

          <div
            className="pl-6 md:pl-10 max-w-[860px]"
            style={{ borderLeft: "2px solid var(--accent2)" }}
          >
            <p
              style={{
                fontFamily: "var(--heading-font)",
                fontSize: "clamp(24px, 3vw, 38px)",
                letterSpacing: "1px",
                lineHeight: "1.1",
                color: "rgba(232,234,240,0.5)",
                marginBottom: "28px",
              }}
            >
              Read that again.{" "}
              <span style={{ color: "var(--text)" }}>88 percent bought. 33 percent made it work.</span>
            </p>
            <p
              style={{
                fontSize: "17px",
                color: "rgba(232,234,240,0.6)",
                lineHeight: "1.7",
                marginBottom: "20px",
              }}
            >
              The majority of companies spending on AI right now are paying for software they cannot operationalize. This
              is not an AI problem.{" "}
              <em style={{ color: "var(--accent)", fontStyle: "normal" }}>
                This is an operations problem wearing an AI badge.
              </em>
            </p>
            <div className="mt-10 flex items-start gap-6">
              <div className="w-10 h-px shrink-0 mt-3.5" style={{ background: "var(--accent)" }} />
              <p
                style={{
                  fontFamily: "var(--heading-font)",
                  fontSize: "clamp(20px, 2.5vw, 32px)",
                  letterSpacing: "1px",
                  lineHeight: "1.2",
                  color: "var(--accent)",
                }}
              >
                QGraph is built for the 55% who bought the promise and got left behind by the plumbing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ PROBLEM ═══════════════════ */}
      <section
        className="py-20 md:py-24 px-6 md:px-10"
        style={{
          background: "var(--surface)",
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div className="inner">
          <div className="section-label">
            <span className="num">02 /</span> The Problem
          </div>
          <h2 className="section-title">
            YOUR ENTERPRISE
            <br />
            IS BLEEDING.
            <br />
            <span style={{ color: "var(--accent2)" }}>QUIETLY.</span>
          </h2>

          {/* GlobalBank scenario */}
          <div
            className="mt-12 overflow-hidden"
            style={{ background: "var(--surface2)", border: "1px solid var(--border)" }}
          >
            <div
              className="flex flex-wrap justify-between items-center gap-2 px-6 md:px-8 py-5"
              style={{
                background: "rgba(255,77,106,0.06)",
                borderBottom: "1px solid rgba(255,77,106,0.15)",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: "10px",
                  color: "var(--accent2)",
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                }}
              >
                A Real Enterprise. Today.
              </span>
              <span
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: "12px",
                  color: "var(--muted)",
                  letterSpacing: "1px",
                }}
              >
                GlobalBank Corp &mdash; 12,000 employees &middot; $4B revenue
              </span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4" style={{ borderTop: "1px solid var(--border)" }}>
              {[
                { label: "Total annual spend", val: "$3.2M+", note: "Before infrastructure and incident costs" },
                { label: "AI response latency", val: "4\u201312 sec", note: "4 round-trips across 4 systems" },
                { label: "Hallucination rate", val: "~23%", note: "Pinecone strips relationship context" },
                { label: "Security posture", val: "BROKEN", note: "7 permission models, none synchronized" },
              ].map((o) => (
                <div
                  key={o.label}
                  className="p-5 md:p-6 text-center"
                  style={{
                    background: "rgba(255,77,106,0.03)",
                    borderRight: "1px solid var(--border)",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: "10px",
                      color: "var(--muted)",
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                      marginBottom: "10px",
                    }}
                  >
                    {o.label}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--heading-font)",
                      fontSize: "clamp(24px, 4vw, 36px)",
                      color: "var(--accent2)",
                      letterSpacing: "1px",
                      lineHeight: 1,
                      marginBottom: "8px",
                    }}
                  >
                    {o.val}
                  </div>
                  <div style={{ fontSize: "11px", color: "var(--muted)", lineHeight: "1.5" }}>{o.note}</div>
                </div>
              ))}
            </div>
            <div
              className="flex gap-5 items-start px-6 md:px-8 py-6"
              style={{
                background: "rgba(255,77,106,0.03)",
                borderTop: "1px solid var(--border)",
              }}
            >
              <div
                className="w-[3px] shrink-0 self-stretch min-h-[40px]"
                style={{ background: "var(--accent2)" }}
              />
              <p
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: "clamp(16px, 2vw, 18px)",
                  fontStyle: "italic",
                  color: "rgba(232,234,240,0.65)",
                  lineHeight: "1.6",
                }}
              >
                This is not a technology failure. It is an architecture failure. And it is happening inside every
                enterprise that bought the AI promise without questioning the data stack underneath it.
              </p>
            </div>
          </div>

          {/* three failures */}
          <div className="mt-16">
            <div
              style={{
                fontFamily: "var(--mono)",
                fontSize: "11px",
                color: "var(--muted)",
                letterSpacing: "3px",
                textTransform: "uppercase",
                marginBottom: "32px",
              }}
            >
              Three Terminal Failures Behind Every Failed AI Initiative
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[2px]">
              {[
                {
                  num: "01",
                  title: "THE RAG\nCONTEXT WALL",
                  body: "Vector databases destroy structural topology. They chunk source material into isolated 512-token fragments, stripping every relationship that makes data meaningful. AI agents fail at multi-hop reasoning because flat vector stores cannot traverse connections.",
                  color: "var(--accent2)",
                },
                {
                  num: "02",
                  title: "THE PERMISSION\nBLINDSPOT",
                  body: "Seven systems means seven permission models \u2014 Okta, Snowflake, Pinecone, Neo4j, Glean, Datadog, custom auth. None are synchronized. When an AI agent traverses a query, it crosses all seven boundaries.",
                  color: "var(--accent3)",
                },
                {
                  num: "03",
                  title: "THE INTEGRATION\nDEBT SPIRAL",
                  body: "Every quarter, one pipeline breaks. Schema changes break syncs. API updates break monitoring. 50% of data engineering budgets go to glue that produces zero business value.",
                  color: "var(--accent)",
                },
              ].map((f) => (
                <div
                  key={f.num}
                  className="relative overflow-hidden p-8 md:p-10"
                  style={{ background: "var(--surface2)", border: "1px solid var(--border)" }}
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-[2px]"
                    style={{ background: f.color }}
                  />
                  <div
                    className="absolute top-2 right-5"
                    style={{
                      fontFamily: "var(--heading-font)",
                      fontSize: "80px",
                      color: "rgba(255,255,255,0.04)",
                      lineHeight: 1,
                    }}
                  >
                    {f.num}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--heading-font)",
                      fontSize: "28px",
                      letterSpacing: "1px",
                      marginBottom: "16px",
                      lineHeight: "1.1",
                      whiteSpace: "pre-line",
                    }}
                  >
                    {f.title}
                  </div>
                  <div style={{ fontSize: "14px", color: "var(--muted)", lineHeight: "1.65" }}>{f.body}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ SOLUTION ═══════════════════ */}
      <section className="py-20 md:py-24 px-6 md:px-10" style={{ background: "var(--bg)" }}>
        <div className="inner">
          <div className="section-label">
            <span className="num">03 /</span> The Solution
          </div>
          <h2 className="section-title">
            ZERO-COPY.
            <br />
            ZERO-GLUE.
            <br />
            ONE ENGINE.
          </h2>

          {/* solution callout */}
          <div
            className="relative mb-16 p-8 md:p-12"
            style={{
              background: "linear-gradient(135deg, rgba(0,255,178,0.05), rgba(77,126,255,0.05))",
              border: "1px solid rgba(0,255,178,0.2)",
            }}
          >
            <div
              className="absolute top-[-20px] left-5 hidden md:block"
              style={{
                fontFamily: "var(--serif)",
                fontSize: "200px",
                color: "rgba(0,255,178,0.05)",
                lineHeight: 1,
              }}
            >
              &ldquo;
            </div>
            <p
              className="relative z-10 max-w-[900px]"
              style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(20px, 3vw, 34px)",
                lineHeight: "1.35",
                fontStyle: "italic",
              }}
            >
              QGraph treats the entire data lifecycle as an{" "}
              <span style={{ color: "var(--accent)", fontStyle: "normal" }}>HPC problem</span>. A vector search, a
              spatial query, a permission check, and a multi-hop graph traversal execute in{" "}
              <span style={{ color: "var(--accent)", fontStyle: "normal" }}>
                a single query plan, in a single memory space, in microseconds.
              </span>
            </p>
          </div>

          {/* 3 principles */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[2px] mb-16">
            {[
              {
                num: "01",
                title: "Structure Is Meaning",
                body: "Data has shape. Functions call other functions. Services depend on other services. We preserve that topology natively instead of flattening it into rows. The graph is not a feature \u2014 it is the architecture.",
              },
              {
                num: "02",
                title: "Security At Storage Layer",
                body: "Access control is a graph problem. We push permission checks into the query plan before data is ever read from disk. Unauthorized data is never decompressed, never scored, never returned.",
              },
              {
                num: "03",
                title: "One Language, Everything",
                body: "Every workload \u2014 from vector ANN search to PromQL metrics to geospatial clustering \u2014 executes through Cypher. AI agents write one query. QGraph handles the rest.",
              },
            ].map((p) => (
              <div
                key={p.num}
                className="p-7 md:p-9"
                style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
              >
                <div
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: "10px",
                    color: "var(--accent)",
                    letterSpacing: "3px",
                    textTransform: "uppercase",
                    marginBottom: "16px",
                  }}
                >
                  PRINCIPLE {p.num}
                </div>
                <div
                  style={{
                    fontFamily: "var(--heading-font)",
                    fontSize: "30px",
                    letterSpacing: "1px",
                    marginBottom: "12px",
                  }}
                >
                  {p.title}
                </div>
                <div style={{ fontSize: "14px", color: "var(--muted)", lineHeight: "1.65" }}>{p.body}</div>
              </div>
            ))}
          </div>

          {/* Architecture comparison */}
          <div className="pt-10 mt-16" style={{ borderTop: "1px solid var(--border)" }}>
            <div
              style={{
                fontFamily: "var(--mono)",
                fontSize: "11px",
                color: "var(--muted)",
                letterSpacing: "3px",
                textTransform: "uppercase",
                marginBottom: "28px",
              }}
            >
              The Architecture Difference &mdash; Visualized
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_60px_1fr] items-stretch">
              {/* fragmented side */}
              <div className="flex flex-col">
                <div
                  className="text-center py-3 px-5"
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: "11px",
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    color: "var(--accent2)",
                    background: "rgba(255,77,106,0.03)",
                    border: "1px solid rgba(255,77,106,0.2)",
                  }}
                >
                  Today: Fragmented Stack
                </div>
                <div
                  className="flex-1 p-6 md:p-8"
                  style={{
                    borderColor: "rgba(255,77,106,0.15)",
                    background: "rgba(255,77,106,0.02)",
                    border: "1px solid rgba(255,77,106,0.15)",
                    borderTop: "none",
                  }}
                >
                  <div className="text-center mb-6">
                    <span
                      className="inline-block px-5 py-2"
                      style={{
                        border: "1px solid rgba(77,126,255,0.4)",
                        background: "rgba(77,126,255,0.12)",
                        fontFamily: "var(--mono)",
                        fontSize: "11px",
                        color: "#4D7EFF",
                        letterSpacing: "1px",
                      }}
                    >
                      AI AGENT asks a question
                    </span>
                  </div>
                  <div
                    className="text-center mb-2"
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: "10px",
                      color: "rgba(255,77,106,0.5)",
                      letterSpacing: "1px",
                    }}
                  >
                    5 separate API calls
                  </div>
                  <div className="flex flex-wrap justify-center gap-1 mb-4">
                    {["Snowflake $600K", "Pinecone $180K", "Neo4j $400K", "Datadog $900K", "Okta $150K"].map((s) => (
                      <span
                        key={s}
                        className="px-2 py-1.5 text-center"
                        style={{
                          fontFamily: "var(--mono)",
                          fontSize: "10px",
                          background: "rgba(255,77,106,0.08)",
                          border: "1px solid rgba(255,77,106,0.2)",
                          color: "rgba(255,77,106,0.85)",
                        }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <div
                    className="text-center px-4 py-3 mb-4"
                    style={{
                      border: "1px dashed rgba(255,77,106,0.2)",
                      background: "rgba(255,77,106,0.04)",
                      fontFamily: "var(--mono)",
                      fontSize: "10px",
                      color: "rgba(255,77,106,0.55)",
                      letterSpacing: "0.5px",
                    }}
                  >
                    ETL GLUE &mdash; 4 ENGINEERS &mdash; BREAKS QUARTERLY
                  </div>
                  <div
                    className="text-center mt-6 px-4 py-4"
                    style={{
                      border: "1px solid rgba(255,77,106,0.3)",
                      background: "rgba(255,77,106,0.06)",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "var(--heading-font)",
                        fontSize: "20px",
                        color: "rgba(255,77,106,0.9)",
                        letterSpacing: "2px",
                      }}
                    >
                      $3.2M+ PER YEAR
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--mono)",
                        fontSize: "10px",
                        color: "rgba(255,77,106,0.5)",
                        marginTop: "4px",
                      }}
                    >
                      4-12s latency &middot; 23% hallucination &middot; broken security
                    </div>
                  </div>
                </div>
              </div>

              {/* VS divider */}
              <div className="flex lg:flex-col items-center justify-center gap-3 py-4 lg:py-0">
                <div className="hidden lg:block flex-1 w-px" style={{ background: "var(--border)" }} />
                <div className="lg:hidden flex-1 h-px w-full" style={{ background: "var(--border)" }} />
                <div
                  style={{
                    fontFamily: "var(--heading-font)",
                    fontSize: "18px",
                    color: "var(--muted)",
                    letterSpacing: "3px",
                  }}
                >
                  VS
                </div>
                <div className="hidden lg:block flex-1 w-px" style={{ background: "var(--border)" }} />
                <div className="lg:hidden flex-1 h-px w-full" style={{ background: "var(--border)" }} />
              </div>

              {/* QGraph side */}
              <div className="flex flex-col">
                <div
                  className="text-center py-3 px-5"
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: "11px",
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    color: "var(--accent)",
                    background: "rgba(0,255,178,0.03)",
                    border: "1px solid rgba(0,255,178,0.2)",
                  }}
                >
                  QGraph: One Engine
                </div>
                <div
                  className="flex-1 p-6 md:p-8"
                  style={{
                    background: "rgba(0,255,178,0.02)",
                    border: "1px solid rgba(0,255,178,0.15)",
                    borderTop: "none",
                  }}
                >
                  <div className="text-center mb-6">
                    <span
                      className="inline-block px-5 py-2"
                      style={{
                        border: "1px solid rgba(0,255,178,0.5)",
                        background: "rgba(0,255,178,0.1)",
                        fontFamily: "var(--mono)",
                        fontSize: "11px",
                        color: "#00FFB2",
                        letterSpacing: "1px",
                      }}
                    >
                      AI AGENT &mdash; one Cypher query
                    </span>
                  </div>
                  <div
                    className="text-center mb-2"
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: "10px",
                      color: "rgba(0,255,178,0.5)",
                      letterSpacing: "1px",
                    }}
                  >
                    single call
                  </div>
                  <div
                    className="p-5 mb-4"
                    style={{
                      border: "1px solid rgba(0,255,178,0.25)",
                      background: "rgba(0,255,178,0.03)",
                    }}
                  >
                    <div
                      className="text-center mb-3"
                      style={{
                        fontFamily: "var(--heading-font)",
                        fontSize: "16px",
                        color: "rgba(0,255,178,0.4)",
                        letterSpacing: "3px",
                      }}
                    >
                      QGRAPH ENGINE
                    </div>
                    <div className="flex flex-wrap justify-center gap-1 mb-3">
                      {["Graph OLAP", "Vector Search", "BM25 + Graph", "RBAC Guard", "Observability", "KV Cache"].map(
                        (m) => (
                          <span
                            key={m}
                            className="px-2 py-1.5 text-center"
                            style={{
                              fontFamily: "var(--mono)",
                              fontSize: "10px",
                              background: "rgba(0,255,178,0.06)",
                              border: "1px solid rgba(0,255,178,0.2)",
                              color: "rgba(0,255,178,0.8)",
                            }}
                          >
                            {m}
                          </span>
                        ),
                      )}
                    </div>
                    <div
                      className="text-center px-3 py-2"
                      style={{
                        border: "1px solid rgba(0,255,178,0.12)",
                        background: "rgba(0,255,178,0.04)",
                        fontFamily: "var(--mono)",
                        fontSize: "9px",
                        color: "rgba(0,255,178,0.45)",
                        letterSpacing: "1px",
                      }}
                    >
                      ZERO-COPY ARROW &middot; RDMA &middot; io_uring &middot; Vortex 11-codec
                    </div>
                  </div>
                  <div
                    className="text-center px-4 py-4"
                    style={{
                      border: "1px solid rgba(0,255,178,0.3)",
                      background: "rgba(0,255,178,0.08)",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "var(--mono)",
                        fontSize: "11px",
                        color: "rgba(0,255,178,0.9)",
                        letterSpacing: "1px",
                      }}
                    >
                      STRUCTURED GRAPH CONTEXT
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--mono)",
                        fontSize: "10px",
                        color: "rgba(0,255,178,0.5)",
                        marginTop: "4px",
                      }}
                    >
                      $570K/yr &middot; 0% leakage &middot; full audit trail
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ WHY AI HALLUCINATES ═══════════════════ */}
      <section
        className="py-20 md:py-24 px-6 md:px-10"
        style={{ background: "var(--bg)", borderTop: "1px solid var(--border)" }}
      >
        <div className="inner">
          <div className="section-label">
            <span className="num">04 /</span> Why Enterprise AI Hallucinates
          </div>
          <h2 className="section-title">
            THE AI ISN&apos;T
            <br />
            BROKEN.
            <br />
            <span style={{ color: "var(--accent2)" }}>YOUR DATA IS.</span>
          </h2>
          <p className="section-intro">
            Hallucination is not a model problem. It is a retrieval problem. When you ask an AI a question, it can only
            be as accurate as the context you give it.
          </p>

          <div className="max-w-[700px] mx-auto">
            <div
              style={{
                fontFamily: "var(--mono)",
                fontSize: "11px",
                color: "var(--muted)",
                letterSpacing: "3px",
                textTransform: "uppercase",
                marginBottom: "28px",
                paddingBottom: "16px",
                borderBottom: "1px solid var(--border)",
              }}
            >
              How Your AI Actually Answers a Question Today
            </div>

            {/* BAD flow */}
            <div className="flex flex-col items-center gap-0 mb-6">
              <div className="w-full p-5 md:p-6" style={{ border: "1px solid rgba(77,126,255,0.3)", background: "rgba(77,126,255,0.04)" }}>
                <div style={{ fontFamily: "var(--mono)", fontSize: "11px", color: "var(--muted)", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "8px" }}>Analyst asks:</div>
                <div style={{ fontSize: "15px", fontStyle: "italic", lineHeight: "1.5" }}>&ldquo;Which clients are most exposed to SVB counterparty risk right now?&rdquo;</div>
              </div>
              <div className="flex flex-col items-center py-2">
                <div className="w-px h-6" style={{ background: "var(--accent2)" }} />
                <span style={{ fontFamily: "var(--mono)", fontSize: "10px", color: "var(--accent2)", letterSpacing: "2px", textTransform: "uppercase", marginTop: "4px" }}>sent to vector store</span>
              </div>
              <div className="w-full" style={{ border: "1px solid rgba(255,77,106,0.25)", background: "rgba(255,77,106,0.03)" }}>
                <div className="flex items-center gap-3 px-5 py-3" style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                  <span className="w-6 h-6 flex items-center justify-center shrink-0" style={{ background: "rgba(255,77,106,0.2)", color: "var(--accent2)", fontFamily: "var(--mono)", fontSize: "11px", fontWeight: 600 }}>1</span>
                  <span className="flex-1" style={{ fontSize: "13px", color: "rgba(232,234,240,0.7)" }}>Pinecone chunks docs into 512-token fragments</span>
                  <span className="cost-pill red hidden sm:inline-block">DESTROYS CONTEXT</span>
                </div>
                <div className="flex flex-col gap-1.5 p-4">
                  {[
                    { text: "\u2026SVB exposure in Q3 filing\u2026", note: "no client link" },
                    { text: "\u2026portfolio rebalancing memo\u2026", note: "no date" },
                    { text: "\u2026counterparty risk policy p.4\u2026", note: "no context" },
                  ].map((c) => (
                    <div key={c.text} className="flex justify-between items-center px-3 py-2" style={{ fontFamily: "var(--mono)", fontSize: "12px", color: "rgba(232,234,240,0.4)", background: "rgba(255,255,255,0.02)", borderLeft: "2px solid rgba(255,77,106,0.2)" }}>
                      <span>{c.text}</span>
                      <span className="hidden sm:inline" style={{ fontSize: "10px", color: "var(--accent2)", letterSpacing: "1px" }}>{c.note}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col items-center py-2">
                <div className="w-px h-6" style={{ background: "var(--accent2)" }} />
                <span style={{ fontFamily: "var(--mono)", fontSize: "10px", color: "var(--accent2)", letterSpacing: "2px", textTransform: "uppercase", marginTop: "4px" }}>model fills gaps with fabrication</span>
              </div>
              <div className="w-full p-5 md:p-6" style={{ border: "1px solid rgba(255,77,106,0.25)", background: "rgba(255,77,106,0.03)" }}>
                <div style={{ fontFamily: "var(--mono)", fontSize: "10px", letterSpacing: "3px", textTransform: "uppercase", marginBottom: "12px", color: "var(--accent2)" }}>What the Analyst Gets</div>
                <div style={{ fontSize: "14px", color: "rgba(232,234,240,0.7)", fontStyle: "italic", lineHeight: "1.6", marginBottom: "12px" }}>
                  &ldquo;Based on available documentation, Clients A, C, and possibly F have some counterparty exposure. I recommend reviewing portfolios carefully.&rdquo;
                </div>
                <div style={{ fontFamily: "var(--mono)", fontSize: "11px", lineHeight: "1.5", color: "var(--accent2)" }}>
                  Vague. Partially fabricated. Analyst still has to check 400 portfolios manually.
                </div>
              </div>
            </div>

            {/* VS divider */}
            <div className="relative text-center py-10">
              <div className="absolute top-1/2 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(0,255,178,0.3), transparent)" }} />
              <span className="relative z-10 px-6" style={{ fontFamily: "var(--heading-font)", fontSize: "32px", letterSpacing: "2px", color: "var(--accent)", background: "var(--bg)" }}>Now, with QGraph</span>
            </div>

            {/* GOOD flow */}
            <div className="flex flex-col items-center gap-0">
              <div className="w-full p-5 md:p-6" style={{ border: "1px solid rgba(77,126,255,0.3)", background: "rgba(77,126,255,0.04)" }}>
                <div style={{ fontFamily: "var(--mono)", fontSize: "11px", color: "var(--muted)", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "8px" }}>Same analyst. Same question.</div>
                <div style={{ fontSize: "15px", fontStyle: "italic", lineHeight: "1.5" }}>&ldquo;Which clients are most exposed to SVB counterparty risk right now?&rdquo;</div>
              </div>
              <div className="flex flex-col items-center py-2">
                <div className="w-px h-6" style={{ background: "var(--accent)" }} />
                <span style={{ fontFamily: "var(--mono)", fontSize: "10px", color: "var(--accent)", letterSpacing: "2px", textTransform: "uppercase", marginTop: "4px" }}>single Cypher graph traversal</span>
              </div>
              <div className="w-full" style={{ border: "1px solid rgba(0,255,178,0.25)", background: "rgba(0,255,178,0.03)" }}>
                <div className="flex items-center gap-3 px-5 py-3" style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                  <span className="w-6 h-6 flex items-center justify-center shrink-0" style={{ background: "rgba(0,255,178,0.15)", color: "var(--accent)", fontFamily: "var(--mono)", fontSize: "11px", fontWeight: 600 }}>1</span>
                  <span className="flex-1" style={{ fontSize: "13px", color: "rgba(232,234,240,0.7)" }}>QGraph traverses the actual relationship graph</span>
                  <span className="cost-pill green hidden sm:inline-block">STRUCTURAL TRUTH</span>
                </div>
                <div className="flex flex-col gap-2 p-4">
                  {[
                    { nodes: ["Client A", "Portfolio X", "SVB Bond ($4.2M)"], status: "EXPOSED", bad: true },
                    { nodes: ["Client D", "Portfolio Q", "SVB Equity ($1.1M)"], status: "EXPOSED", bad: true },
                    { nodes: ["Client G", "Portfolio R", "Diversified Fund"], status: "CLEAN", bad: false },
                  ].map((row) => (
                    <div key={row.nodes[0]} className="flex items-center gap-2 flex-wrap p-3" style={{ background: "rgba(0,255,178,0.02)", borderLeft: "2px solid rgba(0,255,178,0.2)" }}>
                      <span className="px-2 py-1" style={{ fontFamily: "var(--mono)", fontSize: "12px", color: "var(--accent3)", border: "1px solid rgba(77,126,255,0.3)", background: "rgba(77,126,255,0.06)" }}>{row.nodes[0]}</span>
                      <span style={{ fontFamily: "var(--mono)", fontSize: "11px", color: "var(--muted)" }}>&rarr;</span>
                      <span className="px-2 py-1" style={{ fontFamily: "var(--mono)", fontSize: "12px", color: "rgba(232,234,240,0.7)", border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.03)" }}>{row.nodes[1]}</span>
                      <span style={{ fontFamily: "var(--mono)", fontSize: "11px", color: "var(--muted)" }}>&rarr;</span>
                      <span className="px-2 py-1" style={{ fontFamily: "var(--mono)", fontSize: "12px", color: "rgba(232,234,240,0.6)", border: "1px solid rgba(255,255,255,0.08)" }}>{row.nodes[2]}</span>
                      <span className="ml-auto px-2 py-1" style={{ fontFamily: "var(--mono)", fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase", color: row.bad ? "var(--accent2)" : "var(--accent)", border: `1px solid ${row.bad ? "rgba(255,77,106,0.3)" : "rgba(0,255,178,0.3)"}`, background: row.bad ? "rgba(255,77,106,0.08)" : "rgba(0,255,178,0.06)" }}>{row.status}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col items-center py-2">
                <div className="w-px h-6" style={{ background: "var(--accent)" }} />
                <span style={{ fontFamily: "var(--mono)", fontSize: "10px", color: "var(--accent)", letterSpacing: "2px", textTransform: "uppercase", marginTop: "4px" }}>nothing to hallucinate</span>
              </div>
              <div className="w-full p-5 md:p-6" style={{ border: "1px solid rgba(0,255,178,0.25)", background: "rgba(0,255,178,0.03)" }}>
                <div style={{ fontFamily: "var(--mono)", fontSize: "10px", letterSpacing: "3px", textTransform: "uppercase", marginBottom: "12px", color: "var(--accent)" }}>What the Analyst Gets</div>
                <div style={{ fontSize: "14px", color: "rgba(232,234,240,0.7)", fontStyle: "italic", lineHeight: "1.6", marginBottom: "12px" }}>
                  &ldquo;2 clients are directly exposed: Client A holds $4.2M in SVB bonds via Portfolio X; Client D holds $1.1M in SVB equity via Portfolio Q. All other client portfolios are clean.&rdquo;
                </div>
                <div style={{ fontFamily: "var(--mono)", fontSize: "11px", lineHeight: "1.5", color: "var(--accent)" }}>
                  Exact. Sourced. Traceable to the physical graph edge. Zero hallucination.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ NINE PRODUCTS ═══════════════════ */}
      <section className="py-20 md:py-24 px-6 md:px-10" style={{ background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
        <div className="inner">
          <div className="section-label"><span className="num">06 /</span> The Products</div>
          <h2 className="section-title">NINE SURFACES.<br />ONE ENGINE.</h2>
          <p className="section-intro">Every product shares the same storage layer, the same query engine, and the same security model. A query can cross any boundary in a single plan.</p>
          <ProductList />
        </div>
      </section>

      {/* ═══════════════════ ROI ═══════════════════ */}
      <section className="py-20 md:py-24 px-6 md:px-10" style={{ background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
        <div className="inner">
          <div className="section-label"><span className="num">07 /</span> The ROI</div>
          <h2 className="section-title">THE MATH<br />IS SIMPLE.</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[2px] mb-16">
            {/* before */}
            <div className="p-8 md:p-12 relative overflow-hidden" style={{ border: "1px solid var(--border)", background: "rgba(255,77,106,0.03)" }}>
              <div className="flex items-center gap-3 mb-8" style={{ fontFamily: "var(--mono)", fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase", color: "var(--accent2)" }}>
                <span className="inline-block w-6 h-px" style={{ background: "var(--accent2)" }} />
                Before QGraph
              </div>
              <div style={{ fontFamily: "var(--heading-font)", fontSize: "clamp(48px, 8vw, 72px)", lineHeight: 1, letterSpacing: "2px", color: "var(--accent2)", marginBottom: "8px" }}>$3.2M+</div>
              <div style={{ fontFamily: "var(--mono)", fontSize: "12px", color: "var(--muted)", marginBottom: "32px", letterSpacing: "1px" }}>Annual data infrastructure spend</div>
              {[
                ["Snowflake", "$600K"],
                ["Neo4j", "$400K"],
                ["Pinecone", "$180K"],
                ["Datadog", "$900K"],
                ["Okta + Custom Auth", "$150K"],
                ["ETL / Glue (4 FTE)", "$720K"],
                ["Incident Recovery", "$250K"],
              ].map(([label, val]) => (
                <div key={label} className="flex justify-between items-center py-2.5" style={{ borderBottom: "1px solid rgba(255,255,255,0.04)", fontSize: "14px" }}>
                  <span style={{ color: "var(--muted)" }}>{label}</span>
                  <span style={{ color: "rgba(255,77,106,0.8)", fontFamily: "var(--mono)" }}>{val}</span>
                </div>
              ))}
            </div>
            {/* after */}
            <div className="p-8 md:p-12 relative overflow-hidden" style={{ border: "1px solid var(--border)", background: "rgba(0,255,178,0.03)" }}>
              <div className="flex items-center gap-3 mb-8" style={{ fontFamily: "var(--mono)", fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase", color: "var(--accent)" }}>
                <span className="inline-block w-6 h-px" style={{ background: "var(--accent)" }} />
                After QGraph
              </div>
              <div style={{ fontFamily: "var(--heading-font)", fontSize: "clamp(48px, 8vw, 72px)", lineHeight: 1, letterSpacing: "2px", color: "var(--accent)", marginBottom: "8px" }}>$570K</div>
              <div style={{ fontFamily: "var(--mono)", fontSize: "12px", color: "var(--muted)", marginBottom: "32px", letterSpacing: "1px" }}>Annual data infrastructure spend</div>
              {[
                ["QGraph Enterprise", "$360K"],
                ["Cloud Infrastructure", "$150K"],
                ["ETL Engineers Needed", "0"],
                ["Integration Maintenance", "$0"],
                ["Incident Recovery", "~$60K"],
              ].map(([label, val]) => (
                <div key={label} className="flex justify-between items-center py-2.5" style={{ borderBottom: "1px solid rgba(255,255,255,0.04)", fontSize: "14px" }}>
                  <span style={{ color: "var(--muted)" }}>{label}</span>
                  <span style={{ color: "rgba(0,255,178,0.8)", fontFamily: "var(--mono)" }}>{val}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-[2px]">
            {[
              { num: "82%", label: "Cost Reduction" },
              { num: "100\u00D7", label: "Faster Queries" },
              { num: "0%", label: "Data Leakage" },
              { num: "0", label: "ETL Pipelines" },
            ].map((o) => (
              <div key={o.label} className="p-6 md:p-8 text-center" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
                <div style={{ fontFamily: "var(--heading-font)", fontSize: "clamp(36px, 5vw, 52px)", color: "var(--accent)", lineHeight: 1, letterSpacing: "1px" }}>{o.num}</div>
                <div style={{ fontSize: "13px", color: "var(--muted)", marginTop: "8px", lineHeight: "1.4" }}>{o.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ COMPETITION ═══════════════════ */}
      <section className="py-20 md:py-24 px-6 md:px-10" style={{ background: "var(--surface)", borderTop: "1px solid var(--border)" }}>
        <div className="inner">
          <div className="section-label"><span className="num">08 /</span> The Competition</div>
          <h2 className="section-title">THEY SELL<br />PIECES.<br /><span style={{ color: "var(--accent)" }}>WE SELL THE WHOLE.</span></h2>
          <CompetitorGrid />
        </div>
      </section>

      {/* ═══════════════════ FAQ ═══════════════════ */}
      <section className="py-20 md:py-24 px-6 md:px-10" style={{ background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
        <div className="inner">
          <div className="section-label"><span className="num">09 /</span> FAQ</div>
          <h2 className="mb-12" style={{ fontFamily: "var(--heading-font)", fontSize: "clamp(36px, 4vw, 56px)", letterSpacing: "2px" }}>QUESTIONS.</h2>
          <FAQ />
        </div>
      </section>

      {/* ═══════════════════ CLOSING CTA ═══════════════════ */}
      <section className="relative min-h-[80vh] flex flex-col justify-center items-center text-center overflow-hidden py-20 md:py-24 px-6 md:px-10" style={{ background: "var(--surface)", borderTop: "1px solid var(--border)" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(0,255,178,0.04) 0%, transparent 70%)" }} />
        <div className="inner relative z-10 flex flex-col items-center">
          <h2 className="mb-8" style={{ fontFamily: "var(--heading-font)", fontSize: "clamp(48px, 8vw, 110px)", lineHeight: "0.95", letterSpacing: "3px" }}>
            STOP DUCT-TAPING.<br /><span style={{ color: "var(--accent)" }}>START OPERATING.</span>
          </h2>
          <p className="max-w-[700px] mb-16" style={{ fontFamily: "var(--serif)", fontSize: "clamp(18px, 2vw, 22px)", color: "rgba(232,234,240,0.6)", fontStyle: "italic", lineHeight: "1.5" }}>
            The fragmented data stack was an acceptable compromise when AI was optional. It is now the single biggest blocker to enterprise AI deployment. QGraph removes it.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/getting-started"
              className="px-8 py-3 font-semibold transition-colors"
              style={{ fontFamily: "var(--mono)", fontSize: "12px", color: "var(--bg)", background: "var(--accent)", letterSpacing: "1px", textTransform: "uppercase", border: "1px solid var(--accent)", textDecoration: "none" }}
            >
              Deploy QGraph
            </Link>
            <Link
              href="/architecture"
              className="px-8 py-3 font-semibold transition-colors cta-outline"
              style={{ fontFamily: "var(--mono)", fontSize: "12px", letterSpacing: "1px", textTransform: "uppercase", textDecoration: "none" }}
            >
              How It Works
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-8 md:gap-10 mt-16" style={{ fontFamily: "var(--mono)", fontSize: "11px", color: "var(--muted)", letterSpacing: "3px", textTransform: "uppercase" }}>
            <span>710K+ lines Rust</span>
            <span>9,500+ tests</span>
            <span>Code complete</span>
          </div>
        </div>
      </section>
    </>
  );
}
