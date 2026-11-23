import ServicePageTemplate from '@/components/ServicePageTemplate';
import { servicesData } from '@/data/services';

export default function Backend() {
  const service = servicesData.find((s) => s.id === 'backend')!;

  return (
    <ServicePageTemplate
      service={service}
      description="We build tailored business management systems, admin dashboards, custom web applications, and internal tools engineered around your team's real workflows—backed by secure APIs and scalable database architecture."
      benefits={[
        'Business Management Systems',
        'Custom Admin Dashboards & Reporting',
        'Tailored Web Applications',
        'Internal Business Operations Tools',
        'Secure Authentication & Role Permissions',
        'Third-Party API & Payment Integrations',
      ]}
    />
  );
}
