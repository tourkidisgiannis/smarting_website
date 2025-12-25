"use client";

import { useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Menu, Phone } from "lucide-react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";

import businessInfo from "@/app/mocks/business-info.json";
import logo from "@/public/images/smarting_logo_inline.png";

import { cn } from "@/lib/utils";

gsap.registerPlugin(useGSAP);

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  const headerRef = useRef<HTMLElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const pillRef = useRef<HTMLSpanElement>(null);

  const navLinks = [
    { href: "/", label: "Αρχική" },
    { href: "/services", label: "Υπηρεσίες" },
    { href: "/reviews", label: "Κριτικές" },
    { href: "/info", label: "Πληροφορίες" },
    { href: "/contact", label: "Επικοινωνία" },
  ];

  /* -------------------------------------------------------------------------- */
  /* Active route helper                                                         */
  /* -------------------------------------------------------------------------- */

  const isActiveRoute = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  /* -------------------------------------------------------------------------- */
  /* Header intro + pill hover + active route                                    */
  /* -------------------------------------------------------------------------- */

  useGSAP(() => {
    const navEl = navRef.current;
    const pillEl = pillRef.current;

    if (!navEl || !pillEl) return;

    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        y: -24,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
        clearProps: "all",
      });

      const links = gsap.utils.toArray<HTMLElement>("[data-nav-link]", navEl);

      const movePill = (target: HTMLElement, immediate = false) => {
        const navBounds = navEl.getBoundingClientRect();
        const linkBounds = target.getBoundingClientRect();

        gsap.to(pillEl, {
          x: linkBounds.left - navBounds.left,
          width: linkBounds.width,
          opacity: 1,
          duration: immediate ? 0 : 0.55,
          ease: immediate ? "none" : "elastic.out(1, 0.6)",
        });
      };

      links.forEach((link) => {
        link.addEventListener("mouseenter", () => movePill(link));
        link.addEventListener("focus", () => movePill(link));
      });

      const activeLink = links.find(
        (link) => link.getAttribute("href") === pathname
      );

      if (activeLink) {
        movePill(activeLink, true);
      }

      navEl.addEventListener("mouseleave", () => {
        if (activeLink) {
          movePill(activeLink);
        } else {
          gsap.to(pillEl, {
            opacity: 0,
            duration: 0.25,
            ease: "power2.out",
          });
        }
      });
    }, headerRef);

    return () => ctx.revert();
  }, [pathname]);

  /* -------------------------------------------------------------------------- */
  /* Ripple click + navigation                                                   */
  /* -------------------------------------------------------------------------- */

  const handleNavClick = (e: React.MouseEvent<HTMLElement>, href: string) => {
    e.preventDefault();

    const link = e.currentTarget as HTMLElement;
    const rect = link.getBoundingClientRect();

    const ripple = document.createElement("span");
    ripple.className =
      "absolute pointer-events-none rounded-full bg-primary/20";

    const size = Math.max(rect.width, rect.height) * 2;

    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
    ripple.style.top = `${e.clientY - rect.top - size / 2}px`;

    link.appendChild(ripple);

    gsap.fromTo(
      ripple,
      { scale: 0, opacity: 0.6 },
      {
        scale: 1,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
        onComplete: () => {
          ripple.remove();
          router.push(href);
        },
      }
    );
  };

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/80 backdrop-blur-md"
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center">
          <Image src={logo} alt="logo" width={200} height={75} priority />
        </Link>

        {/* ---------------------------- Desktop Nav ---------------------------- */}
        <nav
          ref={navRef}
          className="relative hidden items-center gap-6 lg:flex"
        >
          <span
            ref={pillRef}
            className="pointer-events-none absolute inset-y-1 rounded-full bg-accent opacity-0"
          />

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              data-nav-link
              onClick={(e) => handleNavClick(e, link.href)}
              className={cn(
                "relative z-10 overflow-hidden p-3 text-sm font-medium transition-colors",
                isActiveRoute(link.href)
                  ? "text-primary-foreground"
                  : "text-foreground/80 hover:text-primary-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}

          <div className="ml-4 flex gap-2">
            {[businessInfo.phone, "2310 781555"].map((phone) => (
              <Button key={phone} size="sm" asChild>
                <a href={`tel:${phone}`} className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>{phone}</span>
                </a>
              </Button>
            ))}
          </div>
        </nav>

        {/* ----------------------------- Mobile Nav ----------------------------- */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="size-7" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>

          <SheetContent
            side="right"
            className="border-l border-white/10 bg-background/95 backdrop-blur-xl"
          >
            <SheetTitle className="sr-only">Μενού πλοήγησης</SheetTitle>
            <SheetDescription className="sr-only">
              Κύριο μενού πλοήγησης
            </SheetDescription>

            <nav className="mt-8 flex flex-col items-center justify-center gap-4 w-full h-[calc(100vh-120px)]">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "w-3/4 rounded-lg px-4 py-3 text-center text-lg font-medium transition-colors border border-white/10",
                    isActiveRoute(link.href)
                      ? "bg-primary/15 text-primary"
                      : "text-foreground/80 hover:bg-primary/10 hover:text-primary"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
