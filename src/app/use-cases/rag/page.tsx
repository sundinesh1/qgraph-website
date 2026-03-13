import UseCaseLayout from "@/components/UseCaseLayout";
import CypherSnippet from "@/components/CypherSnippet";

export default function RAGPage() {
  return (
    <UseCaseLayout
      icon="🧠"
      title="Hallucination-Free AI (RAG)"
      subtitle="Enterprise AI hallucinates because it lacks context. QGraph delivers deterministic, permission-aware grounding."
      problem="Standard AI deployments rely on standalone vector databases to perform RAG. But vectors only understand semantic similarity — they don't understand truth, hierarchy, or relationships. This is why enterprise AI hallucinates. Your LLM gets 50 text fragments with no understanding of how they're connected — who wrote them, what entities they reference, or whether the user is even allowed to see them. Worse: most systems check permissions after retrieval, meaning the LLM already used restricted content to shape its answer. Information has already leaked — you just hid the citations."
      solution="QGraph executes hybrid vector-graph traversals natively in a single query. When your AI agent searches for a policy, it doesn't just find a semantically similar text chunk. It instantly traverses the graph to understand who wrote the document, which specific servers the policy applies to, and whether those servers are currently active. Permissions are checked before any data is retrieved — the LLM never sees restricted content. Not after. Before. Absolute, deterministic grounding."
      differentiators={[
        "Hybrid vector-graph retrieval in one query — semantic similarity fused with structural knowledge",
        "Permission-aware from the start: access control evaluated before retrieval. Zero information leakage",
        "Results enriched with entity relationships, authorship, and organizational context — not flat text chunks",
        "100% accuracy on complex procurement questionnaires — citing exact nodes and code lines in the graph",
        "Deterministic proof paths — real, traversable evidence chains. Not hallucinated citations",
        "Deploy on your infrastructure — sensitive enterprise data never leaves your environment",
      ]}
    >
      <CypherSnippet
        code={`// Permission-aware knowledge retrieval with graph grounding
// Access control is checked BEFORE search, not after
MATCH (user:User {id: $user_id})-[:HAS_ACCESS*]->(scope:Scope)
MATCH (doc:Document)-[:IN_SCOPE]->(scope)
WHERE qgraph.vector_search(doc.embedding, $question_vec, 50) > 0.75
MATCH (doc)-[:MENTIONS]->(entity:Entity)
      -[:RELATED_TO*1..2]->(context:Entity)
RETURN doc.text, COLLECT(DISTINCT context.name) AS grounding
ORDER BY doc.score DESC
LIMIT 5`}
        caption="The LLM never sees documents the user can't access — zero information leakage, deterministic grounding"
      />

      <section className="my-10 rounded-xl border border-[var(--accent)]/30 bg-[var(--accent)]/5 p-6">
        <h3 className="mb-3 text-lg font-semibold text-[var(--accent-light)]">
          Why Permission-Aware RAG Is Non-Negotiable
        </h3>
        <div className="space-y-4">
          <div>
            <p className="text-sm font-semibold text-[var(--text-primary)] mb-1">The catastrophic flaw in standard RAG:</p>
            <p className="text-sm text-[var(--text-secondary)]">
              Traditional RAG systems find 50 relevant documents, feed them all to the LLM,
              then remove the 30 the user shouldn&apos;t see from the final response.
              But the LLM already used that restricted content to shape its answer.
              Information has already leaked — you just hid the citations. This is not a
              theoretical risk. It is happening in production right now at enterprises
              that deployed standard RAG without understanding this failure mode.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-[var(--text-primary)] mb-1">QGraph&apos;s architectural guarantee:</p>
            <p className="text-sm text-[var(--text-secondary)]">
              The user&apos;s accessible documents are determined first, in microseconds,
              by traversing the permission graph. Vector search only runs against documents
              the user is authorized to see. The LLM only receives authorized content.
              No post-filtering. No information leakage. Security enforced by architecture,
              not application logic.
            </p>
          </div>
        </div>
      </section>

      <section className="my-10 rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-5">
        <p className="text-sm font-semibold text-emerald-400 mb-1">The Result</p>
        <p className="text-sm text-[var(--text-secondary)]">
          The AI answers complex procurement questionnaires and engineering queries with
          100% accuracy, citing exact nodes and code lines in the graph. Not hallucinated
          citations — real, traversable proof paths. Absolute, deterministic grounding
          that satisfies the strictest SOC 2 and GDPR auditors.
        </p>
      </section>
    </UseCaseLayout>
  );
}
