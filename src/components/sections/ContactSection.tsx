"use client";

import { Send, Mail, Phone, MessageCircle, User, FileText } from "lucide-react";

export function ContactSection() {
  return (
    <section
      id="contato"
      className="relative py-32 px-4 sm:px-6 lg:px-8 border-b border-slate-800/50"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-slate-900/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-slate-900/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Panel - Contact Info */}
          <div className="animate-on-scroll">
            <div className="bg-slate-800/50 rounded-2xl p-8 shadow-2xl border border-slate-700/50">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-slate-700/50 rounded-xl flex items-center justify-center mr-4">
                  <User className="w-6 h-6 text-slate-300" />
                </div>
                <h2 className="text-2xl font-bold text-white">
                  Entre em contato
                </h2>
              </div>

              <p className="text-slate-300 mb-8 leading-relaxed">
                Pronto para transformar suas ideias em realidade digital? Nossa
                equipe está à disposição para te ajudar! Entre em contato
                conosco.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-slate-400 mr-3" />
                  <div>
                    <p className="font-semibold text-slate-300">Email</p>
                    <p className="text-slate-400">
                      contato@matheusqueiroz.dev.br
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-slate-400 mr-3" />
                  <div>
                    <p className="font-semibold text-slate-300">Telefone</p>
                    <p className="text-slate-400">(77) 98833-4370</p>
                  </div>
                </div>
              </div>

              <a
                href="https://web.whatsapp.com/send/?phone=5577988334370&text=Ol%C3%A1+Matheus"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center w-full justify-center px-6 py-4 bg-slate-700 hover:bg-slate-600 border border-slate-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Right Panel - Contact Form */}
          <div className="animate-on-scroll">
            <div className="bg-slate-800/50 rounded-2xl p-8 shadow-2xl border border-slate-700/50">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-slate-700/50 rounded-xl flex items-center justify-center mr-4">
                  <FileText className="w-6 h-6 text-slate-300" />
                </div>
                <h2 className="text-2xl font-bold text-white">
                  Envie uma mensagem
                </h2>
              </div>

              <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                Tem um projeto em mente? Vamos conversar, posso te ajudar a
                transformar sua ideia em realidade!
              </p>

              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-slate-300 mb-2"
                  >
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 border border-slate-700/50 rounded-xl bg-slate-900/50 text-white focus:outline-none focus:ring-2 focus:ring-slate-600 focus:border-transparent transition-all duration-300"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-300 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-slate-700/50 rounded-xl bg-slate-900/50 text-white focus:outline-none focus:ring-2 focus:ring-slate-600 focus:border-transparent transition-all duration-300"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-slate-300 mb-2"
                  >
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-2 border border-slate-700/50 rounded-xl bg-slate-900/50 text-white focus:outline-none focus:ring-2 focus:ring-slate-600 focus:border-transparent resize-none transition-all duration-300"
                    placeholder="Digite sua mensagem..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full group inline-flex items-center justify-center px-6 py-4 bg-slate-700 hover:bg-slate-600 border border-slate-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Enviar mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
