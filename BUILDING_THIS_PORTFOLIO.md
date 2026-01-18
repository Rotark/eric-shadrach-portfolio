# Building a Professional Portfolio Site: A Complete Manual

## Project: Eric Shadrach Miller Portfolio - "Solarpunk Lab"
**Created:** January 2026  
**Live URL:** https://ericshadrach.com  
**Repository:** https://github.com/Rotark/eric-shadrach-portfolio

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Planning Phase](#2-planning-phase)
3. [Technology Stack Selection](#3-technology-stack-selection)
4. [Design System Creation](#4-design-system-creation)
5. [Project Setup](#5-project-setup)
6. [Component Architecture](#6-component-architecture)
7. [Page Development](#7-page-development)
8. [Deployment Pipeline](#8-deployment-pipeline)
9. [Domain Configuration](#9-domain-configuration)
10. [Lessons Learned](#10-lessons-learned)
11. [For AI Agents](#11-for-ai-agents)

---

## 1. Project Overview

### The Goal
Create a professional portfolio website for a PhD researcher and AI systems architect that:
- Positions the owner as an "Architect of Agentic AI Systems"
- Tells a cohesive narrative ("From Speculation to Simulation")
- Showcases the connection between academic research (2021 dissertation) and practical implementation (Axon VR)
- Reflects a "sunny" personality while maintaining technical credibility

### The Outcome
A fully deployed Next.js site with:
- 6 content pages (Home, Axon, Dissertation, Methodology, Lab, About)
- Custom "Solarpunk Lab" design system with glassmorphism
- Responsive navigation and footer
- SEO optimization (sitemap, robots.txt, Open Graph)
- Custom domain with SSL

---

## 2. Planning Phase

### Information Gathering
Before writing any code, we gathered:

1. **Professional Background**
   - PhD dissertation topic and link
   - Current work (Axon Verbal Skills Training)
   - Core methodologies (Humics, Speculative Design)
   - Personal projects

2. **Design Preferences**
   - Technology stack preference (Next.js for AI-assisted development)
   - Visual aesthetic ("Solarpunk Lab" - optimistic, clean, high-tech)
   - Color scheme (Deep Teal + Soft Gold on light background)
   - Deployment target (Vercel)

3. **Content Strategy**
   - Core narrative: Theory (2021) → Method → Practice (2025)
   - Tagline: "Designing systems that teach us how to be human"
   - Key differentiator: Predicted AI shift in dissertation, then built it

### Planning Document
A detailed plan was created covering:
- Site architecture and navigation
- Section-by-section content breakdown
- File structure
- Implementation phases
- Design tokens (colors, typography, spacing)

---

## 3. Technology Stack Selection

### Chosen Stack

| Technology | Purpose | Why Chosen |
|------------|---------|------------|
| **Next.js 14+** | Framework | App Router, excellent AI code generation support, SEO-friendly |
| **TypeScript** | Language | Type safety, better AI autocomplete, fewer runtime errors |
| **Tailwind CSS v4** | Styling | Rapid iteration, utility-first, great with AI assistance |
| **Framer Motion** | Animations | Declarative animations, React-native integration |
| **Vercel** | Hosting | Zero-config Next.js deployment, automatic SSL, edge network |

### Why Next.js for AI-Assisted Development
Next.js/React is the "native language" of AI coding assistants because:
- Largest training corpus (most web apps use React)
- Component-based architecture maps well to AI task decomposition
- TypeScript provides guardrails for AI-generated code
- File-based routing is intuitive for AI to understand

---

## 4. Design System Creation

### Color Palette

```css
:root {
  /* Base Colors */
  --background: #FAFAFA;
  --foreground: #1F2937;
  --foreground-muted: #6B7280;
  
  /* Glass Effect */
  --glass-bg: rgba(255, 255, 255, 0.7);
  --glass-border: rgba(255, 255, 255, 0.3);
  
  /* Accent Colors */
  --teal-primary: #0D9488;    /* Primary actions, links */
  --teal-light: #14B8A6;      /* Hover states */
  --teal-dark: #0F766E;       /* Active states */
  --gold-primary: #D97706;    /* Warmth, secondary accent */
}
```

### Typography

| Role | Font | Weight | Usage |
|------|------|--------|-------|
| Headings | Space Grotesk | 600-700 | H1-H6, buttons, labels |
| Body | Inter | 400-500 | Paragraphs, descriptions |
| Code | JetBrains Mono | 400-500 | Code blocks, technical content |

### Glassmorphism Implementation

```css
.glass {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 25px 50px -12px rgba(13, 148, 136, 0.1);
}
```

### Key Design Decisions
1. **Light mode only** - Reflects "sunny" personality, avoids dark/hacker aesthetic
2. **Glassmorphism cards** - Modern, creates depth without heaviness
3. **Teal + Gold** - Balances tech (teal) with warmth (gold)
4. **Generous whitespace** - Academic credibility, reduces visual noise

---

## 5. Project Setup

### Step 1: Initialize Next.js Project

```powershell
# Create project (note: folder names must be lowercase for npm)
npx create-next-app@latest portfolio --typescript --tailwind --eslint --app --use-npm --yes

# If in existing folder with uppercase name, create in subfolder then move
npx create-next-app@latest portfolio --typescript --tailwind --eslint --app --use-npm --yes
Move-Item -Path portfolio/* -Destination . -Force
```

### Step 2: Install Additional Dependencies

```powershell
npm install framer-motion clsx tailwind-merge
```

- **framer-motion**: Animation library
- **clsx**: Conditional class name utility
- **tailwind-merge**: Merges Tailwind classes without conflicts

### Step 3: Initialize Git

```powershell
git init
git config user.email "your@email.com"
git config user.name "Your Name"
```

### Step 4: Project Structure

```
project-root/
├── app/
│   ├── layout.tsx          # Root layout (fonts, metadata, nav, footer)
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles, CSS variables
│   ├── axon/page.tsx       # Case study page
│   ├── dissertation/page.tsx
│   ├── methodology/page.tsx
│   ├── lab/page.tsx
│   ├── about/page.tsx
│   ├── robots.ts           # SEO: robots.txt generation
│   └── sitemap.ts          # SEO: sitemap.xml generation
├── components/
│   ├── ui/
│   │   ├── GlassCard.tsx   # Reusable glass container
│   │   ├── Button.tsx      # Button variants
│   │   ├── SectionHeading.tsx
│   │   └── index.ts        # Barrel export
│   ├── Navigation.tsx      # Floating glass navbar
│   ├── Footer.tsx
│   ├── Hero.tsx
│   └── ArchitectureDiagram.tsx
├── lib/
│   └── utils.ts            # cn() helper for Tailwind
├── public/
│   └── images/
│       └── headshot.jpg
└── package.json
```

---

## 6. Component Architecture

### Utility Function: `cn()`

```typescript
// lib/utils.ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

This combines `clsx` (conditional classes) with `tailwind-merge` (deduplication).

### Reusable Components

#### GlassCard
```typescript
// components/ui/GlassCard.tsx
interface GlassCardProps {
  children: ReactNode;
  variant?: "default" | "subtle" | "solid";
  hover?: boolean;
  className?: string;
}
```

#### Button
```typescript
// components/ui/Button.tsx
interface ButtonProps {
  variant?: "primary" | "secondary" | "glass" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;           // Makes it a link
  external?: boolean;      // Opens in new tab
  icon?: ReactNode;
  iconPosition?: "left" | "right";
}
```

#### SectionHeading
```typescript
// components/ui/SectionHeading.tsx
interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  label?: string;          // Small badge above title
  align?: "left" | "center";
}
```

### Navigation Pattern

The navigation uses:
1. **Scroll detection** via `useScroll` from Framer Motion
2. **Conditional styling** - transparent when at top, glass effect when scrolled
3. **Mobile menu** with animated overlay
4. **Active link highlighting** via `usePathname`

```typescript
const { scrollY } = useScroll();
useMotionValueEvent(scrollY, "change", (latest) => {
  setIsScrolled(latest > 50);
});
```

---

## 7. Page Development

### Page Structure Pattern

Each page follows this structure:

```typescript
// app/[page]/page.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Title | Eric Shadrach Miller",
  description: "Page description for SEO",
};

export default function PageName() {
  return (
    <div className="pt-24">  {/* Offset for fixed nav */}
      {/* Hero Section */}
      <section className="py-16 bg-gradient-hero">
        {/* Page intro */}
      </section>
      
      {/* Content Sections */}
      <section className="py-24 bg-white">
        {/* Alternating backgrounds: white, bg-background, bg-dots-pattern */}
      </section>
      
      {/* CTA Section */}
      <section className="py-24 bg-gradient-hero">
        {/* Call to action */}
      </section>
    </div>
  );
}
```

### Content Organization

Data is defined as constants at the top of each page:

```typescript
const challenges = [
  {
    title: "Challenge Name",
    description: "Description text",
    icon: (<svg>...</svg>),
  },
  // ...
];
```

This keeps content separate from layout and makes it easy to update.

---

## 8. Deployment Pipeline

### Step 1: Install CLIs

```powershell
# GitHub CLI
winget install GitHub.cli --accept-source-agreements --accept-package-agreements

# Vercel CLI
npm install -g vercel
```

### Step 2: Authenticate

```powershell
# GitHub (opens browser)
gh auth login --web --git-protocol https

# Vercel (opens browser)
vercel login
```

### Step 3: Create GitHub Repository

```powershell
# Create repo and push in one command
gh repo create eric-shadrach-portfolio --public --description "Personal portfolio" --source . --remote origin --push
```

### Step 4: Deploy to Vercel

```powershell
# Initial deployment
vercel --yes --name project-name

# Production deployment
vercel --prod --yes --name project-name
```

### Automatic Deployments

Once connected, every `git push` triggers a new deployment:

```powershell
git add .
git commit -m "Update content"
git push
# Vercel automatically deploys
```

---

## 9. Domain Configuration

### Step 1: Purchase Domain

Recommended registrars:
- **Porkbun** (~$10/year for .com) - Cheapest
- **Namecheap** (~$12/year for .com) - Good value
- **Cloudflare Registrar** - At-cost pricing

### Step 2: Add Domain to Vercel

```powershell
vercel domains add yourdomain.com
vercel domains add www.yourdomain.com
```

### Step 3: Configure DNS at Registrar

Add these records in your registrar's DNS settings:

| Type | Host | Value |
|------|------|-------|
| A | @ | 76.76.21.21 |
| CNAME | www | cname.vercel-dns.com |

### Step 4: Wait for Propagation

- Usually 5-30 minutes
- Can take up to 48 hours
- Vercel auto-provisions SSL certificate

### Verify Configuration

```powershell
vercel domains inspect yourdomain.com
```

---

## 10. Lessons Learned

### What Worked Well

1. **Detailed planning before coding** - The plan document served as a roadmap and reduced back-and-forth
2. **Component-first approach** - Building reusable components (GlassCard, Button) before pages sped up development
3. **TypeScript** - Caught errors early, especially in component props
4. **Tailwind CSS** - Rapid styling iteration without context-switching to CSS files
5. **Vercel + GitHub integration** - Seamless deployment pipeline

### Challenges Encountered

1. **Folder naming** - npm doesn't allow uppercase in package names; had to work around "Resume" folder
2. **PowerShell syntax** - `&&` doesn't work in PowerShell; use `;` instead
3. **Framer Motion types** - Some animation variants needed type adjustments for TypeScript
4. **CSS import order** - `@import url()` must come before `@import "tailwindcss"` in Tailwind v4

### Time Investment

| Phase | Time |
|-------|------|
| Planning & Design | 30 min |
| Project Setup | 15 min |
| Design System | 30 min |
| Components | 30 min |
| Pages (6 total) | 90 min |
| Deployment | 20 min |
| Domain Setup | 15 min |
| **Total** | **~4 hours** |

---

## 11. For AI Agents

### Effective Prompting Patterns

When building a portfolio site with AI assistance:

1. **Provide context first**
   - Share background information (resume, projects, goals)
   - Define the target audience
   - Specify design preferences

2. **Use structured planning**
   - Ask for a plan before implementation
   - Review and refine the plan
   - Execute in phases

3. **Be specific about aesthetics**
   - "Solarpunk Lab" is more useful than "modern"
   - Provide color codes, font names, reference sites
   - Describe the feeling you want (optimistic, professional, etc.)

### Task Decomposition

Break the project into clear phases:

```
Phase 1: Foundation
- Initialize project
- Set up Git
- Configure design tokens

Phase 2: Components
- Build reusable UI components
- Create navigation
- Create footer

Phase 3: Pages
- Home page with hero
- Content pages (one at a time)
- About page with contact

Phase 4: Deployment
- Push to GitHub
- Deploy to Vercel
- Configure domain
```

### Common Commands Reference

```powershell
# Development
npm run dev              # Start dev server
npm run build            # Production build
npm run lint             # Check for errors

# Git
git add .
git commit -m "message"
git push

# Vercel
vercel                   # Preview deployment
vercel --prod            # Production deployment
vercel domains add X     # Add custom domain
vercel domains inspect X # Check domain status

# GitHub CLI
gh repo create NAME --public --source . --push
gh auth status
```

### File Templates

When creating new pages, use this template:

```typescript
import { GlassCard, SectionHeading, Button } from "@/components/ui";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Title | Site Name",
  description: "SEO description",
};

export default function PageName() {
  return (
    <div className="pt-24">
      <section className="py-16 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Hero content */}
          </div>
        </div>
      </section>
    </div>
  );
}
```

### Debugging Tips

1. **Build errors**: Run `npm run build` locally before pushing
2. **Type errors**: Check component prop interfaces
3. **Styling issues**: Use browser DevTools to inspect Tailwind classes
4. **Deployment fails**: Check Vercel build logs at vercel.com

---

## Conclusion

This portfolio was built through collaborative human-AI development:
- **Human**: Provided vision, content, design preferences, and decision-making
- **AI**: Generated code, suggested architecture, handled boilerplate, debugged issues

The key to success was clear communication, structured planning, and iterative refinement. The entire site went from concept to deployed production in approximately 4 hours.

---

*This manual was generated as part of the portfolio project to document the process for future reference and to help others (human or AI) replicate similar projects.*
