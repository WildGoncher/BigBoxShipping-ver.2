import type { Step } from "./types";

export const STEPS: Step[] = [
  {
    id: "step1",
    title: "Заявка",
    description:
      "Мы согласовываем с Вами все условия, оформляем заявку и сразу же готовы отправляться на загрузку.",
    icon: "./src/assets/svg/ico/contract.svg",
  },
  {
    id: "step2",
    title: "Загрузка",
    description:
      "Подаем контейнер прямиком на Ваш склад для погрузки и спешим с ним в порт.",
    icon: "./src/assets/svg/ico/cargo-to-container.svg",
  },
  {
    id: "step3",
    title: "Порт",
    description:
      "Мы сдаем контейнер с Вашим грузом в порт на ближайший рейс в Калининград и оформляем документы для его отправки.",
    icon: "./src/assets/svg/ico/container-loading.svg",
  },
  {
    id: "step4",
    title: "Рейс",
    description:
      "Пока судно с грузом рассекает спокойные воды Балтики, мы готовимся к его выгрузке и, при необходимости, помогаем Вам с его идентификацией.",
    icon: "./src/assets/svg/ico/cargo-ship.svg",
  },
  {
    id: "step5",
    title: "Доставка",
    description:
      "Судно прибыло! Мы ждем его выдачи в порту Калиниграда, забираем контейнер и везем его на Ваш склад для выгрузки.",
    icon: "./src/assets/svg/ico/truck.svg",
  },
];

export const ANIMATION = {
  DURATION: 400,
  PULSE_INTERVAL: 2000,
} as const;
