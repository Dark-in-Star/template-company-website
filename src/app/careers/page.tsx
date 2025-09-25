
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { CareerForm } from './CareerForm';
import * as placeholderImages from '@/app/lib/placeholder-images.json';
import type { ImageType as ImageType } from '@/lib/types';
import { ScrollAnimation } from '@/components/shared/ScrollAnimation';


export const metadata = {
  title: 'Careers',
  description: 'Join the team at Procellence Technology and help us innovate the future of business.',
};

export default function CareersPage() {
  const careers = placeholderImages.careers as ImageType;

  return (
    <>
      <section>
        <div className="container mx-auto">
            <div className="mb-12 text-center">
                <h1 className="font-heading text-4xl font-bold tracking-tighter sm:text-5xl animate-fade-in-down">Join Our Team</h1>
                <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground animate-fade-in-up [animation-delay:200ms]">
                    We are always looking for passionate, innovative, and dedicated individuals to join our mission.
                </p>
            </div>
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <ScrollAnimation>
              <div>
                <h2 className="font-heading text-3xl font-bold tracking-tighter">Why Work With Us?</h2>
                <p className="mt-4 text-muted-foreground">
                  At Procellence Technology, you'll be part of a dynamic team that values collaboration, creativity, and continuous learning. We tackle challenging projects that make a real-world impact and provide our team members with the resources and support they need to grow both professionally and personally.
                </p>
                <ul className="mt-6 space-y-4 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 text-primary">✔</span>
                    <span>Work on cutting-edge technology and impactful projects.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 text-primary">✔</span>
                    <span>A culture of collaboration, innovation, and respect.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 text-primary">✔</span>
                    <span>Competitive compensation and comprehensive benefits.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 text-primary">✔</span>
                    <span>Opportunities for professional development and growth.</span>
                  </li>
                </ul>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={200}>
              <div className="overflow-hidden rounded-lg">
                <Image
                  src={careers.src}
                  alt="Our team collaborating"
                  data-ai-hint={careers.hint}
                  width={careers.width}
                  height={careers.height}
                  className="w-full object-cover"
                />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <section className="bg-secondary">
        <div className="container mx-auto">
            <div className="mx-auto max-w-3xl">
              <ScrollAnimation>
                  <CareerForm />
              </ScrollAnimation>
            </div>
        </div>
      </section>
    </>
  );
}
