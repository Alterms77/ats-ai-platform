# ATS AI Platform

Modern ATS system for AI-powered recruitment evaluation, CV parsing, candidate scoring, and transparent hiring workflows.

## Stack
- Frontend: Next.js, React, TypeScript, Tailwind CSS, shadcn/ui
- Backend: NestJS, TypeScript
- Database: PostgreSQL
- AI: OpenAI API + LangChain + OCR
- Infra: Docker, GitHub Actions, Vercel/Azure

## Monorepo structure
- `apps/web`: Next.js frontend
- `apps/api`: NestJS backend
- `packages/shared`: shared types and utilities
- `infra`: Docker Compose and deployment settings
- `.github/workflows`: CI pipeline

## Quick start

```bash
npm install
npm run dev
```

## Local database

```bash
docker compose -f infra/docker/docker-compose.yml up -d postgres redis
```

## Main modules
- Vacancies management
- CV upload and parsing
- Candidate scoring engine
- Dashboard and KPI reports
- References and audit trail

## Notes
This is an initial scaffold for the ATS product. The project is structured so the backend, frontend, and shared layer can evolve independently while maintaining a single monorepo.
