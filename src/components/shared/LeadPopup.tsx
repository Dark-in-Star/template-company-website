
'use client';

import * as React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { ContactForm } from './ContactForm';

const POPUP_DELAY = 18000; // 0.3 minutes in milliseconds
const SESSION_STORAGE_KEY = 'procellence-popup-shown';

export function LeadPopup() {
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    const hasBeenShown = sessionStorage.getItem(SESSION_STORAGE_KEY);

    if (!hasBeenShown) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem(SESSION_STORAGE_KEY, 'true');
      }, POPUP_DELAY);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
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
