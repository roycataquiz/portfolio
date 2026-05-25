"use client";

import React from "react";
import { Github, GitCommit, Star, GitFork, TrendingUp } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";
import { siteConfig } from "@/lib/data";

const githubStats = [
  { label: "Contributions (2024)", value: "1,247", icon: <GitCommit className="w-4 h-4" /> },
  { label: "Public Repositories", value: "42", icon: <Github className="w-4 h-4" /> },
  { label: "Stars Earned", value: "312", icon: <Star className="w-4 h-4" /> },
  { label: "Projects Forked", value: "28", icon: <GitFork className="w-4 h-4" /> },
];

const pinnedRepos = [
  {
    name: "realtime-platform",
    description: "Production Kafka + Flink + Delta Lake streaming platform with auto-scaling and observability",
    stars: 142,
    forks: 38,
    language: "Python",
    languageColor: "#3572A5",
    topics: ["kafka", "flink", "delta-lake", "data-engineering"],
  },
  {
    name: "dbt-analytics-framework",
    description: "Opinionated dbt project structure with built-in data contracts, CI/CD templates, and Snowflake optimization",
    stars: 98,
    forks: 31,
    language: "SQL",
    languageColor: "#e38c00",
    topics: ["dbt", "snowflake", "analytics-engineering", "data-quality"],
  },
  {
    name: "airflow-data-platform",
    description: "Production Airflow setup with dynamic DAG generation, SLA monitoring, and Slack alerting",
    stars: 72,
    forks: 19,
    language: "Python",
    languageColor: "#3572A5",
    topics: ["airflow", "python", "dataops", "orchestration"],
  },
];

// Simple GitHub-style contribution graph (static visualization)
function ContributionGraph() {
  const weeks = 52;
  const days = 7;

  // Generate deterministic contribution data
  const data = Array.from({ length: weeks }, (_, w) =>
    Array.from({ length: days }, (_, d) => {
      const seed = (w * 7 + d + 17) * 13 + w * 3;
      const val = Math.abs(Math.sin(seed)) * 4;
      if (val < 0.5) return 0;
      if (val < 1.5) return 1;
      if (val < 2.5) return 2;
      if (val < 3.5) return 3;
      return 4;
    })
  );

  const levels = [
    "bg-muted/30",
    "bg-primary/20",
    "bg-primary/40",
    "bg-primary/65",
    "bg-primary",
  ];

  return (
    <div className="overflow-x-auto">
      <div className="flex gap-[3px] min-w-max">
        {data.map((week, wi) => (
          <div key={wi} className="flex flex-col gap-[3px]">
            {week.map((level, di) => (
              <div
                key={di}
                className={`w-[10px] h-[10px] rounded-sm transition-opacity hover:opacity-70 ${levels[level]}`}
                title={`${level} contributions`}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function GithubSection() {
  const githubUrl = `https://github.com/${siteConfig.name.toLowerCase().replace(" ", "")}`;

  return (
    <section id="github" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/10 via-transparent to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader
          label="Open Source"
          title="GitHub"
          titleHighlight="Activity"
          description="Consistent contributor to open-source data tooling. All major projects are public and production-ready."
          className="mb-14"
        />

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {githubStats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.07}>
              <div className="p-5 rounded-2xl border border-border/50 bg-card/40 flex flex-col gap-3">
                <div className="flex items-center gap-2 text-muted-foreground">
                  {stat.icon}
                  <span className="text-xs font-mono">{stat.label}</span>
                </div>
                <p className="font-display text-2xl font-bold text-gradient">
                  {stat.value}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Contribution Graph */}
        <Reveal>
          <div className="p-6 rounded-2xl border border-border/50 bg-card/40 mb-8">
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-semibold text-sm flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-primary" />
                Contribution Activity — 2024
              </h3>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span>Less</span>
                {["bg-muted/30", "bg-primary/20", "bg-primary/40", "bg-primary/65", "bg-primary"].map((c, i) => (
                  <div key={i} className={`w-3 h-3 rounded-sm ${c}`} />
                ))}
                <span>More</span>
              </div>
            </div>
            <ContributionGraph />
          </div>
        </Reveal>

        {/* Pinned Repos */}
        <div className="grid md:grid-cols-3 gap-4">
          {pinnedRepos.map((repo, i) => (
            <Reveal key={repo.name} delay={i * 0.08}>
              <a
                href={`${githubUrl}/${repo.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col p-5 rounded-2xl border border-border/50 bg-card/40
                           hover:border-primary/30 hover:bg-card/70 transition-all duration-300 h-full"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Github className="w-4 h-4 text-muted-foreground" />
                    <span className="font-mono text-sm font-semibold text-primary group-hover:underline">
                      {repo.name}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-muted-foreground leading-relaxed flex-1 mb-4">
                  {repo.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-3">
                  {repo.topics.map((t) => (
                    <span key={t} className="tag text-[10px]">{t}</span>
                  ))}
                </div>

                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ background: repo.languageColor }}
                    />
                    {repo.language}
                  </span>
                  <span className="flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    {repo.stars}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork className="w-3 h-3" />
                    {repo.forks}
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
