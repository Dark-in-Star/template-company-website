
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Twitter, Mail, Facebook, Instagram } from 'lucide-react';
import type { TeamMember } from '@/lib/types';
import * as React from 'react';


export function SocialLink({ platform, url }: { platform: keyof NonNullable<TeamMember['socials']>, url: string | undefined }) {
  if (!url) return null;

  const icons: { [key in keyof NonNullable<TeamMember['socials']>]: React.ReactNode } = {
    linkedin: <Linkedin className="h-5 w-5" />,
    twitter: <Twitter className="h-5 w-5" />,
    github: <Github className="h-5 w-5" />,
    facebook: <Facebook className="h-5 w-5" />,
    instagram: <Instagram className="h-5 w-5" />,
    email: <Mail className="h-5 w-5" />,
  };

  return (
    <Link href={url} target="_blank" rel="noopener noreferrer">
      <Button variant="ghost" size="icon" className="text-muted-foreground hover:bg-accent hover:text-accent-foreground">
        {icons[platform]}
        <span className="sr-only">{platform}</span>
      </Button>
    </Link>
  );
}
