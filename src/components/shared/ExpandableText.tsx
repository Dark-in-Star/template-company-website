

'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';

interface ExpandableTextProps {
  text: string;
}

const DEFAULT_MAX_LENGTH = 100;

export function ExpandableText({ text }: ExpandableTextProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = DEFAULT_MAX_LENGTH;

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
