
'use client';

import * as React from 'react';
import { usePathname } from 'next/navigation';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { ContactForm } from './ContactForm';

const FIRST_POPUP_DELAY = 6000; // 6 seconds in milliseconds
const SUBSEQUENT_POPUP_DELAY = 30000; // 30 seconds in milliseconds
const SESSION_STORAGE_KEY = 'procellence-popup-shown-count';

export function LeadPopup() {
  const [isOpen, setIsOpen] = React.useState(false);
  const timerRef = React.useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (!open) {
      // When the dialog is closed, set a timer for it to reappear
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      timerRef.current = setTimeout(() => {
        setIsOpen(true);
      }, SUBSEQUENT_POPUP_DELAY);
    }
  };

  React.useEffect(() => {
    // Do not show popup on contact or careers page
    if (pathname === '/contact' || pathname === '/careers') {
      return;
    }

    const shownCountStr = sessionStorage.getItem(SESSION_STORAGE_KEY) || '0';
    const shownCount = parseInt(shownCountStr, 10);

    if (shownCount === 0) {
      timerRef.current = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem(SESSION_STORAGE_KEY, '1');
      }, FIRST_POPUP_DELAY);
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [pathname]);

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="grid max-h-[80dvh] w-[90vw] max-w-lg grid-rows-[auto_minmax(0,1fr)] p-0">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle>Connect With Us</DialogTitle>
          <DialogDescription>
            Have a project in mind or want to learn more? Let's talk!
          </DialogDescription>
        </DialogHeader>
        <div className="overflow-y-auto p-6">
          <ContactForm />
        </div>
      </DialogContent>
    </Dialog>
  );
}
