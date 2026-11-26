import { useState } from 'react';
import { cn } from '@/lib/utils';

interface BrandMarkProps {
  className?: string;
}

/**
 * Renders /mylogo.png from /public/ when present, and falls back gracefully
 * to a crisp Emmanation Designs geometric monogram so no broken image ever appears.
 */
export default function BrandMark({ className }: BrandMarkProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <div
      className={cn(
        'w-10 h-9 flex items-center justify-center shrink-0',
        className
      )}
    >
      {!imgError ? (
        <img
          src="/assets/aistudio/emmanation-designs-logo__1__cfee047e.svg"
          alt="Emmanation Designs Logo"
          className="w-full h-full object-contain"
          onError={() => setImgError(true)}
        />
      ) : (
        <svg
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          aria-hidden="true"
        >
          <rect width="36" height="36" className="fill-[#1E3A8A]" />
          <path
            d="M10 11H24V14.5H14V16.75H22V20H14V22.5H24V26H10V11Z"
            fill="white"
          />
          <circle cx="25.5" cy="12.75" r="2" className="fill-[#60A5FA]" />
        </svg>
      )}
    </div>
  );
}
