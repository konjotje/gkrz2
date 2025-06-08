import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { AlertCircle, CheckCircle2, Info, XCircle } from "lucide-react"

import { cn } from "@/lib/utils"

const alertVariants = cva(
  "relative w-full rounded-lg border px-4 py-3 text-sm transition-all duration-300",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive:
          "border-red-500/50 bg-red-500/10 text-red-600 dark:border-red-500 [&>svg]:text-red-600",
        success:
          "border-green-500/50 bg-green-500/10 text-green-600 dark:border-green-500 [&>svg]:text-green-600",
        warning:
          "border-yellow-500/50 bg-yellow-500/10 text-yellow-600 dark:border-yellow-500 [&>svg]:text-yellow-600",
        info:
          "border-blue-500/50 bg-blue-500/10 text-blue-600 dark:border-blue-500 [&>svg]:text-blue-600",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> &
    VariantProps<typeof alertVariants> & {
      icon?: React.ReactNode
    }
>(({ className, variant, icon, children, ...props }, ref) => {
  const getIcon = () => {
    if (icon) return icon;
    switch (variant) {
      case "destructive":
        return <XCircle />;
      case "success":
        return <CheckCircle2 />;
      case "warning":
        return <AlertCircle />;
      case "info":
        return <Info />;
      default:
        return <Info />;
    }
  };

  return (
    <div
      ref={ref}
      role="alert"
      className={cn(
        alertVariants({ variant }),
        "animate-in fade-in-0 slide-in-from-top-1 duration-300",
        className
      )}
      {...props}
    >
      <div className="flex items-start gap-4">
        {getIcon() && <div className="h-4 w-4 mt-0.5 flex-shrink-0">{getIcon()}</div>}
        <div className="flex-1">{children}</div>
      </div>
    </div>
  )
})
Alert.displayName = "Alert"

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, children, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn("mb-1 font-medium leading-none tracking-tight", className)}
    {...props}
  >
    {children}
  </h5>
))
AlertTitle.displayName = "AlertTitle"

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm opacity-90", className)}
    {...props}
  />
))
AlertDescription.displayName = "AlertDescription"

export { Alert, AlertTitle, AlertDescription }
