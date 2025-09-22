
import type { Metadata } from 'next';
import { Roboto, Montserrat } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
import { organizationSchema } from '@/lib/schema';
import { LeadPopup } from '@/components/shared/LeadPopup';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-roboto',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: {
    default: 'Procellence Technology',
    template: '%s | Procellence Technology',
  },
  description: 'Innovating the Future of Business with cutting-edge technology solutions.',
  keywords: ['Technology Solutions', 'Software Development', 'AI Integration', 'Cloud Consulting', 'Strategic IT'],
  authors: [{ name: 'Procellence Technology' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Procellence Technology',
    description: 'Innovating the Future of Business with cutting-edge technology solutions.',
    url: 'https://your-domain.com', // Replace with your actual domain
    siteName: 'Procellence Technology',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Procellence Technology',
    description: 'Innovating the Future of Business with cutting-edge technology solutions.',
    // creator: '@your_twitter_handle', // Replace with your Twitter handle
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          roboto.variable,
          montserrat.variable
        )}
      >
        <div className="relative flex min-h-dvh flex-col bg-background">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Toaster />
        <LeadPopup />
      </body>
    </html>
  );
}
