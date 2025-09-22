import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export function AboutSection() {
  return (
    <section className="bg-background">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div className="order-2 space-y-4 text-center md:order-1 md:text-left">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">About Procellence Technology</h2>
            <p className="text-muted-foreground md:text-lg">
              We are a team of passionate innovators, strategists, and engineers dedicated to solving complex business challenges with state-of-the-art technology. Our mission is to empower our clients to achieve their full potential through digital transformation.
            </p>
            <p className="text-muted-foreground md:text-lg">
              With a foundation built on integrity, expertise, and a commitment to excellence, we forge long-lasting partnerships to ensure sustainable growth and success.
            </p>
            <Link href="/about">
              <Button>Learn More About Us</Button>
            </Link>
          </div>
          <div className="order-1 flex justify-center md:order-2">
             <Card>
                <CardContent className="p-0">
                    <Image
                        src="https://picsum.photos/seed/about-home/600/450"
                        alt="Our Team"
                        data-ai-hint="team collaboration"
                        width={600}
                        height={450}
                        className="rounded-lg object-cover"
                    />
                </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
