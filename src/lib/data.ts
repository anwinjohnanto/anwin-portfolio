export type SkillGroup = { name: string; iconKey: string; tags: string[] }
export type Bullet = { label: string; text: string }
export type Role = { company: string; title: string; period: string; location: string; bullets: Bullet[] }
export type Project = { num: string; title: string; desc: string; tech: string[]; fullWidth?: boolean }
export type AICard = { type: 'manual' | 'hybrid' | 'agentic'; title: string; items: string[] }
export type JourneyStep = { year: string; label: string; sublabel?: string }
export type ContactLink = { label: string; value: string; href: string }

export const SKILLS: SkillGroup[] = [
  {
    name: 'Backend',
    iconKey: 'backend',
    tags: ['Node.js', 'Express', 'Java', 'Spring Boot', 'Go (Chi)', 'REST API', 'Microservices'],
  },
  {
    name: 'Frontend',
    iconKey: 'frontend',
    tags: ['React.js', 'HTML5', 'CSS3', 'JavaScript ES6+', 'Vanilla JS', 'jQuery', 'Responsive UI'],
  },
  {
    name: 'Cloud & DevOps',
    iconKey: 'cloud',
    tags: ['AWS Lambda', 'EC2', 'VPC', 'S3', 'SQS FIFO', 'API Gateway', 'AWS SAM', 'IAM'],
  },
  {
    name: 'Databases',
    iconKey: 'database',
    tags: ['PostgreSQL (Aurora)', 'MongoDB', 'MySQL', 'LLD Design', 'Query Optimisation'],
  },
  {
    name: 'Security & IAM',
    iconKey: 'security',
    tags: ['Keycloak', 'OIDC', 'OAuth2', 'JWT', 'RBAC', 'Security Groups', 'IAM Policies'],
  },
  {
    name: 'AI-Assisted Dev',
    iconKey: 'ai',
    tags: ['Agentic Workflows', 'AI Hooks', 'Prompt Engineering', 'Automated Spec Gen', 'System Instructions', 'AI Code Review'],
  },
]

