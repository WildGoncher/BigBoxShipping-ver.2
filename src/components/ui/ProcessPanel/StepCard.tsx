import { clsx } from "clsx";
import { ANIMATION } from "./constants";
import type { StepCardProps } from "./types";

export const StepCard = ({ step, isActive = false, index }: StepCardProps) => {
  return (
    <div
      className={clsx(
        "relative flex flex-col items-center",
        "flex-1 min-w-[140px] max-w-[200px] h-full",
        "group"
      )}
      role="listitem"
      aria-label={`Шаг ${index + 1}: ${step.title}`}
    >
      <div
        className={clsx(
          "absolute -top-9 z-20",
          "w-6 h-6 rounded-full",
          "flex items-center justify-center",
          "text-sm font-bold",
          "transition-all duration-300",
          isActive
            ? "bg-bright-green text-bbs-blue shadow-[0_0_15px_var(--color-bright-green-shadow-30)]"
            : "bg-bbs-grey/50 text-bbs-white border border-bbs-grey/20"
        )}
      >
        {index + 1}
      </div>

      <div
        className={clsx(
          "relative w-full z-10 flex flex-col",
          "bg-bbs-white/10 backdrop-blur-sm",
          "border border-bbs-grey/20 rounded-sm",
          "p-4 pt-8",
          "transition-all duration-400 ease-out",
          "aspect-[3/4] md:aspect-[4/5] lg:aspect-[3/4]",
          "hover:bg-bbs-white/15 hover:border-bbs-grey/40",
          index === 0 && !isActive && "animate-pulse-glow",
          isActive && "scale-105 z-30",
          "group-hover:scale-105 group-hover:z-30"
        )}
        style={{
          transitionDuration: `${ANIMATION.DURATION}ms`,
        }}
      >
        <div className="mb-3 flex justify-center flex-shrink-0">
          <img
            src={step.icon}
            alt={step.title}
            className={clsx(
              "w-12 h-12 ",
              "transition-all duration-300",
              "group-hover:brightness-125",
              isActive && "brightness-125",
              
            )}
          />
        </div>

        <h3
          className={clsx(
            "text-base font-semibold text-bbs-white",
            "mb-2 text-center flex-shrink-0",
            "transition-colors duration-300",
            isActive && "text-bright-green",
            "group-hover:text-bright-green"
          )}
        >
          {step.title}
        </h3>

        <div
          className={clsx(
            "overflow-hidden",
            "transition-all duration-400 ease-out",
            "max-h-120 opacity-100",
            "group-hover:max-h-120 group-hover:opacity-100",
           // isActive && "max-h-40 opacity-100"
          )}
        >
          <p className="text-xs text-bbs-white/70 text-center leading-relaxed">
            {step.description}
          </p>
        </div>
      </div>
    </div>
  );
};
