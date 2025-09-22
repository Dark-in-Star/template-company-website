import Link from 'next/link';
import { BotMessageSquare } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn('flex items-center gap-2', className)}>
      <BotMessageSquare className="h-8 w-8 text-primary" />
      <span className="text-xl font-bold tracking-tighter text-foreground">
        Procellence
      </span>
    </Link>
  );
}
