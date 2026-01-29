export interface HeroProps {
  title: string;
  
  subtitle?: string; // ? означает опционально (может не быть)
  
  ctaText?: string;
  
  onCtaClick?: () => void;
  
  backgroundImage?: string;
  
  showLogo?: boolean;
  
  className?: string;
}
