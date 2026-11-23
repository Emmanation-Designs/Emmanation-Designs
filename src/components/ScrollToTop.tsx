import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  useEffect(() => {
    let intervalId: NodeJS.Timeout | null = null;

    if (hash) {
      const id = hash.replace('#', '');
      
      const scrollToElement = () => {
        const element = document.getElementById(id);
        if (element) {
          const yOffset = -80; // Account for fixed navbar
          const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
          window.scrollTo({ top: y, behavior: 'auto' }); // Use auto for instant scrolling during retries
          return true;
        }
        return false;
      };
      
      // Try to scroll immediately
      scrollToElement();

      // Keep trying to scroll for 1 second to account for layout shifts and animations
      let attempts = 0;
      intervalId = setInterval(() => {
        attempts++;
        scrollToElement();
        if (attempts >= 20) { // 20 * 50ms = 1000ms
          if (intervalId) clearInterval(intervalId);
          
          // Do one final smooth scroll after layout has settled
          setTimeout(() => {
            const element = document.getElementById(id);
            if (element) {
              const yOffset = -80;
              const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
              window.scrollTo({ top: y, behavior: 'smooth' });
            }
          }, 100);
        }
      }, 50);

    } else {
      window.scrollTo(0, 0);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [pathname, hash]);

  return null;
}
