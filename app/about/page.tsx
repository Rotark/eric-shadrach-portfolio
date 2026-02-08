import { GlassCard, SectionHeading, Button } from "@/components/ui";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About | Eric Shadrach Miller",
  description: "PhD researcher and AI systems architect. Bridging academic rigor with practical implementation.",
};

const timeline = [
  {
    year: "2022–Present",
    title: "Lead Narrative Systems Designer",
    organization: "Axon",
    description: "Catalyst and lead inventor of the patent-pending agentic system (WO2025072878A1) powering verbal skills training in VR.",
    type: "work",
  },
  {
    year: "2021–2022",
    title: "Senior Game Designer",
    organization: "OxeFit",
    description: "Designed gamified fitness experiences blending game mechanics with exercise hardware.",
    type: "work",
  },
  {
    year: "2017–2021",
    title: "PhD in Arts & Technology",
    organization: "University of Texas at Dallas",
    description: "McDermott Fellow. Dissertation on interactive storytelling games and computational thinking. Worked with the Narrative Systems and Games Research Labs.",
    type: "education",
  },
  {
    year: "2015–2017",
    title: "Technical Artist / Game Designer",
    organization: "pixelmolkerei ag (Switzerland)",
    description: "Built Unity applications for medical clients and designed new game projects. Bridging creative and technical workflows.",
    type: "work",
  },
  {
    year: "2016–2017",
    title: "Writer & Quest Designer",
    organization: "Sword Twin Studios",
    description: "Wrote dialogue, story structure, and mythos for SkyKeepers, including 15 sidequests and the full main storyline.",
    type: "work",
  },
  {
    year: "2014–2015",
    title: "Associate Technical Artist",
    organization: "Electronic Arts (EA)",
    description: "Validated game assets using Python and C#. Streamlined 3D artist workflows in Perforce, Photoshop, and Maya.",
    type: "work",
  },
  {
    year: "2014",
    title: "Technical Teaching Assistant",
    organization: "Vancouver Film School",
    description: "Mentored students in Unity, C#, C++, and Perforce across Game Design and Programming programs.",
    type: "education",
  },
  {
    year: "2013–2014",
    title: "Narrative Designer & AI Coder",
    organization: "Team Plasma Platypus",
    description: "Coded creature AI and animations while writing game narrative, scripts, and character concepts.",
    type: "work",
  },
  {
    year: "2009–2011",
    title: "MFA in Creative Writing",
    organization: "Temple University",
    description: "Graduate study in creative writing. Teaching assistant and tutor at Sylvan Learning Centers.",
    type: "education",
  },
  {
    year: "2003–2007",
    title: "BA, English Lit & Creative Writing",
    organization: "Illinois College",
    description: "Double major in English Literature and Creative Writing.",
    type: "education",
  },
];

const values = [
  {
    title: "I Build What I Research",
    description: "I don&apos;t write papers and move on. Every framework I propose ends up as code in a real product.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Everything Is a System",
    description: "Board games, VR sims, personal productivity tools. I see the same patterns everywhere and I can&apos;t help but design them.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
  },
  {
    title: "AI Should Help People",
    description: "Not replace them. The stuff I build is meant to teach, to build empathy, to make people better at the hard conversations.",
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
              {/* Photo */}
              <div className="lg:w-1/3">
                <div className="w-64 h-80 mx-auto rounded-2xl glass overflow-hidden shadow-xl shadow-teal/10">
                  <Image
                    src="/images/headshot.jpg"
                    alt="Eric Shadrach Miller"
                    width={256}
                    height={320}
                    className="w-full h-full object-cover object-top"
                    priority
                  />
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
                  PhD in Arts & Technology, based in <span className="text-teal font-medium">Tampa</span>. I spend my time figuring out how to make AI agents feel like real people, and I got here through game design, creative writing, and a lot of tabletop RPGs.
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
            title="How I Think About Work"
            subtitle="A few things that come up in everything I build."
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
            title="Where I've Been"
            subtitle="Games, academia, Switzerland, EA, and eventually Axon."
            align="center"
          />

          <div className="max-w-2xl mx-auto">
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <GlassCard key={item.year + item.title} className="relative">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${item.type === "education" ? "bg-gold/10 text-gold" : "bg-teal/10 text-teal"
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
                        <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${item.type === "education" ? "bg-gold/10 text-gold" : "bg-teal/10 text-teal"
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

      {/* Patent */}
      <section className="py-24 bg-background bg-dots-pattern">
        <div className="container mx-auto px-4">
          <SectionHeading
            label="Intellectual Property"
            title="Patent"
            align="center"
          />

          <div className="max-w-3xl mx-auto">
            <GlassCard className="group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold/10 text-gold flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold mb-1 group-hover:text-teal transition-colors">
                    Automatically Generating Audio Responses for Simulation Systems
                  </h3>
                  <p className="text-sm text-teal font-medium mb-3">
                    WO2025072878A1 &bull; Patent Pending &bull; Filed September 2024
                  </p>
                  <p className="text-foreground-muted leading-relaxed mb-4">
                    Lead inventor. Co-inventors: Mark Cusick, PhD &amp; Robert Murphy.
                    Assigned to Axon Enterprise Inc. A system for dynamic
                    NPC dialogue generation in VR, where agents respond contextually to user verbal
                    and physical inputs. One of the first &ldquo;agentic&rdquo; narrative loops
                    shipped in a production enterprise environment.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Button
                      href="https://patents.google.com/patent/WO2025072878A1/en"
                      external
                      variant="secondary"
                      icon={
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      }
                    >
                      View on Google Patents
                    </Button>
                    <Button
                      href="/PendingPatent_WO2025072878A1.pdf"
                      external
                      variant="glass"
                      icon={
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      }
                    >
                      Download PDF
                    </Button>
                  </div>
                </div>
              </div>
            </GlassCard>
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
                &ldquo;I identified the limits of decision trees in my dissertation. At Axon, I got to build what comes next.&rdquo;
              </blockquote>
              <p className="text-foreground-muted">
                The through-line of my career
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
            title="Let's Talk"
            subtitle="If you're working on AI for training, education, or anything that needs agents to act like people, I'm interested."
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
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                    <a
                      href="https://github.com/ericshadrachmiller"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 glass rounded-xl text-foreground-muted hover:text-teal hover:shadow-lg transition-all"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
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
              That&apos;s the Short Version
            </h2>
            <p className="text-foreground-muted mb-8">
              I wrote about the future of interactive AI, then I helped build it. If that sounds interesting, take a look.
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
