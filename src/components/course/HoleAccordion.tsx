'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { HoleData } from '@/data/courseData';

function HoleRow({ hole }: { hole: HoleData }) {
  const [open, setOpen] = useState(false);
  const panelId = `hole-${hole.number}-details`;

  return (
    <div className="border-b border-navy-950/10">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={panelId}
        className="flex min-h-11 w-full cursor-pointer items-center gap-4 py-5 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-700 sm:gap-5"
      >
        <span className="w-10 shrink-0 font-display text-3xl font-semibold tabular-nums text-navy-950">
          {hole.number}
        </span>
        <span className="flex flex-1 flex-wrap items-center gap-x-4 gap-y-1.5">
          <span className="text-sm font-medium tabular-nums text-navy-900">Par {hole.par}</span>
          <span className="text-sm tabular-nums text-navy-900/70">Index {hole.strokeIndex}</span>
          <span className="text-sm tabular-nums text-navy-900/70">{hole.metresMen}m</span>
        </span>
        <ChevronDown
          size={18}
          strokeWidth={1.5}
          aria-hidden="true"
          className={`shrink-0 text-navy-900/70 transition-transform duration-200 motion-reduce:transition-none ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <div id={panelId} hidden={!open} className="pb-6 sm:pl-[3.75rem]">
        <p className="max-w-[62ch] text-sm leading-relaxed text-navy-900/70">{hole.description}</p>
        <div className="mt-4 border-l-2 border-gold-500 pl-4">
          <p className="text-sm font-medium text-navy-900">Local tip</p>
          <p className="mt-1 max-w-[62ch] text-sm leading-relaxed text-navy-900/70">{hole.tip}</p>
        </div>
      </div>
    </div>
  );
}

export default function HoleAccordion({ holes }: { holes: HoleData[] }) {
  return (
    <div className="border-t border-navy-950/15">
      {holes.map((hole) => (
        <HoleRow key={hole.number} hole={hole} />
      ))}
    </div>
  );
}
