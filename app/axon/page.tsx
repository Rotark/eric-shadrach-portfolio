import { GlassCard, SectionHeading, Button } from "@/components/ui";
import { ArchitectureDiagram } from "@/components/ArchitectureDiagram";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Axon Verbal Skills Training | Eric Shadrach Miller",
  description: "Transforming law enforcement de-escalation training with Agentic AI. A case study in pattern-based human simulators.",
};

const challenges = [
  {
    title: "Rigid Scripts",
    description: "Decision trees with fixed branches. Say the wrong thing and the whole conversation jumps tracks.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
  },
  {
    title: "No Emotional Depth",
    description: "The NPCs couldn't get angry, scared, or surprised. Real people do all three in the same sentence.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Limited Replayability",
    description: "Officers memorized the right answers. That's passing a test, not learning a skill.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
];

const solutions = [
  {
    title: "Agentic LLM Action Generator",
    description: "Each session is different. The AI generates responses on the fly based on what the officer actually says.",
    highlight: "Pattern-Based",
  },
  {
    title: "Fuzzy Pattern Matching",
    description: "Borrowed from Valve's approach: matching what the officer _means_, not just what they say word for word.",
    highlight: "Valve-Inspired",
  },
  {
    title: "Humics Engine",
    description: "Bornet's Humics framework, built for real. Trust meters, emotional state tracking, and hidden facts that make agents feel like real people.",
    highlight: "Applied Humics",
  },
  {
    title: "Neuro-Symbolic Architecture",
    description: "LLMs for creativity, rule systems for reliability. You get agents that surprise you but don't go off the rails.",
    highlight: "Hybrid AI",
  },
];

const outcomes = [
  { metric: "Unscripted", label: "No two sessions play out the same way" },
  { metric: "Adaptive", label: "Trust, frustration, and fear all shift dynamically" },
  { metric: "Scalable", label: "Real officers, real training, real results" },
];

export default function AxonPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block px-4 py-2 mb-6 text-sm font-medium text-teal bg-teal/10 rounded-full font-heading">
              Featured Case Study
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              VR De-Escalation Training,{" "}
              <br className="hidden md:block" />
              Powered by{" "}
              <span className="text-gradient-teal">Agentic AI</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground-muted mb-8 leading-relaxed">
              In 2021, my dissertation argued that storytelling games needed to move beyond sequential logic.
              At Axon, I became the catalyst and lead inventor of a patent-pending system (WO2025072878A1) for dynamic agent dialogue. AI agents that think, not just chat.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                href="https://www.axon.com/blog/how-axon-is-transforming-verbal-skills-training"
                external
                variant="primary"
                icon={
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                }
              >
                Read on Axon Blog
              </Button>
              <Button href="/dissertation" variant="secondary">
                See the Research
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading
            label="The Problem"
            title="Why the Old Way Didn't Work"
            subtitle="De-escalation is a conversation, not a choose-your-own-adventure. The training had to catch up."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {challenges.map((challenge, index) => (
              <GlassCard key={challenge.title} className="text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-red-50 text-red-500 flex items-center justify-center">
                  {challenge.icon}
                </div>
                <h3 className="text-lg font-heading font-semibold mb-2">
                  {challenge.title}
                </h3>
                <p className="text-foreground-muted text-sm">
                  {challenge.description}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* The Insight */}
      <section className="py-24 bg-background bg-dots-pattern">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <GlassCard className="text-center py-12">
              <span className="inline-block px-3 py-1 text-xs font-medium text-gold bg-gold/10 rounded-full mb-4">
                2021 Dissertation
              </span>
              <blockquote className="text-xl md:text-2xl font-heading font-medium text-foreground mb-6 italic">
                &ldquo;The most likely software architecture for new interactive storytelling games are neural networks
                and these are not explainable in the same manner that traditional sequential logic-based programs.&rdquo;
              </blockquote>
              <p className="text-foreground-muted">
                From my dissertation, describing exactly the shift we later built at Axon
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Architecture Diagram */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading
            label="Under the Hood"
            title="How the System Works"
            subtitle="A neuro-symbolic approach: LLMs handle the creative side, rule systems keep things grounded."
            align="center"
          />

          <GlassCard className="max-w-4xl mx-auto">
            <ArchitectureDiagram />
          </GlassCard>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            label="The Solution"
            title="Pattern-Based Human Simulators"
            subtitle="Moving from decision trees to dynamic, intent-based agents that adapt in real-time."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution) => (
              <GlassCard key={solution.title} className="group">
                <span className="inline-block px-3 py-1 text-xs font-medium text-teal bg-teal/10 rounded-full mb-4">
                  {solution.highlight}
                </span>
                <h3 className="text-xl font-heading font-semibold mb-3 group-hover:text-teal transition-colors">
                  {solution.title}
                </h3>
                <p className="text-foreground-muted leading-relaxed">
                  {solution.description}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* The Outcome */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading
            label="The Result"
            title="Every Conversation Is Different"
            subtitle="Officers can't memorize their way through it. They have to actually listen, read the room, and adapt."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {outcomes.map((outcome) => (
              <GlassCard key={outcome.metric} className="text-center py-8">
                <div className="text-3xl font-heading font-bold text-teal mb-2">
                  {outcome.metric}
                </div>
                <p className="text-foreground-muted text-sm">
                  {outcome.label}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <GlassCard className="max-w-3xl mx-auto text-center py-12">
            <SectionHeading
              label="Go Deeper"
              title="Where This Came From"
              subtitle="The Axon work didn't come out of nowhere. It's rooted in four years of PhD research."
            />
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/dissertation" variant="primary" size="lg">
                Read the Dissertation
              </Button>
              <Button
                href="https://patents.google.com/patent/WO2025072878A1/en"
                external
                variant="glass"
                size="lg"
              >
                View the Patent
              </Button>
              <Button href="/methodology" variant="glass" size="lg">
                Explore Humics
              </Button>
            </div>
          </GlassCard>
        </div>
      </section>
    </div>
  );
}
