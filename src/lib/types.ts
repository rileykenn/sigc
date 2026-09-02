export const CLUBS = ['AGU', 'Vets', 'WGA', 'Gents', 'OHW', 'General', 'Sponsor'] as const;
export type Club = (typeof CLUBS)[number];

export type EventRow = {
  id: string;
  date: string; // YYYY-MM-DD
  title: string;
  club: Club;
  description: string | null;
};

export type GreenFeeRow = {
  id: string;
  type: string;
  members: string;
  visitors: string;
  jr_member: string;
  jr_visitor: string;
  sort_order: number;
};

export type CartHireRow = {
  id: string;
  type: string;
  members: string;
  visitors: string;
  sort_order: number;
};

export type ApplicationStatus = 'new' | 'contacted' | 'approved' | 'declined';

export type MembershipApplicationRow = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  dob: string | null;
  address: string;
  suburb: string;
  postcode: string;
  membership_type: string;
  emergency_name: string;
  emergency_phone: string;
  handicap: string;
  previous_club: string;
  golflink_no: string;
  status: ApplicationStatus;
  created_at: string;
};
