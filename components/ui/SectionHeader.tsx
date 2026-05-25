import React from "react";
import { cn } from "@/lib/utils";
import Reveal from "./Reveal";

interface SectionHeaderProps {
  label: string;
  title: string;
  titleHighlight?: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
}

export default function SectionHeader({
  label,
  title,
  titleHighlight,
  description,
  className,
  align = "center",
}: SectionHeaderProps) {
  return (
    <div className={cn(align === "center" ? "text-center" : "text-left", className)}>
      <Reveal>
        <p className="section-label mb-3">{label}</p>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-4">
          {title}
          {titleHighlight && (
            <>
              {" "}
              <span className="text-gradient">{titleHighlight}</span>
            </>
          )}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.2}>
          <p
            className={cn(
              "text-muted-foreground text-lg leading-relaxed",
              align === "center" ? "max-w-2xl mx-auto" : "max-w-2xl"
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
