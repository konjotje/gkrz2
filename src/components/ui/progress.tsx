import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn } from "@/lib/utils"

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> & {
    variant?: "default" | "success" | "warning" | "danger"
  }
>(({ className, value, variant = "default", ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      "relative h-2 w-full overflow-hidden rounded-full bg-gray-100/50",
      className
    )}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className={cn(
        "h-full w-full flex-1 transition-all duration-500",
        variant === "default" && "bg-gradient-to-r from-gokkerz-green to-gokkerz-green-dark",
        variant === "success" && "bg-gradient-to-r from-green-400 to-green-500",
        variant === "warning" && "bg-gradient-to-r from-yellow-400 to-yellow-500",
        variant === "danger" && "bg-gradient-to-r from-red-400 to-red-500",
        "after:absolute after:inset-0 after:bg-[size:20px_20px]",
        "after:bg-gradient-to-r after:from-white/10 after:to-transparent",
        "after:animate-shimmer"
      )}
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
))
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
