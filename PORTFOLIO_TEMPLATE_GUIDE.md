# Portfolio Website Template Guide

> A universal, step-by-step guide for building professional portfolio websites.  
> Works for humans following along or AI agents executing autonomously.

---

## How to Use This Guide

### For Humans
1. Complete **Part 1: Discovery** to define your project
2. Use **Part 2: Narrative** to craft your story
3. Select your aesthetic in **Part 3: Design**
4. Follow **Part 4: Implementation** step-by-step
5. Deploy using **Part 5: Deployment**

### For AI Agents
1. Ask the human to complete the Discovery Questionnaire
2. Generate the Narrative Framework based on their answers
3. Propose a Design System for approval
4. Execute Implementation commands sequentially
5. Guide through Deployment with human authentication steps

---

# Part 1: Discovery Questionnaire

Complete this section before writing any code. These answers drive every decision.

## 1.1 Basic Information

```yaml
# Fill in your details
owner:
  full_name: "{{FULL_NAME}}"
  display_name: "{{DISPLAY_NAME}}"  # How you want to be addressed
  location: "{{CITY}}, {{STATE/COUNTRY}}"
  email: "{{EMAIL}}"
  
domain:
  preferred: "{{PREFERRED_DOMAIN}}"  # e.g., johnsmith.com
  alternatives:
    - "{{ALT_DOMAIN_1}}"
    - "{{ALT_DOMAIN_2}}"
```

## 1.2 Professional Background

```yaml
profession:
  current_title: "{{CURRENT_TITLE}}"
  industry: "{{INDUSTRY}}"
  years_experience: {{YEARS}}
  
  # Select one primary category
  category: "{{CATEGORY}}"
  # Options:
  # - "medical"        (Doctor, Nurse, Therapist, Healthcare)
  # - "legal"          (Attorney, Judge, Paralegal)
  # - "trades"         (Contractor, Electrician, Plumber, Craftsman)
  # - "business"       (Consultant, Finance, Executive, Entrepreneur)
  # - "creative"       (Artist, Musician, Writer, Photographer, Designer)
  # - "education"      (Teacher, Professor, Trainer, Coach)
  # - "technology"     (Engineer, Developer, IT, Data)
  # - "ministry"       (Pastor, Non-Profit, Community Service)
  # - "sales"          (Real Estate, Insurance, B2B Sales)
  # - "wellness"       (Fitness, Nutrition, Life Coach, Mental Health)

credentials:
  - "{{CREDENTIAL_1}}"  # e.g., "PhD in Computer Science"
  - "{{CREDENTIAL_2}}"  # e.g., "Licensed Contractor #12345"
  - "{{CREDENTIAL_3}}"  # e.g., "20 Years Experience"

key_skills:
  - "{{SKILL_1}}"
  - "{{SKILL_2}}"
  - "{{SKILL_3}}"
  - "{{SKILL_4}}"
  - "{{SKILL_5}}"
```

## 1.3 Target Audience & Goals

```yaml
audience:
  primary: "{{PRIMARY_AUDIENCE}}"
  # Examples:
  # - "Homeowners needing renovation"
  # - "Startups seeking legal counsel"
  # - "Couples planning weddings"
  # - "Companies hiring consultants"
  
  pain_points:
    - "{{PAIN_POINT_1}}"  # What problem do they have?
    - "{{PAIN_POINT_2}}"
    
  desired_outcome: "{{WHAT_THEY_WANT}}"

goals:
  primary: "{{PRIMARY_GOAL}}"
  # Options:
  # - "attract_clients"      (Generate leads/inquiries)
  # - "showcase_portfolio"   (Display past work)
  # - "establish_authority"  (Build credibility/thought leadership)
  # - "sell_services"        (Direct booking/purchasing)
  # - "career_legacy"        (Retrospective/retirement)
  # - "personal_brand"       (General online presence)
  
  call_to_action: "{{DESIRED_ACTION}}"
  # Examples:
  # - "Schedule a consultation"
  # - "Request a quote"
  # - "View my portfolio"
  # - "Contact me"
```

