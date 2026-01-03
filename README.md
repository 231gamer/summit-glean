# Project Template

This repository is a Vite + React + TypeScript starter using Tailwind CSS and shadcn-style UI components.

## Project info

- **Local dev**: run the dev server with `npm i` then `npm run dev`.
- **Build**: `npm run build` produces the production build in the `dist/` folder.

## How to edit and work locally

1. Clone the repository:

```sh
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_FOLDER>
```

2. Install dependencies and start the dev server:

```powershell
npm i
npm run dev
```

3. Useful scripts:

- `npm run dev` — start development server (Vite)
- `npm run build` — production build
- `npm run preview` — preview production build
- `npm run lint` — run ESLint
- `npm run typecheck` — run TypeScript type checking (no emit)

## Technologies used

- Vite
- React
- TypeScript
- Tailwind CSS
- shadcn-style UI components (Radix + primitives)

## Deployment

This project can be deployed to static hosting (Netlify, Vercel, GitHub Pages) or any static host.

## Custom domain

Connect a custom domain using your hosting provider's domain settings. Most hosts provide documentation for connecting DNS and SSL.

If you want, I can add a CI workflow to run lint/typecheck/build on PRs and provide a deploy step.
