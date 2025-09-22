import { ShieldCheck, Zap, Users, BrainCircuit } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const features = [
  {
    icon: <BrainCircuit className="h-10 w-10 text-primary" />,
    title: 'Innovative Solutions',
    description: 'We leverage the latest technologies to build future-proof solutions that give you a competitive edge.',
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: 'Client-Centric Approach',
    description: 'Your success is our priority. We work as a true partner to understand your needs and deliver value.',
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-primary" />,
    title: 'Uncompromising Quality',
    description: 'Our commitment to quality ensures that we deliver robust, reliable, and secure products and services.',
  },
  {
    icon: <Zap className="h-10 w-10 text-primary" />,
    title: 'Agile & Efficient',
    description: 'We adopt agile methodologies to deliver results quickly and efficiently, adapting to changes with ease.',
  },
];

export function WhyChooseUsSection() {
  return (
    <section className="bg-background">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Why Choose Us?</h2>
          <p className="mx-auto mt-4 max-w-[600px] text-muted-foreground md:text-lg">
            We are more than just a vendor; we are your strategic partner in innovation and growth.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <Card key={feature.title} className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    {feature.icon}
                </div>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription className="mt-2">{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
