'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import type { Category, Subcat } from '@/data/categories';
import { LogoCarousel } from '@/components/LogoCarousel';

interface AnimatedSubcategoryContentProps {
  category: Category;
  sub: Subcat;
  relatedServices: Subcat[];
}

export function AnimatedSubcategoryContent({
  category,
  sub,
  relatedServices,
}: AnimatedSubcategoryContentProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Animate breadcrumb
      tl.from('.breadcrumb-item', {
        x: -15,
        opacity: 0,
        duration: 0.4,
        stagger: 0.06,
        ease: 'power2.out',
      })
      // Animate title
      .from('.anim-title', {
        y: 35,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      }, '-=0.2')
      // Animate description
      .from('.anim-desc', {
        y: 25,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.out',
      }, '-=0.5')
      // Animate logo carousel
      .from('.anim-logos', {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: 'power3.out',
      }, '-=0.3')
      // Animate image
      .from('.anim-image', {
        y: 30,
        opacity: 0,
        scale: 0.98,
        duration: 0.8,
        ease: 'power3.out',
      }, '-=0.4')
      // Animate CTA
      .from('.anim-cta', {
        y: 25,
        opacity: 0,
        duration: 0.6,
        ease: 'power3.out',
      }, '-=0.3')
      // Animate related services section
      .from('.anim-related-title', {
        y: 20,
        opacity: 0,
        duration: 0.5,
        ease: 'power3.out',
      }, '-=0.2')
      .from('.anim-related-item', {
        y: 20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.08,
        ease: 'power3.out',
      }, '-=0.3');
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb Navigation */}
        <nav 
          aria-label="Breadcrumb" 
          className="flex items-center gap-2 text-sm text-neutralGray mb-8"
        >
          <Link href="/" className="breadcrumb-item hover-link">
            Αρχική
          </Link>
          <ChevronRight className="breadcrumb-item h-4 w-4" aria-hidden="true" />
          <Link href="/categories" className="breadcrumb-item hover-link">
            Υπηρεσίες
          </Link>
          <ChevronRight className="breadcrumb-item h-4 w-4" aria-hidden="true" />
          <Link 
            href={`/categories#${category.id}`} 
            className="breadcrumb-item hover-link"
          >
            {category.title}
          </Link>
          <ChevronRight className="breadcrumb-item h-4 w-4" aria-hidden="true" />
          <span className="breadcrumb-item text-softWhite" aria-current="page">
            {sub.title}
          </span>
        </nav>

        {/* Main Content */}
        <article>
          <header className="mb-8">
            <h1 className="anim-title text-3xl md:text-4xl font-bold text-softWhite mb-4">
              {sub.title}
            </h1>
            <p className="anim-desc text-lg text-neutralGray">
              {sub.description}
            </p>
          </header>

          {/* Logo Carousel - Partner Brands */}
          <div className="anim-logos mb-8">
            <LogoCarousel subcatId={sub.id} />
          </div>

          {/* Image */}
          <figure className="anim-image relative aspect-video rounded-xl overflow-hidden bg-card border border-border mb-8">
            <Image
              src={sub.image}
              alt={sub.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 800px"
              priority
            />
            <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-darkBlue/90 to-transparent p-4">
              <span className="text-sm text-neutralGray">
                Εικόνα: {sub.title}
              </span>
            </figcaption>
          </figure>

          {/* CTA Section */}
          <div className="anim-cta bg-card border border-border rounded-xl p-6 md:p-8 mb-12">
            <h2 className="text-xl font-semibold text-softWhite mb-2">
              Ενδιαφέρεστε για αυτή την υπηρεσία;
            </h2>
            <p className="text-neutralGray mb-4">
              Επικοινωνήστε μαζί μας για δωρεάν εκτίμηση και προσφορά.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-primaryTeal text-softWhite font-medium rounded-lg hover:bg-lightTeal transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                Ζητήστε Προσφορά
              </a>
              <Link
                href="/categories"
                className="inline-flex items-center justify-center px-6 py-3 border border-border text-softWhite font-medium rounded-lg hover:bg-card/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                Όλες οι Υπηρεσίες
              </Link>
            </div>
          </div>
        </article>

        {/* Related Services */}
        {relatedServices.length > 0 && (
          <section aria-labelledby="related-services">
            <h2 
              id="related-services" 
              className="anim-related-title text-2xl font-semibold text-softWhite mb-6"
            >
              Σχετικές Υπηρεσίες
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {relatedServices.map((related) => (
                <Link
                  key={related.id}
                  href={`/categories/${category.id}/${related.id}`}
                  className="anim-related-item group block p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                >
                  <h3 className="font-medium text-softWhite group-hover:text-primary transition-colors mb-1">
                    {related.title}
                  </h3>
                  <p className="text-sm text-neutralGray line-clamp-2">
                    {related.description}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
