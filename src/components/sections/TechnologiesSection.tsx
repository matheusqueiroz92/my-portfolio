"use client";

import { Code, Database, Server, Wrench } from "lucide-react";
import { TECHNOLOGIES } from "@/constants/data";

const categoryConfig = {
  frontend: {
    icon: Code,
    title: "Frontend",
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-500/10 to-cyan-500/10",
    borderColor: "border-blue-500/20",
  },
  backend: {
    icon: Server,
    title: "Backend",
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-500/10 to-pink-500/10",
    borderColor: "border-purple-500/20",
  },
  database: {
    icon: Database,
    title: "Database",
    gradient: "from-green-500 to-emerald-500",
    bgGradient: "from-green-500/10 to-emerald-500/10",
    borderColor: "border-green-500/20",
  },
  tools: {
    icon: Wrench,
    title: "Tools & DevOps",
    gradient: "from-orange-500 to-red-500",
    bgGradient: "from-orange-500/10 to-red-500/10",
    borderColor: "border-orange-500/20",
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
      className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-20 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Tecnologias
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
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
                className={`animate-on-scroll bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border ${config.borderColor} hover:border-opacity-50 transition-all duration-300 hover:scale-[1.02]`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${config.gradient} rounded-xl flex items-center justify-center`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      {config.title}
                    </h3>
                    <div
                      className={`h-1 w-20 bg-gradient-to-r ${config.gradient} rounded-full`}
                    ></div>
                  </div>
                </div>

                {/* Technologies Grid */}
                <div className="grid grid-cols-3 gap-3">
                  {technologies.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className={`relative group bg-gradient-to-r ${config.bgGradient} border ${config.borderColor} rounded-lg p-3 text-center cursor-pointer hover:scale-110 transition-all duration-300 overflow-hidden`}
                    >
                      <div className="relative z-10">
                        <p className="text-sm font-medium text-white">
                          {tech.name}
                        </p>
                      </div>
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${config.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                      ></div>
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
