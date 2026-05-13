# CONTRIBUTING.md

# 🤝 Contributing to CareerLyze

First of all, thank you for considering contributing to **CareerLyze** ❤️

We welcome contributions from developers of all skill levels, especially beginners participating in **GSSoC'26** and other open-source programs.

Whether you're fixing bugs, improving UI, writing documentation, or adding features — your contribution matters.

---

# 📌 Table of Contents

- [🌟 Introduction](#-introduction)
- [📜 Code of Conduct](#-code-of-conduct)
- [🧠 Project Overview](#-project-overview)
- [🛠️ Tech Stack](#️-tech-stack)
- [📋 Prerequisites](#-prerequisites)
- [⚙️ Local Setup Guide](#️-local-setup-guide)
- [🔐 Environment Variables Setup](#-environment-variables-setup)
- [🗄️ Database Setup](#️-database-setup)
- [▶️ Running the Project](#️-running-the-project)
- [🔄 Contribution Workflow](#-contribution-workflow)
- [🌿 Branch Naming Conventions](#-branch-naming-conventions)
- [📝 Commit Message Conventions](#-commit-message-conventions)
- [📌 Issue Guidelines](#-issue-guidelines)
- [🚀 Pull Request Guidelines](#-pull-request-guidelines)
- [🧹 Coding Standards](#-coding-standards)
- [🎨 UI/UX Guidelines](#-uiux-guidelines)
- [📂 Suggested Folder Structure](#-suggested-folder-structure)
- [🐛 Reporting Bugs](#-reporting-bugs)
- [💡 Feature Request Guidelines](#-feature-request-guidelines)
- [🌱 Beginner Friendly Contribution Ideas](#-beginner-friendly-contribution-ideas)
- [📢 Important Rules](#-important-rules)
- [🔄 Keeping Your Fork Updated](#-keeping-your-fork-updated)
- [❓ Need Help?](#-need-help)
- [🙌 Thank You](#-thank-you)

---

# 🌟 Introduction

CareerLyze is an AI-powered career guidance platform that helps users with:

* Resume building
* Cover letter generation
* Career analytics
* Industry insights
* Mock interview preparation

We aim to create a beginner-friendly open-source environment where contributors can learn, collaborate, and grow.

---

# 📜 Code of Conduct

Please be respectful and professional while interacting with maintainers and contributors.

We do **NOT** tolerate:

* Harassment
* Toxic behavior
* Spam
* Plagiarism
* Hate speech

Be kind and collaborative ❤️

---

# 🧠 Project Overview

## Main Features

* AI Resume Builder
* AI Cover Letter Generator
* Interview Preparation Engine
* Career Trend Analytics
* Industry Insights Dashboard

---

# 🛠️ Tech Stack

| Technology   | Purpose               |
| ------------ | --------------------- |
| Next.js      | Frontend Framework    |
| TypeScript   | Type Safety           |
| Tailwind CSS | Styling               |
| ShadCN UI    | UI Components         |
| Prisma ORM   | Database ORM          |
| NeonDB       | PostgreSQL Database   |
| Gemini AI    | AI Content Generation |
| Inngest      | Background Jobs       |
| Vercel       | Deployment            |

---

# 📋 Prerequisites

Before setting up the project locally, make sure you have the following installed:

## Required Software

| Software | Recommended Version |
| -------- | ------------------- |
| Node.js  | v18+                |
| npm      | v9+                 |
| Git      | Latest              |
| VS Code  | Recommended         |

---

## Recommended VS Code Extensions

* ESLint
* Prettier
* Tailwind CSS IntelliSense
* Prisma
* GitLens

---

# ⚙️ Local Setup Guide

## 1️⃣ Fork the Repository

Click the **Fork** button on GitHub.

---

## 2️⃣ Clone Your Fork

```bash
git clone https://github.com/YOUR_USERNAME/CareerLyze.git
```

---

## 3️⃣ Navigate Into the Project

```bash
cd CareerLyze
```

---

## 4️⃣ Install Dependencies

```bash
npm install
```

---

# 🔐 Environment Variables Setup

Create a `.env` file in the root directory of the project.

```bash
touch .env
```

Add the following variables:

```env
DATABASE_URL=<your-prisma-url>

GEMINI_API_KEY=<your-gemini-api-key>

INNGEST_EVENT_KEY=<your-inngest-event-key>
INNGEST_SIGNING_KEY=<your-inngest-signing-key>

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=<your-clerk-publishable-key>
CLERK_SECRET_KEY=<your-clerk-secret-key>

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/onboarding
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding
```

---

# 📄 Detailed Environment Variables Guide

## 1️⃣ DATABASE_URL

Used by:
- Prisma ORM
- NeonDB PostgreSQL database connection

### How to Get It

1. Visit:   https://neon.tech

2. Create an account
3. Create a new PostgreSQL project
4. Open the project dashboard
5. Copy the PostgreSQL connection string

Example:

```env
DATABASE_URL="postgresql://username:password@host/dbname?sslmode=require"
```

---

## 2️⃣ GEMINI_API_KEY

Used for:
- AI resume generation
- Cover letter generation
- Interview question generation
- Career insights AI engine

### How to Get It

1. Visit:  https://aistudio.google.com/app/apikey

2. Login with your Google account
3. Click **Create API Key**
4. Copy the generated key

Example:

```env
GEMINI_API_KEY="AIzaSyXXXXXXX"
```

---

## 3️⃣ INNGEST_EVENT_KEY

Used for:
- Background workflows
- Event-driven functions
- Async AI processing

---

## 4️⃣ INNGEST_SIGNING_KEY

Used for:
- Secure validation of Inngest events

### How to Get Both Inngest Keys

1. Visit:  https://www.inngest.com/

2. Create an account
3. Create a new app/project
4. Open the app dashboard
5. Navigate to:
   
   Settings → Keys

6. Copy:
- Event Key
- Signing Key

Example:

```env
INNGEST_EVENT_KEY="evt_xxxxxxxxx"
INNGEST_SIGNING_KEY="signkey_xxxxxxxxx"
```

---

# 🔐 Clerk Authentication Setup

The project uses Clerk for:
- Authentication
- User management
- Sign in / Sign up flows

---

## 5️⃣ NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY

Public frontend authentication key.

---

## 6️⃣ CLERK_SECRET_KEY

Private backend secret key.

### How to Get Clerk Keys

1. Visit:  https://clerk.com/

2. Create an account
3. Create a new application
4. Go to:
   
   API Keys section

5. Copy:
- Publishable Key
- Secret Key

Example:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="pk_test_xxxxx"
CLERK_SECRET_KEY="sk_test_xxxxx"
```

---

# 🔗 Clerk Redirect URLs

These control authentication routing behavior.

```env
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/onboarding
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding
```

### Purpose

| Variable | Purpose |
|---|---|
| NEXT_PUBLIC_CLERK_SIGN_IN_URL | Sign in route |
| NEXT_PUBLIC_CLERK_SIGN_UP_URL | Sign up route |
| NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL | Redirect after login |
| NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL | Redirect after signup |

---

# ⚠️ Important Security Notes

## ❌ Never Do This

- Never commit `.env` files to GitHub
- Never expose secret keys publicly
- Never share API keys in issues or PRs

---

# ✅ Add `.env` to `.gitignore`

Make sure this exists inside `.gitignore`:

```gitignore
.env
```

---

# 🧪 Verify Environment Variables

After setup, run:

```bash
npm run dev
```

If setup is successful:
- Database connects properly
- Authentication works
- AI generation functions work
- Inngest background jobs initialize successfully

---


# 🔄 Contribution Workflow

## Step-by-Step Workflow

### 1. Fork the Repository

---

### 2. Clone Your Fork

```bash
git clone https://github.com/YOUR_USERNAME/CareerLyze.git
```

---

### 3. Create a New Branch

```bash
git checkout -b your-branch-name
```

---

### 4. Make Changes

Work on your assigned issue.

---

### 5. Commit Your Changes

```bash
git commit -m "your commit message"
```

---

### 6. Push Changes

```bash
git push origin your-branch-name
```

---

### 7. Open Pull Request

Submit your PR to the `main` branch.

---

# 🌿 Branch Naming Conventions

Always use meaningful branch names.

## ✅ Good Examples

```bash
feature/add-authentication
feature/resume-template-ui
bugfix/navbar-mobile-overflow
docs/update-contributing-guide
refactor/api-cleanup
```

---

## ❌ Bad Examples

```bash
update
changes
mybranch
newstuff
trial
```

---

# 📝 Commit Message Conventions

Use clean and meaningful commit messages.

---

# ✅ Recommended Format

```bash
type: short description
```

---

# ✅ Common Types

| Type     | Usage                 |
| -------- | --------------------- |
| feat     | New feature           |
| fix      | Bug fix               |
| docs     | Documentation changes |
| style    | UI/styling changes    |
| refactor | Code restructuring    |
| test     | Test-related changes  |
| chore    | Maintenance work      |

---

# ✅ Good Commit Message Examples

```bash
feat: added AI interview feedback system

fix: resolved mobile navbar overflow issue

docs: updated README installation steps

style: improved dashboard responsiveness

refactor: optimized Prisma queries
```

---

# ❌ Bad Commit Messages

```bash
updated stuff

fixed bug

changes done

final commit
```

---

# 📌 Issue Guidelines

Before creating an issue:

* Check existing issues first
* Avoid duplicate issues
* Use clear titles
* Explain the problem properly

---

# ✅ Good Issue Example

## Title

```text
Bug: Resume preview breaks on mobile devices
```

## Description

```text
The resume preview section overflows on screens below 400px width.

Steps to reproduce:
1. Open app on mobile
2. Navigate to Resume Builder
3. Preview section breaks layout
```

---

# ❌ Bad Issue Example

```text
Website broken pls fix
```

---

# 🚀 Pull Request Guidelines

## Before Submitting PR

Make sure:

* Your code builds successfully
* No console errors exist
* No unnecessary files are added
* PR addresses only one issue
* UI changes include screenshots if possible

---

# ✅ Good PR Title Examples

```text
feat: added ATS score calculator

fix: corrected dashboard loading bug

docs: improved setup instructions
```

---

# 📷 PR Screenshots

If your PR contains UI changes:

* Add before/after screenshots
* Add short explanation

---

# 🧹 Coding Standards

## General Rules

* Write clean and readable code
* Use meaningful variable names
* Avoid large unnecessary files
* Keep components modular
* Avoid duplicate code

---


## Tailwind Rules

* Keep class names readable
* Avoid excessive nesting
* Maintain responsive design

---

# 🎨 UI/UX Guidelines

Please maintain:

* Responsive layouts
* Clean spacing
* Consistent color usage
* Accessible UI components
* Proper mobile support

---

# 📂 Suggested Folder Structure

```text
app/
components/
lib/
utils/
hooks/
styles/
prisma/
public/
```

---

# 🐛 Reporting Bugs

When reporting bugs, include:

* Browser/device used
* Screenshots
* Steps to reproduce
* Expected behavior
* Actual behavior

---

# 💡 Feature Request Guidelines

Feature requests should include:

* Problem statement
* Proposed solution
* Expected impact
* Mockups/screenshots (optional)

---

# 🌱 Beginner Friendly Contribution Ideas

If you're new to open source, try:

* Fixing UI alignment issues
* Improving responsiveness
* Updating documentation
* Adding loading animations
* Improving accessibility
* Refactoring components
* Adding dark mode improvements

---

# 📢 Important Rules

## ❌ Do NOT

* Submit AI-generated spam PRs
* Create duplicate PRs
* Push directly to main branch
* Make unrelated changes in one PR

---

## ✅ Always

* Pull latest changes before working
* Keep PRs small and focused
* Respect maintainers
* Follow coding standards

---

# 🔄 Keeping Your Fork Updated

Add upstream remote:

```bash
git remote add upstream https://github.com/ahana4banerjee/CareerLyze.git
```

Fetch latest updates:

```bash
git fetch upstream
```

Update local main branch:

```bash
git checkout main
git merge upstream/main
```

---

# ❓Need Help?

If you need help:

* Open a discussion
* Ask in issue comments
* Reach out politely to maintainers

We are happy to help beginners ❤️

---

# 🙌 Thank You

Thank you for contributing to CareerLyze 🚀

Your contributions help make this project better for everyone.
