import Link from "next/link";
import type { ReactNode } from "react";

interface UseCaseLayoutProps {
  icon: string;
  title: string;
  subtitle: string;
  problem: string;
  solution: string;
  differentiators: string[];
  children?: ReactNode;
}

export default function UseCaseLayout({
  icon,
  title,
  subtitle,
  problem,
  solution,
  differentiators,
  children,
}: UseCaseLayoutProps) {
  return (
    <div className="mx-auto max-w-4xl px-6 pt-28 pb-20">
      <Link
        href="/use-cases"
        className="mb-6 inline-block text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
      >
        &larr; All Use Cases
      </Link>

      <div className="mb-8">
        <span className="text-5xl">{icon}</span>
        <h1 className="mt-4 text-4xl font-bold">{title}</h1>
        <p className="mt-2 text-lg text-[var(--text-secondary)]">{subtitle}</p>
      </div>

      {/* Problem */}
      <section className="mb-10">
        <h2 className="mb-3 text-xs font-semibold uppercase tracking-widest text-red-400">
          The Problem
        </h2>
        <p className="text-lg leading-relaxed text-[var(--text-secondary)]">{problem}</p>
      </section>

      {/* Solution */}
      <section className="mb-10">
        <h2 className="mb-3 text-xs font-semibold uppercase tracking-widest text-emerald-400">
          The QGraph Solution
        </h2>
        <p className="text-lg leading-relaxed">{solution}</p>
      </section>

      {/* Differentiators */}
      <section className="mb-10">
        <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--accent-light)]">
          Key Differentiators
        </h2>
        <ul className="space-y-3">
          {differentiators.map((d, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-1 text-[var(--accent)]">&#9656;</span>
              <span className="text-[var(--text-secondary)]">{d}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Additional content (Cypher examples, tables, etc.) */}
      {children}

      {/* CTA */}
      <div className="mt-16 rounded-xl border border-[var(--border)] bg-[var(--bg-card)] p-8 text-center">
        <h3 className="mb-2 text-xl font-semibold">Ready to try it?</h3>
        <p className="mb-6 text-sm text-[var(--text-secondary)]">
          Get QGraph running locally in under 5 minutes.
        </p>
        <Link
          href="/getting-started"
          className="inline-block rounded-lg bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--accent-light)]"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}
