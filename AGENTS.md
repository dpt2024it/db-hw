# AGENTS.md

-------------------

Виж също и този файл :
Development_Plan.md

-------------------

## Project

Project name: db-hw

The project is a multi-platform full-stack application for database homework management.

Main idea:

- Teacher (admin) creates homework tasks.
- Students log in and submit homework solutions.
- Every homework has a discussion section.
- Every submitted solution also has its own discussion section.
- Discussions are recursive / nested like a tree.

The project must stay as simple as possible while still covering the full assignment requirements.

-------------------

## Main Technologies

- Web and Backend (JavaScript/TypeScript only — Next.js stack):

- Next.js
- React
- TypeScript
- Tailwind
- PostgreSQL
- Drizzle ORM
- JWT authentication
- bcrypt

Mobile:

- React Native
- Expo

Deployment:

- Netlify
- Neon PostgreSQL

-------------------

## Architecture

The project uses:

- client-server architecture
- monorepo structure
- Keep code modular

Structure:

db-hw/
├── mobile/     -> Expo React Native app
├── web/        -> Next.js app
└── AGENTS.md

The Next.js app contains:

- backend API
- authentication
- database access
- web frontend

The Expo app is only a mobile client.

-------------------

## User Roles

Roles:

- ADMIN -> teacher
- STUDENT -> student

Teacher abilities:

- create homework
- edit homework
- delete homework
- comment everywhere

Student abilities:

- login
- view homework
- submit solution
- comment and reply
-- view other students' solutions

Do not implement history or version tracking for solution drafts in the database. Overwrite a solution if edited.

-------------------

## Homework Solutions

Each student can submit only ONE solution per homework.

If a student submits a new solution, it should completely overwrite their previous submission in the database.

For FILE and IMAGE solutions, assume file storage will be handled locally during development. Provide guidance on configuring a basic local folder structure for uploads.

Do not implement history or version tracking for solution drafts in the database. Overwrite a solution if edited.

Solution types:

- TEXT
- SQL
- FILE
- IMAGE

A solution has only ONE selected type.

Do NOT implement combined multi-type submissions.

Keep it simple.

-------------------

## Discussions

Comments are infinitely nested.

Use recursive comments:

comments.parent_id -> comments.id

Every comment can have replies.

No realtime features.
No notifications.
No WebSockets.

Keep the UI visually simple.

-------------------

## Mobile App Scope

The mobile app is intentionally limited.

The mobile app should contain only the most important student functionality:

- login
- homework list
- homework details
- submit solution
- view solutions
- discussions/comments

Do NOT implement:

- admin panel
- advanced moderation
- complex dashboards

The web app contains the full functionality.

-------------------

## Complexity Rules

IMPORTANT:
The project goal is:

maximum assignment coverage
minimum implementation complexity

Always prefer:

- simpler architecture
- fewer moving parts
- fewer dependencies
- fewer abstractions
- simpler UI
- simpler database structure

Avoid:

- microservices
- realtime systems
- advanced animations
- complex state management
- unnecessary optimizations
- overengineering
- creating helper tables without explicit approval

-------------------

## Database

Keep the database schema simple.

Planned core tables:

- users
- homeworks
- solutions
- comments

Do not create any additional tables beyond the planned core tables without explicitly asking the user for permission first.

Use:

- PostgreSQL
- Drizzle ORM
- Drizzle migrations

Always use migrations for schema changes.

-------------------

## Authentication

Use:

- JWT authentication
- bcrypt password hashing

Features:

- register
- login
- logout
- role checks

Keep auth simple.

## AI Agent Guidance (for coding assistants)

- Repo layout: the web Next.js app is under `web/`; the Expo mobile client is under `mobile/`.
- Start the web app locally:

  - Install dependencies: `cd web && npm install`
  - Development server: `npm run dev`
  - Build for production: `npm run build` then `npm run start`
  - Database helpers: `npm run db:generate` and `npm run db:migrate`
  - Lint: `npm run lint`

- Important files and locations (links):
  - Project README: [README.md](README.md)
  - Web README: [web/README.md](web/README.md)
  - Next.js app root: `web/app/`
  - DB schema and migrations: [web/drizzle/](web/drizzle/) and [web/src/db/schema.ts](web/src/db/schema.ts)
  - Drizzle config: [web/drizzle.config.ts](web/drizzle.config.ts)
  - DB access code: [web/src/db/index.ts](web/src/db/index.ts), [web/src/db/relations.ts](web/src/db/relations.ts)
  - Auth helpers: [web/src/lib/auth/auth.ts](web/src/lib/auth/auth.ts), [web/src/lib/auth/get-user.ts](web/src/lib/auth/get-user.ts)

- Conventions and constraints (do not assume otherwise):
  - Authentication: JWT + bcrypt (do not replace without agreement).
  - Each student may submit exactly one solution per homework.
  - Discussion comments are nested (recursive parent_id → id).
  - Keep changes minimal and avoid large refactors; follow the "maximum coverage, minimum complexity" rule in this file.

- Agent workflow guidance:
  - Link to existing docs instead of copying them. Use the "link, don't embed" principle.
  - Ask for clarification before making destructive DB changes (migrations, deletes).
  - Prefer small, focused patches and provide exact commands for tests/migrations when the user may need hands-on guidance, instead of leaving them to infer manual steps.

If you want, I can also add a slim `.github/copilot-instructions.md` that surfaces these same points to GitHub Copilot specifically.
