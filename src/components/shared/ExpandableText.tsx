
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';

interface ExpandableTextProps {
  text: string;
  maxLength?: number;
}

export function ExpandableText({ text, maxLength = 100 }: ExpandableTextProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Only show "Read More" if the text is longer than maxLength + 10 characters
  if (text.length <= maxLength + 10) {
    return <p className="text-muted-foreground mt-2 flex-1">{text}</p>;
  }

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="mt-2 flex-1">
      <p className="text-muted-foreground">
        {isExpanded ? text : `${text.substring(0, maxLength)}...`}
      </p>
      <Button variant="link" onClick={toggleExpanded} className="p-0 text-sm h-auto mt-2">
        {isExpanded ? 'Read Less' : 'Read More'}
      </Button>
    </div>
  );
}
