import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import { ComponentProps } from "react";

interface ExternalLinkProps extends ComponentProps<"a"> {
  showIcon?: boolean;
}

export default function ExternalLink({
  href,
  className,
  children,
  title,
  showIcon,
  ...props
}: ExternalLinkProps) {
  if (!href || !children) return null;

  return (
    <a
      title={title}
      href={href}
      className={cn(
        "inline-flex w-fit items-center justify-between",
        className,
      )}
      rel="noopener noreferrer"
      target="_blank"
      {...props}
    >
      {children}
      {showIcon && <ArrowUpRight size={14} />}
    </a>
  );
}
