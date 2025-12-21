"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import { Hero } from "@/components/sections/Hero";
import { BentoGrid } from "@/components/sections/BentoGrid";
import { AboutSection } from "@/components/sections/AboutSection";
import { ImageShowcase } from "@/components/sections/ImageShowcase";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { CTASection } from "@/components/sections/CTASection";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function HomePage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      /* -------------------------- Initial Page Reveal ------------------------- */
      gsap.from(pageRef.current, {
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        clearProps: "opacity",
      });

      /* -------------------------- Section Entrances --------------------------- */
      const sections = gsap.utils.toArray<HTMLElement>(".page-section");

      sections.forEach((section) => {
        gsap.from(section, {
          y: 48,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={pageRef} className="overflow-hidden">
      <section className="page-section">
        <Hero />
      </section>

      <section className="page-section">
        <AboutSection />
      </section>

      <section className="page-section">
        <ImageShowcase />
      </section>

      <section className="page-section">
        <WhyChooseUs />
      </section>

      <section className="page-section">
        <BentoGrid />
      </section>

      <section className="page-section">
        <CTASection />
      </section>
    </main>
  );
}
