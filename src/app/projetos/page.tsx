import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";

import { Header, Footer } from "@/components/layout";
import { PROJECTS } from "@/constants/data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Projetos | Matheus Queiroz",
  description:
    "Explore todos os projetos desenvolvidos por Matheus Queiroz, com detalhes sobre tecnologias utilizadas, objetivos e links para demonstrações.",
};

const FEATURED_TECHS = Array.from(
  new Set(PROJECTS.flatMap((project) => project.technologies))
).slice(0, 10);

export default function ProjetosPage() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <Header />

      <main className="relative pt-28 pb-24">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-transparent dark:from-primary/10 dark:via-accent/5 opacity-60" />
          <div
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, var(--background-grid-color) 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <section className="relative px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <Link
                href="/#projetos"
                className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Voltar para a página inicial
              </Link>
              <div className="text-sm text-muted-foreground">
                {PROJECTS.length} projetos cadastrados
              </div>
            </div>

            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-muted-foreground">
                Portfólio completo
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Construindo experiências digitais de ponta a ponta
              </h1>
              <p className="max-w-3xl text-lg text-muted-foreground leading-relaxed">
                Abaixo você encontra uma visão detalhada dos principais projetos
                desenvolvidos por Matheus Queiroz. Cada solução foi criada com
                foco em performance, escalabilidade e design centrado no
                usuário, utilizando as tecnologias mais adequadas para cada
                desafio.
              </p>
              <div className="flex flex-wrap gap-2">
                {FEATURED_TECHS.map((tech) => (
                  <Badge
                    key={tech}
                    variant="outline"
                    className="border-border/70 bg-card/80 text-foreground/80"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="relative mt-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2">
            {PROJECTS.map((project) => {
              const hasCodeLink = Boolean(
                project.codeLink &&
                  project.codeLink !== "#" &&
                  project.codeLink !== ""
              );

              return (
                <article
                  key={project.id}
                  className="group relative overflow-hidden rounded-3xl border border-border/60 bg-card/80 backdrop-blur-md transition-all duration-300 hover:border-primary/50 hover:shadow-[0_25px_60px_rgba(0,231,255,0.12)]"
                >
                  <div
                    className={`absolute inset-0 opacity-10 transition-opacity duration-300 group-hover:opacity-20 bg-gradient-to-br ${project.gradient}`}
                  />
                  <div className="relative flex h-full flex-col gap-8 p-8">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-background/70 text-3xl shadow-inner">
                        {project.icon}
                      </div>
                      <Badge className="bg-primary/10 text-primary border border-primary/30 shadow-none">
                        {project.subtitle}
                      </Badge>
                    </div>

                    <div className="space-y-3">
                      <h2 className="text-2xl font-bold text-foreground">
                        {project.title}
                      </h2>
                      <p className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={`${project.id}-${tech}`}
                          variant="outline"
                          className="border-border/70 bg-background/60 text-foreground/70"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-3 pt-2">
                      <Button
                        asChild
                        className="bg-primary text-primary-foreground hover:bg-primary/90"
                      >
                        <Link
                          href={project.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4" />
                          Ver demonstração
                        </Link>
                      </Button>

                      <Button
                        asChild={hasCodeLink}
                        variant="outline"
                        className="border-border/70 bg-background/70 hover:bg-background/90"
                        disabled={!hasCodeLink}
                      >
                        {hasCodeLink ? (
                          <Link
                            href={project.codeLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="h-4 w-4" />
                            Ver repositório
                          </Link>
                        ) : (
                          <span className="inline-flex items-center gap-2 text-muted-foreground">
                            <Github className="h-4 w-4" />
                            Repositório privado
                          </span>
                        )}
                      </Button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
