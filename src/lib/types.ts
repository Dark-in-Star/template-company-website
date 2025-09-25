

import type { LucideIcon } from 'lucide-react';

export type NavLink = {
  href: string;
  label: string;
};

export type ImageType = {
  src: string;
  width: number;
  height: number;
  hint: string;
};

export type Service = {
  slug: string;
  title: string;
  icon: keyof typeof import('lucide-react');
  shortDescription: string;
  mediumDescription: string;
  longDescription: string;
  image: ImageType,
  projects?: {
    title: string;
    description: string;
    image: ImageType;
  }[];
  industries: string[];
};

export type TeamMember = {
  name: string;
  role: string;
  image: ImageType,
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
  image: ImageType,
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  image: ImageType,
  metaTitle?: string;
  metaDescription?: string;
  metaImage?: ImageType;
  keywords?: string;
  jsonLd?: string;
};

export type TimelineEvent = {
    icon: keyof typeof import('lucide-react');
    date: string;
    title: string;
    description: string;
    image: ImageType;
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
    short: string;
    code: string;
}

export type GalleryImage = {
  src: string;
  alt: string;
  hint: string;
}

export type Comment = {
  id: string;
  author: {
    name: string;
    avatar: string;
  };
  date: string;
  content: string;
  replies?: Comment[];
  replyingTo?: string;
};

export type SmartCrmSlide = {
  title: string;
  description: string;
  image: ImageType;
};
