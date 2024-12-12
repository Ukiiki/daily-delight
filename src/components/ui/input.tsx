import * as React from "react"
import { cn } from "@/lib/utils"
import { useTheme } from "@/components/ThemeProvider"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    const { theme } = useTheme();
    
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 transition-colors duration-300",
          className
        )}
        style={{
          backgroundColor: `${theme.colors.primary.DEFAULT}10`,
          borderColor: `${theme.colors.primary.DEFAULT}20`,
          color: theme.colors.foreground,
        }}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }