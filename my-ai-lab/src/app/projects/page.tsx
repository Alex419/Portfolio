import Link from "next/link";

const projects = [
  {
    title: "Neural Architecture Search",
    description: "Automated discovery of efficient model architectures using reinforcement learning.",
    tags: ["ML", "AutoML", "PyTorch"],
    year: "2025",
  },
  {
    title: "Distributed Training Pipeline",
    description: "Scalable training infrastructure for large language models across 100+ GPUs.",
    tags: ["Infrastructure", "Kubernetes", "Python"],
    year: "2024",
  },
  {
    title: "Edge Inference Engine",
    description: "Optimized runtime for running LLMs on consumer hardware with minimal latency.",
    tags: ["Edge Computing", "ONNX", "C++"],
    year: "2024",
  },
  {
    title: "AI Agent Framework",
    description: "Framework for building autonomous agents with memory and tool-use capabilities.",
    tags: ["Agents", "LangChain", "Python"],
    year: "2023",
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-black text-zinc-300 font-mono relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />
      
      <header className="relative z-10 flex justify-between items-center p-8">
        <Link href="/" className="text-white text-lg tracking-tight hover:text-zinc-200 transition-colors">
          alexgu<span className="text-zinc-600">/</span>research
        </Link>
        <nav className="flex gap-8 text-sm">
          <Link href="/projects" className="text-white">projects</Link>
          <Link href="/cv" className="hover:text-white transition-colors">cv</Link>
        </nav>
      </header>

      <main className="relative z-10 px-8 py-16 max-w-4xl">
        <h1 className="text-3xl text-white mb-12">selected projects</h1>
        
        <div className="space-y-8">
          {projects.map((project, i) => (
            <div key={i} className="border border-zinc-900 p-6 hover:border-zinc-800 transition-colors group">
              <div className="flex justify-between items-start mb-3">
                <h2 className="text-xl text-white group-hover:text-zinc-200 transition-colors">{project.title}</h2>
                <span className="text-zinc-600 text-sm">{project.year}</span>
              </div>
              <p className="text-zinc-500 text-sm mb-4 max-w-lg">{project.description}</p>
              <div className="flex gap-3">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs px-2 py-1 bg-zinc-900 text-zinc-500">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}