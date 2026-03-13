import UseCaseLayout from "@/components/UseCaseLayout";
import CypherSnippet from "@/components/CypherSnippet";

export default function GeospatialPage() {
  return (
    <UseCaseLayout
      icon="🌍"
      title="Geospatial"
      subtitle="Spatial databases can't traverse. Graph databases can't geofence. QGraph does both."
      problem="Your spatial database answers 'what's nearby?' but can't traverse relationships. Your graph database can follow connections but can't do geofencing. Your vector store finds similar items but has no concept of physical location. To answer 'find restaurants within 2km that my friends visited and that match my taste profile,' you query three separate systems and stitch results in application code. Three network calls. Hundreds of milliseconds. Inconsistent results. And none of these systems understand data sovereignty — which geographic region a piece of data is allowed to exist in."
      solution="QGraph fuses location, relationships, and similarity into one query engine. 'What's nearby, connected to me, and matches my preferences?' is a single Cypher query — not three API calls and an application layer to join them. Geofencing, spatial search, relationship traversal, and semantic matching all happen in one pass over one data store. Data sovereignty enforcement is native — geographic boundaries are first-class constraints."
      differentiators={[
        "Spatial + relational + semantic in one query — no competitor can do all three",
        "Data sovereignty enforcement: geographic boundaries are first-class query constraints, not network rules",
        "Real-time fleet and IoT tracking: moving assets across space and time with graph context",
        "Geofence-aware access control: spatial boundaries combined with permission rules",
        "No separate systems to sync — locations, relationships, and vectors share one engine",
        "One query language for distance calculations, polygon checks, graph traversals, and similarity search",
      ]}
    >
      <CypherSnippet
        code={`// Spatial + social graph + semantic similarity in one query
MATCH (me:User {id: $user_id})-[:FRIENDS]->(friend:User)
MATCH (friend)-[:VISITED]->(place:Place)
WHERE qgraph.distance(place.location, $my_location) < 2000
  AND qgraph.vector_search(place.embedding, me.taste_vec, 50) > 0.7
RETURN place.name, place.category,
       COUNT(friend) AS friend_visits,
       qgraph.distance(place.location, $my_location) AS meters
ORDER BY friend_visits DESC, meters ASC
LIMIT 10`}
        caption="Three data paradigms — spatial, relational, semantic — unified in one Cypher query"
      />

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
        caption="Automatically flag when regulated data is accessed from unauthorized geographic locations"
      />

      <section className="my-10 rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-5">
        <p className="text-sm font-semibold text-emerald-400 mb-1">The Result</p>
        <p className="text-sm text-[var(--text-secondary)]">
          Location-aware intelligence that understands relationships and meaning — not just coordinates.
          Data sovereignty enforced at the query level, not just the network level. GDPR and data
          residency requirements met architecturally. Fleet tracking, geofencing, and spatial
          analytics unified with the same graph engine that handles everything else.
        </p>
      </section>
    </UseCaseLayout>
  );
}
