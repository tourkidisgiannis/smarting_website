"use client";

import { useRef, forwardRef } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown, ChevronRight } from "lucide-react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";
import { categories, type Category } from "@/data/categories";
import * as AccordionPrimitive from "@radix-ui/react-accordion";

const CustomAccordionTrigger = forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={`category-accordion-trigger flex flex-1 items-center gap-3 rounded-md py-4 text-left text-sm font-medium transition-all hover:underline [&[data-state=open]_.category-chevron]:rotate-90 ${className}`}
      {...props}
    >
      {children}
      <ChevronDown className="category-chevron h-4 w-4 shrink-0 transition-transform duration-200 ml-auto" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));

CustomAccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

interface CategoryAccordionProps {
  category: Category;
}

function StaggeredList({ children }: { children: React.ReactNode }) {
  const listRef = useRef<HTMLUListElement>(null);

  useGSAP(() => {
    gsap.from(listRef.current!.children, {
      y: 10,
      opacity: 0,
      duration: 0.3,
      stagger: 0.05,
      ease: "power2.out",
      delay: 0.1, // Wait for accordion to start opening
    });
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
      <AccordionItem
        value={category.id}
        className="border border-border rounded-lg overflow-hidden"
      >
        <CustomAccordionTrigger className="px-4 py-4 hover:bg-muted/50 hover:no-underline">
          <span className="text-lg font-medium text-card-foreground transition-colors">
            {category.title}
          </span>
        </CustomAccordionTrigger>
        <AccordionContent>
          <div
            className="px-4 pb-4 pt-2"
            role="region"
            aria-label={`${category.title} subcategories`}
          >
            <StaggeredList>
              {category.subcategories.map((sub) => (
                <li key={sub.id}>
                  <Link
                    href={`/services/${category.id}/${sub.id}`}
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

interface CategoriesAccordionProps {
  initialCategories?: Category[];
}

// Full Categories Accordion - all categories in one accordion group
export function CategoriesAccordion({
  initialCategories,
}: CategoriesAccordionProps) {
  const categoriesToDisplay = initialCategories ?? categories;

  return (
    <Accordion type="multiple" className="w-full space-y-4">
      {categoriesToDisplay.map((category) => (
        <AccordionItem
          key={category.id}
          value={String(category.id)}
          className="border border-border rounded-lg overflow-hidden bg-card accordion-item"
        >
          <CustomAccordionTrigger className="px-5 py-4 hover:bg-muted/50 hover:no-underline">
            <span className="text-lg font-semibold text-card-foreground transition-colors">
              {category.title}
            </span>
          </CustomAccordionTrigger>

          <AccordionContent>
            <div className="px-5 pb-5 pt-2 border-t border-border/50">
              <ul className="grid gap-1 sm:grid-cols-2">
                {category.subcategories.map((sub) => (
                  <li key={sub.id}>
                    <Link
                      href={`/services/${category.id}/${sub.id}`}
                      className="subcat-link hover-link text-sm text-foreground/80 group"
                    >
                      <ChevronRight
                        className="h-3 w-3 shrink-0 text-primary/60"
                        aria-hidden="true"
                      />

                      <span className="flex-1">{sub.title}</span>

                      <ArrowRight
                        className="
      h-3.5 w-3.5 text-primary
      opacity-100 translate-x-0
      sm:opacity-0 sm:-translate-x-1
      sm:group-hover:opacity-100 sm:group-hover:translate-x-0
      sm:group-focus-visible:opacity-100 sm:group-focus-visible:translate-x-0
      transition-all duration-150
    "
                        aria-hidden="true"
                      />
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
