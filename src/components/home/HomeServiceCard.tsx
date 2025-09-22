

import Link from 'next/link';
import * as LucideIcons from 'lucide-react';
import type { Service } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { ExpandableText } from '@/components/shared/ExpandableText';

export function HomeServiceCard({ service }: { service: Service }) {
    const Icon = LucideIcons[service.icon as keyof typeof LucideIcons] as React.ElementType;

    return (
        <Card className="group flex flex-col text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
            <CardHeader className="items-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-8 w-8" />
                </div>
            </CardHeader>
            <CardContent className="flex flex-1 flex-col">
                <CardTitle className="text-xl">
                    <Link href={`/services/${service.slug}`}>{service.title}</Link>
                </CardTitle>
                <div className="flex-1">
                    <ExpandableText text={service.shortDescription} />
                </div>
                <div className="mt-4">
                    <Link href={`/services/${service.slug}`}>
                        <Button variant="link" className="p-0">
                            Learn More <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </Link>
                </div>
            </CardContent>
        </Card>
    );
}
