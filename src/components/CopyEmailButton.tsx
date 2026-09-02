'use client';

import { toast } from 'sonner';

const tertiaryOnLight =
  'inline-flex min-h-11 cursor-pointer items-center gap-1.5 text-sm font-medium text-navy-900 underline decoration-gold-500 decoration-1 underline-offset-[6px] transition-colors hover:text-navy-950 hover:decoration-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-700';

type CopyEmailButtonProps = {
  email: string;
};

// Copies the club email to the clipboard and confirms with a toast.
export default function CopyEmailButton({ email }: CopyEmailButtonProps) {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      toast.success('Email copied');
    } catch {
      toast.error('Could not copy email');
    }
  };

  return (
    <button type="button" onClick={handleCopy} className={tertiaryOnLight}>
      Copy email
    </button>
  );
}
