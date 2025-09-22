
'use client';

import Link from 'next/link';
import { Twitter, Linkedin, Facebook, Github, Instagram } from 'lucide-react';
import { Logo } from '@/components/Logo';
import { navLinks } from '@/lib/data';
import { Button } from '@/components/ui/button';

export function Footer() {
  return (
    <footer className="w-full border-t bg-gray-900 text-gray-200">
      <div className="container mx-auto grid grid-cols-1 gap-8 px-6 py-12 md:grid-cols-3 md:px-8">
        <div className="flex flex-col items-start gap-4">
          <Logo className="text-gray-200" />
          <p className="text-sm text-gray-400">
            Empowering businesses with innovative technology solutions.
          </p>
          <div className="flex gap-2">
            <Button variant="ghost" size="icon" asChild>
                <a href="https://twitter.com" target="_blank" aria-label="Twitter" className="text-gray-400 hover:text-white">
                    <Twitter className="h-5 w-5" />
                </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
                <a href="https://linkedin.com" target="_blank" aria-label="LinkedIn" className="text-gray-400 hover:text-white">
                    <Linkedin className="h-5 w-5" />
                </a>
            </Button>
             <Button variant="ghost" size="icon" asChild>
                <a href="https://facebook.com" target="_blank" aria-label="Facebook" className="text-gray-400 hover:text-white">
                    <Facebook className="h-5 w-5" />
                </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
                <a href="https://instagram.com" target="_blank" aria-label="Instagram" className="text-gray-400 hover:text-white">
                    <Instagram className="h-5 w-5" />
                </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com" target="_blank" aria-label="GitHub" className="text-gray-400 hover:text-white">
                    <Github className="h-5 w-5" />
                </a>
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 text-sm md:col-span-2 md:grid-cols-3">
          <div>
            <h3 className="font-semibold tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold tracking-wider text-white">
              Legal
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-gray-400 hover:text-white"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-service"
                  className="text-gray-400 hover:text-white"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold tracking-wider text-white">
              Contact
            </h3>
            <ul className="mt-4 space-y-2 text-gray-400">
                <li>123 Innovation Drive</li>
                <li>Tech City, TX 12345</li>
                <li className='pt-2'>
                    <a href="mailto:contact@procellencetechnology.com" className="break-all hover:text-white">
                        contact@procellencetechnology.com
                    </a>
                </li>
                <li>
                    <a href="tel:+1234567890" className="hover:text-white">
                        (123) 456-7890
                    </a>
                </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800">
        <div className="container mx-auto flex items-center justify-center px-4 py-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Procellence Technology. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
