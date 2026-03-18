import { clsx } from "clsx";
import { ProcessPanel } from "../../../../components/ui/ProcessPanel/ProcessPanel";

export const Process = () => {

  return (
  <section className={clsx(
      "section")}>
      <div className="container mx-auto">
        <header className="w-full container mb-8 px-4 sm:px-6 lg:px-8 md:mb-12">
          <h2 id="process-heading" className={clsx("text-2xl md:text-3xl font-semibold",
            "text-bbs-white",
            "text-left" )}>Процесс доставки</h2>
        </header>
        <ProcessPanel />
      </div>
    </section>
  );
};
