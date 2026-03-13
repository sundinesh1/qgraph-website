interface StatCounterProps {
  value: string;
  label: string;
  sublabel?: string;
}

export default function StatCounter({ value, label, sublabel }: StatCounterProps) {
  return (
    <div className="text-center">
      <div className="stat-number gradient-text">{value}</div>
      <div className="mt-1 text-sm font-medium text-[var(--text-primary)]">{label}</div>
      {sublabel && (
        <div className="text-xs text-[var(--text-secondary)]">{sublabel}</div>
      )}
    </div>
  );
}
