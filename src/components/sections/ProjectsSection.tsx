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
      gradient: "from-blue-500 to-purple-600",
      demoLink: "https://m-agendy.vercel.app",
      demoColor: "bg-blue-600 hover:bg-blue-700",
    },
    {
      title: "E-Commerce",
      subtitle: "Loja Virtual",
      description:
        "Plataforma de e-commerce completa com sistema de pagamentos e gestão de produtos.",
      icon: "🛒",
      gradient: "from-green-500 to-teal-600",
      demoLink: "#",
      demoColor: "bg-green-600 hover:bg-green-700",
    },
    {
      title: "Dashboard",
      subtitle: "Painel Administrativo",
      description:
        "Dashboard interativo com gráficos e métricas para gestão empresarial.",
      icon: "📊",
      gradient: "from-orange-500 to-red-600",
      demoLink: "#",
      demoColor: "bg-orange-600 hover:bg-orange-700",
    },
  ];

  return (
    <section id="projetos" className="relative py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Meus Projetos
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-xl text-slate-600 dark:text-slate-300 mt-4">
            Alguns dos principais projetos que desenvolvi
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-white/70 dark:bg-slate-800/70 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 backdrop-blur-sm border border-white/20 dark:border-slate-700/20 animate-on-scroll"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div
                className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                <div className="text-white text-center relative z-10">
                  <div className="text-5xl mb-2 group-hover:scale-110 transition-transform duration-300">
                    {project.icon}
                  </div>
                  <div className="text-xl font-semibold">{project.title}</div>
                </div>
                <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full animate-ping"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2">
                  {project.subtitle}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  {project.description}
                </p>
                <div className="flex gap-2">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center px-4 py-2 ${project.demoColor} text-white rounded-lg transition-all duration-300 text-sm group-hover:scale-105`}
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Ver Demo
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center px-4 py-2 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-all duration-300 text-sm group-hover:scale-105"
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
            className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            Ver Todos os Projetos
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
