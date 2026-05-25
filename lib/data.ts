import type {
  Project,
  SkillCategory,
  Experience,
  Certification,
  Achievement,
  NavItem,
  SocialLink,
} from "./types";

// ============================================================
// PERSONAL INFO — Edit this to personalize the portfolio
// ============================================================

export const siteConfig = {
  name: "Roy Benjamin Cataquiz",
  initials: "Rbgc",
  title: "Data Engineer",
  tagline: "Building scalable data systems and operational platforms",
  description:
    "I architect and build production-grade data pipelines, analytics platforms, and cloud-native data infrastructure that power business decisions at scale.",
  email: "roybenjamincataquiz@gmail.com",
  location: "Manila, Philippines",
  availableForWork: true,
  resumeUrl: "/resume.pdf",
  siteUrl: "https://www.linkedin.com/in/roybenjamincataquiz",
  ogImage: "/og-image.png",
};

export const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks: SocialLink[] = [
  {
    platform: "GitHub",
    url: "https://github.com/alexrivera",
    label: "View GitHub profile",
  },
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/roybenjamincataquiz",
    label: "Connect on LinkedIn",
  },
  {
    platform: "Twitter",
    url: "https://twitter.com/alexrivera",
    label: "Follow on Twitter",
  },
];

// ============================================================
// SKILLS
// ============================================================

export const skillCategories: SkillCategory[] = [
  {
    id: "data-engineering",
    label: "Data Engineering",
    icon: "Database",
    skills: [
      { name: "Apache Spark", level: "expert" },
      { name: "Apache Kafka", level: "expert" },
      { name: "Apache Airflow", level: "expert" },
      { name: "dbt", level: "expert" },
      { name: "Flink", level: "proficient" },
      { name: "Delta Lake", level: "proficient" },
    ],
  },
  {
    id: "cloud",
    label: "Cloud Platforms",
    icon: "Cloud",
    skills: [
      { name: "AWS (Glue, EMR, Redshift)", level: "expert" },
      { name: "GCP (BigQuery, Dataflow)", level: "proficient" },
      { name: "Azure Data Factory", level: "proficient" },
      { name: "Databricks", level: "expert" },
      { name: "Snowflake", level: "expert" },
    ],
  },
  {
    id: "databases",
    label: "Databases",
    icon: "Server",
    skills: [
      { name: "PostgreSQL", level: "expert" },
      { name: "Redshift", level: "expert" },
      { name: "BigQuery", level: "proficient" },
      { name: "Elasticsearch", level: "proficient" },
      { name: "Redis", level: "proficient" },
      { name: "MongoDB", level: "familiar" },
    ],
  },
  {
    id: "languages",
    label: "Languages",
    icon: "Code2",
    skills: [
      { name: "Python", level: "expert" },
      { name: "SQL", level: "expert" },
      { name: "Scala", level: "proficient" },
      { name: "TypeScript", level: "proficient" },
      { name: "Bash / Shell", level: "proficient" },
      { name: "Go", level: "familiar" },
    ],
  },
  {
    id: "analytics",
    label: "Analytics & BI",
    icon: "BarChart3",
    skills: [
      { name: "Looker / LookML", level: "expert" },
      { name: "Tableau", level: "proficient" },
      { name: "Metabase", level: "proficient" },
      { name: "dbt Metrics Layer", level: "expert" },
      { name: "pandas / NumPy", level: "expert" },
    ],
  },
  {
    id: "devops",
    label: "DevOps & IaC",
    icon: "GitBranch",
    skills: [
      { name: "Terraform", level: "expert" },
      { name: "Docker / Kubernetes", level: "proficient" },
      { name: "GitHub Actions", level: "expert" },
      { name: "Helm", level: "proficient" },
      { name: "Prometheus / Grafana", level: "proficient" },
    ],
  },
];

// ============================================================
// PROJECTS
// ============================================================

