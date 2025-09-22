# Procellence Technology Website

This is a Next.js project bootstrapped with `create-next-app` and customized for Procellence Technology. It uses Genkit for AI features, ShadCN for UI components, and Tailwind CSS for styling.

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/en/) (version 20 or later recommended)
- [Yarn](https://yarnpkg.com/getting-started/install)

## Getting Started

Follow these steps to get your development environment set up.

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

You will need to populate this file with the necessary API keys and configuration, such as your Google AI (Gemini) API key for the Genkit features.

```
GEMINI_API_KEY=your_gemini_api_key_here
```

### 3. Running the Development Server

To run the main Next.js application in development mode, use:

```bash
yarn dev
```

This will start the application on [http://localhost:9002](http://localhost:9002).

To run the Genkit AI flows for local development, use a separate terminal and run:

```bash
yarn genkit:dev
```

This will start the Genkit development server, allowing you to inspect and test your AI flows.

### 4. Building for Production

To create a production-ready build of your application, run:

```bash
yarn build
```

This command will compile and optimize your Next.js application for production.

### 5. Running in Production Mode

After building, you can start the application in production mode with:

```bash
yarn start
```

This will run the optimized version of your app.

## Available Scripts

- `yarn dev`: Starts the Next.js development server.
- `yarn genkit:dev`: Starts the Genkit development server.
- `yarn genkit:watch`: Starts the Genkit development server in watch mode.
- `yarn build`: Builds the application for production.
- `yarn start`: Starts the production server.
- `yarn lint`: Runs the linter to check for code quality issues.
- `yarn typecheck`: Runs the TypeScript compiler to check for type errors.
