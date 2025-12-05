'use client';

import { Shield, Zap, HeadphonesIcon, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function WhyChooseUs() {
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
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
            Γιατί να μας Επιλέξετε;
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
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
                className="bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all hover:shadow-lg hover:shadow-primary/10"
              >
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <CardTitle className="text-xl text-zinc-100">{reason.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-zinc-300 leading-relaxed">
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
