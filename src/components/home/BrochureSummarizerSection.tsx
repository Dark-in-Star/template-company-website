import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Bot, Lightbulb } from 'lucide-react';

export function BrochureSummarizerSection() {
  return (
    <section className="bg-background">
      <div className="container mx-auto">
        <div className="rounded-lg bg-gradient-to-r from-primary to-primary/80 p-8 text-primary-foreground md:p-12">
            <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-3">
                <div className="flex items-center justify-center gap-4 text-center md:col-span-1 md:justify-start">
                    <Lightbulb className="h-12 w-12" />
                    <Bot className="h-20 w-20" />
                </div>
                <div className="text-center md:col-span-2 md:text-left">
                    <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                        Discover Our AI-Powered Brochure Summarizer
                    </h2>
                    <p className="mt-4 max-w-[600px] opacity-90">
                        Have a brochure you want to quickly understand? Paste its URL into our smart tool and get a concise summary of key services and offerings in seconds.
                    </p>
                    <Link href="/summarize-brochure" className="mt-6 inline-block">
                        <Button variant="secondary" size="lg">Try the AI Tool Now</Button>
                    </Link>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
