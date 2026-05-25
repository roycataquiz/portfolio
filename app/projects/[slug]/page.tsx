import { notFound } from "next/navigation";
import { projects } from "@/lib/data";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ArrowLeft, Github, ExternalLink, TrendingUp } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/data";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return projects
    .filter((p) => p.hasCaseStudy)
    .map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.shortDescription,
    openGraph: {
      title: project.title,
      description: project.shortDescription,
      url: `${siteConfig.siteUrl}/projects/${project.slug}`,
    },
  };
}

export default function ProjectCaseStudy({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-20">
        <article className="max-w-3xl mx-auto px-6 md:px-12">
          {/* Back */}
          <Link
            href="/#projects"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Projects
          </Link>

          {/* Header */}
          <header className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-primary/10 text-primary border border-primary/20"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-3">
              {project.title}
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              {project.shortDescription}
            </p>
            <div className="flex items-center gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-sm"
                >
                  <Github className="w-4 h-4" />
                  View on GitHub
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-sm"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
              )}
            </div>
          </header>

          {/* Metrics */}
          {project.metrics && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-12 p-6 rounded-2xl border border-border/50 bg-card/40">
              {project.metrics.map((m) => (
                <div key={m.label} className="text-center">
                  <p className="font-display text-2xl font-bold text-gradient mb-0.5">{m.value}</p>
                  <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">{m.label}</p>
                  {m.description && (
                    <p className="text-[10px] text-muted-foreground/60 mt-0.5">{m.description}</p>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Content sections */}
          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-10">
            <section>
              <h2 className="font-display text-xl font-bold mb-3">The Problem</h2>
              <p className="text-muted-foreground leading-relaxed">{project.problem}</p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold mb-3">The Solution</h2>
              <p className="text-muted-foreground leading-relaxed">{project.solution}</p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold mb-3">Architecture</h2>
              <div className="p-4 rounded-xl bg-muted/50 border border-border/40 font-mono text-sm text-muted-foreground leading-loose overflow-x-auto">
                {project.architecture}
              </div>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold mb-4">Impact & Results</h2>
              <ul className="space-y-3">
                {project.impact.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <TrendingUp className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold mb-4">Tech Stack</h2>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span key={tech} className="tag">{tech}</span>
                ))}
              </div>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
