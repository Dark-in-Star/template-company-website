
'use client';

import * as React from 'react';
import { services } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from '@/components/ui/chart';
import { Pie, PieChart, Cell } from 'recharts';

const chartData = services.map(service => ({
  name: service.title,
  value: service.projects?.length || 0,
  fill: `hsl(var(--chart-${services.indexOf(service) + 1}))`,
}));

const chartConfig = services.reduce((acc, service, index) => {
  acc[service.title] = {
    label: service.title,
    color: `hsl(var(--chart-${index + 1}))`,
  };
  return acc;
}, {} as any);

export function ServicesChart() {
  const totalProjects = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.value, 0);
  }, []);

  return (
    <section className="bg-secondary">
        <div className="container mx-auto">
            <Card className="flex flex-col">
                <CardHeader className="items-center pb-0">
                <CardTitle className="font-heading text-2xl">Project Distribution</CardTitle>
                <CardDescription>A breakdown of our completed projects by service</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 pb-0">
                <ChartContainer
                    config={chartConfig}
                    className="mx-auto aspect-square max-h-[300px]"
                >
                    <PieChart>
                    <ChartTooltip
                        cursor={false}
                        content={<ChartTooltipContent hideLabel />}
                    />
                    <Pie
                        data={chartData}
                        dataKey="value"
                        nameKey="name"
                        innerRadius="60%"
                        strokeWidth={5}
                    >
                         {chartData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.fill} />
                        ))}
                    </Pie>
                    <ChartLegend content={<ChartLegendContent nameKey="name" />} />
                    </PieChart>
                </ChartContainer>
                </CardContent>
            </Card>
        </div>
    </section>
  );
}
