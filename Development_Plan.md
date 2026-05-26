# db-hw Development Plan

# PHASE 1 — Project Setup

Goal:
Create the base monorepo structure and prepare the development environment.

Steps:
1. Create Next.js project in /web
2. Create Expo mobile app in /mobile
3. Configure Git repository
4. Create GitHub repository
5. Create initial commit
6. Configure TypeScript
7. Configure ESLint + Prettier
8. Configure environment variables
9. Create AGENTS.md
10. Create README.md

Result:
- working monorepo
- working web app
- working mobile app
- clean project structure

---

# PHASE 2 — Database Setup

Goal:
Create PostgreSQL database and connect it to the project.

Steps:
1. Create Neon PostgreSQL database
2. Install Drizzle ORM
3. Configure Drizzle
4. Create database connection
5. Create first migration
6. Test DB connection
7. Create seed script

Result:
- connected PostgreSQL database
- migrations working
- seed system working

---

# PHASE 3 — Database Schema

Goal:
Create the core database structure.

Main tables:
- users
- homeworks
- solutions
- comments

Important relationships:
- homework -> many solutions
- solution -> many comments
- comment -> many replies
- user -> many comments
- user -> many solutions

Steps:
1. Create users table
2. Create homeworks table
3. Create solutions table
4. Create comments table
5. Add recursive parent_id comments relation
6. Run migrations
7. Create seed data

Result:
- full database schema working
- recursive comments supported

---

# PHASE 4 — Authentication

Goal:
Implement login system and roles.

Features:
- register
- login
- logout
- JWT auth
- bcrypt hashing
- role checks

Steps:
1. Create auth routes
2. Create password hashing
3. Create JWT generation
4. Create JWT validation
5. Create auth middleware
6. Create role middleware
7. Protect routes

Roles:
- ADMIN
- STUDENT

Result:
- secure authentication system
- protected routes
- working roles

---

# PHASE 5 — Backend API

Goal:
Create REST API endpoints.

Main API areas:
- auth
- homeworks
- solutions
- comments

Steps:
1. Create auth API
2. Create homework CRUD API
3. Create solution CRUD API
4. Create comments API
5. Create recursive comments API
6. Add validation
7. Add pagination

Result:
- stable backend API
- mobile-ready API
- pagination support

---

# PHASE 6 — Web App UI

Goal:
Create the main web application.

Required pages:
1. Home
2. Login
3. Register
4. Homework List
5. Homework Details
6. Create Homework
7. Edit Homework
8. Submit Solution
9. Solution Details
10. Admin Dashboard
11. User Profile

Important UI features:
- responsive design
- recursive comments UI
- solution type selector
- protected pages

Result:
- full web application
- all assignment requirements covered

---

# PHASE 7 — Solution Upload System

Goal:
Support multiple solution types.

Supported types:
- TEXT
- SQL
- FILE
- IMAGE

Steps:
1. Create solution type selector
2. Create text solution form
3. Create SQL textarea form
4. Create file upload form
5. Create image upload form
6. Store uploaded files
7. Display uploaded solutions

Result:
- flexible submission system
- simple implementation

---

# PHASE 8 — Recursive Discussions

Goal:
Implement nested discussion system.

Features:
- replies
- nested comments
- discussion trees

Steps:
1. Create comment component
2. Create recursive rendering
3. Create reply form
4. Create indentation system
5. Create comment API integration

Result:
- fully working threaded discussions

---

# PHASE 9 — Mobile App

Goal:
Create simplified mobile app with Expo.

Mobile screens:
1. Login
2. Homework List
3. Homework Details
4. Submit Solution
5. View Discussions

Important:
- mobile app is intentionally simpler than web app

Steps:
1. Configure Expo app
2. Create navigation
3. Create auth screens
4. Connect API
5. Create homework screens
6. Create submission screens
7. Create discussions screens

Result:
- working mobile client
- assignment mobile requirement covered

---

# PHASE 10 — Pagination + Scalability

Goal:
Cover scalability requirements.

Steps:
1. Add pagination to homework lists
2. Add pagination to comments
3. Add pagination to solutions
4. Add DB indexes
5. Generate 10k seed records
6. Test performance

Result:
- scalability requirement covered

---

# PHASE 11 — Deployment

Goal:
Publish the project online.

Steps:
1. Deploy Next.js app
2. Configure production environment variables
3. Connect production DB
4. Deploy Expo web export
5. Test production APIs
6. Create demo accounts

Result:
- live deployed project

---

# PHASE 12 — Documentation

Goal:
Complete the final project documentation.

Files:
- README.md
- setup guide
- architecture section
- database diagram
- deployment guide

Steps:
1. Project overview
2. Architecture description
3. Database documentation
4. API documentation
5. Local setup instructions
6. Deployment instructions

Result:
- complete documentation
- assignment fully covered

---

# PHASE 13 — GitHub Requirements

Goal:
Cover grading requirements.

Requirements:
- minimum 15 commits
- commits on at least 3 different days

Rules:
- commit after every stable feature
- use meaningful commit messages
- keep commit history clean

Examples:
- "setup nextjs web app"
- "add users table"
- "implement jwt auth"
- "add recursive comments"

Result:
- GitHub grading requirements covered

---

# IMPORTANT PROJECT RULES

Always:
- keep the project simple
- prefer stable solutions
- avoid overengineering
- avoid unnecessary libraries
- avoid complicated architecture

Main goal:
maximum points with manageable complexity
