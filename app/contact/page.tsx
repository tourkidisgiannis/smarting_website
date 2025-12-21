"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import { ContactForm } from "@/components/sections/ContactForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import businessInfo from "@/app/mocks/business-info.json";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function ContactPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    (context) => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      const q = context.selector;

      if (prefersReducedMotion) {
        gsap.set(q!("[data-anim]"), {
          opacity: 1,
          y: 0,
          scale: 1,
        });
        return;
      }

      /* Header */
      gsap.from(q!(".anim-header"), {
        opacity: 0,
        y: 40,
        filter: "blur(6px)",
        duration: 1,
        ease: "power4.out",
        clearProps: "filter",
      });

      /* Cards reveal */
      gsap.from(q!(".anim-card"), {
        scrollTrigger: {
          trigger: q!(".cards-wrapper"),
          start: "top 75%",
        },
        opacity: 0,
        y: 30,
        scale: 0.96,
        stagger: 0.15,
        duration: 0.9,
        ease: "power3.out",
      });

      /* Hover micro-interactions */
      gsap.utils.toArray<HTMLElement>(q!(".anim-card")).forEach((card) => {
        gsap.set(card, { transformPerspective: 1000 });

        const hoverIn = () =>
          gsap.to(card, {
            y: -6,
            scale: 1.01,
            duration: 0.25,
            ease: "power2.out",
          });

        const hoverOut = () =>
          gsap.to(card, {
            y: 0,
            scale: 1,
            duration: 0.25,
            ease: "power2.out",
          });

        card.addEventListener("mouseenter", hoverIn);
        card.addEventListener("mouseleave", hoverOut);

        context.add(() => {
          card.removeEventListener("mouseenter", hoverIn);
          card.removeEventListener("mouseleave", hoverOut);
        });
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="container mx-auto px-4 py-16" data-anim>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="anim-header text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
            Επικοινωνήστε μαζί μας
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Είμαστε εδώ για να απαντήσουμε σε κάθε ερώτησή σας και να σας
            εξυπηρετήσουμε.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 cards-wrapper">
          {/* Contact Form */}
          <Card className="anim-card" data-anim>
            <CardHeader>
              <CardTitle>Στείλτε μας μήνυμα</CardTitle>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>

          {/* Info */}
          <div className="space-y-6">
            <Card className="anim-card" data-anim>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="text-primary" />
                  Τηλέφωνο
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-2xl font-bold">{businessInfo.phone}</p>
                <p className="text-2xl font-bold">{businessInfo.mobile}</p>
                <div className="flex gap-3">
                  <Button variant="outline" className="flex-1" asChild>
                    <Link href={`tel:${businessInfo.phone}`}>
                      <Phone className="mr-2 h-4 w-4" />
                      Κλήση
                    </Link>
                  </Button>
                  <Button variant="outline" className="flex-1" asChild>
                    <Link href={`sms:${businessInfo.mobile}`}>
                      Αποστολή SMS
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="anim-card" data-anim>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="text-primary" />
                  Διεύθυνση
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  {businessInfo.address.street}
                  <br />
                  {businessInfo.address.city} {businessInfo.address.postalCode}
                  <br />
                  {businessInfo.address.country}
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <Link
                    href={`https://maps.google.com/?q=${businessInfo.address["lat-lon"]}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MapPin className="mr-2 h-4 w-4" />
                    Οδηγίες Πλοήγησης
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Map */}
            <Card className="overflow-hidden p-0 border-0 anim-card" data-anim>
              <div className="aspect-video w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.36905179205!2d22.85383218314381!3d40.6878690653583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a83b3c9dcfbbe3%3A0xdd67b6323ff9fb39!2sSMARTING.GR!5e0!3m2!1sel!2sgr!4v1764905598394!5m2!1sel!2sgr"
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps location of SMARTING.GR"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