export const EXPERIENCE: Role[] = [
  {
    company: 'Windfall Productions',
    title: 'Technical Team Lead',
    period: 'Jan 2024 – Present',
    location: 'Thrissur',
    bullets: [
      {
        label: 'Leadership',
        text: 'Led and mentored a <strong>6-developer engineering team</strong>; defined technical standards, conducted code reviews, and managed full project lifecycles from requirements to production deployment.',
      },
      {
        label: 'Transformation',
        text: 'Spearheaded the transition from <strong>outsourced IT to a self-reliant in-house engineering department</strong>; partnered with HR/Operations to define hiring needs and scale the team from zero.',
      },
      {
        label: 'Infrastructure',
        text: 'Designed and configured <strong>AWS VPC infrastructure</strong> (public/private subnets, Security Groups) and managed EC2 instances ensuring secure, high-availability hosting for all services.',
      },
      {
        label: 'AI APIs',
        text: 'Built high-performance API endpoints in <strong>Node.js and Go</strong> integrating AI Hooks and custom Skills for context-optimised, self-documenting codebases handling high-volume form submissions.',
      },
      {
        label: 'Serverless',
        text: 'Deployed microservices using <strong>AWS SAM on Lambda</strong>, creating a scalable, cost-effective serverless environment — eliminating always-on server infrastructure costs.',
      },
      {
        label: 'Data Lake',
        text: 'Architected end-to-end <strong>ETL pipeline</strong> migrating data from HubSpot, Fundraise Up, Stripe, and PayPal into a unified AWS-hosted reporting dashboard using Lambda + SQS FIFO for 100% data integrity.',
      },
      {
        label: 'AI Dev',
        text: 'Engineered an <strong>AI-driven code review system</strong> and automated technical spec generation using specialised system instructions, reducing manual documentation effort by <strong>~40%</strong>.',
      },
      {
        label: 'Multi-tenant CMS',
        text: 'Designed and developed a <strong>multi-tenant CMS on top of Payload CMS (PostgreSQL)</strong>, featuring a super admin layer for tenant provisioning and lifecycle management, and per-tenant admin panels enabling independent control over collections, pages, media, and SEO configurations — currently under QA and testing.',
      },
    ],
  },
  {
    company: 'Windfall Productions',
    title: 'Software Engineer',
    period: 'Sep 2023 – Jan 2024',
    location: 'Thrissur',
    bullets: [
      {
        label: 'Backend',
        text: 'Developed <strong>Node.js backend services</strong> for a Donation Entry Application, ensuring accurate real-time financial record-keeping with role-based access control.',
      },
      {
        label: 'Payments',
        text: 'Integrated <strong>Stripe payment gateway</strong> supporting multiple donation types and recurring billing; implemented PayPal as an additional payment channel.',
      },
      {
        label: 'Serverless',
        text: 'Implemented and optimised API integrations using <strong>AWS Lambda and HubSpot serverless functions</strong> to maintain a robust, always-updated CRM database.',
      },
      {
        label: 'HubSpot',
        text: 'Customised and fine-tuned <strong>HubSpot CRM UI in React</strong>; built reusable React components for seamless integration into HubSpot CMS workflows.',
      },
      {
        label: 'IAM',
        text: 'Implemented <strong>Keycloak (OIDC)</strong> for enterprise-level Authentication and Authorisation with RBAC — securing sensitive donor financial data.',
      },
      {
        label: 'Frontend',
        text: 'Built responsive landing pages using <strong>HTML5, CSS3, and Vanilla JavaScript</strong> incorporating payment gateway flows and cross-browser compatibility.',
      },
    ],
  },
  {
    company: 'Windfall Productions',
    title: 'Playlist Executive & Content Operations',
    period: 'Apr 2022 – Sep 2023',
    location: 'Thrissur',
    bullets: [
      {
        label: 'Strategy',
        text: 'Led insights-driven <strong>program planning and strategic scheduling</strong> for Shalom World USA Inc across broadcast and digital platforms.',
      },
      {
        label: 'Ops',
        text: 'Coordinated with technical and creative teams to optimise content delivery pipelines — building foundational understanding of <strong>media operations</strong> that informed later software development work.',
      },
    ],
  },
  {
    company: 'Suracsh Filters',
    title: 'Graduate Engineering Trainee',
    period: 'Jan 2020 – Oct 2020',
    location: 'Kerala',
    bullets: [
      {
        label: 'Product',
        text: 'Designed and developed an <strong>MVP for NBC (Nuclear, Biological, Chemical) Protection Equipment</strong> and custom filter systems for defence sector applications.',
      },
      {
        label: 'Foundation',
        text: 'Applied mechanical engineering principles to hardware product development — building <strong>structured systems thinking</strong> directly transferable to software architecture.',
      },
    ],
  },
]

