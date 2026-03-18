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
          variant="outline" size="lg" onClick={onCtaClick} aria-label={ctaText} toggled={false}>Рассчитать стоимость</Button>


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
      </div>
    </section>
  );
};
