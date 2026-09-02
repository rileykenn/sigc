import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import Gallery, { type GalleryImage } from '@/components/Gallery';

export const metadata: Metadata = {
  title: 'Gallery | Sussex Inlet Golf Club',
  description:
    'Photographs of the Sussex Inlet Golf Club course, clubhouse, pro shop and the kangaroos that graze beside the fairways.',
};

const onTheCourse: GalleryImage[] = [
  {
    src: '/images/drone/DJI_0112.webp',
    alt: 'The clubhouse and practice green from above at golden hour',
    aspect: 'aspect-[4/5]',
  },
  {
    src: '/images/golfplaying.webp',
    alt: 'A golfer mid swing on the course',
    aspect: 'aspect-[4/3]',
  },
  {
    src: '/images/morewildlife.webp',
    alt: 'Kangaroos grazing beside the fairway',
    aspect: 'aspect-square',
  },
  {
    src: '/images/peopleplayinggolf.webp',
    alt: 'Two players on the green, one lining up a putt toward the flag',
    aspect: 'aspect-[3/4]',
  },
  {
    src: '/images/drone/DJI_0127.webp',
    alt: 'The course and surrounding bushland from above',
    aspect: 'aspect-[16/10]',
  },
  {
    src: '/images/golfcourse.webp',
    alt: 'Players putting on a green framed by bushland at Sussex Inlet Golf Club',
    aspect: 'aspect-[3/4]',
  },
  {
    src: '/images/wildlife.webp',
    alt: 'Kangaroos grazing beside the course',
    aspect: 'aspect-[4/5]',
  },
  {
    src: '/images/maybe-hero.webp',
    alt: 'A quiet green in early morning light',
    aspect: 'aspect-[16/10]',
  },
];

const aroundTheClub: GalleryImage[] = [
  {
    src: '/images/clubhouse.webp',
    alt: 'Inside the Sussex Inlet Golf Club clubhouse',
    aspect: 'aspect-[4/3]',
    caption: 'Clubhouse. Cold drinks, air conditioning and a spot to settle in after the round.',
  },
  {
    src: '/images/clubhouse2.webp',
    alt: 'Honour boards, trophies and framed portraits in the clubhouse meeting room',
    aspect: 'aspect-[16/10]',
    caption: 'Honour boards, trophies and framed portraits in the clubhouse meeting room.',
  },
  {
    src: '/images/goodshopphoto.webp',
    alt: 'Merchandise and equipment in the pro shop',
    aspect: 'aspect-[4/5]',
    caption: 'Pro shop. Snacks and drinks, plus a good range of club clothing and merchandise.',
  },
  {
    src: '/images/golfshop.webp',
    alt: 'A golfer and a staff member sharing a laugh over a scorecard at the pro shop counter',
    aspect: 'aspect-[4/3]',
    caption: 'A golfer and a staff member sharing a laugh over a scorecard at the pro shop counter.',
  },
  {
    src: '/images/golfshop2.webp',
    alt: 'Golf balls, tees, caps and club merchandise laid out on the pro shop counter',
    aspect: 'aspect-[16/10]',
    caption: 'Golf balls, tees, caps and club merchandise laid out on the pro shop counter.',
  },
  {
    src: '/images/practice-nets.webp',
    alt: 'Practice nets beside the course',
    aspect: 'aspect-[3/4]',
    caption: 'Practice nets. Loosen up before the first tee.',
  },
  {
    src: '/images/goodcarthire.webp',
    alt: 'Hire carts lined up at Sussex Inlet Golf Club',
    aspect: 'aspect-[4/3]',
    caption: "Cart and club hire. Carts, buggies and club sets for hire, so there's no need to bring your own.",
  },
  {
    src: '/images/venuehire.webp',
    alt: 'Outdoor tables under the clubhouse verandah, looking out to the practice green',
    aspect: 'aspect-[4/5]',
    caption: 'Outdoor tables under the clubhouse verandah, looking out to the practice green.',
  },
  {
    src: '/images/freindlystaffinteraction.webp',
    alt: 'A staff member handing a scorecard to a visitor across the pro shop counter',
    aspect: 'aspect-[16/10]',
    caption: 'A staff member handing a scorecard to a visitor across the pro shop counter.',
  },
];

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        title="Gallery"
        intro="The course, the clubhouse and the locals who wander through."
      />
      <Gallery title="Out on the course" images={onTheCourse} eagerCount={3} />
      <Gallery
        title="Around the club"
        images={aroundTheClub}
        band="sand"
        closingLine="BBQ and outdoor seating under the trees, with room for groups."
      />
    </>
  );
}
