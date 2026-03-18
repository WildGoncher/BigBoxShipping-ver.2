// src/pages/Home/Home.tsx
import { useState } from "react";
import { Menu, MENU_CONSTANTS } from "../../components/ui/Menu";
import { Hero } from "./sections/Hero";
import { Prices } from "./sections/prices/Prices";
import { ContainersTypes } from "./sections/containers/ContainersTypes";
import { Process } from "./sections/process/Process";

export const Home = () => {
  const [openCardId, setOpenCardId] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleCard = (id: string) => {
    setOpenCardId((prev) => (prev === id ? null : id));
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

  const handleCityChange = (city) => {
    console.log("Выбран город:", city.name);
    // Здесь можно добавить логику обработки выбора города
  };
  return (
    <div className="relative min-h-screen bg-cover bg-center bg-fixed bg-[url('/images/backgrounds/Sea_bg.png')]">
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
        <Prices />
        <ContainersTypes />
        <Process />
      </main>
    </div>
  );
};
