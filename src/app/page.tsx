
import { HeroSection } from '@/components/home/HeroSection';
import { services, blogPosts, testimonials, features } from '@/lib/data';
import * as placeholderImages from '@/app/lib/placeholder-images.json';
import type { Image } from '@/lib/types';
import { StatsSection } from '@/components/home/StatsSection';
import dynamic from 'next/dynamic';
import { Skeleton } from '@/components/ui/skeleton';

const AboutSection = dynamic(() => import('@/components/home/AboutSection').then(mod => mod.AboutSection), {
  loading: () => <Skeleton className="h-[400px] w-full" />,
});
const ServicesSection = dynamic(() => import('@/components/home/ServicesSection').then(mod => mod.ServicesSection), {
  loading: () => <Skeleton className="h-[500px] w-full" />,
});
const WhyChooseUsSection = dynamic(() => import('@/components/home/WhyChooseUsSection').then(mod => mod.WhyChooseUsSection), {
    loading: () => <Skeleton className="h-[400px] w-full" />,
});
const BlogSection = dynamic(() => import('@/components/home/BlogSection').then(mod => mod.BlogSection), {
    loading: () => <Skeleton className="h-[500px] w-full" />,
});
const TestimonialsSection = dynamic(() => import('@/components/home/TestimonialsSection').then(mod => mod.TestimonialsSection), {
    loading: () => <Skeleton className="h-[400px] w-full" />,
});
const BrochureSummarizerSection = dynamic(() => import('@/components/home/BrochureSummarizerSection').then(mod => mod.BrochureSummarizerSection), {
  loading: () => <Skeleton className="h-[200px] w-full" />,
});


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
