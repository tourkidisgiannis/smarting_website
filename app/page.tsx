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
    const ctx = gsap.context(() => {
      // Global Page Fade In
      gsap.from(pageRef.current, {
        opacity: 0,
        duration: 1.2,
        ease: "power2.out",
      });

      // Scroll Trigger Animations for Sections
      if (pageRef.current) {
        const sections = Array.from(pageRef.current.children);
        sections.forEach((section) => {
          gsap.fromTo(
            section,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: section,
                start: "top 85%", // Start animation when top of section hits 85% of viewport
                toggleActions: "play none none reverse", // Play on enter, reverse on leave back up
              },
            }
          );
        });
      }
    }, pageRef);

    return () => ctx.revert();
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
