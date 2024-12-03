"use client";

import { cn } from "@/lib/utils";
import { ChevronDown, ChevronUp } from "lucide-react";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

export function ScreenDevTools() {
  const [isShow, setIsShow] = useState(true);

  if (process.env.NODE_ENV === "production") return null;

  return (
    <div
      className={cn(
        "group isolate",
        "fixed bottom-10 left-10 z-[1] transition-all",
        !isShow && "bottom-0 translate-y-full",
      )}
    >
      {/* Toggle show-hide button */}
      <button
        className={cn(
          "absolute top-[-50%] left-[50%] z-[-1] translate-x-[-50%]",
          "bg-card ring-muted size-10 rounded-full ring shadow",
        )}
        onClick={() => setIsShow(!isShow)}
      >
        {isShow && (
          <ChevronDown
            className={cn(
              "m-auto size-6 translate-y-[-25%]",
              "active:scale-90",
            )}
          />
        )}
        {!isShow && (
          <ChevronUp
            className={cn(
              "m-auto size-6 translate-y-[-25%]",
              "active:scale-90",
            )}
          />
        )}
      </button>

      {/* DevTools */}
      <div
        className={cn(
          "flex justify-between gap-1",
          "bg-card ring-muted rounded-full p-1 font-mono ring shadow",
        )}
      >
        <DynamicScreenSize />
      </div>
    </div>
  );
}

export const DynamicScreenDevTools = dynamic(async () => ScreenDevTools, {
  ssr: false,
});

const DynamicScreenSize = dynamic(async () => ScreenSize, {
  ssr: false,
});

export function ScreenSize() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [windowWidth]);

  return (
    <div
      className={cn(
        "inline-flex w-fit items-center justify-center gap-2",
        "bg-background ring-muted rounded-full p-2 text-sm ring",
      )}
    >
      <div className="w-8 text-center">
        <div className="block sm:hidden">xs</div>
        <div className="hidden sm:block md:hidden">sm</div>
        <div className="hidden md:block lg:hidden">md</div>
        <div className="hidden lg:block xl:hidden">lg</div>
        <div className="hidden xl:block 2xl:hidden">xl</div>
        <div className="hidden 2xl:block">2xl</div>
      </div>

      <hr className="bg-card h-full w-[2px]" />

      <div>
        <span className="font-semibold">{windowWidth}</span>px
      </div>
    </div>
  );
}
