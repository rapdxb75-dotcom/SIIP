import { useState, useEffect } from 'react';

const AnnouncementBanner = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 7,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Check if target date already exists in localStorage
    const storedDate = localStorage.getItem('announcementTargetDate_v2');
    let targetDate: Date;

    if (storedDate) {
      targetDate = new Date(storedDate);
    } else {
      // Initialize target date (1 week from now)
      targetDate = new Date();
      targetDate.setDate(targetDate.getDate() + 7);
      localStorage.setItem('announcementTargetDate_v2', targetDate.toISOString());
    }

    const updateTimer = () => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return false;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60)
      });
      return true;
    };

    // Initial update
    updateTimer();

    const interval = setInterval(() => {
      const active = updateTimer();
      if (!active) clearInterval(interval);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const format = (num: number) => String(num).padStart(2, '0');

  return (
    <div className="bg-white text-black h-[var(--banner-height)] flex items-center justify-center z-[60] border-b border-black/10 relative transition-all duration-300">
      <div className="container mx-auto max-w-[1400px] px-4 md:px-8 flex justify-center items-center gap-8 md:gap-16">
        {/* Left Title */}
        <div className="text-display text-[12px] md:text-[14px] font-black tracking-tighter whitespace-nowrap uppercase">
          LOREM IPSUM
        </div>

        {/* Timer Items */}
        <div className="flex items-center gap-1.5 md:gap-3">
          <div className="flex flex-col items-center min-w-[24px] md:min-w-[36px]">
            <span className="text-display text-[14px] md:text-[20px] font-bold leading-none">{format(timeLeft.days)}</span>
            <span className="text-[6px] md:text-[8px] opacity-60 font-body tracking-tight mt-0.5 lowercase">days</span>
          </div>
          <span className="text-[14px] md:text-[18px] font-bold opacity-30 mb-2">:</span>
          <div className="flex flex-col items-center min-w-[24px] md:min-w-[36px]">
            <span className="text-display text-[14px] md:text-[20px] font-bold leading-none">{format(timeLeft.hours)}</span>
            <span className="text-[6px] md:text-[8px] opacity-60 font-body tracking-tight mt-0.5 lowercase">hours</span>
          </div>
          <span className="text-[14px] md:text-[18px] font-bold opacity-30 mb-2">:</span>
          <div className="flex flex-col items-center min-w-[24px] md:min-w-[36px]">
            <span className="text-display text-[14px] md:text-[20px] font-bold leading-none">{format(timeLeft.minutes)}</span>
            <span className="text-[6px] md:text-[8px] opacity-60 font-body tracking-tight mt-0.5 lowercase">mins</span>
          </div>
          <span className="text-[14px] md:text-[18px] font-bold opacity-30 mb-2">:</span>
          <div className="flex flex-col items-center min-w-[24px] md:min-w-[36px]">
            <span className="text-display text-[14px] md:text-[20px] font-bold leading-none">{format(timeLeft.seconds)}</span>
            <span className="text-[6px] md:text-[8px] opacity-60 font-body tracking-tight mt-0.5 lowercase">secs</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBanner;
