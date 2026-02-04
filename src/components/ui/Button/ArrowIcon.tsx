// src/components/ui/Button/ArrowIcon.tsx
import { clsx } from 'clsx';

interface ArrowIconProps {
  className?: string;
  direction?: 'left' | 'right' | 'up' | 'down';
  size?: 'sm' | 'md' | 'lg';
  glowIntensity?: number; // 0 = нет свечения, 1 = максимальное
  toggled?: boolean;
}

const ArrowIcon = ({ 
  glowIntensity = 0.3,
  className = '',
  size = 'md',
  direction = 'down',
  toggled = false,
}: ArrowIconProps) => {
  
  const scaleMap = {
    sm: 0.5,
    md: 0.8,
    lg: 1
  };

  const scale = scaleMap[size];

  const rotationMap = {
    left: -90,
    right: 90,
    up: 180,
    down: 0
  };
  
  const rotation = rotationMap[direction];
  
  // Динамические стили для свечения
  const glowStyle = toggled 
    ? {
        filter: `drop-shadow(0 0 ${4 + glowIntensity * 4}px color-mix(in srgb, var(--color-indicator-action) ${glowIntensity * 100}%, transparent))`,
        opacity: 0.8 + (glowIntensity * 0.2), // От 0.8 до 1.0
      }
    : {
        filter: 'none',
        opacity: 0.6,
      };

  return (
    <svg 
      width="36" 
      height="34" 
      viewBox="0 0 36 34" 
      className={clsx(
        'indicator indicator--action',
        className,
        { 'is-toggled': toggled } // CSS-класс для глобальных стилей
      )}
      style={{
        transform: `scale(${scale}) rotate(${rotation}deg)`,
        transformOrigin: 'center',
        width: `${36 * scale}px`,
        height: `${34 * scale}px`,
        // Плавный переход только для трансформации
        transition: 'transform 0.2s ease-in-out',
      }}
      aria-hidden="true" // Для доступности
    >
      <defs>
        {/* Базовый фильтр для свечения */}
        <filter id="arrow-glow-filter" x="-50%" y="-50%" width="200%" height="200%">
          <feFlood 
            floodColor="var(--color-indicator-action)" 
            floodOpacity={glowIntensity}
            result="baseColor"
          />
          <feComposite in="baseColor" in2="SourceAlpha" operator="in" result="shape"/>
          <feGaussianBlur in="shape" stdDeviation="3" result="blur1"/>
          <feGaussianBlur in="shape" stdDeviation="6" result="blur2"/>
          <feMerge result="customGlow">
            <feMergeNode in="blur1" mode="normal"/>
            <feMergeNode in="blur2" mode="screen"/>
          </feMerge>
          <feMerge>
            <feMergeNode in="customGlow"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        
        {/* Альтернативный фильтр для отключенного состояния */}
        <filter id="arrow-no-glow">
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.6"/>
          </feComponentTransfer>
        </filter>
      </defs>
      
      <polygon 
        points="18 24.79 9 9.21 27 9.21 18 24.79"
        style={{
          fill: 'var(--color-indicator-action)',
          // Динамическое применение фильтров
          filter: toggled ? 'url(#arrow-glow-filter)' : 'url(#arrow-no-glow)',
          // Плавный переход для всех визуальных свойств
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          ...glowStyle,
        }}
        className="indicator__shape"
      />
    </svg>
  );
};

export default ArrowIcon;
