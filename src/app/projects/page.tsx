import Link from "next/link";
import { projects } from "@/lib/site-data";

export default function Projects() {
  return (
    <div className="min-h-screen bg-black text-zinc-300 font-mono relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />
      
      <header className="relative z-10 flex justify-between items-center p-8">
        <Link href="/" className="text-white text-lg tracking-tight hover:text-zinc-200 transition-colors">
          alexgu/<span className="text-blue-400">projects</span>
        </Link>
        <nav className="flex gap-8 text-sm">
          <Link href="/projects" className="text-white">projects</Link>
          <Link href="/cv" className="hover:text-white transition-colors">cv</Link>
          <Link href="/hobbies" className="hover:text-white transition-colors">hobbies</Link>
        </nav>
      </header>

      <main className="relative z-10 px-8 py-16 max-w-4xl">
        <h1 className="text-3xl text-white mb-12">personal projects</h1>
        
        <div className="space-y-8">
          {projects.map((project, i) => (
            <div key={i} className="border border-zinc-900 p-6 hover:border-zinc-800 transition-colors group">
              <div className="flex justify-between items-center mb-3">
                <h2 className="text-xl text-white group-hover:text-zinc-200 transition-colors">{project.title}</h2>
                <span className="text-zinc-600 text-sm">{project.dates}</span>
              </div>
              <p className="text-zinc-500 text-sm">{project.description}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}