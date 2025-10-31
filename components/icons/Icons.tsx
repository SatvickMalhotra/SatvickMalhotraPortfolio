import React from 'react';

// --- Programming Languages & Frameworks ---
export const PythonIcon: React.FC<{ className?: string }> = ({ className }) => (
    <img src="https://raw.githubusercontent.com/SatvickMalhotra/My-portfolio/main/Pics/pythonn.gif" alt="Python" className={className} />
);
export const HtmlIcon: React.FC<{ className?: string }> = ({ className }) => (
    <img src="https://raw.githubusercontent.com/SatvickMalhotra/My-portfolio/main/Pics/html-icon.png" alt="HTML" className={className} />
);
export const CssIcon: React.FC<{ className?: string }> = ({ className }) => (
    <img src="https://raw.githubusercontent.com/SatvickMalhotra/My-portfolio/main/Pics/css-icon.png" alt="CSS" className={className} />
);
export const JsIcon: React.FC<{ className?: string }> = ({ className }) => (
    <img src="https://raw.githubusercontent.com/SatvickMalhotra/My-portfolio/main/Pics/javascript-programming-language-icon.png" alt="JavaScript" className={className} />
);
export const TypescriptIcon: React.FC<{ className?: string }> = ({ className }) => (
    <i className={`devicon-typescript-plain colored ${className}`}></i>
);
export const ReactIcon: React.FC<{ className?: string }> = ({ className }) => (
    <i className={`devicon-react-original colored ${className}`}></i>
);
export const NextjsIcon: React.FC<{ className?: string }> = ({ className }) => (
    <img src="https://raw.githubusercontent.com/SatvickMalhotra/My-portfolio/main/Pics/nextjs-icon.png" alt="Next.js" className={className} />
);

// --- Databases ---
export const SqlIcon: React.FC<{ className?: string }> = ({ className }) => (
    <img src="https://raw.githubusercontent.com/SatvickMalhotra/My-portfolio/main/Pics/sql.png" alt="SQL" className={className} />
);
export const PostgresqlIcon: React.FC<{ className?: string }> = ({ className }) => (
    <i className={`devicon-postgresql-plain colored ${className}`}></i>
);

// --- DevOps & Cloud ---
export const GithubIcon: React.FC<{ className?: string }> = ({ className }) => (
    <i className={`devicon-github-original ${className}`}></i>
);
export const GcpIcon: React.FC<{ className?: string }> = ({ className }) => (
    <img src="https://raw.githubusercontent.com/SatvickMalhotra/My-portfolio/main/Pics/google%20cloud.png" alt="Google Cloud" className={className} />
);
export const AwsIcon: React.FC<{ className?: string }> = ({ className }) => (
    <img src="https://raw.githubusercontent.com/SatvickMalhotra/My-portfolio/main/Pics/aws.png" alt="AWS" className={className} />
);
export const DockerIcon: React.FC<{ className?: string }> = ({ className }) => (
    <img src="https://raw.githubusercontent.com/SatvickMalhotra/My-portfolio/main/Pics/docker.png" alt="Docker" className={className} />
);

// --- Data Science & ML ---
export const TensorflowIcon: React.FC<{ className?: string }> = ({ className }) => (
    <i className={`devicon-tensorflow-original colored ${className}`}></i>
);
export const PytorchIcon: React.FC<{ className?: string }> = ({ className }) => (
    <i className={`devicon-pytorch-plain colored ${className}`}></i>
);
export const AiIcon: React.FC<{ className?: string }> = ({ className }) => (
    <img src="https://raw.githubusercontent.com/SatvickMalhotra/My-portfolio/main/Pics/ai.png" alt="AI" className={className} />
);
// REPLACEMENT for Scikit-learn:
export const NumpyIcon: React.FC<{ className?: string }> = ({ className }) => (
    <img src="https://raw.githubusercontent.com/SatvickMalhotra/My-portfolio/main/Pics/icons8-numpy-480.png" alt="NumPy" className={className} />
);
export const PandasIcon: React.FC<{ className?: string }> = ({ className }) => (
    <img src="https://raw.githubusercontent.com/SatvickMalhotra/My-portfolio/main/Pics/pandas.png" alt="Pandas" className={className} />
);

// --- Project Management & Design ---
export const JiraIcon: React.FC<{ className?: string }> = ({ className }) => (
    <img src="https://raw.githubusercontent.com/SatvickMalhotra/My-portfolio/main/Pics/jira.png" alt="Jira" className={className} />
);
export const PowerbiIcon: React.FC<{ className?: string }> = ({ className }) => (
  <img src="https://raw.githubusercontent.com/SatvickMalhotra/My-portfolio/main/Pics/power-bi-icon.png" alt="Power BI" className={className} />
);

// --- Methodologies ---
export const AgileIcon: React.FC<{ className?: string }> = ({ className }) => (
    <img src="https://raw.githubusercontent.com/SatvickMalhotra/My-portfolio/main/Pics/agilee.png" alt="Agile" className={className} />
);
export const ScrumIcon: React.FC<{ className?: string }> = ({ className }) => (
    <img src="https://raw.githubusercontent.com/SatvickMalhotra/My-portfolio/main/Pics/scrum.png" alt="Scrum" className={className} />
);

// --- Communication & Social ---
export const SlackIcon: React.FC<{ className?: string }> = ({ className }) => (
    <img src="https://raw.githubusercontent.com/SatvickMalhotra/My-portfolio/main/Pics/slack-icon.png" alt="Slack" className={className} />
);
export const LinkedinIcon: React.FC<{ className?: string }> = ({ className }) => (
    <i className={`devicon-linkedin-plain colored ${className}`}></i>
);
export const WhatsappIcon: React.FC<{ className?: string }> = ({ className }) => (
    <i className={`fa-brands fa-whatsapp ${className}`}></i>
);

// --- General Icons ---
export const MailIcon: React.FC<{ className?: string }> = ({ className }) => (
    <i className={`fa-solid fa-envelope ${className}`}></i>
);
export const CloseIcon: React.FC<{ className?: string }> = ({ className }) => (
    <i className={`fa-solid fa-xmark ${className}`}></i>
);
export const MenuIcon: React.FC<{ className?: string }> = ({ className }) => (
    <i className={`fa-solid fa-bars ${className}`}></i>
);
export const ChevronUpIcon: React.FC<{ className?: string }> = ({ className }) => (
    <i className={`fa-solid fa-chevron-up ${className}`}></i>
);
export const PaletteIcon: React.FC<{ className?: string }> = ({ className }) => (
    <i className={`fa-solid fa-palette ${className}`}></i>
);

// --- Skill Category Icons ---
export const WebDevIcon: React.FC<{ className?: string }> = ({ className }) => (
    <i className={`fa-solid fa-code ${className}`}></i>
);
export const DataAiIcon: React.FC<{ className?: string }> = ({ className }) => (
    <i className={`fa-solid fa-brain ${className}`}></i>
);
export const InfraIcon: React.FC<{ className?: string }> = ({ className }) => (
    <i className={`fa-solid fa-server ${className}`}></i>
);
export const ProductDesignIcon: React.FC<{ className?: string }> = ({ className }) => (
    <i className={`fa-solid fa-compass-drafting ${className}`}></i>
);