import { hobbies } from "@/lib/site-data";
import { SiteHeader } from "@/components/site-header";
import { SiteBackground } from "@/components/site-background";
import { EntryCard } from "@/components/entry-card";

export default function Hobbies() {
  return (
    <div className="min-h-screen bg-black text-zinc-300 font-mono relative overflow-hidden">
      <SiteBackground />

      <SiteHeader />

      <main className="relative z-10 px-8 py-16 max-w-4xl">
        <h1 className="text-3xl text-white mb-12">hobbies & interests</h1>

        <div className="grid gap-8 md:grid-cols-2">
          {hobbies.map((hobby) => (
            <EntryCard key={hobby.title} title={hobby.title} description={hobby.description} />
          ))}
        </div>
      </main>
    </div>
  );
}
