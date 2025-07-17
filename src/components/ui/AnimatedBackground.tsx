"use client";

interface AnimatedBackgroundProps {
  floatingElementsRef: React.RefObject<HTMLDivElement | null>;
}

export function AnimatedBackground({
  floatingElementsRef,
}: AnimatedBackgroundProps) {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10"></div>

      {/* Floating Elements with GSAP */}
      <div ref={floatingElementsRef} className="absolute inset-0">
        <div className="floating-element absolute top-20 left-10 w-20 h-20 bg-blue-400/20 rounded-full blur-xl"></div>
        <div className="floating-element absolute top-40 right-20 w-32 h-32 bg-purple-400/20 rounded-full blur-xl"></div>
        <div className="floating-element absolute bottom-40 left-20 w-24 h-24 bg-pink-400/20 rounded-full blur-xl"></div>
        <div className="floating-element absolute bottom-20 right-10 w-16 h-16 bg-indigo-400/20 rounded-full blur-xl"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.3) 1px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>
    </div>
  );
}
