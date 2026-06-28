// Combined portfolio data merged from the AI Business Analyst & AI Data Analyst resumes.

export const profile = {
  name: "Jahnavi Somu",
  firstName: "Jahnavi",
  lastName: "Somu",
  headline: "AI Data & Business Analyst",
  tagline:
    "GenAI Adoption · Predictive Modeling · Business Intelligence · Data-Driven Decisions",
  location: "Jersey City, NJ",
  phone: "(908) 397-0876",
  email: "jahnavisomu96@gmail.com",
  linkedin: "https://linkedin.com/in/jahnavi23",
  linkedinLabel: "linkedin.com/in/jahnavi23",
  github: "https://github.com/somujahnavi-23",
  githubLabel: "github.com/somujahnavi-23",
  heroImage:
    "https://images.pexels.com/photos/10325707/pexels-photo-10325707.png",
};

// Both attached resumes, downloadable via the Download Resume button.
export const resumes = [
  {
    label: "Business Analyst Résumé",
    role: "AI Business Analyst focus",
    url: "https://customer-assets.emergentagent.com/job_13e6101a-65b1-45c0-a8dd-61d3b11adfc5/artifacts/nhr1vl9t_Jahnavi_Somu_AI_Business_Analyst.docx",
  },
  {
    label: "Data Analyst Résumé",
    role: "AI Data Analyst focus",
    url: "https://customer-assets.emergentagent.com/job_13e6101a-65b1-45c0-a8dd-61d3b11adfc5/artifacts/w2nszcgx_Jahnavi_Somu_AI_Data_Analyst.docx",
  },
];

export const about = {
  summary:
    "AI Data & Business Analyst with 1.5+ years bridging business stakeholders and technical teams to turn large, messy datasets into decision-ready insights across healthcare and enterprise environments. I pair strong SQL, BI, and analytics skills with hands-on machine learning and daily use of generative AI / LLM tools to gather requirements, document workflows, and identify automation opportunities.",
  summary2:
    "I translate business needs into dashboards, predictive models, and SOPs — work that has cut reporting cycles by 40%, improved data accuracy by 22%, and reduced recurring issues by 35%. Currently pursuing an M.S. in Data Science (May 2026).",
  highlights: ["SQL & Python", "Power BI · Tableau", "GenAI / LLM Workflows", "Machine Learning"],
};

export const stats = [
  { value: "1.5+", label: "Years Experience" },
  { value: "40%", label: "Faster Reporting" },
  { value: "92%", label: "Model Accuracy" },
  { value: "500K+", label: "Records Processed" },
];

export const experiences = [
  {
    company: "Tata Consultancy Services",
    client: "Client: MedStar Health Systems",
    role: "Data / Business Analyst Intern",
    dates: "Sep 2025 – Apr 2026",
    location: "Healthcare · Remote, USA",
    points: [
      "Partnered with cross-functional stakeholders to translate operational pain points into requirements, then analyzed 10,000+ daily records with SQL and Python to deliver weekly insights that improved incident response time by 28%.",
      "Designed and documented 5 automated Power BI and Tableau dashboards (uptime, MTTR, SLA compliance, ticket volume), cutting manual reporting from 5 hours to 45 minutes weekly.",
      "Cleaned and validated 50,000+ records from ServiceNow and internal databases, resolving data-quality issues and raising reporting accuracy by 22%.",
      "Leveraged generative AI / LLM tools (ChatGPT) to draft and optimize SQL, summarize ticket trends, and accelerate documentation, reducing analysis turnaround time.",
      "Led ad-hoc root cause analysis with pivot tables and statistical methods, driving a 35% reduction in recurring issues; authored 20+ SOPs in SharePoint that cut analyst onboarding time by 50%.",
    ],
  },
  {
    company: "Cognizant Technology Solutions",
    client: "Enterprise · 3 client accounts",
    role: "Junior Data Analyst",
    dates: "Jul 2022 – May 2024",
    location: "Hyderabad, India",
    points: [
      "Gathered business requirements from 3 client accounts and translated them into SQL queries, data models, and stakeholder-ready Tableau visualizations for executive review.",
      "Generated monthly performance reports across 800+ endpoints to support capacity planning and data-driven resource allocation.",
      "Built automated Excel reports with macros and pivot tables tracking 1,200+ monthly tickets and SLA metrics, reducing manual processing by 40%.",
      "Performed EDA on incident trends with Python (Matplotlib, Seaborn), surfacing seasonal patterns that informed planning and reduced P1 escalations by 18%.",
    ],
  },
];

