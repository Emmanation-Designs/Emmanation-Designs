import React, { useEffect, useRef, useState } from 'react';
import { businessSolutions } from '@/data/services';

const ROTATING_WORDS = [
  'websites',
  'online stores',
  'custom software',
  'AI tools',
  'learning platforms',
];

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const hhRef = useRef<HTMLDivElement>(null);
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const artRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [wordIndex, setWordIndex] = useState(0);
  const [fading, setFading] = useState(false);

  // Sync blue bar headline position & bounds (--hw, --hx, --hy, --hb)
  useEffect(() => {
    const syncHeroBar = () => {
      const hr = heroRef.current;
      const h = h1Ref.current;
      const art = artRef.current;
      if (!hr || !h || !art) return;

      const a = hr.getBoundingClientRect();
      const b = h.getBoundingClientRect();
      const f = art.getBoundingClientRect();
      hr.style.setProperty('--hw', `${b.width}px`);
      hr.style.setProperty('--hx', `${b.left - a.left}px`);
      hr.style.setProperty('--hy', `${b.top - a.top}px`);
      hr.style.setProperty('--hb', `${a.bottom - f.bottom}px`);
    };

    syncHeroBar();
    window.addEventListener('resize', syncHeroBar);
    if (document.fonts) {
      document.fonts.ready.then(syncHeroBar);
    }
    const ro = new ResizeObserver(syncHeroBar);
    if (hhRef.current) ro.observe(hhRef.current);
    if (heroRef.current) ro.observe(heroRef.current);

    return () => {
      window.removeEventListener('resize', syncHeroBar);
      ro.disconnect();
    };
  }, []);

  // Rotating word animation
  useEffect(() => {
    const rm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (rm) return;

    let timeoutId: number | undefined;
    const intervalId = window.setInterval(() => {
      setFading(true);
      timeoutId = window.setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
        setFading(false);
      }, 300);
    }, 2600);

    return () => {
      window.clearInterval(intervalId);
      if (timeoutId) window.clearTimeout(timeoutId);
    };
  }, []);

  // 2D Particle Constellation Canvas + 3D tilt
  useEffect(() => {
    const cv = canvasRef.current;
    const art = artRef.current;
    if (!cv || !art) return;
    const ctx = cv.getContext('2d');
    if (!ctx) return;

    const rm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let nodes: { x: number; y: number; vx: number; vy: number }[] = [];
    let mx = -999;
    let my = -999;
    let w = 1;
    let h = 1;
    let raf = 0;

    const resize = () => {
      const d = window.devicePixelRatio || 1;
      w = art.clientWidth;
      h = art.clientHeight;
      cv.width = w * d;
      cv.height = h * d;
      ctx.setTransform(d, 0, 0, d, 0, 0);
      nodes = [];
      const count = Math.min(70, Math.floor(w / 14));
      for (let i = 0; i < count; i++) {
        nodes.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
        });
      }
    };

    const onMove = (e: PointerEvent) => {
      const r = art.getBoundingClientRect();
      mx = e.clientX - r.left;
      my = e.clientY - r.top;
      if (!rm) {
        art.style.setProperty('--rx', `${(my / h - 0.5) * -14}deg`);
        art.style.setProperty('--ry', `${(mx / w - 0.5) * 18}deg`);
      }
    };

    const onLeave = () => {
      mx = -999;
      my = -999;
      art.style.setProperty('--rx', '0deg');
      art.style.setProperty('--ry', '0deg');
    };

    resize();
    window.addEventListener('resize', resize);
    art.addEventListener('pointermove', onMove);
    art.addEventListener('pointerleave', onLeave);

    const tick = () => {
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < nodes.length; i++) {
        const p = nodes[i];
        if (!rm) {
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < 0 || p.x > w) p.vx *= -1;
          if (p.y < 0 || p.y > h) p.vy *= -1;
          const dm = Math.hypot(p.x - mx, p.y - my) || 1;
          if (dm < 140) {
            p.x += ((p.x - mx) / dm) * 1.4;
            p.y += ((p.y - my) / dm) * 1.4;
          }
        }
        ctx.fillStyle = 'rgba(190,205,255,.9)';
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.8, 0, Math.PI * 2);
        ctx.fill();

        for (let j = i + 1; j < nodes.length; j++) {
          const q = nodes[j];
          const d = Math.hypot(p.x - q.x, p.y - q.y);
          if (d < 120) {
            ctx.strokeStyle = `rgba(140,170,255,${(1 - d / 120) * 0.5})`;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      art.removeEventListener('pointermove', onMove);
      art.removeEventListener('pointerleave', onLeave);
    };
  }, []);

  const handleHeroPointerMove = (e: React.PointerEvent<HTMLElement>) => {
    const hr = heroRef.current;
    if (!hr) return;
    const r = hr.getBoundingClientRect();
    hr.style.setProperty('--gx', `${e.clientX - r.left}px`);
    hr.style.setProperty('--gy', `${e.clientY - r.top}px`);
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const marqueeItems = [...businessSolutions, ...businessSolutions];

  return (
    <section
      className="hero"
      ref={heroRef}
      onPointerMove={handleHeroPointerMove}
    >
      <div className="bar" aria-hidden="true">
        <h1>
          Bringing <span className="hl">imaginations</span> to life.
        </h1>
      </div>

      <div className="w">
        <p className="lbl">Creative technology studio</p>
        <div className="hh" id="hh" ref={hhRef}>
          <h1 ref={h1Ref}>
            Bringing <span className="hl">imaginations</span> to life.
          </h1>
        </div>

        <div className="hm">
          <p className="lead">
            We design and build{' '}
            <b
              className="rot"
              id="rot"
              style={{ opacity: fading ? 0 : 1 }}
            >
              {ROTATING_WORDS[wordIndex]}
            </b>{' '}
            for businesses ready to look and work like leaders.
          </p>
          <div className="ctas">
            <a
              className="ed-btn p"
              href="#contact"
              onClick={(e) => scrollToSection(e, 'contact')}
            >
              Start a project
            </a>
            <a
              className="ed-btn o"
              href="#services"
              onClick={(e) => scrollToSection(e, 'services')}
            >
              See what we do
            </a>
          </div>
        </div>

        <div className="art" aria-hidden="true" ref={artRef}>
          <i />
          <i />
          <i />
          <canvas id="cv" ref={canvasRef} />
          <span className="rg" />
          <span className="rg" />

          <div className="orb sc">
            <svg viewBox="0 0 320 240" aria-hidden="true">
              <defs>
                <linearGradient id="gg" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#1E3A8A" />
                  <stop offset="1" stopColor="#8FA7FF" />
                </linearGradient>
              </defs>
              <g stroke="#9DB4FF" strokeWidth="2" pathLength="100">
                <rect
                  pathLength="100"
                  x="20"
                  y="20"
                  width="280"
                  height="200"
                  rx="16"
                  fill="#fff"
                  style={{ '--i': 0 } as React.CSSProperties}
                  className="s"
                />
                <path
                  pathLength="100"
                  d="M20 54H300"
                  fill="none"
                  style={{ '--i': 1 } as React.CSSProperties}
                  className="s"
                />
                <circle
                  pathLength="100"
                  cx="38"
                  cy="37"
                  r="4"
                  fill="#1E3A8A"
                  style={{ '--i': 2 } as React.CSSProperties}
                  className="s"
                />
                <circle
                  pathLength="100"
                  cx="54"
                  cy="37"
                  r="4"
                  fill="#7C98FF"
                  style={{ '--i': 2 } as React.CSSProperties}
                  className="s"
                />
                <circle
                  pathLength="100"
                  cx="70"
                  cy="37"
                  r="4"
                  fill="#C9D5FF"
                  style={{ '--i': 2 } as React.CSSProperties}
                  className="s"
                />
                <rect
                  pathLength="100"
                  x="36"
                  y="70"
                  width="150"
                  height="16"
                  rx="8"
                  fill="#0B193F"
                  style={{ '--i': 3 } as React.CSSProperties}
                  className="s"
                />
                <rect
                  pathLength="100"
                  x="36"
                  y="96"
                  width="120"
                  height="8"
                  rx="4"
                  fill="#C9D5FF"
                  style={{ '--i': 4 } as React.CSSProperties}
                  className="s"
                />
                <rect
                  pathLength="100"
                  x="36"
                  y="110"
                  width="96"
                  height="8"
                  rx="4"
                  fill="#C9D5FF"
                  style={{ '--i': 5 } as React.CSSProperties}
                  className="s"
                />
                <rect
                  pathLength="100"
                  x="36"
                  y="132"
                  width="72"
                  height="26"
                  rx="13"
                  fill="#1E3A8A"
                  style={{ '--i': 6 } as React.CSSProperties}
                  className="s"
                />
                <circle
                  pathLength="100"
                  cx="244"
                  cy="100"
                  r="34"
                  fill="url(#gg)"
                  style={{ '--i': 7 } as React.CSSProperties}
                  className="s"
                />
                <rect
                  className="bs"
                  style={{ '--i': 8 } as React.CSSProperties}
                  x="124"
                  y="178"
                  width="20"
                  height="28"
                  rx="5"
                  fill="#1E3A8A"
                  stroke="none"
                />
                <rect
                  className="bs"
                  style={{ '--i': 9 } as React.CSSProperties}
                  x="152"
                  y="162"
                  width="20"
                  height="44"
                  rx="5"
                  fill="#7C98FF"
                  stroke="none"
                />
                <rect
                  className="bs"
                  style={{ '--i': 10 } as React.CSSProperties}
                  x="180"
                  y="172"
                  width="20"
                  height="34"
                  rx="5"
                  fill="#1E3A8A"
                  stroke="none"
                />
                <rect
                  className="bs"
                  style={{ '--i': 11 } as React.CSSProperties}
                  x="208"
                  y="148"
                  width="20"
                  height="58"
                  rx="5"
                  fill="#7C98FF"
                  stroke="none"
                />
              </g>
              <use
                className="lgo"
                href="#m"
                x="262"
                y="26"
                width="24"
                height="24"
                fill="#1E3A8A"
              />
              <circle
                className="rp"
                cx="72"
                cy="145"
                r="8"
                fill="none"
                stroke="#1E3A8A"
                strokeWidth="2"
              />
              <g transform="translate(76 144)">
                <path
                  className="cr"
                  d="M0 0v18l5-5 4 9 3-1-4-9h7z"
                  fill="#0B193F"
                  stroke="#fff"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
              </g>
            </svg>
          </div>

          <div className="hud">
            <div className="chip">
              <svg className="ic" aria-hidden="true">
                <use href="#i-web" />
              </svg>
              Websites
            </div>
            <div className="chip">
              <svg className="ic" aria-hidden="true">
                <use href="#i-ai" />
              </svg>
              AI
            </div>
            <div className="chip">
              <svg className="ic" aria-hidden="true">
                <use href="#i-code" />
              </svg>
              Software
            </div>
            <div className="chip">
              <svg className="ic" aria-hidden="true">
                <use href="#i-shop" />
              </svg>
              E-commerce
            </div>
          </div>

          <div className="cap">
            <span>Sketch</span>
            <span style={{ animationDelay: '2.25s' }}>Design</span>
            <span style={{ animationDelay: '4.5s' }}>Build</span>
            <span style={{ animationDelay: '6.75s' }}>Launch</span>
          </div>
        </div>

        <div className="fx">
          <div>
            <b>18 March 2026</b>
            Officially launched
          </div>
          <div>
            <b>Remote</b>
            A fully remote studio
          </div>
          <div>
            <b>Scoped to you</b>
            Timelines depend on complexity
          </div>
        </div>

        <div className="tick" aria-hidden="true">
          <div id="tk">
            {marqueeItems.map((svc, idx) => (
              <span key={`${svc.id}-${idx}`}>{svc.title}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
