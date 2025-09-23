
'use client';

import { Users, Briefcase, TrendingUp } from 'lucide-react';
import { AnimatedStatCard } from './AnimatedStatCard';
import { ScrollAnimation } from '../shared/ScrollAnimation';

const stats = [
  {
    icon: Users,
    value: 100,
    label: 'Happy Clients',
    suffix: '+',
  },
  {
    icon: Briefcase,
    value: 250,
    label: 'Projects Completed',
    suffix: '+',
  },
  {
    icon: TrendingUp,
    value: 10,
    label: 'Years of Experience',
    suffix: '+',
  },
];

export function StatsSection() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
      {stats.map((stat, index) => (
        <ScrollAnimation key={index} delay={index * 150}>
            <AnimatedStatCard {...stat} />
        </ScrollAnimation>
      ))}
    </div>
  );
}
