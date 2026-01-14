import { GlassCard, SectionHeading, Button } from "@/components/ui";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Methodology: Humics & Speculative Design | Eric Shadrach Miller",
  description: "The physics of people and the art of designing futures. Two core methodologies that drive my work in Agentic AI.",
};

const humicsComponents = [
  {
    name: "Trust Dynamics",
    description: "Modeling how trust builds and erodes through interaction patterns, response timing, and consistency.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    name: "Emotional State",
    description: "Tracking emotional progression through valence, arousal, and dominance dimensions over time.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    name: "Hidden Facts",
    description: "Internal agent knowledge that influences behavior but isn't directly observable by the user.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    name: "Rapport Metrics",
    description: "Quantifying the quality of connection through mirroring, acknowledgment, and reciprocity.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

const speculativeSteps = [
  {
    step: 1,
    title: "Envision the Future",
    description: "Use science fiction scenarios to imagine systems 10-20 years ahead of current technology.",
  },
  {
    step: 2,
    title: "Work Backwards",
    description: "Identify the technical and social requirements needed to reach that envisioned future.",
  },
  {
    step: 3,
    title: "Prototype the Gap",
    description: "Build systems that bridge current capabilities with future possibilities.",
  },
  {
    step: 4,
    title: "Iterate with Fiction",
    description: "Use narrative scenarios to stress-test designs before implementation.",
  },
];

const connections = [
  {
    from: "Microscope RPG",
    to: "World Generation",
    description: "Fractal history-building techniques inform how AI agents construct coherent backstories.",
  },
  {
    from: "Tabletop Systems",
    to: "State Machines",
    description: "RPG mechanics translate directly to agent behavior rules and goal prioritization.",
  },
  {
    from: "Science Fiction",
    to: "Design Futures",
    description: "Speculative narratives become design documents for systems that don't yet exist.",
  },
];

export default function MethodologyPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 mb-6 text-sm font-medium text-teal bg-teal/10 rounded-full font-heading">
              Core Methodologies
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6">
              The Science of{" "}
              <span className="text-gradient-teal">Designing Humans</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground-muted max-w-2xl mx-auto">
              Two frameworks that drive my approach to Agentic AI: understanding people 
              as systems, and designing futures through fiction.
            </p>
          </div>
        </div>
      </section>

      {/* Humics Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <SectionHeading
              label="Framework 1"
              title="Humics: The Physics of People"
              subtitle="Just as a game engine needs physics for objects, it needs 'Humics' for people. My work focuses on quantifying the unquantifiable."
            />

            <GlassCard className="mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold/10 text-gold flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold mb-2">The Core Idea</h3>
                  <p className="text-foreground-muted leading-relaxed">
                    <strong className="text-foreground">Humics</strong> is my term for the systematic 
                    modeling of human social dynamics in computational systems. Where physics engines 
                    simulate gravity and collision, Humics engines simulate trust, rapport, and 
                    emotional progression. This allows AI agents to behave in ways that feel 
                    authentically human.
                  </p>
                </div>
              </div>
            </GlassCard>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {humicsComponents.map((component) => (
                <GlassCard key={component.name} variant="subtle" className="group">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-teal/10 text-teal flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      {component.icon}
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold mb-1 group-hover:text-teal transition-colors">
                        {component.name}
                      </h4>
                      <p className="text-foreground-muted text-sm">
                        {component.description}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Visual Representation */}
      <section className="py-24 bg-background bg-dots-pattern">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <GlassCard className="text-center py-12">
              <h3 className="text-2xl font-heading font-bold mb-6">
                The Humics Equation
              </h3>
              <div className="bg-white/50 rounded-xl p-8 font-mono text-lg mb-6">
                <span className="text-teal">AgentBehavior</span> = f(
                <span className="text-gold">Trust</span>, 
                <span className="text-gold">Emotion</span>, 
                <span className="text-gold">HiddenFacts</span>, 
                <span className="text-teal">UserInput</span>)
              </div>
              <p className="text-foreground-muted text-sm max-w-xl mx-auto">
                Agent responses are not scripted — they emerge from the dynamic interaction 
                of internal state variables and real-time user input.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Speculative Design Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <SectionHeading
              label="Framework 2"
              title="Speculative Design"
              subtitle="Using science fiction methodologies not just to write stories, but to design systems that don't yet exist."
            />

            <GlassCard className="mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-teal/10 text-teal flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold mb-2">Design for the Decade</h3>
                  <p className="text-foreground-muted leading-relaxed">
                    My dissertation argued that interactive storytelling games may span more than 
                    a decade of player experience. Traditional design methods can&apos;t account for 
                    this timescale. <strong className="text-foreground">Speculative Design</strong> uses 
                    science fiction scenarios to prototype experiences that won&apos;t be technically 
                    feasible for years — ensuring we&apos;re building toward the right future.
                  </p>
                </div>
              </div>
            </GlassCard>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {speculativeSteps.map((item) => (
                <GlassCard key={item.step} variant="subtle" className="text-center">
                  <div className="w-10 h-10 mx-auto mb-4 rounded-full bg-teal text-white flex items-center justify-center font-heading font-bold">
                    {item.step}
                  </div>
                  <h4 className="font-heading font-semibold mb-2">
                    {item.title}
                  </h4>
                  <p className="text-foreground-muted text-sm">
                    {item.description}
                  </p>
                </GlassCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Connections */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            label="Origins"
            title="Where These Ideas Come From"
            subtitle="The unexpected connections between tabletop RPGs, science fiction, and AI systems design."
            align="center"
          />

          <div className="max-w-3xl mx-auto space-y-6">
            {connections.map((connection) => (
              <GlassCard key={connection.from} className="group">
                <div className="flex items-center gap-4 mb-3">
                  <span className="px-3 py-1 text-sm font-medium text-gold bg-gold/10 rounded-full">
                    {connection.from}
                  </span>
                  <svg className="w-5 h-5 text-teal/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                  <span className="px-3 py-1 text-sm font-medium text-teal bg-teal/10 rounded-full">
                    {connection.to}
                  </span>
                </div>
                <p className="text-foreground-muted">
                  {connection.description}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <GlassCard className="text-center py-12">
              <svg className="w-12 h-12 mx-auto mb-6 text-teal/30" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <blockquote className="text-xl md:text-2xl font-heading font-medium text-foreground mb-6 italic">
                &ldquo;Whether it&apos;s a Microscope history of a fictional world or a survival plan 
                for uncertain futures, I treat every scenario as a simulation to be solved.&rdquo;
              </blockquote>
              <p className="text-foreground-muted">
                — The unifying thread across all my work
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
              See These Methodologies in Action
            </h2>
            <p className="text-foreground-muted mb-8">
              From academic theory to enterprise implementation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/axon" variant="primary" size="lg">
                Axon Case Study
              </Button>
              <Button href="/lab" variant="glass" size="lg">
                Explore the Lab
              </Button>
            </div>
          </GlassCard>
        </div>
      </section>
    </div>
  );
}
