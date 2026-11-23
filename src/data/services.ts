import React from 'react';
import { Globe, ShoppingBag, Code2, Sparkles, Layout as LayoutIcon, GraduationCap, Palette, Video } from 'lucide-react';

export interface ServiceType {
  id: string;
  number?: string;
  title: string;
  shortTitle?: string;
  symbolId: string;
  icon: React.ElementType;
  description: string;
  problemSolved: string;
  deliverables: string[];
  fields: string[];
  path: string;
}

export const businessSolutions: ServiceType[] = [
  {
    id: 'frontend',
    number: '01',
    title: 'Website development',
    shortTitle: 'Websites',
    symbolId: 'web',
    icon: Globe,
    description: 'Fast, accessible, search-friendly sites that move visitors to act.',
    problemSolved:
      'Turns slow, outdated, or fragmented web presence into an authoritative digital storefront that earns client trust and captures qualified leads.',
    deliverables: [
      'Business websites',
      'Corporate websites',
      'Landing pages',
      'Performance & SEO architecture',
    ],
    fields: ['Tech Stack Preference', 'Existing Design or Reference URL?'],
    path: '/frontend',
  },
  {
    id: 'ecommerce',
    number: '02',
    title: 'E-commerce',
    shortTitle: 'Online stores',
    symbolId: 'shop',
    icon: ShoppingBag,
    description: 'Online stores with clear product journeys and secure checkout.',
    problemSolved:
      'Eliminates confusing product discovery and checkout drop-off with intuitive category navigation, cart flows, and inventory control.',
    deliverables: [
      'Custom storefront design',
      'Product filtering & search',
      'Wishlist, cart & checkout',
      'Inventory & order dashboards',
    ],
    fields: ['Product Catalogue Size', 'Preferred Payment Gateways'],
    path: '/digital-platforms',
  },
  {
    id: 'backend',
    number: '03',
    title: 'Custom software',
    shortTitle: 'Custom software',
    symbolId: 'code',
    icon: Code2,
    description: 'Web apps and internal tools shaped around how you work.',
    problemSolved:
      'Replaces error-prone spreadsheets and disconnected manual processes with unified, secure software tailored to your workflows.',
    deliverables: [
      'Business management systems',
      'Admin dashboards',
      'Custom web applications',
      'Internal business tools',
    ],
    fields: ['Key Workflows Needed', 'Database / Integration Requirements'],
    path: '/backend',
  },
  {
    id: 'ai',
    number: '04',
    title: 'AI integration',
    shortTitle: 'AI tools',
    symbolId: 'ai',
    icon: Sparkles,
    description: 'Practical AI features scoped around a real business problem.',
    problemSolved:
      'Eliminates repetitive manual triage, slow customer response times, and disconnected data handling across teams.',
    deliverables: [
      'AI chatbots & assistants',
      'Automated business workflows',
      'Knowledge search & triage',
      'Reliable API integrations',
    ],
    fields: ['Target Workflow or Use Case', 'Existing Tools / APIs'],
    path: '/ai-solutions',
  },
  {
    id: 'uiux',
    number: '05',
    title: 'UI/UX design',
    shortTitle: 'UI/UX design',
    symbolId: 'ux',
    icon: LayoutIcon,
    description: 'Research-led interfaces and design systems that stay consistent.',
    problemSolved:
      'Reduces user drop-off, lowers onboarding friction, and prevents costly engineering rework before development begins.',
    deliverables: [
      'Product & interface design',
      'User experience research',
      'Interactive prototypes',
      'Scalable design systems',
    ],
    fields: ['Target Audience', 'Product Stage / Competitor References'],
    path: '/ui-design',
  },
  {
    id: 'platforms',
    number: '06',
    title: 'Education platforms',
    shortTitle: 'Learning platforms',
    symbolId: 'edu',
    icon: GraduationCap,
    description: 'Learning platforms for courses, classes and communities.',
    problemSolved:
      'Gives schools, educators, and communities a centralized, intuitive home for courses, student progress, and structured learning.',
    deliverables: [
      'Course & curriculum portals',
      'School management solutions',
      'Student & cohort dashboards',
      'Community & assessment tools',
    ],
    fields: ['Target User Roles', 'Expected Scale / Key Features'],
    path: '/digital-platforms',
  },
];

export const creativeServices: ServiceType[] = [
  {
    id: 'graphic',
    title: 'Graphic Design',
    symbolId: 'ux',
    icon: Palette,
    description:
      'Cohesive brand identities, visual guidelines, and marketing collateral engineered for print and digital consistency.',
    problemSolved:
      'Eliminates inconsistent visual branding across campaigns, helping businesses look established and memorable across every touchpoint.',
    deliverables: [
      'Brand identity & logo systems',
      'Marketing & print collateral',
      'Social media campaign visuals',
      'High-resolution vector assets',
    ],
    fields: ['Design Style / References', 'Existing Brand Guidelines?'],
    path: '/graphic-design',
  },
  {
    id: 'video',
    title: 'Video Editing & Motion',
    symbolId: 'web',
    icon: Video,
    description:
      'Structured post-production, product walkthroughs, and motion graphics that explain complex offers clearly.',
    problemSolved:
      'Transforms raw footage and product stories into crisp visual communication that holds attention and supports brand campaigns.',
    deliverables: [
      'Commercial & promo editing',
      'Product launch & motion graphics',
      'Social media reels & shorts',
      'Color grading & sound design',
    ],
    fields: ['Footage Type', 'Desired Duration'],
    path: '/video-editing',
  },
];

export const servicesData: ServiceType[] = [
  ...businessSolutions,
  ...creativeServices,
];
