import { cn } from "@/lib/utils";

export default function Placeholder({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "bg-card relative flex size-full flex-col justify-center gap-2 rounded-[15%_2%_15%_2%] p-4 text-center text-neutral-500/70 shadow-lg",
        className,
      )}
    >
      {children ?? "placeholder"}
    </div>
  );
}
