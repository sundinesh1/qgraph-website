import Link from "next/link";

const tiers = [
  {
    name: "Free",
    price: "Free",
    period: "forever",
    description: "Evaluate and develop. No credit card required. All nine capabilities from day one.",
    features: [
      "Single-node deployment",
      "All 9 capabilities",
      "Cypher + Bolt protocol",
      "Community support",
      "Docker or binary install",
    ],
    missing: [
      "High availability",
      "Cluster deployment",
      "Automated backups",
      "Priority support",
    ],
    cta: "Start Free",
    href: "/getting-started",
    highlight: false,
  },
  {
    name: "Pro",
    price: "Contact Us",
    period: "",
    description: "Production workloads with high availability and horizontal scaling.",
    features: [
      "Cluster deployment",
      "High availability",
      "Automated backups",
      "Automatic data tiering (hot/warm/cold)",
      "All 9 capabilities",
      "Business-hours support",
      "Multi-zone deployment",
      "TLS encryption",
    ],
    missing: [
      "Dedicated account manager",
      "Custom SLA",
    ],
    cta: "Contact Sales",
    href: "mailto:sales@qgraph.dev",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Mission-critical deployments with dedicated support and compliance guarantees.",
    features: [
      "Everything in Pro",
      "Dedicated account manager",
      "Custom SLA (up to 99.99%)",
      "24/7 priority support",
      "VPC deployment",
      "Advanced monitoring & alerting",
      "Custom retention policies",
      "On-premises support",
      "Professional services",
    ],
    missing: [],
    cta: "Schedule a Call",
    href: "mailto:enterprise@qgraph.dev",
    highlight: false,
  },
];

export default function PricingPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 pt-28 pb-20">
      <div className="mb-2 text-center">
        <span className="inline-block rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/10 px-3 py-1 text-xs font-medium text-[var(--accent-light)]">
          Pricing
        </span>
      </div>
      <h1 className="text-center text-4xl font-bold">
        One Engine. <span className="gradient-text">Predictable Pricing.</span>
      </h1>
      <p className="mt-3 mb-12 text-center text-lg text-[var(--text-secondary)]">
        Start free. Scale when you&apos;re ready. No cardinality tax. No per-series surprises.
        No penalties for adding labels or dimensions.
      </p>

      <div className="grid gap-6 md:grid-cols-3">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className={`rounded-xl border p-6 ${
              tier.highlight
                ? "border-[var(--accent)] bg-[var(--accent)]/5 relative"
                : "border-[var(--border)] bg-[var(--bg-card)]"
            }`}
          >
            {tier.highlight && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[var(--accent)] px-3 py-0.5 text-xs font-semibold text-white">
                Most Popular
              </div>
            )}
            <h2 className="text-xl font-bold">{tier.name}</h2>
            <div className="mt-2">
              <span className="text-3xl font-bold gradient-text">{tier.price}</span>
              {tier.period && (
                <span className="ml-1 text-sm text-[var(--text-secondary)]">{tier.period}</span>
              )}
            </div>
            <p className="mt-2 text-sm text-[var(--text-secondary)]">{tier.description}</p>

            <div className="mt-6">
              <Link
                href={tier.href}
                className={`block w-full rounded-lg py-2.5 text-center text-sm font-semibold transition ${
                  tier.highlight
                    ? "bg-[var(--accent)] text-white hover:bg-[var(--accent-light)]"
                    : "border border-[var(--border)] text-[var(--text-secondary)] hover:border-[var(--accent)] hover:text-[var(--text-primary)]"
                }`}
              >
                {tier.cta}
              </Link>
            </div>

            <ul className="mt-6 space-y-2">
              {tier.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm">
                  <span className="mt-0.5 text-emerald-400">✓</span>
                  <span className="text-[var(--text-secondary)]">{f}</span>
                </li>
              ))}
              {tier.missing.map((m) => (
                <li key={m} className="flex items-start gap-2 text-sm">
                  <span className="mt-0.5 text-[var(--text-secondary)]/30">—</span>
                  <span className="text-[var(--text-secondary)]/50">{m}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* All plans include */}
      <section className="mt-16 rounded-xl border border-[var(--border)] bg-[var(--bg-card)] p-8">
        <h3 className="mb-6 text-center text-xl font-bold">Every Plan Includes</h3>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { title: "All 9 Capabilities", desc: "Graph, vector, observability, governance, access control, geospatial, compliance, ML, and RAG — from day one." },
            { title: "Cypher Query Language", desc: "One language for every workload. Compatible with existing Bolt drivers in Python, Java, Go, and JavaScript." },
            { title: "Deploy Anywhere", desc: "Your laptop, Docker, AWS, GCP, Azure, Kubernetes. Your data stays on your infrastructure. Zero vendor lock-in." },
          ].map((item) => (
            <div key={item.title} className="text-center">
              <h4 className="mb-1 font-semibold text-[var(--accent-light)]">{item.title}</h4>
              <p className="text-sm text-[var(--text-secondary)]">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* No surprises */}
      <section className="mt-12 rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-8 text-center">
        <h3 className="mb-3 text-xl font-bold">No Cardinality Tax. No Per-Series Pricing. No Surprises.</h3>
        <p className="mx-auto max-w-2xl text-sm text-[var(--text-secondary)]">
          Unlike observability vendors that charge per metric series, or vector stores that
          charge per query, QGraph pricing is predictable. No surprise bills when your usage
          grows. No penalties for adding labels or dimensions to your data. Consolidate
          5–7 database vendors into a single binary — and a single, predictable bill.
        </p>
      </section>
    </div>
  );
}
