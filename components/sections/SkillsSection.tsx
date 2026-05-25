"use client";

import React, { useState } from "react";
import {
  Database,
  Cloud,
  Server,
  Code2,
  BarChart3,
  GitBranch,
  Brain,
  Wrench,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { skillCategories } from "@/lib/data";
import Reveal, { StaggerReveal } from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";

const iconMap: Record<string, React.ReactNode> = {
  Database: <Database className="w-4 h-4" />,
  Cloud: <Cloud className="w-4 h-4" />,
  Server: <Server className="w-4 h-4" />,
  Code2: <Code2 className="w-4 h-4" />,
  BarChart3: <BarChart3 className="w-4 h-4" />,
  GitBranch: <GitBranch className="w-4 h-4" />,
  Brain: <Brain className="w-4 h-4" />,
  Wrench: <Wrench className="w-4 h-4" />,
};

const levelConfig = {
  expert: { label: "Expert", color: "bg-primary/20 text-primary border-primary/30" },
  proficient: { label: "Proficient", color: "bg-blue-500/10 text-blue-400 border-blue-500/20" },
  familiar: { label: "Familiar", color: "bg-muted text-muted-foreground border-border/50" },
};

export default function SkillsSection() {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  return (
    <section id="skills" className="py-24 md:py-32 relative">
      {/* Subtle bg accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 via-transparent to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader
          label="Technical Skills"
          title="The stack I"
          titleHighlight="work with"
          description="Production-hardened tools and technologies I've used to build systems at scale. Organized by domain."
          className="mb-16"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories.map((category, catIdx) => (
            <Reveal key={category.id} delay={catIdx * 0.07}>
              <div
                className={cn(
                  "relative p-6 rounded-2xl border bg-card/40 transition-all duration-300 cursor-default h-full",
                  hoveredCategory === category.id
                    ? "border-primary/40 bg-card/70 shadow-glow-sm"
                    : "border-border/50 hover:border-border"
                )}
                onMouseEnter={() => setHoveredCategory(category.id)}
                onMouseLeave={() => setHoveredCategory(null)}
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className={cn(
                    "p-2 rounded-lg transition-colors duration-300",
                    hoveredCategory === category.id
                      ? "bg-primary/15 text-primary"
                      : "bg-muted text-muted-foreground"
                  )}>
                    {iconMap[category.icon]}
                  </div>
                  <h3 className="font-semibold text-sm">{category.label}</h3>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => {
                    const level = skill.level
                      ? levelConfig[skill.level]
                      : levelConfig.familiar;
                    return (
                      <span
                        key={skill.name}
                        className={cn(
                          "inline-flex items-center px-2.5 py-1 rounded-md text-xs font-mono font-medium border transition-all duration-200",
                          level.color
                        )}
                      >
                        {skill.name}
                      </span>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Legend */}
        <Reveal delay={0.3}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <span className="text-xs text-muted-foreground font-mono">Proficiency →</span>
            {Object.entries(levelConfig).map(([key, val]) => (
              <span
                key={key}
                className={cn(
                  "inline-flex items-center px-2.5 py-1 rounded-md text-xs font-mono font-medium border",
                  val.color
                )}
              >
                {val.label}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
