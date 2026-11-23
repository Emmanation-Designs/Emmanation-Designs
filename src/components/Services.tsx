import React from 'react';
import { businessSolutions } from '@/data/services';
import { HexIcon } from './SvgSymbols';

interface ServicesProps {
  onSelectServiceForEnquiry: (serviceTitle: string) => void;
}

export default function Services({ onSelectServiceForEnquiry }: ServicesProps) {
  const handleEnquire = (
    e: React.MouseEvent<HTMLAnchorElement>,
    title: string
  ) => {
    e.preventDefault();
    onSelectServiceForEnquiry(title);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      const y = contactEl.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="dk">
      <div className="w">
        <div
          className="rv"
          style={{ maxWidth: '820px', marginBottom: '56px' }}
        >
          <p className="lbl">Services</p>
          <h2>Everything a digital product needs.</h2>
        </div>

        <div className="ed-grid" id="svc">
          {businessSolutions.map((service) => (
            <article key={service.id} className="it rv">
              <HexIcon name={service.symbolId} />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a
                href="#contact"
                data-s={service.title}
                onClick={(e) => handleEnquire(e, service.title)}
              >
                Enquire →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
