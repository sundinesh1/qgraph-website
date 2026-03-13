import UseCaseLayout from "@/components/UseCaseLayout";
import CypherSnippet from "@/components/CypherSnippet";

export default function VectorSearchPage() {
  return (
    <UseCaseLayout
      icon="🔍"
      title="Vector Search"
      subtitle="Flat vectors are blind. QGraph returns results with context, relationships, and permissions intact."
      problem="Vector databases strip your data down to arrays of numbers. Documents go in, embeddings come out, and all the relationships — who wrote it, what project it belongs to, what team owns it, who's allowed to see it — are destroyed on ingest. When you search, you get a ranked list of isolated chunks with no understanding of how they connect. To add context back, you make separate API calls to other systems and stitch results together in application code. Three network round-trips. Three failure points. And permission checks happen after retrieval — meaning the system already accessed content the user shouldn't see."
      solution="QGraph stores vectors alongside the graph they belong to. Relationships, authorship, projects, and permissions stay connected. When you search for similar documents, the results already know their full context — who wrote them, what they're about, and whether you're allowed to see them. Permissions are checked before any data is retrieved, not after. One query replaces three API calls and an application-layer stitching job."
      differentiators={[
        "Search results come with full context: authorship, project, team, and permissions — all in one query",
        "Permission-aware from the start: access control evaluated before retrieval, not after. Zero information leakage",
        "Graph-topology-aware reranking — relevance scoring that understands relationships, not just embedding distance",
        "No data copying — documents, vectors, and relationships live in the same engine. No sync pipelines",
        "Scales to billions of vectors without being limited by how much RAM you can afford",
        "Single binary deployment — no microservice orchestration, no separate vector store to manage",
      ]}
    >
      <CypherSnippet
        code={`// Semantic search with full context — one query
MATCH (doc:Document)
WHERE qgraph.vector_search(doc.embedding, $query_vec, 100) > 0.8
MATCH (doc)-[:AUTHORED_BY]->(author:Person)
MATCH (doc)-[:ABOUT]->(project:Project)
RETURN doc.title, author.name, project.name, doc.score
ORDER BY doc.score DESC
LIMIT 10`}
        caption="Find similar documents with authorship and project context — impossible in a flat vector store"
      />

      <section className="my-10">
        <h3 className="mb-4 text-lg font-semibold">The Flat Vector Problem Is a Liability</h3>
        <div className="space-y-4">
          <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-5">
            <h4 className="mb-1 text-sm font-semibold text-red-400">Today: vectors without context</h4>
            <p className="text-sm text-[var(--text-secondary)]">
              You ingest documents into a vector store. The embeddings capture semantic meaning,
              but everything else is destroyed — who wrote it, what project it belongs to, who can
              access it. To answer &ldquo;find similar documents written by my team that I can see,&rdquo;
              you call the vector store, then the access control service, then your user database,
              then stitch results in application code. Three network round-trips. Three failure points.
              And post-filtering leaks metadata about documents the user shouldn&apos;t know exist.
            </p>
          </div>
          <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-5">
            <h4 className="mb-1 text-sm font-semibold text-emerald-400">With QGraph: vectors in context</h4>
            <p className="text-sm text-[var(--text-secondary)]">
              Documents, embeddings, authors, projects, and permissions live in one engine.
              &ldquo;Find similar documents written by my team that I can see&rdquo; is one Cypher
              query. No separate API calls. No stitching. No sync pipelines. Permissions are
              checked before results are returned — the user never sees documents they
              shouldn&apos;t know exist. Security enforced by architecture, not application logic.
            </p>
          </div>
        </div>
      </section>
    </UseCaseLayout>
  );
}
