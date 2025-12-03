'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Star, Phone, Calendar, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import businessInfo from '@/app/mocks/business-info.json';

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from('.hero-badge', {
        y: -20,
        opacity: 0,
        duration: 0.6,
        ease: 'power3.out',
      })
      .from('.hero-title', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      }, '-=0.4')
      .from('.hero-tagline', {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      }, '-=0.6')
      .from('.hero-cta', {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
      }, '-=0.4');
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative overflow-hidden py-20 md:py-32 lg:py-40">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center mb-6">
          <Badge variant="secondary" className="hero-badge px-4 py-2 text-sm gap-2">
            <Star className="w-4 h-4 fill-primary text-primary" />
            <span className="font-bold">{businessInfo.rating.toFixed(1)}</span>
            <span className="text-muted-foreground">({businessInfo.reviewCount} Κριτικές)</span>
          </Badge>
        </div>

        <h1 className="hero-title text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white mb-6">
          SMARTING<span className="text-primary">.GR</span>
        </h1>

        <p className="hero-tagline text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          {businessInfo.tagline}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="hero-cta w-full sm:w-auto text-lg h-12" asChild>
            <a href={`tel:${businessInfo.phone}`}>
              <Phone className="mr-2 h-5 w-5" />
              Κλήση Τώρα
            </a>
          </Button>
          <Button size="lg" variant="secondary" className="hero-cta w-full sm:w-auto text-lg h-12" asChild>
            <a href="/contact">
              <Calendar className="mr-2 h-5 w-5" />
              Αίτηση Υπηρεσίας
            </a>
          </Button>
          <Button size="lg" variant="outline" className="hero-cta w-full sm:w-auto text-lg h-12" asChild>
            <a href={`sms:${businessInfo.phone}`}>
              <Send className="mr-2 h-5 w-5" />
              Αποστολή στο κινητό
            </a>
          </Button>
        </div>
      </div>
      
      
      {/* Background Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none" />
    </section>
  );
}
