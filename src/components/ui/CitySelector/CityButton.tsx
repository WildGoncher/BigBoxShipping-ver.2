import { Button } from "../Button";
import type { CityButtonProps } from "./types";

export const CityButton = ({
  city,
  isActive,
  onClick,
  arrowDirection = "right",
  cornerStyle = "",
}: CityButtonProps) => {
  return (
    <Button
      variant="arrow"
      size="md"
      toggled={isActive}
      onClick={onClick}
      arrowDirection={arrowDirection}
      arrowGlowIntensity={0.5}
      className={`w-full ${cornerStyle} transition-all duration-400 bg-bbs-white/10`}
      aria-label={`Выбрать город ${city.name}`}
      aria-current={isActive ? "true" : undefined}
    >
      <span>{city.name}</span>
    </Button>
  );
}; 
