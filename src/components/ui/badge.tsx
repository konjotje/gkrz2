import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1.5 text-xs font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-gokkerz-green text-white shadow hover:bg-gokkerz-green/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground hover:bg-accent",
        success: "border-transparent bg-green-500/10 text-green-600 hover:bg-green-500/20",
        warning: "border-transparent bg-yellow-500/10 text-yellow-600 hover:bg-yellow-500/20",
        info: "border-transparent bg-blue-500/10 text-blue-600 hover:bg-blue-500/20",
        premium: "border-transparent bg-gradient-to-r from-gokkerz-green to-gokkerz-green-dark text-white shadow-sm hover:shadow",
        promotion: "border-transparent bg-gokkerz-green/10 text-gokkerz-green hover:bg-gokkerz-green/20 transition-colors",
      },
      size: {
        default: "px-3 py-1.5",
        sm: "px-2.5 py-1 text-[10px]",
        lg: "px-4 py-2",
      },
      animation: {
        none: "",
        pulse: "animate-pulse",
        bounce: "animate-bounce",
        float: "animate-float",
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      animation: "none",
    },
  }
)

type BadgeElement = HTMLDivElement | HTMLButtonElement

export interface BadgeProps
  extends VariantProps<typeof badgeVariants> {
  className?: string
  onClick?: () => void
  children?: React.ReactNode
}

const Badge = React.forwardRef<BadgeElement, BadgeProps>(
  ({ className, variant, size, animation, onClick, children, ...props }, ref) => {
    const Comp = onClick ? "button" : "div"
    const buttonProps = onClick ? { type: "button" as const } : {}
    
    return (
      <Comp
        className={cn(
          badgeVariants({ variant, size, animation }),
          onClick && "cursor-pointer active:scale-95",
          className
        )}
        ref={ref as any}
        onClick={onClick}
        {...buttonProps}
        {...props}
      >
        {children}
      </Comp>
    )
  }
)
Badge.displayName = "Badge"

export { Badge, badgeVariants }
