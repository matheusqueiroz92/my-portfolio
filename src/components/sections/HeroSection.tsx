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
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface HeroSectionProps {
  heroRef: React.RefObject<HTMLDivElement | null>;
}

const HERO_PHRASES = [
  "Soluções Digitais",
  "Aplicações Modernas",
  "Experiências Web",
  "Interfaces Elegantes",
];

export function HeroSection({ heroRef }: HeroSectionProps) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = HERO_PHRASES[phraseIndex];

    if (!isDeleting && displayText === currentPhrase) {
      const timeout = setTimeout(() => setIsDeleting(true), 1500);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && displayText === "") {
      const timeout = setTimeout(() => {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % HERO_PHRASES.length);
      }, 400);
      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(
      () => {
        const nextLength = displayText.length + (isDeleting ? -1 : 1);
        setDisplayText(currentPhrase.substring(0, nextLength));
      },
      isDeleting ? 40 : 90
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, phraseIndex]);

  return (
    <section
      id="inicio"
      ref={heroRef}
      className="relative flex min-h-screen items-center border-b border-border/60 px-4 py-36 transition-colors duration-300 sm:px-6 lg:px-8"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 lg:flex-row lg:items-center">
        <div className="w-full space-y-8 text-left lg:w-1/2">
          <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-muted-foreground">
            <div className="hero-badge inline-flex items-center rounded-full border border-border/60 bg-muted/60 px-4 py-2 gap-2">
              <CodeXml className="h-4 w-4" /> Dev. Fullstack
            </div>
            <div className="hero-badge inline-flex items-center rounded-full border border-border/60 bg-muted/60 px-4 py-2 gap-2">
              <LaptopMinimal className="h-4 w-4" /> Eng. Software
            </div>
            <div className="hero-badge inline-flex items-center rounded-full border border-border/60 bg-muted/60 px-4 py-2 gap-2">
              <Cpu className="h-4 w-4" /> Eng. Computação
            </div>
          </div>

          <h1 className="hero-title text-3xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl min-h-[3.6rem] sm:min-h-[4.2rem]">
            Transformando ideias em{" "}
            <span className="typewriter-wrapper text-primary">
              {displayText}
              <span className="typewriter-cursor" />
            </span>
          </h1>

          <p className="hero-subtitle max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Unindo desenvolvimento fullstack, automação e inteligência
            artificial para criar plataformas inteligentes, performáticas e
            visualmente elegantes.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="#contato"
              className="hero-cta group inline-flex items-center justify-center rounded-full border border-transparent bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all duration-300 hover:scale-[1.03] hover:bg-primary/90 hover:shadow-xl sm:px-10"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Entre em Contato
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="#projetos"
              className="hero-cta group inline-flex items-center justify-center rounded-full border border-border px-6 py-3 font-semibold text-foreground transition-all duration-300 hover:scale-[1.03] hover:bg-muted/70 sm:px-8"
            >
              <ExternalLink className="mr-2 h-5 w-5" />
              Ver Projetos
            </Link>
          </div>
        </div>

        <div className="relative w-full max-w-xl lg:w-1/2">
          <div className="relative flex items-center justify-center">
            <Image
              src="/foto-matheus-portfolio.png"
              alt="Matheus Queiroz"
              width={440}
              height={440}
              priority
              className="hero-photo"
            />

            <div className="absolute -top-10 -left-6 hidden h-14 w-14 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10 backdrop-blur-sm shadow-[0_0_25px_rgba(0,231,255,0.25)] animate-float lg:flex">
              <Code className="h-6 w-6 text-primary" />
            </div>
            <div className="absolute -top-6 -right-4 hidden h-12 w-12 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10 backdrop-blur-sm shadow-[0_0_20px_rgba(0,231,255,0.2)] animate-float delay-100 lg:flex">
              <Database className="h-5 w-5 text-primary" />
            </div>
            <div className="absolute -bottom-10 left-2 hidden h-12 w-12 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10 backdrop-blur-sm shadow-[0_0_20px_rgba(0,231,255,0.2)] animate-float delay-200 lg:flex">
              <Smartphone className="h-5 w-5 text-primary" />
            </div>
            <div className="absolute -bottom-8 -right-6 hidden h-14 w-14 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10 backdrop-blur-sm shadow-[0_0_25px_rgba(0,231,255,0.25)] animate-float delay-300 lg:flex">
              <Globe className="h-6 w-6 text-primary" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <Link
          href="#sobre"
          className="group inline-flex items-center justify-center"
        >
          <ChevronDown className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors duration-300 animate-bounce" />
        </Link>
      </div>

      <style jsx>{`
        .hero-photo {
          border-radius: 32px;
          box-shadow: 0 30px 60px rgba(8, 163, 220, 0.25),
            0 0 40px rgba(0, 231, 255, 0.18);
        }

        .typewriter-cursor {
          display: inline-block;
          margin-left: 0.12rem;
          width: 2px;
          height: 1.1em;
          background: currentColor;
          animation: cursorBlink 1s steps(2, start) infinite;
          vertical-align: baseline;
        }

        .typewriter-wrapper {
          position: relative;
          display: inline-block;
          min-width: clamp(16rem, 26ch, 28rem);
          max-width: 28rem;
          white-space: nowrap;
          min-height: 1em;
          vertical-align: baseline;
        }

        @keyframes cursorBlink {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}
