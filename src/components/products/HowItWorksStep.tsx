
interface HowItWorksStepProps {
    step: number;
    title: string;
    description: string;
}

export function HowItWorksStep({ step, title, description }: HowItWorksStepProps) {
    return (
        <div className="relative flex flex-col items-center text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-primary bg-primary font-heading text-3xl font-bold text-primary-foreground">
                {step}
            </div>
            <h3 className="font-heading text-xl font-bold">{title}</h3>
            <p className="mt-2 text-muted-foreground">{description}</p>
        </div>
    );
}
