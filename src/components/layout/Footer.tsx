'use client';

import Link from 'next/link';
import { Twitter, Linkedin, Facebook, Github, Instagram } from 'lucide-react';
import { useEffect, useState } from 'react';

import { Logo } from '@/components/Logo';
import { navLinks } from '@/lib/data';
import { Button } from '@/components/ui/button';

export function Footer() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }
  return (
    <footer className="w-full border-t bg-background">
      <div className="container mx-auto grid grid-cols-1 gap-8 px-6 py-12 md:grid-cols-3 md:px-8">
        <div className="flex flex-col items-start gap-4">
          <Logo />
          <p className="text-sm text-muted-foreground">
            Empowering businesses with innovative technology solutions.
          </p>
          <div className="flex gap-2">
            <Button variant="ghost" size="icon" asChild>
                <a href="https://twitter.com" target="_blank" aria-label="Twitter">
                    <Twitter className="h-5 w-5" />
                </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
                <a href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5" />
                </a>
            </Button>
             <Button variant="ghost" size="icon" asChild>
                <a href="https://facebook.com" target="_blank" aria-label="Facebook">
                    <Facebook className="h-5 w-5" />
                </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
                <a href="https://instagram.com" target="_blank" aria-label="Instagram">
                    <Instagram className="h-5 w-5" />
                </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com" target="_blank" aria-label="GitHub">
                    <Github className="h-5 w-5" />
                </a>
            </Button>
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
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary"
                  >
                    {link.label}
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
                <Link
                  href="/privacy-policy"
                  className="text-muted-foreground hover:text-primary"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-service"
                  className="text-muted-foreground hover:text-primary"
                >
                  Terms of Service
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
      <div className="border-t">
        <div className="container mx-auto flex items-center justify-center px-4 py-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Procellence Technology. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
