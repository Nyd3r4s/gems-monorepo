# Gems Monorepo

A Vue 3 monorepo using Turborepo, containing a component library and micro-frontend application.

## Project Structure

```
gems-monorepo/
├── gems-components/     # Vue 3 component library with Storybook
├── gems-mfe/           # Micro-frontend application
├── package.json        # Workspace configuration
└── turbo.json         # Turborepo configuration
```

## Prerequisites

- Node.js (v18 or higher)
- npm (v8.5.0 or higher)

## Setup

1. Clone the repository:

```bash
git clone <repository-url>
cd gems-monorepo
```

2. Install dependencies for all workspaces:

```bash
npm install
```

## Development

Start all applications in development mode:

```bash
npm run dev
```

This command uses Turborepo to concurrently run:

- Component Library (Storybook): http://localhost:6006
- Micro-frontend: http://localhost:5173

## Workspace Details

### gems-components

Component library featuring:

- Vue 3 components with TypeScript
- Storybook documentation
- TailwindCSS styling
- Dark mode support
- Material Design Icons

Available commands:

```bash
npm run dev        # Start Storybook
npm run build     # Build the library
npm run lint      # Run ESLint
npm run format    # Run Prettier
```

### gems-mfe

Micro-frontend application that consumes the component library.

Available commands:

```bash
npm run dev       # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```

## Technology Stack

- Vue 3
- TypeScript
- TailwindCSS
- Storybook
- Turborepo
- Vite
- Material Design Icons
- ESLint + Prettier

## Turborepo Features

- Shared build caching
- Parallel execution
- Task dependencies
- Workspace management
- Incremental builds

## Configuration Files

- `package.json`: Workspace definitions and shared dependencies
- `turbo.json`: Pipeline configurations for development and build tasks
- `.npmrc`: npm configuration for workspaces
- `tsconfig.json`: Base TypeScript configuration

## Common Issues

If you encounter cache issues:

```bash
# Clear Turborepo cache
npx turbo clean

# Reinstall dependencies
rm -rf node_modules
npm install
```

## License

[MIT](LICENSE)
