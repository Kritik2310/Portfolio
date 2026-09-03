# Kriti Kashyap — Personal Portfolio

> A personal portfolio built around grounded AI, thoughtful web experiences, data-driven interfaces, and the small details that make software feel a little more human.

**Live portfolio:** [text](https://kritik2310.github.io/Portfolio/)

---

## About

This repository contains my personal developer portfolio — a place to bring together the things I build, the technologies I work with, and the ideas behind them.

My work sits at the intersection of **AI systems, full-stack development, data-driven applications, and thoughtful interface design**. I am particularly interested in building systems that understand their context, make their outputs more grounded, and remain useful to the people interacting with them.

The portfolio reflects that approach through a deliberately personal interface rather than a conventional resume-style website.

---

## ✨ What the Portfolio Includes

* **About** — A short introduction and development philosophy
* **Experience** — Professional and internship experience
* **Skills** — AI/GenAI, ML & Data, Web/Full-Stack, and development tools
* **Projects** — Interactive project cards with detailed project notes
* **Education** — Academic background and certifications
* **Community** — Activities beyond individual projects
* **Contact** — Direct email, GitHub, and LinkedIn links

The site also includes small visual details such as a developer desk illustration, coffee companion, handwritten-style notes, code motifs, and responsive interactions.

---

## 🧠 Featured Projects

### Clinical Evidence-Grounded RAG System

A local retrieval and evaluation system focused on keeping generated clinical responses closer to grounded evidence.

**Technologies**

`Python` · `Ollama Phi-3` · `SentenceTransformers` · `FAISS` · `PyTest`

**Highlights**

* Local evidence retrieval
* WHO-guideline-aligned retrieval
* Negation-aware bias detection
* CI/CD regression testing

The portfolio records a reported reduction in hallucinations compared with an LLM-only baseline.

---

### AI-Powered Financial Independence Chatbot

A conversational investment assistant designed around making financial conversations more approachable through a responsive interface.

**Technologies**

`Python` · `LangChain` · `Gemini API` · `React.js`

**Highlights**

* Conversational investment guidance
* Dynamic tone switching
* Responsive React interface

---

### Multi-Agent AI Research Assistant

A multi-agent workflow designed to divide research into focused retrieval, analysis, and report-generation stages.

**Technologies**

`Python` · `LangChain` · `Gemini API` · `Streamlit` · `FastAPI`

**Highlights**

* Retrieval subagent
* Analysis subagent
* Report-generation subagent
* Synthesis and citation grounding

---

### Multi-Channel AI News Aggregator

An automated news pipeline that transforms daily news into compact digests and distributes them across multiple channels.

**Technologies**

`Python` · `Hugging Face BART` · `APIs` · `PythonAnywhere`

**Highlights**

* Automated news synthesis
* WhatsApp daily digests
* Responsive HTML emails

---

### AI-Powered Content Summarization & Video Gen

A full-stack application that turns written content into narrated visual output.

**Technologies**

`React.js` · `Python Flask` · `Node.js` · `spaCy` · `Hugging Face` · `Figma`

**Highlights**

* Text summarization
* Text-to-speech
* Audio synthesis
* Figma-led interface design

---

## 🛠️ Tech Stack

### Frontend

* React
* TypeScript
* Vite
* Tailwind CSS
* Radix UI
* Lucide React
* Framer Motion

### AI & GenAI

* Python
* LangChain
* Gemini API
* Ollama
* Hugging Face
* RAG
* SentenceTransformers
* FAISS
* Prompt Engineering

### ML & Data

* NumPy
* Pandas
* Scikit-learn
* OpenCV
* MediaPipe
* Matplotlib
* Seaborn
* Plotly
* Tableau
* Power BI

### Backend & Full Stack

* Node.js
* Express.js
* Django
* Flask
* MongoDB
* MySQL
* PostgreSQL
* REST APIs

### Development Tools

* Git
* GitHub
* Figma
* PyTest
* Firebase
* LangGraph
* Claude Code
* Codex

---

## 📁 Project Structure

The repository uses a pnpm workspace structure. The main portfolio application lives inside `artifacts/kriti-portfolio`.

```text
Portfolio/
├── .agents/
├── .github/
│   └── workflows/
├── artifacts/
│   ├── api-server/
│   ├── kriti-portfolio/
│   │   ├── public/
│   │   │   ├── favicon.svg
│   │   │   ├── kriti-developer-mascot.png
│   │   │   └── robots.txt
│   │   ├── src/
│   │   │   ├── components/
│   │   │   │   ├── ui/
│   │   │   │   ├── error-boundary.tsx
│   │   │   │   └── kriti-portfolio.tsx
│   │   │   ├── hooks/
│   │   │   ├── lib/
│   │   │   ├── pages/
│   │   │   ├── App.tsx
│   │   │   ├── index.css
│   │   │   └── main.tsx
│   │   ├── components.json
│   │   ├── index.html
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   └── vite.config.ts
│   └── mockup-sandbox/
├── attached_assets/
├── lib/
│   ├── api-client-react/
│   ├── api-spec/
│   ├── api-zod/
│   └── db/
├── scripts/
├── main.py
├── package.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
├── tsconfig.base.json
└── tsconfig.json
```

The portfolio component itself contains the navigation model, project data, skills, certifications, experience, education, community information, contact details, and the interactive UI logic.

---

## 🚀 Getting Started

### Prerequisites

Make sure you have:

* Node.js 24+
* pnpm
* Git

The repository is configured around **pnpm workspaces**, with TypeScript used throughout the workspace.

### 1. Clone the repository

```bash
git clone https://github.com/Kritik2310/Portfolio.git
cd Portfolio
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Start the portfolio

```bash
pnpm --filter @workspace/kriti-portfolio run dev
```

The portfolio is powered by Vite and is configured to expose the development server through the host interface.

Open the local URL displayed by Vite in your terminal.

---

## 🔨 Development Commands

From the repository root:

### Run the portfolio

```bash
pnpm --filter @workspace/kriti-portfolio run dev
```

### Type-check the portfolio

```bash
pnpm --filter @workspace/kriti-portfolio run typecheck
```

### Build the portfolio

```bash
pnpm --filter @workspace/kriti-portfolio run build
```

### Preview the production build

```bash
pnpm --filter @workspace/kriti-portfolio run serve
```

The portfolio package defines `dev`, `build`, `serve`, and `typecheck` scripts through Vite and TypeScript.

---

## 🎨 Design & Interaction

The portfolio intentionally avoids a conventional corporate-resume aesthetic.

The visual language combines:

* Editorial typography
* Handwritten-style notes
* Paper/card-inspired surfaces
* Developer-themed illustrations
* Coffee and desk motifs
* Code symbols
* Subtle animations
* Responsive layouts
* Interactive project notes

The project also uses `IntersectionObserver` for active navigation state and reveal-on-scroll behavior.

Project cards open into detailed modal views containing:

1. Overview
2. Why the project exists
3. How it works
4. Features
5. Technology stack
6. Results, where available

The modal also supports closing with the `Escape` key.

---

## 📌 Updating Portfolio Content

Most portfolio content currently lives inside:

```text
artifacts/kriti-portfolio/src/components/kriti-portfolio.tsx
```

This file contains the primary data structures for:

* Projects
* Skills
* Certifications
* Experience
* Education
* Community
* Navigation
* Contact information

For example, projects are represented using a structured `Project` type containing:

```text
id
title
description
overview
purpose
solution
technologies
features
result
symbol
```

This makes project information easy to expand while keeping the presentation logic reusable.

---

## 🌐 Deployment

The repository includes GitHub Actions workflow files under:

```text
.github/workflows/
```

including deployment-related workflows.

For a production deployment, build the portfolio application:

```bash
pnpm --filter @workspace/kriti-portfolio run build
```

The generated Vite output can then be deployed to a static hosting provider such as GitHub Pages, Vercel, Netlify, or another platform that supports Vite applications.

---

## 📚 Education

**B.Tech in Computer Science Engineering**
PCET's Pimpri Chinchwad University, Pune
2023 — Present
Cumulative GPA: **9.08 / 10**

Previous academic background and certifications are also represented directly within the portfolio.

---

## 🤝 Community

Beyond projects and coursework, the portfolio highlights involvement in:

* ACM PCU Design Team
* Vibenity Hackathon
* Class Representative responsibilities

These are included as part of the portfolio's broader view of development beyond just code.

---

## 📬 Contact

**Kriti Kashyap**

* Email: `kritikashyap2316@gmail.com`
* GitHub: `https://github.com/Kritik2310`
* LinkedIn: `https://www.linkedin.com/in/kriti-kashyap-a72886289/`

---

## 💭 Philosophy

> Build things that know their context, interfaces that respect their users, and small details that make software feel a little more human.

This portfolio is less about listing every technology I've touched and more about showing **how I think about building software**.

---

## 📄 License

This repository is released under the **MIT License**.

---

## ⭐ Acknowledgements

Built with React, TypeScript, Vite, and an unreasonable amount of coffee.

**Kriti Kashyap · built with code, caffeine & a little curiosity.**
