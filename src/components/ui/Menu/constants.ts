export const MENU_CONSTANTS = {
  TRIGGER_HEIGHT: 80,
  CONTENT_HEIGHT: '50vh',
  TOTAL_HEIGHT: 'calc(50vh + 80px)',
} as const;

export type MenuConstants = typeof MENU_CONSTANTS;