export const skillGroups = [
  {
    title: "Business Analysis",
    icon: "Briefcase",
    items: ["Requirements Gathering", "User Stories", "BRD / FRD", "Process Mapping", "Gap Analysis", "Stakeholder Management", "Agile / Scrum", "Jira"],
  },
  {
    title: "AI & Generative AI",
    icon: "Sparkles",
    items: ["Generative AI & LLMs (ChatGPT, Copilot)", "Prompt-Based Automation", "AI Use-Case Identification", "Machine Learning (scikit-learn, XGBoost)", "Predictive Modeling"],
  },
  {
    title: "Data & BI",
    icon: "BarChart3",
    items: ["SQL (Joins, CTEs, Window Functions)", "Python (Pandas, NumPy)", "Power BI (DAX, Power Query)", "Tableau", "Excel (Pivot, Macros)", "KPI Dashboards", "Data Storytelling"],
  },
  {
    title: "Analytics & Methods",
    icon: "LineChart",
    items: ["Root Cause Analysis", "Statistical Analysis", "Hypothesis & A/B Testing", "Trend Analysis", "Forecasting", "Data Mining"],
  },
  {
    title: "Data Engineering",
    icon: "Database",
    items: ["ETL Pipelines", "Data Cleaning & Wrangling", "Data Validation", "Data Modeling", "MySQL", "PostgreSQL"],
  },
  {
    title: "Tools & Cloud",
    icon: "Cloud",
    items: ["AWS (S3, EC2)", "Git", "Jupyter", "ServiceNow", "SharePoint", "Google Analytics", "Microsoft 365"],
  },
];

