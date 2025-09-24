
import Image from "next/image";
import * as placeholderImages from '@/app/lib/placeholder-images.json';
import type { Image as ImageType } from '@/lib/types';
import { StoreButtons } from '@/components/shared/StoreButtons';
import { ProductFeature } from '@/components/products/ProductFeature';
import { HowItWorksStep } from '@/components/products/HowItWorksStep';
import { ScrollAnimation } from "@/components/shared/ScrollAnimation";


const productFeatures = [
    {
        icon: 'Smartphone',
        title: 'Intuitive Interface',
        description: 'A seamless and user-friendly experience designed for efficiency.',
    },
    {
        icon: 'ShieldCheck',
        title: 'Secure & Reliable',
        description: 'Your data is protected with end-to-end encryption and robust security protocols.',
    },
    {
        icon: 'Zap',
        title: 'Blazing Fast Performance',
        description: 'Experience instant response times and a smooth, lag-free workflow.',
    },
    {
        icon: 'Cloud',
        title: 'Cloud Synchronization',
        description: 'Keep your data synced across all your devices, anytime, anywhere.',
    }
]

const howItWorks = [
    {
        step: 1,
        title: 'Download & Sign Up',
        description: 'Get the app from the App Store or Google Play and create your account in seconds.',
    },
    {
        step: 2,
        title: 'Customize Your Profile',
        description: 'Personalize your settings and preferences to tailor the experience to your needs.',
    },
    {
        step: 3,
        title: 'Start Exploring',
        description: 'Dive into the features and discover how Qynko can transform your daily tasks.',
    },
];

export default function ProductsPage() {
  const qynkoHero = placeholderImages.qynkoHero as ImageType;
  const qynkoApp1 = placeholderImages.qynkoApp1 as ImageType;
  const qynkoApp2 = placeholderImages.qynkoApp2 as ImageType;

  return (
    <>
      <section className="bg-secondary md:flex md:items-center md:h-screen overflow-hidden">
        <div className="container mx-auto grid grid-cols-1 items-center gap-12 py-12 md:grid-cols-2 lg:py-24">
            <div className="space-y-6 text-center md:text-left">
                <h1 className="font-heading text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl animate-fade-in-down">Meet Qynko: Your Ultimate Productivity Companion</h1>
                <p className="max-w-xl text-lg text-muted-foreground md:text-xl animate-fade-in-up [animation-delay:200ms]">
                    Streamline your workflow, organize your tasks, and achieve your goals with our beautifully designed and powerful application.
                </p>
                <div className="animate-fade-in-up [animation-delay:400ms]">
                    <StoreButtons />
                </div>
            </div>
            <div className="flex items-center justify-center animate-fade-in-up [animation-delay:600ms]">
                <Image
                    src={qynkoHero.src}
                    alt="Qynko App Showcase"
                    data-ai-hint={qynkoHero.hint}
                    width={qynkoHero.width}
                    height={qynkoHero.height}
                    className="max-w-xs rounded-lg object-contain shadow-2xl md:max-w-sm"
                />
            </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto">
            <ScrollAnimation className="mb-12 text-center">
              <h2 className="font-heading text-3xl font-bold tracking-tighter sm:text-4xl">Key Features of Qynko</h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                  Everything you need to be more productive, packed into one powerful app.
              </p>
            </ScrollAnimation>
            <ScrollAnimation className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                {productFeatures.map((feature, index) => (
                    <ScrollAnimation key={index} delay={index * 150}>
                        <ProductFeature {...feature} />
                    </ScrollAnimation>
                ))}
            </ScrollAnimation>
        </div>
      </section>

      <section className="bg-primary/5">
        <div className="container mx-auto">
             <ScrollAnimation className="mb-12 text-center">
                <h2 className="font-heading text-3xl font-bold tracking-tighter sm:text-4xl">How It Works</h2>
             </ScrollAnimation>
            <ScrollAnimation className="grid grid-cols-1 gap-8 md:grid-cols-3">
                {howItWorks.map((step, index) => (
                    <ScrollAnimation key={step.step} delay={index * 150}>
                        <HowItWorksStep {...step} />
                    </ScrollAnimation>
                ))}
            </ScrollAnimation>
        </div>
      </section>

      <section>
        <div className="container mx-auto">
            <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
                <ScrollAnimation>
                    <div className="space-y-4">
                        <h2 className="font-heading text-3xl font-bold tracking-tighter">Beautifully Designed for Your Device</h2>
                        <p className="text-lg text-muted-foreground">
                            Qynko offers a consistent and delightful experience on both iOS and Android. Take a look at our app in action.
                        </p>
                    </div>
                </ScrollAnimation>
                <div className="grid grid-cols-2 gap-4">
                    <ScrollAnimation delay={200}>
                        <Image
                            src={qynkoApp1.src}
                            alt="Qynko App Screenshot 1"
                            data-ai-hint={qynkoApp1.hint}
                            width={qynkoApp1.width}
                            height={qynkoApp1.height}
                            className="rounded-xl object-cover shadow-lg"
                        />
                    </ScrollAnimation>
                    <ScrollAnimation delay={300}>
                        <Image
                            src={qynkoApp2.src}
                            alt="Qynko App Screenshot 2"
                            data-ai-hint={qynkoApp2.hint}
                            width={qynkoApp2.width}
                            height={qynkoApp2.height}
                            className="mt-8 rounded-xl object-cover shadow-lg"
                        />
                    </ScrollAnimation>
                </div>
            </div>
        </div>
      </section>

      <section className="bg-secondary">
        <div className="container mx-auto text-center">
          <ScrollAnimation>
            <h2 className="font-heading text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Get Started?</h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
                Download Qynko today and take the first step towards a more organized and productive life.
            </p>
            <div className="mt-8">
                <StoreButtons />
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </>
  );
}
