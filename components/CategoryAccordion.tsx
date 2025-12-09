'use client';

import { useRef, useEffect } from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { gsap } from 'gsap';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { categories, type Category } from '@/data/categories';

interface CategoryAccordionProps {
  category: Category;
}

function StaggeredList({ children }: { children: React.ReactNode }) {
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (!listRef.current) return;
    
    const ctx = gsap.context(() => {
      gsap.from(listRef.current!.children, {
        y: 10,
        opacity: 0,
        duration: 0.3,
        stagger: 0.05,
        ease: 'power2.out',
        delay: 0.1 // Wait for accordion to start opening
      });
    }, listRef);

    return () => ctx.revert();
  }, []);

  return (
    <ul ref={listRef} className="space-y-1">
      {children}
    </ul>
  );
}

export function CategoryAccordion({ category }: CategoryAccordionProps) {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value={category.id} className="border border-border rounded-lg overflow-hidden">
        <AccordionTrigger 
          className="px-4 py-4 hover:bg-muted/50 hover:no-underline [&[data-state=open]>svg]:rotate-180"
        >
          <span className="text-lg font-medium text-card-foreground transition-colors">
            {category.title}
          </span>
        </AccordionTrigger>
        <AccordionContent>
          <div className="px-4 pb-4 pt-2" role="region" aria-label={`${category.title} subcategories`}>
            <StaggeredList>
              {category.subcategories.map((sub) => (
                <li key={sub.id}>
                  <Link
                    href={`/categories/${category.id}/${sub.id}`}
                    className="subcat-link hover-link text-sm text-muted-foreground"
                  >
                    {sub.title}
                  </Link>
                </li>
              ))}
            </StaggeredList>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

// Full Categories Accordion - all categories in one accordion group
export function CategoriesAccordion() {
  return (
    <Accordion type="multiple" className="w-full space-y-4">
      {categories.map((category) => (
        <AccordionItem
          key={category.id}
          value={category.id}
          className="border border-border rounded-lg overflow-hidden bg-card accordion-item"
        >
          <AccordionTrigger 
            className="px-5 py-4 hover:bg-muted/50 hover:no-underline [&[data-state=open]>svg]:rotate-180"
          >
            <span className="text-lg font-semibold text-card-foreground transition-colors">
              {category.title}
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <div className="px-5 pb-5 pt-2 border-t border-border/50">
              <ul className="grid gap-1 sm:grid-cols-2">
                {category.subcategories.map((sub) => (
                  <li key={sub.id}>
                    <Link
                      href={`/categories/${category.id}/${sub.id}`}
                      className="subcat-link hover-link text-sm text-foreground/80 flex items-center gap-2"
                    >
                      <ChevronRight className="h-3 w-3 text-primary/60" aria-hidden="true" />
                      {sub.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
