

import { ContactForm } from '@/components/shared/ContactForm';
import { Mail, Phone, MapPin } from 'lucide-react';
import { ContactInfoItem } from '@/components/shared/ContactInfoItem';
import { ScrollAnimation } from '@/components/shared/ScrollAnimation';

export default function ContactPage() {
  return (
    <>
      <section>
        <div className="container mx-auto">
            <div className="mb-12 text-center">
                <h1 className="font-heading text-4xl font-bold tracking-tighter sm:text-5xl animate-fade-in-down">Contact Us</h1>
                <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground animate-fade-in-up [animation-delay:200ms]">
                    We're here to help and answer any question you might have. We look forward to hearing from you.
                </p>
            </div>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <ScrollAnimation>
              <div className="space-y-8 lg:col-span-1">
                  <div>
                      <h2 className="font-heading text-2xl font-bold">Get in Touch</h2>
                      <p className="mt-2 text-muted-foreground">
                          Have a project in mind or just want to say hello? You can reach us through the following channels.
                      </p>
                  </div>
                  <div className="space-y-4">
                      <ContactInfoItem icon={Mail} title="Email">
                          <a href="mailto:contact@procellencetechnology.com" className="text-muted-foreground hover:text-primary">
                              contact@procellencetechnology.com
                          </a>
                      </ContactInfoItem>
                      <ContactInfoItem icon={Phone} title="Phone">
                          <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary">
                              (123) 456-7890
                          </a>
                      </ContactInfoItem>
                      <ContactInfoItem icon={MapPin} title="Office">
                          <p className="text-muted-foreground">
                              123 Innovation Drive<br/>
                              Tech City, TX 12345
                          </p>
                      </ContactInfoItem>
                  </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={200} className="lg:col-span-2">
              <ContactForm />
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </>
  );
}
