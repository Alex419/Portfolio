"use client";

import Link from "next/link";
import { useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteBackground } from "@/components/site-background";
import { buttonVariants } from "@/components/ui/button";

export default function Home() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("ag5174@columbia.edu");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-black text-zinc-300 font-mono relative overflow-hidden">
      <SiteBackground radial />

      <SiteHeader />

      <main className="relative z-10 flex flex-col justify-center flex-1 px-8 max-w-4xl">
        <p className="text-zinc-500 text-sm mb-4 tracking-wider">researcher · engineer · builder</p>
        <h1 className="text-4xl md:text-5xl text-white font-normal leading-tight mb-6">
          Building for <span className="text-blue-400">us</span>
        </h1>
        <p className="text-zinc-500 max-w-lg text-sm leading-relaxed">
          Hey! I&apos;m Alex, I want to create tools that make life better.
          <br></br>
          <br></br>
          Columbia ML Master&apos;s 2026
          <br></br>
          Tufts CS 2025
        </p>

        <div className="flex gap-4 mt-12">
          <Link
            href="/projects"
            className={buttonVariants({ variant: "default", className: "h-auto px-6 py-3 text-sm" })}
          >
            view work
          </Link>
          <Link
            href="/cv"
            className={buttonVariants({ variant: "outline", className: "h-auto px-6 py-3 text-sm" })}
          >
            about me
          </Link>
        </div>
      </main>

      <footer className="relative z-10 p-8 text-xs text-zinc-600 flex justify-between items-end">
        <span>© {new Date().getFullYear()}</span>
        <span className="flex gap-6">
          <a
            href="https://www.linkedin.com/in/alex-gu-447288234/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-400 transition-colors"
          >
            linkedin
          </a>
          <button
            onClick={copyEmail}
            className="hover:text-zinc-400 transition-colors cursor-pointer"
          >
            {copied ? "copied!" : "email"}
          </button>
        </span>
      </footer>
    </div>
  );
}
