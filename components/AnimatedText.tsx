'use client';

import { useEffect, useRef, ReactNode } from 'react';
import { gsap } from 'gsap';

interface AnimatedTextProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span' | 'div';
}

export function AnimatedText({
  children,
  className = '',
  delay = 0,
  duration = 0.8,
  y = 30,
  as: Component = 'div',
}: AnimatedTextProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    gsap.fromTo(
      ref.current,
      { y, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration,
        delay,
        ease: 'power3.out',
      }
    );
  }, [delay, duration, y]);

  return (
    <Component ref={ref as React.RefObject<HTMLHeadingElement & HTMLParagraphElement & HTMLDivElement>} className={className} style={{ opacity: 0 }}>
      {children}
    </Component>
  );
}

interface AnimatedContainerProps {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
}

export function AnimatedContainer({
  children,
  className = '',
  stagger = 0.1,
  delay = 0,
}: AnimatedContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const elements = containerRef.current.querySelectorAll('[data-animate]');
    
    gsap.fromTo(
      elements,
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger,
        delay,
        ease: 'power3.out',
      }
    );
  }, [stagger, delay]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}

// Animated page header component
interface AnimatedPageHeaderProps {
  title: string;
  description?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

export function AnimatedPageHeader({
  title,
  description,
  titleClassName = 'text-4xl md:text-5xl font-bold tracking-tighter mb-4 text-foreground',
  descriptionClassName = 'text-lg text-foreground/80 max-w-2xl mx-auto',
}: AnimatedPageHeaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from('.anim-title', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      })
      .from('.anim-desc', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      }, '-=0.5');
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="text-center mb-12">
      <h1 className={`anim-title ${titleClassName}`}>
        {title}
      </h1>
      {description && (
        <p className={`anim-desc ${descriptionClassName}`}>
          {description}
        </p>
      )}
    </div>
  );
}

// Animated section for staggered children
interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function AnimatedSection({ children, className = '', delay = 0 }: AnimatedSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from('.anim-item', {
        y: 25,
        opacity: 0,
        duration: 0.6,
        stagger: 0.08,
        delay,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [delay]);

  return (
    <div ref={sectionRef} className={className}>
      {children}
    </div>
  );
}

// Animated breadcrumb
interface AnimatedBreadcrumbProps {
  children: ReactNode;
  className?: string;
}

export function AnimatedBreadcrumb({ children, className = '' }: AnimatedBreadcrumbProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    gsap.from(ref.current.children, {
      x: -10,
      opacity: 0,
      duration: 0.4,
      stagger: 0.05,
      ease: 'power2.out',
    });
  }, []);

  return (
    <nav ref={ref} className={className}>
      {children}
    </nav>
  );
}

// Animated card that fades in on scroll (could be enhanced with ScrollTrigger)
interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function AnimatedCard({ children, className = '', delay = 0 }: AnimatedCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    gsap.from(ref.current, {
      y: 30,
      opacity: 0,
      duration: 0.7,
      delay,
      ease: 'power3.out',
    });
  }, [delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
