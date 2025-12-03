'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Zap, Network, Camera, ShieldCheck, ArrowRight } from 'lucide-react';
import { Card,  CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import services from '@/app/mocks/services.json';

// Helper to map icon string to component
const IconMap: Record<string, any> = {
  Zap,
  Network,
  Camera,
  ShieldCheck,
};

export function ServicesList() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance animations
      gsap.from('.service-card', {
        y: 50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power3.out',
      });

      // Hover animations for icons
      const cards = document.querySelectorAll('.service-card');
      cards.forEach((card) => {
        const icon = card.querySelector('.service-icon');
        
        card.addEventListener('mouseenter', () => {
          gsap.to(icon, {
            scale: 1.2,
            rotate: 360,
            duration: 0.5,
            ease: 'back.out(1.7)',
          });
        });

        card.addEventListener('mouseleave', () => {
          gsap.to(icon, {
            scale: 1,
            rotate: 0,
            duration: 0.3,
            ease: 'power2.out',
          });
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {services.map((service) => {
        const Icon = IconMap[service.icon] || Zap;
        
        return (
          <Sheet key={service.id}>
            <Card className="service-card h-full flex flex-col hover:border-primary/50 transition-colors cursor-pointer group">
              <CardHeader>
                <div className="service-icon w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription>{service.shortDescription}</CardDescription>
              </CardHeader>
              <CardFooter className="mt-auto">
                <SheetTrigger asChild>
                  <Button variant="ghost" className="w-full justify-between group-hover:text-primary">
                    Περισσότερα <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </SheetTrigger>
              </CardFooter>
            </Card>

            <SheetContent 
              side="right"
              className="w-full sm:w-[400px] md:w-[540px] overflow-y-auto bg-background/95 backdrop-blur-xl border-l border-white/10 supports-[backdrop-filter]:bg-background/80 p-6"
            >
              <SheetHeader className="mb-6">
                <div className="w-16 h-16 rounded-xl bg-primary/20 backdrop-blur-sm flex items-center justify-center text-primary mb-4 border border-primary/30 shadow-lg shadow-primary/10">
                  <Icon className="w-8 h-8" />
                </div>
                <SheetTitle className="text-2xl text-white">{service.title}</SheetTitle>
                <SheetDescription className="text-lg text-muted-foreground">
                  {service.shortDescription}
                </SheetDescription>
              </SheetHeader>
              
              <div className="space-y-6">
                <div className="bg-surface/50 backdrop-blur-sm p-5 rounded-xl border border-white/5">
                  <h4 className="text-lg font-semibold mb-3 text-primary flex items-center gap-2">
                    <span className="w-1 h-6 bg-primary rounded-full"></span>
                    Περιγραφή Υπηρεσίας
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.fullDescription}
                  </p>
                </div>

                <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent backdrop-blur-sm p-5 rounded-xl border border-primary/20">
                  <h4 className="font-semibold mb-3 text-white flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    Γιατί να μας επιλέξετε;
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-3 text-muted-foreground">
                      <span className="text-primary mt-0.5">▸</span>
                      <span>Εξειδικευμένο προσωπικό</span>
                    </li>
                    <li className="flex items-start gap-3 text-muted-foreground">
                      <span className="text-primary mt-0.5">▸</span>
                      <span>Πιστοποιημένα υλικά</span>
                    </li>
                    <li className="flex items-start gap-3 text-muted-foreground">
                      <span className="text-primary mt-0.5">▸</span>
                      <span>Εγγύηση καλής λειτουργίας</span>
                    </li>
                    <li className="flex items-start gap-3 text-muted-foreground">
                      <span className="text-primary mt-0.5">▸</span>
                      <span>Άμεση τεχνική υποστήριξη</span>
                    </li>
                  </ul>
                </div>

                <Button className="w-full shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all" size="lg" asChild>
                  <a href="/contact">Ζητήστε Προσφορά</a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        );
      })}
    </div>
  );
}
