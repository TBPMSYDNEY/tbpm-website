/**
 * Stat — a headline figure with its label. Rendered on the server with its
 * final value so crawlers, text extraction and visitors all see accurate
 * numbers before any JavaScript runs or the section is scrolled into view.
 */
export default function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">{value}</div>
      <div className="mt-2 text-sm font-medium text-ink-mute">{label}</div>
    </div>
  );
}
