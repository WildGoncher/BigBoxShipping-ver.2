// src/pages/Home/Home.tsx
import { useState } from "react";
import { ContainerCard } from "../../components/ui/ContainerCard/ContainerCard";
import { containers } from "../../data/containers";
import { Menu, MENU_CONSTANTS } from "../../components/ui/Menu"; 
import { Hero } from "./sections/Hero";
import { Button } from "../../components/ui/Button";


export const Home = () => {
  const [openCardId, setOpenCardId] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleCard = (id: string) => {
    setOpenCardId(prev => prev === id ? null : id);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleHeroCta = () => {
    console.log('Кнопка "Рассчитать стоимость" нажата');
    // В будущем можно добавить:
    // - Скролл к форме расчета
    // - Открытие модального окна
    // - Отправку аналитики
  };

  const handleOrder = (containerId: string) => {
    console.log(`Order: ${containerId}`);
    alert(`Заказ контейнера: ${containerId}`);
  };

  return (
    <div className="relative min-h-screen">
      {/* Меню - уже работает */}
      <Menu isOpen={isMenuOpen} onToggle={toggleMenu} />
      
      {/* Основной контент страницы */}
      <main style={{ paddingTop: `${MENU_CONSTANTS.TRIGGER_HEIGHT}px` }}>
        
        {/* Hero секция */}
        <Hero
          // Можно передать кастомные значения или использовать дефолтные
          title="Грузоперевозки в Калининград"
          subtitle="Доставка грузов из любого города России. Без отказов. Гарантия 100%"
          ctaText="Рассчитать стоимость"
          onCtaClick={handleHeroCta}
          // Фоновое изображение (положите в public/images/hero-bg.jpg)
          backgroundImage="/images/backgrounds/Sea_bg.png"
          showLogo={true}
          // Дополнительные классы если нужны
          className="hero-fade-in"
        />
        
        {/* Здесь позже будут другие секции:
            - InfoSection (с вкладками)
            - ContainerShowcase (ваши карточки)
            - ProcessSection (процесс доставки)
            - ContactSection
        */}
        
      </main>
    </div>  );
};
