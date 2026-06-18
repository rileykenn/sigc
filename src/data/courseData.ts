export type HoleData = {
  number: number;
  par: number;
  strokeIndex: number;
  metresMen: number;
  metresWomen: number;
  description: string;
  tip: string;
};

export const courseInfo = {
  name: 'Sussex Inlet Golf Club',
  rating: 67,
  slopeRating: 113,
  totalPar: 64,
  holes: 9,
  totalMetresMen: 3849,
  totalMetresWomen: 2340,
  yearEstablished: 1966,
  designer: 'Club Members',
  grassType: 'Couch/Kikuyu fairways, Bent grass greens',
  preferredLies: 'Check the Local Rules board at the clubhouse',
};

export const holes: HoleData[] = [
  {
    number: 1,
    par: 4,
    strokeIndex: 2,
    metresMen: 287,
    metresWomen: 305,
    description: 'A challenging opening hole with a tree-lined fairway. Accuracy off the tee is key — find the centre of the fairway for a clear approach to an elevated green.',
    tip: 'Favour the right side off the tee to avoid the trees on the left.',
  },
  {
    number: 2,
    par: 4,
    strokeIndex: 5,
    metresMen: 341,
    metresWomen: 125,
    description: 'A short but deceptive par 3. The green is well-bunkered and slopes from back to front. Club selection is everything here.',
    tip: 'Take one extra club — the green plays longer than it looks.',
  },
  {
    number: 3,
    par: 4,
    strokeIndex: 6,
    metresMen: 288,
    metresWomen: 330,
    description: 'The number one stroke hole. A long par 4 with a dogleg right through native bushland. Wallabies are often spotted grazing along the left side.',
    tip: 'A draw off the tee will cut the corner and leave a shorter approach.',
  },
  {
    number: 4,
    par: 4,
    strokeIndex: 10,
    metresMen: 225,
    metresWomen: 270,
    description: 'A shorter par 4 that rewards a well-placed tee shot. The fairway narrows through the trees before opening up to a generous green.',
    tip: 'Leave the driver in the bag — a 3-wood or hybrid to the widest part of the fairway is the smart play.',
  },
  {
    number: 5,
    par: 4,
    strokeIndex: 18,
    metresMen: 100,
    metresWomen: 300,
    description: 'A picturesque hole with kangaroos often lounging near the green. Straight hitting is essential with out-of-bounds on the right.',
    tip: 'Aim left-centre off the tee. The green has a subtle left-to-right break.',
  },
  {
    number: 6,
    par: 3,
    strokeIndex: 7,
    metresMen: 150,
    metresWomen: 110,
    description: 'The shortest hole on the course but don\'t let that fool you. A well-guarded green with bunkers front-left demands precision.',
    tip: 'The safest miss is right of the green — avoid the bunkers at all costs.',
  },
  {
    number: 7,
    par: 3,
    strokeIndex: 11,
    metresMen: 230,
    metresWomen: 400,
    description: 'The only par 5 on the course and a genuine birdie opportunity for longer hitters. A sweeping hole through beautiful eucalyptus trees.',
    tip: 'Two good shots will leave a wedge into the green. Don\'t try to be a hero with the second shot.',
  },
  {
    number: 8,
    par: 4,
    strokeIndex: 15,
    metresMen: 165,
    metresWomen: 135,
    description: 'An elevated tee gives you a panoramic view of the surrounding bushland. The green is tiered — being on the right level is crucial for a birdie putt.',
    tip: 'Check the pin position. Front pin plays a full club shorter than back pin.',
  },
  {
    number: 9,
    par: 3,
    strokeIndex: 16,
    metresMen: 133,
    metresWomen: 285,
    description: 'A fitting finishing hole that brings you back to the clubhouse. A well-placed drive leaves a short iron in to a receptive green. The perfect way to end your round before a cold drink at the club.',
    tip: 'Aim for the flag — the green accepts shots well and putting is true.',
  },
];

export const courseRules = [
  'Play off the WHITE Tees',
  'Playing Group – Maximum of FOUR players',
  'Each player must have a set of golf clubs (Hire Clubs are available)',
  'Golf Carts carry a maximum of TWO people + TWO sets of clubs',
  'Driver of Golf Carts must be a minimum 18 years of age',
  'No children are permitted to drive Golf Carts',
  'Golf Carts must stick to cart paths when available and must not drive within 5 metres of greens, dams and/or bunkers',
  'All Carts must be driven on the HIGH side of the fairways in wet weather where cart paths are not available',
  'All bunkers MUST be raked before you leave the area',
  'Rakes should be replaced back inside the bunker',
  'The 6th Tee is located across the bridge and on the right of the fairway near bunker and houses',
  'If your ball goes into a resident\'s yard, please do not enter the property. This is considered trespassing.',
  'Please report any damage you may cause to a resident\'s property to the Clubhouse staff',
  'Any alcohol to be consumed on the course must be purchased from our Golf Shop',
];
