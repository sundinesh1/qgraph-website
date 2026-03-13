import Link from "next/link";

interface FeatureCardProps {
  href: string;
  icon: string;
  title: string;
  description: string;
}

export default function FeatureCard({ href, icon, title, description }: FeatureCardProps) {
  return (
    <Link href={href} className="card-glow block rounded-xl p-6">
      <div className="mb-3 text-3xl">{icon}</div>
      <h3 className="mb-2 text-lg font-semibold">{title}</h3>
      <p className="text-sm text-[var(--text-secondary)]">{description}</p>
    </Link>
  );
}
