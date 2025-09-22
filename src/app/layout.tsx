import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

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
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          inter.variable
        )}
      >
        <div className="relative flex min-h-dvh flex-col bg-background">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
