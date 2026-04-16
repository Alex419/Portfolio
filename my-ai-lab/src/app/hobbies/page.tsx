import Link from "next/link";
import { hobbies } from "@/lib/site-data";

export default function Hobbies() {
  return (
    <div className="min-h-screen bg-black text-zinc-300 font-mono relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />
      
      <header className="relative z-10 flex justify-between items-center p-8">
        <Link href="/" className="text-white text-lg tracking-tight hover:text-zinc-200 transition-colors">
          alexgu/<span className="text-blue-400">hobbies</span>
        </Link>
        <nav className="flex gap-8 text-sm">
          <Link href="/projects" className="hover:text-white transition-colors">projects</Link>
          <Link href="/cv" className="hover:text-white transition-colors">cv</Link>
          <Link href="/hobbies" className="text-white">hobbies</Link>
        </nav>
      </header>

      <main className="relative z-10 px-8 py-16 max-w-4xl">
        <h1 className="text-3xl text-white mb-12">hobbies & interests</h1>
        
        <div className="grid gap-8 md:grid-cols-2">
          {hobbies.map((hobby, i) => (
            <div key={i} className="border border-zinc-900 p-6 hover:border-zinc-800 transition-colors group">
              <h2 className="text-xl text-white mb-3 group-hover:text-zinc-200 transition-colors">{hobby.title}</h2>
              <p className="text-zinc-500 text-sm">{hobby.description}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}