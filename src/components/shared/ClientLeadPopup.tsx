
'use client';

import dynamic from 'next/dynamic';

const LeadPopup = dynamic(() => import('@/components/shared/LeadPopup').then(mod => mod.LeadPopup), {
  ssr: false,
  loading: () => null,
});

export function ClientLeadPopup() {
  return <LeadPopup />;
}
