function FacebookIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

type SocialLinksProps = {
  /** "dark" for icons on paper, "light" for icons on navy. */
  variant?: 'light' | 'dark';
  size?: number;
  className?: string;
};

const socials = [
  {
    name: 'Facebook',
    label: 'Sussex Inlet Golf Club on Facebook',
    href: 'https://www.facebook.com/SussexInletGolfClub',
    Icon: FacebookIcon,
  },
  {
    name: 'Instagram',
    label: 'Sussex Inlet Golf Club on Instagram',
    href: 'https://www.instagram.com/sussexinletgolfclub',
    Icon: InstagramIcon,
  },
];

const base =
  'flex h-11 w-11 items-center justify-center transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2';

const variants = {
  dark: 'text-navy-950 hover:bg-sand-100 focus-visible:outline-navy-700',
  light:
    'text-sand-50/75 hover:bg-navy-900 hover:text-sand-50 focus-visible:outline-gold-300',
} as const;

export default function SocialLinks({
  variant = 'dark',
  size = 18,
  className = '',
}: SocialLinksProps) {
  return (
    <div className={`flex items-center gap-1 ${className}`.trim()}>
      {socials.map((s) => (
        <a
          key={s.name}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={s.label}
          className={`${base} ${variants[variant]}`}
        >
          <s.Icon size={size} />
        </a>
      ))}
    </div>
  );
}
