import Link from 'next/link';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn('flex items-center gap-2', className)}>
      <Image 
        src="https://procellence.com/img/logo.webp"
        alt="Procellence Technology Logo"
        width={32}
        height={32}
        className="h-8 w-8"
      />
      <span className="text-xl font-bold tracking-tighter text-foreground">
        Procellence
      </span>
    </Link>
  );
}
