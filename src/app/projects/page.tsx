import { projects } from "@/lib/site-data";
import { SiteHeader } from "@/components/site-header";
import { SiteBackground } from "@/components/site-background";
import { EntryCard } from "@/components/entry-card";
import { RevealItem } from "@/components/motion/reveal";

export default function Projects() {
  return (
    <div className="min-h-screen bg-black text-zinc-300 font-mono relative overflow-hidden">
      <SiteBackground />

      <SiteHeader />

      <main className="relative z-10 px-8 py-16 max-w-4xl">
        <h1 className="text-3xl text-white mb-12">personal projects</h1>

        <div className="space-y-8">
          {projects.map((project) => (
            <RevealItem key={project.title} hoverLift>
              <EntryCard
                title={project.title}
                dates={project.dates}
                description={project.description}
              />
            </RevealItem>
          ))}
        </div>
      </main>
    </div>
  );
}
