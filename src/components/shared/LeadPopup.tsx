
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
import { LeadForm } from './LeadForm';

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
        if (timerRef.current) clearTimeout(timerRef.current);
        setIsOpen(false);
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
      <DialogContent className="grid w-[90vw] max-w-md grid-rows-[auto_minmax(0,1fr)] p-0">
        <DialogHeader className="p-6 text-center">
          <DialogTitle className="text-2xl font-bold">Ready to Innovate?</DialogTitle>
          <DialogDescription>
            Leave your details below and one of our experts will get in touch to discuss how we can help.
          </DialogDescription>
        </DialogHeader>
        <div className="overflow-y-auto p-6 pt-0">
          <LeadForm />
        </div>
      </DialogContent>
    </Dialog>
  );
}
