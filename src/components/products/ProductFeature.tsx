
import * as LucideIcons from 'lucide-react';

interface ProductFeatureProps {
    icon: keyof typeof LucideIcons;
    title: string;
    description: string;
}

export function ProductFeature({ icon, title, description }: ProductFeatureProps) {
    const Icon = LucideIcons[icon] as React.ElementType;
    return (
        <div className="flex flex-col items-center text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Icon className="h-8 w-8" />
            </div>
            <h3 className="font-heading text-xl font-bold">{title}</h3>
            <p className="mt-2 text-muted-foreground">{description}</p>
        </div>
    );
}
