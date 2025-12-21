"use client";

import { useRef } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import { CategoriesAccordion } from "@/components/CategoryAccordion";
import { SubcategoryList } from "@/components/SubcategoryList";
import { categories, Category } from "@/data/categories";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/* -------------------------------------------------------------------------- */
/* Utilities                                                                  */
/* -------------------------------------------------------------------------- */

const splitText = (text: string) =>
  text.split("").map((char, i) => (
    <span key={i} className="char inline-block">
      {char === " " ? "\u00A0" : char}
    </span>
  ));

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

interface AnimatedCategoriesContentProps {
  initialCategories?: Category[];
}

export function AnimatedCategoriesContent({
  initialCategories,
}: AnimatedCategoriesContentProps = {}) {
  const containerRef = useRef<HTMLDivElement>(null);

  const showFullHeader =
    !initialCategories || initialCategories.length === categories.length;

  useGSAP(() => {
    const ctx = gsap.context(() => {
      /* ------------------------------ Header ------------------------------ */
      if (showFullHeader) {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 75%",
              toggleActions: "play none none reverse",
            },
            defaults: {
              ease: "power3.out",
            },
          })
          .from(".char", {
            y: 48,
            opacity: 0,
            stagger: 0.025,
            duration: 0.6,
            willChange: "transform, opacity",
          })
          .from(
            ".anim-desc",
            {
              y: 24,
              opacity: 0,
              duration: 0.5,
            },
            "-=0.3"
          );
      }

      /* -------------------------- Accordion Items -------------------------- */
      const accordionItems = gsap.utils.toArray<HTMLElement>(".accordion-item");

      if (accordionItems.length) {
        gsap.from(accordionItems, {
          x: -40,
          opacity: 0,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: accordionItems[0],
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      }

      /* ------------------------------- CTA -------------------------------- */
      if (showFullHeader) {
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
      }
    }, containerRef);

    return () => ctx.revert();
  }, [initialCategories, showFullHeader]);

  return (
    <div ref={containerRef} className="container mx-auto px-4 py-16">
      <div className="mx-auto max-w-4xl">
        {/* -------------------------- Breadcrumbs -------------------------- */}
        <nav
          aria-label="Breadcrumb"
          className="mb-8 flex items-center gap-2 text-sm text-muted-foreground"
        >
          <Link href="/" className="hover-link">
            Αρχική
          </Link>

          <ChevronRight className="h-4 w-4" aria-hidden="true" />

          <Link href="/services" className="hover-link">
            Υπηρεσίες
          </Link>

          {!showFullHeader &&
            initialCategories &&
            initialCategories.length === 1 && (
              <>
                <ChevronRight className="h-4 w-4" aria-hidden="true" />
                <span className="text-foreground" aria-current="page">
                  {initialCategories[0].title}
                </span>
              </>
            )}
        </nav>

        {/* ---------------------------- Header ---------------------------- */}
        <header className="mb-12 text-center">
          <h1 className="anim-title mb-4 overflow-hidden text-4xl font-bold tracking-wide text-foreground md:text-5xl">
            {showFullHeader
              ? splitText("Οι Υπηρεσίες μας")
              : splitText(initialCategories![0].title)}
          </h1>

          <p className="anim-desc mx-auto max-w-2xl text-lg text-foreground/80">
            {showFullHeader
              ? "Εξερευνήστε την πλήρη γκάμα υπηρεσιών μας. Κάντε κλικ σε κάθε κατηγορία για να δείτε τις επιμέρους υπηρεσίες."
              : `Εξερευνήστε τις υπηρεσίες στην κατηγορία ${
                  initialCategories![0].title
                }. Κάντε κλικ σε κάθε υπηρεσία για περισσότερες πληροφορίες.`}
          </p>
        </header>

        {/* -------------------------- Main Content -------------------------- */}
        {showFullHeader ? (
          <CategoriesAccordion initialCategories={initialCategories} />
        ) : (
          initialCategories &&
          initialCategories.length === 1 && (
            <SubcategoryList
              subcategories={initialCategories[0].subcategories}
              categoryId={initialCategories[0].id}
            />
          )
        )}

        {/* ------------------------------- CTA ------------------------------- */}
        {showFullHeader && (
          <section className="anim-cta mt-12 rounded-xl border border-border bg-card p-8 text-center">
            <h2 className="mb-2 text-xl font-semibold text-softWhite">
              Δεν βρήκατε αυτό που ψάχνετε;
            </h2>
            <p className="mb-4 text-neutralGray">
              Επικοινωνήστε μαζί μας για εξατομικευμένες λύσεις.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-primaryTeal px-6 py-3 font-medium text-softWhite transition-colors hover:bg-lightTeal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Επικοινωνία
            </Link>
          </section>
        )}
      </div>
    </div>
  );
}
