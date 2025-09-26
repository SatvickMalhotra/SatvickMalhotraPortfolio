import React from 'react';

// You can adjust this 'text-5xl' class to make all icons larger or smaller
const iconSize = 'text-5xl';

// --- Programming Languages & Frameworks ---
export const PythonIcon: React.FC<{ className?: string }> = ({ className }) => (
    <i className={`devicon-python-plain colored ${iconSize} ${className}`}></i>
);
export const HtmlIcon: React.FC<{ className?: string }> = ({ className }) => (
    <i className={`devicon-html5-plain colored ${iconSize} ${className}`}></i>
);
export const CssIcon: React.FC<{ className?: string }> = ({ className }) => (
    <i className={`devicon-css3-plain colored ${iconSize} ${className}`}></i>
);
export const JsIcon: React.FC<{ className?: string }> = ({ className }) => (
    <i className={`devicon-javascript-plain colored ${iconSize} ${className}`}></i>
);
export const TypescriptIcon: React.FC<{ className?: string }> = ({ className }) => (
    <i className={`devicon-typescript-plain colored ${iconSize} ${className}`}></i>
);
export const ReactIcon: React.FC<{ className?: string }> = ({ className }) => (
    <i className={`devicon-react-original colored ${iconSize} ${className}`}></i>
);
export const NextjsIcon: React.FC<{ className?: string }> = ({ className }) => (
    <i className={`devicon-nextjs-original text-white ${iconSize} ${className}`}></i>
);

// --- Databases ---
export const SqlIcon: React.FC<{ className?: string }> = ({ className }) => (
    <i className={`devicon-postgresql-plain colored ${iconSize} ${className}`}></i>
);
export const PostgresqlIcon = SqlIcon; // Alias to prevent future errors

// --- DevOps & Cloud ---
export const GithubIcon: React.FC<{ className?: string }> = ({ className }) => (
    <i className={`devicon-github-original ${iconSize} ${className}`}></i>
);
export const GcpIcon: React.FC<{ className?: string }> = ({ className }) => (
    <i className={`devicon-googlecloud-plain colored ${iconSize} ${className}`}></i>
);
export const AwsIcon: React.FC<{ className?: string }> = ({ className }) => (
    <i className={`devicon-amazonwebservices-original colored ${iconSize} ${className}`}></i>
);
export const DockerIcon: React.FC<{ className?: string }> = ({ className }) => (
    <i className={`devicon-docker-plain colored ${iconSize} ${className}`}></i>
);

// --- Data Science & ML ---
export const TensorflowIcon: React.FC<{ className?: string }> = ({ className }) => (
    <i className={`devicon-tensorflow-original colored ${iconSize} ${className}`}></i>
);
export const PytorchIcon: React.FC<{ className?: string }> = ({ className }) => (
    <i className={`devicon-pytorch-plain colored ${iconSize} ${className}`}></i>
);
// REPLACEMENT for Scikit-learn:
export const NumpyIcon: React.FC<{ className?: string }> = ({ className }) => (
    <i className={`devicon-numpy-original colored ${iconSize} ${className}`}></i>
);
export const PandasIcon: React.FC<{ className?: string }> = ({ className }) => (
    <i className={`devicon-pandas-original colored ${iconSize} ${className}`}></i>
);

// --- Project Management & Design ---
export const JiraIcon: React.FC<{ className?: string }> = ({ className }) => (
    <i className={`devicon-jira-plain colored ${iconSize} ${className}`}></i>
);
export const FigmaIcon: React.FC<{ className?: string }> = ({ className }) => (
    <i className={`devicon-figma-plain colored ${iconSize} ${className}`}></i>
);
export const PowerbiIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="50" height="50">
    <title>Microsoft Power BI</title>
    <path d="M1.333 21.333V12h6v9.333z" fill="#F2C811"/><path d="M10 21.333v-6h6v6z" fill="#F2C811"/><path d="M18.667 21.333V2.667h-6v18.666z" fill="#F2C811"/><path d="M10 8.333V2.667H4v5.666z" fill="#F2C811"/>
  </svg>
);

// --- Methodologies ---
export const AgileIcon: React.FC<{ className?: string }> = ({ className }) => (
    <i className={`fa-solid fa-arrows-spin text-blue-500 ${iconSize} ${className}`}></i>
);
export const ScrumIcon: React.FC<{ className?: string }> = ({ className }) => (
    <i className={`fa-solid fa-people-group text-green-500 ${iconSize} ${className}`}></i>
);

// --- Communication & Social ---
// REPLACEMENT for Telegram/Discord:
export const SlackIcon: React.FC<{ className?: string }> = ({ className }) => (
    <i className={`devicon-slack-plain colored ${iconSize} ${className}`}></i>
);
export const LinkedinIcon: React.FC<{ className?: string }> = ({ className }) => (
    <i className={`devicon-linkedin-plain colored ${iconSize} ${className}`}></i>
);

// --- General Icons ---
export const MailIcon: React.FC<{ className?: string }> = ({ className }) => (
    <i className={`fa-solid fa-envelope text-gray-400 ${iconSize} ${className}`}></i>
);
export const CloseIcon: React.FC<{ className?: string }> = ({ className }) => (
    <i className={`fa-solid fa-xmark text-gray-400 ${iconSize} ${className}`}></i>
);
export const ChevronUpIcon: React.FC<{ className?: string }> = ({ className }) => (
    <i className={`fa-solid fa-chevron-up ${className}`}></i>
);