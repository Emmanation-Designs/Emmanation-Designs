import ServicePageTemplate from '@/components/ServicePageTemplate';
import { servicesData } from '@/data/services';

export default function DigitalPlatforms() {
  const service = servicesData.find((s) => s.id === 'platforms')!;

  return (
    <ServicePageTemplate
      service={service}
      description="We architect multi-user digital platforms built for real-world operational scale—from educational portals and school management systems to structured booking, ordering, and industry-specific service platforms."
      benefits={[
        'Educational & Learning Platforms',
        'School Management Solutions',
        'Booking & Appointment Systems',
        'Online Ordering & Fulfillment Portals',
        'Role-Based Multi-User Access',
        'Industry-Specific Web Platforms',
      ]}
    />
  );
}
