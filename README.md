# Qbits Spanish Water Dog Kennel (New York City)

A fast, accessible, SEO/LLM-optimized one-page website built with **Astro** for **Qbits Spanish Water Dog Kennel** in New York City, NY.

## Quick Start

```bash
# Start local development server (http://localhost:4321)
npm run dev

# Regenerate the fillable PDF application & build static site into ./dist
npm run build

# Preview production build locally
npm run preview
```

## How to Customize Copy, Dogs & Stock Photography

1. **Edit Website Copy & Dog Details (`Dudley` & `Molly`)**:
   - Open [`src/data/kennelData.ts`](./src/data/kennelData.ts) to update registered names, titles, OFA health clearance IDs, planned litter dates (`Fall 2027 & Spring 2028`), breed care cards, and FAQs.
2. **Swap Out Stock Photography**:
   - Replace the image files inside [`public/images/`](./public/images/) (`hero-swd.jpg`, `dudley-stud.jpg`, `molly-bitch.jpg`, `puppies-litter.jpg`, `nyc-park-swd.jpg`, `water-work-swd.jpg`), or update the image paths in [`src/data/kennelData.ts`](./src/data/kennelData.ts).
3. **Customize the Fillable & Printable PDF Puppy Application**:
   - Edit [`scripts/generate-application-pdf.mjs`](./scripts/generate-application-pdf.mjs) and run `npm run generate:pdf` to regenerate [`public/qbits-puppy-application.pdf`](./public/qbits-puppy-application.pdf).
4. **LLM & Search Engine Files**:
   - [`public/llms.txt`](./public/llms.txt) and [`public/llms-full.txt`](./public/llms-full.txt) provide structured Markdown summaries for AI search engines (ChatGPT, Perplexity, Claude, Gemini).
   - [`public/robots.txt`](./public/robots.txt) and [`public/sitemap.xml`](./public/sitemap.xml) configure search crawler indexing.
