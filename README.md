# Cloud Roadmap

A free, open-source learning platform for aspiring **Cloud Engineers**. Follow a structured **24-week curriculum** — from Linux fundamentals to production Kubernetes, AWS certifications, and job-ready portfolio projects — with daily lessons, hands-on exercises, and progress tracking in your browser.

[**Live Demo**](https://vladalazic.github.io/Cloud-Roadmap/) · [Report a Bug](https://github.com/VladaLazic/Cloud-Roadmap/issues) · [Request a Feature](https://github.com/VladaLazic/Cloud-Roadmap/issues)

---

## Table of Contents

- [Why This Project Exists](#why-this-project-exists)
- [Features](#features)
- [Curriculum Overview](#curriculum-overview)
- [Architecture](#architecture)
- [Module Reference](#module-reference)
- [Project Structure](#project-structure)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Development](#development)
- [Deployment](#deployment)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [Community & Support](#community--support)
- [License](#license)

---

## Why This Project Exists

Breaking into cloud engineering is overwhelming: too many tools, unclear learning paths, and scattered resources. **Cloud Roadmap** solves that by packaging a battle-tested study plan into a single, navigable app.

This project is designed for:

- **Self-learners** building cloud skills from zero
- **Career switchers** targeting DevOps, SRE, or Platform Engineering roles
- **Study groups** following a shared weekly schedule
- **Contributors** who want to improve open cloud education

All curriculum content lives in plain JavaScript (`src/data/curriculum.js`), making it easy to fork, customize, and contribute back.

---

## Features

| Feature | Description |
|---------|-------------|
| **24-week curriculum** | 168 daily lessons across 3 phases |
| **Daily lesson pages** | Content, resources, and exercises for every day |
| **Progress tracking** | Mark days complete; progress persists in `localStorage` |
| **Portfolio project index** | Auto-generated list of all capstone/project days |
| **Interview prep** | System design, DevOps, AWS, and behavioral frameworks |
| **Resource directory** | Curated vendors, courses, and tools |
| **Best practices** | AWS Well-Architected and SRE checklists |
| **Job hunt guide** | European market targets, roles, and weekly actions |
| **GitHub Pages deploy** | Automated CI/CD on every push to `main` |
| **No backend required** | Static SPA — fast, private, and free to host |

---

## Curriculum Overview

The roadmap is divided into **three phases** and **24 weeks** (7 days per week).

### Phase 1 — Foundations (Weeks 1–8)

| Week | Topic | Goal |
|------|-------|------|
| 1 | Linux Fundamentals | Navigate the Linux CLI confidently |
| 2 | Bash Scripting & Automation | Write production-quality shell scripts |
| 3 | Networking for Cloud Engineers | Map TCP/IP fundamentals to cloud VPCs |
| 4 | Cloud Fundamentals (IaaS/PaaS/SaaS) | CLF-C02 exam prep begins |
| 5 | AWS Core Services — Compute | Launch and manage EC2 at scale |
| 6 | AWS Storage & Database | **Target: pass CLF-C02** |
| 7 | AWS Networking — VPC | Design production-grade VPCs |
| 8 | Monitoring, Logging & Cost | Observability and cost control |

### Phase 2 — DevOps & Containers (Weeks 9–16)

| Week | Topic | Goal |
|------|-------|------|
| 9 | Docker & Containerization | Build and debug containerized apps |
| 10 | Terraform (IaC) | Provision AWS with infrastructure as code |
| 11 | CI/CD Pipelines | Automate code → production |
| 12 | Kubernetes Fundamentals | Deploy apps on K8s (CKA prep) |
| 13 | EKS on AWS | Production Kubernetes on AWS |
| 14 | Serverless Architecture | Event-driven Lambda applications |
| 15 | Security Engineering | Harden AWS environments |
| 16 | SAA-C03 Prep | **Target: pass Solutions Architect Associate** |

### Phase 3 — Advanced & Career (Weeks 17–24)

| Week | Topic | Goal |
|------|-------|------|
| 17 | GitOps & ArgoCD | Git-driven Kubernetes deployments |
| 18 | Observability & SRE | SLIs, SLOs, Prometheus, incident response |
| 19 | Multi-Cloud Patterns | Azure, GCP, service mesh, FinOps |
| 20 | Advanced Networking & CDN | TGW, Direct Connect, Global Accelerator |
| 21 | Platform Engineering | Backstage, Crossplane, policy as code |
| 22 | Capstone Project | Portfolio-quality cloud-native application |
| 23 | Interview Preparation | Resume, mocks, applications |
| 24 | Graduation & Next Steps | CKA, Terraform Associate, open source |

Each day is tagged with a **type**: `theory`, `hands-on`, `project`, or `career`.

---

## Architecture

Cloud Roadmap is a **client-side single-page application (SPA)**. There is no server, database, or user authentication. All state is stored locally in the browser.

```
┌─────────────────────────────────────────────────────────────┐
│                        Browser                              │
│  ┌─────────────┐    ┌──────────────┐    ┌───────────────┐  │
│  │  React UI   │───▶│ React Router │───▶│  Page Modules │  │
│  │  (pages)    │    │ (HashRouter) │    │  Home, Roadmap│  │
│  └──────┬──────┘    └──────────────┘    │  DayView, …   │  │
│         │                                └───────┬───────┘  │
│         │                                        │          │
│         ▼                                        ▼          │
│  ┌─────────────┐                        ┌───────────────┐  │
│  │  progress   │                        │  curriculum   │  │
│  │  (utils)    │                        │  (data)       │  │
│  └──────┬──────┘                        └───────────────┘  │
│         │                                                   │
│         ▼                                                   │
│  ┌─────────────┐                                           │
│  │ localStorage│                                           │
│  └─────────────┘                                           │
└─────────────────────────────────────────────────────────────┘
```

**Design decisions:**

- **HashRouter** — Works on GitHub Pages without server-side rewrite rules
- **Static data file** — Curriculum is version-controlled and diff-friendly
- **localStorage progress** — No accounts, no cookies, no privacy concerns
- **Vite** — Fast dev server and optimized production builds

---

## Module Reference

### Application Core

| Module | Path | Responsibility |
|--------|------|----------------|
| **Entry point** | `src/main.jsx` | Mounts the React app to the DOM |
| **Router** | `src/App.jsx` | Defines all routes and nested layout |
| **Layout** | `src/components/Layout.jsx` | Sidebar navigation + `<Outlet />` for page content |
| **Styles** | `src/index.css` | Global design system (dark theme, cards, badges, progress bars) |

### Data Layer

| Module | Path | Responsibility |
|--------|------|----------------|
| **Curriculum** | `src/data/curriculum.js` | Single source of truth: 24 weeks, 168 days, 3 phases |

**Curriculum schema:**

```js
// Week object
{
  week: 1,
  phase: 1,
  title: "Linux Fundamentals",
  goal: "Navigate Linux CLI confidently",
  cert: null,                    // or certification milestone string
  days: [ /* 7 day objects */ ]
}

// Day object
{
  day: 1,
  focus: "Linux History & Distros",
  type: "theory",                // theory | hands-on | project | career
  content: "Lesson body text…",
  resources: [{ label, url }],
  exercise: "Hands-on deliverable…"
}

// Phase object (exported as `phases`)
{
  id: 1,
  title: "Foundations",
  weeks: "1–8",
  color: "#0369a1",
  description: "…"
}
```

### Progress Utilities

| Module | Path | Responsibility |
|--------|------|----------------|
| **Progress** | `src/utils/progress.js` | Read/write completion state in `localStorage` |

| Function | Description |
|----------|-------------|
| `getProgress()` | Returns the full progress object |
| `isDayComplete(week, day)` | Checks if a specific day is marked done |
| `setDayComplete(week, day, bool)` | Sets or clears completion |
| `toggleDay(week, day)` | Flips completion state |
| `countCompleted()` | Total completed days across all weeks |
| `getWeekProgress(weekData)` | Returns `{ completed, total }` for one week |

Storage key: `cloud-roadmap-progress` (format: `{ "1-1": true, "1-2": true, … }`).

### Page Modules

| Page | Path | Route | Description |
|------|------|-------|-------------|
| **Home** | `src/pages/Home.jsx` | `/` | Dashboard: overall progress, continue-learning CTA, phase summary |
| **Roadmap** | `src/pages/Roadmap.jsx` | `/roadmap` | Expandable week cards grouped by phase; inline day checkboxes |
| **DayView** | `src/pages/DayView.jsx` | `/roadmap/week/:weekNum/day/:dayNum` | Full lesson: content, resources, exercise, prev/next navigation |
| **Projects** | `src/pages/Projects.jsx` | `/projects` | Filtered list of all `type: "project"` days with GitHub links |
| **Interviews** | `src/pages/Interviews.jsx` | `/interviews` | Interview frameworks and sample questions |
| **Vendors** | `src/pages/Vendors.jsx` | `/vendors` | Curated learning platforms, tools, and communities |
| **Best Practices** | `src/pages/BestPractices.jsx` | `/best-practices` | Well-Architected pillars as actionable checklists |
| **Jobs** | `src/pages/Jobs.jsx` | `/jobs` | European job market guide and weekly application checklist |

### CI/CD

| Module | Path | Responsibility |
|--------|------|----------------|
| **Deploy workflow** | `.github/workflows/deploy.yml` | Build with Node 20, upload artifact, deploy to GitHub Pages |

---

## Project Structure

```
cloud-roadmap/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Pages CI/CD
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/                 # Static images
│   ├── components/
│   │   └── Layout.jsx          # App shell + sidebar
│   ├── data/
│   │   └── curriculum.js       # 24-week curriculum (editable)
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Roadmap.jsx
│   │   ├── DayView.jsx
│   │   ├── Projects.jsx
│   │   ├── Interviews.jsx
│   │   ├── Vendors.jsx
│   │   ├── BestPractices.jsx
│   │   └── Jobs.jsx
│   ├── utils/
│   │   └── progress.js         # localStorage progress helpers
│   ├── App.jsx                 # Route definitions
│   ├── main.jsx                # React entry point
│   └── index.css               # Global styles
├── index.html
├── vite.config.js              # Vite + GitHub Pages base path
├── package.json
└── README.md
```

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| UI Framework | [React 19](https://react.dev/) |
| Build Tool | [Vite 8](https://vite.dev/) |
| Routing | [React Router 7](https://reactrouter.com/) (HashRouter) |
| Icons | [Lucide React](https://lucide.dev/) |
| Linting | ESLint 10 |
| Hosting | GitHub Pages |
| CI/CD | GitHub Actions |

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) **20+**
- npm (included with Node.js)

### Installation

```bash
git clone https://github.com/VladaLazic/Cloud-Roadmap.git
cd Cloud-Roadmap
npm install
```

### Run locally

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production build

```bash
npm run build    # Output → dist/
npm run preview  # Preview the production build locally
```

---

## Development

### Available scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server with hot reload |
| `npm run build` | Create optimized production bundle |
| `npm run preview` | Serve the `dist/` folder locally |
| `npm run lint` | Run ESLint across the project |

### Adding or editing curriculum content

1. Open `src/data/curriculum.js`
2. Edit the relevant week or day object
3. Follow the existing schema (see [Module Reference](#module-reference))
4. Run `npm run dev` to preview changes instantly

### Adding a new page

1. Create a component in `src/pages/`
2. Register the route in `src/App.jsx`
3. Add a navigation link in `src/components/Layout.jsx`

---

## Deployment

This project deploys automatically to **GitHub Pages** when you push to `main`.

### First-time setup

1. Push the repository to GitHub
2. Go to **Settings → Pages**
3. Set **Source** to **GitHub Actions**
4. Push to `main` — the workflow in `.github/workflows/deploy.yml` handles the rest

### Base path

`vite.config.js` sets the asset base path for GitHub Pages:

```js
export default defineConfig({
  plugins: [react()],
  base: '/Cloud-Roadmap/',   // Must match your repository name (case-sensitive)
})
```

If you fork this repo under a different name, update `base` to `/<your-repo-name>/`.

---

## Configuration

| Setting | File | Notes |
|---------|------|-------|
| GitHub Pages base URL | `vite.config.js` → `base` | Must match repo name |
| Progress storage key | `src/utils/progress.js` → `KEY` | Change if running multiple instances |
| Curriculum content | `src/data/curriculum.js` | All lesson data |
| Deploy branch | `.github/workflows/deploy.yml` | Default: `main` |

---

## Contributing

Contributions are welcome and appreciated. Whether you fix a typo, add a resource link, improve a lesson, or enhance the UI — every PR helps the community.

### How to contribute

1. **Fork** the repository
2. **Create a branch** from `main`:
   ```bash
   git checkout -b feature/improve-week-12-kubernetes
   ```
3. **Make your changes** (see guidelines below)
4. **Test locally**:
   ```bash
   npm run lint
   npm run build
   ```
5. **Commit** with a clear message:
   ```bash
   git commit -m "Add EKS networking resource to week 13 day 2"
   ```
6. **Open a Pull Request** describing what changed and why

### Contribution ideas

- Fix broken or outdated resource URLs
- Add missing exercises or clarify lesson content
- Improve accessibility (ARIA labels, keyboard navigation)
- Translate curriculum to another language
- Add export/import for progress data
- Add dark/light theme toggle
- Write tests for `progress.js` utilities

### Code style

- Match existing patterns in the file you edit
- Keep components focused — one page per file
- Curriculum changes should preserve the existing JSON-like schema
- No unnecessary dependencies

### Reporting issues

Found a bug or have an idea? [Open an issue](https://github.com/VladaLazic/Cloud-Roadmap/issues) with:

- A clear title
- Steps to reproduce (for bugs)
- Expected vs actual behavior
- Screenshots if applicable

---

## Community & Support

- **Star the repo** if you find it useful — it helps others discover the project
- **Share your progress** on LinkedIn or Dev.to with `#CloudRoadmap`
- **Fork and customize** the curriculum for your study group or region
- **Open issues** for content corrections — cloud services change fast

### Recommended companion resources

- [AWS Skill Builder](https://explore.skillbuilder.aws/) — Free AWS courses
- [bregman-arie/devops-exercises](https://github.com/bregman-arie/devops-exercises) — Interview practice
- [roadmap.sh/devops](https://roadmap.sh/devops) — Visual DevOps roadmap
- [CNCF Landscape](https://landscape.cncf.io/) — Cloud-native ecosystem map

---

## License

This project is open source. See [LICENSE](LICENSE) for details.

If no `LICENSE` file is present, content is provided as-is for educational purposes. Contributors retain rights to their submissions; by contributing you agree your changes may be included in this repository.

---

<p align="center">
  Built with ☁️ for the cloud engineering community.<br>
  <strong>Study consistently. Build projects. Earn certifications. Land the role.</strong>
</p>
