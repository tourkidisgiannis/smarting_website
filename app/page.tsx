import { Hero } from "@/components/sections/Hero";
import { BentoGrid } from "@/components/sections/BentoGrid";
import { AboutSection } from "@/components/sections/AboutSection";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { CTASection } from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <BentoGrid />
      <AboutSection />
      <WhyChooseUs />
      <CTASection />
    </>
  );
}
