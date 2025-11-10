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
      className="relative pt-24 pb-32 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center border-b border-border/60 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              {/* Badge */}
              <div className="flex gap-3">
                <div className="hero-badge inline-flex items-center px-4 py-2 bg-muted/60 border border-border/60 text-muted-foreground rounded-full text-xs font-medium">
                  <CodeXml className="w-4 h-4 mr-2" />
                  Dev Fullstack
                </div>

                <div className="hero-badge inline-flex items-center px-4 py-2 bg-muted/60 border border-border/60 text-muted-foreground rounded-full text-xs font-medium">
                  <LaptopMinimal className="w-4 h-4 mr-2" />
                  Eng. Software
                </div>

                <div className="hero-badge inline-flex items-center px-4 py-2 bg-muted/60 border border-border/60 text-muted-foreground rounded-full text-xs font-medium">
                  <Cpu className="w-4 h-4 mr-2" />
                  Eng. Computação
                </div>
              </div>

              {/* Título principal */}
              <h1 className="hero-title text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                Transformando ideias em{" "}
                <span className="relative inline-block">
                  <span className="text-primary">realidade digital</span>
                </span>
              </h1>

              {/* Subtítulo */}
              <p className="hero-subtitle text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Desenvolvedor Web Fullstack apaixonado por criar soluções
                inovadoras e experiências digitais excepcionais.
              </p>
            </div>

            {/* Botões de ação */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#contato"
                className="hero-cta group inline-flex items-center justify-center px-6 sm:px-10 py-3 bg-primary hover:bg-primary/90 border border-transparent text-primary-foreground font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Entre em Contato
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#projetos"
                className="hero-cta group inline-flex items-center justify-center px-6 sm:px-8 py-3 border border-border text-foreground hover:bg-muted/70 font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Ver Projetos
              </Link>
            </div>

            {/* Cards de Estatísticas */}
            <div className="grid grid-cols-3 gap-6 pt-8 animate-on-scroll">
              <div className="text-center p-4 bg-card/80 backdrop-blur-sm rounded-2xl border border-border/60 transition-colors duration-300">
                <div className="text-3xl font-bold text-foreground">50+</div>
                <div className="text-sm text-muted-foreground">Projetos</div>
              </div>
              <div className="text-center p-4 bg-card/80 backdrop-blur-sm rounded-2xl border border-border/60 transition-colors duration-300">
                <div className="text-3xl font-bold text-foreground">5+</div>
                <div className="text-sm text-muted-foreground">Anos Exp.</div>
              </div>
              <div className="text-center p-4 bg-card/80 backdrop-blur-sm rounded-2xl border border-border/60 transition-colors duration-300">
                <div className="text-3xl font-bold text-foreground">100%</div>
                <div className="text-sm text-muted-foreground">Satisfação</div>
              </div>
            </div>
          </div>

          {/* Right Side - Creative Animation */}
          <div className="relative animate-on-scroll">
            <div className="relative w-full h-96 lg:h-[600px] flex items-center justify-center">
              {/* Floating Icons */}
              <div
                className="absolute top-8 left-8 w-12 h-12 bg-gradient-to-br from-primary/20 to-muted/40 rounded-xl flex items-center justify-center backdrop-blur-sm animate-bounce border border-border/40"
                style={{ animationDuration: "3s" }}
              >
                <Code className="w-6 h-6 text-foreground" />
              </div>
              <div
                className="absolute top-16 right-12 w-10 h-10 bg-gradient-to-br from-primary/20 to-accent/30 rounded-xl flex items-center justify-center backdrop-blur-sm animate-bounce delay-1000 border border-border/40"
                style={{ animationDuration: "3s" }}
              >
                <Database className="w-5 h-5 text-foreground" />
              </div>
              <div
                className="absolute bottom-16 left-12 w-10 h-10 bg-gradient-to-br from-accent/30 to-primary/30 rounded-xl flex items-center justify-center backdrop-blur-sm animate-bounce delay-2000 border border-border/40"
                style={{ animationDuration: "3s" }}
              >
                <Smartphone className="w-5 h-5 text-foreground" />
              </div>
              <div
                className="absolute bottom-8 right-8 w-12 h-12 bg-gradient-to-br from-primary/30 to-muted/40 rounded-xl flex items-center justify-center backdrop-blur-sm animate-bounce delay-3000 border border-border/40"
                style={{ animationDuration: "3s" }}
              >
                <Globe className="w-6 h-6 text-foreground" />
              </div>

              {/* Central Content */}
              <div className="text-center">
                <div className="flex justify-center">
                  <div className="relative">
                    {/* Glow effect behind the image */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/30 via-muted/40 to-accent/30 blur-xl -z-10"></div>
                    <Image
                      src="/foto-matheus.png"
                      alt="Matheus Queiroz"
                      width={450}
                      height={450}
                      className="rounded-full border-4 border-foreground/20 shadow-2xl animate-float relative z-10"
                      style={{ animationDuration: "3s" }}
                      priority
                    />
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-muted/50 rounded-full animate-pulse"></div>
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-accent/40 rounded-full animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-muted-foreground" />
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
