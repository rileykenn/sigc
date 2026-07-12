export type Review = {
  name: string;
  avatar: string;
  rating: number;
  date: string;
  text: string;
};

// TODO: these look like placeholder reviews, not real Google reviews.
// Replace with genuine review excerpts (with reviewer permission) before launch.
export const averageRating = 4.6;
export const totalReviews = 89;

export const reviews: Review[] = [
  {
    name: 'David M.',
    avatar: 'DM',
    rating: 5,
    date: '3 weeks ago',
    text: 'Absolutely love this little course. The wildlife is incredible. Kangaroos watched us putt on the 5th, the greens are in great condition and the staff are welcoming.',
  },
  {
    name: 'Sandra K.',
    avatar: 'SK',
    rating: 5,
    date: '1 month ago',
    text: 'Perfect for a casual round with mates. The clubhouse is friendly and the green fees are very reasonable. Will definitely be back.',
  },
  {
    name: 'Peter W.',
    avatar: 'PW',
    rating: 4,
    date: '1 month ago',
    text: 'Nice 9-hole course set in beautiful bushland. Good value for money. Course could use a bit of work in places but overall a great experience for the price.',
  },
  {
    name: 'Jenny T.',
    avatar: 'JT',
    rating: 5,
    date: '2 months ago',
    text: 'Brought the grandkids for a round and they had a blast spotting the wallabies. Very family friendly atmosphere. Love the Wednesday comps.',
  },
  {
    name: 'Michael B.',
    avatar: 'MB',
    rating: 4,
    date: '2 months ago',
    text: 'Played here while on holiday at the inlet. Great little course with a few tricky holes. Cart hire is good value.',
  },
  {
    name: 'Helen R.',
    avatar: 'HR',
    rating: 5,
    date: '3 months ago',
    text: 'We joined the Chook Run competition as visitors and had the best time. Everyone was so friendly and made us feel right at home. Beautiful natural setting.',
  },
];
