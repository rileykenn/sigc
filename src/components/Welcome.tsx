import Image from 'next/image';
import Link from 'next/link';

const tertiary =
  'inline-flex min-h-11 cursor-pointer items-center gap-1.5 text-sm font-medium text-navy-900 underline decoration-gold-500 decoration-1 underline-offset-[6px] transition-colors hover:text-navy-950 hover:decoration-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-700';

export default function Welcome() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 lg:grid-cols-12 lg:gap-16">
        <div className="relative aspect-[4/3] overflow-hidden border border-navy-950/10 lg:col-span-5 lg:aspect-[4/5]">
          <Image
            src="/images/golfcourse.webp"
            alt="Players putting on a green framed by bushland at Sussex Inlet Golf Club"
            fill
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="object-cover"
          />
        </div>
        <div className="lg:col-span-7">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-navy-950 [text-wrap:balance] sm:text-4xl">
            Welcome to Sussex Inlet Golf Club
          </h2>
          <p className="mt-5 max-w-[62ch] leading-relaxed text-navy-900/75">
            Sussex Inlet Golf Club is where members, locals and visitors enjoy a relaxed, fun round
            of golf, with friendly hospitality on a beautiful but challenging course.
          </p>
          <p className="mt-4 max-w-[62ch] leading-relaxed text-navy-900/75">
            Nine holes through native bushland, played here since 1953. The club is open seven
            days, with clubs and carts for hire if you are travelling light, and a fully licensed
            clubhouse to settle into after the round.
          </p>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
            <Link href="/about" className={tertiary}>
              About the club
            </Link>
            <Link href="/course" className={tertiary}>
              Course guide and scorecard
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
