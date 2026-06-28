// Combined portfolio data merged from the AI Business Analyst & AI Data Analyst resumes.

export const profile = {
  name: "Jahnavi Somu",
  firstName: "Jahnavi",
  lastName: "Somu",
  headline: "AI Business & Data Analyst",
  tagline:
    "GenAI Adoption · Predictive Modeling · Business Intelligence · Data-Driven Decisions",
  location: "Jersey City, NJ",
  phone: "(908) 397-0876",
  email: "jahnavisomu96@gmail.com",
  linkedin: "https://linkedin.com/in/jahnavi23",
  linkedinLabel: "linkedin.com/in/jahnavi23",
  resumeBA:
    "https://customer-assets.emergentagent.com/job_13e6101a-65b1-45c0-a8dd-61d3b11adfc5/artifacts/nhr1vl9t_Jahnavi_Somu_AI_Business_Analyst.docx",
  resumeDA:
    "https://customer-assets.emergentagent.com/job_13e6101a-65b1-45c0-a8dd-61d3b11adfc5/artifacts/w2nszcgx_Jahnavi_Somu_AI_Data_Analyst.docx",
  heroImage:
    "https://images.pexels.com/photos/10325707/pexels-photo-10325707.png",
};

export const about = {
  summary:
    "AI Business & Data Analyst with 1.5+ years bridging business stakeholders and technical teams to turn large, messy datasets into decision-ready insights across healthcare and enterprise environments. I pair strong SQL, BI, and analytics skills with hands-on machine learning and daily use of generative AI / LLM tools to gather requirements, document workflows, and identify automation opportunities.",
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
    dates: "Sep 2025 – Feb 2026",
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
    dates: "Jul 2023 – Jul 2024",
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
    name: "Cardiovascular Disease Risk Prediction",
    stack: ["Python", "scikit-learn", "XGBoost", "Power BI"],
    metric: "92%",
    metricLabel: "model accuracy",
    description:
      "Built a predictive analytics pipeline on 70,000+ patient records with feature engineering and cross-validation, achieving 92% accuracy with an optimized XGBoost model. Delivered Power BI risk-segmentation dashboards that cut manual chart-review time by 30% and enabled earlier intervention.",
  },
  {
    name: "Healthcare Operations Analytics Dashboard",
    subtitle: "M.S. Capstone — Saint Peter's University",
    stack: ["Python", "SQL", "Tableau", "AWS S3"],
    metric: "500K+",
    metricLabel: "records ingested",
    description:
      "Engineered an end-to-end ETL pipeline ingesting 500K+ hospital records into a structured AWS S3 warehouse, then created interactive Tableau dashboards with drill-down filters across 15 departments that reduced operational inefficiencies by 25%.",
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
    period: "2023",
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
