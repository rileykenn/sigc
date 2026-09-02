import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import Contact from '@/components/Contact';

export const metadata: Metadata = {
  title: 'Contact | Sussex Inlet Golf Club',
  description:
    'Phone, email, address and opening days for Sussex Inlet Golf Club, 7 Golfcourse Way, Sussex Inlet NSW 2540. Call the pro shop for tee times.',
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact"
        intro="Call the pro shop for tee times, or drop in. Visitors are always welcome."
      />
      <Contact />
    </>
  );
}
