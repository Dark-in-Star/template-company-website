import { HeroSection } from '@/components/home/HeroSection';
import { AboutSection } from '@/components/home/AboutSection';
import { ServicesSection } from '@/components/home/ServicesSection';
import { WhyChooseUsSection } from '@/components/home/WhyChooseUsSection';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { BrochureSummarizerSection } from '@/components/home/BrochureSummarizerSection';
import { BlogSection } from '@/components/home/BlogSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <BlogSection />
      <TestimonialsSection />
      <BrochureSummarizerSection />
    </>
  );
}
