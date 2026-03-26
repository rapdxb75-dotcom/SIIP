import { useState, useEffect } from 'react';

const announcements = [
  'FREE SHIPPING ON ORDERS OVER $100',
  'NEW COLLECTION — ARCADE DROPS 2025',
  'USE CODE SIIP20 FOR 20% OFF',
];

const AnnouncementBanner = () => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % announcements.length);
        setFade(true);
      }, 300);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-primary text-primary-foreground h-[var(--banner-height)] flex items-center justify-center z-[60] relative transition-all duration-300">
      <p
        className={`text-display text-[10px] tracking-[0.2em] transition-opacity duration-300 ${
          fade ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {announcements[index]}
      </p>
    </div>
  );
};

export default AnnouncementBanner;
