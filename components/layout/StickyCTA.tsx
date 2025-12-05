"use client";

import { CTAButton } from "@/components/ui/CTAButton";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling down a bit (e.g., 100px)
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 z-50 grid grid-cols-2 gap-2 bg-background/95 p-4 backdrop-blur supports-backdrop-filter:bg-background/60 md:hidden transition-transform duration-300 border-t border-white/10",
        isVisible ? "translate-y-0" : "translate-y-full"
      )}
    >
      <CTAButton action="call" variant="default" className="w-full" iconPosition="left">
        Κλήση
      </CTAButton>
      <CTAButton action="book" variant="secondary" className="w-full" iconPosition="left">
        Ραντεβού
      </CTAButton>
    </div>
  );
}
