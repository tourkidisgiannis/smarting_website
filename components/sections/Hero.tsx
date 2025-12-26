"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { CTAButton } from "@/components/ui/CTAButton";
import { CircuitBoard } from "@/components/ui/CircuitBoard";
import { Badge } from "@/components/ui/badge";

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from(".hero-badge", {
        y: -20,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
        clearProps: "all",
      })
        .from(
          ".hero-title",
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
            clearProps: "all",
          },
          "-=0.4"
        )

        .from(
          ".hero-motto",
          {
            y: 20,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
            clearProps: "all",
          },
          "-=0.6"
        )
        .from(
          ".hero-cta",
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power3.out",
            clearProps: "all",
          },
          "-=0.4"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[65vh] flex items-center justify-center overflow-hidden pt-16 pb-16"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Radial Gradient Glow - Linear Style */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/20 blur-[120px] rounded-full pointer-events-none opacity-50" />
        <CircuitBoard />
      </div>

      <div className="container relative z-10 mx-auto px-4 text-center">
        {/* Badge - enhanced */}
        <div className="flex justify-center mb-6 hero-badge">
          <Badge
            variant="outline"
            className="px-4 py-1.5 text-sm gap-2 rounded-full border-primary/20 bg-primary/5 text-primary backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="font-medium text-foreground/80">
              Ηλεκτρολογικές Υπηρεσίες Νέας Γενιάς
            </span>
          </Badge>
        </div>

        <div className="flex justify-center items-center">
          <h1 className="hero-title text-5xl md:text-8xl  lg:text-9xl font-semibold font-display tracking-tighter  mb-6 max-w-5xl mx-auto leading-[1.1] py-8 px-4 text-primary ">
            SMARTING<span>.GR</span>
          </h1>
        </div>

        <p className="hero-motto hero-tagline text-xl md:text-2xl font-medium text-foreground/80 mb-6">
          Έξυπνες Λύσεις, Άμεσα & Αξιόπιστα
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <CTAButton
            action="call"
            size="lg"
            className="hero-cta h-12 px-8 text-lg rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300"
            iconPosition="left"
          >
            Κλήση Τώρα
          </CTAButton>
          <CTAButton
            action="book"
            size="lg"
            variant="secondary"
            className="hero-cta h-12 px-8 text-lg rounded-full border border-white/10 hover:bg-white/5 transition-all duration-300"
            iconPosition="left"
          >
            Κλείστε Ραντεβού
          </CTAButton>
        </div>

        {/* Scroll indicator */}
        {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
          <div className="flex flex-col items-center">
            <span className="text-xs text-foreground/60 mb-2">Κυλήστε προς τα κάτω</span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary w-6 h-6"
            >
              <path d="M12 5v14" />
              <path d="M19 12l-7 7-7-7" />
            </svg>
          </div>
        </div> */}

        {/* Bottom subtle detail */}
        <div className="mt-12 pt-8 border-t border-white/5 mx-auto max-w-sm text-sm text-foreground/60 hero-cta opacity-60">
          <p>Εξυπηρέτηση σε όλη τη Βόρεια Ελλάδα • 24/7 Υποστήριξη</p>
        </div>
      </div>
    </section>
  );
}
