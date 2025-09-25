
import { HeroSection } from '@/components/home/HeroSection';
import { services, blogPosts, testimonials, features, smartCrmSlides } from '@/lib/data';
import * as placeholderImages from '@/app/lib/placeholder-images.json';
import type { ImageType } from '@/lib/types';
import { StatsSection } from '@/components/home/StatsSection';
import dynamic from 'next/dynamic';
import { Skeleton } from '@/components/ui/skeleton';
import { ScrollAnimation } from '@/components/shared/ScrollAnimation';

const SmartCrmSection = dynamic(() => import('@/components/home/SmartCrmSection').then(mod => mod.SmartCrmSection), {
  loading: () => <Skeleton className="h-[500px] w-full" />,
});
const AboutSection = dynamic(() => import('@/components/home/AboutSection').then(mod => mod.AboutSection), {
  loading: () => <Skeleton className="h-[500px] w-full" />,
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
  const aboutImage = placeholderImages.aboutV2 as ImageType;
  const heroImage = placeholderImages.hero as ImageType;
  
  return (
    <>
      <HeroSection heroImage={heroImage} />
       <div className="relative bg-primary/5">
        <div className="container -translate-y-16">
            <ScrollAnimation>
                <StatsSection />
            </ScrollAnimation>
        </div>
      </div>
      <SmartCrmSection slides={smartCrmSlides} />
      <AboutSection aboutImage={aboutImage} />
      <ScrollAnimation>
        <ServicesSection services={services.slice(0, 4)} />
      </ScrollAnimation>
      <ScrollAnimation>
        <WhyChooseUsSection features={features} />
      </ScrollAnimation>
      <ScrollAnimation>
        <BlogSection posts={blogPosts.slice(0, 3)} />
      </ScrollAnimation>
      <ScrollAnimation>
        <TestimonialsSection testimonials={testimonials} />
      </ScrollAnimation>
      <ScrollAnimation>
        <BrochureSummarizerSection />
      </ScrollAnimation>
    </>
  );
}
