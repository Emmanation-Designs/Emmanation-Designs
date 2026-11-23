import ServicePageTemplate from '@/components/ServicePageTemplate';
import { servicesData } from '@/data/services';

export default function Frontend() {
  const service = servicesData.find((s) => s.id === 'frontend')!;

  return (
    <ServicePageTemplate
      service={service}
      description="We design and engineer fast, responsive, conversion-driven websites using React, Next.js, and modern web standards. Whether launching a corporate presence, product landing page, or full-featured e-commerce storefront, every build is structured for brand trust and mobile-first usability."
      benefits={[
        'Business & Corporate Websites',
        'High-Converting Landing Pages',
        'E-Commerce Platforms & Storefronts',
        'Performance & Core Web Vitals Optimization',
        'Responsive Mobile-First Engineering',
        'SEO & Accessibility Best Practices',
      ]}
    />
  );
}
