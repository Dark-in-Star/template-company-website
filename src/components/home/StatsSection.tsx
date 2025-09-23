
'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Users, Briefcase, TrendingUp } from 'lucide-react';
import { useCountUp } from '@/hooks/use-count-up';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { useRef } from 'react';

const stats = [
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    value: 100,
    label: 'Happy Clients',
    suffix: '+',
  },
  {
    icon: <Briefcase className="h-8 w-8 text-primary" />,
    value: 250,
    label: 'Projects Completed',
    suffix: '+',
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-primary" />,
    value: 10,
    label: 'Years of Experience',
    suffix: '+',
  },
];

function StatCounter({ value, suffix }: { value: number, suffix?: string }) {
    const ref = useRef<HTMLParagraphElement>(null);
    const { isInView } = useScrollAnimation({ ref, triggerOnce: true });
    const count = useCountUp({ end: value, duration: 2000, startOnMount: false });

    if (isInView && !count.isCounting && !count.isFinished) {
        count.start();
    }

    return (
        <p ref={ref} className="font-heading mt-4 text-4xl font-bold">
            {Math.floor(count.value)}{suffix}
        </p>
    );
}

export function StatsSection() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
      {stats.map((stat, index) => (
        <Card key={index} className="bg-background/80 shadow-lg backdrop-blur-sm transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <CardContent className="flex flex-col items-center justify-center p-6 text-center">
            {stat.icon}
            <StatCounter value={stat.value} suffix={stat.suffix} />
            <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
