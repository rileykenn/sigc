export type CalendarEvent = {
  date: string; // YYYY-MM-DD
  title: string;
  club: 'AGU' | 'Vets' | 'WGA' | 'Gents' | 'OHW' | 'General' | 'Sponsor';
  description?: string;
};

// Calendar category colors: muted, harmonised with the navy/gold/sand theme.
// Color is a secondary cue only; every chip also carries the club's text label.
export const clubColors: Record<string, { bg: string; text: string; dot: string }> = {
  AGU: { bg: 'bg-fairway-100', text: 'text-fairway-700', dot: 'bg-fairway-500' },
  Vets: { bg: 'bg-sky-50', text: 'text-sky-800', dot: 'bg-sky-600' },
  WGA: { bg: 'bg-rose-50', text: 'text-rose-800', dot: 'bg-rose-400' },
  Gents: { bg: 'bg-navy-50', text: 'text-navy-800', dot: 'bg-navy-600' },
  OHW: { bg: 'bg-teal-50', text: 'text-teal-800', dot: 'bg-teal-600' },
  General: { bg: 'bg-sand-100', text: 'text-navy-700', dot: 'bg-navy-300' },
  Sponsor: { bg: 'bg-gold-400/20', text: 'text-gold-600', dot: 'bg-gold-500' },
};

