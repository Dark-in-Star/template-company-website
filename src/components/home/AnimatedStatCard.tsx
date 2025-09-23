
'use client';

import * as React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useCountUp } from '@/hooks/use-count-up';
import { cn } from '@/lib/utils';
import type { LucideIcon } from 'lucide-react';

interface AnimatedStatCardProps {
  icon: LucideIcon;
  value: number;
  label: string;
  suffix?: string;
}

export function AnimatedStatCard({ icon: Icon, value, label, suffix }: AnimatedStatCardProps) {
  const [animationFinished, setAnimationFinished] = React.useState(false);
  const { count, ref } = useCountUp({ end: value });

  React.useEffect(() => {
    if (count === value) {
      // Add a small delay before triggering the icon animation for a better effect
      const timer = setTimeout(() => {
        setAnimationFinished(true);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [count, value]);

  return (
    <Card className="bg-background/80 shadow-lg backdrop-blur-sm">
      <CardContent className="flex flex-col items-center justify-center p-6 text-center">
        <Icon className={cn("h-8 w-8 text-primary transition-transform duration-500", animationFinished && "animate-pulse")} />
        <p ref={ref} className="font-heading mt-4 text-4xl font-bold">
            {count}{suffix}
        </p>
        <p className="mt-2 text-sm text-muted-foreground">{label}</p>
      </CardContent>
    </Card>
  );
}
