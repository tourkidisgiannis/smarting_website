import Link from 'next/link';
import { Menu, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import businessInfo from '@/app/mocks/business-info.json';

export function Header() {
  const navLinks = [
    { href: '/', label: 'Αρχική' },
    { href: '/services', label: 'Υπηρεσίες' },
    { href: '/reviews', label: 'Κριτικές' },
    { href: '/info', label: 'Πληροφορίες' },
    { href: '/contact', label: 'Επικοινωνία' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tighter text-white">
            SMARTING<span className="text-primary">.GR</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
          <Button variant="default" size="sm" asChild>
            <a href={`tel:${businessInfo.phone}`}>
              <Phone className="mr-2 h-4 w-4" />
              {businessInfo.phone}
            </a>
          </Button>
        </nav>

        {/* Mobile Nav */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent 
            side="right" 
            className="w-full sm:w-[400px] bg-background/95 backdrop-blur-xl border-l border-white/10 supports-[backdrop-filter]:bg-background/80"
          >
            <nav className="flex flex-col gap-4 mt-8 items-center">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-lg font-medium hover:text-primary transition-colors py-2 px-3 rounded-lg hover:bg-primary/10 w-full text-center"
                >
                  {link.label}
                </Link>
              ))}
              <Button className="mt-4 w-full shadow-lg shadow-primary/20" asChild>
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
