import React, { useRef, useEffect } from 'react';

interface AdfitProps {
  unit: string;
  width: number;
  height: number;
}

interface Adfit {
  display: (unit: string) => void;
  destroy: (unit: string) => void;
  refresh: (unit: string) => void;
}

declare global {
  interface Window {
    adfit?: Adfit;
  }
}

const Adfit = ({ unit, width, height }: AdfitProps) => {
  const scriptElement = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.setAttribute('src', 'https://t1.daumcdn.net/kas/static/ba.min.js');
    script.setAttribute('charset', 'utf-8');
    scriptElement.current?.appendChild(script);

    return () => {
      const globalAdfit = 'adfit' in window ? window.adfit : null;
      if (globalAdfit) globalAdfit.destroy(unit);
    };
  }, []);

  return (
    <div ref={scriptElement}>
      <ins
        className="kakao_ad_area"
        style={{ display: 'none' }}
        data-ad-unit={unit}
        data-ad-width={width}
        data-ad-height={height}
      ></ins>
    </div>
  );
};

export default Adfit;
