import React from "react";

export interface NavigationItem {
  label: string;
  href?: string;
  onClick?: () => void;
}

interface MenuNavigationProps {
  items?: NavigationItem[];
}

export const MenuNavigation: React.FC<MenuNavigationProps> = ({
  items = [
    { label: "Главная" },
    { label: "Доставка" },
    { label: "Контейнеры" },
    { label: "Продажа" },
    { label: "О нас" },
  ],
}) => {
  const handleItemClick = (item: NavigationItem) => {
    if (item.onClick) {
      item.onClick();
    }
    console.log("Навигация:", item.label);
  };

  return (
    <div className="space-y-4 text-start">
      <h3 className="text-lg font-semibold text-white">Навигация</h3>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index}>
            <button
              className="text-gray-300 hover:text-white w-full text-left py-1
                transition-colors duration-200 hover:pl-2"
              onClick={() => handleItemClick(item)}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
