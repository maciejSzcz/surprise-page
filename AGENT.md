# Agent Configuration

## Commands
- **Development**: `npm start` or `npm run dev`
- **Build**: `npm run build`
- **Lint**: `npm run lint`
- **Format**: `npm run fmt` (check with `npm run fmt.check`)
- **Type Check**: `npm run build.types`
- **Preview**: `npm run preview`
- **Deploy**: `npm run deploy` (Cloudflare Pages)

## Architecture
- **Framework**: Qwik City (SSR-enabled React-like framework)
- **Deployment**: Cloudflare Pages with Wrangler
- **Structure**: File-based routing in `src/routes/`, components in `src/components/`
- **Entry Points**: `src/entry.ssr.tsx` (SSR), `src/entry.cloudflare-pages.tsx` (Cloudflare)

## Code Style
- **Language**: TypeScript with strict mode
- **Imports**: Use `~/` for src imports, ES modules only
- **Components**: Use `component$()` for Qwik components
- **Styling**: Inline CSS imports with `?inline`, `useStyles$()`
- **Naming**: camelCase for variables/functions, PascalCase for components
- **Formatting**: Prettier configured, TSX/JSX with Qwik's `$` conventions