## 1.4 Personality & Brand

```yaml
personality:
  # Rate 1-5 for each dimension
  formal_casual: {{1-5}}      # 1=Very Formal, 5=Very Casual
  serious_playful: {{1-5}}    # 1=Very Serious, 5=Very Playful
  traditional_modern: {{1-5}} # 1=Very Traditional, 5=Very Modern
  reserved_bold: {{1-5}}      # 1=Very Reserved, 5=Very Bold

  # Select 3-5 adjectives that describe you/your brand
  adjectives:
    - "{{ADJ_1}}"  # e.g., "trustworthy", "innovative", "warm"
    - "{{ADJ_2}}"
    - "{{ADJ_3}}"

  # What should visitors FEEL when they see your site?
  desired_impression: "{{IMPRESSION}}"
  # Examples:
  # - "This person is an expert I can trust"
  # - "This company does high-quality work"
  # - "This artist has a unique vision"
```

## 1.5 Content Inventory

```yaml
content:
  # What do you have ready?
  headshot: {{true/false}}
  logo: {{true/false}}
  project_photos: {{NUMBER}}
  testimonials: {{NUMBER}}
  case_studies: {{NUMBER}}
  resume_cv: {{true/false}}
  certifications: {{NUMBER}}
  
  # Key projects/work to feature (list 3-6)
  featured_work:
    - title: "{{PROJECT_1_TITLE}}"
      description: "{{PROJECT_1_DESC}}"
      outcome: "{{PROJECT_1_OUTCOME}}"
      
    - title: "{{PROJECT_2_TITLE}}"
      description: "{{PROJECT_2_DESC}}"
      outcome: "{{PROJECT_2_OUTCOME}}"
      
    - title: "{{PROJECT_3_TITLE}}"
      description: "{{PROJECT_3_DESC}}"
      outcome: "{{PROJECT_3_OUTCOME}}"

  # Career timeline (3-5 key milestones)
  timeline:
    - year: "{{YEAR_1}}"
      event: "{{EVENT_1}}"
    - year: "{{YEAR_2}}"
      event: "{{EVENT_2}}"
    - year: "{{YEAR_3}}"
      event: "{{EVENT_3}}"
```

## 1.6 Technical Preferences

```yaml
technical:
  # Hosting preference
  hosting: "vercel"  # Recommended, or "netlify", "github-pages"
  
  # Do you have existing accounts?
  has_github: {{true/false}}
  has_vercel: {{true/false}}
  
  # Domain registrar (if already purchased)
  registrar: "{{REGISTRAR}}"  # e.g., "namecheap", "godaddy", "porkbun"
```

---

# Part 2: Narrative Framework

Your website tells a story. This section helps you craft it.

## 2.1 The Through-Line Formula

Every compelling portfolio has a narrative arc. Use this formula:

```
[PAST] → [METHOD/PHILOSOPHY] → [PRESENT/FUTURE]
```

### Examples by Industry

| Industry | Past | Method | Present |
|----------|------|--------|---------|
| **Contractor** | "Started as an apprentice 25 years ago" | "Old-world craftsmanship meets modern efficiency" | "Building dream homes across Texas" |
| **Attorney** | "Witnessed injustice firsthand" | "Aggressive advocacy with personal attention" | "Fighting for the little guy" |
| **Photographer** | "Fell in love with light as a child" | "Capturing authentic moments, not poses" | "Telling your story through images" |
| **Consultant** | "Learned from Fortune 500 failures" | "Data-driven strategy with human insight" | "Helping startups avoid costly mistakes" |
| **Doctor** | "Called to medicine after family illness" | "Treating patients, not just symptoms" | "Whole-person care for your family" |

### Your Through-Line

