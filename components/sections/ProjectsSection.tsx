"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/lib/data";
import type { ProjectTag } from "@/lib/types";
import ProjectCard from "@/components/ui/ProjectCard";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

const ALL_TAGS: ("All" | ProjectTag)[] = [
  "All",
  "Data Engineering",
  "Analytics",
  "Full Stack",
  "Automation",
  "AI/ML",
  "Cloud",
];

export default function ProjectsSection() {
  const [activeTag, setActiveTag] = useState<"All" | ProjectTag>("All");

  const filtered = useMemo(() => {
    if (activeTag === "All") return projects;
    return projects.filter((p) => p.tags.includes(activeTag as ProjectTag));
  }, [activeTag]);

  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/10 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader
          label="Featured Projects"
          title="Systems I've"
          titleHighlight="shipped"
          description="Production-grade data infrastructure, analytics platforms, and automation systems built and deployed at scale."
          className="mb-12"
        />

        {/* Filter Tabs */}
        <Reveal>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {ALL_TAGS.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={cn(
                  "px-3.5 py-1.5 rounded-lg text-xs font-medium font-mono transition-all duration-200",
                  activeTag === tag
                    ? "bg-primary text-primary-foreground shadow-glow-sm"
                    : "bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80 border border-border/50"
                )}
              >
                {tag}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Project Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTag}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 xl:grid-cols-3 gap-5"
          >
            {filtered.map((project, i) => (
              <Reveal key={project.id} delay={i * 0.07}>
                <ProjectCard project={project} featured={project.featured} />
              </Reveal>
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-muted-foreground">
            <p className="text-sm">No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
}
