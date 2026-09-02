// Letterhead title block used at the top of every interior page.
export default function PageHeader({ title, intro }: { title: string; intro?: string }) {
  return (
    <div className="border-b border-navy-950/15 bg-white">
      <div className="mx-auto max-w-6xl px-6 pb-10 pt-12 sm:pt-16">
        <h1 className="font-display text-4xl font-semibold tracking-tight text-navy-950 [text-wrap:balance] sm:text-5xl">
          {title}
        </h1>
        <div aria-hidden="true" className="mt-5 h-px w-12 bg-gold-500" />
        {intro && <p className="mt-5 max-w-[62ch] leading-relaxed text-navy-900/75">{intro}</p>}
      </div>
    </div>
  );
}
