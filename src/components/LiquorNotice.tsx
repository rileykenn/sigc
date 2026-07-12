import { Wine } from 'lucide-react';

export default function LiquorNotice() {
  return (
    <section id="liquor-notice" className="bg-sand-100">
      <div className="mx-auto flex max-w-5xl items-start gap-4 px-6 py-8">
        <Wine size={20} strokeWidth={1.5} className="mt-0.5 shrink-0 text-navy-700" />
        <div>
          <p className="text-sm font-medium text-navy-700">Licensed premises</p>
          <p className="mt-1 text-sm text-navy-900/70 leading-relaxed max-w-[62ch]">
            Sussex Inlet Golf Club holds a liquor license. All alcohol to be consumed on the course
            must be purchased from our Golf Shop. No alcohol is to be taken off the premises.
          </p>
        </div>
      </div>
    </section>
  );
}
