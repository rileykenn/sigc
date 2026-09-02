import Image from 'next/image';
import { ArrowRight, BedDouble, Briefcase, PartyPopper, Trophy } from 'lucide-react';

const eventTypes = [
  {
    icon: Trophy,
    title: 'Social golf',
    description:
      'A relaxed nine with your mates, no experience needed. Social clubs and groups welcome.',
  },
  {
    icon: PartyPopper,
    title: 'Birthday parties',
    description: 'A round of golf, then drinks in the clubhouse.',
  },
  {
    icon: Briefcase,
    title: 'Corporate days',
    description: 'A day out for your team or clients, with catering available.',
  },
  {
    icon: BedDouble,
    title: 'Stay and play',
    description: 'Arrange accommodation at Laguna Lodge and a round of golf in one group booking.',
  },
];

// Page body for /group-bookings: offset two-photo collage beside an icon-led ruled list.
export default function SocialEvents() {
  return (
    <section id="venue-hire" className="bg-sand-50 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-start gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <div className="relative aspect-[3/4] overflow-hidden border border-navy-950/10">
                <Image
                  src="/images/venuehire.webp"
                  alt="Tables set for a function at the Sussex Inlet Golf Club clubhouse"
                  fill
                  sizes="(max-width: 1024px) 50vw, 30vw"
                  className="object-cover"
                />
              </div>
              <div className="relative mt-10 aspect-[3/4] overflow-hidden border border-navy-950/10 sm:mt-16">
                <Image
                  src="/images/freindlystaffinteraction.webp"
                  alt="Club staff chatting with visitors across the clubhouse counter"
                  fill
                  sizes="(max-width: 1024px) 50vw, 30vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <h2 className="mt-0 font-display text-2xl font-semibold text-navy-950">What we can host</h2>
            <ul className="mt-6 border-t border-navy-950/15">
              {eventTypes.map((event) => {
                const Icon = event.icon;
                return (
                  <li key={event.title} className="flex gap-4 border-b border-navy-950/10 py-5">
                    <Icon
                      size={20}
                      strokeWidth={1.5}
                      className="mt-0.5 shrink-0 text-navy-700"
                      aria-hidden="true"
                    />
                    <div>
                      <h3 className="font-medium text-navy-950">{event.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-navy-900/75">
                        {event.description}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
              <a
                href="tel:+61244412259"
                className="inline-flex h-11 shrink-0 cursor-pointer items-center justify-center gap-2 whitespace-nowrap bg-navy-950 px-6 text-sm font-semibold text-sand-50 transition-colors duration-200 hover:bg-navy-800 active:translate-y-px focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-700"
              >
                Book a round
              </a>
              <a
                href="mailto:sussexgolf@shoalhaven.net.au"
                className="inline-flex min-h-11 cursor-pointer items-center gap-1.5 text-sm font-medium text-navy-900 underline decoration-gold-500 decoration-1 underline-offset-[6px] transition-colors hover:text-navy-950 hover:decoration-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-700"
              >
                Email the club
                <ArrowRight size={16} strokeWidth={1.5} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