// Events seeded from the 2026 Golf Programme PDF
export const calendarEvents: CalendarEvent[] = [
  // ===== MAY 2026 =====
  { date: '2026-05-03', title: 'Medal and Stableford', club: 'AGU' },
  { date: '2026-05-04', title: 'One Hit Wonders', club: 'OHW' },
  { date: '2026-05-05', title: 'Individual Stableford', club: 'Vets' },
  { date: '2026-05-06', title: 'Championships Round 1', club: 'WGA' },
  { date: '2026-05-07', title: 'Thursday Gents Club 8am', club: 'Gents' },
  { date: '2026-05-10', title: '4 Ball Aggregate', club: 'AGU' },
  { date: '2026-05-11', title: 'MSCVGA Interclub Challenge', club: 'Vets' },
  { date: '2026-05-12', title: 'Monthly Medal', club: 'Vets' },
  { date: '2026-05-13', title: 'Championships Round 2', club: 'WGA' },
  { date: '2026-05-14', title: 'Thursday Gents Club 8am', club: 'Gents' },
  { date: '2026-05-17', title: '2 Person Ambrose', club: 'AGU' },
  { date: '2026-05-18', title: 'One Hit Wonders', club: 'OHW' },
  { date: '2026-05-19', title: '4BBB Championship Round 1', club: 'Vets' },
  { date: '2026-05-20', title: 'Championships Round 3', club: 'WGA' },
  { date: '2026-05-21', title: 'Thursday Gents Club 8am', club: 'Gents' },
  { date: '2026-05-24', title: '2 Person Multiplier', club: 'AGU' },
  { date: '2026-05-25', title: 'MSCVGA Interclub Challenge', club: 'Vets' },
  { date: '2026-05-26', title: '4BBB Championship Round 2', club: 'Vets' },
  { date: '2026-05-27', title: 'Stableford 9 & 18 Holes', club: 'WGA' },
  { date: '2026-05-28', title: 'Thursday Gents Club 8am', club: 'Gents' },
  { date: '2026-05-31', title: 'Medal and Stableford', club: 'AGU' },

  // ===== JUNE 2026 =====
  { date: '2026-06-01', title: 'Sussex Open', club: 'AGU', description: '18-hole open championship event' },
  { date: '2026-06-02', title: 'Individual Stableford', club: 'Vets' },
  { date: '2026-06-03', title: 'Stableford 9 & 18 Holes', club: 'WGA' },
  { date: '2026-06-04', title: 'Thursday Gents Club 8am', club: 'Gents' },
  { date: '2026-06-07', title: '2 Person Ambrose - Sponsor', club: 'Sponsor' },
  { date: '2026-06-08', title: 'One Hit Wonders', club: 'OHW' },
  { date: '2026-06-09', title: 'Monthly Medal', club: 'Vets' },
  { date: '2026-06-10', title: '2 Person Ambrose 9 & 18', club: 'WGA' },
  { date: '2026-06-11', title: 'Thursday Gents Club 8am', club: 'Gents' },
  { date: '2026-06-13', title: 'Les Selby Memorial Day', club: 'Vets', description: '3 Person Ambrose memorial event' },
  { date: '2026-06-14', title: 'Stableford', club: 'AGU' },
  { date: '2026-06-15', title: 'MSCVGA Interclub Challenge', club: 'Vets' },
  { date: '2026-06-15', title: '4BBB Championship Round 1', club: 'AGU' },
  { date: '2026-06-16', title: '2 Person Stableford', club: 'Vets' },
  { date: '2026-06-17', title: 'Stableford 9 & 18 Holes', club: 'WGA' },
  { date: '2026-06-18', title: 'Thursday Gents Club 8am', club: 'Gents' },
  { date: '2026-06-21', title: '4 Player Team Event', club: 'AGU' },
  { date: '2026-06-22', title: '4BBB Championship Round 2', club: 'AGU' },
  { date: '2026-06-24', title: 'Foursomes 9 & 18 Holes', club: 'WGA' },
  { date: '2026-06-25', title: 'Thursday Gents Club 8am', club: 'Gents' },
  { date: '2026-06-28', title: 'Medal and Stableford', club: 'AGU' },

  // ===== JULY 2026 =====
  { date: '2026-07-05', title: 'Medal and Stableford', club: 'AGU' },
  { date: '2026-07-06', title: 'One Hit Wonders', club: 'OHW' },
  { date: '2026-07-07', title: 'Individual Stableford', club: 'Vets' },
  { date: '2026-07-08', title: 'Stableford 9 & 18 Holes', club: 'WGA' },
  { date: '2026-07-09', title: 'Thursday Gents Club 8am', club: 'Gents' },
  { date: '2026-07-12', title: '4 Ball Aggregate', club: 'AGU' },
  { date: '2026-07-14', title: 'Monthly Medal', club: 'Vets' },
  { date: '2026-07-15', title: '2 Person Ambrose 9 & 18', club: 'WGA' },
  { date: '2026-07-16', title: 'Thursday Gents Club 8am', club: 'Gents' },
  { date: '2026-07-19', title: 'Mens Foursomes Champs R1', club: 'AGU', description: 'Foursomes Championship Round 1' },
  { date: '2026-07-20', title: 'Mens Foursomes Champs R2', club: 'AGU', description: 'Foursomes Championship Round 2' },
  { date: '2026-07-20', title: 'MSCVGA Interclub Challenge', club: 'Vets' },
  { date: '2026-07-21', title: 'Mixed Foursomes Champs R1', club: 'Vets' },
  { date: '2026-07-22', title: 'Stableford 18 Holes', club: 'WGA' },
  { date: '2026-07-23', title: 'Thursday Gents Club 8am', club: 'Gents' },
  { date: '2026-07-26', title: '2 Person Multiplier', club: 'AGU' },
  { date: '2026-07-28', title: 'Mixed Foursomes Champs R2', club: 'Vets' },
  { date: '2026-07-29', title: 'PAR + 2BBB', club: 'WGA' },
  { date: '2026-07-30', title: 'Thursday Gents Club 8am', club: 'Gents' },

  // ===== AUGUST 2026 =====
  { date: '2026-08-02', title: 'Medal and Stableford', club: 'AGU' },
  { date: '2026-08-03', title: 'One Hit Wonders', club: 'OHW' },
  { date: '2026-08-04', title: 'Individual Stableford', club: 'Vets' },
  { date: '2026-08-05', title: 'Stableford 9 & 18 Holes', club: 'WGA' },
  { date: '2026-08-06', title: 'Thursday Gents Club 8am', club: 'Gents' },
  { date: '2026-08-09', title: 'Mixed Foursomes Champs R1', club: 'AGU', description: 'Mixed Foursomes Championship Round 1' },
  { date: '2026-08-10', title: 'Mixed Foursomes Champs R2', club: 'AGU', description: 'Mixed Foursomes Championship Round 2' },
  { date: '2026-08-11', title: 'Monthly Medal', club: 'Vets' },
  { date: '2026-08-12', title: '2 Person Ambrose 9 & 18', club: 'WGA' },
  { date: '2026-08-13', title: 'Thursday Gents Club 8am', club: 'Gents' },
  { date: '2026-08-14', title: 'Veterans Open - Catalina', club: 'Vets', description: 'Annual Veterans Open Day' },
  { date: '2026-08-24', title: 'MSCVGA Championship', club: 'Vets', description: 'Championship at Mollymook' },
  { date: '2026-08-25', title: 'Foursomes Championship R1', club: 'Vets' },

  // ===== SEPTEMBER 2026 =====
  { date: '2026-09-01', title: 'Foursomes Championship R2', club: 'Vets' },
  { date: '2026-09-02', title: 'Medal of Medals', club: 'WGA', description: 'Season finale medal event' },
  { date: '2026-09-06', title: 'Medal and Stableford', club: 'AGU' },
  { date: '2026-09-07', title: 'One Hit Wonders', club: 'OHW' },
  { date: '2026-09-09', title: 'Foursomes Round 1', club: 'WGA' },
  { date: '2026-09-14', title: 'Mens Championships R1', club: 'AGU', description: 'Mens Championship Round 1 - Stroke Play' },
  { date: '2026-09-15', title: 'AGM', club: 'Vets' },
  { date: '2026-09-16', title: 'Foursomes Round 2', club: 'WGA' },
  { date: '2026-09-21', title: 'Mens Championships R2', club: 'AGU', description: 'Mens Championship Round 2 - Stroke Play' },
  { date: '2026-09-28', title: 'Mens Championships R3', club: 'AGU', description: 'Mens Championship Final Round' },
];