export const projects = [
  {
    slug: "cardiovascular-risk-prediction",
    name: "Cardiovascular Disease Risk Prediction",
    stack: ["Python", "scikit-learn", "XGBoost", "Power BI"],
    metric: "92%",
    metricLabel: "model accuracy",
    description:
      "Built a predictive analytics pipeline on 70,000+ patient records with feature engineering and cross-validation, achieving 92% accuracy with an optimized XGBoost model. Delivered Power BI risk-segmentation dashboards that cut manual chart-review time by 30% and enabled earlier intervention.",
    caseStudy: {
      tagline: "Turning 70,000 patient records into earlier, smarter clinical interventions.",
      role: "Data Analyst / ML Developer",
      timeline: "8 weeks",
      domain: "Healthcare · Predictive Analytics",
      context:
        "Clinical teams reviewing cardiovascular patients were relying on manual chart review and gut-feel triage. With tens of thousands of records, high-risk patients could slip through the cracks until symptoms became severe. The goal was to build a data product that flagged risk early — and, just as importantly, presented that risk in a way clinicians actually trusted and could act on.",
      problem:
        "Three things made this hard: the dataset was large and messy with inconsistent units and missing values; raw model scores mean little to a busy clinician; and any false confidence in a health setting is dangerous. I needed a model that was both accurate and explainable, wrapped in a dashboard that turned probabilities into clear action.",
      approach: [
        {
          title: "Data understanding & cleaning",
          desc: "Profiled 70,000+ records, standardized units (e.g. height/weight, blood pressure), handled implausible outliers, and resolved missing values with domain-aware imputation rather than blind averages.",
        },
        {
          title: "Feature engineering",
          desc: "Engineered clinically meaningful features — BMI bands, pulse-pressure, age cohorts — and carefully audited for leakage so the model learned signal, not artifacts of how data was recorded.",
        },
        {
          title: "Modeling & validation",
          desc: "Started with a logistic-regression baseline for interpretability, then moved to a tuned XGBoost model. Used stratified k-fold cross-validation and tracked precision/recall — not just accuracy — because false negatives carry real clinical cost.",
        },
        {
          title: "From scores to decisions",
          desc: "Translated probability outputs into three intuitive risk tiers and built Power BI dashboards with DAX measures so clinicians could segment, filter, and drill into cohorts in seconds.",
        },
      ],
      challenges: [
        "Avoiding data leakage from features that implicitly encoded the outcome.",
        "Balancing model performance with interpretability for clinical trust.",
        "Designing risk tiers that mapped cleanly onto existing care workflows.",
      ],
      results: [
        { metric: "92%", label: "Model accuracy", desc: "Optimized XGBoost validated with stratified cross-validation." },
        { metric: "30%", label: "Less chart review", desc: "Risk-segmentation dashboards cut manual review time." },
        { metric: "70K+", label: "Records modeled", desc: "Cleaned and feature-engineered patient dataset." },
      ],
      reflection:
        "The model was only half the work. The real win was packaging predictions into a dashboard clinicians trusted — a reminder that an analyst's job is to make the insight usable, not just correct.",
    },
  },
  {
    slug: "healthcare-operations-dashboard",
    name: "Healthcare Operations Analytics Dashboard",
    subtitle: "M.S. Capstone — Saint Peter's University",
    stack: ["Python", "SQL", "Tableau", "AWS S3"],
    metric: "500K+",
    metricLabel: "records ingested",
    description:
      "Engineered an end-to-end ETL pipeline ingesting 500K+ hospital records into a structured AWS S3 warehouse, then created interactive Tableau dashboards with drill-down filters across 15 departments that reduced operational inefficiencies by 25%.",
    caseStudy: {
      tagline: "One source of truth for 15 hospital departments — built from scratch.",
      role: "Data & Business Analyst (Capstone Lead)",
      timeline: "12 weeks",
      domain: "Healthcare Operations · Business Intelligence",
      context:
        "Operations leaders across 15 hospital departments were each maintaining their own spreadsheets. Numbers rarely matched, reporting was manual and slow, and leadership had no reliable way to compare performance or spot bottlenecks across the organization. My capstone set out to replace that fragmented reporting with a single, automated analytics layer.",
      problem:
        "Data lived in different formats across different systems with no shared definitions. Even basic questions — 'which department has the longest turnaround?' — required hours of manual stitching. I needed to consolidate everything into one trustworthy warehouse and then expose it through dashboards non-technical leaders could explore on their own.",
      approach: [
        {
          title: "Requirements & metric alignment",
          desc: "Interviewed stakeholders to define shared KPIs and agree on a single definition for each metric — the unglamorous step that makes every later number credible.",
        },
        {
          title: "ETL pipeline to a cloud warehouse",
          desc: "Built a Python + SQL pipeline that extracted, cleaned, and standardized 500K+ records from multiple sources and loaded them into a structured AWS S3 data warehouse with a consistent schema.",
        },
        {
          title: "Data modeling",
          desc: "Designed a star-style model so dashboards could slice by department, time, and service line without expensive joins at query time.",
        },
        {
          title: "Self-serve Tableau dashboards",
          desc: "Delivered interactive dashboards with drill-down filters across all 15 departments, letting leaders go from org-level overview to row-level detail in a couple of clicks.",
        },
      ],
      challenges: [
        "Reconciling inconsistent, multi-source data into one schema.",
        "Keeping dashboards responsive at 500K+ rows.",
        "Getting 15 departments to agree on shared metric definitions.",
      ],
      results: [
        { metric: "25%", label: "Fewer inefficiencies", desc: "Drill-down visibility surfaced bottlenecks leaders could act on." },
        { metric: "15", label: "Departments unified", desc: "A single source of truth replaced siloed spreadsheets." },
        { metric: "500K+", label: "Records ingested", desc: "Automated ETL into an AWS S3 warehouse." },
      ],
      reflection:
        "This project sat exactly where I like to work — half business analysis (aligning people on what to measure) and half data engineering (making the numbers reliable). The dashboards got the attention, but the alignment work made them matter.",
    },
  },
];

export const education = [
  {
    degree: "M.S. in Data Science",
    school: "Saint Peter's University",
    location: "Jersey City, NJ",
    period: "Expected May 2026",
    coursework: ["Machine Learning", "Statistical Methods", "Data Mining", "Data Visualization", "Business Intelligence", "Database Systems"],
  },
  {
    degree: "B.Tech, Electronics & Communication Engineering",
    school: "CMR Institute of Technology",
    location: "Hyderabad, India",
    period: "2022",
    coursework: [],
  },
];

export const navLinks = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export const getProjectBySlug = (slug) => projects.find((p) => p.slug === slug);