export const PROJECTS: Project[] = [
  {
    num: '#01',
    title: 'Financial Insights Data Lake & ETL Pipeline',
    desc: 'End-to-end AWS data pipeline aggregating Stripe, PayPal, HubSpot, and Fundraise Up data into a unified donation analytics dashboard. Designed for 100% data integrity using SQS FIFO queuing and Aurora PostgreSQL as the data store.',
    tech: ['AWS Lambda', 'SQS FIFO', 'Aurora PostgreSQL', 'HubSpot API', 'Stripe API', 'ETL'],
  },
  {
    num: '#02',
    title: 'Donation Management Platform',
    desc: 'Secure real-time donation posting and viewing application with enterprise-level OIDC authentication and role-based access control. Built to handle sensitive financial data for a US-based media organisation.',
    tech: ['Node.js', 'Keycloak', 'OIDC / RBAC', 'Stripe', 'PayPal', 'PostgreSQL'],
  },
  {
    num: '#03',
    title: 'Context-Aware AI API Handler',
    desc: 'AI-integrated API handler using custom system instructions and Hooks to process diverse data inputs with minimal manual intervention. An early production implementation of agentic workflow architecture — reduced manual documentation effort by ~40%.',
    tech: ['Node.js', 'AI Hooks', 'System Instructions', 'Agentic Workflows', 'AWS Lambda'],
  },
  {
    num: '#04',
    title: 'HubSpot CMS Themes & Serverless Functions',
    desc: 'Bespoke HubSpot HUBL themes, templates, and serverless functions extending CRM capabilities beyond the platform\'s native limits. Integrated Stripe for automated recurring billing and financial reconciliation workflows.',
    tech: ['HubSpot HUBL', 'CMS Hub', 'Serverless Fn', 'CRM API', 'Stripe', 'React'],
  },
  {
    num: '#05',
    title: 'Multi-Tenant CMS — Payload CMS',
    desc: 'Architected and developed a multi-tenant CMS platform built on top of Payload CMS with PostgreSQL. Features a super admin layer for tenant provisioning and full lifecycle management, and isolated per-tenant admin panels giving each tenant independent control over their collections, pages, media library, and SEO metadata. Currently under QA and testing.',
    tech: ['Payload CMS', 'PostgreSQL', 'Multi-tenancy', 'RBAC', 'Admin Panel', 'Node.js', 'SEO'],
  },
  {
    num: '#06',
    title: 'AWS VPC Infrastructure Design',
    desc: 'Architected a secure multi-subnet VPC environment from scratch for production-grade, high-availability application hosting. Includes public/private subnet separation, Security Group configuration, IAM policy design, and EC2 instance management — enabling a fully self-reliant in-house engineering infrastructure.',
    tech: ['AWS VPC', 'EC2', 'Security Groups', 'IAM', 'Subnets', 'High Availability'],
    fullWidth: true,
  },
]

export const AI_CARDS: AICard[] = [
  {
    type: 'manual',
    title: 'Deep Technical Ownership',
    items: [
      'AWS VPC — subnets, Security Groups, EC2',
      'Keycloak / OIDC / RBAC enterprise IAM',
      'Stripe & PayPal payment integration',
      'Aurora PostgreSQL schema & LLD design',
      'HubSpot HUBL themes & Serverless Functions',
      'React components & HubSpot CRM UI',
      'AWS SAM / Lambda microservice deployments',
      'SQS FIFO ingestion pipeline',
    ],
  },
  {
    type: 'hybrid',
    title: 'Hybrid Delivery',
    items: [
      'Node.js backend — Donation platform & APIs',
      'ETL pipeline — Financial Insights Dashboard',
      'Context-Aware AI API Handler',
      'System architecture & HLD decisions',
      'Code review standards definition',
    ],
  },
  {
    type: 'agentic',
    title: 'Modern Velocity',
    items: [
      'Go (Chi) API endpoints — directed AI output',
      'AI-driven code review system',
      'Automated technical spec generation',
      'AI Hooks & Skills architecture',
      'System Instructions design',
    ],
  },
]

export const JOURNEY: JourneyStep[] = [
  { year: '2020', label: 'Mech Eng', sublabel: 'Trainee' },
  { year: '2022', label: 'Content', sublabel: 'Ops' },
  { year: '2023', label: 'Software', sublabel: 'Engineer' },
  { year: '2024', label: 'Tech Lead' },
  { year: 'Now →', label: 'Building' },
]

export const CONTACT_LINKS: ContactLink[] = [
  { label: 'Email', value: 'aanto6151@gmail.com', href: 'mailto:aanto6151@gmail.com' },
  { label: 'Phone', value: '+91 9400087537', href: 'tel:+919400087537' },
  { label: 'LinkedIn', value: 'linkedin.com/in/anwin-anto', href: 'https://linkedin.com/in/anwin-anto' },
]

export const OPEN_TO: string[] = [
  'Technical Team Lead roles',
  'Senior / Lead Full Stack Engineer',
  'Cloud / Serverless Specialist positions',
  'HubSpot Engineering & CRM roles',
  'Remote, Hybrid, or Bengaluru on-site',
]
