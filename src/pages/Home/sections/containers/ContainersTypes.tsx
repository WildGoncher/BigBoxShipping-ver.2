import { useState } from "react";
import { ContainerCard } from "../../../../components/ui/ContainerCard/ContainerCard";
import { clsx } from "clsx";
import { containers } from "../../../../data/containers";

export const ContainersTypes = () => {
 const [openCardId, setOpenCardId] = useState<string | null>(null);

  // ← ДОБАВИТЬ: обработчик переключения карточки
  const toggleCard = (id: string) => {
    setOpenCardId(prev => prev === id ? null : id);
  };

  // ← ДОБАВИТЬ: обработчик заказа
  const handleOrder = (id: string) => {
    console.log(`Заказ контейнера: ${id}`);
    // В будущем: модалка, аналитика, Strapi
  };

  return (
    <section
      className={clsx(
        "relative w-full",
        "py-12 md:py-16 px-4 md:px-8",
        "flex flex-col",
      )}
      aria-labelledby="Модели контейнеров"
    >
      <div className="container mx-auto">
        <header className="mb-8 px-4 sm:px-6 lg:px-8 md:mb-12">
          <h2
            id="containers-types-heading"
            className={clsx(
              "text-2xl md:text-3xl font-semibold",
              "text-bbs-white",
              "text-left",
            )}
          >
            Модели контейнеров
          </h2>
        </header>
        <div className={clsx(
          "grid",           // ← грид по размеру контента
  "grid-cols-1",
  "md:grid-cols-4",
  "lg:grid-cols-4",
  "gap-4 md:gap-6",
  "w-full",
          )}>
          {containers.map((container) => (
              <ContainerCard
                key={container.id}
                container={container}
                isOpen={openCardId === container.id}
                onToggle={() => toggleCard(container.id)}
                onOrder={() => handleOrder(container.id)}
              />
            ))}
        </div>
      </div>
    </section>
  );
};
