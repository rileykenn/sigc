import type { Metadata } from 'next';
import Image from 'next/image';
import { Heart, Mail, Megaphone, Phone, Users } from 'lucide-react';
import PageHeader from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'Sponsorship | Sussex Inlet Golf Club',
  description:
    'Support a community golf club and put your business in front of members and visitors every week of the year.',
};

const reasons = [
  { icon: Users, text: 'Reach hundreds of members and visitors each week' },
  { icon: Heart, text: 'Back a volunteer-run community club' },
  { icon: Megaphone, text: 'Signage and recognition around the course' },
];

export default function SponsorshipPage() {
  return (
    <>
      <PageHeader
        title="Sponsor the club"
        intro="Support a community golf club and put your business in front of members and visitors every week of the year."
      />

      {/* Where your support goes */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-navy-950 [text-wrap:balance] sm:text-4xl">
                Where your support goes
              </h2>
              <p className="mt-5 max-w-[62ch] leading-relaxed text-navy-900/75">
                Sussex Inlet Golf Club is a not-for-profit community club, run by a volunteer board for members and
                visitors across the Shoalhaven. Sponsorship goes straight into maintaining and improving the bushland
                course.
              </p>
              <ul className="mt-8 border-t border-navy-950/15">
                {reasons.map((item) => {
                  const Icon = item.icon;
                  return (
                    <li key={item.text} className="flex items-start gap-3 border-b border-navy-950/10 py-4">
                      <Icon size={20} strokeWidth={1.5} aria-hidden="true" className="mt-0.5 shrink-0 text-navy-700" />
                      <span className="leading-relaxed text-navy-900/75">{item.text}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="relative aspect-[16/10] overflow-hidden border border-navy-950/10">
              <Image
                src="/images/sponsership.webp"
                alt="Sponsor boards beside a fairway at Sussex Inlet Golf Club"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                loading="eager"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Current sponsors */}
      <section className="bg-sand-50 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-navy-950 [text-wrap:balance] sm:text-4xl">
            Thanks to our sponsors
          </h2>
          <p className="mt-5 max-w-[62ch] leading-relaxed text-navy-900/75">
            Generous local businesses help keep the club running. Their boards line the course.
          </p>
          <div className="relative mt-10 aspect-[16/10] overflow-hidden border border-navy-950/10">
            <Image
              src="/images/sponsershipsigns2.webp"
              alt="Sponsor signs lining the course at Sussex Inlet Golf Club"
              fill
              sizes="(min-width: 1152px) 1104px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Become a sponsor */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-[62ch]">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-navy-950 [text-wrap:balance] sm:text-4xl">
              Become a sponsor
            </h2>
            <p className="mt-5 leading-relaxed text-navy-900/75">
              Call or email the club to talk through sponsorship packages and what would suit your business.
            </p>
            <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-8">
              <a
                href="mailto:sussexgolf@shoalhaven.net.au"
                className="inline-flex h-11 shrink-0 cursor-pointer items-center justify-center gap-2 whitespace-nowrap bg-navy-950 px-6 text-sm font-semibold text-sand-50 transition-colors duration-200 hover:bg-navy-800 active:translate-y-px focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-700"
              >
                <Mail size={16} strokeWidth={1.5} aria-hidden="true" />
                Email the club
              </a>
              <a
                href="tel:+61244412259"
                className="inline-flex min-h-11 cursor-pointer items-center gap-1.5 text-sm font-medium text-navy-900 underline decoration-gold-500 decoration-1 underline-offset-[6px] transition-colors hover:text-navy-950 hover:decoration-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-700"
              >
                <Phone size={16} strokeWidth={1.5} aria-hidden="true" />
                (02) 4441 2259
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