```yaml
narrative:
  past: "{{YOUR_ORIGIN_STORY}}"
  method: "{{YOUR_UNIQUE_APPROACH}}"
  present: "{{YOUR_CURRENT_MISSION}}"
```

## 2.2 Headline Generator

Your headline is the first thing visitors see. Use one of these formulas:

### Formula 1: "I [ACTION] [OUTCOME]"
```
"I build homes that last generations"
"I capture moments that matter"
"I solve problems others can't"
```

### Formula 2: "[ADJECTIVE] [PROFESSION] for [AUDIENCE]"
```
"Trusted counsel for growing businesses"
"Creative photography for authentic brands"
"Expert renovation for discerning homeowners"
```

### Formula 3: "[OUTCOME] through [METHOD]"
```
"Justice through relentless advocacy"
"Beautiful spaces through thoughtful design"
"Business growth through strategic clarity"
```

### Formula 4: Question Format
```
"Ready to build your dream home?"
"Need a lawyer who actually fights?"
"Looking for photos that tell your story?"
```

```yaml
headline:
  primary: "{{YOUR_HEADLINE}}"
  subheadline: "{{SUPPORTING_STATEMENT}}"
```

## 2.3 Tagline Generator

A tagline is a memorable phrase that captures your essence (used in footer, metadata).

### Formula: [VALUE] + [DIFFERENTIATOR]
```
"Quality craftsmanship. Honest pricing."
"Your story. Beautifully told."
"Big firm results. Small firm attention."
"Design that works. Beauty that lasts."
```

```yaml
tagline: "{{YOUR_TAGLINE}}"
```

## 2.4 Section Content Prompts

Use these prompts to write content for each section:

### About Section
- In one sentence, what do you do?
- Why did you get into this field?
- What makes your approach different?
- What do clients say about working with you?
- What are you passionate about outside work? (optional, adds personality)

### Services/Work Section
- What specific services do you offer?
- What's your process from start to finish?
- What outcomes can clients expect?
- What types of projects are you best suited for?

### Portfolio/Projects Section
- What was the challenge?
- What was your solution?
- What was the outcome/result?
- What did the client say? (testimonial)

### Contact Section
- What's the best way to reach you?
- What information do you need from inquiries?
- What's your typical response time?
- What geographic area do you serve?

---

# Part 3: Design System Generator

## 3.1 Aesthetic Presets

Choose the preset that best matches your industry and personality:

### Preset A: "Classic Professional"
**Best for:** Attorneys, Financial Advisors, Executives, Consultants
**Personality:** Formal, Trustworthy, Established

```css
:root {
  --background: #FFFFFF;
  --background-alt: #F8F9FA;
  --foreground: #1A1A2E;
  --foreground-muted: #4A4A68;
  --primary: #1E3A5F;      /* Navy blue */
  --primary-light: #2E5077;
  --secondary: #C9A227;    /* Gold accent */
  --secondary-light: #D4B84A;
}
```
**Typography:** Serif headings (Playfair Display, Merriweather), Sans body (Source Sans Pro)
**UI Style:** Clean lines, subtle shadows, traditional layout

---

### Preset B: "Warm & Approachable"
**Best for:** Healthcare, Wellness, Education, Non-Profit, Family Services
**Personality:** Friendly, Caring, Accessible

```css
:root {
  --background: #FFFBF5;
  --background-alt: #FFF8EE;
  --foreground: #3D3D3D;
  --foreground-muted: #6B6B6B;
  --primary: #E07A5F;      /* Terracotta */
  --primary-light: #E8927A;
  --secondary: #81B29A;    /* Sage green */
  --secondary-light: #9BC4AE;
}
```
**Typography:** Rounded sans (Nunito, Quicksand), Friendly serif (Lora)
**UI Style:** Soft corners, warm shadows, organic shapes

---

### Preset C: "Bold & Modern"
**Best for:** Tech, Startups, Creative Agencies, Innovators
**Personality:** Confident, Cutting-edge, Dynamic

