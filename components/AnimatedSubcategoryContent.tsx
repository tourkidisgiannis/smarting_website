"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import type { Category, Subcat } from "@/data/categories";
import { LogoCarousel } from "@/components/LogoCarousel";
import { SubcategoryQA } from "@/components/SubcategoryQA";

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface AnimatedSubcategoryContentProps {
  category: Category;
  sub: Subcat;
  relatedServices: Subcat[];
}

export function AnimatedSubcategoryContent({
  category,
  sub,
  relatedServices,
}: AnimatedSubcategoryContentProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      /* --------------------------- Intro / Header --------------------------- */
      gsap
        .timeline({
          defaults: { ease: "power3.out" },
        })
        .from(".breadcrumb-item", {
          x: -16,
          opacity: 0,
          duration: 0.4,
          stagger: 0.06,
        })
        .from(
          ".anim-title",
          {
            y: 48,
            opacity: 0,
            duration: 0.7,
          },
          "-=0.1"
        )
        .from(
          ".anim-desc",
          {
            y: 24,
            opacity: 0,
            duration: 0.5,
          },
          "-=0.3"
        );

      /* ------------------------------ Hero Image ----------------------------- */
      gsap.from(".anim-image", {
        y: 40,
        opacity: 0,
        scale: 0.97,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".anim-image",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      /* ---------------------------- Logo Carousel ---------------------------- */
      gsap.from(".anim-logos", {
        y: 32,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".anim-logos",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      /* ---------------------------------- QA --------------------------------- */
      gsap.from(".anim-qa", {
        y: 32,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".anim-qa",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      /* ---------------------------------- CTA -------------------------------- */
      gsap.from(".anim-cta", {
        y: 32,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".anim-cta",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      /* -------------------------- Related Services --------------------------- */
      if (relatedServices.length) {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: ".anim-related-title",
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          })
          .from(".anim-related-title", {
            y: 24,
            opacity: 0,
            duration: 0.5,
            ease: "power3.out",
          })
          .from(
            ".anim-related-item",
            {
              y: 24,
              opacity: 0,
              duration: 0.5,
              stagger: 0.08,
              ease: "power3.out",
            },
            "-=0.2"
          );
      }
    }, containerRef);

    return () => ctx.revert();
  }, [sub, relatedServices]);

  return (
    <div ref={containerRef} className="container mx-auto px-4 py-16">
      <div className="mx-auto max-w-4xl">
        {/* -------------------------- Breadcrumbs -------------------------- */}
        <nav
          aria-label="Breadcrumb"
          className="mb-8 flex items-center gap-2 text-sm text-muted-foreground"
        >
          <Link href="/" className="breadcrumb-item hover-link">
            Αρχική
          </Link>
          <ChevronRight className="breadcrumb-item h-4 w-4" />
          <Link href="/services" className="breadcrumb-item hover-link">
            Υπηρεσίες
          </Link>
          <ChevronRight className="breadcrumb-item h-4 w-4" />
          <Link
            href={`/services/${category.id}`}
            className="breadcrumb-item hover-link"
          >
            {category.title}
          </Link>
          <ChevronRight className="breadcrumb-item h-4 w-4" />
          <span className="breadcrumb-item text-foreground" aria-current="page">
            {sub.title}
          </span>
        </nav>

        {/* ---------------------------- Main ---------------------------- */}
        <article>
          <div className="grid gap-8 lg:gap-12 items-start lg:grid-cols-2">
            <header className="order-2 lg:order-1">
              <h1 className="anim-title mb-6 text-3xl font-bold text-foreground md:text-4xl">
                {sub.title}
              </h1>
              <p className="anim-desc text-lg text-foreground/80">
                {sub.description}
              </p>
            </header>

            <figure className="anim-image order-1 lg:order-2 relative aspect-square overflow-hidden rounded-xl border border-border bg-card">
              <Image
                src={sub.image}
                alt={sub.title}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 600px"
                priority
              />
            </figure>
          </div>

          <div className="anim-logos my-12">
            <LogoCarousel subcatId={sub.id} />
          </div>

          <section className="anim-qa">
            <SubcategoryQA subcatId={sub.id} />
          </section>

          <section className="anim-cta my-12 rounded-xl border border-border bg-card p-6 md:p-8">
            <h2 className="mb-2 text-xl font-semibold text-foreground">
              Ενδιαφέρεστε για αυτή την υπηρεσία;
            </h2>
            <p className="mb-4 text-muted-foreground">
              Επικοινωνήστε μαζί μας για δωρεάν εκτίμηση και προσφορά.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-lg bg-primaryTeal px-6 py-3 font-medium text-foreground transition-colors hover:bg-lightTeal"
              >
                Ζητήστε Προσφορά
              </Link>
              <Link
                href={`/services/${category.id}`}
                className="rounded-lg border border-border px-6 py-3 font-medium text-foreground transition-colors hover:bg-card/80"
              >
                Όλες οι Υπηρεσίες
              </Link>
            </div>
          </section>
        </article>

        {relatedServices.length > 0 && (
          <section aria-labelledby="related-services">
            <h2
              id="related-services"
              className="anim-related-title mb-6 text-2xl font-semibold text-foreground"
            >
              Σχετικές Υπηρεσίες
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {relatedServices.map((related) => (
                <Link
                  key={related.id}
                  href={`/services/${category.id}/${related.id}`}
                  className="anim-related-item group rounded-lg border border-border bg-card p-4 transition-colors hover:border-primary/50"
                >
                  <h3 className="mb-1 font-medium text-foreground transition-colors group-hover:text-primary">
                    {related.title}
                  </h3>
                  <p className="line-clamp-2 text-sm text-muted-foreground">
                    {related.description}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
