
import type { LucideIcon } from 'lucide-react';

export type NavLink = {
  href: string;
  label: string;
};

export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  image: {
    src: string;
    width: number;
    height: number;
    hint: string;
  };
  projects?: {
    title: string;
    description: string;
    image: {
      src: string;
      width: number;
      height: number;
      hint: string;
    };
  }[];
  industries: string[];
};

export type TeamMember = {
  name: string;
  role: string;
  image: {
    src: string;
    width: number;
    height: number;
    hint: string;
  };
  bio: string;
  socials?: {
    linkedin?: string;
    twitter?: string;
    github?: string;
    facebook?: string;
    instagram?: string;
    email?: string;
  };
};

export type Testimonial = {
  name: string;
  company: string;
  comment: string;
  image: {
    src: string;
    width: number;
    height: number;
    hint: string;
  };
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  image: {
    src: string;
    width: number;
    height: number;
    hint: string;
  };
};

export type TimelineEvent = {
    icon: keyof typeof import('lucide-react');
    date: string;
    title: string;
    description: string;
};

export type FAQ = {
    question: string;
    answer: string;
}

export type Feature = {
    icon: keyof typeof import('lucide-react');
    title: string;
    description: string;
}

export type CountryCode = {
    name: string;
    code: string;
}
