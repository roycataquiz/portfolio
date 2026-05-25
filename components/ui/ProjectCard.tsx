"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  ExternalLink,
  ChevronDown,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import type { Project } from "@/lib/types";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export default function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false);

  const statusConfig = {
    live: { label: "Live", color: "text-emerald-500" },
    wip: { label: "In Progress", color: "text-amber-500" },
    archived: { label: "Archived", color: "text-muted-foreground" },
  };

  return (
    <motion.article
      layout
      className={cn(
        "group relative rounded-2xl border bg-card/40 transition-all duration-300",
        "hover:border-primary/30 hover:shadow-card-hover hover:bg-card/70",
        "border-border/50 overflow-hidden",
        featured && "lg:col-span-1"
      )}
    >
      {/* Top accent bar */}
      <div className="h-[2px] w-full bg-gradient-to-r from-primary/60 via-amber-400/40 to-transparent" />

      <div className="p-6 md:p-7">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2">
              <span className={cn("font-mono text-[10px] font-medium", statusConfig[project.status].color)}>
                ● {statusConfig[project.status].label}
              </span>
              <span className="text-muted-foreground/30">·</span>
              <span className="font-mono text-[10px] text-muted-foreground">{project.year}</span>
            </div>
            <h3 className="font-display font-bold text-lg leading-tight mb-1 group-hover:text-primary transition-colors duration-200">
              {project.title}
            </h3>
            <p className="text-xs text-muted-foreground font-medium">{project.role}</p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-1.5 shrink-0">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View source code"
                className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-all"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View live demo"
                className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-all"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed mb-5">
          {project.shortDescription}
        </p>

        {/* Metrics */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-5">
            {project.metrics.map((metric) => (
              <div
                key={metric.label}
                className="p-2.5 rounded-xl bg-muted/50 border border-border/40 text-center"
              >
                <p className="font-display font-bold text-base text-gradient leading-none mb-1">
                  {metric.value}
                </p>
                <p className="font-mono text-[9px] text-muted-foreground uppercase tracking-wider">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.techStack.slice(0, 6).map((tech) => (
            <span key={tech} className="tag">
              {tech}
            </span>
          ))}
          {project.techStack.length > 6 && (
            <span className="tag text-muted-foreground/60">
              +{project.techStack.length - 6}
            </span>
          )}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium
                         bg-primary/10 text-primary border border-primary/20"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Expand Toggle */}
        <button
          onClick={() => setExpanded((v) => !v)}
          className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors group/btn"
          aria-expanded={expanded}
        >
          <span>{expanded ? "Hide details" : "View architecture"}</span>
          <ChevronDown
            className={cn(
              "w-3.5 h-3.5 transition-transform duration-300",
              expanded && "rotate-180"
            )}
          />
        </button>
      </div>

      {/* Expanded Details */}
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 md:px-7 pb-7 border-t border-border/50 pt-5 space-y-5">
              {/* Problem */}
              <div>
                <h4 className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2">
                  Problem
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.problem}
                </p>
              </div>

              {/* Solution */}
              <div>
                <h4 className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2">
                  Solution
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.solution}
                </p>
              </div>

              {/* Architecture */}
              <div>
                <h4 className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2">
                  Architecture
                </h4>
                <div className="p-3 rounded-lg bg-muted/50 border border-border/40 font-mono text-xs text-muted-foreground leading-relaxed overflow-x-auto">
                  {project.architecture}
                </div>
              </div>

              {/* Impact */}
              <div>
                <h4 className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2">
                  Impact
                </h4>
                <ul className="space-y-1.5">
                  {project.impact.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <TrendingUp className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {project.hasCaseStudy && (
                <a
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:gap-2.5 transition-all"
                >
                  Read full case study
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}
