"use client";

import { ExternalLink, Github, ArrowRight } from "lucide-react";

export function ProjectsSection() {
  const projects = [
    {
      title: "M-Agendy",
      subtitle: "Sistema de Agendamento",
      description:
        "Plataforma completa de agendamento online com interface moderna e funcionalidades avançadas.",
      icon: "📅",
      demoLink: "https://m-agendy.vercel.app",
    },
    {
      title: "E-Commerce",
      subtitle: "Loja Virtual",
      description:
        "Plataforma de e-commerce completa com sistema de pagamentos e gestão de produtos.",
      icon: "🛒",
      demoLink: "#",
    },
    {
      title: "Dashboard",
      subtitle: "Painel Administrativo",
      description:
        "Dashboard interativo com gráficos e métricas para gestão empresarial.",
      icon: "📊",
      demoLink: "#",
    },
  ];

  return (
    <section
      id="projetos"
      className="relative py-32 px-4 sm:px-6 lg:px-8 border-b border-border/60 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Meus Projetos
          </h2>
          <div className="w-20 h-1 bg-primary/60 mx-auto rounded-full"></div>
          <p className="text-xl text-muted-foreground mt-4">
            Alguns dos principais projetos que desenvolvi
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-card/80 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 backdrop-blur-sm border border-border/60 animate-on-scroll"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="h-48 bg-muted/60 flex items-center justify-center relative overflow-hidden">
                <div className="text-foreground text-center relative z-10 transition-colors duration-300">
                  <div className="text-5xl mb-2 group-hover:scale-110 transition-transform duration-300">
                    {project.icon}
                  </div>
                  <div className="text-xl font-semibold">{project.title}</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {project.subtitle}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex gap-2">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg transition-all duration-300 text-sm group-hover:scale-105"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Ver Demo
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center px-4 py-2 border border-border text-foreground rounded-lg hover:bg-muted/70 transition-all duration-300 text-sm group-hover:scale-105"
                  >
                    <Github className="w-4 h-4 mr-1" />
                    Código
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center animate-on-scroll">
          <a
            href="/projetos"
            className="group inline-flex items-center px-8 py-4 bg-primary hover:bg-primary/90 border border-transparent text-primary-foreground font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            Ver Todos os Projetos
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
