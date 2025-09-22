import { ContactForm } from '@/components/shared/ContactForm';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <>
      <section className="bg-primary/5">
        <div className="container mx-auto py-16 text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Contact Us</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            We're here to help and answer any question you might have. We look forward to hearing from you.
          </p>
        </div>
      </section>
      <section>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <div className="space-y-8 lg:col-span-1">
                <div>
                    <h2 className="text-2xl font-bold">Get in Touch</h2>
                    <p className="mt-2 text-muted-foreground">
                        Have a project in mind or just want to say hello? You can reach us through the following channels.
                    </p>
                </div>
                <div className="space-y-4">
                    <div className="flex items-start gap-4">
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-primary text-primary-foreground">
                            <Mail className="h-6 w-6" />
                        </div>
                        <div>
                            <h3 className="font-semibold">Email</h3>
                            <a href="mailto:contact@procellencetechnology.com" className="text-muted-foreground hover:text-primary">
                                contact@procellencetechnology.com
                            </a>
                        </div>
                    </div>
                     <div className="flex items-start gap-4">
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-primary text-primary-foreground">
                            <Phone className="h-6 w-6" />
                        </div>
                        <div>
                            <h3 className="font-semibold">Phone</h3>
                            <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary">
                                (123) 456-7890
                            </a>
                        </div>
                    </div>
                     <div className="flex items-start gap-4">
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-primary text-primary-foreground">
                            <MapPin className="h-6 w-6" />
                        </div>
                        <div>
                            <h3 className="font-semibold">Office</h3>
                            <p className="text-muted-foreground">
                                123 Innovation Drive<br/>
                                Tech City, TX 12345
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
