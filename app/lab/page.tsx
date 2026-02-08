import { GlassCard, SectionHeading, Button } from "@/components/ui";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Lab | Eric Shadrach Miller",
  description: "Personal projects and experiments in Agentic AI, game design, and computational thinking.",
};

const projects = [
  {
    title: "Life RPG System",
    status: "Active",
    description: "Applying agentic AI frameworks to personal productivity — the same pattern-based architecture I build professionally, scaled down to manage daily life. Teachable agents for investing, health, and skill development.",
    tags: ["Agentic AI", "Personal Systems", "Cursor"],
    highlights: [
      "ETF Coach agent for investment decisions",
      "Health tracking with adaptive recommendations",
      "Skill tree progression system",
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: "Unity Prototypes",
    status: "Learning",
    description: "Hands-on prototyping in Unity to test interactive storytelling mechanics. Translating theoretical agent behavior frameworks into playable systems with real-time feedback.",
    tags: ["Unity", "Game Dev", "Prototyping"],
    highlights: [
      "Agent behavior visualization tools",
      "Dialogue system experiments",
      "VR interaction patterns",
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
      </svg>
    ),
  },
  {
    title: "Microscope Campaigns",
    status: "Ongoing",
    description: "Using Ben Robbins' Microscope RPG to collaboratively build fractal histories. These sessions directly inform how I design narrative generation and emergent story structures in AI systems.",
    tags: ["Tabletop", "World-Building", "Narrative"],
    highlights: [
      "Fractal history generation",
      "Collaborative narrative design",
      "Emergent story patterns",
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const experiments = [
  {
    name: "Dialogue State Machines",
    description: "Hybrid state machine + LLM conversation flows",
    status: "Research",
  },
  {
    name: "Emotion Visualization",
    description: "Rendering agent internal states as live dashboards",
    status: "Prototype",
  },
  {
    name: "Trust Calibration",
    description: "Tuning trust decay/growth curves for realism",
    status: "Testing",
  },
  {
    name: "Narrative Branching",
    description: "LLM-driven procedural story arc generation",
    status: "Concept",
  },
];

const tools = [
  { name: "Cursor", category: "AI-Assisted Development" },
  { name: "Claude", category: "LLM Integration" },
  { name: "Unity", category: "Game Engine" },
  { name: "Python", category: "Prototyping" },
  { name: "TypeScript", category: "Web Development" },
  { name: "Streamlit", category: "Data Apps" },
];

export default function LabPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 mb-6 text-sm font-medium text-teal bg-teal/10 rounded-full font-heading">
              Personal Projects
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6">
              The <span className="text-gradient-teal">Laboratory</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground-muted max-w-2xl mx-auto">
              Where theory meets practice. Personal experiments in Agentic AI,
              game design, and computational thinking.
            </p>
          </div>
        </div>
      </section>

      {/* Main Projects */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading
            label="Active Projects"
            title="What I&apos;m Building"
            subtitle="Personal projects that apply the same frameworks I use professionally."
          />

          <div className="space-y-8">
            {projects.map((project) => (
              <GlassCard key={project.title} className="group">
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Icon and Title */}
                  <div className="flex items-start gap-4 lg:w-1/3">
                    <div className="w-14 h-14 rounded-xl bg-teal/10 text-teal flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      {project.icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-xl font-heading font-semibold group-hover:text-teal transition-colors">
                          {project.title}
                        </h3>
                        <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${project.status === "Active"
                            ? "bg-green-100 text-green-700"
                            : project.status === "Learning"
                              ? "bg-blue-100 text-blue-700"
                              : "bg-gold/10 text-gold"
                          }`}>
                          {project.status}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs text-foreground-muted"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="lg:w-1/3">
                    <p className="text-foreground-muted leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Highlights */}
                  <div className="lg:w-1/3">
                    <h4 className="text-sm font-heading font-semibold text-foreground mb-2">
                      Key Features
                    </h4>
                    <ul className="space-y-1">
                      {project.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex items-center gap-2 text-sm text-foreground-muted"
                        >
                          <svg className="w-4 h-4 text-teal flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Experiments Grid */}
      <section className="py-24 bg-background bg-dots-pattern">
        <div className="container mx-auto px-4">
          <SectionHeading
            label="Experiments"
            title="Current Explorations"
            subtitle="Smaller experiments and research directions."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {experiments.map((experiment) => (
              <GlassCard key={experiment.name} variant="subtle" className="text-center">
                <span className={`inline-block px-2 py-0.5 text-xs font-medium rounded-full mb-3 ${experiment.status === "Research"
                    ? "bg-purple-100 text-purple-700"
                    : experiment.status === "Prototype"
                      ? "bg-teal/10 text-teal"
                      : experiment.status === "Testing"
                        ? "bg-green-100 text-green-700"
                        : "bg-gray-100 text-gray-700"
                  }`}>
                  {experiment.status}
                </span>
                <h4 className="font-heading font-semibold mb-1">
                  {experiment.name}
                </h4>
                <p className="text-foreground-muted text-sm">
                  {experiment.description}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading
            label="Toolkit"
            title="Technologies I Use"
            subtitle="The tools that power my experiments."
            align="center"
          />

          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {tools.map((tool) => (
              <div
                key={tool.name}
                className="glass px-6 py-4 rounded-xl text-center hover:shadow-lg transition-shadow"
              >
                <div className="font-heading font-semibold text-foreground">
                  {tool.name}
                </div>
                <div className="text-xs text-foreground-muted">
                  {tool.category}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <GlassCard className="text-center py-12">
              <h3 className="text-2xl font-heading font-bold mb-4">
                The Lab Philosophy
              </h3>
              <p className="text-foreground-muted leading-relaxed mb-6">
                I use the same agentic frameworks to manage my own life that I build for
                enterprise clients. The &ldquo;Life RPG&rdquo; isn&apos;t just a side project —
                it&apos;s proof that these systems work at every scale, from personal
                productivity to law enforcement training.
              </p>
              <p className="text-sm text-teal font-medium italic">
                &ldquo;If I wouldn&apos;t use it myself, I won&apos;t build it for others.&rdquo;
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <GlassCard className="max-w-3xl mx-auto text-center py-12">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
              Interested in Collaborating?
            </h2>
            <p className="text-foreground-muted mb-8">
              I&apos;m always looking for interesting problems to solve.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/about#contact" variant="primary" size="lg">
                Get in Touch
              </Button>
              <Button href="/about" variant="glass" size="lg">
                Learn About Me
              </Button>
            </div>
          </GlassCard>
        </div>
      </section>
    </div>
  );
}
