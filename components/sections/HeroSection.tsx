"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Download, ArrowDown, Sparkles } from "lucide-react";
import { siteConfig, socialLinks } from "@/lib/data";

const socialIcons: Record<string, React.ReactNode> = {
  GitHub: <Github className="w-4 h-4" />,
  LinkedIn: <Linkedin className="w-4 h-4" />,
};

function AnimatedGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Grid */}
      <div className="absolute inset-0 grid-bg opacity-100" />
      {/* Radial fade from center */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-background" />
      {/* Ember glow orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-amber-500/4 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-orange-500/4 rounded-full blur-3xl" />
    </div>
  );
}

function TechBadge({ children, delay }: { children: string; delay: number }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.4, ease: "backOut" }}
      className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-mono
                 bg-muted/70 text-muted-foreground border border-border/50
                 hover:border-primary/40 hover:text-primary transition-colors duration-200"
    >
      {children}
    </motion.span>
  );
}

const heroBadges = [
  "Apache Kafka",
  "dbt Core",
  "Snowflake",
  "Apache Spark",
  "Airflow",
  "Databricks",
  "Terraform",
  "Python",
];

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      <AnimatedGrid />

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 text-center">
        {/* Available badge */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border/60
                     bg-card/60 backdrop-blur-sm text-xs font-medium mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="text-muted-foreground">
            Open to new opportunities ·{" "}
          </span>
          <span className="text-foreground font-semibold">
            {siteConfig.location}
          </span>
        </motion.div>

        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6"
        >
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-3 font-medium">
            Senior Data Engineer
          </p>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight">
            <span className="block">{siteConfig.name.split(" ")[0]}</span>
            <span className="block text-gradient">{siteConfig.name.split(" ")[1]}</span>
          </h1>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 font-body font-light"
        >
          Building production-grade{" "}
          <span className="text-foreground font-medium">data pipelines</span>,{" "}
          <span className="text-foreground font-medium">
            streaming architectures
          </span>
          , and{" "}
          <span className="text-foreground font-medium">
            analytics platforms
          </span>{" "}
          that scale to millions of events per day.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-14"
        >
          <button
            onClick={() => {
              const el = document.getElementById("projects");
              if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className="btn-primary text-sm px-6 py-3"
          >
            <Sparkles className="w-4 h-4" />
            View Projects
          </button>

          <a
            href={siteConfig.resumeUrl}
            download
            className="btn-secondary text-sm px-6 py-3"
          >
            <Download className="w-4 h-4" />
            Download Resume
          </a>

          {socialLinks
            .filter((l) => l.platform !== "Twitter")
            .map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="btn-secondary text-sm px-4 py-3"
              >
                {socialIcons[link.platform]}
                {link.platform}
              </a>
            ))}
        </motion.div>

        {/* Tech badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-2 max-w-2xl mx-auto"
        >
          {heroBadges.map((badge, i) => (
            <TechBadge key={badge} delay={0.7 + i * 0.05}>
              {badge}
            </TechBadge>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground/50">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4 text-muted-foreground/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
