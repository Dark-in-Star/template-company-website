import Link from 'next/link';
import { BotMessageSquare } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn('flex items-center gap-2', className)}>
      <BotMessageSquare className="h-8 w-8 text-primary" />
      <div className="flex flex-col">
        <span className="text-xl font-bold tracking-tighter text-foreground">
          Procellence Technology
        </span>
        <span className="text-xs text-muted-foreground">
          Innovating the Future of Business
        </span>
      </div>
    </Link>
  );
}
