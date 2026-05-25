"use client";

import React from "react";
import { Award, ExternalLink, Trophy, BookOpen, Star } from "lucide-react";
import { certifications, achievements } from "@/lib/data";
import { formatDate } from "@/lib/utils";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";
import type { Achievement } from "@/lib/types";

const achievementIcons: Record<Achievement["type"], React.ReactNode> = {
  scholarship: <BookOpen className="w-4 h-4" />,
  award: <Trophy className="w-4 h-4" />,
  recognition: <Star className="w-4 h-4" />,
  publication: <ExternalLink className="w-4 h-4" />,
};

const achievementColors: Record<Achievement["type"], string> = {
  scholarship: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  award: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  recognition: "bg-primary/10 text-primary border-primary/20",
  publication: "bg-violet-500/10 text-violet-400 border-violet-500/20",
};

// Issuer short names for display
const issuerAbbr: Record<string, string> = {
  "Amazon Web Services": "AWS",
  "Databricks": "Databricks",
  "dbt Labs": "dbt Labs",
  "Snowflake": "Snowflake",
  "Google Cloud": "GCP",
};

export default function AchievementsSection() {
  return (
    <section id="achievements" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader
          label="Credentials"
          title="Certifications &"
          titleHighlight="achievements"
          description="Verified technical credentials and industry recognition across cloud platforms and data engineering."
          className="mb-16"
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Certifications */}
          <div>
            <Reveal>
              <h3 className="font-display text-xl font-semibold mb-6 flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                Certifications
              </h3>
            </Reveal>
            <div className="space-y-3">
              {certifications.map((cert, i) => (
                <Reveal key={cert.id} delay={i * 0.08}>
                  <div className="group flex items-center gap-4 p-4 rounded-xl border border-border/50 bg-card/40 hover:border-primary/30 hover:bg-card/70 transition-all duration-200">
                    {/* Badge */}
                    <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                      <span className="font-mono text-[9px] font-bold text-primary text-center leading-tight">
                        {(issuerAbbr[cert.issuer] || cert.issuer.slice(0, 3)).toUpperCase()}
                      </span>
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-sm leading-tight mb-0.5 truncate">
                        {cert.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {cert.issuer} · {formatDate(cert.date)}
                      </p>
                    </div>

                    {/* Verify link */}
                    {cert.credentialUrl && (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Verify ${cert.name}`}
                        className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-all opacity-0 group-hover:opacity-100"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <Reveal>
              <h3 className="font-display text-xl font-semibold mb-6 flex items-center gap-2">
                <Trophy className="w-5 h-5 text-primary" />
                Recognition & Achievements
              </h3>
            </Reveal>
            <div className="space-y-3">
              {achievements.map((achievement, i) => (
                <Reveal key={achievement.id} delay={i * 0.08}>
                  <div className="p-5 rounded-xl border border-border/50 bg-card/40 hover:border-border hover:bg-card/60 transition-all duration-200">
                    <div className="flex items-start gap-3">
                      <div className={cn(
                        "p-2 rounded-lg border shrink-0",
                        achievementColors[achievement.type]
                      )}>
                        {achievementIcons[achievement.type]}
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold text-sm">{achievement.title}</h4>
                          <span className="font-mono text-[10px] text-muted-foreground">
                            {achievement.year}
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground mb-2">
                          {achievement.organization}
                        </p>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
