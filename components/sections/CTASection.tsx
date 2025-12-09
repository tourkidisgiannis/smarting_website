'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card, CardContent } from '@/components/ui/card';
import { CTAButton } from '@/components/ui/CTAButton';

gsap.registerPlugin(ScrollTrigger);

export function CTASection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });

      tl.from('.cta-card', {
        scale: 0.95,
        opacity: 0,
        duration: 0.8,
        ease: 'back.out(1.2)',
      })
      .from('.cta-title', {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: 'power3.out',
      }, '-=0.4')
      .from('.cta-desc', {
        y: 20,
        opacity: 0,
        duration: 0.5,
        ease: 'power3.out',
      }, '-=0.3')
      .from('.trust-item', {
        y: 20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power2.out',
      }, '-=0.2');
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <Card className="cta-card max-w-4xl mx-auto bg-gradient-to-br from-primary/20 via-primary/10 to-background border-primary/30 overflow-hidden relative">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
              backgroundSize: '40px 40px',
            }} />
          </div>

          <CardContent className="relative p-8 md:p-12 text-center">
            <h2 className="cta-title text-3xl md:text-4xl font-bold tracking-tighter mb-4">
              Έτοιμοι να Ξεκινήσετε;
            </h2>
            <p className="cta-desc text-lg text-foreground/80 mb-8 max-w-2xl mx-auto">
              Επικοινωνήστε μαζί μας σήμερα για μια δωρεάν εκτίμηση και ανακαλύψτε πώς μπορούμε
              να βελτιώσουμε την ασφάλεια και την αποδοτικότητα των εγκαταστάσεών σας.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <CTAButton
                action="call"
                size="lg"
                className="h-12 px-8 text-lg rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300"
                iconPosition="left"
              >
                Κλήση Τώρα
              </CTAButton>
              <CTAButton
                action="book"
                size="lg"
                variant="secondary"
                className="h-12 px-8 text-lg rounded-full border border-white/10 hover:bg-white/5 transition-all duration-300"
                iconPosition="left"
              >
                Κλείστε Ραντεβού
              </CTAButton>
              <CTAButton
                action="sms"
                size="lg"
                variant="outline"
                className="h-12 px-8 text-lg rounded-full border border-white/10 hover:bg-white/5 transition-all duration-300"
                iconPosition="left"
              >
                Στείλτε SMS
              </CTAButton>
            </div>

            {/* Trust Indicators */}
            <div className="mt-10 pt-8 border-t border-white/10">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                <div className="trust-item">
                  <div className="text-2xl font-bold text-primary mb-1">100%</div>
                  <div className="text-sm text-foreground/80">Ικανοποίηση Πελατών</div>
                </div>
                <div className="trust-item">
                  <div className="text-2xl font-bold text-primary mb-1">Δωρεάν</div>
                  <div className="text-sm text-foreground/80">Εκτίμηση Κόστους</div>
                </div>
                <div className="trust-item">
                  <div className="text-2xl font-bold text-primary mb-1">24/7</div>
                  <div className="text-sm text-foreground/80">Τεχνική Υποστήριξη</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}