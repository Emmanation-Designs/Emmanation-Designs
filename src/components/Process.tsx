const PROCESS_STEPS = [
  [
    'Discover',
    'We learn your business, audience and goals, and agree what success looks like.',
  ],
  [
    'Plan & Design',
    'Scope, structure and visuals, reviewed with you before any code.',
  ],
  [
    'Build & Refine',
    'Iterative builds you can test, with your feedback folded in.',
  ],
  [
    'Launch & Support',
    'Careful release, handover and help once you’re live.',
  ],
];

export default function Process() {
  return (
    <section id="process" className="dk">
      <div className="w">
        <div className="rv" style={{ marginBottom: '56px' }}>
          <p className="lbl">Our process</p>
          <h2>From first call to launch.</h2>
        </div>

        <div className="ed-grid stp" id="pr">
          {PROCESS_STEPS.map(([title, desc]) => (
            <article key={title} className="it rv">
              <h3>{title}</h3>
              <p>{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
