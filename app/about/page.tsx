import { GlassCard, SectionHeading, Button } from "@/components/ui";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Eric Shadrach Miller",
  description: "PhD researcher and AI systems architect. Bridging academic rigor with practical implementation.",
};

const timeline = [
  {
    year: "2025",
    title: "AI Systems Architect",
    organization: "Axon",
    description: "Leading the development of Agentic AI for verbal skills training in VR.",
    type: "work",
  },
  {
    year: "2021",
    title: "PhD in Arts & Technology",
    organization: "University of Texas at Dallas",
    description: "Dissertation on interactive storytelling games and computational thinking.",
    type: "education",
  },
  {
    year: "2018",
    title: "Research & Development",
    organization: "Various",
    description: "Game design, educational technology, and AI research projects.",
    type: "work",
  },
];

const values = [
  {
    title: "Theory Meets Practice",
    description: "I don't just write papers — I build the systems I research. Every framework I propose gets tested in real-world applications.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Systems Thinking",
    description: "Whether it's a tabletop RPG, a VR training simulation, or a personal productivity system — I see everything as interconnected systems to be designed.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
  },
  {
    title: "Human-Centered AI",
    description: "Technology should serve human flourishing. My work focuses on AI that teaches, empathizes, and helps people become better versions of themselves.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
];

const expertise = [
  "Agentic AI Systems",
  "Interactive Storytelling",
  "VR/XR Development",
  "Game Design",
  "Computational Thinking",
  "Educational Technology",
  "Neuro-Symbolic AI",
  "Speculative Design",
];

export default function AboutPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              {/* Photo Placeholder */}
              <div className="lg:w-1/3">
                <div className="w-64 h-64 mx-auto rounded-2xl glass overflow-hidden flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-teal/10 flex items-center justify-center">
                      <span className="text-4xl font-heading font-bold text-teal">ESM</span>
                    </div>
                    <p className="text-sm text-foreground-muted">
                      Photo placeholder
                    </p>
                  </div>
                </div>
              </div>

              {/* Bio */}
              <div className="lg:w-2/3 text-center lg:text-left">
                <span className="inline-block px-4 py-2 mb-4 text-sm font-medium text-teal bg-teal/10 rounded-full font-heading">
                  Scholar-Practitioner
                </span>
                <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">
                  Eric Shadrach Miller
                </h1>
                <p className="text-lg text-foreground-muted mb-6 leading-relaxed">
                  A PhD in Arts & Technology based in <span className="text-teal font-medium">Tampa, FL</span>. 
                  I blend the rigor of academic research with the practical demands of shipping software. 
                  My work sits at the intersection of AI, game design, and human learning.
                </p>
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  <Button
                    href="#contact"
                    variant="primary"
                  >
                    Get in Touch
                  </Button>
                  <Button
                    href="https://utd-ir.tdl.org/items/4b5acdb8-b118-47f0-b08f-f85e0155b825"
                    external
                    variant="secondary"
                  >
                    Read My Dissertation
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading
            label="Philosophy"
            title="How I Work"
            subtitle="The principles that guide my approach to building AI systems."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {values.map((value) => (
              <GlassCard key={value.title} className="text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-teal/10 text-teal flex items-center justify-center">
                  {value.icon}
                </div>
                <h3 className="text-lg font-heading font-semibold mb-2">
                  {value.title}
                </h3>
                <p className="text-foreground-muted text-sm leading-relaxed">
                  {value.description}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-background bg-dots-pattern">
        <div className="container mx-auto px-4">
          <SectionHeading
            label="Journey"
            title="Career Timeline"
            subtitle="From academic research to enterprise AI."
            align="center"
          />

          <div className="max-w-2xl mx-auto">
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <GlassCard key={item.year + item.title} className="relative">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                      item.type === "education" ? "bg-gold/10 text-gold" : "bg-teal/10 text-teal"
                    }`}>
                      {item.type === "education" ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path d="M12 14l9-5-9-5-9 5 9 5z" />
                          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                        </svg>
                      ) : (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${
                          item.type === "education" ? "bg-gold/10 text-gold" : "bg-teal/10 text-teal"
                        }`}>
                          {item.year}
                        </span>
                        <span className="text-foreground-muted text-sm">
                          {item.organization}
                        </span>
                      </div>
                      <h3 className="font-heading font-semibold text-foreground mb-1">
                        {item.title}
                      </h3>
                      <p className="text-foreground-muted text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading
            label="Skills"
            title="Areas of Expertise"
            align="center"
          />

          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {expertise.map((skill) => (
              <span
                key={skill}
                className="px-5 py-2.5 glass rounded-full text-sm font-medium text-foreground hover:text-teal hover:border-teal transition-colors cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <GlassCard className="text-center py-12">
              <svg className="w-12 h-12 mx-auto mb-6 text-teal/30" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <blockquote className="text-xl md:text-2xl font-heading font-medium text-foreground mb-6 italic">
                &ldquo;I predicted the limitations of decision trees in 2021. At Axon, I solved them.&rdquo;
              </blockquote>
              <p className="text-foreground-muted">
                — The through-line of my career
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white scroll-mt-24">
        <div className="container mx-auto px-4">
          <SectionHeading
            label="Connect"
            title="Let&apos;s Work Together"
            subtitle="Whether you're exploring AI-powered training systems or looking for a collaborator who bridges research and implementation."
            align="center"
          />

          <div className="max-w-2xl mx-auto">
            <GlassCard className="text-center py-12">
              <div className="space-y-6">
                {/* Email */}
                <div>
                  <h4 className="font-heading font-semibold text-foreground mb-2">
                    Email
                  </h4>
                  <a
                    href="mailto:eric@ericshadrach.io"
                    className="text-teal hover:text-teal-dark transition-colors text-lg"
                  >
                    eric@ericshadrach.io
                  </a>
                </div>

                {/* Location */}
                <div>
                  <h4 className="font-heading font-semibold text-foreground mb-2">
                    Location
                  </h4>
                  <p className="text-foreground-muted">
                    Tampa, FL • Open to Remote
                  </p>
                </div>

                {/* Social Links */}
                <div className="pt-6 border-t border-gray-100">
                  <h4 className="font-heading font-semibold text-foreground mb-4">
                    Find Me Online
                  </h4>
                  <div className="flex justify-center gap-4">
                    <a
                      href="https://linkedin.com/in/ericshadrachmiller"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 glass rounded-xl text-foreground-muted hover:text-teal hover:shadow-lg transition-all"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                    <a
                      href="https://github.com/ericshadrachmiller"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 glass rounded-xl text-foreground-muted hover:text-teal hover:shadow-lg transition-all"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Designing Systems That Teach Us How to Be Human
            </h2>
            <p className="text-foreground-muted mb-8">
              From speculation to simulation — that&apos;s my journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/axon" variant="primary" size="lg">
                See My Work
              </Button>
              <Button href="/dissertation" variant="glass" size="lg">
                Read the Research
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
