'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';
import { getBrandsForSubcategory, type Brand } from '@/data/brands';

interface LogoCarouselProps {
  subcatId: string;
}

export function LogoCarousel({ subcatId }: LogoCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const brands = getBrandsForSubcategory(subcatId);

  useEffect(() => {
    if (!trackRef.current || !containerRef.current) return;

    const track = trackRef.current;
    const items = track.querySelectorAll('.logo-item');
    
    if (items.length === 0) return;

    // Get the width of one set of logos
    const logoWidth = items[0].getBoundingClientRect().width;
    const gap = 48; // gap-12 = 48px
    const totalWidth = (logoWidth + gap) * brands.length;

    // Create infinite scroll animation
    const ctx = gsap.context(() => {
      gsap.to(track, {
        x: -totalWidth,
        duration: brands.length * 4, // 4 seconds per brand
        ease: 'none',
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth),
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [brands.length]);

  // Duplicate brands for seamless loop
  const duplicatedBrands = [...brands, ...brands, ...brands];

  return (
    <section className="py-12 overflow-hidden">
      <div className="container mx-auto px-4 mb-6">
        <h3 className="text-center text-sm font-medium text-neutralGray uppercase tracking-wider">
          Συνεργαζόμαστε με κορυφαίες εταιρείες
        </h3>
      </div>
      
      <div 
        ref={containerRef} 
        className="relative w-full overflow-hidden"
        style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
      >
        <div
          ref={trackRef}
          className="flex items-center gap-12 w-max"
        >
          {duplicatedBrands.map((brand, index) => (
            <LogoItem key={`${brand.name}-${index}`} brand={brand} />
          ))}
        </div>
      </div>
    </section>
  );
}

function LogoItem({ brand }: { brand: Brand }) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="logo-item flex-shrink-0 flex items-center justify-center w-32 h-16 bg-transparent rounded-lg border-0 px-4 py-2 transition-all duration-300">
      {brand.logo && !imageError ? (
        <Image
          src={brand.logo}
          alt={brand.name}
          width={100}
          height={32}
          className="max-h-8 max-w-full object-contain"
          onError={() => setImageError(true)}
          unoptimized // For SVG files
        />
      ) : (
        <span className="text-sm font-medium text-neutralGray text-center leading-tight">
          {brand.name}
        </span>
      )}
    </div>
  );
}
