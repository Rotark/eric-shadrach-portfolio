"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface DiagramNode {
  id: string;
  label: string;
  description?: string;
  type: "input" | "process" | "output" | "state";
}

interface DiagramConnection {
  from: string;
  to: string;
  label?: string;
}

const nodes: DiagramNode[] = [
  { id: "input", label: "User Input", description: "Officer speech & actions", type: "input" },
  { id: "perception", label: "Perception", description: "Speech-to-text, intent detection", type: "process" },
  { id: "interpretation", label: "Interpretation", description: "Context analysis, emotional reading", type: "process" },
  { id: "state", label: "Agent State", description: "Trust, emotion, hidden facts", type: "state" },
  { id: "goals", label: "Goal Selection", description: "Dynamic objective prioritization", type: "process" },
  { id: "action", label: "Action Generator", description: "LLM + Rules Engine", type: "process" },
  { id: "output", label: "Agent Response", description: "Speech, behavior, emotion", type: "output" },
];

export function ArchitectureDiagram() {
  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[700px] p-8">
        {/* Main Flow */}
        <div className="flex items-center justify-between gap-4">
          {/* Input */}
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-32 h-24 rounded-xl bg-teal/10 border-2 border-teal/30 flex flex-col items-center justify-center text-center p-2">
              <svg className="w-6 h-6 text-teal mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
              </svg>
              <span className="text-xs font-heading font-semibold text-teal">User Input</span>
            </div>
            <span className="text-xs text-foreground-muted mt-2">Speech & Actions</span>
          </motion.div>

          {/* Arrow */}
          <svg className="w-8 h-8 text-teal/40 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>

          {/* Processing Block */}
          <motion.div
            className="flex-1 max-w-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="glass rounded-2xl p-6 relative">
              <h4 className="text-sm font-heading font-semibold text-foreground mb-4 text-center">
                Neuro-Symbolic Processing
              </h4>
              
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white/50 rounded-lg p-3 text-center">
                  <span className="text-xs font-medium text-teal block">Perception</span>
                  <span className="text-[10px] text-foreground-muted">Intent Detection</span>
                </div>
                <div className="bg-white/50 rounded-lg p-3 text-center">
                  <span className="text-xs font-medium text-teal block">Interpretation</span>
                  <span className="text-[10px] text-foreground-muted">Context Analysis</span>
                </div>
                <div className="bg-white/50 rounded-lg p-3 text-center">
                  <span className="text-xs font-medium text-teal block">Goal Selection</span>
                  <span className="text-[10px] text-foreground-muted">Priority Engine</span>
                </div>
                <div className="bg-white/50 rounded-lg p-3 text-center">
                  <span className="text-xs font-medium text-teal block">Action Gen</span>
                  <span className="text-[10px] text-foreground-muted">LLM + Rules</span>
                </div>
              </div>

              {/* State Box - Floating */}
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-40">
                <div className="bg-gold/10 border-2 border-gold/30 rounded-xl p-3 text-center">
                  <span className="text-xs font-heading font-semibold text-gold block">Agent State</span>
                  <span className="text-[10px] text-foreground-muted">Trust • Emotion • Facts</span>
                </div>
                {/* Connection line */}
                <div className="absolute -top-3 left-1/2 w-0.5 h-3 bg-gold/30" />
              </div>
            </div>
          </motion.div>

          {/* Arrow */}
          <svg className="w-8 h-8 text-teal/40 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>

          {/* Output */}
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="w-32 h-24 rounded-xl bg-teal border-2 border-teal flex flex-col items-center justify-center text-center p-2">
              <svg className="w-6 h-6 text-white mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span className="text-xs font-heading font-semibold text-white">Response</span>
            </div>
            <span className="text-xs text-foreground-muted mt-2">Speech & Behavior</span>
          </motion.div>
        </div>

        {/* Feedback Loop Arrow */}
        <motion.div
          className="flex justify-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="flex items-center gap-2 text-foreground-muted">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            <span className="text-xs font-medium">Continuous feedback loop updates agent state</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
