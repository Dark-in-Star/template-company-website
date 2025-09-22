
import type { Service, TeamMember, Testimonial, BlogPost, NavLink, TimelineEvent, FAQ, Feature, CountryCode } from './types';

import navLinksData from '@/data/nav-links.json';
import servicesData from '@/data/services.json';
import teamMembersData from '@/data/team-members.json';
import testimonialsData from '@/data/testimonials.json';
import blogPostsData from '@/data/blog-posts.json';
import timelineEventsData from '@/data/timeline-events.json';
import faqsData from '@/data/faqs.json';
import featuresData from '@/data/features.json';
import galleryImagesData from '@/data/gallery-images.json';
import countryCodesData from '@/data/country-codes.json';


export const navLinks: NavLink[] = navLinksData;
export const services: Service[] = servicesData;
export const teamMembers: TeamMember[] = teamMembersData;
export const testimonials: Testimonial[] = testimonialsData;
export const blogPosts: BlogPost[] = blogPostsData;
export const timelineEvents: TimelineEvent[] = timelineEventsData;
export const faqs: FAQ[] = faqsData;
export const features: Feature[] = featuresData;
export const galleryImages = galleryImagesData;
export const countryCodes: CountryCode[] = countryCodesData;
