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
          <Image src={logo} width={200} height={200} alt="logo" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-sm font-medium text-muted-foreground transition-all duration-200 hover:text-primary hover:-translate-y-0.5 after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
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
              <Menu className="h-6 w-6" />
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
                  className="text-lg font-medium transition-all duration-200 hover:text-primary py-2 px-3 rounded-lg hover:bg-red/10 w-full text-center hover:scale-105 active:scale-95"
                >
                  {link.label}
                </Link>
              ))}
              <Button
                className="mt-4 w-full shadow-lg shadow-primary/20"
                asChild
              >
                <a href={`tel:${businessInfo.phone}`}>
                  <Phone className="mr-2 h-4 w-4" />
                  Καλέστε μας
                </a>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
