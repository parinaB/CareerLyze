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

This project requires API keys and database credentials.

Create a file named:

```bash
.env
```

inside the root directory.

---

# 📄 Required Environment Variables

```env
DATABASE_URL=
GEMINI_API_KEY=
```

---

# 🧩 How to Get These Environment Variables

## 1️⃣ DATABASE_URL (NeonDB)

### Steps:

1. Go to:

   [NeonDB Official Website](https://neon.tech?utm_source=chatgpt.com)

2. Create an account

3. Create a new PostgreSQL project

4. Copy the connection string

Example:

```env
DATABASE_URL="postgresql://username:password@host/dbname?sslmode=require"
```

---

## 2️⃣ GEMINI_API_KEY

### Steps:

1. Visit:

   [Google AI Studio](https://aistudio.google.com/app/apikey?utm_source=chatgpt.com)

2. Login with Google account

3. Create API key

4. Copy the generated API key

Example:

```env
GEMINI_API_KEY="your_api_key_here"
```

---

# 🗄️ Database Setup

After setting up environment variables:

## Generate Prisma Client

```bash
npx prisma generate
```

---

## Push Database Schema

```bash
npx prisma db push
```

---

## (Optional) Open Prisma Studio

```bash
npx prisma studio
```

---

# ▶️ Running the Project

Start the development server:

```bash
npm run dev
```

Visit:

```text
http://localhost:3000
```

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
