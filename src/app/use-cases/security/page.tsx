import UseCaseLayout from "@/components/UseCaseLayout";
import CypherSnippet from "@/components/CypherSnippet";

export default function SecurityPage() {
  return (
    <UseCaseLayout
      icon="🏛️"
      title="Security & Compliance (GRC)"
      subtitle="The fragmented GRC stack is a liability. QGraph replaces it with one engine."
      problem="GRC platforms like Vanta and Diligent duct-tape together a data warehouse (for log history), a graph database (for access control), a vector store (for policy RAG), and a search engine (for monitoring). The cloud bills are enormous. Cross-system data latency makes real-time compliance impossible. When an auditor asks 'was this S3 bucket secure for every minute of Q4?' it takes weeks to assemble the answer from four different systems. This is not a technical inconvenience — it is a compliance liability."
      solution="QGraph replaces the entire fragmented GRC stack with one engine. Identity providers, cloud infrastructure, codebases, policies, and telemetry all live in one connected graph. Blast radius analysis, continuous compliance evidence, automated security questionnaires, data sovereignty enforcement, and AI accountability trails — all from one query language, one data store, one bill."
      differentiators={[
        "One engine replaces graph + vector + OLAP + search — no cross-system latency, no sync pipelines",
        "Instant blast radius: if a credential is compromised, see every system it touches in milliseconds",
        "Continuous compliance evidence: real-time proof infrastructure never drifted, not overnight batch reports",
        "Automated security questionnaires: AI grounded in actual policies and infrastructure graph",
        "Data sovereignty enforcement: geospatial fencing ensures data residency requirements are physically met",
        "AI accountability trails: every automated action has a full, auditable decision graph",
      ]}
    >
      {/* Blast Radius */}
      <section className="my-10">
        <h3 className="mb-4 text-lg font-semibold">1. Instant Blast Radius Analysis</h3>
        <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-5 mb-4">
          <h4 className="mb-1 text-sm font-semibold text-red-400">The problem</h4>
          <p className="text-sm text-[var(--text-secondary)]">
            A SOC 2 auditor asks: &ldquo;If this contractor&apos;s credentials are compromised,
            what can they access?&rdquo; Today, answering this means querying Okta, then AWS IAM,
            then GitHub, then manually tracing the paths between them. It takes hours.
            During those hours, the credential is still active. The blast radius is still expanding.
          </p>
        </div>
        <CypherSnippet
          code={`// Instant blast radius: what can this compromised identity reach?
MATCH (user:Identity {email: $compromised_email})
      -[:HAS_ROLE|MEMBER_OF*1..6]->(resource)
WHERE resource:Database OR resource:Repository OR resource:S3Bucket
RETURN resource.name, resource.type, resource.sensitivity,
       length(path) AS access_hops
ORDER BY resource.sensitivity DESC`}
          caption="Map the full blast radius of a compromised credential — in one query, in milliseconds"
        />
      </section>

      {/* Continuous Compliance */}
      <section className="my-10">
        <h3 className="mb-4 text-lg font-semibold">2. The Continuous Evidence Engine</h3>
        <div className="grid gap-4 md:grid-cols-2 mb-4">
          <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-5">
            <h4 className="mb-1 text-sm font-semibold text-red-400">Today: batch evidence</h4>
            <p className="text-sm text-[var(--text-secondary)]">
              Compliance teams run heavy batch jobs overnight to generate evidence.
              Auditors want cryptographic proof that an S3 bucket was secure for every minute of
              the last 365 days. Assembling that proof takes weeks of data archaeology
              across Snowflake, Datadog, and Neo4j.
            </p>
          </div>
          <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-5">
            <h4 className="mb-1 text-sm font-semibold text-emerald-400">With QGraph: continuous evidence</h4>
            <p className="text-sm text-[var(--text-secondary)]">
              Infrastructure telemetry is ingested in real-time at millions of operations per second.
              When an auditor asks for evidence from any point in time, a single nanosecond query
              retrieves the exact state — proving it never drifted out of compliance.
              Auditors get instant answers. Compliance teams sleep at night.
            </p>
          </div>
        </div>
        <CypherSnippet
          code={`// Point-in-time compliance: was this bucket secure every minute of Q4?
MATCH (bucket:S3Bucket {name: 'customer-pii'})
      -[:CONFIG_AT]->(config:Config)
WHERE config.timestamp >= datetime('2025-10-01')
  AND config.timestamp < datetime('2026-01-01')
  AND (NOT config.encryption_enabled OR NOT config.public_access_blocked)
RETURN config.timestamp, config.encryption_enabled,
       config.public_access_blocked
ORDER BY config.timestamp ASC`}
          caption="Nanosecond query proves infrastructure never drifted out of compliance — for every minute of Q4"
        />
      </section>

      {/* Automated Auditor */}
      <section className="my-10">
        <h3 className="mb-4 text-lg font-semibold">3. The Automated Auditor</h3>
        <div className="rounded-xl border border-[var(--accent)]/30 bg-[var(--accent)]/5 p-6 mb-4">
          <p className="text-sm text-[var(--text-secondary)] mb-3">
            <strong className="text-[var(--text-primary)]">The 500-question problem:</strong> Enterprise
            procurement departments send massive security questionnaires. &ldquo;Describe your encryption-at-rest
            key rotation policy.&rdquo; Each answer requires digging through security policies, Terraform
            configs, and infrastructure documentation. It blocks sales for weeks.
          </p>
          <p className="text-sm text-[var(--text-secondary)]">
            <strong className="text-[var(--text-primary)]">QGraph&apos;s approach:</strong> Your SOC 2 reports,
            security policies, and infrastructure graph all live in one engine. An AI reads the full
            policy document alongside the actual infrastructure state. It answers each question
            autonomously — citing the exact paragraph in the policy and the exact resource in the
            infrastructure graph. Grounded answers, not hallucinated ones. Not hallucinated citations — real,
            traversable proof paths.
          </p>
        </div>
        <CypherSnippet
          code={`// Answer a security questionnaire with grounded evidence
MATCH (q:Question {text: $question_text})
WITH q, qgraph.vector_search(q.embedding, $policy_embeddings, 10) AS matches
MATCH (policy:Policy)-[:GOVERNS]->(resource)
WHERE policy IN matches
MATCH (resource)-[:DEPLOYED_IN]->(env:Environment)
RETURN policy.title, policy.section, policy.text,
       COLLECT(DISTINCT resource.name) AS covered_resources,
       COLLECT(DISTINCT env.region) AS deployment_regions`}
          caption="Every answer grounded in actual policies and infrastructure — not AI hallucination"
        />
      </section>

      {/* Data Sovereignty */}
      <section className="my-10">
        <h3 className="mb-4 text-lg font-semibold">4. Data Sovereignty & GDPR</h3>
        <p className="text-sm text-[var(--text-secondary)] mb-4">
          GDPR, CCPA, and data residency laws require that certain data never physically
          leaves a geographic region. A European citizen&apos;s health data cannot be accessed
          from a US server. QGraph combines geospatial fencing with the access control
          graph to enforce data sovereignty at the query level — not just at the network level.
          Violations are flagged in real-time, not discovered in quarterly audits.
        </p>
        <CypherSnippet
          code={`// Data sovereignty: flag unauthorized cross-border access
MATCH (access:AccessEvent)-[:BY]->(employee:Employee)
MATCH (access)-[:TO]->(data:Dataset {classification: 'PII'})
MATCH (employee)-[:LOCATED_IN]->(emp_loc:Location)
MATCH (data)-[:STORED_IN]->(data_loc:Location)
WHERE emp_loc.country <> data_loc.country
  AND data_loc.region = 'EU'
RETURN employee.name, data.name,
       emp_loc.country AS accessed_from,
       data_loc.country AS data_location,
       access.timestamp`}
          caption="Automatically flag when regulated data is accessed from unauthorized locations"
        />
      </section>

      {/* AI Accountability */}
      <section className="my-10">
        <h3 className="mb-4 text-lg font-semibold">5. Causal AI Accountability Trails</h3>
        <p className="text-sm text-[var(--text-secondary)] mb-4">
          As enterprises deploy AI agents to auto-remediate vulnerabilities — changing firewall
          rules, revoking access, patching configs — a massive problem arises: how do you audit
          a black-box neural network? Dumping AI logs into flat JSON files destroys the context
          of why a decision was made. QGraph treats AI telemetry as a directed acyclic graph.
          Auditors don&apos;t just see &ldquo;Access Revoked.&rdquo; They query the graph to see
          the exact reasoning path the AI traversed. AI transforms from a compliance liability
          into a fully transparent, cryptographically auditable asset.
        </p>
        <CypherSnippet
          code={`// Audit an AI agent's full reasoning chain
MATCH (action:AgentAction {id: $action_id})
      -[:TRIGGERED_BY]->(thought:Thought)
      -[:OBSERVED]->(observation:Observation)
      -[:BASED_ON]->(evidence:Evidence)
MATCH (action)-[:AFFECTED]->(resource)
RETURN action.type, thought.reasoning,
       observation.description,
       COLLECT(evidence.source) AS evidence_chain,
       COLLECT(resource.name) AS affected_systems`}
          caption="Every AI decision has a full Thought → Observation → Action graph trail"
        />
      </section>
    </UseCaseLayout>
  );
}
