"use client";

import { Send, Mail, Phone, MessageCircle } from "lucide-react";

export function ContactSection() {
  return (
    <section
      id="contato"
      className="relative py-16 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Side - Contact Form */}
          <div className="animate-on-scroll">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-6">
              Entre em Contato
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mb-8">
              Tem um projeto em mente? Vamos conversar sobre como posso ajudar a
              transformar sua ideia em realidade!
            </p>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="group">
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
                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl bg-white/70 dark:bg-slate-800/70 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm transition-all duration-300 group-hover:border-blue-400"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div className="group">
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
                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl bg-white/70 dark:bg-slate-800/70 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm transition-all duration-300 group-hover:border-blue-400"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div className="group">
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
                  className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl bg-white/70 dark:bg-slate-800/70 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm transition-all duration-300 group-hover:border-blue-400"
                  placeholder="Qual é o assunto?"
                />
              </div>

              <div className="group">
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
                  className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl bg-white/70 dark:bg-slate-800/70 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm transition-all duration-300 group-hover:border-blue-400 resize-none"
                  placeholder="Conte-me sobre seu projeto..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                <Send className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Enviar Mensagem
              </button>
            </form>
          </div>

          {/* Right Side - Contact Info */}
          <div className="space-y-8 animate-on-scroll">
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-6">
                Informações de Contato
              </h3>

              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 bg-white/50 dark:bg-slate-800/50 rounded-xl backdrop-blur-sm border border-white/20 dark:border-slate-700/20 hover:scale-105 transition-transform duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
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

                <div className="flex items-center space-x-4 p-4 bg-white/50 dark:bg-slate-800/50 rounded-xl backdrop-blur-sm border border-white/20 dark:border-slate-700/20 hover:scale-105 transition-transform duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
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

            <div className="p-6 bg-gradient-to-br from-green-500/10 to-teal-500/10 rounded-2xl border border-green-200/20 dark:border-green-800/20 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
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
                className="group inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                <MessageCircle className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Conversar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
