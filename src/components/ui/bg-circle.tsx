import { cn } from "@/lib/utils";

export default function BgCircle({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "absolute -z-10 aspect-square size-120 rounded-full transition-all md:size-180",
        "ring-muted/50 bg-transparent ring",
        className,
      )}
    ></div>
  );
}
