"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Layers, Zap, TrendingUp } from "lucide-react";
import Reveal, { StaggerReveal } from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";

const philosophyPoints = [
  {
    icon: <Layers className="w-5 h-5 text-primary" />,
    title: "Systems Thinking",
    description:
      "I don't just build pipelines — I design interconnected data systems with clear boundaries, failure modes, and scalability in mind from day one.",
  },
  {
    icon: <Zap className="w-5 h-5 text-primary" />,
    title: "Production First",
    description:
      "Every architectural decision I make is tested against: 'Will this hold at 10x scale?' Observability, SLAs, and data contracts are requirements, not afterthoughts.",
  },
  {
    icon: <TrendingUp className="w-5 h-5 text-primary" />,
    title: "Business Impact",
    description:
      "Data infrastructure only matters if it moves the business. I track the downstream impact of every system I ship — fraud prevented, decisions accelerated, costs reduced.",
  },
  {
    icon: <CheckCircle2 className="w-5 h-5 text-primary" />,
    title: "Clean Engineering",
    description:
      "I write code as if the next person reading it is an expert who knows nothing about my assumptions. Documentation, testing, and code quality are non-negotiable.",
  },
];

const stats = [
  { value: "6+", label: "Years Engineering" },
  { value: "50M+", label: "Events/Day Processed" },
  { value: "15+", label: "Production Systems" },
  { value: "$4.2M", label: "Business Impact" },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left — Text */}
          <div>
            <SectionHeader
              label="About"
              title="Engineering data"
              titleHighlight="at scale"
              align="left"
              className="mb-8"
            />

            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <Reveal>
                <p>
                  I&apos;m a Senior Data Engineer with 6+ years of experience designing and
                  building data infrastructure that powers real-time decisions. My background
                  spans streaming systems, analytics engineering, cloud platforms, and
                  ML infrastructure.
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <p>
                  I started as a data analyst, which gave me an unusual perspective: I
                  understand what business users actually need from data, not just what&apos;s
                  technically elegant. This shapes how I architect systems — built for
                  reliability, discoverability, and the people downstream who depend on them.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <p>
                  Currently at Meridian Analytics, leading the Platform team&apos;s data
                  infrastructure. Previously shipped cloud migrations, dbt transformations,
                  and streaming pipelines at B2B SaaS companies and consulting engagements.
                </p>
              </Reveal>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mt-10">
              {stats.map((stat, i) => (
                <Reveal key={stat.label} delay={i * 0.08}>
                  <div className="p-4 rounded-xl border border-border/50 bg-card/40">
                    <p className="font-display text-2xl md:text-3xl font-bold text-gradient">
                      {stat.value}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1 font-mono">
                      {stat.label}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Right — Philosophy */}
          <div className="space-y-4">
            <Reveal>
              <h3 className="font-display text-xl font-semibold mb-6">
                Engineering Philosophy
              </h3>
            </Reveal>
            {philosophyPoints.map((point, i) => (
              <Reveal key={point.title} delay={i * 0.1}>
                <div className="group flex gap-4 p-5 rounded-2xl border border-border/50 bg-card/30
                                hover:border-primary/30 hover:bg-card/60 transition-all duration-300">
                  <div className="mt-0.5 p-2 rounded-lg bg-primary/10 h-fit shrink-0 group-hover:bg-primary/15 transition-colors">
                    {point.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">{point.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
