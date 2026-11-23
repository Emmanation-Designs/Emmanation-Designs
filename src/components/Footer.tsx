import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { businessSolutions } from '@/data/services';

export default function Footer() {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  const handleHashClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    hash: string
  ) => {
    e.preventDefault();
    if (hash === 'top') {
      if (isHome) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        navigate('/');
      }
      return;
    }

    if (isHome) {
      const el = document.getElementById(hash);
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    } else {
      navigate(`/#${hash}`);
    }
  };

  return (
    <footer className="ed-footer">
      <div className="w">
        <p className="big">Bringing imaginations to life.</p>

        <div className="fg">
          <div>
            <a
              className="brand"
              href="/#top"
              onClick={(e) => handleHashClick(e, 'top')}
            >
              <svg className="mk" aria-hidden="true">
                <use href="#m" />
              </svg>
              <span>Emmanation Designs</span>
            </a>
          </div>

          <div>
            <h3>Explore</h3>
            <ul>
              <li>
                <a href="/#about" onClick={(e) => handleHashClick(e, 'about')}>
                  About
                </a>
              </li>
              <li>
                <a href="/#work" onClick={(e) => handleHashClick(e, 'work')}>
                  Work
                </a>
              </li>
              <li>
                <a
                  href="/#process"
                  onClick={(e) => handleHashClick(e, 'process')}
                >
                  Process
                </a>
              </li>
              <li>
                <a
                  href="/#contact"
                  onClick={(e) => handleHashClick(e, 'contact')}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3>Services</h3>
            <ul id="fs">
              {businessSolutions.map((svc) => (
                <li key={svc.id}>
                  <a
                    href="/#services"
                    onClick={(e) => handleHashClick(e, 'services')}
                  >
                    {svc.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3>Contact</h3>
            <ul>
              <li>
                <a href="mailto:emmanationdesigns@gmail.com">
                  emmanationdesigns@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/2349038418469"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp: 09038418469
                </a>
              </li>
              <li>Remote</li>
              <li>
                <a
                  href="https://x.com/Emmanation_dsgn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  X
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/emmanation.designs?cnvx=YWJiazMnl4MXlz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="cp">
          <span>
            © <span id="yr">{new Date().getFullYear()}</span> Emmanation Designs.
            All rights reserved.
          </span>
          <div style={{ display: 'flex', gap: '24px' }}>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
