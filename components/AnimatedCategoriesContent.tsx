'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { CategoriesAccordion } from '@/components/CategoryAccordion';

export function AnimatedCategoriesContent() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Animate header
      tl.from('.anim-title', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      })
      .from('.anim-desc', {
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.out',
      }, '-=0.5')
      // Animate accordion items with stagger
      .from('.accordion-item', {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: 'power3.out',
      }, '-=0.3')
      // Animate CTA section
      .from('.anim-cta', {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: 'power3.out',
      }, '-=0.2');
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="anim-title text-4xl md:text-5xl font-bold tracking-tighter mb-4 text-softWhite">
            Οι Υπηρεσίες μας
          </h1>
          <p className="anim-desc text-lg text-neutralGray max-w-2xl mx-auto">
            Εξερευνήστε την πλήρη γκάμα υπηρεσιών μας. Κάντε κλικ σε κάθε κατηγορία 
            για να δείτε τις επιμέρους υπηρεσίες.
          </p>
        </div>

        {/* Categories Accordion */}
        <CategoriesAccordion />

        {/* Contact CTA */}
        <div className="anim-cta mt-12 text-center p-8 rounded-xl bg-card border border-border">
          <h2 className="text-xl font-semibold text-softWhite mb-2">
            Δεν βρήκατε αυτό που ψάχνετε;
          </h2>
          <p className="text-neutralGray mb-4">
            Επικοινωνήστε μαζί μας για εξατομικευμένες λύσεις.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 bg-primaryTeal text-softWhite font-medium rounded-lg hover:bg-lightTeal transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Επικοινωνία
          </a>
        </div>
      </div>
    </div>
  );
}
