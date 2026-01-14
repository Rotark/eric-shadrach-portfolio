import { Hero } from "@/components/Hero";
import { GlassCard, SectionHeading, Button } from "@/components/ui";
import Link from "next/link";

const highlights = [
  {
    title: "Axon VR",
    description: "AI-powered verbal de-escalation training for law enforcement. Pattern-based agents that think, not just chat.",
    href: "/axon",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    accent: "teal",
  },
  {
    title: "PhD Research",
    description: "\"Toward the Design of Interactive Storytelling Games That Teach Computational Thinking\" — UTD 2021",
    href: "/dissertation",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    accent: "gold",
  },
  {
    title: "Humics",
    description: "The physics of people. Quantifying trust, rapport, and empathy for AI systems that understand humans.",
    href: "/methodology",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    accent: "teal",
  },
];

const narrative = {
  theory: {
    year: "2021",
    title: "The Theory",
    description: "My dissertation argued that interactive storytelling must move from rigid sequential logic to neural networks to truly teach complex thinking.",
  },
  method: {
    title: "The Method",
    description: "Using \"Science Fiction Speculative Design\" to envision systems before the technology fully exists.",
  },
  practice: {
    year: "2025",
    title: "The Practice",
    description: "Executing that exact vision at Axon, building the pattern-based human simulators I wrote about.",
  },
};

export default function Home() {
  return (
    <>
      <Hero />

      {/* Narrative Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading
            label="The Journey"
            title="From Speculation to Simulation"
            subtitle="The story of predicting the shift from sequential logic to neural networks — then building the proof."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Theory */}
            <GlassCard className="text-center">
              <span className="inline-block px-3 py-1 text-xs font-medium text-teal bg-teal/10 rounded-full mb-4">
                {narrative.theory.year}
              </span>
              <h3 className="text-xl font-heading font-semibold mb-3">
                {narrative.theory.title}
              </h3>
              <p className="text-foreground-muted text-sm leading-relaxed">
                {narrative.theory.description}
              </p>
            </GlassCard>

            {/* Arrow */}
            <div className="hidden md:flex items-center justify-center">
              <svg className="w-12 h-12 text-teal/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>

            {/* Method - Center highlight */}
            <GlassCard variant="solid" className="text-center border-2 border-teal/20">
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-teal/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">
                {narrative.method.title}
              </h3>
              <p className="text-foreground-muted text-sm leading-relaxed">
                {narrative.method.description}
              </p>
            </GlassCard>

            {/* Arrow */}
            <div className="hidden md:flex items-center justify-center">
              <svg className="w-12 h-12 text-teal/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>

            {/* Practice */}
            <GlassCard className="text-center">
              <span className="inline-block px-3 py-1 text-xs font-medium text-gold bg-gold/10 rounded-full mb-4">
                {narrative.practice.year}
              </span>
              <h3 className="text-xl font-heading font-semibold mb-3">
                {narrative.practice.title}
              </h3>
              <p className="text-foreground-muted text-sm leading-relaxed">
                {narrative.practice.description}
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-24 bg-background bg-dots-pattern">
        <div className="container mx-auto px-4">
          <SectionHeading
            label="Featured Work"
            title="Building the Future of Human Learning"
            subtitle="From academic research to enterprise AI systems that transform how people develop critical skills."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((item, index) => (
              <Link key={item.title} href={item.href}>
                <GlassCard
                  className="h-full group cursor-pointer"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`w-14 h-14 rounded-xl mb-6 flex items-center justify-center ${
                    item.accent === "teal" ? "bg-teal/10 text-teal" : "bg-gold/10 text-gold"
                  } group-hover:scale-110 transition-transform`}>
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-3 group-hover:text-teal transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-foreground-muted text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-teal text-sm font-medium group-hover:gap-3 transition-all">
                    Learn more
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </GlassCard>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <GlassCard className="max-w-3xl mx-auto text-center py-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Ready to Build Something{" "}
              <span className="text-gradient-teal">Extraordinary</span>?
            </h2>
            <p className="text-foreground-muted mb-8 max-w-xl mx-auto">
              Whether you&apos;re exploring AI-powered training systems or looking for a collaborator 
              who bridges research and implementation, let&apos;s connect.
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
    </>
  );
}
