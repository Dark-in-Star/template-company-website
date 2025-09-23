

import Image from "next/image";
import Link from 'next/link';
import * as placeholderImages from '@/app/lib/placeholder-images.json';
import type { Image as ImageType } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { CheckCircle, Download } from 'lucide-react';
import { features } from '@/lib/data';
import * as LucideIcons from 'lucide-react';


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

const AppStoreIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"/>
        <path d="M10 2c1 .5 2 2 2 5"/>
    </svg>
)

const GooglePlayIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="m3 7.2 7.5 4.35 7.5-4.35"/>
        <path d="M10.5 12.8V21.3"/>
        <path d="M18 7.2v5.6l-7.5 4.35-7.5-4.35"/>
        <path d="M3 16.8V7.2L10.5 2.85 18 7.2v9.6L10.5 21.15Z"/>
    </svg>
)


export default function ProductsPage() {
  const qynkoHero = placeholderImages.qynkoHero as ImageType;
  const qynkoApp1 = placeholderImages.qynkoApp1 as ImageType;
  const qynkoApp2 = placeholderImages.qynkoApp2 as ImageType;
  const appleLogo = placeholderImages.appleLogo as ImageType;
  const androidLogo = placeholderImages.androidLogo as ImageType;

  return (
    <>
      <section className="bg-secondary">
        <div className="container mx-auto grid grid-cols-1 items-center gap-12 py-12 md:grid-cols-2 lg:py-24">
            <div className="space-y-6 text-center md:text-left">
                <h1 className="font-heading text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Meet Qynko: Your Ultimate Productivity Companion</h1>
                <p className="max-w-xl text-lg text-muted-foreground md:text-xl">
                    Streamline your workflow, organize your tasks, and achieve your goals with our beautifully designed and powerful application.
                </p>
                <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center md:justify-start">
                    <Link href="https://apps.apple.com/in/app/qynko/id6739987793" target="_blank">
                        <Button size="lg" variant="outline" className="h-16 w-full sm:w-48">
                            <AppStoreIcon className="mr-3 h-8 w-8" />
                            <div className="text-left">
                                <p className="text-xs">Available on the</p>
                                <p className="font-heading text-xl">App Store</p>
                            </div>
                        </Button>
                    </Link>
                    <Link href="https://play.google.com/store/apps/details?id=com.procellence.qynko&pli=1" target="_blank">
                        <Button size="lg" variant="super" className="h-16 w-full sm:w-48">
                           <GooglePlayIcon className="mr-3 h-8 w-8" />
                           <div className="text-left">
                                <p className="text-xs">GET IT ON</p>
                                <p className="font-heading text-xl">Google Play</p>
                            </div>
                        </Button>
                    </Link>
                </div>
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
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                 <Link href="https://apps.apple.com/in/app/qynko/id6739987793" target="_blank">
                    <Button size="lg" variant="outline" className="h-16 w-full sm:w-48">
                        <AppStoreIcon className="mr-3 h-8 w-8" />
                        <div className="text-left">
                            <p className="text-xs">Available on the</p>
                            <p className="font-heading text-xl">App Store</p>
                        </div>
                    </Button>
                 </Link>
                 <Link href="https://play.google.com/store/apps/details?id=com.procellence.qynko&pli=1" target="_blank">
                    <Button size="lg" variant="super" className="h-16 w-full sm:w-48">
                       <GooglePlayIcon className="mr-3 h-8 w-8" />
                       <div className="text-left">
                            <p className="text-xs">GET IT ON</p>
                            <p className="font-heading text-xl">Google Play</p>
                        </div>
                    </Button>
                </Link>
            </div>
        </div>
      </section>
    </>
  );
}
