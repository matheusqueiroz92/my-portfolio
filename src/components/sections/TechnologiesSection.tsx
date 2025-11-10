"use client";

import { Code, Database, Server, Wrench } from "lucide-react";
import { TECHNOLOGIES } from "@/constants/data";

const categoryConfig = {
  frontend: {
    icon: Code,
    title: "Frontend",
  },
  backend: {
    icon: Server,
    title: "Backend",
  },
  database: {
    icon: Database,
    title: "Database",
  },
  tools: {
    icon: Wrench,
    title: "Tools & DevOps",
  },
};

export function TechnologiesSection() {
  // Group technologies by category
  const groupedTech = TECHNOLOGIES.reduce((acc, tech) => {
    if (!acc[tech.category]) {
      acc[tech.category] = [];
    }
    acc[tech.category].push(tech);
    return acc;
  }, {} as Record<string, typeof TECHNOLOGIES>);

  return (
    <section
      id="tecnologias"
      className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-border/60 transition-colors duration-300"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-muted/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-muted/40 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-20 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Tecnologias
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Domino uma ampla gama de tecnologias modernas para criar soluções
            completas e escaláveis
          </p>
        </div>

        {/* Technology Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(categoryConfig).map(([key, config], index) => {
            const Icon = config.icon;
            const technologies = groupedTech[key] || [];

            return (
              <div
                key={key}
                className={`animate-on-scroll bg-card/80 backdrop-blur-sm rounded-2xl p-8 border border-border/60 hover:border-primary/40 transition-all duration-300 hover:scale-[1.02]`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-muted/70 rounded-xl flex items-center justify-center">
                    <Icon className="w-6 h-6 text-foreground" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">
                      {config.title}
                    </h3>
                    <div className="h-1 w-20 bg-primary/60 rounded-full"></div>
                  </div>
                </div>

                {/* Technologies Grid */}
                <div className="grid grid-cols-3 gap-3">
                  {technologies.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className="relative group bg-muted/60 border border-border/60 rounded-lg p-3 text-center cursor-pointer hover:scale-110 transition-all duration-300 overflow-hidden"
                    >
                      <div className="relative z-10">
                        <p className="text-sm font-medium text-foreground">
                          {tech.name}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
