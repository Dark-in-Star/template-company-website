import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Bot, Lightbulb } from 'lucide-react';

export function BrochureSummarizerSection() {
  return (
    <section className="bg-background">
      <div className="container mx-auto">
        <div className="rounded-lg bg-gradient-to-r from-primary to-primary/80 p-8 text-primary-foreground md:p-12">
            <div className="grid grid-cols-1 items-center gap-8 text-center md:grid-cols-3 md:text-left">
                <div className="flex items-center justify-center gap-4 md:col-span-1">
                    <Lightbulb className="h-12 w-12" />
                    <Bot className="hidden h-20 w-20 sm:block" />
                </div>
                <div className="md:col-span-2">
                    <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                        Discover Our AI-Powered Brochure Summarizer
                    </h2>
                    <p className="mt-4 max-w-[600px] opacity-90 md:mx-0 mx-auto">
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
