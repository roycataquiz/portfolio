"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, ChevronDown, TrendingUp, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { experiences } from "@/lib/data";
import { formatDateRange } from "@/lib/utils";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";

export default function ExperienceSection() {
  const [expandedId, setExpandedId] = useState<string | null>("1");

  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <SectionHeader
          label="Experience"
          title="Where I've"
          titleHighlight="worked"
          description="My professional journey building data infrastructure across startups, consulting, and growth-stage companies."
          className="mb-16"
        />

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[19px] top-0 bottom-0 w-[1px] bg-gradient-to-b from-primary/50 via-border to-transparent hidden md:block" />

          <div className="space-y-4">
            {experiences.map((exp, i) => {
              const isExpanded = expandedId === exp.id;
              return (
                <Reveal key={exp.id} delay={i * 0.1}>
                  <div className="md:pl-12 relative">
                    {/* Timeline dot */}
                    <div
                      className={cn(
                        "absolute left-0 top-6 w-10 h-10 rounded-full border-2 items-center justify-center hidden md:flex transition-all duration-300",
                        exp.current
                          ? "border-primary bg-primary/10"
                          : "border-border bg-background"
                      )}
                    >
                      {exp.current && (
                        <span className="w-2.5 h-2.5 rounded-full bg-primary" />
                      )}
                    </div>

                    {/* Card */}
                    <div
                      className={cn(
                        "rounded-2xl border bg-card/40 overflow-hidden transition-all duration-300",
                        isExpanded
                          ? "border-primary/30 shadow-glow-sm"
                          : "border-border/50 hover:border-border"
                      )}
                    >
                      {/* Header — always visible */}
                      <button
                        className="w-full text-left p-6 flex items-start gap-4"
                        onClick={() =>
                          setExpandedId(isExpanded ? null : exp.id)
                        }
                        aria-expanded={isExpanded}
                      >
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-center gap-2 mb-1">
                            <h3 className="font-display font-bold text-base">
                              {exp.role}
                            </h3>
                            {exp.current && (
                              <span className="px-1.5 py-0.5 rounded text-[9px] font-mono font-semibold bg-primary/20 text-primary border border-primary/30">
                                Current
                              </span>
                            )}
                          </div>
                          <p className="font-semibold text-sm text-muted-foreground mb-2">
                            {exp.company}
                          </p>
                          <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                            <span className="font-mono">
                              {formatDateRange(exp.startDate, exp.endDate)}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin className="w-3 h-3" />
                              {exp.location}
                              {exp.remote && " (Remote)"}
                            </span>
                          </div>
                        </div>
                        <ChevronDown
                          className={cn(
                            "w-4 h-4 text-muted-foreground shrink-0 transition-transform duration-300 mt-1",
                            isExpanded && "rotate-180"
                          )}
                        />
                      </button>

                      {/* Expanded Content */}
                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 pb-6 border-t border-border/50 pt-5 space-y-5">
                              <p className="text-sm text-muted-foreground leading-relaxed">
                                {exp.description}
                              </p>

                              <div className="grid md:grid-cols-2 gap-5">
                                {/* Responsibilities */}
                                <div>
                                  <h4 className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-3">
                                    Responsibilities
                                  </h4>
                                  <ul className="space-y-2">
                                    {exp.responsibilities.map((r, i) => (
                                      <li
                                        key={i}
                                        className="flex items-start gap-2 text-sm text-muted-foreground"
                                      >
                                        <span className="mt-1.5 w-1 h-1 rounded-full bg-primary shrink-0" />
                                        {r}
                                      </li>
                                    ))}
                                  </ul>
                                </div>

                                {/* Achievements */}
                                <div>
                                  <h4 className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-3">
                                    Key Achievements
                                  </h4>
                                  <ul className="space-y-2">
                                    {exp.achievements.map((a, i) => (
                                      <li
                                        key={i}
                                        className="flex items-start gap-2 text-sm text-muted-foreground"
                                      >
                                        <TrendingUp className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                                        {a}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>

                              {/* Tech Stack */}
                              <div>
                                <h4 className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2">
                                  Stack
                                </h4>
                                <div className="flex flex-wrap gap-1.5">
                                  {exp.techStack.map((tech) => (
                                    <span key={tech} className="tag">{tech}</span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
