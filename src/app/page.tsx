"use client";

import { Header, Footer } from "@/components/layout";
import {
  HeroSection,
  AboutSection,
  ProjectsSection,
  TechnologiesSection,
  ContactSection,
} from "@/components/sections";
import { useGSAPAnimations } from "@/hooks/useGSAPAnimations";
import { AnimatedParticles } from "@/components/ui/AnimatedParticles";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";

export default function Home() {
  const { heroRef } = useGSAPAnimations();

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden transition-colors duration-300">
      <AnimatedParticles />
      <AnimatedBackground />
      <Header />
      <HeroSection heroRef={heroRef} />
      <AboutSection />
      <TechnologiesSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
