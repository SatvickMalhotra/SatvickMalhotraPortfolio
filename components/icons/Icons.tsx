import React from 'react';

// You can adjust this 'text-5xl' class to make all icons larger or smaller
const iconSize = 'text-5xl';

// --- Programming Languages & Frameworks ---
export const PythonIcon: React.FC<{ className?: string }> = ({ className }) => (
    <i className={`devicon-python-plain colored ${iconSize} ${className}`}></i>
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
    <i className={`devicon-typescript-plain colored ${iconSize} ${className}`}></i>
);
export const ReactIcon: React.FC<{ className?: string }> = ({ className }) => (
    <i className={`devicon-react-original colored ${iconSize} ${className}`}></i>
);
export const NextjsIcon: React.FC<{ className?: string }> = ({ className }) => (
    <img src="https://raw.githubusercontent.com/SatvickMalhotra/My-portfolio/main/Pics/nextjs-icon.png" alt="Next.js" className={className} />
);

// --- Databases ---
export const SqlIcon: React.FC<{ className?: string }> = ({ className }) => (
    <img src="https://raw.githubusercontent.com/SatvickMalhotra/My-portfolio/main/Pics/sql.png" alt="SQL" className={className} />
);
export const PostgresqlIcon: React.FC<{ className?: string }> = ({ className }) => (
    <i className={`devicon-postgresql-plain colored ${iconSize} ${className}`}></i>
);

// --- DevOps & Cloud ---
export const GithubIcon: React.FC<{ className?: string }> = ({ className }) => (
    <i className={`devicon-github-original ${iconSize} ${className}`}></i>
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
    <i className={`devicon-tensorflow-original colored ${iconSize} ${className}`}></i>
);
export const PytorchIcon: React.FC<{ className?: string }> = ({ className }) => (
    <i className={`devicon-pytorch-plain colored ${iconSize} ${className}`}></i>
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
export const FigmaIcon: React.FC<{ className?: string }> = ({ className }) => (
    <img src="https://raw.githubusercontent.com/SatvickMalhotra/My-portfolio/main/Pics/figma.png" alt="Figma" className={className} />
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
    <i className={`devicon-linkedin-plain colored ${iconSize} ${className}`}></i>
);

// --- General Icons ---
export const MailIcon: React.FC<{ className?: string }> = ({ className }) => (
    <i className={`fa-solid fa-envelope text-[var(--text-muted-color)] ${iconSize} ${className}`}></i>
);
export const CloseIcon: React.FC<{ className?: string }> = ({ className }) => (
    <i className={`fa-solid fa-xmark text-[var(--text-muted-color)] ${iconSize} ${className}`}></i>
);
export const ChevronUpIcon: React.FC<{ className?: string }> = ({ className }) => (
    <i className={`fa-solid fa-chevron-up ${className}`}></i>
);
export const PaletteIcon: React.FC<{ className?: string }> = ({ className }) => (
    <i className={`fa-solid fa-palette ${className}`}></i>
);