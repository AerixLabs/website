# GEMINI.md - Project Context & Instructions

This file provides architectural context and development guidelines for the **Astro Starter Pro** project to ensure consistent and high-quality contributions.

## Project Overview

**Astro Starter Pro** is a modern, high-performance web template built with:

- **Framework:** [Astro 5](https://astro.build/) (using the `glob` loader for content).
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/) (using `@tailwindcss/vite`).
- **Language:** TypeScript (Strict mode).
- **Content:** Markdown and MDX via Astro Content Collections.
- **Features:** Dark/Light mode, SEO optimization (JSON-LD, Open Graph), View Transitions, and native scroll animations.

### Architecture

The project follows a modular, component-based architecture:

- **`src/layouts/`**: Contains the primary `BaseLayout.astro` which handles SEO, transitions, themes, and global analytics.
- **`src/components/ui/`**: Low-level, reusable UI atoms (e.g., `Button.astro`, `Card.astro`).
- **`src/components/widgets/`**: High-level section components used to build pages (e.g., `Hero.astro`, `Features.astro`).
- **`src/config/site.ts`**: Centralized configuration for site metadata, navigation, and social links.
- **`src/content/`**: Managed content collections (currently only `blog`).
- **`src/pages/`**: File-based routing, including dynamic routes for blog posts, categories, and tags.

## Building and Running

Use the following commands for development and deployment:

| Command             | Description                                                      |
| :------------------ | :--------------------------------------------------------------- |
| `npm run dev`       | Start the local development server (typically `localhost:4321`). |
| `npm run build`     | Build the production-ready site into the `dist/` directory.      |
| `npm run preview`   | Preview the local production build.                              |
| `npm run check`     | Run Astro's diagnostic check.                                    |
| `npm run typecheck` | Run TypeScript compiler check (`tsc --noEmit`).                  |
| `npm run lint`      | Run ESLint with auto-fix.                                        |
| `npm run format`    | Run Prettier to format code.                                     |
| `npm run fix`       | Run both `format` and `lint` auto-fix.                           |
| `npm test`          | Run tests via Vitest.                                            |

## Development Conventions

### Coding Style

- **TypeScript:** Use strict typing. Define interfaces for component props.
- **Components:** Favor functional components in `.astro` files. Use the `---` frontmatter for logic and imports.
- **Styling:** Use Tailwind CSS 4 utility classes. Prefer the new `bg-linear-to-*` syntax for gradients.
- **Imports:** Use the `@/` alias to reference the `src/` directory (e.g., `import Button from "@/components/ui/Button.astro"`).
- **Themes:** Theme switching is handled via a `data-theme` attribute on the `<html>` element.

### Component Design

- **Buttons:** Use the `Button.astro` component which handles both `<button>` and `<a>` tags dynamically.
- **SEO:** Always wrap page content in `BaseLayout.astro` and provide appropriate `metadata` props.
- **Animations:** Use the `.reveal` class on elements to trigger scroll animations via the `IntersectionObserver` defined in `BaseLayout.astro`.

### Content Guidelines

- **Blog Posts:** New posts should be added to `src/content/blog/`. Ensure they follow the schema defined in `src/content.config.ts` (title, description, pubDate, author, etc.).
- **Images:** Place images to be processed in `src/assets/images/` and static assets in `public/`.

### Tooling & Quality

- **Linting:** ESLint is configured with `eslint-plugin-astro` and `typescript-eslint`.
- **Formatting:** Prettier is used for consistent code style across `.astro`, `.ts`, and `.css` files.
- **Git Hooks:** Husky and `lint-staged` are configured to run linting and formatting before each commit.

## Deployment

The project is optimized for deployment on **Vercel**, utilizing `@vercel/analytics` and `@vercel/speed-insights`. Ensure the `site` URL in `astro.config.mjs` is updated to the production domain.
