import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Registrar o plugin ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function useGSAPAnimations() {
  const heroRef = useRef<HTMLDivElement>(null);
  const floatingElementsRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animação do hero section
    if (heroRef.current) {
      const tl = gsap.timeline();

      tl.fromTo(
        heroRef.current.querySelector(".hero-title"),
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
      )
        .fromTo(
          heroRef.current.querySelector(".hero-subtitle"),
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
          "-=0.5"
        )
        .fromTo(
          heroRef.current.querySelector(".hero-badge"),
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.6, ease: "back.out(1.7)" },
          "-=0.3"
        )
        .fromTo(
          heroRef.current.querySelectorAll(".hero-cta"),
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power2.out" },
          "-=0.2"
        );
    }

    // Animação dos elementos flutuantes
    if (floatingElementsRef.current) {
      const elements =
        floatingElementsRef.current.querySelectorAll(".floating-element");

      elements.forEach((element, index) => {
        gsap.to(element, {
          y: -20,
          x: Math.sin(index) * 10,
          rotation: 360,
          duration: 3 + index,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: index * 0.5,
        });
      });
    }

    // Animação de partículas
    if (particlesRef.current) {
      const particles = particlesRef.current.querySelectorAll(".particle");

      particles.forEach((particle, index) => {
        gsap.set(particle, {
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          opacity: Math.random() * 0.5 + 0.1,
        });

        gsap.to(particle, {
          y: -100,
          x: Math.random() * 200 - 100,
          opacity: 0,
          duration: 4 + Math.random() * 2,
          repeat: -1,
          ease: "none",
          delay: Math.random() * 2,
        });
      });
    }

    // Animações de scroll para seções
    const sections = document.querySelectorAll(".animate-on-scroll");

    sections.forEach((section) => {
      gsap.fromTo(
        section,
        {
          y: 50,
          opacity: 0,
          scale: 0.95,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Animação do header no scroll
    const header = document.querySelector("header");
    if (header) {
      gsap.to(header, {
        y: -100,
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "+=100",
          scrub: true,
        },
      });
    }

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return {
    heroRef,
    floatingElementsRef,
    particlesRef,
  };
}
