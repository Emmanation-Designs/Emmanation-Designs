import { useEffect, useState } from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Process from '@/components/Process';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import IdeaLab from '@/components/IdeaLab';
import ProjectEnquiry from '@/components/ProjectEnquiry';

export default function Home() {
  const [selectedService, setSelectedService] = useState<string | undefined>(
    undefined
  );
  const [prefilledMessage, setPrefilledMessage] = useState<string | undefined>(
    undefined
  );

  // Staggered scroll reveal (.rv) and radial card pointer glow (.it::after)
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>('.rv'));
    const rm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (rm) {
      elements.forEach((el) => el.classList.add('v'));
    } else {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('v');
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15 }
      );

      elements.forEach((el, i) => {
        el.style.transitionDelay = `${(i % 3) * 90}ms`;
        io.observe(el);
      });

      const handlePointerMove = (e: PointerEvent) => {
        const target = e.target as HTMLElement | null;
        const card = target?.closest?.('.it') as HTMLElement | null;
        if (card) {
          const r = card.getBoundingClientRect();
          card.style.setProperty('--mx', `${e.clientX - r.left}px`);
          card.style.setProperty('--my', `${e.clientY - r.top}px`);
        }
      };

      document.addEventListener('pointermove', handlePointerMove);

      return () => {
        io.disconnect();
        document.removeEventListener('pointermove', handlePointerMove);
      };
    }
  }, []);

  return (
    <Layout>
      <div className="ed-home">
        <Hero />
        <About />
        <Services
          onSelectServiceForEnquiry={(title) => setSelectedService(title)}
        />
        <Portfolio />
        <Process />
        <WhyChooseUs />
        <Testimonials />
        <IdeaLab
          onSendToTeam={({ message, service }) => {
            setPrefilledMessage(message);
            setSelectedService(service);
          }}
        />
        <ProjectEnquiry
          preselectedService={selectedService}
          prefilledMessage={prefilledMessage}
        />
      </div>
    </Layout>
  );
}
