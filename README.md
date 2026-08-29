# Astro Base Architecture & AI Blueprint

A standalone template repository for rapidly building static company profiles and landing pages using Astro and Tailwind CSS.

## Features

- **Astro Static Output**: Configured for high-performance static builds.
- **Tailwind CSS Integration**: Pre-configured global design tokens tied to Tailwind variables.
- **Content Config Decoupling**: Centralized configuration (`src/data/config.json` and `src/content/config.ts`) for easy toggling of sections and copy updates.
- **AI-Driven Engineering**: Includes pre-built markdown prompts in `.github/prompts/` to empower developers and designers to co-prompt AI for rapid component building.
- **Firebase Deployment**: Out-of-the-box GitHub Action for Firebase Hosting.

## Getting Started

1. Clone or generate from this template repository.
2. Run `npm install` to install dependencies.
3. Run `npm run dev` to start the local development server.
4. Open your browser and navigate to `http://localhost:4321/`.

## Leveraging the AI Blueprint

This repository is designed for AI-assisted development. Inside `.github/prompts/`, you'll find:
- `system-rules.md`: Core engineering standards to provide to your AI.
- `section-prompt.md`: Use this template to ask your AI to build new layout blocks from designs (e.g. Figma).
- `copy-update.md`: Provide this to your AI along with a client brief to automatically update the `config.json`.

## Deployment

The template includes a GitHub Action (`.github/workflows/firebase-deploy.yml`) that automatically builds and deploys to Firebase Hosting upon merges to the main branch. Ensure you have the proper Firebase secrets configured in your GitHub settings.
