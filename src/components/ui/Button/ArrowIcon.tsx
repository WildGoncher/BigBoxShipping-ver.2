import React from 'react';

const ArrowIcon = () => (
  <svg width="20" height="18" viewBox="0 0 36 34" className="indicator indicator--action">
    <defs>
      <filter id="premium-glow" x="-50%" y="-50%" width="200%" height="200%">
        <feFlood flood-color="var(--color-indicator-action)" result="baseColor"/>
        <feComposite in="baseColor" in2="SourceAlpha" operator="in" result="shape"/>
        <feGaussianBlur in="shape" stdDeviation="4" result="blur1"/>
        <feGaussianBlur in="shape" stdDeviation="8" result="blur2"/>
        <feMerge result="customGlow">
          <feMergeNode in="blur1" mode="normal"/>
          <feMergeNode in="blur2" mode="screen"/>
        </feMerge>
        <feMerge>
          <feMergeNode in="customGlow"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    
    <polygon 
      points="18 24.79 9 9.21 27 9.21 18 24.79"
      className="indicator__shape"
    />
  </svg>
);

export default ArrowIcon;
