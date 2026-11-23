import ServicePageTemplate from '@/components/ServicePageTemplate';
import { servicesData } from '@/data/services';

export default function UIDesign() {
  const service = servicesData.find((s) => s.id === 'uiux')!;

  return (
    <ServicePageTemplate
      service={service}
      description="We conduct user experience research, map user journeys, and craft intuitive product interfaces and interactive prototypes. Our design process removes friction before engineering begins so your product feels clear, credible, and effortless to use."
      benefits={[
        'Digital Product Design',
        'User Experience Research & Flows',
        'High-Fidelity Interface Design',
        'Interactive Prototyping & Validation',
        'Scalable Design Systems',
        'Usability & Accessibility Reviews',
      ]}
    />
  );
}
