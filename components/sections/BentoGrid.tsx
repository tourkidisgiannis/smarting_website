'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Clock, Phone, ShieldCheck, Network, Zap, Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import businessInfo from '@/app/mocks/business-info.json';
import services from '@/app/mocks/services.json';
import Link from 'next/link';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

export function BentoGrid() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.bento-card', {
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top bottom-=100',
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
      });
    }, gridRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-20 bg-muted/30" ref={gridRef}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 auto-rows-[minmax(180px,auto)]">
          
          {/* Hours Card */}
          <Card className="bento-card col-span-1 sm:col-span-2 lg:col-span-1 row-span-2 bg-card hover:bg-card/80 transition-colors">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="text-primary" />
                Ωράριο
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                {businessInfo.hours.map((h) => (
                  <li key={h.day} className="flex justify-between border-b border-white/5 pb-1 last:border-0">
                    <span className={h.time === 'Κλειστά' ? 'text-muted-foreground' : ''}>{h.day}</span>
                    <span className={h.time === 'Κλειστά' ? 'text-destructive' : 'text-primary'}>{h.time}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Map/Address Card */}
          <Card className="bento-card col-span-1 sm:col-span-2 lg:col-span-2 row-span-1 overflow-hidden relative group">
            <div className="absolute inset-0 bg-black/50 z-10 group-hover:bg-black/40 transition-colors" />
            {/* Placeholder Map Image - In production use a real map embed or image */}
            <div className="absolute inset-0 bg-zinc-800 flex items-center justify-center text-muted-foreground">
               <MapPin className="w-12 h-12 opacity-20" />
            </div>
            <CardContent className="relative z-20 h-full flex flex-col justify-end p-6">
              <h3 className="text-xl font-bold text-white mb-2">{businessInfo.address.street}</h3>
              <p className="text-gray-300 mb-4">{businessInfo.address.city}, {businessInfo.address.postalCode}</p>
              <Button variant="secondary" size="sm" className="w-fit" asChild>
                <a href={`https://maps.google.com/?q=${businessInfo.address.plusCode}`} target="_blank" rel="noopener noreferrer">
                  <MapPin className="mr-2 h-4 w-4" />
                  Οδηγίες Πλοήγησης
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Phone Card */}
          <Card className="bento-card col-span-1 bg-primary text-primary-foreground flex flex-col justify-center items-center text-center p-6 hover:bg-primary/90 transition-colors">
            <Phone className="w-12 h-12 mb-4" />
            <h3 className="text-2xl font-bold mb-2">{businessInfo.phone}</h3>
            <p className="text-primary-foreground/80 mb-4">Καλέστε μας για άμεση εξυπηρέτηση</p>
            <Button variant="secondary" className="w-full text-primary" asChild>
              <a href={`tel:${businessInfo.phone}`}>Κλήση</a>
            </Button>
          </Card>

          {/* Services Highlight */}
          <Card className="bento-card col-span-1 sm:col-span-2 lg:col-span-2 row-span-1">
            <CardHeader>
              <CardTitle>Υπηρεσίες</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-4">
              {services.slice(0, 4).map((s) => (
                <Link key={s.id} href="/services" className="flex items-center gap-3 p-3 rounded-lg bg-muted hover:bg-muted/80 transition-colors">
                  <div className="p-2 rounded-full bg-primary/10 text-primary">
                    {/* Simple icon mapping based on ID or just generic */}
                    <Zap className="w-4 h-4" />
                  </div>
                  <span className="font-medium text-sm">{s.title}</span>
                </Link>
              ))}
            </CardContent>
          </Card>

          {/* Reviews Preview */}
          <Card className="bento-card col-span-1 row-span-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="fill-yellow-500 text-yellow-500" />
                Κριτικές
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col justify-between h-[140px]">
              <div className="text-center">
                <span className="text-4xl font-bold">{businessInfo.rating}</span>
                <span className="text-muted-foreground text-sm block">από {businessInfo.reviewCount} πελάτες</span>
              </div>
              <Button variant="outline" className="w-full mt-auto" asChild>
                <Link href="/reviews">Δείτε όλες</Link>
              </Button>
            </CardContent>
          </Card>

          {/* Security Highlight */}
          <Card className="bento-card col-span-1 sm:col-span-2 lg:col-span-1 bg-gradient-to-br from-zinc-900 to-zinc-800 border-primary/20">
            <CardHeader>
              <CardTitle className="text-primary flex items-center gap-2">
                <ShieldCheck />
                Ασφάλεια
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Εξειδικευμένες λύσεις CCTV και συναγερμών για την απόλυτη προστασία του χώρου σας.
              </p>
              <Button variant="link" className="text-primary p-0 h-auto" asChild>
                <Link href="/services">Μάθετε περισσότερα &rarr;</Link>
              </Button>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  );
}
