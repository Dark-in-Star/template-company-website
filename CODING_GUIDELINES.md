# Project Coding Guidelines

This document provides a guide to the project's structure, naming conventions, and local setup. Following these guidelines will help maintain code quality and consistency.

## Getting Started: Running Locally

Follow these steps to get your development environment set up and running.

### Prerequisites
- [Node.js](https://nodejs.org/en/) (version 20 or later recommended)
- [Yarn](https://yarnpkg.com/getting-started/install)

### 1. Installation

First, install the project dependencies using Yarn:

```bash
yarn install
```

### 2. Set Up Environment Variables

Create a `.env` file in the root of your project by copying the example file:

```bash
cp .env.example .env
```

You will need to populate this file with your Google AI (Gemini) API key for the Genkit features to work.

```
GEMINI_API_KEY=your_gemini_api_key_here
```

### 3. Running the Development Server

You need to run two separate processes in two different terminals for the full application to work.

- **Run the Next.js App**: This starts the main application.
  ```bash
  yarn dev
  ```
  The application will be available at [http://localhost:9002](http://localhost:9002).

- **Run Genkit**: This starts the AI development server for your flows.
  ```bash
  yarn genkit:dev
  ```
  This allows you to inspect and test your AI flows separately.

---

## Folder Structure

The project follows a standard Next.js App Router structure with some additional directories for organization.

```
.
├── src/
│   ├── app/                # Main application routes (pages)
│   │   ├── (folder-name)/  # A route group
│   │   │   ├── page.tsx    # The UI for a specific route
│   │   │   └── layout.tsx  # A layout for a specific route
│   │   └── globals.css     # Global styles and Tailwind directives
│   │
│   ├── components/         # Reusable React components
│   │   ├── layout/         # Components related to the overall page layout (Header, Footer)
│   │   ├── shared/         # Components used across multiple pages
│   │   ├── home/           # Components specific to the home page
│   │   └── ui/             # ShadCN UI components (Button, Card, etc.)
│   │
│   ├── lib/                # Utility functions, type definitions, and data loaders
│   │   ├── data.ts         # Central export for all data files
│   │   ├── types.ts        # TypeScript type definitions
│   │   └── utils.ts        # General utility functions
│   │
│   ├── ai/                 # Genkit AI-related code
│   │   ├── flows/          # Genkit flows for specific AI tasks
│   │   └── genkit.ts       # Genkit configuration
│   │
│   ├── data/               # JSON files acting as a mock database
│   │
│   ├── services/           # Mock services that simulate backend operations
│   │
│   └── hooks/              # Custom React hooks
│
├── public/                 # Static assets (images, fonts, etc.) - Not used for images in this project
│
└── ... (config files)
```

---

## Naming Conventions

Consistent naming is crucial for a readable and maintainable codebase.

### Folders

-   **Route Folders**: Use `kebab-case` for folder names that define URL segments (e.g., `/privacy-policy`).
-   **Component Folders**: Use `PascalCase` if you need to group related components (e.g., `src/components/UserProfile/`). Otherwise, components can be co-located in feature-specific folders (`home`, `shared`).

### Files

-   **React Components**: Use `PascalCase.tsx` (e.g., `BlogCard.tsx`).
-   **Next.js Pages/Layouts**: Use `page.tsx`, `layout.tsx`, or `not-found.tsx` as per Next.js conventions.
-   **Library/Utility/Hook Files**: Use `camelCase.ts` or `kebab-case.ts` (e.g., `use-mobile.tsx`, `utils.ts`).
-   **Data Files**: Use `kebab-case.json` (e.g., `blog-posts.json`).

### Variables & Functions

-   **Variables & Functions**: Use `camelCase` (e.g., `const userCount = 0;`, `function getUser() {}`).
-   **React Components & Types/Interfaces**: Use `PascalCase` (e.g., `function MyComponent() {}`, `type BlogPost = { ... }`).
-   **Constants**: Use `UPPER_SNAKE_CASE` for top-level constants that are truly fixed and global (e.g., `const DEFAULT_MAX_LENGTH = 100;`).
-   **Booleans**: Prefix with `is`, `has`, or `should` for clarity (e.g., `const isOpen = false;`).
