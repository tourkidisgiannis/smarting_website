"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import businessInfo from "@/app/mocks/business-info.json";
import Image from "next/image";
import logo from "@/public/images/smarting_logo_inline.png";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Αρχική" },
    { href: "/categories", label: "Υπηρεσίες" },
    { href: "/reviews", label: "Κριτικές" },
    { href: "/info", label: "Πληροφορίες" },
    { href: "/contact", label: "Επικοινωνία" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src={logo}
            width={150}
            height={50}
            alt="logo"
            style={{ width: "auto", height: "auto" }}
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-sm font-medium text-foreground/80 transition-all duration-200 hover:text-primary hover:-translate-y-0.5 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}
          <div className="gap-2 flex tracking-wide">
            <Button variant="default" size="sm" asChild>
              <a
                href={`tel:${businessInfo.phone}`}
                className="flex items-center justify-center gap-2" // Use gap instead of mr-2
              >
                <Phone className="h-4 w-4" />
                <p className="mb-0.5">6987341139</p>
              </a>
            </Button>
            <Button variant="default" size="sm" asChild>
              <a
                href={`tel:${businessInfo.phone}`}
                className="flex items-center justify-center gap-2" // Use gap instead of mr-2
              >
                <Phone className="h-4 w-4" />
                <p className="mb-0.5">2310 781555</p>
              </a>
            </Button>
          </div>
        </nav>

        {/* Mobile Nav */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="size-7" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-full sm:w-[400px] bg-background/95 backdrop-blur-xl border-l border-white/10 supports-backdrop-filter:bg-background/80"
          >
            <nav className="flex flex-col gap-4 mt-8 items-center">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-foreground/80 transition-all duration-200 hover:text-primary py-2 px-3 rounded-lg hover:bg-primary/10 w-full text-center hover:scale-105 active:scale-95"
                >
                  {link.label}
                </Link>
              ))}

              {/* CTA Buttons - Consistent with CTASection */}
              <div className="flex flex-col gap-3 w-full px-4 mt-6">
                <Button
                  variant="default"
                  className="h-12 px-8 text-lg rounded-full border border-white/10 hover:bg-white/5 transition-all duration-300 gap-2 w-full"
                  size="sm"
                  asChild
                >
                  <a
                    href={`tel:${businessInfo.phone}`}
                    className="flex items-center justify-center gap-2" // Use gap instead of mr-2
                  >
                    <Phone className="h-4 w-4" />
                    <p className="mb-0.5">6987341139</p>
                  </a>
                </Button>
                <Button
                  variant="default"
                  className="h-12 px-8 text-lg rounded-full border border-white/10 hover:bg-white/5 transition-all duration-300 gap-2 w-full"
                  size="sm"
                  asChild
                >
                  <a
                    href={`tel:${businessInfo.phone}`}
                    className="flex items-center justify-center gap-2" // Use gap instead of mr-2
                  >
                    <Phone className="h-4 w-4" />
                    <p className="mb-0.5">2310 781555</p>
                  </a>
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 mt-6 justify-center">
                {businessInfo.socials.facebook && (
                  <a
                    href={businessInfo.socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                    aria-label="Επισκεφθείτε τη σελίδα μας στο Facebook"
                  >
                    <svg
                      className="w-5 h-5 text-primary"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                )}
                {businessInfo.socials.instagram && (
                  <a
                    href={businessInfo.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                    aria-label="Ακολουθήστε μας στο Instagram"
                  >
                    <svg
                      className="w-5 h-5 text-primary"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                )}
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
