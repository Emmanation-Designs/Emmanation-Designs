import { HexIcon } from './SvgSymbols';

const REASONS = [
  ['Business-first thinking', 'Every decision ties back to your goals.', 'brief'],
  ['Design + engineering', 'One team owns the look and the code.', 'pair'],
  ['Clear communication', 'Plain language and no surprises on scope.', 'chat'],
  ['Dependable execution', 'Agreed milestones and work that ships.', 'ship'],
];

export default function WhyChooseUs() {
  return (
    <section id="why">
      <div className="w">
        <div className="rv" style={{ marginBottom: '56px' }}>
          <p className="lbl">Why choose us</p>
          <h2>Business first. Craft always.</h2>
        </div>

        <div
          className="ed-grid"
          id="wy"
          style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}
        >
          {REASONS.map(([title, desc, icon]) => (
            <article key={title} className="it rv">
              <HexIcon name={icon} />
              <h3>{title}</h3>
              <p>{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
