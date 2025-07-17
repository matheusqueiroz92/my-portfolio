"use client";

import { useState } from "react";
import { Menu, X, Linkedin, Github, Instagram } from "lucide-react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = ["Início", "Sobre Mim", "Projetos", "Contato"];

  const socialLinks = [
    {
      href: "https://linkedin.com/in/matheus-queiroz-dev-web",
      icon: Linkedin,
      color: "hover:text-blue-600",
    },
    {
      href: "https://github.com/matheusqueiroz92",
      icon: Github,
      color: "hover:text-gray-800 dark:hover:text-white",
    },
    {
      href: "https://instagram.com/matheusgiga",
      icon: Instagram,
      color: "hover:text-pink-600",
    },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl dark:bg-slate-900/80 border-b border-slate-200/50 dark:border-slate-700/50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center group">
            <div className="relative">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 transition-all duration-300 group-hover:scale-110">
                MQ
              </div>
              <div className="absolute inset-0 bg-blue-600/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <span className="ml-3 text-lg font-semibold text-slate-800 dark:text-slate-200 transition-colors">
              Matheus Queiroz
            </span>
          </div>

          {/* Menu + Social + Toggle */}
          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex items-center space-x-8">
              {navigationItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "")}`}
                  className="relative text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-colors duration-300 group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </nav>
            <div className="flex items-center space-x-4 ml-6">
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
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-all duration-300 hover:bg-slate-100 dark:hover:bg-slate-800"
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
          <div className="md:hidden py-4 border-t border-slate-200 dark:border-slate-700 animate-in slide-in-from-top-2">
            <nav className="flex flex-col space-y-4">
              {navigationItems.map((item, index) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "")}`}
                  className="text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-colors duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item}
                </a>
              ))}
              <div className="flex items-center space-x-4 pt-4">
                {socialLinks.map((social, index) => (
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
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
