import React from 'react';
import gibsonDesktopImg from '@/assets/gibson-desktop.jpg';
import gibsonMobileImg from '@/assets/gibson-mobile.jpg';

export default function Portfolio() {
  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById('contact');
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section id="work">
      <div className="w">
        <div className="rv" style={{ marginBottom: '56px' }}>
          <p className="lbl">Work</p>
          <h2>Case studies, told properly.</h2>
        </div>

        <div
          className="cs rv"
          style={{
            background: 'var(--ink)',
            color: '#fff',
            borderRadius: '32px',
            padding: '40px',
          }}
        >
          <div>
            <p className="lbl" style={{ color: 'var(--sky)' }}>
              Online store
            </p>
            <h3 style={{ fontSize: '2.4rem', color: '#fff' }}>
              Gibson Empire Essentials
            </h3>
            <p
              className="lead"
              style={{ marginTop: '14px', color: '#A9B6DD' }}
            >
              A premium online store for baby and family essentials, built for
              both desktop and mobile, with an admin dashboard for managing
              products and inventory.
            </p>
            <ul className="ft">
              <li>Search and six product categories</li>
              <li>Discount badges, wishlist and cart</li>
              <li>Mobile view with bottom navigation</li>
              <li>Admin dashboard for products and inventory</li>
            </ul>
            <a
              className="ed-btn p"
              href="https://gibsonempireessentials.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit the live store ↗
            </a>
          </div>

          <div className="shots">
            <img
              className="sd"
              src={gibsonDesktopImg}
              width={1100}
              height={513}
              alt="Gibson Empire Essentials desktop store with category filters and product grid"
            />
            <img
              className="sm"
              src={gibsonMobileImg}
              width={481}
              height={678}
              alt="Gibson Empire Essentials mobile store view with bottom navigation"
            />
          </div>
        </div>

        <div
          className="ed-grid rv"
          style={{ marginTop: '20px', gap: '20px', border: 0 }}
        >
          <div className="slot">
            <h3>Project two</h3>
            <p className="lead">Reserved for a real, approved case study.</p>
          </div>
          <div className="slot">
            <h3>Project three</h3>
            <p className="lead">Reserved for a real, approved case study.</p>
          </div>
          <div className="slot">
            <h3>Work with us</h3>
            <p className="lead">Your project could be next.</p>
            <a
              className="ed-btn p"
              href="#contact"
              onClick={scrollToContact}
            >
              Start a project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
