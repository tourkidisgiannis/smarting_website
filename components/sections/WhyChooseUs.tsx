'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Shield, Zap, HeadphonesIcon, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

gsap.registerPlugin(ScrollTrigger);

export function WhyChooseUs() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.reason-card', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom-=100',
        },
        y: 50,
        opacity: 0,
        duration: 0.7,
        stagger: 0.2,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const reasons = [
    {
      icon: Award,
      title: 'Πιστοποιημένοι Επαγγελματίες',
      description: 'Η ομάδα μας αποτελείται από πιστοποιημένους τεχνικούς με πολυετή εμπειρία στον χώρο των ηλεκτρολογικών εγκαταστάσεων και συστημάτων ασφαλείας.',
    },
    {
      icon: Shield,
      title: 'Εγγύηση Ποιότητας',
      description: 'Χρησιμοποιούμε αποκλειστικά πιστοποιημένα υλικά και παρέχουμε εγγύηση τόσο για τα υλικά όσο και για την εργασία μας.',
    },
    {
      icon: Zap,
      title: 'Άμεση Ανταπόκριση',
      description: 'Κατανοούμε τη σημασία της άμεσης εξυπηρέτησης. Η ομάδα μας είναι διαθέσιμη για επείγουσες επεμβάσεις και παρέχουμε γρήγορες λύσεις.',
    },
    {
      icon: HeadphonesIcon,
      title: 'Συνεχής Υποστήριξη',
      description: 'Παρέχουμε συνεχή τεχνική υποστήριξη μετά την εγκατάσταση και είμαστε πάντα διαθέσιμοι για οποιοδήποτε ζήτημα προκύψει.',
    },
  ];

  return (
    <section ref={sectionRef} className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
            Γιατί να μας Επιλέξετε;
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Η εμπειρία, η αξιοπιστία και η δέσμευσή μας στην ποιότητα μας κάνουν την ιδανική επιλογή 
            για τις ηλεκτρολογικές και τεχνολογικές σας ανάγκες.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <Card 
                key={index} 
                className="reason-card bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all hover:shadow-lg hover:shadow-primary/10"
              >
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{reason.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
