// Tipos para dados pessoais
export interface PersonalInfo {
  name: string;
  age: number;
  children: number;
  birthDate: string;
  education: string;
  specialization: string;
  profession: string;
  origin: string;
  residence: string;
}

// Tipos para redes sociais
export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  color: string;
}

// Tipos para serviços
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  gradient: string;
}

// Tipos para tecnologias
export interface Technology {
  name: string;
  category: "frontend" | "backend" | "tools";
}

// Tipos para projetos
export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  gradient: string;
  demoLink: string;
  codeLink: string;
  demoColor: string;
  technologies: string[];
}

// Tipos para estatísticas
export interface Stat {
  value: string;
  label: string;
  color: string;
}

// Tipos para formulário de contato
export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Tipos para informações de contato
export interface ContactInfo {
  email: string;
  phone: string;
  whatsapp: string;
}

// Tipos para navegação
export interface NavigationItem {
  label: string;
  href: string;
  icon?: string;
}

// Tipos para animações
export interface AnimationConfig {
  delay?: number;
  duration?: number;
  type?: "fade" | "slide" | "scale";
}

// Tipos para configurações do tema
export interface ThemeConfig {
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  backgroundColor: string;
}

// Tipos para configurações do site
export interface SiteConfig {
  title: string;
  description: string;
  author: string;
  theme: ThemeConfig;
  socialLinks: SocialLink[];
  contactInfo: ContactInfo;
}
