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
import Image from "next/image";

interface HeroSectionProps {
  heroRef: React.RefObject<HTMLDivElement | null>;
}

export function HeroSection({ heroRef }: HeroSectionProps) {
  return (
    <section
      id="inicio"
      ref={heroRef}
      className="relative pt-24 pb-32 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center border-b border-purple-900/20"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              {/* Badge */}
              <div className="flex gap-3">
                <div className="hero-badge inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-full text-xs font-medium">
                  <CodeXml className="w-4 h-4 mr-2" />
                  Fullstack
                </div>

                <div className="hero-badge inline-flex items-center px-4 py-2 bg-purple-500/10 border border-purple-500/20 text-purple-400 rounded-full text-xs font-medium">
                  <LaptopMinimal className="w-4 h-4 mr-2" />
                  Eng. Software
                </div>

                <div className="hero-badge inline-flex items-center px-4 py-2 bg-pink-500/10 border border-pink-500/20 text-pink-400 rounded-full text-xs font-medium">
                  <Cpu className="w-4 h-4 mr-2" />
                  Eng. Computação
                </div>
              </div>

              {/* Título principal */}
              <h1 className="hero-title text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Transformando ideias em{" "}
                <span className="relative inline-block">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                    realidade digital
                  </span>
                </span>
              </h1>

              {/* Subtítulo */}
              <p className="hero-subtitle text-xl text-slate-300 leading-relaxed max-w-2xl">
                Desenvolvedor Web Fullstack apaixonado por criar soluções
                inovadoras e experiências digitais excepcionais.
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
                className="hero-cta group inline-flex items-center justify-center px-12 py-3 border-2 border-purple-400 text-purple-400 hover:bg-purple-400/10 font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Ver Projetos
              </Link>
            </div>

            {/* Cards de Estatísticas */}
            <div className="grid grid-cols-3 gap-6 pt-8 animate-on-scroll">
              <div className="text-center p-4 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-purple-500/20">
                <div className="text-3xl font-bold text-blue-400">50+</div>
                <div className="text-sm text-slate-300">Projetos</div>
              </div>
              <div className="text-center p-4 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-purple-500/20">
                <div className="text-3xl font-bold text-purple-400">5+</div>
                <div className="text-sm text-slate-300">Anos Exp.</div>
              </div>
              <div className="text-center p-4 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-purple-500/20">
                <div className="text-3xl font-bold text-pink-400">100%</div>
                <div className="text-sm text-slate-300">Satisfação</div>
              </div>
            </div>
          </div>

          {/* Right Side - Creative Animation */}
          <div className="relative animate-on-scroll">
            <div className="relative w-full h-96 lg:h-[600px] flex items-center justify-center">
              {/* Floating Icons */}
              <div
                className="absolute top-8 left-8 w-12 h-12 bg-gradient-to-br from-blue-600/30 to-slate-700/30 rounded-xl flex items-center justify-center backdrop-blur-sm animate-bounce border border-white/20"
                style={{ animationDuration: "3s" }}
              >
                <Code className="w-6 h-6 text-white" />
              </div>
              <div
                className="absolute top-16 right-12 w-10 h-10 bg-gradient-to-br from-slate-600/30 to-cyan-600/30 rounded-xl flex items-center justify-center backdrop-blur-sm animate-bounce delay-1000 border border-white/20"
                style={{ animationDuration: "3s" }}
              >
                <Database className="w-5 h-5 text-white" />
              </div>
              <div
                className="absolute bottom-16 left-12 w-10 h-10 bg-gradient-to-br from-cyan-600/30 to-blue-700/30 rounded-xl flex items-center justify-center backdrop-blur-sm animate-bounce delay-2000 border border-white/20"
                style={{ animationDuration: "3s" }}
              >
                <Smartphone className="w-5 h-5 text-white" />
              </div>
              <div
                className="absolute bottom-8 right-8 w-12 h-12 bg-gradient-to-br from-blue-700/30 to-slate-800/30 rounded-xl flex items-center justify-center backdrop-blur-sm animate-bounce delay-3000 border border-white/20"
                style={{ animationDuration: "3s" }}
              >
                <Globe className="w-6 h-6 text-white" />
              </div>

              {/* Central Content */}
              <div className="text-center">
                <div className="flex justify-center">
                  <div className="relative">
                    {/* Glow effect behind the image */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600/30 via-slate-700/30 to-cyan-600/30 blur-xl -z-10"></div>
                    <Image
                      src="/foto-matheus.png"
                      alt="Matheus Queiroz"
                      width={450}
                      height={450}
                      className="rounded-full border-4 border-white/30 shadow-2xl animate-float relative z-10"
                      style={{ animationDuration: "3s" }}
                      priority
                    />
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-slate-500/30 rounded-full animate-pulse"></div>
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-cyan-900/30 rounded-full animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-purple-400" />
      </div>

      {/* Custom CSS for smooth floating animation */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }
      `}</style>
    </section>
  );
}
