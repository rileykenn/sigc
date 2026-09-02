export type MembershipType = { id: string; label: string; price: string; desc: string };

export const membershipTypes: MembershipType[] = [
  { id: 'full', label: 'Full member', price: '$360/yr', desc: 'Full playing rights, an AGU handicap and every club competition.' },
  { id: 'veteran', label: 'Veteran', price: '$310/yr', desc: 'Playing membership for over 60s, with the veterans competitions.' },
  { id: 'womens', label: "Women's", price: '$310/yr', desc: "Full playing rights and the women's competitions." },
  { id: 'junior', label: 'Junior', price: '$100/yr', desc: 'Playing membership for under 18s.' },
  { id: 'social', label: 'Social', price: '$50/yr', desc: 'Clubhouse access and social events, no golf.' },
];
