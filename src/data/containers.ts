// src/data/containers.ts
export interface Container {
  id: string;
  title: string;
  subtitle?: string;
  name: string;
  imageUrl: string; // Было 'image', нужно 'imageUrl'
  description: string; // HTML строка с <strong> для выделения
  features: string[]; // Для CardSlider
}

export const containers: Container[] = [
  {
    id: "40-dry-van",
    title: "40' Dry Van (Dry Freight)",
    name: "Стандартный контейнер",
    imageUrl: "src/assets/img/containers/container_40_dv.png",
    description:
      "40-футовый контейнер <strong>стандартной высоты</strong> с объемом 67.5 м³ и максимальной грузоподъемностью 27 тонн.",
    features: [
      "Длина: 12.03 м",
      "Ширина: 2.35 м",
      "Высота: 2.38 м",
      "Вместимость: 25 европалет",
    ],
  },
  {
    id: "40-pallet-wide",
    title: "40' Pallet Wide",
    name: "Широкий контейнер",
    imageUrl: "src/assets/img/containers/container_40_pallet_wide.png",
    description:
      "40-футовый контейнер с <strong>увеличенной шириной</strong> с объемом 70 м³ и максимальной грузоподъемностью 27 тонн.",
    features: [
      "Длина: 12.03 м",
      "Ширина: 2.44 м",
      "Высота: 2.69 м",
      "Вместимость: 29 европалет",
    ],
  },
  {
    id: "40-high-cube",
    title: "40' High Cube",
    name: "Высокий контейнер",
    imageUrl: "src/assets/img/containers/container_40_high_cube.png",
    description:
      "40-футовый контейнер <strong>увеличенной высоты</strong> с объемом 75.8 м³ и максимальной грузоподъемностью 27 тонн.",
    features: [
      "Длина: 12.03 м",
      "Ширина: 2.35 м",
      "Высота: 2.69 м",
      "Вместимость: 25 европалет",
    ],
  },
  {
    id: "40-high-cube-pallet-wide",
    title: "40' High Cube Pallet Wide",
    name: "Высокий контейнер",
    imageUrl: "src/assets/img/containers/container_40_high_cube.png",
    description:
      "Контейнер с <strong>увеличенной высотой и шириной</strong> с объемом 78.7 м³ и максимальной грузоподъемностью 27 тонн.",
    features: [
      "Длина: 12.03 м",
      "Ширина: 2.44 м",
      "Высота: 2.69 м",
      "Вместимость: 29 европалет",
    ],
  },
  {
    id: "40-open-top",
    title: "40' Open Top",
    name: "Открытый контейнер",
    imageUrl: "src/assets/img/containers/container_40_open_top.png",
    description:
      "Контейнер с <strong>возможностью загрузки сверху</strong> с объемом 75.8 м³ и максимальной грузоподъемностью 27 тонн.",
    features: ["Длина: 12.03 м", "Ширина: 2.35 м", "Высота: 2.38 м"],
  },
  {
    id: "40-high-cube-open-top",
    title: "40' High Cube Open Top",
    name: "Высокий контейнер",
    imageUrl: "src/assets/img/containers/container_40_open_top.png",
    description:
      "Контейнер с <strong>увеличенной высотой и шириной</strong> с объемом 75.7 м³ и максимальной грузоподъемностью 27 тонн.",
    features: ["Длина: 12.03 м", "Ширина: 2.44 м", "Высота: 2.69 м"],
  },
];
