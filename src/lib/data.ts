import type { Service, TeamMember, Testimonial, BlogPost, NavLink } from './types';

export const navLinks: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/blog', label: 'Blog' },
  { href: '/products', label: 'Products' },
  { href: '/contact', label: 'Contact' },
  { href: '/summarize-brochure', label: 'AI Tool' },
];

export const services: Service[] = [
  {
    slug: 'strategic-consulting',
    title: 'Strategic Consulting',
    shortDescription: 'Navigate the complex business landscape with our data-driven insights to foster growth.',
    longDescription: 'Our strategic consulting services provide you with a clear roadmap to success. We analyze market trends, assess competitive landscapes, and identify opportunities for growth. Our team of experts works closely with you to develop actionable strategies that align with your business objectives and drive sustainable results.',
    image: { src: 'https://picsum.photos/seed/strat1/600/400', width: 600, height: 400, hint: 'business meeting' },
    industries: ['Finance', 'Healthcare', 'Technology', 'Retail'],
    projects: [
      {
        title: 'Market Entry Strategy for Tech Startup',
        description: 'Developed a comprehensive market entry plan for a SaaS startup, resulting in a 30% market share within the first year.',
        image: { src: 'https://picsum.photos/seed/proj1/500/300', width: 500, height: 300, hint: 'graphs charts' },
      },
    ],
  },
  {
    slug: 'software-development',
    title: 'Software Development',
    shortDescription: 'Custom software solutions tailored to your unique needs, from web to mobile platforms.',
    longDescription: 'We build robust, scalable, and secure software solutions that power your business. Our agile development process ensures that we deliver high-quality products on time and within budget. From enterprise-level applications to user-friendly mobile apps, we have the expertise to bring your vision to life.',
    image: { src: 'https://picsum.photos/seed/dev1/600/400', width: 600, height: 400, hint: 'code laptop' },
    industries: ['E-commerce', 'Fintech', 'Education', 'Logistics'],
  },
  {
    slug: 'cloud-solutions',
    title: 'Cloud Solutions',
    shortDescription: 'Leverage the power of the cloud with our migration, management, and optimization services.',
    longDescription: 'Unlock the full potential of the cloud with Procyon Dynamics. We offer end-to-end cloud services, including strategy, migration, and management for AWS, Azure, and Google Cloud. Our solutions are designed to enhance scalability, improve security, and reduce operational costs.',
    image: { src: 'https://picsum.photos/seed/cloud1/600/400', width: 600, height: 400, hint: 'server room' },
    industries: ['SaaS', 'Media', 'Manufacturing', 'Government'],
  },
  {
    slug: 'ai-integration',
    title: 'AI Integration',
    shortDescription: 'Embed cutting-edge AI into your workflows to boost efficiency and unlock new opportunities.',
    longDescription: 'Transform your business with the power of Artificial Intelligence. We specialize in integrating AI technologies like machine learning, natural language processing, and computer vision into your existing systems. Our solutions help automate processes, derive valuable insights from data, and create intelligent products and services.',
    image: { src: 'https://picsum.photos/seed/ai1/600/400', width: 600, height: 400, hint: 'abstract network' },
    industries: ['Healthcare', 'Customer Service', 'Marketing', 'Automotive'],
  },
];

