"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Hero } from "@/components/sections/Hero";
import { BentoGrid } from "@/components/sections/BentoGrid";
import { AboutSection } from "@/components/sections/AboutSection";
import { ImageShowcase } from "@/components/sections/ImageShowcase";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { CTASection } from "@/components/sections/CTASection";

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Global Page Fade In
    if (pageRef.current) {
      gsap.fromTo(pageRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1.2,
          ease: "power2.out",
          // Ensure it runs even if there are other issues
          onComplete: () => {
            if (pageRef.current) {
              pageRef.current.style.opacity = "1"; // Ensure visibility on completion
            }
          }
        }
      );
    }
  }, []);

  return (
    <main ref={pageRef} className="overflow-hidden">
      <Hero />
      <AboutSection />
      <ImageShowcase />
      <WhyChooseUs />
      <BentoGrid />
      <CTASection />
    </main>
  );
}
