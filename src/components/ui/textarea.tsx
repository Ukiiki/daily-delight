import * as React from "react"
import { cn } from "@/lib/utils"
import { useTheme } from "@/components/ThemeProvider"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    const { theme } = useTheme();
    
    return (
      <textarea
        className={cn(
          "flex min-h-[80px] w-full rounded-md px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 transition-colors duration-300",
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
Textarea.displayName = "Textarea"

export { Textarea }