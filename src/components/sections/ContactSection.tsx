"use client";

import { Send, Mail, Phone, MessageCircle, User, FileText } from "lucide-react";

export function ContactSection() {
  return (
    <section
      id="contato"
      className="relative py-32 px-4 sm:px-6 lg:px-8 border-b border-border/60 transition-colors duration-300"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-muted/40 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-muted/40 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Panel - Contact Info */}
          <div className="animate-on-scroll">
            <div className="bg-card/80 rounded-2xl p-8 shadow-2xl border border-border/60 transition-colors duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-muted/70 rounded-xl flex items-center justify-center mr-4">
                  <User className="w-6 h-6 text-foreground" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">
                  Entre em contato
                </h2>
              </div>

              <p className="text-muted-foreground mb-8 leading-relaxed">
                Pronto para transformar suas ideias em realidade digital? Nossa
                equipe está à disposição para te ajudar! Entre em contato
                conosco.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-muted-foreground mr-3" />
                  <div>
                    <p className="font-semibold text-foreground">Email</p>
                    <p className="text-muted-foreground">
                      contato@matheusqueiroz.dev.br
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-muted-foreground mr-3" />
                  <div>
                    <p className="font-semibold text-foreground">Telefone</p>
                    <p className="text-muted-foreground">(77) 98833-4370</p>
                  </div>
                </div>
              </div>

              <a
                href="https://web.whatsapp.com/send/?phone=5577988334370&text=Ol%C3%A1+Matheus"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center w-full justify-center px-6 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Right Panel - Contact Form */}
          <div className="animate-on-scroll">
            <div className="bg-card/80 rounded-2xl p-8 shadow-2xl border border-border/60 transition-colors duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-muted/70 rounded-xl flex items-center justify-center mr-4">
                  <FileText className="w-6 h-6 text-foreground" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">
                  Envie uma mensagem
                </h2>
              </div>

              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                Tem um projeto em mente? Vamos conversar, posso te ajudar a
                transformar sua ideia em realidade!
              </p>

              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 border border-border rounded-xl bg-background/80 text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-border rounded-xl bg-background/80 text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-2 border border-border rounded-xl bg-background/80 text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none transition-all duration-300"
                    placeholder="Digite sua mensagem..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full group inline-flex items-center justify-center px-6 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
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
