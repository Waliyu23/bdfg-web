export default function ArrowRight({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M5 12h13M12 5.5l6.5 6.5L12 18.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
