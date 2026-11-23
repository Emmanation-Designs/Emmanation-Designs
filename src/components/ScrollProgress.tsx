import { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const update = () => {
      const h = document.documentElement;
      const max = Math.max(1, h.scrollHeight - window.innerHeight);
      setWidth((window.scrollY / max) * 100);
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update, { passive: true });
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return <div id="pg" style={{ width: `${width}%` }} aria-hidden="true" />;
}
