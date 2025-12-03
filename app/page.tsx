import { Hero } from "@/components/sections/Hero";
import { BentoGrid } from "@/components/sections/BentoGrid";
import { AboutSection } from "@/components/sections/AboutSection";
import { ImageShowcase } from "@/components/sections/ImageShowcase";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { CTASection } from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <BentoGrid />
      <AboutSection />
      <ImageShowcase />
      <WhyChooseUs />
      <CTASection />
    </>
  );
}
