import type { SocialLink } from "@/lib/site";

const paths: Record<SocialLink["icon"], React.ReactNode> = {
  facebook: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[18px] w-[18px]" fill="currentColor">
      <path d="M13.6 21v-7.1h2.4l.4-2.9h-2.8V9.2c0-.8.2-1.4 1.4-1.4h1.5V5.2c-.3 0-1.2-.1-2.2-.1-2.2 0-3.8 1.4-3.8 3.9v2h-2.4v2.9h2.4V21h3.1z" />
    </svg>
  ),
  x: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[18px] w-[18px]" fill="currentColor">
      <path d="M4 3.5h4.3l4.1 5.5 4.8-5.5H20l-6.4 7.3L20.6 20.5h-4.3l-4.4-5.9-5.1 5.9H4.3l6.8-7.8L4 3.5z" />
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3.4" y="3.4" width="17.2" height="17.2" rx="5" />
      <circle cx="12" cy="12" r="3.9" />
      <circle cx="16.9" cy="7.2" r="1.05" fill="currentColor" stroke="none" />
    </svg>
  ),
  youtube: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="2.6" y="5.6" width="18.8" height="12.8" rx="4" />
      <path d="M10.4 9.6l4.9 2.4-4.9 2.4V9.6z" fill="currentColor" stroke="none" />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[18px] w-[18px]" fill="currentColor">
      <path d="M4.9 8.9h2.8V20H4.9V8.9zm1.4-4.6a1.7 1.7 0 110 3.4 1.7 1.7 0 010-3.4zM10 8.9h2.7v1.5h.1c.4-.8 1.4-1.7 3-1.7 2.4 0 3.4 1.5 3.4 4V20h-2.8v-6.1c0-1.4-.5-2.2-1.6-2.2-1 0-1.6.7-1.8 1.4-.1.2-.1.6-.1.9V20H10V8.9z" />
    </svg>
  ),
};

export default function SocialIcon({ icon }: { icon: SocialLink["icon"] }) {
  return <>{paths[icon]}</>;
}
