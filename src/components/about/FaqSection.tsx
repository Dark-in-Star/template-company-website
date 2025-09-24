
'use client';

import * as React from 'react';
import Link from 'next/link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';
import { faqs } from '@/lib/data';
import { INITIAL_FAQS_COUNT } from '@/lib/constants';
import { ScrollAnimation } from '@/components/shared/ScrollAnimation';

export function FaqSection() {
    const [showAllFaqs, setShowAllFaqs] = React.useState(false);
    const displayedFaqs = showAllFaqs ? faqs : faqs.slice(0, INITIAL_FAQS_COUNT);
    
    return (
        <div id="faq">
            <h2 className="font-heading mb-12 text-center text-3xl font-bold tracking-tighter">Frequently Asked Questions</h2>
            <div className="mx-auto max-w-3xl">
                <Accordion type="single" collapsible className="w-full">
                    {displayedFaqs.map((faq, index) => (
                        <ScrollAnimation key={index} delay={index * 150}>
                            <AccordionItem value={`item-${index}`}>
                                <AccordionTrigger className="font-heading text-left text-lg">{faq.question}</AccordionTrigger>
                                <AccordionContent className="text-base text-muted-foreground">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        </ScrollAnimation>
                    ))}
                </Accordion>
                <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <ScrollAnimation>
                        <>
                            {faqs.length > INITIAL_FAQS_COUNT && (
                                <Button variant="outline" onClick={() => setShowAllFaqs(!showAllFaqs)}>
                                    {showAllFaqs ? (
                                        <>
                                            <ChevronUp className="mr-2 h-4 w-4" />
                                            Show Less
                                        </>
                                    ) : (
                                        <>
                                            <ChevronDown className="mr-2 h-4 w-4" />
                                            Show More
                                        </>
                                    )}
                                </Button>
                            )}
                            {showAllFaqs && (
                                <Link href="/contact">
                                        <Button>
                                            Still have questions? Contact Us
                                            <ArrowRight className="ml-2 h-4 w-4" />
                                        </Button>
                                    </Link>
                            )}
                        </>
                    </ScrollAnimation>
                </div>
            </div>
        </div>
    );
}
