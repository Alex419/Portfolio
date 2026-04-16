"use client";

import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("ag5174@columbia.edu");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-black text-zinc-300 font-mono relative overflow-hidden">
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />
      
      {/* Radial gradient for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.5)_100%)] pointer-events-none" />

      <header className="relative z-10 flex justify-between items-center p-8">
        <Link href="/" className="text-white text-lg tracking-tight hover:text-zinc-200 transition-colors">
          alexgu/<span className="text-blue-400">home</span>
        </Link>
        <nav className="flex gap-8 text-sm">
          <Link href="/projects" className="hover:text-white transition-colors">projects</Link>
          <Link href="/cv" className="hover:text-white transition-colors">cv</Link>
          <Link href="/hobbies" className="hover:text-white transition-colors">hobbies</Link>
        </nav>
      </header>

      <main className="relative z-10 flex flex-col justify-center flex-1 px-8 max-w-4xl">
        <p className="text-zinc-500 text-sm mb-4 tracking-wider">researcher · engineer · builder</p>
        <h1 className="text-4xl md:text-5xl text-white font-normal leading-tight mb-6">
          Building for <span className="text-blue-400">us</span>
        </h1>
        <p className="text-zinc-500 max-w-lg text-sm leading-relaxed">
          Hey! I'm Alex, I want to create tools that make life better.
          <br></br>
          <br></br>
          Columbia ML Master's 2026
          <br></br>
          Tufts CS 2025
        </p>

        <div className="flex gap-4 mt-12">
          <Link 
            href="/projects" 
            className="px-6 py-3 bg-zinc-100 text-black text-sm hover:bg-zinc-200 transition-colors"
          >
            view work
          </Link>
          <Link 
            href="/cv" 
            className="px-6 py-3 border border-zinc-800 text-zinc-400 text-sm hover:border-zinc-600 hover:text-white transition-colors"
          >
            about me
          </Link>
        </div>
      </main>

      <footer className="relative z-10 p-8 text-xs text-zinc-600 flex justify-between items-end">
        <span>© 2026</span>
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