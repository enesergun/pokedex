import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        normal:
          "border-transparent bg-normal text-primary-foreground hover:bg-normal/80",
        fire: "border-transparent bg-fire text-primary-foreground hover:bg-fire/80",
        water:
          "border-transparent bg-water text-primary-foreground hover:bg-water/80",
        electric:
          "border-transparent bg-electric text-primary-foreground hover:bg-electric/80",
        grass:
          "border-transparent bg-grass text-primary-foreground hover:bg-grass/80",
        ice: "border-transparent bg-ice text-primary-foreground hover:bg-ice/80",
        fighting:
          "border-transparent bg-fighting text-primary-foreground hover:bg-fighting/80",
        poison:
          "border-transparent bg-poison text-primary-foreground hover:bg-poison/80",
        ground:
          "border-transparent bg-ground text-primary-foreground hover:bg-ground/80",
        flying:
          "border-transparent bg-flying text-primary-foreground hover:bg-flying/80",
        psychic:
          "border-transparent bg-psychic text-primary-foreground hover:bg-psychic/80",
        bug: "border-transparent bg-bug text-primary-foreground hover:bg-bug/80",
        rock: "border-transparent bg-rock text-primary-foreground hover:bg-rock/80",
        ghost:
          "border-transparent bg-ghost text-primary-foreground hover:bg-ghost/80",
        dragon:
          "border-transparent bg-dragon text-primary-foreground hover:bg-dragon/80",
        dark: "border-transparent bg-dark text-primary-oreground hover:bg-dark/80",
        steel:
          "border-transparent bg-steel text-primary-foreground hover:bg-steel/80",
        fairy:
          "border-transparent bg-fairy text-primary-foreground hover:bg-fairy/80",

        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
