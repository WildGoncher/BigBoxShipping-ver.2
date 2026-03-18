import { useState, useEffect, useCallback, useRef } from "react";
import { clsx } from "clsx";
import { CityButton } from "./CityButton";
import { CityPanel } from "./CityPanel";
import { CITIES } from "./constants";
import type { CitySelectorProps, CityId, AnimationState } from "./types";

export const CitySelector = ({
  initialCity,
  onCityChange,
  className,
}: CitySelectorProps) => {
  const [activeCityId, setActiveCityId] = useState<CityId>(initialCity);
  const [animationState, setAnimationState] =
    useState<AnimationState>("visible");
  const [nextCityId, setNextCityId] = useState<CityId | null>(null);
  const prevInitialCityRef = useRef(initialCity);

  const activeCity = CITIES.find((city) => city.id === activeCityId);
  const nextCity = nextCityId
    ? CITIES.find((city) => city.id === nextCityId)
    : null;

  const handleCityChange = useCallback(
    (cityId: CityId) => {
      if (cityId === activeCityId) return;

      setAnimationState("exiting");
      setNextCityId(cityId);

      const timer = setTimeout(() => {
        setActiveCityId(cityId);
        setAnimationState("entering");

        const city = CITIES.find((c) => c.id === cityId);
        if (city && onCityChange) {
          onCityChange(city);
        }

        const visibleTimer = setTimeout(() => {
          setAnimationState("visible");
          setNextCityId(null);
        }, 50);

        return () => clearTimeout(visibleTimer);
      }, 400);

      return () => clearTimeout(timer);
    },
    [activeCityId, onCityChange],
  );

  useEffect(() => {
    if (initialCity !== prevInitialCityRef.current) {
      prevInitialCityRef.current = initialCity;
      handleCityChange(initialCity);
    }
  }, [initialCity, handleCityChange]);

  if (!activeCity) {
    return (
      <div className="text-bbs-white p-4 bg-dark-red/20 border border-dark-red/50 rounded">
        Город не найден
      </div>
    );
  }

  return (
    <div
      className={clsx("relative  px-8", className)}
      role="group"
      aria-label="Выбор города отправления"
    >
      {/* Основной контейнер с flex */}
      <div className="flex items-stretch gap-0">
        {/* Текстовый блок */}
        <div
          className={clsx(
            "min-w-sm max-w-3xl md:min-w-xs md:max-w-md lg:min-w-md lg:max-w-3xl",
            "bg-bbs-white/10 backdrop-blur-sm",
            "p-8 rounded-l-sm",
            "border border-bbs-grey/20",
          )}
        >
          <h3 className="text-lg font-bold mb-6 text-bbs-white">
            Выберите город отправления
          </h3>
          <p className="text-md text-bbs-white/90 leading-relaxed ">
            Мы доставляем грузы из крупнейших городов России в Калининград.
            Выберите ваш город, чтобы узнать стоимость и сроки доставки.
          </p>
        </div>

        {/* Контейнер для кнопок И панели - КЛЮЧЕВОЕ ИЗМЕНЕНИЕ */}
        <div className="relative">
          {/* Блок кнопок */}
          <div
            className="grid grid-rows-3 h-full"
            role="radiogroup"
            aria-label="Города отправления"
          >
            {CITIES.map((city, index) => {
              const cornerStyle = (() => {
                if (index === 0) {
                  return "rounded-tr-sm border-l-0 border-b-0 border-r-bbs-grey/20 border-t-bbs-grey/20";
                } else if (index === CITIES.length - 1) {
                  return "rounded-br-sm  border-l-0 border-t-0 border-r-bbs-grey/20 border-b-bbs-grey/20";
                } else {
                  return "rounded-none  border-y-bbs-grey/20 border-x-0";
                }
              })();

              return (
                <CityButton
                  key={city.id}
                  city={city}
                  isActive={city.id === activeCityId}
                  onClick={() => handleCityChange(city.id)}
                  arrowDirection="right"
                  cornerStyle={cornerStyle}
                />
              );
            })}
          </div>

          {/* Панель информации - теперь внутри relative контейнера */}
          {animationState === "exiting" && activeCity && (
            <CityPanel
              city={activeCity}
              animationState="exiting"
              position="top"
            />
          )}

          {nextCity && animationState === "entering" && (
            <CityPanel
              city={nextCity}
              animationState="entering"
              position="top"
            />
          )}

          {animationState === "visible" && (
            <CityPanel
              city={activeCity}
              animationState="visible"
              position="top"
            />
          )}
        </div>
      </div>
    </div>
  );
};
