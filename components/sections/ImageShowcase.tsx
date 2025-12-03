'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

export function ImageShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.showcase-image', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom-=100',
        },
        scale: 0.9,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      });

      gsap.from('.showcase-overlay', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom-=100',
        },
        x: -100,
        opacity: 0,
        duration: 0.8,
        delay: 0.3,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Image */}
          <div className="showcase-image relative aspect-[4/3] rounded-2xl overflow-hidden border border-primary/20 shadow-2xl shadow-primary/10">
            <Image
              src="/hero-image.png"
              alt="Professional electrical and security systems installation"
              fill
              className="object-cover"
              priority={false}
              quality={90}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
          </div>

          {/* Content */}
          <div className="showcase-overlay space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
              Επαγγελματική Τεχνολογία &amp; Ασφάλεια
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Εξειδικευόμαστε στην εγκατάσταση και συντήρηση προηγμένων συστημάτων ηλεκτρολογικής 
              υποδομής, δικτύων δεδομένων και συστημάτων ασφαλείας. Κάθε εγκατάσταση σχεδιάζεται 
              με προσοχή στη λεπτομέρεια και υλοποιείται με τα υψηλότερα πρότυπα ποιότητας.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-sm font-medium">Δομημένη Καλωδίωση</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-sm font-medium">Συστήματα CCTV</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-sm font-medium">Ηλεκτρικοί Πίνακες</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-sm font-medium">Access Control</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
