interface TestimonialItem {
  id: string;
  client: string;
  context: string;
  initials: string;
  quote: string;
}

const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'paulify-designs',
    client: 'Paulify Designs',
    context: 'Multiple Products Delivered',
    initials: 'PD',
    quote:
      'Emmanation Designs has created multiple products for me, and each one was delivered with great attention to detail, reliability, and clear communication from start to finish.',
  },
  {
    id: 'gibson-empire-essentials',
    client: 'Gibson Empire Essentials',
    context: 'Online Store & E-Commerce',
    initials: 'GE',
    quote:
      'He built an online store for my business, and I am very satisfied with the final result. Everything looks polished, runs smoothly, and makes it easy for customers to shop.',
  },
];

export default function Testimonials() {
  return (
    <section id="voices" style={{ paddingTop: 0 }}>
      <div className="w">
        <div className="rv" style={{ marginBottom: '48px' }}>
          <p className="lbl">Testimonials</p>
          <h2>Words from our clients.</h2>
        </div>

        <div className="vg">
          {TESTIMONIALS.map((item) => (
            <article key={item.id} className="vc rv">
              <span className="vq" aria-hidden="true">
                “
              </span>
              <blockquote className="vt">{item.quote}</blockquote>
              <footer className="vf">
                <span className="va" aria-hidden="true">
                  {item.initials}
                </span>
                <div>
                  <div className="vn">{item.client}</div>
                  <div className="vr">{item.context}</div>
                </div>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
