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
  totalPar: 34,
  holes: 9,
  totalMetresMen: 2685,
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
    strokeIndex: 3,
    metresMen: 340,
    metresWomen: 305,
    description: 'A challenging opening hole with a tree-lined fairway. Accuracy off the tee is key — find the centre of the fairway for a clear approach to an elevated green.',
    tip: 'Favour the right side off the tee to avoid the trees on the left.',
  },
  {
    number: 2,
    par: 3,
    strokeIndex: 7,
    metresMen: 145,
    metresWomen: 125,
    description: 'A short but deceptive par 3. The green is well-bunkered and slopes from back to front. Club selection is everything here.',
    tip: 'Take one extra club — the green plays longer than it looks.',
  },
  {
    number: 3,
    par: 4,
    strokeIndex: 1,
    metresMen: 375,
    metresWomen: 330,
    description: 'The number one stroke hole. A long par 4 with a dogleg right through native bushland. Wallabies are often spotted grazing along the left side.',
    tip: 'A draw off the tee will cut the corner and leave a shorter approach.',
  },
  {
    number: 4,
    par: 4,
    strokeIndex: 5,
    metresMen: 310,
    metresWomen: 270,
    description: 'A shorter par 4 that rewards a well-placed tee shot. The fairway narrows through the trees before opening up to a generous green.',
    tip: 'Leave the driver in the bag — a 3-wood or hybrid to the widest part of the fairway is the smart play.',
  },
  {
    number: 5,
    par: 4,
    strokeIndex: 4,
    metresMen: 345,
    metresWomen: 300,
    description: 'A picturesque hole with kangaroos often lounging near the green. Straight hitting is essential with out-of-bounds on the right.',
    tip: 'Aim left-centre off the tee. The green has a subtle left-to-right break.',
  },
  {
    number: 6,
    par: 3,
    strokeIndex: 9,
    metresMen: 130,
    metresWomen: 110,
    description: 'The shortest hole on the course but don\'t let that fool you. A well-guarded green with bunkers front-left demands precision.',
    tip: 'The safest miss is right of the green — avoid the bunkers at all costs.',
  },
  {
    number: 7,
    par: 5,
    strokeIndex: 2,
    metresMen: 460,
    metresWomen: 400,
    description: 'The only par 5 on the course and a genuine birdie opportunity for longer hitters. A sweeping hole through beautiful eucalyptus trees.',
    tip: 'Two good shots will leave a wedge into the green. Don\'t try to be a hero with the second shot.',
  },
  {
    number: 8,
    par: 3,
    strokeIndex: 8,
    metresMen: 155,
    metresWomen: 135,
    description: 'An elevated tee gives you a panoramic view of the surrounding bushland. The green is tiered — being on the right level is crucial for a birdie putt.',
    tip: 'Check the pin position. Front pin plays a full club shorter than back pin.',
  },
  {
    number: 9,
    par: 4,
    strokeIndex: 6,
    metresMen: 325,
    metresWomen: 285,
    description: 'A fitting finishing hole that brings you back to the clubhouse. A well-placed drive leaves a short iron in to a receptive green. The perfect way to end your round before a cold drink at the club.',
    tip: 'Aim for the flag — the green accepts shots well and putting is true.',
  },
];

export const courseRules = [
  'Ready golf — first person on the tee hits off, no honours',
  'Three minute maximum to search for lost balls',
  'Always rake bunkers after use',
  'Repair pitch marks on the green',
  'Place buggies adjacent to the approach to the next tee',
  'Competition players have precedence at all times',
  'Do not take buggies or drop clubs on the green',
  'Drinks are not to be taken onto greens',
];
