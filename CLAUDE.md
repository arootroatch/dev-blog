# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at http://localhost:3000
npm run build    # Production build (also validates static generation)
npm run lint     # ESLint via next lint
npm start        # Start production server (requires build first)
```

There is no test framework configured in this project.

## Architecture

This is a **Next.js 14 App Router** blog with statically generated pages, deployed on Vercel.

### Content Pipeline

1. Blog posts are Markdown files in `/content/` with YAML frontmatter (see `lib/interfaces.ts` for the `Frontmatter` type)
2. `lib/getPosts.ts` reads all `.md` files from `/content/` and parses frontmatter with `gray-matter`
3. `lib/getPost.ts` reads a single post by slug
4. Individual post pages (`app/[slug]/page.tsx`) compile Markdown to React at build time using `next-mdx-remote/rsc`'s `compileMDX`
5. Static params are generated from filenames via `generateStaticParams()`

### Post Frontmatter Schema

```yaml
layout: blog
title: Post Title
author: Alex Root-Roatch
description: Brief description
date: 2024-05-29T19:51:46-6:00
updated: 2024-05-29T19:51:46-6:00
thumbnail: /img/banner.png
category:
  - Clojure
gated: false  # optional
```

### Key Directories

- `app/` — Next.js App Router pages (home page, dynamic `[slug]` post pages, sitemap, layout, providers)
- `components/` — React components with co-located CSS Modules (`.module.css`)
- `lib/` — Utility functions for content loading, sorting, and DOM manipulation
- `content/` — ~100 Markdown blog posts
- `public/img/` — Post thumbnails and static images

### Routing

- `/` — Home page listing posts by category (defined in `lib/sortPostsByCategory.ts`)
- `/[slug]` — Individual post pages, slug matches filename in `/content/` without extension
- `/ttt` — Rewritten to `/ttt/index.html` (static tic-tac-toe game)

### Styling

- **CSS Modules** for component-scoped styles
- **CSS custom properties** in `app/globals.css` for theming (`.dark` / `.light` classes)
- **next-themes** (`app/providers.tsx`) handles dark/light mode switching
- Fonts: Montserrat (body), Syne Mono (headings/code)

### Client vs Server Components

- Page components (`app/page.tsx`, `app/[slug]/page.tsx`) are **async server components**
- Interactive components are marked `"use client"`: Navbar, SearchBar, PostScroller, PostSidebar, ThemeButton, CategoryNav

### Search

Client-side fuzzy search using `fuse.js` in `SearchBar.tsx`, with `downshift` for the dropdown UI. Posts are passed from the root layout to the Navbar.

### Categories

Categories are defined as a fixed ordered list in `lib/sortPostsByCategory.ts`. Posts are grouped by matching their `category` frontmatter array against this list. To add a new category, add it to the `categories` array there.

### Path Aliases

`@/*` maps to the project root (configured in `tsconfig.json`).