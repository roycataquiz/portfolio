// ============================================================
// TYPES — Central data models for the entire portfolio
// ============================================================

export interface Project {
  id: string;
  slug: string;
  title: string;
  role: string;
  shortDescription: string;
  fullDescription: string;
  problem: string;
  solution: string;
  architecture: string;
  impact: string[];
  techStack: string[];
  tags: ProjectTag[];
  status: "live" | "wip" | "archived";
  featured: boolean;
  githubUrl?: string;
  liveUrl?: string;
  hasCaseStudy: boolean;
  metrics?: ProjectMetric[];
  highlights?: string[];
  year: number;
}

export type ProjectTag =
  | "Data Engineering"
  | "Analytics"
  | "Full Stack"
  | "Automation"
  | "AI/ML"
  | "Cloud"
  | "DevOps";

export interface ProjectMetric {
  label: string;
  value: string;
  description?: string;
}

export interface Skill {
  name: string;
  level?: "expert" | "proficient" | "familiar";
}

export interface SkillCategory {
  id: string;
  label: string;
  icon: string;
  skills: Skill[];
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  type: "full-time" | "contract" | "freelance" | "internship";
  location: string;
  remote: boolean;
  startDate: string;
  endDate: string | null;
  description: string;
  responsibilities: string[];
  achievements: string[];
  techStack: string[];
  current: boolean;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  logo?: string;
  badge?: string;
}

export interface Achievement {
  id: string;
  title: string;
  organization: string;
  year: string;
  description: string;
  type: "scholarship" | "award" | "recognition" | "publication";
}

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface SocialLink {
  platform: string;
  url: string;
  label: string;
}
