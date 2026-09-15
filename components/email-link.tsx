import { site } from "@/lib/site";

const [local, domain] = site.email.split("@");

/**
 * The secretariat email address with a soft break opportunity before the "@",
 * so narrow cards wrap it cleanly instead of mid-word.
 */
export default function EmailLink({ className }: { className?: string }) {
  return (
    <a href={`mailto:${site.email}`} className={className}>
      {local}
      <wbr />
      {`@${domain}`}
    </a>
  );
}
