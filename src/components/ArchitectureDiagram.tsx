export default function ArchitectureDiagram() {
  return (
    <div className="my-12">
      {/* Query Layer */}
      <div className="arch-box border-[var(--accent)]! mb-2">
        <div className="text-xs font-semibold uppercase tracking-widest text-[var(--accent-light)]">
          Query Layer
        </div>
        <div className="mt-2 text-xl font-bold">Cypher</div>
        <div className="mt-1 text-sm text-[var(--text-secondary)]">
          One language for graphs, vectors, time-series, and spatial
        </div>
      </div>

      <div className="arch-arrow">&darr;</div>

      {/* Engine Layer */}
      <div className="mb-2 grid gap-2 md:grid-cols-3">
        <div className="arch-box">
          <div className="mb-1 text-2xl">&#9889;</div>
          <div className="text-sm font-semibold">GPU-Accelerated Engine</div>
          <div className="mt-1 text-xs text-[var(--text-secondary)]">
            20 cores accelerating search, traversal, scoring
          </div>
        </div>
        <div className="arch-box">
          <div className="mb-1 text-2xl">&#128279;</div>
          <div className="text-sm font-semibold">Graph Execution</div>
          <div className="mt-1 text-xs text-[var(--text-secondary)]">
            Morsel-driven parallelism with adaptive optimization
          </div>
        </div>
        <div className="arch-box">
          <div className="mb-1 text-2xl">&#127760;</div>
          <div className="text-sm font-semibold">Arrow Flight Fabric</div>
          <div className="mt-1 text-xs text-[var(--text-secondary)]">
            Zero-serialization distributed shuffle
          </div>
        </div>
      </div>

      <div className="arch-arrow">&darr;</div>

      {/* Storage Layer */}
      <div className="grid gap-2 md:grid-cols-3">
        <div className="arch-box border-red-500/30">
          <div className="mb-1 text-2xl">&#128293;</div>
          <div className="text-sm font-semibold text-red-400">HOT</div>
          <div className="mt-1 text-xs text-[var(--text-secondary)]">
            Real-time data in RAM &mdash; sub-microsecond access
          </div>
        </div>
        <div className="arch-box border-amber-500/30">
          <div className="mb-1 text-2xl">&#128171;</div>
          <div className="text-sm font-semibold text-amber-400">WARM</div>
          <div className="mt-1 text-xs text-[var(--text-secondary)]">
            Recent data on SSD &mdash; automatic tiering
          </div>
        </div>
        <div className="arch-box border-blue-500/30">
          <div className="mb-1 text-2xl">&#10052;&#65039;</div>
          <div className="text-sm font-semibold text-blue-400">COLD</div>
          <div className="mt-1 text-xs text-[var(--text-secondary)]">
            Compressed archive &mdash; 8x compression ratio
          </div>
        </div>
      </div>
    </div>
  );
}
