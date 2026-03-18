import { useState } from "react";
import { clsx } from "clsx";
import { StepCard } from './StepCard';
import { STEPS } from './constants';
import type { ProcessPanelProps } from "./types";

export const ProcessPanel = ({ className, activeStep, onStepClick }: ProcessPanelProps) => {
  const [hoveredStep, setHoveredStep] = useState<string | null>(null);

return (
    <section
      className={clsx("relative w-full py-12 md:py-16", className)}
      aria-label="Процесс доставки"
      role="region"
    >
      <div className="relative w-full flex justify-center px-4 md:px-8">
        <div className="relative flex flex-wrap justify-center gap-4 md:gap-6 pt-4">
          <div
            className={clsx(
              "absolute -inset-x-5.5 -top-8 h-35",
              "bg-bbs-white/10",
              "backdrop-blur-[1px]",
              "rounded-sm",
              "z-0"
            )}
            aria-hidden="true"
          >
          </div>

          {STEPS.map((step, index) => (
            <div
              key={step.id}
              className="relative z-10"
              onMouseEnter={() => setHoveredStep(step.id)}
              onMouseLeave={() => setHoveredStep(null)}
              onClick={() => onStepClick?.(step.id)}
            >
              <StepCard
                step={step}
                index={index}
                isActive={activeStep === step.id || hoveredStep === step.id}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
