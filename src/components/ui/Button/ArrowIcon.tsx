interface ArrowIconProps {
  variant?: 'button' | 'select';
  flipped?: boolean;
  className?: string;
}

const ArrowIcon = ({ 
  variant = 'button', 
  flipped = false, 
  className = '' 
}: ArrowIconProps) => {
  
  // Вычисляем центр треугольника для transform-origin
  // Точки: (9, 9.21), (27, 9.21), (18, 24.79)
  // Центр: среднее по X, среднее по Y
  const centerX = (9 + 27 + 18) / 3; // = 18
  const centerY = (9.21 + 9.21 + 24.79) / 3; // ≈ 14.4
  
  return (
    <svg 
      width="20" 
      height="18" 
      viewBox="0 0 36 34" 
      className={`indicator indicator--action ${className}`}
    >
      <defs>
        {/* Custom glow filter */}
        <filter id="premium-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feFlood floodColor="var(--color-indicator-action)" result="baseColor"/>
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
      
      {/* Группа для вращения только треугольника */}
      <g 
        transform={flipped ? `rotate(180, ${centerX}, ${centerY})` : ''}
        style={{
          transformOrigin: `${centerX}px ${centerY}px`, // CSS fallback
        }}
      >
        <polygon 
          points="18 24.79 9 9.21 27 9.21 18 24.79"
          style={{
            filter: 'var(--indicator-glow, none)',
            fill: 'var(--color-indicator-action)'
          }}
          className="indicator__shape"
        />
      </g>
    </svg>
  );
};

export default ArrowIcon;
