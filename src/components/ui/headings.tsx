import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

export function H1({ children, className, ...props }: ComponentProps<"h1">) {
  return (
    <h1
      className={cn(
        "font-serif font-bold text-pretty",
        // "text-3xl sm:text-4xl md:text-5xl",
        "text-3xl @sm:text-4xl @md:text-6xl",
        className,
      )}
      {...props}
    >
      {children}
    </h1>
  );
}

export function H2({ children, className, ...props }: ComponentProps<"h2">) {
  return (
    <h1
      className={cn(
        "font-serif text-pretty",
        "text-3xl sm:text-4xl md:text-5xl",
        className,
      )}
      {...props}
    >
      {children}
    </h1>
  );
}

export function H3({ children, className, ...props }: ComponentProps<"h3">) {
  return (
    <h1
      className={cn(
        "font-serif text-pretty",
        "text-2xl sm:text-3xl md:text-4xl",
        className,
      )}
      {...props}
    >
      {children}
    </h1>
  );
}
