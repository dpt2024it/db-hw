# AGENTS.md

Виж също и този файл :
Development_Plan.md

# Project

Project name: db-hw

The project is a multi-platform full-stack application for database homework management.

Main idea:
- Teacher (admin) creates homework tasks.
- Students log in and submit homework solutions.
- Every homework has a discussion section.
- Every submitted solution also has its own discussion section.
- Discussions are recursive / nested like a tree.

The project must stay as simple as possible while still covering the full assignment requirements.

---

# Main Technologies

Backend + Web:
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
- Vercel or Netlify
- Neon PostgreSQL

---

# Architecture

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

---

# User Roles

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
- view other student solutions

---

# Homework Solutions

Each student can submit only ONE solution per homework.

No versioning system.

Solution types:
- TEXT
- SQL
- FILE
- IMAGE

A solution has only ONE selected type.

Do NOT implement combined multi-type submissions.

Keep it simple.

---

# Discussions

Comments are infinitely nested.

Use recursive comments:

comments.parent_id -> comments.id

Every comment can have replies.

No realtime features.
No notifications.
No WebSockets.

Keep the UI visually simple.

---

# Mobile App Scope

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

---

# Complexity Rules

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

---

# Database

Keep the database schema simple.

Planned core tables:
- users
- homeworks
- solutions
- comments

Optional helper tables only if truly needed.

Use:
- PostgreSQL
- Drizzle ORM
- Drizzle migrations

Always use migrations for schema changes.

---

# Authentication

Use:
- JWT authentication
- bcrypt password hashing

Features:
- register
- login
- logout
- role checks

Keep auth simple.

---

# UI Rules

The UI should be:
- clean
- simple
- responsive
- easy to maintain

Do not over-design the interface.

---

# Development Workflow

Very important:
- give only ONE step at a time
- do not skip steps
- do not assume knowledge
- explain carefully
- avoid unnecessary token usage
- avoid long unrelated explanations

The user is not experienced with programming.

Before suggesting commands or structure changes:
- think carefully
- avoid mistakes
- avoid restructuring later

---

# Language Rules

Explain in Bulgarian.

Keep programming terms in English.

Use double quotes in generated Django/Python examples if needed.

---

# Goal

The primary goal is:
- cover the assignment requirements
- achieve maximum score
- keep implementation manageable
- finish successfully
