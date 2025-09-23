
import type { LucideIcon } from 'lucide-react';

interface ContactInfoItemProps {
  icon: LucideIcon;
  title: string;
  children: React.ReactNode;
}

export function ContactInfoItem({ icon: Icon, title, children }: ContactInfoItemProps) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-primary text-primary-foreground">
        <Icon className="h-6 w-6" />
      </div>
      <div>
        <h3 className="font-heading font-semibold">{title}</h3>
        {children}
      </div>
    </div>
  );
}
