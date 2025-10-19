import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cn } from "@/lib/utils";

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      "relative h-4 w-full overflow-hidden rounded-full bg-secondary", // la piste
      className
    )}
    {...props}
  >
    <ProgressPrimitive.Indicator
      // on enlève toute classe de couleur qui pourrait écraser
      className="h-full w-full flex-1 transition-all progress-indicator-axiiz"
      style={{
        transform: `translateX(-${100 - (value || 0)}%)`,
        backgroundColor: "#f47014", // couleur cible
      }}
    />
  </ProgressPrimitive.Root>
));

Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
