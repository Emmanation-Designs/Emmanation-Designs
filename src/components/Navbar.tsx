import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const NAV_ITEMS = [
  { label: 'About', hash: 'about' },
  { label: 'Services', hash: 'services' },
  { label: 'Work', hash: 'work' },
  { label: 'Process', hash: 'process' },
  { label: 'Why us', hash: 'why' },
  { label: 'Idea lab', hash: 'lab' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  const handleHashClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();
    setOpen(false);

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
        if (window.history?.replaceState) {
          window.history.replaceState(null, '', `#${hash}`);
        }
      }
    } else {
      navigate(`/#${hash}`);
    }
  };

  return (
    <>
      <header className="ed-header">
        <div className="w nav">
          <a
            className="brand"
            href="/#top"
            aria-label="Emmanation Designs home"
            onClick={(e) => handleHashClick(e, 'top')}
          >
            <span className="brand-logo-wrap">
              <img
                src="/assets/aistudio/IMG-20260714-WA0288_1__cec3d494.jpg"
                alt="Emmanation Designs"
                className="brand-logo"
              />
            </span>
          </a>

          <nav aria-label="Main">
            <button
              id="tg"
              type="button"
              aria-expanded={open}
              aria-controls="menu"
              onClick={() => setOpen((prev) => !prev)}
            >
              {open ? 'Close' : 'Menu'}
            </button>

            <ul id="menu" className={open ? 'op' : undefined}>
              {NAV_ITEMS.map((item) => (
                <li key={item.hash}>
                  <a
                    href={`/#${item.hash}`}
                    onClick={(e) => handleHashClick(e, item.hash)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  className="bk"
                  href="/#contact"
                  onClick={(e) => handleHashClick(e, 'contact')}
                >
                  Let’s talk
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <nav className="bn" aria-label="Quick navigation">
        <a href="/#top" onClick={(e) => handleHashClick(e, 'top')}>
          <svg className="mk" aria-hidden="true">
            <use href="#m" />
          </svg>
          Home
        </a>
        <a href="/#services" onClick={(e) => handleHashClick(e, 'services')}>
          <svg className="ic" aria-hidden="true">
            <use href="#i-code" />
          </svg>
          Services
        </a>
        <a href="/#work" onClick={(e) => handleHashClick(e, 'work')}>
          <svg className="ic" aria-hidden="true">
            <use href="#i-web" />
          </svg>
          Work
        </a>
        <a href="/#lab" onClick={(e) => handleHashClick(e, 'lab')}>
          <svg className="ic" aria-hidden="true">
            <use href="#i-ai" />
          </svg>
          Idea lab
        </a>
        <a href="/#contact" onClick={(e) => handleHashClick(e, 'contact')}>
          <svg className="ic" aria-hidden="true">
            <use href="#i-chat" />
          </svg>
          Contact
        </a>
      </nav>
    </>
  );
}
