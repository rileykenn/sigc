import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import MembershipForm from '@/components/MembershipForm';

export const metadata: Metadata = {
  title: 'Membership | Sussex Inlet Golf Club',
  description:
    "Join Sussex Inlet Golf Club as a full, veteran, women's, junior or social member. Apply online in a few minutes.",
};

export default function MembershipPage() {
  return (
    <>
      <PageHeader
        title="Membership"
        intro="Join as a full, veteran, women's, junior or social member. The application takes a few minutes."
      />
      <MembershipForm />
    </>
  );
}