```css
:root {
  --background: #0F0F0F;
  --background-alt: #1A1A1A;
  --foreground: #FFFFFF;
  --foreground-muted: #A0A0A0;
  --primary: #6366F1;      /* Electric indigo */
  --primary-light: #818CF8;
  --secondary: #22D3EE;    /* Cyan accent */
  --secondary-light: #67E8F9;
}
```
**Typography:** Geometric sans (Space Grotesk, Outfit), Mono accents (JetBrains Mono)
**UI Style:** Dark mode, gradients, glassmorphism, bold typography

---

### Preset D: "Clean & Minimal"
**Best for:** Designers, Architects, Photographers, Writers
**Personality:** Refined, Focused, Sophisticated

```css
:root {
  --background: #FFFFFF;
  --background-alt: #FAFAFA;
  --foreground: #111111;
  --foreground-muted: #666666;
  --primary: #111111;      /* Black */
  --primary-light: #333333;
  --secondary: #111111;    /* Monochrome */
  --secondary-light: #333333;
}
```
**Typography:** Clean sans (Inter, Helvetica Neue), Elegant serif (EB Garamond)
**UI Style:** Maximum whitespace, thin lines, typography-focused

---

### Preset E: "Rustic Craftsman"
**Best for:** Contractors, Woodworkers, Artisans, Farm/Ranch, Outdoor Services
**Personality:** Authentic, Hardworking, Down-to-earth

```css
:root {
  --background: #FAF6F1;
  --background-alt: #F5EFE6;
  --foreground: #2C2416;
  --foreground-muted: #5C5346;
  --primary: #8B4513;      /* Saddle brown */
  --primary-light: #A0522D;
  --secondary: #556B2F;    /* Olive green */
  --secondary-light: #6B8E23;
}
```
**Typography:** Slab serif (Roboto Slab, Rockwell), Sturdy sans (Work Sans)
**UI Style:** Textured backgrounds, strong borders, practical layout

---

### Preset F: "Elegant Luxury"
**Best for:** High-end Services, Luxury Real Estate, Premium Brands, Fine Dining
**Personality:** Exclusive, Refined, Premium

```css
:root {
  --background: #0A0A0A;
  --background-alt: #141414;
  --foreground: #F5F5F5;
  --foreground-muted: #A3A3A3;
  --primary: #D4AF37;      /* Gold */
  --primary-light: #E5C158;
  --secondary: #D4AF37;    /* Gold accent */
  --secondary-light: #E5C158;
}
```
**Typography:** Elegant serif (Cormorant Garamond, Didot), Refined sans (Montserrat)
**UI Style:** Dark background, gold accents, generous spacing, subtle animations

---

### Preset G: "Solarpunk Lab" (Used for ericshadrach.com)
**Best for:** Tech + Academia, Researchers, Optimistic Futurists
**Personality:** Innovative, Optimistic, Intellectual

```css
:root {
  --background: #FAFAFA;
  --background-alt: #FFFFFF;
  --foreground: #1F2937;
  --foreground-muted: #6B7280;
  --primary: #0D9488;      /* Teal */
  --primary-light: #14B8A6;
  --secondary: #D97706;    /* Gold */
  --secondary-light: #F59E0B;
}
```
**Typography:** Engineered sans (Space Grotesk), Clean body (Inter), Mono (JetBrains Mono)
**UI Style:** Glassmorphism, light mode, subtle patterns, floating elements

---

## 3.2 Design Decision Record

```yaml
design:
  preset: "{{PRESET_LETTER}}"  # A, B, C, D, E, F, or G
  
  # Customizations (optional)
  colors:
    primary: "{{HEX_CODE}}"      # Override if needed
    secondary: "{{HEX_CODE}}"
    
  typography:
    heading_font: "{{FONT_NAME}}"
    body_font: "{{FONT_NAME}}"
    
  ui_style:
    cards: "{{glass/solid/bordered/minimal}}"
    corners: "{{rounded/sharp}}"
    shadows: "{{soft/hard/none}}"
```

