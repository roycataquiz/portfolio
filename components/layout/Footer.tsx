"use client";

import { Github, Linkedin, Twitter, ArrowUp } from "lucide-react";
import { siteConfig, socialLinks } from "@/lib/data";

const iconMap: Record<string, React.ReactNode> = {
  GitHub: <Github className="w-4 h-4" />,
  LinkedIn: <Linkedin className="w-4 h-4" />,
  Twitter: <Twitter className="w-4 h-4" />,
};

export default function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center sm:items-start gap-1">
          <p className="text-sm font-medium">{siteConfig.name}</p>
          <p className="text-xs text-muted-foreground">
            {siteConfig.title} · {siteConfig.location}
          </p>
        </div>

        <div className="flex items-center gap-3">
          {socialLinks.map((link) => (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-all"
            >
              {iconMap[link.platform]}
            </a>
          ))}

          <div className="w-px h-6 bg-border mx-1" />

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-all"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} · Built with Next.js & Tailwind
        </p>
      </div>
    </footer>
  );
}
