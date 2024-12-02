"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentProps } from "react";

export default function NavLink({
  href,
  ...props
}: ComponentProps<typeof Link>) {
  const pathname = usePathname();
  const isActive = pathname.includes(href.toString());

  return (
    <Link
      href={href}
      {...props}
      className={cn(
        isActive && "text-accent underline underline-offset-4 drop-shadow",
        props.className,
      )}
    >
      {props.children}
    </Link>
  );
}
