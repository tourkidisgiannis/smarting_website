"use client";

import { useRef } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Subcat } from "@/data/categories";

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface SubcategoryListProps {
  subcategories: Subcat[];
  categoryId: string;
}

export function SubcategoryList({
  subcategories,
  categoryId,
}: SubcategoryListProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>(".subcategory-item");

      if (!items.length) return;

      // Entrance animation
      gsap
        .timeline({
          defaults: {
            ease: "power3.out",
            duration: 0.6,
          },
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        })
        .from(items, {
          opacity: 0,
          y: 32,
          scale: 0.96,
          stagger: 0.08,
          willChange: "transform, opacity",
        });

      // Hover micro-interactions (GSAP-controlled)
      items.forEach((item) => {
        const icon = item.querySelector<SVGElement>(".chevron-icon");

        const hoverTl = gsap.timeline({ paused: true });
        hoverTl.to(item, {
          y: -4,
          boxShadow: "0 20px 30px rgba(0,0,0,0.08)",
          duration: 0.25,
          ease: "power2.out",
        });
        hoverTl.to(
          icon,
          {
            x: 4,
            duration: 0.25,
            ease: "power2.out",
          },
          "<"
        );

        item.addEventListener("mouseenter", () => hoverTl.play());
        item.addEventListener("mouseleave", () => hoverTl.reverse());
      });
    }, containerRef);

    return () => ctx.revert();
  }, [subcategories, categoryId]);

  return (
    <div
      ref={containerRef}
      className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
    >
      {subcategories.map((sub) => (
        <Link
          key={sub.id}
          href={`/services/${categoryId}/${sub.id}`}
          className="subcategory-item group relative block rounded-xl border border-border bg-card p-5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          <div className="flex items-start justify-between">
            <h3 className="mb-2 font-semibold text-foreground transition-colors group-hover:text-primary">
              {sub.title}
            </h3>
            <ChevronRight
              className="chevron-icon ml-2 h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary"
              aria-hidden="true"
            />
          </div>

          <p className="text-sm text-muted-foreground line-clamp-2">
            {sub.description}
          </p>
        </Link>
      ))}
    </div>
  );
}