---

# Part 4: Technical Implementation

## 4.1 Prerequisites Checklist

Before starting, ensure you have:

- [ ] Node.js installed (v18+) - [Download](https://nodejs.org)
- [ ] Git installed - [Download](https://git-scm.com)
- [ ] Code editor (VS Code or Cursor recommended)
- [ ] Terminal access (PowerShell on Windows, Terminal on Mac)
- [ ] GitHub account - [Sign up](https://github.com)
- [ ] Vercel account - [Sign up](https://vercel.com)

## 4.2 Project Initialization

### Step 1: Create Project Directory

```powershell
# Windows PowerShell
mkdir C:\Projects\{{project-name}}
cd C:\Projects\{{project-name}}
```

```bash
# Mac/Linux
mkdir ~/Projects/{{project-name}}
cd ~/Projects/{{project-name}}
```

### Step 2: Initialize Next.js

```bash
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir=false --import-alias="@/*" --use-npm --yes
```

**Note:** If your folder name has uppercase letters, create in a subfolder first:
```bash
npx create-next-app@latest temp --typescript --tailwind --eslint --app --use-npm --yes
# Then move contents up and delete temp folder
```

### Step 3: Install Dependencies

```bash
npm install framer-motion clsx tailwind-merge
```

### Step 4: Initialize Git

```bash
git init
git config user.email "{{YOUR_EMAIL}}"
git config user.name "{{YOUR_NAME}}"
```

## 4.3 File Structure

Create this structure:

```
{{project-name}}/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
│   ├── about/
│   │   └── page.tsx
│   ├── work/               # or "portfolio", "projects", "services"
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── robots.ts
│   └── sitemap.ts
├── components/
│   ├── ui/
│   │   ├── Card.tsx
│   │   ├── Button.tsx
│   │   ├── SectionHeading.tsx
│   │   └── index.ts
│   ├── Navigation.tsx
│   ├── Footer.tsx
│   └── Hero.tsx
├── lib/
│   └── utils.ts
├── public/
│   └── images/
│       └── headshot.jpg
└── package.json
```

## 4.4 Core Files

### lib/utils.ts

```typescript
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

### app/globals.css

Replace the contents with your chosen preset colors:

```css
@import url('https://fonts.googleapis.com/css2?family={{HEADING_FONT}}:wght@400;500;600;700&family={{BODY_FONT}}:wght@400;500;600&display=swap');
@import "tailwindcss";

:root {
  --background: {{BACKGROUND_COLOR}};
  --background-alt: {{BACKGROUND_ALT_COLOR}};
  --foreground: {{FOREGROUND_COLOR}};
  --foreground-muted: {{FOREGROUND_MUTED_COLOR}};
  --primary: {{PRIMARY_COLOR}};
  --primary-light: {{PRIMARY_LIGHT_COLOR}};
  --secondary: {{SECONDARY_COLOR}};
  --secondary-light: {{SECONDARY_LIGHT_COLOR}};
  
  --font-heading: '{{HEADING_FONT}}', sans-serif;
  --font-body: '{{BODY_FONT}}', sans-serif;
}

@theme inline {
  --color-background: var(--background);
  --color-background-alt: var(--background-alt);
  --color-foreground: var(--foreground);
  --color-foreground-muted: var(--foreground-muted);
  --color-primary: var(--primary);
  --color-primary-light: var(--primary-light);
  --color-secondary: var(--secondary);
  --color-secondary-light: var(--secondary-light);
  --font-heading: var(--font-heading);
  --font-body: var(--font-body);
}

html {
  scroll-behavior: smooth;
}

body {
  background: var(--background);
  color: var(--foreground);
  font-family: var(--font-body);
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading);
  font-weight: 600;
}

/* Add preset-specific styles here */
```

### app/layout.tsx

```typescript
import type { Metadata } from "next";
import { {{Heading_Font}}, {{Body_Font}} } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const headingFont = {{Heading_Font}}({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const bodyFont = {{Body_Font}}({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://{{DOMAIN}}"),
  title: {
    default: "{{DISPLAY_NAME}} | {{CURRENT_TITLE}}",
    template: "%s | {{DISPLAY_NAME}}",
  },
  description: "{{TAGLINE}}. {{SUBHEADLINE}}",
  keywords: [{{KEYWORDS_ARRAY}}],
  authors: [{ name: "{{FULL_NAME}}", url: "https://{{DOMAIN}}" }],
  openGraph: {
    title: "{{DISPLAY_NAME}} | {{CURRENT_TITLE}}",
    description: "{{TAGLINE}}",
    url: "https://{{DOMAIN}}",
    siteName: "{{DISPLAY_NAME}}",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${headingFont.variable} ${bodyFont.variable} font-body antialiased`}>
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
```

## 4.5 Component Templates

### components/ui/Button.tsx

```typescript
"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
  className?: string;
  onClick?: () => void;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  external = false,
  className,
  onClick,
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-heading font-medium rounded-lg transition-all duration-200";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-primary-light",
    secondary: "bg-secondary text-white hover:bg-secondary-light",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white",
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const combinedClassName = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={combinedClassName}>
          {children}
        </a>
      );
    }
    return <Link href={href} className={combinedClassName}>{children}</Link>;
  }

  return <button onClick={onClick} className={combinedClassName}>{children}</button>;
}
```

### components/ui/Card.tsx

```typescript
"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  hover?: boolean;
  className?: string;
}

export function Card({ children, hover = true, className }: CardProps) {
  return (
    <motion.div
      className={cn(
        "bg-background-alt rounded-xl p-6 border border-gray-100",
        hover && "transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}
```

### components/ui/SectionHeading.tsx

```typescript
"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      className={cn("mb-12", align === "center" && "text-center", className)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-foreground-muted max-w-2xl">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
```

### components/ui/index.ts

```typescript
export { Button } from "./Button";
export { Card } from "./Card";
export { SectionHeading } from "./SectionHeading";
```

### components/Navigation.tsx

```typescript
"use client";

import { cn } from "@/lib/utils";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },      // Customize label
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navigation() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "py-3 bg-background/90 backdrop-blur-md shadow-sm" : "py-5"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="font-heading font-bold text-xl text-foreground">
            {{DISPLAY_NAME}}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "font-medium transition-colors",
                  pathname === link.href
                    ? "text-primary"
                    : "text-foreground-muted hover:text-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <Link
            href="/contact"
            className="hidden md:block bg-primary text-white px-5 py-2.5 rounded-lg font-medium hover:bg-primary-light transition-colors"
          >
            {{CALL_TO_ACTION}}
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden mt-4 py-4 border-t"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2 text-foreground-muted hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
```

### components/Footer.tsx

```typescript
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-background-alt border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="font-heading font-bold text-xl">
              {{DISPLAY_NAME}}
            </Link>
            <p className="mt-4 text-foreground-muted text-sm">
              {{TAGLINE}}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm text-foreground-muted">
              <li><Link href="/" className="hover:text-primary">Home</Link></li>
              <li><Link href="/work" className="hover:text-primary">Work</Link></li>
              <li><Link href="/about" className="hover:text-primary">About</Link></li>
              <li><Link href="/contact" className="hover:text-primary">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Contact</h4>
            <p className="text-sm text-foreground-muted">{{LOCATION}}</p>
            <a href="mailto:{{EMAIL}}" className="text-sm text-primary hover:underline">
              {{EMAIL}}
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center text-sm text-foreground-muted">
          <p>© {new Date().getFullYear()} {{FULL_NAME}}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
```

### components/Hero.tsx

```typescript
"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {{HEADLINE}}
          </motion.h1>
          
          <motion.p
            className="text-lg md:text-xl text-foreground-muted mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {{SUBHEADLINE}}
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button href="/contact" variant="primary" size="lg">
              {{CALL_TO_ACTION}}
            </Button>
            <Button href="/work" variant="outline" size="lg">
              View My Work
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
```

## 4.6 Page Templates

### app/page.tsx (Home)

```typescript
import { Hero } from "@/components/Hero";
import { Card, SectionHeading, Button } from "@/components/ui";

export default function Home() {
  return (
    <>
      <Hero />
      
      {/* Services/What I Do Section */}
      <section className="py-24 bg-background-alt">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="What I Do"
            subtitle="{{SERVICES_INTRO}}"
            align="center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Add service cards */}
          </div>
        </div>
      </section>
      
      {/* Featured Work Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Featured Work"
            subtitle="{{WORK_INTRO}}"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Add project cards */}
          </div>
          
          <div className="mt-12 text-center">
            <Button href="/work" variant="outline">
              View All Work
            </Button>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-xl mx-auto">
            {{CTA_TEXT}}
          </p>
          <Button href="/contact" variant="secondary" size="lg">
            {{CALL_TO_ACTION}}
          </Button>
        </div>
      </section>
    </>
  );
}
```

### app/robots.ts

```typescript
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://{{DOMAIN}}/sitemap.xml",
  };
}
```

### app/sitemap.ts

```typescript
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://{{DOMAIN}}";

  return [
    { url: baseUrl, lastModified: new Date(), priority: 1 },
    { url: `${baseUrl}/work`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/about`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), priority: 0.7 },
  ];
}
```

---

# Part 5: Deployment

## 5.1 Install CLIs

### Windows (PowerShell)
```powershell
# GitHub CLI
winget install GitHub.cli --accept-source-agreements --accept-package-agreements

# Vercel CLI
npm install -g vercel
```

### Mac/Linux
```bash
# GitHub CLI
brew install gh

# Vercel CLI
npm install -g vercel
```

## 5.2 Authenticate

```bash
# GitHub (opens browser)
gh auth login --web --git-protocol https

# Vercel (opens browser)
vercel login
```

## 5.3 Create Repository & Push

```bash
# Create GitHub repo and push in one command
gh repo create {{project-name}} --public --description "{{DESCRIPTION}}" --source . --remote origin --push
```

## 5.4 Deploy to Vercel

```bash
# Initial deployment
vercel --yes --name {{project-name}}

# Production deployment
vercel --prod --yes --name {{project-name}}
```

## 5.5 Add Custom Domain

```bash
# Add domains to Vercel
vercel domains add {{DOMAIN}}
vercel domains add www.{{DOMAIN}}
```

## 5.6 Configure DNS

Add these records at your domain registrar:

| Type | Host | Value |
|------|------|-------|
| A | @ | 76.76.21.21 |
| CNAME | www | cname.vercel-dns.com |

### Registrar-Specific Instructions

**Namecheap:**
1. Domain List → Manage → Advanced DNS
2. Add A Record: Host=@, Value=76.76.21.21
3. Add CNAME: Host=www, Value=cname.vercel-dns.com

**GoDaddy:**
1. My Products → DNS → Manage
2. Add A Record: Name=@, Value=76.76.21.21
3. Add CNAME: Name=www, Value=cname.vercel-dns.com

**Porkbun:**
1. Domain Management → DNS Records
2. Add A Record: Host=(blank), Answer=76.76.21.21
3. Add CNAME: Host=www, Answer=cname.vercel-dns.com

**Cloudflare:**
1. DNS → Records
2. Add A Record: Name=@, IPv4=76.76.21.21, Proxy=DNS Only
3. Add CNAME: Name=www, Target=cname.vercel-dns.com, Proxy=DNS Only

---

# Part 6: AI Agent Instructions

## 6.1 Recommended Workflow

When an AI agent is tasked with building a portfolio site:

### Phase 1: Discovery (Requires Human Input)
1. Present the Discovery Questionnaire (Part 1)
2. Wait for human to complete all sections
3. Clarify any ambiguous answers
4. Confirm understanding before proceeding

### Phase 2: Narrative (AI + Human Collaboration)
1. Generate headline/tagline options based on discovery
2. Present 3-5 options for human selection
3. Draft section content based on through-line
4. Get human approval on messaging

### Phase 3: Design (AI Proposes, Human Approves)
1. Recommend aesthetic preset based on industry + personality scores
2. Show color palette and typography preview
3. Get explicit approval before implementing
4. Note any customization requests

### Phase 4: Implementation (AI Executes)
1. Run all setup commands sequentially
2. Create file structure
3. Implement components with filled-in values
4. Build all pages
5. Run build to verify no errors

### Phase 5: Deployment (AI + Human for Auth)
1. Guide human through GitHub authentication
2. Create repository
3. Guide human through Vercel authentication
4. Deploy to production
5. Guide human through DNS configuration

## 6.2 Decision Points Requiring Human Input

Never proceed without explicit human approval for:

- [ ] Final headline and tagline
- [ ] Color palette selection
- [ ] Featured projects to include
- [ ] Contact information to display
- [ ] Call-to-action wording
- [ ] Domain name choice

## 6.3 Quality Checkpoints

Before considering the project complete, verify:

- [ ] `npm run build` succeeds with no errors
- [ ] All pages render correctly at localhost:3000
- [ ] Navigation works on all pages
- [ ] Mobile menu functions properly
- [ ] All links work (no 404s)
- [ ] Images load correctly
- [ ] Contact information is accurate
- [ ] SEO metadata is populated
- [ ] Site is accessible at production URL
- [ ] SSL certificate is active (https works)

## 6.4 Common Issues & Solutions

| Issue | Solution |
|-------|----------|
| Folder name has uppercase | Create in subfolder, then move contents |
| PowerShell `&&` doesn't work | Use `;` instead |
| npm naming error | Use lowercase project name |
| Framer Motion type errors | Use inline animation props instead of variants |
| CSS import order warning | Put `@import url()` before `@import "tailwindcss"` |
| Vercel project name error | Specify `--name` flag with lowercase name |
| DNS not propagating | Wait up to 48 hours, verify records are correct |

## 6.5 Handoff Checklist

When project is complete, provide human with:

- [ ] Live site URL
- [ ] GitHub repository URL
- [ ] Vercel dashboard URL
- [ ] Instructions for making content updates
- [ ] DNS verification status

---

# Appendix: Quick Reference

## Command Cheatsheet

```bash
# Development
npm run dev              # Start dev server (localhost:3000)
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

## Placeholder Reference

| Placeholder | Description |
|-------------|-------------|
| `{{FULL_NAME}}` | Legal name |
| `{{DISPLAY_NAME}}` | How to be addressed |
| `{{DOMAIN}}` | Website domain |
| `{{EMAIL}}` | Contact email |
| `{{LOCATION}}` | City, State/Country |
| `{{CURRENT_TITLE}}` | Professional title |
| `{{HEADLINE}}` | Main hero headline |
| `{{SUBHEADLINE}}` | Supporting statement |
| `{{TAGLINE}}` | Short memorable phrase |
| `{{CALL_TO_ACTION}}` | Button text |
| `{{PRIMARY_COLOR}}` | Main brand color (hex) |
| `{{SECONDARY_COLOR}}` | Accent color (hex) |
| `{{HEADING_FONT}}` | Font for headings |
| `{{BODY_FONT}}` | Font for body text |

---

*This template guide was created based on the successful development of ericshadrach.com and is designed to be used by both humans and AI agents for building professional portfolio websites.*
