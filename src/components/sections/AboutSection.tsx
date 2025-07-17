"use client";

import { Code, Zap, Globe } from "lucide-react";

export function AboutSection() {
  const services = [
    {
      icon: Code,
      title: "Desenvolvimento Fullstack",
      description:
        "Criação de sites e aplicações web completas, desde o frontend até o backend, garantindo uma experiência de usuário excepcional.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Zap,
      title: "Consultoria Tecnológica",
      description:
        "Assessoria especializada para empresas que desejam modernizar seus processos digitais e implementar soluções tecnológicas eficientes.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Globe,
      title: "Soluções Empresariais",
      description:
        "Desenvolvimento de sistemas personalizados para otimizar operações empresariais e aumentar a produtividade.",
      gradient: "from-green-500 to-teal-500",
    },
  ];

  const technologies = ["React", "Next.js", "Node.js", "Express", "TypeScript"];

  return (
    <section
      id="sobre"
      className="relative py-16 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Services */}
          <div className="space-y-8 animate-on-scroll">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                Serviços que ofereço
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto lg:mx-0 rounded-full"></div>
            </div>

            <div className="space-y-6">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className="group p-6 bg-white/70 dark:bg-slate-800/70 rounded-2xl border border-white/20 dark:border-slate-700/20 backdrop-blur-sm hover:bg-white/90 dark:hover:bg-slate-800/90 transition-all duration-300 transform hover:scale-105 hover:shadow-xl animate-on-scroll"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="flex items-start space-x-4">
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2">
                        {service.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Technologies */}
            <div className="mt-8 animate-on-scroll">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
                Tecnologias que domino
              </h3>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech, index) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium border border-blue-200 dark:border-blue-800 hover:scale-105 transition-transform duration-200"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - About Me */}
          <div className="space-y-6 animate-on-scroll">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                Sobre Mim
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto lg:mx-0 rounded-full"></div>
            </div>

            <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed">
              <p>
                Olá! Sou Matheus Queiroz, um Desenvolvedor Web Fullstack
                apaixonado por tecnologia e inovação. Com 33 anos de idade, sou
                natural de Itapetinga-Bahia e atualmente resido em Vitória da
                Conquista-Bahia e tenho um filho chamado Noah.
              </p>

              <p>
                Sou graduado em Engenharia da Computação e especialista em
                Engenharia de Software, com vasta experiência no desenvolvimento
                de sites e aplicações web modernas e escaláveis. Atualmente,
                trabalho como Desenvolvedor Web Fullstack na empresa{" "}
                <a
                  href="https://www.azworkcenter.com.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300"
                >
                  AZ Work Center
                </a>
                , onde desenvolvo soluções de software para empresas de
                diferentes setores.
              </p>

              <p>
                Com quase 10 anos de experiência, entendo a importância de criar
                soluções que realmente fazem a diferença na vida das pessoas e
                das empresas. Meu objetivo é sempre entregar produtos de alta
                qualidade que superem as expectativas dos clientes.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="text-center p-6 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl border border-blue-200/20 dark:border-blue-800/20 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                  33
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-300">
                  Anos
                </div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl border border-purple-200/20 dark:border-purple-800/20 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                  1
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-300">
                  Filho
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
