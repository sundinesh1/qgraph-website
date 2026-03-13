interface CypherSnippetProps {
  code: string;
  caption?: string;
}

function highlightCypher(code: string): string {
  const keywords = [
    "MATCH", "WHERE", "RETURN", "WITH", "CREATE", "SET", "DELETE",
    "ORDER BY", "LIMIT", "UNWIND", "CALL", "YIELD", "AS", "AND", "OR",
    "NOT", "IN", "OPTIONAL", "MERGE", "ON", "CASE", "WHEN", "THEN",
    "ELSE", "END", "DESC", "ASC", "DISTINCT", "COLLECT", "COUNT",
  ];

  let result = code;

  // Comments
  result = result.replace(/(\/\/.*)/g, '<span class="cypher-comment">$1</span>');

  // Strings
  result = result.replace(/('[^']*'|"[^"]*")/g, '<span class="cypher-string">$1</span>');

  // Labels :Label
  result = result.replace(/(:\w+)/g, '<span class="cypher-label">$1</span>');

  // Properties .prop
  result = result.replace(/\.(\w+)/g, '.<span class="cypher-property">$1</span>');

  // Keywords (case-insensitive, whole word)
  for (const kw of keywords) {
    const regex = new RegExp(`\\b(${kw})\\b`, "g");
    result = result.replace(regex, '<span class="cypher-keyword">$1</span>');
  }

  return result;
}

export default function CypherSnippet({ code, caption }: CypherSnippetProps) {
  return (
    <div className="my-6">
      <div
        className="cypher-block"
        dangerouslySetInnerHTML={{ __html: highlightCypher(code) }}
      />
      {caption && (
        <p className="mt-2 text-center text-xs text-[var(--text-secondary)]">{caption}</p>
      )}
    </div>
  );
}
