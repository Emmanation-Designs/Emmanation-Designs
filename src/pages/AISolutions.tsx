import ServicePageTemplate from '@/components/ServicePageTemplate';
import { servicesData } from '@/data/services';

export default function AISolutions() {
  const service = servicesData.find((s) => s.id === 'ai')!;

  return (
    <ServicePageTemplate
      service={service}
      description="We design and integrate practical AI capabilities directly into your business websites, internal operations, and customer workflows. Instead of hype-driven add-ons, we focus on dependable chatbots, intelligent assistants, and API integrations that reduce manual workload and speed up response times."
      benefits={[
        'Customer-Facing AI Chatbots',
        'Internal Intelligent Assistants',
        'AI-Powered Business Workflows',
        'Custom LLM & API Integrations',
        'Automated Lead Qualification & Routing',
        'Knowledge Base & Document Search',
      ]}
    />
  );
}
