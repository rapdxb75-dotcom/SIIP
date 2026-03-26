import React, { useMemo } from 'react';

const StarsBackground = () => {
  const generateBoxShadow = (n: number) => {
    let value = '';
    for (let i = 0; i < n; i++) {
      value += `${Math.floor(Math.random() * 2000)}px ${Math.floor(Math.random() * 2000)}px #FFF${i === n - 1 ? '' : ', '}`;
    }
    return value;
  };

  const shadowsSmall = useMemo(() => generateBoxShadow(700), []);
  const shadowsMedium = useMemo(() => generateBoxShadow(200), []);
  const shadowsBig = useMemo(() => generateBoxShadow(100), []);

  return (
    <div className="absolute inset-0 overflow-hidden bg-[radial-gradient(ellipse_at_bottom,_#1B2735_0%,_#090A0F_100%)] pointer-events-none">
      <style>
        {`
          @keyframes animStar {
            from { transform: translateY(0px); }
            to { transform: translateY(-2000px); }
          }
          .star-layer {
            background: transparent;
            position: absolute;
            top: 0;
            left: 0;
          }
          .star-layer:after {
            content: " ";
            position: absolute;
            top: 2000px;
            background: transparent;
          }
        `}
      </style>
      <div 
        className="star-layer animate-[animStar_50s_linear_infinite] w-[1px] h-[1px]"
        style={{ 
          boxShadow: shadowsSmall,
        }}
        aria-hidden="true"
      >
        <div className="absolute top-[2000px] w-[1px] h-[1px]" style={{ boxShadow: shadowsSmall }} />
      </div>
      <div 
        className="star-layer animate-[animStar_100s_linear_infinite] w-[2px] h-[2px]"
        style={{ 
          boxShadow: shadowsMedium,
        }}
        aria-hidden="true"
      >
        <div className="absolute top-[2000px] w-[2px] h-[2px]" style={{ boxShadow: shadowsMedium }} />
      </div>
      <div 
        className="star-layer animate-[animStar_150s_linear_infinite] w-[3px] h-[3px]"
        style={{ 
          boxShadow: shadowsBig,
        }}
        aria-hidden="true"
      >
        <div className="absolute top-[2000px] w-[3px] h-[3px]" style={{ boxShadow: shadowsBig }} />
      </div>
    </div>
  );
};

export default StarsBackground;
