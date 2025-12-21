"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { InfoSection } from "@/components/sections/InfoSection";

export default function InfoPageClient() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    (context) => {
      const q = context.selector;

      if (!q) return;

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      const title = q(".anim-title");
      const subtitle = q(".anim-subtitle");
      const items = q(".anim-item");
      const icons = q(".anim-icon");
      const texts = q(".anim-text");

      /* Defensive guard — avoids silent failures */
      if (!items.length) {
        console.warn("GSAP: No .anim-item elements found");
        return;
      }

      if (prefersReducedMotion) {
        gsap.set([title, subtitle, items, icons, texts], {
          opacity: 1,
          y: 0,
          scale: 1,
          rotate: 0,
        });
        return;
      }

      /* Initial states (important for visibility consistency) */
      gsap.set(icons, {
        transformOrigin: "50% 50%",
      });

      /* Master timeline */
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
          duration: 0.9,
        },
      });

      /* Header */
      tl.from(title, {
        opacity: 0,
        y: 50,
      }).from(
        subtitle,
        {
          opacity: 0,
          y: 30,
        },
        "-=0.5"
      );

      /* Block containers */
      tl.from(
        items,
        {
          opacity: 0,
          y: 40,
          stagger: 0.18,
        },
        "-=0.3"
      );

      /* Icon micro-stagger (expressive) */
      tl.from(
        icons,
        {
          opacity: 0,
          scale: 0.6,
          rotate: -12,
          y: 12,
          stagger: {
            each: 0.08,
            from: "start",
          },
          duration: 0.6,
          ease: "elastic.out(1, 0.6)",
        },
        "-=0.55"
      );

      /* Text follow-through */
      tl.from(
        texts,
        {
          opacity: 0,
          y: 16,
          stagger: 0.1,
          duration: 0.5,
        },
        "-=0.45"
      );
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="container mx-auto px-4 py-16" data-anim>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="anim-title text-4xl md:text-5xl font-bold tracking-tighter mb-4">
            Πληροφορίες
          </h1>
          <p className="anim-subtitle text-lg text-foreground/80 max-w-2xl mx-auto">
            Μάθετε περισσότερα για την εταιρεία μας, τις πιστοποιήσεις και το
            ωράριο λειτουργίας.
          </p>
        </div>

        {/* Info Content */}
        <InfoSection />
      </div>
    </div>
  );
}
