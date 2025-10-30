import {
  PersonalInfo,
  SocialLink,
  Service,
  Technology,
  Project,
  Stat,
  ContactInfo,
  NavigationItem,
  ThemeConfig,
  SiteConfig,
} from "@/types";

export const PERSONAL_INFO: PersonalInfo = {
  name: "Matheus Queiroz",
  age: 33,
  children: 1,
  birthDate: "13/05/1992",
  education: "Graduado em Engenharia da Computação pela FAINOR",
  specialization: "Especialista em Engenharia de Software",
  profession: "Desenvolvedor Web Fullstack",
  origin: "Itapetinga-Bahia",
  residence: "Vitória da Conquista-Bahia",
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/matheus-queiroz-dev-web",
    icon: "Linkedin",
    color: "hover:text-blue-600",
  },
  {
    name: "GitHub",
    url: "https://github.com/matheusqueiroz92",
    icon: "Github",
    color: "hover:text-gray-800 dark:hover:text-white",
  },
  {
    name: "Instagram",
    url: "https://instagram.com/matheusgiga",
    icon: "Instagram",
    color: "hover:text-pink-600",
  },
];

export const SERVICES: Service[] = [
  {
    id: "fullstack",
    title: "Desenvolvimento Fullstack",
    description:
      "Criação de sites e aplicações web completas, desde o frontend até o backend, garantindo uma experiência de usuário excepcional.",
    icon: "Code",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: "consulting",
    title: "Consultoria Tecnológica",
    description:
      "Assessoria especializada para empresas que desejam modernizar seus processos digitais e implementar soluções tecnológicas eficientes.",
    icon: "Zap",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    id: "enterprise",
    title: "Soluções Empresariais",
    description:
      "Desenvolvimento de sistemas personalizados para otimizar operações empresariais e aumentar a produtividade.",
    icon: "Globe",
    gradient: "from-green-500 to-teal-500",
  },
];

export const TECHNOLOGIES: Technology[] = [
  // Frontend
  { name: "React", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "Vue.js", category: "frontend" },
  { name: "Angular", category: "frontend" },
  { name: "HTML5", category: "frontend" },
  { name: "CSS3", category: "frontend" },
  { name: "JavaScript", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "Shadcn/UI", category: "frontend" },
  { name: "Material-UI", category: "frontend" },
  // Backend
  { name: "Node.js", category: "backend" },
  { name: "Express", category: "backend" },
  { name: "NestJS", category: "backend" },
  { name: "Python", category: "backend" },
  { name: "FastAPI", category: "backend" },
  { name: "PHP", category: "backend" },
  { name: "Laravel", category: "backend" },
  { name: "JWT", category: "backend" },
  // Database
  { name: "MongoDB", category: "database" },
  { name: "MySQL", category: "database" },
  { name: "PostgreSQL", category: "database" },
  { name: "SQLite", category: "database" },
  { name: "Firebase", category: "database" },
  { name: "Redis", category: "database" },
  // Tools & DevOps
  { name: "Git", category: "tools" },
  { name: "GitHub", category: "tools" },
  { name: "GitLab", category: "tools" },
  { name: "Docker", category: "tools" },
  { name: "Vercel", category: "tools" },
  { name: "AWS", category: "tools" },
  { name: "Linux", category: "tools" },
  { name: "NPM", category: "tools" },
  { name: "Yarn", category: "tools" },
  { name: "Webpack", category: "tools" },
  { name: "ESLint", category: "tools" },
  { name: "Prettier", category: "tools" },
];

export const PROJECTS: Project[] = [
  {
    id: "m-agendy",
    title: "M-Agendy",
    subtitle: "Sistema de Agendamento",
    description:
      "Plataforma completa de agendamento online com interface moderna e funcionalidades avançadas.",
    icon: "📅",
    gradient: "from-blue-500 to-purple-600",
    demoLink: "https://m-agendy.vercel.app",
    codeLink: "#",
    demoColor: "bg-blue-600 hover:bg-blue-700",
    technologies: ["React", "Next.js", "TypeScript"],
  },
  {
    id: "m-finnance-ai",
    title: "M-Finance-AI",
    subtitle: "Gerenciamento Financeiro",
    description:
      "Plataforma de gerenciamento financeiro com IA para análise de dados e tomada de decisão.",
    icon: "💰",
    gradient: "from-green-500 to-teal-600",
    demoLink: "https://m-finnance-ai.vercel.app",
    codeLink: "#",
    demoColor: "bg-green-600 hover:bg-green-700",
    technologies: [
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "React",
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Shadcn/UI",
    ],
  },
  {
    id: "app-oticas-queiroz",
    title: "App Oticas Queiroz",
    subtitle: "Sistema de Gestão completo das Óticas Queiroz",
    description:
      "Sistema de gestão para otimizar a gestão de produtos e serviços das Óticas Queiroz.",
    icon: "👓",
    gradient: "from-orange-500 to-red-600",
    demoLink: "https://app.oticasqueiroz.com.br",
    codeLink: "#",
    demoColor: "bg-orange-600 hover:bg-orange-700",
    technologies: [
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "React",
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Shadcn/UI",
    ],
  },
];

export const STATS: Stat[] = [
  {
    value: "50+",
    label: "Projetos",
    color: "text-blue-600 dark:text-blue-400",
  },
  {
    value: "5+",
    label: "Anos Exp.",
    color: "text-purple-600 dark:text-purple-400",
  },
  {
    value: "100%",
    label: "Satisfação",
    color: "text-pink-600 dark:text-pink-400",
  },
];

export const CONTACT_INFO: ContactInfo = {
  email: "matheus@example.com",
  phone: "(77) 98833-4370",
  whatsapp:
    "https://web.whatsapp.com/send/?phone=5577988334370&text=Ol%C3%A1+Matheus",
};

export const NAVIGATION_ITEMS: NavigationItem[] = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre Mim", href: "#sobre" },
  { label: "Projetos", href: "#projetos" },
  { label: "Contato", href: "#contato" },
];

export const THEME_CONFIG: ThemeConfig = {
  primaryColor: "#3b82f6",
  secondaryColor: "#8b5cf6",
  accentColor: "#ec4899",
  backgroundColor: "#f8fafc",
};

export const SITE_CONFIG: SiteConfig = {
  title: "Matheus Queiroz - Desenvolvedor Fullstack",
  description:
    "Portfólio profissional de Matheus Queiroz, desenvolvedor Fullstack especializado em React, Next.js e Node.js.",
  author: "Matheus Queiroz",
  theme: THEME_CONFIG,
  socialLinks: SOCIAL_LINKS,
  contactInfo: CONTACT_INFO,
};