export const projects: Project[] = [
  {
    id: "1",
    slug: "real-time-data-platform",
    title: "Real-Time Operational Data Platform",
    role: "Lead Data Engineer",
    shortDescription:
      "End-to-end streaming data platform processing 50M+ events/day with sub-second latency, powering real-time dashboards and ML feature stores.",
    fullDescription:
      "Architected and built a production-grade streaming data platform from scratch, replacing a fragile batch ETL system with a modern Kafka → Flink → Delta Lake architecture. The platform serves as the operational backbone for real-time analytics, fraud detection, and customer-facing features.",
    problem:
      "Legacy batch pipelines caused 6-hour data lag, making real-time fraud detection and dynamic pricing impossible. Business was losing $2M/month in undetected fraud.",
    solution:
      "Designed a Lambda + Kappa hybrid architecture with Kafka as the event backbone, Apache Flink for stream processing, and Delta Lake for ACID-compliant storage. Built a custom schema registry and self-serve onboarding layer for product teams.",
    architecture:
      "Producers → Kafka (6 brokers, 99.99% uptime SLA) → Flink cluster (48 cores, auto-scaling) → Delta Lake on S3 → Serving layer (Redshift + ElasticSearch) → Consumers",
    impact: [
      "Reduced data latency from 6 hours to <2 seconds",
      "Processed 50M+ events/day at peak load",
      "Prevented $4.2M in fraud in first quarter post-launch",
      "Reduced infrastructure cost by 40% vs legacy system",
      "Zero data loss across 18 months of production operation",
    ],
    techStack: [
      "Apache Kafka",
      "Apache Flink",
      "Delta Lake",
      "Python",
      "Terraform",
      "AWS EMR",
      "Redshift",
      "Grafana",
      "Kubernetes",
    ],
    tags: ["Data Engineering", "Cloud", "Analytics"],
    status: "live",
    featured: true,
    githubUrl: "https://github.com/alexrivera/realtime-platform",
    hasCaseStudy: true,
    metrics: [
      { label: "Events/Day", value: "50M+", description: "Peak throughput" },
      { label: "Latency", value: "<2s", description: "End-to-end processing" },
      { label: "Uptime", value: "99.99%", description: "18-month average" },
      { label: "Cost Reduction", value: "40%", description: "vs legacy system" },
    ],
    year: 2024,
  },
  {
    id: "2",
    slug: "analytics-engineering-platform",
    title: "Analytics Engineering Platform (dbt + Looker)",
    role: "Analytics Engineer",
    shortDescription:
      "Self-serve analytics platform with 200+ dbt models, LookML semantic layer, and automated data quality framework — serving 300+ internal analysts.",
    fullDescription:
      "Built the company's centralized analytics engineering platform, defining data contracts, semantic layers, and governance frameworks that enabled product, finance, and operations teams to self-serve insights without engineering involvement.",
    problem:
      "Ad-hoc SQL queries proliferating across teams, no single source of truth, data inconsistencies causing board-level reporting errors, and analytics engineers bottlenecked by one-off data requests.",
    solution:
      "Implemented a modular dbt project with staging → intermediate → mart layering, embedded data contracts with schema.yml tests, and a LookML semantic layer that exposed consistent business metrics. Automated quality gates in CI/CD.",
    architecture:
      "Source systems → Fivetran (ELT) → Snowflake → dbt Core (200+ models) → LookML Semantic Layer → Looker → Business users",
    impact: [
      "Served 300+ analysts with self-serve access",
      "Reduced ad-hoc data requests to engineering by 80%",
      "Achieved 99.5% data quality score across core marts",
      "Onboarded 4 new source systems in under 2 weeks each",
      "Zero board-level reporting incidents post-launch",
    ],
    techStack: [
      "dbt Core",
      "Snowflake",
      "Looker",
      "LookML",
      "Python",
      "GitHub Actions",
      "Fivetran",
      "Great Expectations",
    ],
    tags: ["Analytics", "Data Engineering"],
    status: "live",
    featured: true,
    githubUrl: "https://github.com/alexrivera/analytics-platform",
    hasCaseStudy: true,
    metrics: [
      { label: "dbt Models", value: "200+", description: "Production models" },
      { label: "Analysts Served", value: "300+", description: "Self-serve users" },
      { label: "Data Quality", value: "99.5%", description: "Core mart score" },
      { label: "Request Reduction", value: "80%", description: "Engineering queue" },
    ],
    year: 2023,
  },
  {
    id: "3",
    slug: "ml-feature-store",
    title: "ML Feature Store & Data Contracts",
    role: "Data Infrastructure Engineer",
    shortDescription:
      "Production-grade feature store enabling 12 ML models to share 400+ features with guaranteed freshness SLAs and full lineage tracking.",
    fullDescription:
      "Designed and implemented a centralized ML feature store that eliminated duplicate feature computation, enforced freshness SLAs, and created a shared feature marketplace for ML teams.",
    problem:
      "ML teams computing the same features independently, causing inconsistency between training and serving, $80K/month in redundant compute, and 6-month model retraining cycles.",
    solution:
      "Built a feature store on top of Delta Lake using Feast as the serving layer, with Airflow orchestrating materialization jobs. Defined data contracts in Protobuf for cross-team feature sharing.",
    architecture:
      "Raw data → Feature pipelines (Spark) → Offline store (Delta Lake) → Online store (Redis) → Feast serving layer → ML models",
    impact: [
      "Reduced feature compute costs by $80K/month",
      "400+ features shared across 12 ML models",
      "Model training data freshness improved from 6h to 15min",
      "Full feature lineage and drift monitoring",
    ],
    techStack: [
      "Feast",
      "Delta Lake",
      "Apache Spark",
      "Redis",
      "Airflow",
      "Databricks",
      "Python",
      "Protobuf",
    ],
    tags: ["Data Engineering", "AI/ML", "Cloud"],
    status: "live",
    featured: true,
    githubUrl: "https://github.com/alexrivera/feature-store",
    hasCaseStudy: false,
    metrics: [
      { label: "Features", value: "400+", description: "Shared across teams" },
      { label: "Models Served", value: "12", description: "Active ML models" },
      { label: "Monthly Savings", value: "$80K", description: "Compute cost reduction" },
      { label: "Freshness", value: "15min", description: "vs 6h previously" },
    ],
    year: 2023,
  },
  {
    id: "4",
    slug: "data-ops-automation",
    title: "DataOps CI/CD & Observability Platform",
    role: "Data Platform Engineer",
    shortDescription:
      "GitOps-driven DataOps platform with automated testing, impact analysis, and data observability — cutting pipeline incidents by 70%.",
    fullDescription:
      "Built the engineering team's DataOps framework, including automated PR-level testing, schema change impact analysis, data SLA monitoring, and incident alerting — all integrated into the development workflow.",
    problem:
      "Manual deployments of dbt models causing production incidents, no automated testing, and no observability into pipeline failures until business users complained.",
    solution:
      "Implemented a GitHub Actions CI/CD pipeline with slim CI (modified models only), automated data contracts, Monte Carlo integration for anomaly detection, and PagerDuty alerting for SLA breaches.",
    architecture:
      "PR → GitHub Actions (dbt slim CI) → Staging environment → Approval gate → Production deploy → Monte Carlo monitoring → PagerDuty alerts",
    impact: [
      "Reduced pipeline incidents by 70%",
      "Deploy time cut from 2 hours (manual) to 12 minutes",
      "100% of new models require automated tests",
      "MTTR for data incidents reduced from 4h to 35min",
    ],
    techStack: [
      "GitHub Actions",
      "dbt",
      "Monte Carlo",
      "Python",
      "Terraform",
      "PagerDuty",
      "Slack API",
    ],
    tags: ["Automation", "DevOps", "Data Engineering"],
    status: "live",
    featured: false,
    githubUrl: "https://github.com/alexrivera/dataops-platform",
    hasCaseStudy: false,
    metrics: [
      { label: "Incidents", value: "↓70%", description: "Pipeline failures" },
      { label: "Deploy Time", value: "12min", description: "vs 2h manual" },
      { label: "MTTR", value: "35min", description: "vs 4h previously" },
    ],
    year: 2024,
  },
  {
    id: "5",
    slug: "data-catalog",
    title: "Automated Data Catalog & Lineage Graph",
    role: "Data Platform Engineer",
    shortDescription:
      "Self-updating data catalog with full column-level lineage, automated documentation, and discovery layer — powered by OpenLineage and DataHub.",
    fullDescription:
      "Implemented a fully automated data catalog using OpenLineage emission from all pipeline tools, visualizing end-to-end column-level lineage across 3,000+ assets in DataHub.",
    problem:
      "No data discovery tooling, engineers manually documenting tables in Confluence (always stale), and cross-team data re-engineering due to unknown existing assets.",
    solution:
      "Integrated OpenLineage API into Spark jobs, Airflow, and dbt. Auto-populated DataHub with schema, ownership, usage statistics, and classification tags. Built a Slack bot for data discovery.",
    architecture:
      "Pipeline tools → OpenLineage API → DataHub ingestion → Graph store → Search index → DataHub UI + Slack bot",
    impact: [
      "3,000+ data assets cataloged automatically",
      "Full column-level lineage across all pipelines",
      "Eliminated $120K/year in redundant data engineering",
      "Data discovery time reduced from days to minutes",
    ],
    techStack: [
      "DataHub",
      "OpenLineage",
      "Python",
      "Elasticsearch",
      "Neo4j",
      "Slack API",
      "dbt",
    ],
    tags: ["Data Engineering", "Automation"],
    status: "live",
    featured: false,
    githubUrl: "https://github.com/alexrivera/data-catalog",
    hasCaseStudy: false,
    year: 2023,
  },
  {
    id: "6",
    slug: "internal-analytics-api",
    title: "Internal Analytics API & Metrics Platform",
    role: "Full Stack Data Engineer",
    shortDescription:
      "FastAPI-powered metrics API with caching, query federation, and a React dashboard — eliminating duplicate BI tool queries across 5 teams.",
    fullDescription:
      "Built a RESTful metrics API layer on top of the data warehouse, enabling product teams to embed analytics directly into internal tools without writing SQL or depending on Looker.",
    problem:
      "5 product teams independently querying Redshift for the same metrics, causing warehouse contention, inconsistent numbers, and $30K/month in excess compute.",
    solution:
      "Built a FastAPI service with Redis caching, query federation across Redshift and BigQuery, and a typed OpenAPI spec. Teams integrated via SDK. Added a React admin dashboard.",
    architecture:
      "Client apps → FastAPI service → Redis cache → Query router → Redshift / BigQuery → Response normalization → JSON API",
    impact: [
      "Reduced warehouse query volume by 60%",
      "Saved $30K/month in compute",
      "12 internal teams integrated via API",
      "p99 response time under 120ms with caching",
    ],
    techStack: [
      "FastAPI",
      "Python",
      "Redis",
      "PostgreSQL",
      "Redshift",
      "React",
      "TypeScript",
      "Docker",
    ],
    tags: ["Full Stack", "Analytics", "Automation"],
    status: "live",
    featured: false,
    githubUrl: "https://github.com/alexrivera/metrics-api",
    hasCaseStudy: false,
    year: 2022,
  },
];

