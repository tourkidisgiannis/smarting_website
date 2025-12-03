'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Phone, Calendar, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import businessInfo from '@/app/mocks/business-info.json';

export function CTASection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.cta-card', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom-=50',
        },
        scale: 0.95,
        opacity: 0,
        duration: 0.8,
        ease: 'back.out(1.2)',
      });
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
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
              Έτοιμοι να Ξεκινήσετε;
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Επικοινωνήστε μαζί μας σήμερα για μια δωρεάν εκτίμηση και ανακαλύψτε πώς μπορούμε 
              να βελτιώσουμε την ασφάλεια και την αποδοτικότητα των εγκαταστάσεών σας.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="w-full sm:w-auto shadow-lg shadow-primary/30" asChild>
                <a href={`tel:${businessInfo.phone}`}>
                  <Phone className="mr-2 h-5 w-5" />
                  Καλέστε Τώρα
                </a>
              </Button>
              <Button size="lg" variant="secondary" className="w-full sm:w-auto shadow-lg" asChild>
                <a href="/contact">
                  <Calendar className="mr-2 h-5 w-5" />
                  Κλείστε Ραντεβού
                </a>
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto" asChild>
                <a href={`sms:${businessInfo.phone}`}>
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Στείλτε SMS
                </a>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-10 pt-8 border-t border-white/10">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">100%</div>
                  <div className="text-sm text-muted-foreground">Ικανοποίηση Πελατών</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">Δωρεάν</div>
                  <div className="text-sm text-muted-foreground">Εκτίμηση Κόστους</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">24/7</div>
                  <div className="text-sm text-muted-foreground">Τεχνική Υποστήριξη</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
