import { Phone, Mail, MapPin, Clock, Wine } from 'lucide-react';
import CopyEmailButton from '@/components/CopyEmailButton';
import SocialLinks from '@/components/SocialLinks';

const PHONE_DISPLAY = '(02) 4441 2259';
const PHONE_HREF = 'tel:+61244412259';
const EMAIL = 'sussexgolf@shoalhaven.net.au';
const ADDRESS = '7 Golfcourse Way, Sussex Inlet NSW 2540';
const MAPS_URL = 'https://www.google.com/maps/search/?api=1&query=Sussex+Inlet+Golf+Club';
const MAP_EMBED_SRC =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3248.3!2d150.5776!3d-35.1761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b1383e09dddb44b%3A0xd4ab937f08ed52d0!2sSussex%20Inlet%20Golf%20Club!5e0!3m2!1sen!2sau!4v1700000000000';

const primaryOnLight =
  'inline-flex h-11 shrink-0 cursor-pointer items-center justify-center gap-2 whitespace-nowrap px-6 text-sm font-semibold transition-colors duration-200 active:translate-y-px focus-visible:outline-2 focus-visible:outline-offset-2 bg-navy-950 text-sand-50 hover:bg-navy-800 focus-visible:outline-navy-700';

const tertiaryOnLight =
  'inline-flex min-h-11 cursor-pointer items-center gap-1.5 text-sm font-medium text-navy-900 underline decoration-gold-500 decoration-1 underline-offset-[6px] transition-colors hover:text-navy-950 hover:decoration-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-700';

const phoneLink = tertiaryOnLight.replace('text-sm', 'font-display text-2xl tabular-nums');
const emailLink = `${tertiaryOnLight} break-all`;

const cell = 'border-t border-navy-950 pt-4';
const label = 'flex items-center gap-2 text-sm font-medium text-navy-700';
const icon = 'shrink-0 text-navy-700';

// Server-rendered body of the /contact page: facts grid, map band, licence note.
export default function Contact() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <dl className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className={cell}>
            <dt className={label}>
              <Phone size={20} strokeWidth={1.5} aria-hidden="true" className={icon} />
              Phone
            </dt>
            <dd className="mt-1">
              <a href={PHONE_HREF} className={phoneLink}>
                {PHONE_DISPLAY}
              </a>
            </dd>
          </div>

          <div className={cell}>
            <dt className={label}>
              <Mail size={20} strokeWidth={1.5} aria-hidden="true" className={icon} />
              Email
            </dt>
            <dd className="mt-1 flex flex-col items-start">
              <a href={`mailto:${EMAIL}`} className={emailLink}>
                {EMAIL}
              </a>
              <CopyEmailButton email={EMAIL} />
            </dd>
          </div>

          <div className={cell}>
            <dt className={label}>
              <MapPin size={20} strokeWidth={1.5} aria-hidden="true" className={icon} />
              Address
            </dt>
            <dd className="mt-1">
              <p className="leading-relaxed text-navy-950">{ADDRESS}</p>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${tertiaryOnLight} mt-1`}
              >
                Open in Google Maps
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </dd>
          </div>

          <div className={cell}>
            <dt className={label}>
              <Clock size={20} strokeWidth={1.5} aria-hidden="true" className={icon} />
              Hours
            </dt>
            <dd className="mt-1 leading-relaxed text-navy-900/75">
              Course and clubhouse open seven days. Sunday is competition day, with member groups
              midweek. Call ahead to check course availability.
            </dd>
          </div>
        </dl>

        <div className="mt-12">
          <a href={PHONE_HREF} className={primaryOnLight}>
            Book a round
          </a>
        </div>
      </div>

      <div className="mt-16 border-y border-navy-950/15">
        <iframe
          src={MAP_EMBED_SRC}
          className="block h-[420px] w-full"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Sussex Inlet Golf Club location"
        />
      </div>

      <div className="mx-auto mt-12 flex max-w-6xl flex-col gap-8 px-6 md:flex-row md:items-start md:justify-between">
        <div className="flex items-start gap-4">
          <Wine size={20} strokeWidth={1.5} aria-hidden="true" className="mt-0.5 shrink-0 text-navy-700" />
          <div>
            <p className="text-sm font-medium text-navy-700">Licensed premises</p>
            <p className="mt-1 max-w-[62ch] text-sm leading-relaxed text-navy-900/70">
              Sussex Inlet Golf Club holds a liquor licence. All alcohol consumed on the course must
              be purchased from the pro shop, and no alcohol may be taken off the premises.
            </p>
          </div>
        </div>
        <SocialLinks variant="dark" className="-ml-3 md:ml-0" />
      </div>
    </section>
  );
}
