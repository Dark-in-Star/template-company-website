'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import { Logo } from '@/components/Logo';
import { navLinks } from '@/lib/data';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
                <Logo />
                <nav className="hidden lg:flex items-center space-x-6 text-sm font-medium">
                {navLinks.map((link) => (
                    <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                        'transition-colors hover:text-primary',
                        pathname === link.href ? 'text-primary' : 'text-muted-foreground'
                    )}
                    >
                    {link.label}
                    </Link>
                ))}
                </nav>
                <div className="flex items-center gap-4">
                    <Link href="/contact" className="hidden sm:block">
                        <Button>Contact Us</Button>
                    </Link>
                     <div className="lg:hidden h-6 w-6" />
                </div>
            </div>
        </header>
    );
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <Logo />
        
        <nav className="hidden lg:flex items-center space-x-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'transition-colors hover:text-primary',
                pathname === link.href ? 'text-primary' : 'text-muted-foreground'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
            <Link href="/contact" className="hidden sm:block">
                <Button>Contact Us</Button>
            </Link>
            <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                <span className="sr-only">Toggle Menu</span>
            </Button>
        </div>
      </div>
      {isOpen && (
        <div className="lg:hidden" onClick={() => setIsOpen(false)}>
          <div className="container flex flex-col items-start space-y-2 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  'w-full rounded-md p-2 text-left text-lg text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground',
                  pathname === link.href ? 'bg-accent text-accent-foreground' : ''
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="w-full">
              <Button className="w-full mt-2">Contact Us</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
