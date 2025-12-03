'use client';

import { Phone, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import businessInfo from '@/app/mocks/business-info.json';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling down a bit (e.g., 100px)
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 z-50 grid grid-cols-2 gap-2 bg-background/95 p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:hidden transition-transform duration-300 border-t border-white/10",
        isVisible ? "translate-y-0" : "translate-y-full"
      )}
    >
      <Button variant="default" className="w-full" asChild>
        <a href={`tel:${businessInfo.phone}`}>
          <Phone className="mr-2 h-4 w-4" />
          Κλήση
        </a>
      </Button>
      <Button variant="secondary" className="w-full" asChild>
        <a href="/contact">
          <Calendar className="mr-2 h-4 w-4" />
          Αίτηση
        </a>
      </Button>
    </div>
  );
}
