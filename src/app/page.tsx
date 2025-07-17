"use client";

import { Header, Footer } from "@/components/layout";
import {
  HeroSection,
  AboutSection,
  ProjectsSection,
  ContactSection,
} from "@/components/sections";
import { useGSAPAnimations } from "@/hooks/useGSAPAnimations";
import { AnimatedParticles } from "@/components/ui/AnimatedParticles";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";

export default function Home() {
  const { heroRef, floatingElementsRef } = useGSAPAnimations();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden">
      <AnimatedParticles />
      <AnimatedBackground floatingElementsRef={floatingElementsRef} />
      <Header />
      <HeroSection heroRef={heroRef} />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
