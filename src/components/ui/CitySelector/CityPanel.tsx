import { clsx } from "clsx";
import type { CityPanelProps } from "./types";
import { ANIMATION } from "./constants";

export const CityPanel = ({
  city,
  animationState,
  position = "top",
}: CityPanelProps) => {
  if (animationState === "hidden") {
    return null;
  }

  const positionClasses = {
    top: "top-0",
    middle: "top-1/2 -translate-y-1/2",
    bottom: "bottom-0",
  };

  const animationClasses = {
    exiting: clsx(
      "w-0 opacity-0",
      `transition-all duration-[${ANIMATION.DURATION}ms] ease-out`,
      "pointer-events-none",
    ),
    entering: clsx(
      "w-0 opacity-0",
      positionClasses[position],
      `transition-all duration-[${ANIMATION.DURATION}ms] ease-out`,
      "xl:aspect-[21/9]",
    ),
    visible: clsx(
      "w-full opacity-100",
      positionClasses[position],
      `transition-all duration-[${ANIMATION.DURATION}ms] ease-out`,
      "lg:aspect-[21/9] xl:aspect-auto",
      "h-auto min-h-[120px] lg:min-h-full",
    ),
  };

  return (
    <div
      key={city.id}
      className={clsx(
        "absolute left-full z-10",
        "xl:aspect-21/9",
        "min-w-[500px] max-w-[900px]",
        "p-6 md:p-8",
        "text-md",
        "backdrop-blur-[2px]",
        "bg-bbs-white/10 border border-bbs-grey/20 rounded-sm",
        'h-fit',
        animationClasses[animationState],
      )}
      role="region"
      aria-label={`Информация о доставке из ${city.name}`}
      aria-live="polite"
    >
      <div className="flex-1 overflow-y-auto">
        <p className="text-base md:text-md mb-6 text-bbs-white leading-relaxed">
          {city.description}
        </p>

        {city.additionalInfo && (
          <p className="text-bbs-white text-sm md:text-base text-left">
            
            {city.additionalInfo}<span className="whitespace-nowrap">{" "}
            {
              <span className="text-bbs-white font-bold ">
                {city.price}
              </span>
            }
            </span>
          </p>
        )}

        {/* Цена */}

        {/* Особенности */}
        {city.features && city.features.length > 0 && (
          <div className="mt-4 pt-4 border-t border-bbs-white/10">
            <ul className="space-y-1">
              {city.features.map((feature, index) => (
                <li
                  key={index}
                  className="text-sm text-bbs-white/70 flex items-start"
                >
                  <span className="text-bright-green mr-2">•</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
