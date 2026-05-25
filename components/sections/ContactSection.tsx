"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Github, Linkedin, Twitter, Mail, MapPin, Clock } from "lucide-react";
import { siteConfig, socialLinks } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

const socialIcons: Record<string, React.ReactNode> = {
  GitHub: <Github className="w-5 h-5" />,
  LinkedIn: <Linkedin className="w-5 h-5" />,
  Twitter: <Twitter className="w-5 h-5" />,
};

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production: integrate with Formspree, Resend, or similar
    const mailto = `mailto:${siteConfig.email}?subject=${encodeURIComponent(formState.subject)}&body=${encodeURIComponent(`Name: ${formState.name}\nEmail: ${formState.email}\n\n${formState.message}`)}`;
    window.location.href = mailto;
    setSubmitted(true);
  };

  const inputCls = (name: string) =>
    cn(
      "w-full bg-muted/50 border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60",
      "outline-none transition-all duration-200 font-body",
      focused === name
        ? "border-primary/60 bg-card shadow-glow-sm"
        : "border-border/60 hover:border-border"
    );

  return (
    <section id="contact" className="py-24 md:py-32 relative">
      {/* Bottom radial */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/3 via-transparent to-transparent pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 md:px-12">
        <SectionHeader
          label="Contact"
          title="Let's"
          titleHighlight="connect"
          description="Open to senior data engineering roles, staff-level opportunities, and high-impact consulting engagements. Response within 24 hours."
          className="mb-14"
        />

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Left — Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Availability */}
            <Reveal>
              <div className="p-5 rounded-2xl border border-emerald-500/20 bg-emerald-500/5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                  </span>
                  <span className="text-sm font-semibold text-emerald-400">
                    Available for Opportunities
                  </span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Actively interviewing for senior data engineering and analytics engineering roles.
                </p>
              </div>
            </Reveal>

            {/* Contact Details */}
            <Reveal delay={0.1}>
              <div className="space-y-4">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-muted group-hover:bg-primary/10 group-hover:text-primary transition-all">
                    <Mail className="w-4 h-4" />
                  </div>
                  {siteConfig.email}
                </a>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <div className="p-2 rounded-lg bg-muted">
                    <MapPin className="w-4 h-4" />
                  </div>
                  {siteConfig.location}
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <div className="p-2 rounded-lg bg-muted">
                    <Clock className="w-4 h-4" />
                  </div>
                  PST (UTC-8) — responds within 24h
                </div>
              </div>
            </Reveal>

            {/* Social Links */}
            <Reveal delay={0.2}>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-3">
                  Find me online
                </p>
                <div className="flex gap-2">
                  {socialLinks.map((link) => (
                    <a
                      key={link.platform}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.label}
                      className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl border border-border/50 bg-card/40 text-muted-foreground hover:text-foreground hover:border-border hover:bg-card transition-all text-sm"
                    >
                      {socialIcons[link.platform]}
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right — Form */}
          <Reveal className="lg:col-span-3" delay={0.1}>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-muted-foreground mb-1.5">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    onFocus={() => setFocused("name")}
                    onBlur={() => setFocused(null)}
                    className={inputCls("name")}
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-muted-foreground mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="you@company.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused(null)}
                    className={inputCls("email")}
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-1.5">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Senior Data Engineer role, consulting inquiry..."
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  onFocus={() => setFocused("subject")}
                  onBlur={() => setFocused(null)}
                  className={inputCls("subject")}
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-1.5">
                  Message
                </label>
                <textarea
                  placeholder="Tell me about the role or project..."
                  rows={5}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused(null)}
                  className={cn(inputCls("message"), "resize-none")}
                  required
                />
              </div>
              <button
                type="submit"
                className="btn-primary w-full sm:w-auto justify-center text-sm py-3 px-6"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
