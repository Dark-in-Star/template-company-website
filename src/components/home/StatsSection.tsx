
'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Users, Briefcase, Award } from 'lucide-react';

const stats = [
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    value: '100+',
    label: 'Happy Clients',
  },
  {
    icon: <Briefcase className="h-8 w-8 text-primary" />,
    value: '250+',
    label: 'Projects Completed',
  },
  {
    icon: <Award className="h-8 w-8 text-primary" />,
    value: '15+',
    label: 'Awards Won',
  },
];

export function StatsSection() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
      {stats.map((stat, index) => (
        <Card key={index} className="bg-background/80 shadow-lg backdrop-blur-sm transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <CardContent className="flex flex-col items-center justify-center p-6 text-center">
            {stat.icon}
            <p className="font-heading mt-4 text-4xl font-bold">{stat.value}</p>
            <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
