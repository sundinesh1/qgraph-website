import UseCaseLayout from "@/components/UseCaseLayout";
import CypherSnippet from "@/components/CypherSnippet";

export default function RBACPage() {
  return (
    <UseCaseLayout
      icon="🔐"
      title="AI-Safe Access Control"
      subtitle="Application-layer filtering can be bypassed. QGraph bakes permissions into the data plane."
      problem="CISOs are terrified of letting AI agents touch production data because traditional access control (like Okta) sits in the application layer, completely disconnected from the storage layer. If an AI goes rogue, data leaks. Permissions are flat ACL tables that take hundreds of milliseconds to evaluate. Revocation takes 5 to 30 minutes to sync across systems. Enterprise search post-filters results after retrieval, leaking metadata about documents the user shouldn't know exist. When auditors ask 'why does Alice have access to this document?' engineers spend hours grepping through log files."
      solution="QGraph bakes permissions directly into graph nodes and columns at the bare-metal storage level. This is not application-layer filtering that can be bypassed — it is architecturally enforced at the data plane. Checking 'can Alice access document X?' is following a path through the permission graph — instant, not a table scan. Revoking access is removing a connection — visible immediately, not after a sync cycle. Every access decision comes with a full proof path that auditors can inspect directly."
      differentiators={[
        "Storage-level enforcement — permissions baked into the data plane, not the application layer. Cannot be bypassed",
        "Instant validation — checking access is following a graph path, not scanning a flat table",
        "Instant revocation — removing a permission is immediate, not a 5–30 minute sync lag across systems",
        "Full audit trail — every decision includes the proof path: Alice → Engineering → Data Reader → Analytics → Q4 Report",
        "Zero information leakage — search checks permissions before returning results, not after. No metadata leaks",
        "Plugs into existing identity infrastructure — Active Directory, Okta, Google Workspace, SCIM",
      ]}
    >
      <CypherSnippet
        code={`// Audit trail: explain WHY Alice has access to Q4 Report
MATCH path = (alice:User {name: 'Alice'})
              -[:MEMBER_OF]->(group:Group)
              -[:HAS_ROLE]->(role:Role)
              -[:GRANTS_ACCESS]->(folder:Folder)
              -[:CONTAINS]->(doc:Document {name: 'Q4 Report'})
RETURN [n IN nodes(path) | n.name] AS proof_chain`}
        caption="Every access decision has a traceable proof path — Alice → Engineering → Data Reader → Analytics → Q4 Report"
      />

      <section className="my-10 rounded-xl border border-[var(--accent)]/30 bg-[var(--accent)]/5 p-6">
        <h3 className="mb-3 text-lg font-semibold text-[var(--accent-light)]">
          Why This Is Non-Negotiable for AI Agents
        </h3>
        <div className="space-y-4">
          <div>
            <p className="text-sm font-semibold text-[var(--text-primary)] mb-1">The existential risk:</p>
            <p className="text-sm text-[var(--text-secondary)]">
              Application-layer access control was designed for human users clicking through UIs.
              AI agents don&apos;t use UIs. They make thousands of API calls per second, probing for
              data they can reach. If permissions are enforced in the application layer, the agent
              bypasses it. This is not theoretical — it is the #1 reason CISOs block enterprise AI adoption.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-[var(--text-primary)] mb-1">QGraph&apos;s architectural guarantee:</p>
            <p className="text-sm text-[var(--text-secondary)]">
              You can safely expose your entire corporate infrastructure graph to an AI agent.
              The agent traverses the graph to analyze security postures and audit rules, but
              the database physically blocks it from querying row-level customer PII. Security
              enforced by architecture, not application logic. The agent can&apos;t bypass what
              doesn&apos;t exist in its query space.
            </p>
          </div>
        </div>
      </section>

      <section className="my-10 rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-5">
        <p className="text-sm font-semibold text-emerald-400 mb-1">The Result</p>
        <p className="text-sm text-[var(--text-secondary)]">
          Enterprise AI unblocked. AI agents that operate autonomously, safely, and transparently —
          with deterministic proofs for SOC 2 and GDPR auditors. Security enforced by architecture,
          not application logic. Zero information leakage. Full audit trails.
        </p>
      </section>
    </UseCaseLayout>
  );
}
