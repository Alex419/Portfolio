import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type EntryCardProps = {
  title: string;
  dates?: string;
  description: string;
};

export function EntryCard({ title, dates, description }: EntryCardProps) {
  return (
    <Card className="gap-3 rounded-none border border-zinc-900 bg-transparent py-6 shadow-none ring-0 transition-colors hover:border-zinc-800">
      <CardHeader className="flex-row items-center justify-between gap-4 px-6">
        <CardTitle className="text-xl font-mono font-normal text-white">{title}</CardTitle>
        {dates && <span className="shrink-0 text-sm text-zinc-600">{dates}</span>}
      </CardHeader>
      <CardContent className="px-6">
        <p className="text-sm text-zinc-500">{description}</p>
      </CardContent>
    </Card>
  );
}
