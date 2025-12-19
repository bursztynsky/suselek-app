# Hotelik "Susełek" - Website

A professional website for "Susełek" pet hotel, specializing in care for rabbits, guinea pigs, and other small animals.

## Tech Stack

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe development
- **SCSS Modules** - Scoped styling
- **React 19** - Latest React features

## Features

- 🔍 **SEO Optimized** - Pre-rendered pages with metadata for better search engine visibility
- 📱 **Responsive Design** - Works on all devices
- ⚡ **Fast Performance** - Static site generation for optimal loading times
- 🎨 **Modern UI** - Clean and professional design
- 📄 **Static Export** - Deployable to any static hosting

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000/suselek-app](http://localhost:3000/suselek-app) in your browser.

### Build

Create a production build:

```bash
npm run build
```

The static files will be generated in the `out/` directory.

### Lint

Run ESLint:

```bash
npm run lint
```

Format code with Prettier:

```bash
npm run format
```

## Project Structure

```
src/
├── app/              # Next.js app router pages
│   ├── layout.tsx    # Root layout with metadata
│   ├── page.tsx      # Home page
│   ├── about/        # About page
│   └── contact/      # Contact page
├── components/       # React components
├── styles/           # SCSS module files
├── assets/           # Images and static files
├── globals.scss      # Global styles
└── _variables.scss   # SCSS variables
```

## Pages

- **Home** (`/`) - Main landing page with services overview
- **About** (`/about`) - Hotel information and additional services
- **Contact** (`/contact`) - Contact information

## Deployment

The project is configured for static export and can be deployed to:

- GitHub Pages
- Vercel
- Netlify
- Any static hosting service

See [MIGRATION.md](./MIGRATION.md) for detailed migration information from Vite to Next.js.

## License

Private project for Hotelik "Susełek"
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
