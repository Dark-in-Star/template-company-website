
import { HeroSection } from '@/components/home/HeroSection';
import { AboutSection } from '@/components/home/AboutSection';
import { ServicesSection } from '@/components/home/ServicesSection';
import { WhyChooseUsSection } from '@/components/home/WhyChooseUsSection';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { BrochureSummarizerSection } from '@/components/home/BrochureSummarizerSection';
import { BlogSection } from '@/components/home/BlogSection';
import { services, blogPosts, testimonials, features } from '@/lib/data';
import * as placeholderImages from '@/app/lib/placeholder-images.json';
import type { Image } from '@/lib/types';
import { StatsSection } from '@/components/home/StatsSection';

export default function Home() {
  const aboutImage = placeholderImages.about as Image;
  const heroImage = placeholderImages.hero as Image;
  
  return (
    <>
      <HeroSection heroImage={heroImage} />
       <div className="relative">
        <div className="container -mt-24 pb-12">
          <StatsSection />
        </div>
      </div>
      <AboutSection aboutImage={aboutImage} />
      <ServicesSection services={services.slice(0, 4)} />
      <WhyChooseUsSection features={features} />
      <BlogSection posts={blogPosts.slice(0, 3)} />
      <TestimonialsSection testimonials={testimonials} />
      <BrochureSummarizerSection />
    </>
  );
}
