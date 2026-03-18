import { CitySelector } from "../../../../components/ui/CitySelector";
import { clsx } from "clsx";
import type { City } from "../../components/ui/CitySelector/types";

export const Prices = () => {
  
const handleCityChange = (city: City) => {
  console.log('Выбран город для расчёта:', city.name);
};

  return (
    <section 
      className={clsx(
        "relative w-full ",
        "py-12 md:py-16 px-4 md:px-8",
        "flex flex-col"  // ← вертикальная структура
      )}
      aria-labelledby="prices-heading"
    >
      <div className="container mx-auto">      {/* Заголовок — слева, вверху */}
      <header className="w-full container mb-8 px-4 sm:px-6 lg:px-8 md:mb-12">
        <h2 
          id="prices-heading"
          className={clsx(
            "text-2xl md:text-3xl font-semibold",
            "text-bbs-white",
            "text-left"   
          )}
        >
          Рассчитайте стоимость доставки
        </h2>
      </header>

      {/* CitySelector — по центру */}
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-5xl">
          <CitySelector
            initialCity="moscow"
            onCityChange={handleCityChange}
          />
        </div>
      </div>
      </div>
    </section>
  );
};
