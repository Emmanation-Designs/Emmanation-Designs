import founderRefImg from '@/assets/founder-ref.svg';

const VALUES = [
  ['Craft', 'Details matter.'],
  ['Clarity', 'Simple beats clever.'],
  ['Candour', 'Honest advice.'],
  ['Care', 'Your success is ours.'],
];

export default function About() {
  return (
    <section id="about">
      <div className="w sp">
        <div className="rv">
          <p className="lbl">About</p>
          <h2>Design and engineering at one table.</h2>
        </div>

        <div className="rv" style={{ display: 'grid', gap: '22px' }}>
          <p
            className="lead"
            style={{ fontSize: '1.4rem', color: 'var(--navy)' }}
          >
            Emmanation Designs turns ideas into products people actually use. One
            team owns the look, the code and everything between, so what we
            design is what ships.
          </p>

          <div className="fo">
            <div className="fp">
              <img
                src={founderRefImg}
                alt="Emmanuel Nwaije Ikemefuna, founder of Emmanation Designs"
                width={160}
                height={160}
              />
            </div>
            <div>
              <h3>Emmanuel Nwaije Ikemefuna</h3>
              <p style={{ color: 'var(--mut)' }}>Founder, Emmanation Designs</p>
            </div>
          </div>

          <p className="lead">
            Emmanuel started turning people’s ideas into reality through
            software, and made it official on 18 March 2026 with the launch of
            Emmanation Designs. The studio works remotely with clients.
          </p>

          <div
            className="ed-grid"
            id="vals"
            style={{ gridTemplateColumns: '1fr 1fr' }}
          >
            {VALUES.map(([title, desc]) => (
              <div key={title} className="it">
                <h3 style={{ fontSize: '1.15rem' }}>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
