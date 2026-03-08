# 🚀 Aerix Labs Website

Source code for the Aerix Labs website, built with **[Astro 5](https://astro.build/) + [Tailwind CSS 4](https://tailwindcss.com/)**.

<br>

## Tech Stack

- **[Astro 5](https://astro.build/)**: The web framework for building content-driven websites.
- **[Tailwind CSS 4](https://tailwindcss.com/)**: A utility-first CSS framework for rapid UI development.
- **[TypeScript](https://www.typescriptlang.org/)**: Strongly typed programming language.
- **[MDX](https://mdxjs.com/)**: Markdown for the component era.

<br>

## Project Structure

```text
/
├── public/                # Static assets
├── src/
│   ├── assets/            # Processed images and assets
│   ├── components/        # Reusable UI components
│   ├── config/            # Site configuration
│   ├── content/           # Blog and content collections
│   ├── layouts/           # Page layouts
│   ├── pages/             # Routing
│   ├── styles/            # CSS and Tailwind
│   ├── types/             # TypeScript definitions
│   └── content.config.ts  # Content Collections config
├── astro.config.mjs       # Astro config
└── tailwind.config.mjs    # Tailwind CSS config
```

<br>

## Quick Start

```bash
npm install
npm run dev
```

<br>

## Configuration

Site information is managed in `src/config/site.ts`.

## Commands

| Command             | Action                         |
| :------------------ | :----------------------------- |
| `npm run dev`       | Starts the development server. |
| `npm run build`     | Generates the static site.     |
| `npm run preview`   | Previews the production build. |
| `npm run lint`      | Runs ESLint.                   |
| `npm run format`    | Formats code with Prettier.    |
| `npm run check`     | Runs astro check.              |
| `npm run typecheck` | Verifies TypeScript types.     |

<br>

## License

Proprietary and confidential. All rights reserved.
