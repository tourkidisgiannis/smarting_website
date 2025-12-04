'use client';

import * as Accordion from '@radix-ui/react-accordion';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { categories, type Category } from '@/data/categories';

interface CategoryAccordionProps {
  category: Category;
}

export function CategoryAccordion({ category }: CategoryAccordionProps) {
  return (
    <Accordion.Root type="single" collapsible className="w-full">
      <Accordion.Item value={category.id} className="border border-border rounded-lg overflow-hidden">
        <Accordion.Header className="flex">
          <Accordion.Trigger
            className="category-accordion-trigger group flex flex-1 items-center justify-between px-4 py-4 text-left bg-card hover:bg-opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            aria-label={`Expand ${category.title}`}
          >
            <span className="text-lg font-medium text-card-foreground group-hover:text-primary transition-colors">
              {category.title}
            </span>
            <ChevronRight
              className="category-chevron h-5 w-5 text-neutralGray group-hover:text-primary shrink-0"
              aria-hidden="true"
            />
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content 
          className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up"
        >
          <div className="px-4 pb-4 pt-2" role="region" aria-label={`${category.title} subcategories`}>
            <ul className="space-y-1">
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
            </ul>
          </div>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
}

// Full Categories Accordion - all categories in one accordion group
export function CategoriesAccordion() {
  return (
    <Accordion.Root type="multiple" className="w-full space-y-4">
      {categories.map((category) => (
        <Accordion.Item 
          key={category.id} 
          value={category.id} 
          className="accordion-item border border-border rounded-lg overflow-hidden bg-card"
        >
          <Accordion.Header className="flex">
            <Accordion.Trigger
              className="category-accordion-trigger group flex flex-1 items-center justify-between px-5 py-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              aria-label={`Expand ${category.title}`}
            >
              <span className="text-lg font-semibold text-card-foreground group-hover:text-primary transition-colors">
                {category.title}
              </span>
              <ChevronRight
                className="category-chevron h-5 w-5 text-neutralGray group-hover:text-primary shrink-0"
                aria-hidden="true"
              />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content 
            className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up"
          >
            <div className="px-5 pb-5 pt-2 border-t border-border/50">
              <ul className="grid gap-1 sm:grid-cols-2">
                {category.subcategories.map((sub) => (
                  <li key={sub.id}>
                    <Link
                      href={`/categories/${category.id}/${sub.id}`}
                      className="subcat-link hover-link text-sm text-muted-foreground flex items-center gap-2"
                    >
                      <ChevronRight className="h-3 w-3 text-primary/60" aria-hidden="true" />
                      {sub.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
