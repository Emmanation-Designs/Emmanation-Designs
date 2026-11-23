import ServicePageTemplate from '@/components/ServicePageTemplate';
import { servicesData } from '@/data/services';

export default function VideoEditing() {
  const service = servicesData.find((s) => s.id === 'video')!;

  return (
    <ServicePageTemplate
      service={service}
      description="We craft structured video editing, product walkthroughs, and motion graphics that communicate your message clearly across commercial campaigns, corporate presentations, and social platforms."
      benefits={[
        'Commercial & Promo Editing',
        'Product Demo & Explainer Motion',
        'Social Media Reels & Shorts',
        'Motion Graphics & Kinetic Typography',
        'Color Grading & Correction',
        'Audio Mixing & Post-Production',
      ]}
    />
  );
}
