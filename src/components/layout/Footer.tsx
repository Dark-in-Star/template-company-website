
'use client';

import Link from 'next/link';
import { Twitter, Linkedin, Facebook, Github, Instagram, Rocket } from 'lucide-react';
import { Logo } from '@/components/Logo';
import { navLinks } from '@/lib/data';
import { Button } from '@/components/ui/button';
import * as React from 'react';

export function Footer() {
    const [year, setYear] = React.useState(new Date().getFullYear());

    React.useEffect(() => {
        setYear(new Date().getFullYear());
    }, []);

  return (
    <footer className="w-full border-t bg-secondary/20 text-foreground">
      <div className="container mx-auto grid grid-cols-1 gap-8 px-6 py-12 md:grid-cols-3 md:px-8">
        <div className="flex flex-col items-start gap-4">
          <Logo />
          <p className="text-sm text-muted-foreground">
            Empowering businesses with innovative technology solutions.
          </p>
          <div className="flex gap-2">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="flex h-10 w-10 items-center justify-center rounded-full text-muted-foreground transition-all hover:scale-110 hover:bg-primary/10 hover:text-primary">
                <Twitter className="h-5 w-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="flex h-10 w-10 items-center justify-center rounded-full text-muted-foreground transition-all hover:scale-110 hover:bg-primary/10 hover:text-primary">
                <Linkedin className="h-5 w-5" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex h-10 w-10 items-center justify-center rounded-full text-muted-foreground transition-all hover:scale-110 hover:bg-primary/10 hover:text-primary">
                <Facebook className="h-5 w-5" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex h-10 w-10 items-center justify-center rounded-full text-muted-foreground transition-all hover:scale-110 hover:bg-primary/10 hover:text-primary">
                <Instagram className="h-5 w-5" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="flex h-10 w-10 items-center justify-center rounded-full text-muted-foreground transition-all hover:scale-110 hover:bg-primary/10 hover:text-primary">
                <Github className="h-5 w-5" />
            </a>
          </div>
          <div className="mt-2">
            <Link href="/contact">
                <Button size="sm" className="group/button">
                    Request App Demo
                    <Rocket className="ml-2 h-4 w-4 animate-pulse" />
                </Button>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 text-sm md:col-span-2 md:grid-cols-3">
          <div>
            <h3 className="font-semibold tracking-wider text-foreground">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="group flex items-center text-muted-foreground transition-colors hover:text-primary">
                    <span className="mr-2 font-bold transition-transform duration-300 group-hover:translate-x-1">&gt;</span>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold tracking-wider text-foreground">
              Legal
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/privacy-policy" className="group flex items-center text-muted-foreground transition-colors hover:text-primary">
                    <span className="mr-2 font-bold transition-transform duration-300 group-hover:translate-x-1">&gt;</span>
                    <span>Privacy Policy</span>
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="group flex items-center text-muted-foreground transition-colors hover:text-primary">
                    <span className="mr-2 font-bold transition-transform duration-300 group-hover:translate-x-1">&gt;</span>
                    <span>Terms of Service</span>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold tracking-wider text-foreground">
              Contact
            </h3>
            <ul className="mt-4 space-y-2 text-muted-foreground">
                <li>123 Innovation Drive</li>
                <li>Tech City, TX 12345</li>
                <li className='pt-2'>
                    <a href="mailto:contact@procellencetechnology.com" className="break-all hover:text-primary">
                        contact@procellencetechnology.com
                    </a>
                </li>
                <li>
                    <a href="tel:+1234567890" className="hover:text-primary">
                        (123) 456-7890
                    </a>
                </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-border/50">
        <div className="container mx-auto flex items-center justify-center px-4 py-4">
          <p className="text-sm text-muted-foreground">
            &copy; {year} Procellence Technology. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
