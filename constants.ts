import {
    PythonIcon, SqlIcon, GithubIcon, HtmlIcon, CssIcon, JsIcon, ReactIcon, TypescriptIcon, NextjsIcon, PostgresqlIcon, GcpIcon, JiraIcon, TensorflowIcon, PytorchIcon, PandasIcon, DockerIcon, AwsIcon, AgileIcon, ScrumIcon, FigmaIcon, PowerbiIcon, LinkedinIcon, MailIcon,
    // New icons we are adding:
    SlackIcon, NumpyIcon
} from './components/icons/Icons';
import type { Skill, ExperienceItem, Project, SocialLink } from './types';

export const SKILLS: Skill[] = [
  { name: 'Python', icon: PythonIcon },
  { name: 'SQL', icon: SqlIcon },
  { name: 'GitHub', icon: GithubIcon },
  { name: 'HTML', icon: HtmlIcon },
  { name: 'CSS', icon: CssIcon },
  { name: 'JavaScript', icon: JsIcon },
  { name: 'React', icon: ReactIcon },
  { name: 'TypeScript', icon: TypescriptIcon },
  { name: 'Next.js', icon: NextjsIcon },
  { name: 'PostgreSQL', icon: PostgresqlIcon },
  { name: 'Slack', icon: SlackIcon }, // <-- REPLACED TELEGRAM/DISCORD
  { name: 'Google Cloud', icon: GcpIcon },
  { name: 'Jira', icon: JiraIcon },
  { name: 'TensorFlow', icon: TensorflowIcon },
  { name: 'PyTorch', icon: PytorchIcon },
  { name: 'NumPy', icon: NumpyIcon }, // <-- REPLACED SCIKIT-LEARN
  { name: 'Pandas', icon: PandasIcon },
  { name: 'Docker', icon: DockerIcon },
  { name: 'AWS', icon: AwsIcon },
  { name: 'Agile', icon: AgileIcon },
  { name: 'Scrum', icon: ScrumIcon },
  { name: 'Figma', icon: FigmaIcon },
  { name: 'Power BI', icon: PowerbiIcon },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    role: 'Product Manager AI',
    company: 'InnovateAI Corp',
    period: 'April 2025 - Present',
    description: 'Leading the development of next-generation AI products, defining product vision, strategy, and roadmap from conception to launch.'
  },
  {
    role: 'Data Engineer',
    company: 'QuantumData Solutions',
    period: 'September 2023 - March 2025',
    description: 'Designed, built, and maintained scalable data pipelines and infrastructure. Optimized data warehousing solutions and ETL processes for large-scale data processing.'
  },
  {
    role: 'Data Analyst Intern',
    company: 'AnalyticsFront Inc.',
    period: 'Summer 2023',
    description: 'Analyzed complex datasets to extract actionable insights, created dashboards, and supported data-driven decision-making across various departments.'
  },
  {
    role: 'Data Analyst Intern',
    company: 'Data Insights Co.',
    period: 'Summer 2022',
    description: 'Assisted senior analysts with data cleaning, visualization, and reporting tasks. Contributed to a major market trend analysis project.'
  }
];

export const PROJECTS: Project[] = [
  {
    title: 'Real-Time Clinic Analytics Dashboard',
    description: 'An end-to-end web application allowing clinics to monitor live patient data, track staff activity, and analyze performance metrics in real-time.',
    tags: ['Full Stack', 'React', 'Real-Time Data', 'Geolocation', 'Analytics', 'AI'],
    imageUrl: 'https://raw.githubusercontent.com/SatvickMalhotra/My-portfolio/main/Pics/Gemini_Generated_Image_dy8ae6dy8ae6dy8a.png',
    repoUrl: 'https://github.com/SatvickMalhotra/full-stack-apps-with-AI/tree/main/MapMyClinic',
  },
  {
    title: 'MediTrack: Medication Inventory System',
    description: 'A comprehensive database system designed to manage pharmaceutical inventory, allowing users to place orders, track stock, and maintain accurate records.',
    tags: ['Inventory Management', 'Database', 'SQL', 'Healthcare', 'Full Stack'],
    imageUrl: 'https://raw.githubusercontent.com/SatvickMalhotra/My-portfolio/main/Pics/Gemini_Generated_Image_9adxou9adxou9adx.png',
    repoUrl: 'https://github.com/SatvickMalhotra/full-stack-apps-with-AI/tree/main/MediTrack%20System',
  },
  {
    title: 'AI-Powered Furniture E-commerce Platform',
    description: 'A modern e-commerce application for a furniture store, featuring AI-driven analytics, order tracking, and automated bill generation for a seamless user experience.',
    tags: ['E-commerce', 'React', 'AI', 'Analytics', 'Full Stack'],
    imageUrl: 'https://raw.githubusercontent.com/SatvickMalhotra/My-portfolio/main/Pics/Gemini_Generated_Image_1dyjfb1dyjfb1dyj.png',
    repoUrl: 'https://github.com/SatvickMalhotra/full-stack-apps-with-AI/tree/main/Furniture%20App%20(React)',
  },
  {
    title: 'Multi-Agent AI System',
    description: 'An advanced system where multiple AI agents collaborate, iteratively refining solutions to complex problems until an optimal, user-approved outcome is achieved.',
    tags: ['AI', 'Multi-Agent System', 'Generative AI', 'Python', 'Autonomous Agents'],
    imageUrl: 'https://raw.githubusercontent.com/SatvickMalhotra/My-portfolio/main/Pics/Gemini_Generated_Image_4972k04972k04972.png',
    repoUrl: 'https://github.com/SatvickMalhotra/full-stack-apps-with-AI/tree/main/AI_Agents(Coding)',
  },
  {
    title: 'Custom AI Chatbot Platform',
    description: 'A versatile platform for building and deploying custom AI chatbots, tailored to specific user requirements and business needs for enhanced user engagement.',
    tags: ['AI', 'Chatbot', 'NLP', 'Full Stack', 'SaaS'],
    imageUrl: 'https://picsum.photos/seed/chatbot/600/400',
    repoUrl: 'https://github.com/SatvickMalhotra',
  },
  {
    title: 'Real-Time OCR Data Pipeline',
    description: 'An efficient Optical Character Recognition (OCR) system that intelligently extracts text from images and populates structured data into a database in real-time.',
    tags: ['OCR', 'Computer Vision', 'Data Pipeline', 'Real-Time', 'Automation'],
    imageUrl: 'https://raw.githubusercontent.com/SatvickMalhotra/My-portfolio/main/Pics/thumnail001.png',
    repoUrl: 'https://github.com/SatvickMalhotra',
  }
];

export const SOCIAL_LINKS: SocialLink[] = [
    { name: 'GitHub', url: 'https://github.com/SatvickMalhotra', icon: GithubIcon },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/satvick-malhotra-a86261135/', icon: LinkedinIcon },
    { name: 'Email', url: 'mailto:satvickmalhotraofficial@gmail.com', icon: MailIcon },
];