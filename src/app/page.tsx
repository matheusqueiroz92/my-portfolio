"use client";

import { useState } from "react";
import {
  Search,
  Menu,
  X,
  Linkedin,
  Github,
  Instagram,
  MessageCircle,
  Download,
  ExternalLink,
  Mail,
  Phone,
  Send,
} from "lucide-react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md dark:bg-slate-900/80 border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                MQ
              </div>
              <span className="ml-2 text-lg font-semibold text-slate-800 dark:text-slate-200">
                Matheus Queiroz
              </span>
            </div>

            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#inicio"
                className="text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-colors"
              >
                Início
              </a>
              <a
                href="#sobre"
                className="text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-colors"
              >
                Sobre Mim
              </a>
              <a
                href="#projetos"
                className="text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-colors"
              >
                Projetos
              </a>
              <a
                href="#contato"
                className="text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-colors"
              >
                Contato
              </a>
            </nav>

            {/* Search Bar */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Pesquisar..."
                  className="pl-10 pr-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Social Links */}
            <div className="hidden md:flex items-center space-x-4">
              <a
                href="https://linkedin.com/in/matheus-queiroz-dev-web"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/matheusqueiroz92"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-gray-800 dark:text-slate-300 dark:hover:text-white transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/matheusgiga"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-pink-600 dark:text-slate-300 dark:hover:text-pink-400 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-md text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-slate-200 dark:border-slate-700">
              <nav className="flex flex-col space-y-4">
                <a
                  href="#inicio"
                  className="text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-colors"
                >
                  Início
                </a>
                <a
                  href="#sobre"
                  className="text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-colors"
                >
                  Sobre Mim
                </a>
                <a
                  href="#projetos"
                  className="text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-colors"
                >
                  Projetos
                </a>
                <a
                  href="#contato"
                  className="text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-colors"
                >
                  Contato
                </a>
                <div className="flex items-center space-x-4 pt-4">
                  <a
                    href="https://linkedin.com/in/matheus-queiroz-dev-web"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="https://github.com/matheusqueiroz92"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 hover:text-gray-800 dark:text-slate-300 dark:hover:text-white transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href="https://instagram.com/matheusgiga"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 hover:text-pink-600 dark:text-slate-300 dark:hover:text-pink-400 transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-slate-100 leading-tight">
                  Transformando ideias em{" "}
                  <span className="text-blue-600 dark:text-blue-400">
                    realidade digital
                  </span>
                </h1>
                <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
                  Desenvolvedor Fullstack apaixonado por criar soluções
                  inovadoras e experiências digitais excepcionais. Especializado
                  em React, Next.js e Node.js.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contato"
                  className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Entre em Contato
                </a>
                <a
                  href="#projetos"
                  className="inline-flex items-center justify-center px-8 py-3 border border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 dark:text-blue-400 dark:border-blue-400 font-semibold rounded-lg transition-colors duration-200"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Ver Projetos
                </a>
                <a
                  href="/curriculo.pdf"
                  download
                  className="inline-flex items-center justify-center px-8 py-3 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 font-semibold rounded-lg transition-colors duration-200"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Baixar CV
                </a>
              </div>
            </div>

            {/* Right Side - Creative Animation */}
            <div className="relative">
              <div className="relative w-full h-96 lg:h-[500px] bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-500/20"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                  <div className="text-6xl font-bold mb-4">💻</div>
                  <div className="text-2xl font-semibold">
                    Desenvolvimento Web
                  </div>
                  <div className="text-lg opacity-90">Fullstack</div>
                </div>
                {/* Animated elements */}
                <div className="absolute top-4 left-4 w-4 h-4 bg-white/30 rounded-full animate-pulse"></div>
                <div className="absolute top-8 right-8 w-6 h-6 bg-white/20 rounded-full animate-ping"></div>
                <div className="absolute bottom-8 left-8 w-3 h-3 bg-white/40 rounded-full animate-bounce"></div>
                <div className="absolute bottom-4 right-4 w-5 h-5 bg-white/25 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Mim e Serviços */}
      <section
        id="sobre"
        className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Services */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-6">
                Serviços que ofereço
              </h2>

              <div className="space-y-6">
                <div className="p-6 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2">
                    Desenvolvimento Fullstack
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    Criação de sites e aplicações web completas, desde o
                    frontend até o backend, garantindo uma experiência de
                    usuário excepcional.
                  </p>
                </div>

                <div className="p-6 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2">
                    Consultoria Tecnológica
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    Assessoria especializada para empresas que desejam
                    modernizar seus processos digitais e implementar soluções
                    tecnológicas eficientes.
                  </p>
                </div>

                <div className="p-6 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2">
                    Soluções Empresariais
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    Desenvolvimento de sistemas personalizados para otimizar
                    operações empresariais e aumentar a produtividade.
                  </p>
                </div>
              </div>

              {/* Technologies */}
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
                  Tecnologias que domino
                </h3>
                <div className="flex flex-wrap gap-3">
                  {["React", "Next.js", "Node.js", "Express", "TypeScript"].map(
                    (tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Right Side - About Me */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
                Sobre Mim
              </h2>

              <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed">
                <p>
                  Olá! Sou Matheus Queiroz, um desenvolvedor Fullstack
                  apaixonado por tecnologia e inovação. Com 33 anos de idade,
                  sou natural de Itapetinga-Bahia e atualmente resido em Vitória
                  da Conquista-Bahia.
                </p>

                <p>
                  Sou graduado em Engenharia da Computação pela FAINOR e
                  especialista em Engenharia de Software, com vasta experiência
                  no desenvolvimento de aplicações web modernas e escaláveis.
                </p>

                <p>
                  Como pai de família, entendo a importância de criar soluções
                  que realmente fazem a diferença na vida das pessoas e das
                  empresas. Meu objetivo é sempre entregar produtos de alta
                  qualidade que superem as expectativas dos clientes.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="text-center p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    33
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-300">
                    Anos
                  </div>
                </div>
                <div className="text-center p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
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

      {/* Projetos */}
      <section id="projetos" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              Meus Projetos
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              Alguns dos principais projetos que desenvolvi
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Project 1 */}
            <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-4xl mb-2">📅</div>
                  <div className="text-lg font-semibold">M-Agendy</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2">
                  Sistema de Agendamento
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  Plataforma completa de agendamento online com interface
                  moderna e funcionalidades avançadas.
                </p>
                <div className="flex gap-2">
                  <a
                    href="https://m-agendy.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Ver Demo
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center px-4 py-2 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors text-sm"
                  >
                    <Github className="w-4 h-4 mr-1" />
                    Código
                  </a>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-4xl mb-2">🛒</div>
                  <div className="text-lg font-semibold">E-Commerce</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2">
                  Loja Virtual
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  Plataforma de e-commerce completa com sistema de pagamentos e
                  gestão de produtos.
                </p>
                <div className="flex gap-2">
                  <a
                    href="#"
                    className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Ver Demo
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center px-4 py-2 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors text-sm"
                  >
                    <Github className="w-4 h-4 mr-1" />
                    Código
                  </a>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-4xl mb-2">📊</div>
                  <div className="text-lg font-semibold">Dashboard</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2">
                  Painel Administrativo
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  Dashboard interativo com gráficos e métricas para gestão
                  empresarial.
                </p>
                <div className="flex gap-2">
                  <a
                    href="#"
                    className="inline-flex items-center px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors text-sm"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Ver Demo
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center px-4 py-2 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors text-sm"
                  >
                    <Github className="w-4 h-4 mr-1" />
                    Código
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a
              href="/projetos"
              className="inline-flex items-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200"
            >
              Ver Todos os Projetos
              <ExternalLink className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section
        id="contato"
        className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Side - Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-6">
                Entre em Contato
              </h2>
              <p className="text-slate-600 dark:text-slate-300 mb-8">
                Tem um projeto em mente? Vamos conversar sobre como posso ajudar
                a transformar sua ideia em realidade!
              </p>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                    >
                      Nome
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                    >
                      E-mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                  >
                    Assunto
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Qual é o assunto?"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                  >
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    placeholder="Conte-me sobre seu projeto..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Enviar Mensagem
                </button>
              </form>
            </div>

            {/* Right Side - Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-6">
                  Informações de Contato
                </h3>

                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        E-mail
                      </p>
                      <p className="text-slate-900 dark:text-slate-100 font-medium">
                        matheus@example.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        Telefone
                      </p>
                      <p className="text-slate-900 dark:text-slate-100 font-medium">
                        (77) 98833-4370
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                <h4 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3">
                  Conversa Rápida
                </h4>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  Prefere uma conversa mais direta? Entre em contato pelo
                  WhatsApp!
                </p>
                <a
                  href="https://web.whatsapp.com/send/?phone=5577988334370&text=Ol%C3%A1+Matheus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors duration-200"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Conversar no WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 dark:bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <div className="md:col-span-2">
              <div className="flex items-center mb-4">
                <div className="text-2xl font-bold text-blue-400">MQ</div>
                <span className="ml-2 text-lg font-semibold">
                  Matheus Queiroz
                </span>
              </div>
              <p className="text-slate-300 mb-6 max-w-md">
                Desenvolvedor Fullstack apaixonado por criar soluções digitais
                inovadoras que transformam ideias em realidade.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://linkedin.com/in/matheus-queiroz-dev-web"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-blue-400 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/matheusqueiroz92"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://instagram.com/matheusgiga"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-pink-400 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#inicio"
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    Início
                  </a>
                </li>
                <li>
                  <a
                    href="#sobre"
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    Sobre Mim
                  </a>
                </li>
                <li>
                  <a
                    href="#projetos"
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    Projetos
                  </a>
                </li>
                <li>
                  <a
                    href="#contato"
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    Contato
                  </a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Serviços</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    Desenvolvimento Web
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    Consultoria
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    Soluções Empresariais
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    Manutenção
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-8 pt-8 text-center">
            <p className="text-slate-400">
              © 2024 Matheus Queiroz. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
