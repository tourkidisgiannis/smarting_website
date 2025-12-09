'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CheckCircle, Award, Users, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

gsap.registerPlugin(ScrollTrigger);

export function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom-=100',
        },
      });

      // Animate title first
      tl.from('.about-title', {
        y: 40,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.out',
      })
      // Then paragraphs stagger
      .from('.about-paragraph', {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power3.out',
      }, '-=0.4')
      // Finally stat cards
      .from('.stat-card', {
        y: 30,
        opacity: 0,
        scale: 0.95,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
      }, '-=0.2');
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { icon: Users, value: '500+', label: 'Ικανοποιημένοι Πελάτες' },
    { icon: Award, value: '10+', label: 'Χρόνια Εμπειρίας' },
    { icon: CheckCircle, value: '1000+', label: 'Ολοκληρωμένα Έργα' },
    { icon: Clock, value: '24/7', label: 'Τεχνική Υποστήριξη' },
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Main About Content */}
          <div className="text-center mb-16">
            <h2 className="about-title text-3xl md:text-4xl font-bold tracking-tighter mb-6">
              Η Εμπειρία μας στην Υπηρεσία σας
            </h2>
            <p className="about-paragraph text-lg text-foreground/80 leading-relaxed mb-4">
              Η <span className="text-primary font-semibold">SMARTING.GR</span> είναι μια δυναμική εταιρεία που ειδικεύεται
              στην παροχή ολοκληρωμένων λύσεων ηλεκτρολογικής τεχνικής υποστήριξης και συστημάτων ασφαλείας.
              Με περισσότερα από 10 χρόνια εμπειρίας στον χώρο, έχουμε εξυπηρετήσει εκατοντάδες πελάτες,
              τόσο ιδιώτες όσο και επιχειρήσεις.
            </p>
            <p className="about-paragraph text-lg text-foreground/80 leading-relaxed">
              Η ομάδα μας αποτελείται από πιστοποιημένους τεχνικούς με εξειδίκευση σε δίκτυα δεδομένων,
              συστήματα CCTV, συναγερμούς και ηλεκτρολογικές εγκαταστάσεις. Χρησιμοποιούμε μόνο
              πιστοποιημένα υλικά και ακολουθούμε αυστηρά τις διεθνείς προδιαγραφές ασφαλείας.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="stats-grid grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="stat-card bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-colors">
                  <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-sm text-foreground/80">{stat.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
