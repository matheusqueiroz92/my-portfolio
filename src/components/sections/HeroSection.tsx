"use client";

import {
  MessageCircle,
  ExternalLink,
  ArrowRight,
  ChevronDown,
  Code,
  Database,
  Smartphone,
  Globe,
  CodeXml,
  LaptopMinimal,
  Cpu,
} from "lucide-react";
import Link from "next/link";

interface HeroSectionProps {
  heroRef: React.RefObject<HTMLDivElement | null>;
}

export function HeroSection({ heroRef }: HeroSectionProps) {
  return (
    <section
      id="inicio"
      ref={heroRef}
      className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              {/* Badge */}
              <div className="flex gap-2">
                <div className="hero-badge inline-flex items-center px-4 py-2 bg-blue-300/30 text-indigo-900 dark:bg-blue-950 dark:text-blue-300 rounded-full text-xs font-medium">
                  <CodeXml className="w-4 h-4 mr-2" />
                  Desenvolvedor Fullstack
                </div>

                <div className="hero-badge inline-flex items-center px-4 py-2 bg-sky-300/30 text-indigo-900 dark:bg-indigo-950 dark:text-blue-300 rounded-full text-xs font-medium">
                  <LaptopMinimal className="w-4 h-4 mr-2" />
                  Eng. de Software
                </div>

                <div className="hero-badge inline-flex items-center px-4 py-2 bg-purple-300/30 text-indigo-900 dark:bg-slate-950/30 dark:text-blue-300 rounded-full text-xs font-medium">
                  <Cpu className="w-4 h-4 mr-2" />
                  Eng. da Computação
                </div>
              </div>

              {/* Título principal */}
              <h1 className="hero-title text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-slate-100 leading-tight">
                Transformando ideias em{" "}
                <span className="relative">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-pulse">
                    realidade digital
                  </span>
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full"></div>
                </span>
              </h1>

              {/* Subtítulo */}
              <p className="hero-subtitle text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
                Desenvolvedor Web Fullstack apaixonado por criar soluções
                inovadoras e experiências digitais excepcionais.
                <br />
                Especializado em React, Next.js, Node.js e TypeScript.
              </p>
            </div>

            {/* Botões de ação */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#contato"
                className="hero-cta group inline-flex items-center justify-center px-24 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                <MessageCircle className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Entre em Contato
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#projetos"
                className="hero-cta group inline-flex items-center justify-center px-12 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 dark:text-blue-400 dark:border-blue-400 font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Ver Projetos
              </Link>
            </div>

            {/* Cards de Estatísticas */}
            <div className="grid grid-cols-3 gap-6 pt-8 animate-on-scroll">
              <div className="text-center p-4 bg-white/50 dark:bg-slate-800/50 rounded-full backdrop-blur-sm border border-white/20 dark:border-slate-700/20">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  50+
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-300">
                  Projetos
                </div>
              </div>
              <div className="text-center p-4 bg-white/50 dark:bg-slate-800/50 rounded-full backdrop-blur-sm border border-white/20 dark:border-slate-700/20">
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                  5+
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-300">
                  Anos de Experiência
                </div>
              </div>
              <div className="text-center p-4 bg-white/50 dark:bg-slate-800/50 rounded-full backdrop-blur-sm border border-white/20 dark:border-slate-700/20">
                <div className="text-2xl font-bold text-pink-600 dark:text-pink-400">
                  100%
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-300">
                  Satisfação
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Creative Animation */}
          <div className="relative animate-on-scroll">
            <div className="relative w-full h-96 lg:h-[500px]">
              {/* Main Card */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-600 rounded-3xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-purple-500/20 to-pink-500/20"></div>

                {/* Floating Icons */}
                <div className="absolute top-8 left-8 w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm animate-bounce">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <div className="absolute top-16 right-12 w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm animate-bounce delay-1000">
                  <Database className="w-5 h-5 text-white" />
                </div>
                <div className="absolute bottom-16 left-12 w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm animate-bounce delay-2000">
                  <Smartphone className="w-5 h-5 text-white" />
                </div>
                <div className="absolute bottom-8 right-8 w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm animate-bounce delay-3000">
                  <Globe className="w-6 h-6 text-white" />
                </div>

                {/* Central Content */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                  <div className="text-6xl font-bold mb-4 animate-pulse">
                    💻
                  </div>
                  <div className="text-2xl font-semibold mb-2">
                    Desenvolvimento Web
                  </div>
                  <div className="text-lg opacity-90">Fullstack</div>
                  <div className="mt-4 flex items-center justify-center space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
                    <div className="w-2 h-2 bg-white rounded-full animate-ping delay-300"></div>
                    <div className="w-2 h-2 bg-white rounded-full animate-ping delay-600"></div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-ping"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-400 rounded-full animate-pulse"></div>
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-red-400 rounded-full animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-slate-400" />
      </div>
    </section>
  );
}
