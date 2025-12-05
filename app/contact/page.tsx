"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ContactForm } from "@/components/sections/ContactForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import businessInfo from "@/app/mocks/business-info.json";

export default function ContactPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from(".anim-header", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      }).from(
        ".anim-card",
        {
          y: 30,
          opacity: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
        },
        "-=0.5"
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="container mx-auto px-4 py-16">
      <div className="max-w-5xl mx-auto">
        <div className="anim-header text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
            Επικοινωνήστε μαζί μας
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Είμαστε εδώ για να απαντήσουμε σε κάθε ερώτησή σας και να σας
            εξυπηρετήσουμε.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="anim-card">
            <CardHeader>
              <CardTitle>Στείλτε μας μήνυμα</CardTitle>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>

          {/* Contact Info & Quick Actions */}
          <div className="space-y-6">
            <Card className="anim-card">
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
                  <Button variant="default" className="flex-1" asChild>
                    <a href={`tel:${businessInfo.phone}`}>
                      <Phone className="mr-2 h-4 w-4" />
                      Κλήση
                    </a>
                  </Button>
                  <Button variant="outline" className="flex-1" asChild>
                    <a href={`sms:${businessInfo.mobile}`}>Αποστολή SMS</a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="anim-card">
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
                  <a
                    href={`https://maps.google.com/?q=${businessInfo.address["lat-lon"]}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MapPin className="mr-2 h-4 w-4" />
                    Οδηγίες Πλοήγησης
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Map Embed Placeholder */}
            <Card className="anim-card overflow-hidden">
              <div className="aspect-video bg-muted relative flex items-center justify-center">
                <MapPin className="w-12 h-12 text-muted-foreground opacity-20" />
                <p className="absolute text-sm text-muted-foreground">
                  Χάρτης Google
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
