import type { StaticImageData } from 'next/image';

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
