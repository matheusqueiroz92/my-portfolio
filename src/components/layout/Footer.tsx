"use client";

import { Linkedin, Github, Instagram } from "lucide-react";
import Image from "next/image";
import LogoDark from "../../../public/logo-matheus-dev.png";
import LogoLight from "../../../public/logo-matheus-dev-escura.png";
import { useThemeDetection } from "@/hooks/useThemeDetection";

export function Footer() {
  const { isDark, mounted } = useThemeDetection();

  const socialLinks = [
    {
      href: "https://linkedin.com/in/matheus-queiroz-dev-web",
      icon: Linkedin,
      color: "hover:text-blue-400",
    },
    {
      href: "https://github.com/matheusqueiroz92",
      icon: Github,
      color: "hover:text-white",
    },
    {
      href: "https://instagram.com/matheusgiga",
      icon: Instagram,
      color: "hover:text-pink-400",
    },
  ];

  const quickLinks = ["Início", "Sobre Mim", "Projetos", "Contato"];
  const services = [
    "Desenvolvimento Web",
    "Consultoria",
    "Soluções Empresariais",
    "Manutenção",
  ];

  return (
    <footer className="relative bg-gradient-to-br from-slate-100 via-slate-200 to-white dark:from-slate-900 dark:via-slate-800 dark:to-black text-slate-800 dark:text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 dark:from-blue-500/5 dark:via-purple-500/5 dark:to-pink-500/5"></div>
      <div className="max-w-7xl mx-auto relative">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              {mounted && (
                <div className="transition-transform duration-300 hover:scale-110">
                  <Image
                    src={isDark ? LogoDark : LogoLight}
                    alt="Logo"
                    width={240}
                    height={80}
                    priority
                    className="block dark:hidden"
                  />
                  <Image
                    src={LogoDark}
                    alt="Logo"
                    width={240}
                    height={80}
                    priority
                    className="hidden dark:block"
                  />
                </div>
              )}
            </div>
            <p className="text-slate-600 dark:text-slate-300 mb-6 max-w-md">
              Desenvolvedor Fullstack apaixonado por criar soluções digitais
              inovadoras que transformam ideias em realidade.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-slate-600 dark:text-slate-300 transition-all duration-300 hover:scale-110 ${social.color}`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(" ", "")}`}
                    className="text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-300 dark:border-slate-800 mt-8 pt-8 text-center">
          <p className="text-slate-500 dark:text-slate-400">
            © {new Date().getFullYear()} Matheus Queiroz. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
