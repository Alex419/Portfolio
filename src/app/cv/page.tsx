import Link from "next/link";
import { experience, extracurriculars, education } from "@/lib/site-data";
import { SiteHeader } from "@/components/site-header";
import { SiteBackground } from "@/components/site-background";
import { EntryCard } from "@/components/entry-card";
import { RevealItem } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

type Props = {
  searchParams: Promise<{ tab?: string }>;
};

const TAB_DATA = {
  experience,
  extracurriculars,
  education,
} as const;

const TABS = [
  { key: "experience", label: "experience" },
  { key: "extracurriculars", label: "extra-curriculars" },
  { key: "education", label: "education" },
] as const satisfies { key: keyof typeof TAB_DATA; label: string }[];

export default async function CV(props: Props) {
  const searchParams = await props.searchParams;
  const requestedTab = searchParams?.tab as keyof typeof TAB_DATA | undefined;
  const activeTab = requestedTab && requestedTab in TAB_DATA ? requestedTab : "experience";
  const entries = TAB_DATA[activeTab];

  return (
    <div className="min-h-screen bg-black text-zinc-300 font-mono relative overflow-hidden">
      <SiteBackground />

      <SiteHeader />

      <main className="relative z-10 px-8 py-16 max-w-4xl">
        <h1 className="text-3xl text-white mb-8">curriculum vitae</h1>

        <div className="flex gap-6 mb-10 border-b border-zinc-900">
          {TABS.map(({ key, label }) => (
            <Link
              key={key}
              href={`/cv?tab=${key}`}
              className={cn(
                "pb-3 text-sm transition-colors",
                activeTab === key
                  ? "text-white border-b border-white"
                  : "text-zinc-600 hover:text-zinc-400"
              )}
            >
              {label}
            </Link>
          ))}
        </div>

        <div className="space-y-8">
          {entries.map((entry) => (
            <RevealItem key={entry.title} hoverLift>
              <EntryCard title={entry.title} dates={entry.dates} description={entry.description} />
            </RevealItem>
          ))}
        </div>
      </main>
    </div>
  );
}
