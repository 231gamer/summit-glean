import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold ring-offset-background transition-all duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary-dark focus-visible:ring-primary-light btn-float",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 focus-visible:ring-destructive",
        outline:
          "border-2 border-primary bg-transparent text-primary hover:bg-primary/5 hover:border-primary-dark hover:text-primary-dark focus-visible:ring-accent",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 focus-visible:ring-primary-light",
        ghost: 
          "hover:bg-primary/5 hover:text-primary focus-visible:ring-primary-light",
        link: 
          "text-primary underline-offset-4 hover:underline hover:text-primary-dark",
        // University-specific variants
        gold:
          "bg-accent text-accent-foreground font-bold hover:bg-accent-dark focus-visible:ring-primary-light shadow-gold btn-float",
        "gold-outline":
          "border-2 border-accent bg-transparent text-accent hover:bg-accent/10 focus-visible:ring-accent",
        "hero-secondary":
          "border-2 border-primary-foreground/80 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 focus-visible:ring-accent",
        tertiary:
          "text-primary hover:text-primary-dark hover:underline underline-offset-4 focus-visible:ring-primary-light",
        purple:
          "bg-[#5e27c3] text-white hover:bg-[#ffc527] focus-visible:ring-[#7a3fd1] focus-visible:ring-offset-2",
      },
      size: {
        default: "h-11 px-5 py-2",
        sm: "h-9 px-4 text-sm",
        lg: "h-[52px] px-6 text-base",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
