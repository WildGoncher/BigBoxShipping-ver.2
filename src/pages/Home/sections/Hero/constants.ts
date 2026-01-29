export const HERO_TEXTS = {
  DEFAULT_TITLE: 'Грузоперевозки в Калининград',
  DEFAULT_SUBTITLE: 'Надежная доставка грузов из любого города России',
  DEFAULT_CTA: 'Рассчитать стоимость доставки',
} as const;

export const HERO_STYLES = {
  SECTION: 'relative min-h-[90vh] flex items-center justify-center overflow-hidden',
  OVERLAY: 'absolute inset-0  bg-opacity-0 z-0',
  CONTAINER: 'relative z-10 container flex items-center justify-between  mx-auto px-4 sm:px-6 lg:px-8 text-start ',
  LOGO_WRAPPER: 'w-[40%] mb-8 md:mb-12 flex justify-center',
  LOGO: 'h-16 md:h-60 w-auto',
  CONTENT: 'w-[60%] space-y-6 md:space-y-8',
  TITLE: 'text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight',
  SUBTITLE: 'text-xl md:text-2xl text-gray-200 font-light max-w-2xl ',
  CTA_BUTTON: 'mr-12 inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50',
  SCROLL_INDICATOR: 'absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce',
} as const;
