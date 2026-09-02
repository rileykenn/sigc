import Image from 'next/image';

export type GalleryImage = {
  src: string;
  alt: string;
  /** Fixed aspect class, e.g. 'aspect-[4/3]'. Keeps the masonry stable while images load. */
  aspect: string;
  /** Optional caption rendered below the frame. */
  caption?: string;
};

type GalleryProps = {
  title: string;
  images: GalleryImage[];
  /** How many images at the start of the list load eagerly (the rest are lazy). */
  eagerCount?: number;
  /** Paper band colour. Interior pages alternate white and sand-50. */
  band?: 'white' | 'sand';
  /** Optional closing sentence under the group. */
  closingLine?: string;
};

// One titled group of framed photographs in masonry columns. Server component:
// no motion, no lightbox, no hover zoom.
export default function Gallery({
  title,
  images,
  eagerCount = 0,
  band = 'white',
  closingLine,
}: GalleryProps) {
  return (
    <section className={`${band === 'sand' ? 'bg-sand-50' : 'bg-white'} py-16 sm:py-24`}>
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-navy-950 [text-wrap:balance] sm:text-4xl">
          {title}
        </h2>

        <div className="mt-10 columns-1 gap-6 sm:columns-2 lg:columns-3">
          {images.map((img, i) => (
            <figure key={img.src} className="mb-6 break-inside-avoid">
              <div className={`relative overflow-hidden border border-navy-950/10 ${img.aspect}`}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading={i < eagerCount ? 'eager' : 'lazy'}
                  className="object-cover"
                />
              </div>
              {img.caption && (
                <figcaption className="mt-2 text-sm text-navy-900/70">{img.caption}</figcaption>
              )}
            </figure>
          ))}
        </div>

        {closingLine && (
          <p className="mt-4 max-w-[62ch] leading-relaxed text-navy-900/75">{closingLine}</p>
        )}
      </div>
    </section>
  );
}
