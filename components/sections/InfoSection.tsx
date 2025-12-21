"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Clock, Award, MapPin } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import businessInfo from "@/app/mocks/business-info.json";

gsap.registerPlugin(ScrollTrigger);

export function InfoSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    (context) => {
      const q = context.selector;
      if (!q) return;

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      const cards = Array.from(q(".info-card")) as HTMLElement[];
      const icons = Array.from(q(".info-icon")) as HTMLElement[];

      if (!cards.length) return;

      /* Reduced motion fallback */
      if (prefersReducedMotion) {
        gsap.set(cards, { opacity: 1, y: 0 });
        gsap.set(icons, { opacity: 1, scale: 1, rotate: 0 });
        return;
      }

      /* Icon baseline */
      gsap.set(icons, { transformOrigin: "50% 50%" });

      /* Scroll-triggered card animation */
      cards.forEach((card, index) => {
        const cardIcons = Array.from(
          card.querySelectorAll(".info-icon")
        ) as HTMLElement[];

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });

        /* Card entrance */
        tl.from(card, {
          opacity: 0,
          y: 40,
          duration: 0.8,
          ease: "power3.out",
        });

        /* Icon micro-stagger (leads content) */
        tl.from(
          cardIcons,
          {
            opacity: 0,
            scale: 0.6,
            rotate: -10,
            y: 10,
            stagger: 0.08,
            duration: 0.5,
            ease: "elastic.out(1, 0.55)",
          },
          "-=0.5"
        );
      });

      /* Hover micro-interaction */
      icons.forEach((icon) => {
        const enter = () =>
          gsap.to(icon, {
            scale: 1.15,
            rotate: 6,
            y: -4,
            duration: 0.3,
            ease: "power3.out",
          });

        const leave = () =>
          gsap.to(icon, {
            scale: 1,
            rotate: 0,
            y: 0,
            duration: 0.3,
            ease: "power3.out",
          });

        icon.addEventListener("mouseenter", enter);
        icon.addEventListener("mouseleave", leave);

        context.add(() => {
          icon.removeEventListener("mouseenter", enter);
          icon.removeEventListener("mouseleave", leave);
        });
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="space-y-8">
      {/* About */}
      <Card className="info-card">
        <CardHeader>
          <CardTitle>Σχετικά με εμάς</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-foreground/80 leading-relaxed">
            Η SMARTING.GR είναι μια εξειδικευμένη εταιρεία που παρέχει
            ολοκληρωμένες λύσεις ηλεκτρολογικής τεχνικής υποστήριξης,
            εγκατάστασης δικτύων και συστημάτων ασφαλείας.
          </p>
        </CardContent>
      </Card>

      {/* Certifications */}
      <Card className="info-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="info-icon text-primary" />
            Πιστοποιήσεις & Εγγυήσεις
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3 text-sm text-foreground/80">
            <li>✓ Πιστοποιημένοι τεχνικοί</li>
            <li>✓ Πιστοποιημένα υλικά</li>
            <li>✓ Διεθνή πρότυπα ασφαλείας</li>
          </ul>
        </CardContent>
      </Card>

      {/* Hours */}
      <Card className="info-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="info-icon text-primary" />
            Πλήρες Ωράριο Λειτουργίας
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {businessInfo.hours.map((h) => (
              <div
                key={h.day}
                className="flex justify-between border-b border-white/5 pb-2 last:border-0"
              >
                <span className="font-medium">{h.day}</span>
                <span
                  className={
                    h.time === "Κλειστά" ? "text-destructive" : "text-primary"
                  }
                >
                  {h.time}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Location */}
      <Card className="info-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="info-icon text-primary" />
            Τοποθεσία
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            <span className="font-medium">{businessInfo.address.street}</span>
            <br />
            {businessInfo.address.city} {businessInfo.address.postalCode}
            <br />
            {businessInfo.address.country}
          </p>
          <Button asChild>
            <a
              href={`https://maps.google.com/?q=${businessInfo.address["lat-lon"]}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ανοίξτε στο Google Maps
            </a>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
