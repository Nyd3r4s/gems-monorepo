# GEMS Vue 3 Monorepo

A monorepo containing shared components and micro-frontend applications built with Vue 3, TypeScript, and Tailwind CSS.

## Project Structure

gems-monorepo/
├── gems-components/ # Shared component library
└── gems-mfe/ # Micro-frontend application

## Features

- 🚀 Vue 3 with Composition API
- 💪 TypeScript
- 🎨 Tailwind CSS
- 📚 Storybook for component documentation
- 🔧 ESLint + Prettier for code quality
- 🛠️ Vite for fast development
- 🧪 Component testing setup

## Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)

## Quick Start

1. Clone the repository:

```
bash
git clone <repository-url>
cd gems-monorepo
```

2. Install dependencies for both projects:

```
nstall components library dependencies
cd gems-components
npm install
Install MFE dependencies
cd ../gems-mfe
npm install
```

## Development

### Component Library (gems-components)

```
cd gems-components
Start development server
npm run dev
Run Storybook
npm run storybook
Build for production
npm run build
Run linting
npm run lint
Format code
npm run format
```

### Micro Frontend (gems-mfe)

```
cd gems-mfe
Start development server
npm run dev
Run Storybook
npm run storybook
Build for production
npm run build
Run linting
npm run lint
Format code
npm run format
```

## Tech Stack

- Vue 3
- TypeScript
- Tailwind CSS
- Vite
- Storybook
- ESLint
- Prettier

## Project Structure Details

### gems-components/

- `src/components/` - Reusable Vue components
- `src/stories/` - Storybook stories
- `.storybook/` - Storybook configuration
- `tailwind.config.js` - Tailwind CSS configuration

### gems-mfe/

- `src/` - MFE application source code
- `src/components/` - Application-specific components
- `src/router/` - Vue Router configuration
- `tailwind.config.js` - Tailwind CSS configuration

## Contributing

1. Create a new branch
2. Make your changes
3. Submit a pull request

## Useful Commands

Clean and reinstall dependencies:

```
Remove dependencies and build artifacts
rm -rf node_modules package-lock.json dist
Clean npm cache
npm cache clean --force
Reinstall dependencies
npm install
```

## License

[MIT](LICENSE)
