# QGraph Website

Marketing website for QGraph — the Data Operating System for the AI Enterprise.

Built with Next.js 16, React 19, Tailwind CSS 4, and TypeScript.

## Prerequisites

- **Node.js** 18+ (tested on 25.x)
- **npm** 8+ (comes with Node)

## Quick Start

```bash
# Install dependencies
npm install

# Start dev server (hot reload)
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
# Build static export
npm run build

# Output is in the `out/` directory
```

The site is configured for static export (`output: "export"` in `next.config.js`), so the `out/` folder contains plain HTML/CSS/JS that can be deployed to any static host.

## Deploy

The `out/` directory can be served by any static hosting provider:

```bash
# Serve locally with npx
npx serve out

# Or deploy to any static host
# Vercel, Netlify, GitHub Pages, S3 + CloudFront, etc.
```

### GitHub Pages

```bash
npm run build
# Push the `out/` directory to your gh-pages branch
```

### Docker (optional)

```bash
docker run -p 8080:80 -v $(pwd)/out:/usr/share/nginx/html:ro nginx:alpine
```

## Project Structure

```
src/
  app/
    page.tsx                    # Landing page
    architecture/page.tsx       # Technical architecture (Five Pillars)
    pricing/page.tsx            # Pricing tiers
    getting-started/page.tsx    # Quick start + Cypher examples
    use-cases/
      page.tsx                  # Solutions index
      htap/page.tsx             # Graph Database
      vector-search/page.tsx    # Vector Search
      rag/page.tsx              # Hallucination-Free AI (RAG)
      observability/page.tsx    # Observability
      governance/page.tsx       # Data Governance
      rbac/page.tsx             # Access Control
      geospatial/page.tsx       # Geospatial
      security/page.tsx         # Security & GRC
      ml-ai/page.tsx            # ML & AI
    compare/
      page.tsx                  # Full competitor landscape (9 competitors)
      neo4j/page.tsx            # vs Neo4j
      pinecone/page.tsx         # vs Pinecone
      datadog/page.tsx          # vs Datadog
  components/
    Navbar.tsx                  # Navigation with dropdowns
    Footer.tsx                  # Site footer
    FeatureCard.tsx             # Linked capability card
    CypherSnippet.tsx           # Syntax-highlighted Cypher blocks
    UseCaseLayout.tsx           # Shared layout for use-case pages
    UseCaseTabs.tsx             # Interactive tabbed use-case showcase
    CompetitorGrid.tsx          # Tabbed competitor comparison
    FAQ.tsx                     # Accordion FAQ
    ComparisonTable.tsx         # Head-to-head comparison tables
    StatCounter.tsx             # Stat display
```

## Pages (20 total)

| Route | Description |
|-------|-------------|
| `/` | Landing page — Five Pillars, business impact, use-case tabs |
| `/architecture` | Technical architecture deep dive |
| `/pricing` | Free / Pro / Enterprise tiers |
| `/getting-started` | 5-min quickstart, Cypher examples, deploy options |
| `/use-cases` | Solutions index (9 capabilities) |
| `/use-cases/htap` | Graph Database |
| `/use-cases/vector-search` | Vector Search |
| `/use-cases/rag` | Hallucination-Free AI (RAG) |
| `/use-cases/observability` | Observability |
| `/use-cases/governance` | Data Governance |
| `/use-cases/rbac` | AI-Safe Access Control |
| `/use-cases/geospatial` | Geospatial |
| `/use-cases/security` | Security & Compliance (GRC) |
| `/use-cases/ml-ai` | ML & AI |
| `/compare` | Full competitor landscape (9 competitors) |
| `/compare/neo4j` | QGraph vs Neo4j |
| `/compare/pinecone` | QGraph vs Pinecone |
| `/compare/datadog` | QGraph vs Datadog |

## Tech Stack

- **Next.js 16** — App Router, static export
- **React 19** — Server and client components
- **Tailwind CSS 4** — Utility-first styling via `@tailwindcss/postcss`
- **TypeScript 5** — Type safety

## License

Proprietary. All rights reserved.
