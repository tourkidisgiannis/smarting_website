"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getSubcatQA } from "@/data/subcat-qa";

interface SubcategoryQAProps {
  subcatId: string;
  className?: string;
}

export function SubcategoryQA({
  subcatId,
  className = "",
}: SubcategoryQAProps) {
  const qaList = getSubcatQA(subcatId);

  if (qaList.length === 0) {
    return null;
  }

  // Generate schema.org structured data for FAQPage
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: qaList.map((qa) => ({
      "@type": "Question",
      name: qa.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: qa.answer,
      },
    })),
  };

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section
        className={`py-10 ${className}`}
        itemScope
        itemType="https://schema.org/FAQPage"
      >
        <h2
          className="text-2xl font-semibold text-foreground mb-6"
          id="faq-section-title"
        >
          Συχνές Ερωτήσεις
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {qaList.map((qa, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-border overflow-hidden"
              itemProp="mainEntity"
              itemScope
              itemType="https://schema.org/Question"
            >
              <AccordionTrigger
                className="px-4 py-3 text-left hover:no-underline bg-card hover:bg-accent/50 rounded-md transition-colors duration-200"
                itemProp="name"
              >
                <span className="text-foreground font-bold" itemProp="name">
                  {qa.question}
                </span>
              </AccordionTrigger>
              <AccordionContent
                className="px-4 pb-3 pt-0 text-foreground/80 bg-accent/10 backdrop-blur-sm border border-white/20 rounded-b-md shadow-sm"
                itemProp="acceptedAnswer"
                itemScope
                itemType="https://schema.org/Answer"
              >
                <div
                  itemProp="text"
                  className="prose prose-sm max-w-none py-2"
                  dangerouslySetInnerHTML={{
                    __html: qa.answer.replace(/\n/g, "<br />"),
                  }}
                />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </>
  );
}
