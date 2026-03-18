export type CityId = "moscow" | "spb" | "othercity";

export interface City {
  id: CityId;
  name: string;
  description: string;
  additionalInfo?: string;
  price?: string;
  features?: string[];
}

export type AnimationState = "entering" | "visible" | "exiting";

export interface CitySelectorProps {
  initialCity: CityId;
  onCityChange?: (city: City) => void;
  className?: string;
}

export interface CityButtonProps {
  city: City;
  isActive: boolean;
  onClick: () => void;
  arrowDirection?: "up" | "down" | "left" | "right";
  cornerStyle?: string;
  className?: string;
}

export interface CityPanelProps {
  city: City;
  animationState: AnimationState;
  position?: "top" | "middle" | "bottom";
}
