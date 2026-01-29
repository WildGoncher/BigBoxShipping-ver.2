import type { FC } from "react";
import './Hero.css'; 
import type { HeroProps } from './types';
import { HERO_TEXTS, HERO_STYLES } from './constants';

import { Button } from "../../../../components/ui/Button";
/**
 * Hero - функциональный компонент React
 * FC<HeroProps> - указываем TypeScript, что компонент принимает пропсы типа HeroProps
 */






export const Hero: FC<HeroProps> = ({ 
  // Деструктуризация пропсов - извлекаем значения из объекта props
  title = HERO_TEXTS.DEFAULT_TITLE,           // Значение по умолчанию
  subtitle = HERO_TEXTS.DEFAULT_SUBTITLE,     // Значение по умолчанию
  ctaText = HERO_TEXTS.DEFAULT_CTA,           // Значение по умолчанию
  onCtaClick,                                 // Функция (без значения по умолчанию)
  backgroundImage,                            // Фон (опционально)
  showLogo = true,                            // По умолчанию true
  className = '',                             // Дополнительные классы
}) => {
  /**
   * Рендер компонента - возвращаем JSX (HTML-подобный синтаксис)
   */
  return (
    /**
     * section - семантический HTML тег для секции
     * style={} - inline стили (используем для фонового изображения)
     * className - комбинируем классы из констант и пропсов
     */
    <section 
      className={`${HERO_STYLES.SECTION} ${className}`}
      style={backgroundImage ? {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      } : undefined}
    >
      {/* Затемнение поверх фона для лучшей читаемости */}
      <div className={HERO_STYLES.OVERLAY} />
      
      {/* Основной контейнер с контентом */}
      <div className={HERO_STYLES.CONTAINER}>
        

        {/* Текстовый контент */}
        <div className={HERO_STYLES.CONTENT}>
          {/* Заголовок H1 - самый важный на странице */}
          <h1 className={HERO_STYLES.TITLE}>
            {title}
          </h1>
          
          {/* Подзаголовок - показываем только если есть */}
          {subtitle && (
            <p className={HERO_STYLES.SUBTITLE}>
              {subtitle}
            </p>
          )}
          
          {/* Кнопка призыва к действию */}
                    




          <Button
          variant="hero" size="lg" onClick={onCtaClick} aria-label={ctaText} toggled={false}>Рассчитать стоимость</Button>


        </div>
        






        {/* Логотип - показываем только если showLogo = true */}
        {showLogo && (
          <div className={HERO_STYLES.LOGO_WRAPPER}>
            {/**
             * img - тег для изображений
             * loading="eager" - загружать сразу (не лениво)
             * alt - обязательный атрибут для доступности
             */}
            <img 
              src="src/assets/img/hero_logo.png" 
              alt="BBS - Грузоперевозки"
              className={HERO_STYLES.LOGO}
              width={360}
              height={360}
              loading="eager"
            />
          </div>
        )}
        
        {/* Индикатор для скролла вниз (опционально) */}
        <div className={HERO_STYLES.SCROLL_INDICATOR}>
          <span className="sr-only">Прокрутите вниз</span>
          <svg 
            className="w-6 h-6 text-white" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </div>
        
      </div>
    </section>
  );
};
