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
  const { heroRef, floatingElementsRef } = useGSAPAnimations();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-black relative overflow-hidden">
      <AnimatedParticles />
      <AnimatedBackground floatingElementsRef={floatingElementsRef} />
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
