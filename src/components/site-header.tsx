"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/projects", label: "projects" },
  { href: "/cv", label: "cv" },
  { href: "/hobbies", label: "hobbies" },
] as const;

const LOGO_LABELS: Record<string, string> = {
  "/": "home",
  "/projects": "projects",
  "/cv": "resume",
  "/hobbies": "hobbies",
};

export function SiteHeader() {
  const pathname = usePathname();
  const logoLabel = LOGO_LABELS[pathname] ?? "home";

  return (
    <header className="relative z-10 flex items-center justify-between p-8">
      <Link
        href="/"
        className="text-lg tracking-tight text-white transition-colors hover:text-zinc-200"
      >
        alexgu/<span className="text-blue-400">{logoLabel}</span>
      </Link>
      <nav className="flex gap-8 text-sm">
        {NAV_LINKS.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={cn(
              "transition-colors",
              pathname === href ? "text-white" : "hover:text-white"
            )}
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
