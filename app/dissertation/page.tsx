import { GlassCard, SectionHeading, Button } from "@/components/ui";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "PhD Dissertation | Eric Shadrach Miller",
  description: "Toward the Design of Interactive Storytelling Games That Teach Computational Thinking - UTD 2021",
};

const keyInsights = [
  {
    title: "Pattern-Based Over Sequential",
    description: "Neural networks enable 'pattern-based' architectures that can handle the complexity of human interaction, unlike fragile decision trees.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
  },
  {
    title: "Speculative Design Methodology",
    description: "Using science fiction as a design tool to envision and prototype systems before the technology fully exists.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "Computational Thinking Through Play",
    description: "Interactive storytelling games can teach computational thinking by forcing players to model the internal state of AI agents.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Long-Term Player Identity",
    description: "These games may span decades and significantly influence player identity formation, requiring careful ethical design.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const chapters = [
  {
    number: 1,
    title: "Literature Survey",
    description: "Interactive storytelling, game studies, play studies, computational thinking, and science fiction criticism.",
  },
  {
    number: 2,
    title: "Operational Definition",
    description: "Defining interactive storytelling games and arguing that these experiences are indeed games.",
  },
  {
    number: 3,
    title: "Teaching Computational Thinking",
    description: "How emerging interactive storytelling games are uniquely positioned to teach computational thinking.",
  },
  {
    number: 4,
    title: "Core Features & Affordances",
    description: "Exploring the features of interactive storytelling games that enable teaching computational thinking.",
  },
  {
    number: 5,
    title: "Sequential vs Pattern-Based",
    description: "Analyzing examples and testing sequential logic vs neural network architectures.",
  },
  {
    number: 6,
    title: "Science Fiction Methodologies",
    description: "Making the case for formally including science fiction in game design research.",
  },
];

const keywords = [
  "Storytelling",
  "Computational Learning Theory",
  "Non-formal Education",
  "Level Design",
  "Science Fiction",
  "Video Games in Education",
  "Video Game Design",
];

export default function DissertationPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block px-4 py-2 mb-6 text-sm font-medium text-gold bg-gold/10 rounded-full font-heading">
              PhD Dissertation • UTD 2021
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6 leading-tight">
              Toward the Design of Interactive Storytelling Games That Teach{" "}
              <span className="text-gradient-teal">Computational Thinking</span>
            </h1>
            <p className="text-lg text-foreground-muted mb-8 leading-relaxed">
              Eric Shadrach Miller • Arts and Technology, School of Arts, Humanities, and Technology
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                href="https://utd-ir.tdl.org/items/4b5acdb8-b118-47f0-b08f-f85e0155b825"
                external
                variant="primary"
                icon={
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                }
              >
                Download Full PDF
              </Button>
              <Button href="/axon" variant="secondary">
                See It Applied
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Abstract */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <SectionHeading
              label="Abstract"
              title="The Thesis"
              align="center"
            />
            <GlassCard className="text-center">
              <p className="text-foreground-muted leading-relaxed mb-6">
                Interactive storytelling games are an emerging genre that requires greater research, 
                especially when they are made to teach subjects like computational thinking. The most 
                promising avenue for development using neural networks will require an understanding 
                of designing procedures at a level that few writers or game designers could train for.
              </p>
              <p className="text-foreground-muted leading-relaxed mb-6">
                The most likely software architecture for new interactive storytelling games are 
                <span className="text-teal font-medium"> neural networks</span> and these are not 
                explainable in the same manner that traditional sequential logic-based programs. 
                This leads to challenges in design for educational games and makes informal learning 
                the first likely area for creating them.
              </p>
              <p className="text-foreground leading-relaxed font-medium">
                This dissertation proposes that to deal with these challenges, game design research 
                needs to incorporate new methodologies that utilize{" "}
                <span className="text-gold">science fiction for speculative design</span>.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Key Insights */}
      <section className="py-24 bg-background bg-dots-pattern">
        <div className="container mx-auto px-4">
          <SectionHeading
            label="Key Insights"
            title="What the Research Revealed"
            subtitle="Core findings that predicted the AI revolution in interactive storytelling."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {keyInsights.map((insight) => (
              <GlassCard key={insight.title} className="group">
                <div className="w-12 h-12 rounded-xl bg-teal/10 text-teal flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {insight.icon}
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3 group-hover:text-teal transition-colors">
                  {insight.title}
                </h3>
                <p className="text-foreground-muted leading-relaxed">
                  {insight.description}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Chapter Overview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading
            label="Structure"
            title="Chapter Overview"
            subtitle="A journey from literature review to speculative design methodology."
            align="center"
          />

          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {chapters.map((chapter) => (
                <GlassCard
                  key={chapter.number}
                  variant="subtle"
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-teal/10 text-teal flex items-center justify-center font-heading font-bold flex-shrink-0">
                    {chapter.number}
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground mb-1">
                      {chapter.title}
                    </h3>
                    <p className="text-foreground-muted text-sm">
                      {chapter.description}
                    </p>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Keywords */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeading
              label="Topics"
              title="Research Keywords"
              align="center"
            />
            <div className="flex flex-wrap justify-center gap-3">
              {keywords.map((keyword) => (
                <span
                  key={keyword}
                  className="px-4 py-2 bg-white rounded-full text-sm font-medium text-foreground-muted border border-gray-100 hover:border-teal hover:text-teal transition-colors"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Proof */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <GlassCard className="max-w-3xl mx-auto text-center py-12">
            <span className="inline-block px-3 py-1 text-xs font-medium text-gold bg-gold/10 rounded-full mb-4">
              From Theory to Practice
            </span>
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
              The Dissertation Predicted Axon
            </h2>
            <p className="text-foreground-muted mb-8 max-w-xl mx-auto">
              In 2021, I argued that neural networks would revolutionize interactive storytelling. 
              By 2025, I was building exactly that at Axon — pattern-based human simulators for 
              law enforcement training.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/axon" variant="primary" size="lg">
                See the Implementation
              </Button>
              <Button href="/methodology" variant="glass" size="lg">
                Explore Humics
              </Button>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Citation */}
      <section className="py-24 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <SectionHeading
              label="Citation"
              title="How to Cite"
              align="center"
            />
            <GlassCard className="font-mono text-sm text-foreground-muted">
              <p className="mb-4">
                Miller, Eric Shadrach. (2021). <em>Toward the Design of Interactive Storytelling 
                Games That Teach Computational Thinking</em> [Doctoral dissertation, University 
                of Texas at Dallas]. UTD Electronic Theses and Dissertations.
              </p>
              <p className="text-teal break-all">
                https://hdl.handle.net/10735.1/9332
              </p>
            </GlassCard>
          </div>
        </div>
      </section>
    </div>
  );
}
