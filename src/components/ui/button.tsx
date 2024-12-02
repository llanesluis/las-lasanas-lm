import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
}

export default function Button({ children, isLoading, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      disabled={isLoading}
      className={cn(
        "bg-primary text-primary-foreground cursor-pointer rounded-[12px_4px_12px_4px] px-4 py-2 font-serif shadow-lg transition-all",
        "max-md:px-3 max-md:text-sm",
        "inset-shadow-xs inset-shadow-neutral-100/50",
        "hover:opacity-90 active:scale-97 active:shadow-none disabled:pointer-events-none disabled:opacity-50",
        props.className,
      )}
    >
      {children}
    </button>
  );
}
