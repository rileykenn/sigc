import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import SocialEvents from '@/components/SocialEvents';

export const metadata: Metadata = {
  title: 'Group bookings | Sussex Inlet Golf Club',
  description:
    'Social golf, birthday parties, corporate days and stay and play packages at Sussex Inlet Golf Club. The course and clubhouse are both available for group days.',
};

export default function GroupBookingsPage() {
  return (
    <>
      <PageHeader
        title="Group bookings"
        intro="Golf days, birthdays and everything between: the course and clubhouse are both available for group days. Tell us a date and rough numbers, and we will help with the rest."
      />
      <SocialEvents />
    </>
  );
}
