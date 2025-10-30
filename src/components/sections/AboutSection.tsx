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

  return (
    <section
      id="sobre"
      className="relative py-32 px-4 sm:px-6 lg:px-8 border-b border-purple-900/20"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Services */}
          <div className="space-y-8 animate-on-scroll">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold text-white mb-4">
                Serviços que ofereço
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto lg:mx-0 rounded-full"></div>
            </div>

            <div className="space-y-6">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className="group p-6 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-purple-500/20 transition-all duration-300 transform hover:scale-105 hover:shadow-xl animate-on-scroll"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="flex items-start space-x-4">
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {service.title}
                      </h3>
                      <p className="text-slate-300">{service.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - About Me */}
          <div className="space-y-6 animate-on-scroll">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold text-white mb-4">Sobre Mim</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto lg:mx-0 rounded-full"></div>
            </div>

            <div className="space-y-4 text-slate-300 leading-relaxed">
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
                  className="text-blue-400 hover:text-blue-300 underline"
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
              <div className="text-center p-6 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-blue-500/20 hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold text-blue-400">33</div>
                <div className="text-sm text-slate-300">Anos</div>
              </div>
              <div className="text-center p-6 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-purple-500/20 hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold text-purple-400">1</div>
                <div className="text-sm text-slate-300">Filho</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
