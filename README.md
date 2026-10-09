# Whatbytes Store

A responsive e-commerce frontend built with Next.js, Tailwind CSS and lucide-react.

## Live Demo

https://whatbytes-store-three.vercel.app/

## Features

- Product listing with responsive grid (3 columns desktop, 2 tablet, 1 mobile)
- Category filter and price range slider
- Search with string matching
- URL-based filters (e.g. `?category=electronics&price=0-500`)
- Product detail page with dynamic routing (`/product/[id]`)
- Cart page with quantity controls, remove item and price summary
- Cart state with React Context, persisted in localStorage
- "No products found" message when filters match nothing

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- lucide-react and react-icons

## Run Locally

```bash
bun install
bun dev
```

Open http://localhost:3000