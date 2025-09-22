import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative w-full bg-secondary">
       <div className="absolute inset-0 overflow-hidden">
        <Image
          src="https://picsum.photos/seed/hero-bg-new/1920/1080"
          alt="Abstract background of technology and innovation"
          data-ai-hint="abstract technology"
          fill
          className="object-cover opacity-10"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
      </div>
      <div className="container relative mx-auto flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center text-center">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-heading">
            Innovating the Future of Business
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Procellence Technology delivers cutting-edge technology solutions that drive growth, efficiency, and success for your business. Let us be your partner in digital excellence.
          </p>
        </div>
        <div className="mt-10 flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
          <Link href="/services" className="w-full sm:w-auto">
            <Button size="lg" className="w-full">
              Explore Our Services
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link href="/contact" className="w-full sm:w-auto">
            <Button size="lg" variant="outline" className="w-full">
              Get in Touch
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
