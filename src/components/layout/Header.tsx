"use client";

import { useState } from "react";
import { Menu, X, Linkedin, Github, Instagram, FileDown } from "lucide-react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import Image from "next/image";
import LogoDark from "../../../public/logo-matheus-dev.png";
import LogoLight from "../../../public/logo-matheus-dev-escura.png";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = ["Início", "Sobre Mim", "Projetos", "Contato"];

  const socialLinks = [
    {
      href: "https://linkedin.com/in/matheus-queiroz-dev-web",
      icon: Linkedin,
      color: "hover:text-blue-600",
      label: "LinkedIn",
    },
    {
      href: "https://github.com/matheusqueiroz92",
      icon: Github,
      color: "hover:text-gray-800 dark:hover:text-white",
      label: "GitHub",
    },
    {
      href: "https://instagram.com/matheusgiga",
      icon: Instagram,
      color: "hover:text-pink-600",
      label: "Instagram",
    },
    {
      href: "/curriculo.pdf",
      icon: FileDown,
      color: "hover:text-gray-800 dark:hover:text-white",
      download: true,
      label: "Currículo",
    },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/60 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="transition-transform duration-300 hover:scale-110 flex items-center">
            <Image
              src={LogoLight}
              alt="Logo Matheus Queiroz"
              width={150}
              height={100}
              priority
              className="block dark:hidden h-auto w-[150px]"
            />
            <Image
              src={LogoDark}
              alt="Logo Matheus Queiroz"
              width={150}
              height={100}
              priority
              className="hidden dark:block h-auto w-[150px]"
            />
          </div>

          {/* Menu Centralizado */}
          <nav className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
            {navigationItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "")}`}
                className="relative text-muted-foreground hover:text-foreground transition-colors duration-300 group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary/80 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          {/* Social + Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            {socialLinks.map((social) => (
              <Tooltip key={social.href}>
                <TooltipTrigger asChild>
                  <a
                    href={social.href}
                    target={social.download ? "_self" : "_blank"}
                    rel={social.download ? undefined : "noopener noreferrer"}
                    download={
                      social.download
                        ? "curriculo-matheus-queiroz.pdf"
                        : undefined
                    }
                    className="text-muted-foreground transition-all duration-300 hover:scale-110 hover:text-foreground"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                </TooltipTrigger>
                <TooltipContent side="bottom">{social.label}</TooltipContent>
              </Tooltip>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-muted-foreground hover:text-foreground transition-all duration-300"
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
          <div className="md:hidden py-6 border-t border-border/60 bg-background/95 animate-in slide-in-from-top-2 transition-colors duration-300">
            <nav className="flex flex-col space-y-6">
              {navigationItems.map((item, index) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "")}`}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-center"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item}
                </a>
              ))}
              <div className="flex items-center justify-center space-x-6 pt-6">
                {socialLinks.map((social) => (
                  <Tooltip key={social.href}>
                    <TooltipTrigger asChild>
                      <a
                        href={social.href}
                        target={social.download ? "_self" : "_blank"}
                        rel={
                          social.download ? undefined : "noopener noreferrer"
                        }
                        download={
                          social.download
                            ? "curriculo-matheus-queiroz.pdf"
                            : undefined
                        }
                        className="text-muted-foreground transition-all duration-300 hover:scale-110 hover:text-foreground"
                      >
                        <social.icon className="w-6 h-6" />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent side="bottom">
                      {social.label}
                    </TooltipContent>
                  </Tooltip>
                ))}
                <ThemeToggle />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
