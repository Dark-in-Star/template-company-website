
import Link from 'next/link';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn('flex items-center gap-2', className)}>
      <Image 
        src="https://procellence.com/img/logo.webp"
        alt="Procellence Technology Logo"
        width={40}
        height={40}
        className="h-10 w-10"
      />
      <span className="text-xl font-bold tracking-tighter">
        Procellence
      </span>
    </Link>
  );
}
