interface ComparisonRow {
  metric: string;
  qgraph: string;
  competitor: string;
  advantage?: string;
}

interface ComparisonTableProps {
  title: string;
  competitorName: string;
  rows: ComparisonRow[];
}

export default function ComparisonTable({ title, competitorName, rows }: ComparisonTableProps) {
  return (
    <div className="my-8">
      <h3 className="mb-4 text-lg font-semibold">{title}</h3>
      <div className="overflow-x-auto rounded-xl border border-[var(--border)]">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-[var(--border)] bg-[var(--bg-card)]">
              <th className="px-4 py-3 text-left font-medium text-[var(--text-secondary)]">Metric</th>
              <th className="px-4 py-3 text-left font-medium gradient-text">QGraph</th>
              <th className="px-4 py-3 text-left font-medium text-[var(--text-secondary)]">{competitorName}</th>
              <th className="px-4 py-3 text-left font-medium text-[var(--text-secondary)]">Advantage</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr
                key={i}
                className="border-b border-[var(--border)] last:border-b-0"
              >
                <td className="px-4 py-3 text-[var(--text-secondary)]">{row.metric}</td>
                <td className="px-4 py-3 font-semibold text-[var(--accent-light)]">{row.qgraph}</td>
                <td className="px-4 py-3 text-[var(--text-secondary)]">{row.competitor}</td>
                <td className="px-4 py-3 font-medium text-emerald-400">{row.advantage || "-"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