export const teamMembers: TeamMember[] = [
  {
    name: 'Eleanor Vance',
    role: 'Founder & CEO',
    image: { src: 'https://picsum.photos/seed/founder/400/400', width: 400, height: 400, hint: 'professional woman' },
    bio: 'With over 20 years of experience in the tech industry, Eleanor founded Procyon Dynamics with a vision to merge innovation with integrity. Her leadership drives the company\'s commitment to excellence and client success.',
  },
  {
    name: 'Marcus Thorne',
    role: 'Chief Technology Officer',
    image: { src: 'https://picsum.photos/seed/cto/400/400', width: 400, height: 400, hint: 'professional man' },
    bio: 'Marcus is the architectural mastermind behind our technology solutions. He has a passion for solving complex problems and a deep expertise in cloud computing and AI systems.',
  },
  {
    name: 'Aria Chen',
    role: 'Head of Product',
    image: { src: 'https://picsum.photos/seed/product/400/400', width: 400, height: 400, hint: 'smiling woman' },
    bio: 'Aria leads our product development teams with a user-centric approach. She ensures that every solution we deliver is not only powerful but also intuitive and valuable to our clients.',
  },
  {
    name: 'Julian Diaz',
    role: 'Lead Strategist',
    image: { src: 'https://picsum.photos/seed/strategy/400/400', width: 400, height: 400, hint: 'man thinking' },
    bio: 'Julian specializes in crafting data-driven strategies that propel businesses forward. His analytical skills and market insights are key to our clients\' competitive advantage.',
  },
];

export const testimonials: Testimonial[] = [
  {
    name: 'Sophia Loren',
    company: 'CEO of Innovate Inc.',
    comment: 'Procyon Dynamics transformed our operations. Their cloud solution is not just a piece of tech; it\'s the backbone of our new-found efficiency. Their team is professional, knowledgeable, and a pleasure to work with.',
    image: { src: 'https://picsum.photos/seed/client1/100/100', width: 100, height: 100, hint: 'business woman' },
  },
  {
    name: 'David Chen',
    company: 'CTO at QuantumLeap',
    comment: 'The custom software developed by Procyon is exceptional. It perfectly fits our unique workflow and has significantly boosted our team\'s productivity. I was impressed by their agile process and attention to detail.',
    image: { src: 'https://picsum.photos/seed/client2/100/100', width: 100, height: 100, hint: 'smiling man' },
  },
  {
    name: 'Emily Rodriguez',
    company: 'Founder of Starlight Ventures',
    comment: 'The strategic consulting from Procyon was a game-changer for us. They provided clear, actionable insights that helped us navigate a critical market transition. We couldn\'t have done it without them.',
    image: { src: 'https://picsum.photos/seed/client3/100/100', width: 100, height: 100, hint: 'woman portrait' },
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: 'the-future-of-ai-in-business',
    title: 'The Future of AI in Business: Trends to Watch in 2024',
    excerpt: 'Artificial Intelligence is no longer a futuristic concept; it\'s a present-day reality transforming industries. From predictive analytics to hyper-personalization, AI is reshaping how businesses operate and compete. In this post, we explore the key AI trends that will define the business landscape in the coming year.',
    content: '...',
    author: 'Eleanor Vance',
    date: '2024-05-15',
    image: { src: 'https://picsum.photos/seed/blog1/800/450', width: 800, height: 450, hint: 'futuristic city' },
  },
  {
    slug: 'mastering-multi-cloud-strategy',
    title: 'Mastering the Multi-Cloud: A Guide to a Resilient Strategy',
    excerpt: 'A multi-cloud strategy offers flexibility and avoids vendor lock-in, but it also introduces complexity. How do you manage multiple cloud environments effectively? This guide covers the best practices for building a resilient and cost-effective multi-cloud architecture.',
    content: '...',
    author: 'Marcus Thorne',
    date: '2024-04-22',
    image: { src: 'https://picsum.photos/seed/blog2/800/450', width: 800, height: 450, hint: 'cloud data' },
  },
  {
    slug: 'user-centric-design-principles',
    title: '5 User-Centric Design Principles for Building Products People Love',
    excerpt: 'In a crowded market, a great user experience is what sets successful products apart. But what makes a design "user-centric"? We break down five fundamental principles that should guide your product development process, from initial concept to final launch.',
    content: '...',
    author: 'Aria Chen',
    date: '2024-03-10',
    image: { src: 'https://picsum.photos/seed/blog3/800/450', width: 800, height: 450, hint: 'ui design' },
  },
];
