import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Frown } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex min-h-[calc(100vh-12rem)] flex-col items-center justify-center text-center">
      <Frown className="h-24 w-24 text-muted-foreground" />
      <h1 className="mt-8 text-4xl font-bold tracking-tighter sm:text-5xl">404 - Page Not Found</h1>
      <p className="mt-4 max-w-md text-lg text-muted-foreground">
        Oops! The page you are looking for does not exist. It might have been moved or deleted.
      </p>
      <Link href="/" className="mt-8">
        <Button>Go Back Home</Button>
      </Link>
    </div>
  );
}
