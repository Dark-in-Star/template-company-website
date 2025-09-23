
import { SummarizeBrochureClient } from './SummarizeBrochureClient';

export default function SummarizeBrochurePage() {
  return (
    <>
      <section className="bg-primary/5">
        <div className="container mx-auto py-16 text-center">
          <h1 className="font-heading text-4xl font-bold tracking-tighter sm:text-5xl animate-fade-in-down">AI Brochure Summarizer</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground animate-fade-in-up [animation-delay:200ms]">
            Paste the URL of a company brochure or landing page, and our AI will generate a concise summary of its key services and offerings.
          </p>
        </div>
      </section>
      <section>
        <div className="container mx-auto max-w-2xl">
          <SummarizeBrochureClient />
        </div>
      </section>
    </>
  );
}
