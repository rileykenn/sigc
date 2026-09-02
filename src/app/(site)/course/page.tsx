import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import HoleAccordion from '@/components/course/HoleAccordion';
import { holes, courseInfo, courseRules } from '@/data/courseData';

export const metadata: Metadata = {
  title: 'The course | Sussex Inlet Golf Club',
  description:
    'Nine holes through native bushland on the NSW South Coast. Scorecard, hole-by-hole guide and local knowledge for Sussex Inlet Golf Club.',
};

const primaryOnLight =
  'inline-flex h-11 shrink-0 cursor-pointer items-center justify-center gap-2 whitespace-nowrap px-6 text-sm font-semibold transition-colors duration-200 active:translate-y-px focus-visible:outline-2 focus-visible:outline-offset-2 bg-navy-950 text-sand-50 hover:bg-navy-800 focus-visible:outline-navy-700';

export default function CoursePage() {
  // courseInfo.yearEstablished is never rendered publicly; confirm with Tracy.
  const totalPar = holes.reduce((sum, h) => sum + h.par, 0);
  const totalMetresMen = holes.reduce((sum, h) => sum + h.metresMen, 0);
  const stats = [
    { label: 'Holes', value: String(courseInfo.holes) },
    { label: 'Par (18 holes)', value: String(courseInfo.totalPar) },
    { label: 'Rating', value: String(courseInfo.rating) },
    { label: 'Slope', value: String(courseInfo.slopeRating) },
    { label: 'Metres, 18 holes (men)', value: courseInfo.totalMetresMen.toLocaleString() },
  ];

  return (
    <>
      <PageHeader
        title="The course"
        intro="Nine holes through native bushland on the NSW South Coast. Here is the scorecard, a hole-by-hole guide and the local knowledge that saves a shot or two."
      />

      {/* Map link and aerial */}
      <section className="bg-white pb-16 sm:pb-24">
        <div className="mx-auto max-w-6xl px-6 pt-10">
          <Link href="/map" className={primaryOnLight}>
            3D course map
          </Link>
          <div className="relative mt-8 aspect-[16/10] overflow-hidden border border-navy-950/10">
            <Image
              src="/images/drone/DJI_0120.webp"
              alt="Aerial view of Sussex Inlet Golf Club fairways winding through bushland"
              fill
              sizes="(max-width: 1152px) 100vw, 1104px"
              className="object-cover"
              preload={true}
            />
          </div>
        </div>
      </section>

      {/* Stats row */}
      <section className="border-y border-navy-950/15 bg-white py-10">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-5">
            {stats.map((s) => (
              <div key={s.label} className="border-l border-navy-950/15 pl-4">
                <div className="font-display text-3xl font-semibold tabular-nums text-navy-950 sm:text-4xl">
                  {s.value}
                </div>
                <div className="mt-1 text-sm text-navy-900/70">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scorecard */}
      <section id="scorecard" className="bg-sand-50 py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-navy-950 [text-wrap:balance] sm:text-4xl">
            Scorecard
          </h2>
          <p className="mt-3 leading-relaxed text-navy-900/75">White tees, measured in metres.</p>
          <div className="mt-8 overflow-x-auto border border-navy-950/15 bg-white">
            <table className="w-full min-w-[640px] text-sm tabular-nums">
              <thead>
                <tr className="border-b border-navy-950/60">
                  <th scope="col" className="px-4 py-3.5 text-left font-medium text-navy-900/70">
                    Hole
                  </th>
                  {holes.map((h) => (
                    <th key={h.number} scope="col" className="px-3 py-3.5 text-center font-semibold text-navy-950">
                      {h.number}
                    </th>
                  ))}
                  <th scope="col" className="px-4 py-3.5 text-center font-semibold text-navy-950">
                    Total
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-navy-950/10">
                  <th scope="row" className="px-4 py-3 text-left font-normal text-navy-900/70">
                    Par
                  </th>
                  {holes.map((h) => (
                    <td key={h.number} className="px-3 py-3 text-center font-semibold text-navy-950">
                      {h.par}
                    </td>
                  ))}
                  <td className="bg-sand-100 px-4 py-3 text-center font-semibold text-navy-950">
                    {totalPar}
                  </td>
                </tr>
                <tr className="border-b border-navy-950/10">
                  <th scope="row" className="px-4 py-3 text-left font-normal text-navy-900/70">
                    Index
                  </th>
                  {holes.map((h) => (
                    <td key={h.number} className="px-3 py-3 text-center text-navy-900/70">
                      {h.strokeIndex}
                    </td>
                  ))}
                  <td className="bg-sand-100 px-4 py-3" />
                </tr>
                <tr>
                  <th scope="row" className="px-4 py-3 text-left font-normal text-navy-900/70">
                    Men (m)
                  </th>
                  {holes.map((h) => (
                    <td key={h.number} className="px-3 py-3 text-center text-navy-900/70">
                      {h.metresMen}
                    </td>
                  ))}
                  <td className="bg-sand-100 px-4 py-3 text-center font-semibold text-navy-950">
                    {totalMetresMen.toLocaleString()}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Hole by hole */}
      <section id="holes" className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-navy-950 [text-wrap:balance] sm:text-4xl">
            Hole by hole
          </h2>
          <div className="mt-10">
            <HoleAccordion holes={holes} />
          </div>
        </div>
      </section>

      {/* Etiquette */}
      <section id="etiquette" className="bg-sand-50 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-navy-950 [text-wrap:balance] sm:text-4xl">
            Course etiquette
          </h2>
          <p className="mt-3 max-w-[62ch] leading-relaxed text-navy-900/75">
            A few local rules that keep the course in good shape and the neighbours on side.
          </p>
          <ul className="mt-8 border-t border-navy-950/15">
            {courseRules.map((rule, i) => (
              <li
                key={i}
                className="flex items-start gap-4 border-b border-navy-950/10 py-3.5 leading-relaxed text-navy-900/75"
              >
                <span className="w-6 shrink-0 pt-1 text-right text-sm tabular-nums text-navy-900/50">{i + 1}</span>
                {rule}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
