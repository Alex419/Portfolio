import Link from "next/link";

export default function CV() {
  return (
    <div className="min-h-screen bg-black text-zinc-300 font-mono relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />
      
      <header className="relative z-10 flex justify-between items-center p-8">
        <Link href="/" className="text-white text-lg tracking-tight hover:text-zinc-200 transition-colors">
          alexgu<span className="text-zinc-600">/</span>research
        </Link>
        <nav className="flex gap-8 text-sm">
          <Link href="/projects" className="hover:text-white transition-colors">projects</Link>
          <Link href="/cv" className="text-white">cv</Link>
        </nav>
      </header>

      <main className="relative z-10 px-8 py-16 max-w-3xl">
        <h1 className="text-3xl text-white mb-8">curriculum vitae</h1>

        <section className="mb-12">
          <h2 className="text-lg text-white mb-4">experience</h2>
          <div className="space-y-8">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-white">Senior ML Engineer</span>
                <span className="text-zinc-600 text-sm">2023 – present</span>
              </div>
              <p className="text-zinc-500 text-sm">AI Research Lab · San Francisco</p>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-white">Machine Learning Engineer</span>
                <span className="text-zinc-600 text-sm">2021 – 2023</span>
              </div>
              <p className="text-zinc-500 text-sm">Tech Corp · Seattle</p>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-white">Research Intern</span>
                <span className="text-zinc-600 text-sm">2020 – 2020</span>
              </div>
              <p className="text-zinc-500 text-sm">DeepMind · London</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-lg text-white mb-4">education</h2>
          <div className="space-y-8">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-white">M.S. Computer Science</span>
                <span className="text-zinc-600 text-sm">2021</span>
              </div>
              <p className="text-zinc-500 text-sm">Stanford University</p>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-white">B.S. Computer Science</span>
                <span className="text-zinc-600 text-sm">2019</span>
              </div>
              <p className="text-zinc-500 text-sm">UC Berkeley</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-lg text-white mb-4">skills</h2>
          <div className="flex flex-wrap gap-3">
            {["Python", "PyTorch", "TensorFlow", "LangChain", "Kubernetes", "Docker", "AWS", "GCP", "CUDA", "C++", "Rust", "SQL"].map((skill) => (
              <span key={skill} className="text-xs px-3 py-1 bg-zinc-900 text-zinc-400">{skill}</span>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}