import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { CareerForm } from './CareerForm';

export const metadata = {
  title: 'Careers',
  description: 'Join the team at Procellence Technology and help us innovate the future of business.',
};

export default function CareersPage() {
  return (
    <>
      <section>
        <div className="container mx-auto">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Join Our Team</h1>
                <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                    We are always looking for passionate, innovative, and dedicated individuals to join our mission.
                </p>
            </div>
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter">Why Work With Us?</h2>
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
            <div className="rounded-lg overflow-hidden">
              <Image
                src="https://picsum.photos/seed/careers-team/600/400"
                alt="Our team collaborating"
                data-ai-hint="diverse team working"
                width={600}
                height={400}
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary">
        <div className="container mx-auto">
            <div className="mx-auto max-w-3xl">
                <CareerForm />
            </div>
        </div>
      </section>
    </>
  );
}
