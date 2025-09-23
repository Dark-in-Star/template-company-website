

import Image from "next/image";
import Link from 'next/link';
import * as placeholderImages from '@/app/lib/placeholder-images.json';
import type { Image as ImageType } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { CheckCircle, Download } from 'lucide-react';
import { features } from '@/lib/data';
import * as LucideIcons from 'lucide-react';
import { StoreButtons } from '@/components/shared/StoreButtons';


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
  const appleLogo = placeholderImages.appleLogo as ImageType;
  const androidLogo = placeholderImages.androidLogo as ImageType;

  return (
    <>
      <section className="bg-secondary md:h-screen md:flex md:items-center">
        <div className="container mx-auto grid grid-cols-1 items-center gap-12 py-12 md:grid-cols-2 lg:py-24">
            <div className="space-y-6 text-center md:text-left">
                <h1 className="font-heading text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Meet Qynko: Your Ultimate Productivity Companion</h1>
                <p className="max-w-xl text-lg text-muted-foreground md:text-xl">
                    Streamline your workflow, organize your tasks, and achieve your goals with our beautifully designed and powerful application.
                </p>
                <StoreButtons />
            </div>
            <div className="flex items-center justify-center">
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
            <div className="mb-12 text-center">
                <h2 className="font-heading text-3xl font-bold tracking-tighter sm:text-4xl">Key Features of Qynko</h2>
                <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                    Everything you need to be more productive, packed into one powerful app.
                </p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                {productFeatures.map((feature, index) => {
                    const Icon = LucideIcons[feature.icon as keyof typeof LucideIcons] as React.ElementType;
                    return (
                        <div key={index} className="flex flex-col items-center text-center">
                            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                                <Icon className="h-8 w-8" />
                            </div>
                            <h3 className="font-heading text-xl font-bold">{feature.title}</h3>
                            <p className="mt-2 text-muted-foreground">{feature.description}</p>
                        </div>
                    )
                })}
            </div>
        </div>
      </section>

      <section className="bg-primary/5">
        <div className="container mx-auto">
             <div className="mb-12 text-center">
                <h2 className="font-heading text-3xl font-bold tracking-tighter sm:text-4xl">How It Works</h2>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                {howItWorks.map((step) => (
                    <div key={step.step} className="relative flex flex-col items-center text-center">
                        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-primary bg-primary font-heading text-3xl font-bold text-primary-foreground">
                            {step.step}
                        </div>
                        <h3 className="font-heading text-xl font-bold">{step.title}</h3>
                        <p className="mt-2 text-muted-foreground">{step.description}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto">
            <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
                <div className="space-y-4">
                    <h2 className="font-heading text-3xl font-bold tracking-tighter">Beautifully Designed for Your Device</h2>
                    <p className="text-lg text-muted-foreground">
                        Qynko offers a consistent and delightful experience on both iOS and Android. Take a look at our app in action.
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                     <Image
                        src={qynkoApp1.src}
                        alt="Qynko App Screenshot 1"
                        data-ai-hint={qynkoApp1.hint}
                        width={qynkoApp1.width}
                        height={qynkoApp1.height}
                        className="rounded-xl object-cover shadow-lg"
                    />
                     <Image
                        src={qynkoApp2.src}
                        alt="Qynko App Screenshot 2"
                        data-ai-hint={qynkoApp2.hint}
                        width={qynkoApp2.width}
                        height={qynkoApp2.height}
                        className="mt-8 rounded-xl object-cover shadow-lg"
                    />
                </div>
            </div>
        </div>
      </section>

      <section className="bg-secondary">
        <div className="container mx-auto text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Get Started?</h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
                Download Qynko today and take the first step towards a more organized and productive life.
            </p>
            <div className="mt-8">
                <StoreButtons />
            </div>
        </div>
      </section>
    </>
  );
}
