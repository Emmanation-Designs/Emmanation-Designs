import caseIngeniumFallback from '@/assets/images/case_ingenium_preview_1795376702747.jpg';
import caseGibsonFallback from '@/assets/images/case_gibson_preview_1795376702522.jpg';
import caseGraphicsFallback from '@/assets/images/case_graphics_preview_1795376703151.jpg';

export interface ProjectCaseStudy {
  id: string;
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  problem: string;
  solution: string;
  deliverables: string[];
  technologies: string[];
  images: string[];
  fallbackImage: string;
  liveLink: string | null;
  type: 'web' | 'gallery';
  graphicCount?: number;
}

export const projectsData: ProjectCaseStudy[] = [
  {
    id: 'ingenium',
    slug: 'ingenium',
    title: 'Ingenium Virtual Assistant',
    category: 'Website Development · Corporate Platform',
    shortDescription:
      'Custom corporate web platform and structured client onboarding flow built for a global virtual assistant company.',
    problem:
      'Ingenium needed a credible, structured web presence capable of explaining specialized virtual assistant services clearly and guiding international clients through service discovery into onboarding without friction.',
    solution:
      'We designed and engineered a responsive corporate website anchored around transparent service tiers, clear value positioning, and a step-by-step onboarding journey tailored for busy executives and business teams.',
    deliverables: [
      'Responsive corporate website architecture',
      'Structured service showcase pages',
      'Streamlined client onboarding flow',
      'Mobile-first performance optimization',
    ],
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Responsive Architecture'],
    images: ['/portfolio/Ingenium1.png', '/portfolio/Ingenium2.png'],
    fallbackImage: caseIngeniumFallback,
    liveLink: 'https://ingeniumvirtualassistant.com',
    type: 'web',
  },
  {
    id: 'gibson',
    slug: 'gibson',
    title: 'Gibson Collections',
    category: 'E-Commerce Platform · Web Application',
    shortDescription:
      'Full-featured e-commerce storefront with structured product cataloging, interactive cart management, and integrated payment flows.',
    problem:
      'Gibson Collections required a reliable, accessible online retail storefront where customers could browse collections intuitively, adjust cart selections smoothly, and complete purchases without checkout friction.',
    solution:
      'We built a modern e-commerce web application featuring organized collection views, responsive product previews, persistent shopping cart functionality, and integrated online payment processing.',
    deliverables: [
      'Custom e-commerce storefront UI',
      'Interactive shopping cart state & drawer',
      'Integrated payment gateway workflow',
      'Mobile-optimized browsing & checkout',
    ],
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'Cart Architecture', 'Payment Integration'],
    images: ['/portfolio/Gibson1.png', '/portfolio/Gibson2.png'],
    fallbackImage: caseGibsonFallback,
    liveLink: 'https://gibsoncollections.vercel.app',
    type: 'web',
  },
  {
    id: 'graphics',
    slug: 'graphic-highlights',
    title: 'Graphic Design & Brand Highlights',
    category: 'Brand Identity · Visual Communication',
    shortDescription:
      'Curated collection of brand identity systems, promotional posters, social media campaigns, and UI visual concepts.',
    problem:
      'Businesses launching new products or campaigns often suffer from inconsistent visual presentation that weakens credibility across digital and print channels.',
    solution:
      'We created cohesive visual identity deliverables, campaign layouts, and brand assets engineered for clarity, typography discipline, and immediate audience recognition.',
    deliverables: [
      'Brand identity & visual systems',
      'Promotional posters & campaign layouts',
      'Social media design suites',
      'Interface & visual concept explorations',
    ],
    technologies: ['Brand Systems', 'Visual Identity', 'Typography & Grid', 'Campaign Assets'],
    images: Array.from({ length: 5 }, (_, i) => `/portfolio/graphics/design${i + 1}.png`),
    fallbackImage: caseGraphicsFallback,
    liveLink: null,
    type: 'gallery',
    graphicCount: 5,
  },
];