// ============================================================
// EXPERIENCE
// ============================================================

export const experiences: Experience[] = [
  {
    id: "1",
    company: "Meridian Analytics",
    role: "Senior Data Engineer",
    type: "full-time",
    location: "San Francisco, CA",
    remote: true,
    startDate: "2022-08",
    endDate: null,
    description:
      "Lead data engineer on the Platform team, owning the company's core data infrastructure, streaming systems, and analytics engineering foundation.",
    responsibilities: [
      "Architect and maintain the real-time streaming platform (Kafka + Flink + Delta Lake)",
      "Own the dbt project with 200+ models and Snowflake data warehouse",
      "Lead a team of 3 data engineers and 2 analytics engineers",
      "Define data contracts, SLAs, and observability standards",
      "Partner with ML team on feature store and model monitoring",
    ],
    achievements: [
      "Built real-time platform that prevented $4.2M in fraud in first quarter",
      "Reduced data infrastructure cost by 40% through architecture redesign",
      "Promoted to senior engineer within 14 months",
      "Established company-wide DataOps standards adopted by all engineering pods",
    ],
    techStack: [
      "Kafka",
      "Flink",
      "Snowflake",
      "dbt",
      "Python",
      "Airflow",
      "Kubernetes",
      "Terraform",
    ],
    current: true,
  },
  {
    id: "2",
    company: "Vantage Data Systems",
    role: "Data Engineer",
    type: "full-time",
    location: "Austin, TX",
    remote: false,
    startDate: "2020-06",
    endDate: "2022-07",
    description:
      "Core contributor on the Data Platform team building ELT pipelines, analytics infrastructure, and operational tooling for a B2B SaaS company.",
    responsibilities: [
      "Designed and maintained 40+ production Airflow DAGs",
      "Migrated on-prem Hadoop cluster to AWS EMR, reducing costs by 55%",
      "Implemented dbt from scratch, standardizing analytics data modeling",
      "Built Looker dashboards and LookML semantic layer for executive reporting",
    ],
    achievements: [
      "Led cloud migration project, delivering 3 months ahead of schedule",
      "Reduced monthly cloud spend by $45K through right-sizing and Reserved Instances",
      "Automated 80% of manual data reporting, freeing 20+ analyst hours/week",
    ],
    techStack: [
      "Airflow",
      "AWS EMR",
      "Redshift",
      "dbt",
      "Python",
      "Looker",
      "Spark",
    ],
    current: false,
  },
  {
    id: "3",
    company: "DataBridge Consulting",
    role: "Junior Data Analyst → Data Engineer",
    type: "full-time",
    location: "Chicago, IL",
    remote: false,
    startDate: "2018-09",
    endDate: "2020-05",
    description:
      "Started as a data analyst and transitioned into data engineering, building ETL pipelines and data infrastructure for 8+ client engagements.",
    responsibilities: [
      "Built ETL pipelines using Python and SQL for financial services clients",
      "Created executive dashboards in Tableau and Power BI",
      "Managed client data warehouse migrations to cloud platforms",
    ],
    achievements: [
      "Promoted from Analyst to Engineer within 18 months",
      "Delivered 8 client data migration projects with zero data loss",
      "Built automated reconciliation system saving clients 15h/week",
    ],
    techStack: [
      "Python",
      "SQL",
      "Tableau",
      "Power BI",
      "PostgreSQL",
      "AWS RDS",
    ],
    current: false,
  },
];

