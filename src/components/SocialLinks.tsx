'use client';

function FacebookIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

type SocialLinksProps = {
  variant?: 'light' | 'dark';
  size?: number;
  className?: string;
};

const socials = [
  { name: 'Facebook', href: 'https://www.facebook.com/SussexInletGolfClub', Icon: FacebookIcon },
  { name: 'Instagram', href: 'https://www.instagram.com/sussexinletgolfclub', Icon: InstagramIcon },
];

export default function SocialLinks({ variant = 'dark', size = 18, className = '' }: SocialLinksProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {socials.map((s) => (
        <a
          key={s.name}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={s.name}
          className={`p-2 rounded-full transition-all duration-300 ${
            variant === 'dark'
              ? 'text-navy-800 hover:bg-navy-50 hover:text-navy-600'
              : 'text-navy-400 hover:text-white hover:bg-navy-800'
          }`}
        >
          <s.Icon size={size} />
        </a>
      ))}
    </div>
  );
}
