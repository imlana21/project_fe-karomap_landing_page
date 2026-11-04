export default function LeafletIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <path d="M12 50C11 31 20 13 48 8c2 20-7 37-36 42Z" fill="currentColor" />
      <path
        d="M12 50 42 18"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
