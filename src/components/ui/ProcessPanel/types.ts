export interface Step {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface StepCardProps {
  step: Step;
  isActive?: boolean;
  index: number;
}

export interface ProcessPanelProps {
  className?: string;
  activeStep?: string;
  onStepClick?: (stepId: string) => void;
}