// ============================================================
// CERTIFICATIONS
// ============================================================

export const certifications: Certification[] = [
  {
    id: "1",
    name: "AWS Certified Data Engineer – Associate",
    issuer: "Amazon Web Services",
    date: "2024-03",
    credentialUrl: "https://aws.amazon.com/verify",
  },
  {
    id: "2",
    name: "Databricks Certified Data Engineer Associate",
    issuer: "Databricks",
    date: "2023-11",
    credentialUrl: "https://credentials.databricks.com",
  },
  {
    id: "3",
    name: "dbt Certified Developer",
    issuer: "dbt Labs",
    date: "2023-06",
    credentialUrl: "https://www.getdbt.com/certifications",
  },
  {
    id: "4",
    name: "Snowflake SnowPro Core Certification",
    issuer: "Snowflake",
    date: "2022-09",
    credentialUrl: "https://www.snowflake.com/certifications",
  },
  {
    id: "5",
    name: "Google Professional Data Engineer",
    issuer: "Google Cloud",
    date: "2023-02",
    credentialUrl: "https://cloud.google.com/certifications",
  },
];

// ============================================================
// ACHIEVEMENTS
// ============================================================

export const achievements: Achievement[] = [
  {
    id: "1",
    title: "DataEng Summit 2024 — Speaker",
    organization: "DataEngConf",
    year: "2024",
    description:
      "Presented 'Designing Data Contracts for Scale' to 800+ practitioners. Talk rated #3 of 60 sessions by attendee feedback.",
    type: "recognition",
  },
  {
    id: "2",
    title: "Emerging Data Engineer of the Year",
    organization: "Data Council",
    year: "2023",
    description:
      "Industry recognition for open-source contributions and the real-time platform design published as a case study.",
    type: "award",
  },
  {
    id: "3",
    title: "University of Michigan — Dean's Merit Scholarship",
    organization: "University of Michigan",
    year: "2018",
    description:
      "Full-tuition merit scholarship for academic excellence in Computer Science and Statistics.",
    type: "scholarship",
  },
];
