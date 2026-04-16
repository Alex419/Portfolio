import Link from "next/link";
import { experience, extracurriculars, education } from "@/lib/site-data";

type Props = {
  searchParams: Promise<{ tab?: string }>;
};

export default async function CV(props: Props) {
  const searchParams = await props.searchParams;
  const activeTab = searchParams?.tab || "experience";

  return (
    <div className="min-h-screen bg-black text-zinc-300 font-mono relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />
      
      <header className="relative z-10 flex justify-between items-center p-8">
        <Link href="/" className="text-white text-lg tracking-tight hover:text-zinc-200 transition-colors">
          alexgu/<span className="text-blue-400">resume</span>
        </Link>
        <nav className="flex gap-8 text-sm">
          <Link href="/projects" className="hover:text-white transition-colors">projects</Link>
          <Link href="/cv" className="text-white">cv</Link>
          <Link href="/hobbies" className="hover:text-white transition-colors">hobbies</Link>
        </nav>
      </header>

      <main className="relative z-10 px-8 py-16 max-w-3xl">
        <h1 className="text-3xl text-white mb-8">curriculum vitae</h1>

        <div className="flex gap-6 mb-10 border-b border-zinc-900">
          <Link
            href="/cv?tab=experience"
            className={`pb-3 text-sm transition-colors ${
              activeTab === "experience" 
                ? "text-white border-b border-white" 
                : "text-zinc-600 hover:text-zinc-400"
            }`}
          >
            experience
          </Link>
          <Link
            href="/cv?tab=extracurriculars"
            className={`pb-3 text-sm transition-colors ${
              activeTab === "extracurriculars" 
                ? "text-white border-b border-white" 
                : "text-zinc-600 hover:text-zinc-400"
            }`}
          >
            extra-curriculars
          </Link>
          <Link
            href="/cv?tab=education"
            className={`pb-3 text-sm transition-colors ${
              activeTab === "education" 
                ? "text-white border-b border-white" 
                : "text-zinc-600 hover:text-zinc-400"
            }`}
          >
            education
          </Link>
        </div>

        {activeTab === "experience" && (
          <div className="space-y-8">
            {experience.map((exp, i) => (
              <div key={i} className="border border-zinc-900 p-6 hover:border-zinc-800 transition-colors">
                <div className="flex justify-between items-center mb-3">
                  <h2 className="text-xl text-white">{exp.title}</h2>
                  <span className="text-zinc-600 text-sm">{exp.dates}</span>
                </div>
                <p className="text-zinc-500 text-sm">{exp.description}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "extracurriculars" && (
          <div className="space-y-8">
            {extracurriculars.map((exp, i) => (
              <div key={i} className="border border-zinc-900 p-6 hover:border-zinc-800 transition-colors">
                <div className="flex justify-between items-center mb-3">
                  <h2 className="text-xl text-white">{exp.title}</h2>
                  <span className="text-zinc-600 text-sm">{exp.dates}</span>
                </div>
                <p className="text-zinc-500 text-sm">{exp.description}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "education" && (
          <div className="space-y-8">
            {education.map((edu, i) => (
              <div key={i} className="border border-zinc-900 p-6 hover:border-zinc-800 transition-colors">
                <div className="flex justify-between items-center mb-3">
                  <h2 className="text-xl text-white">{edu.title}</h2>
                  <span className="text-zinc-600 text-sm">{edu.dates}</span>
                </div>
                <p className="text-zinc-500 text-sm">{edu.description}</p>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}