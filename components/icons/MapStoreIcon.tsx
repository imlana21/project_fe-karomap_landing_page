export default function MapStoreIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <rect x="5" y="8" width="54" height="48" rx="7" fill="currentColor" />
      <path
        d="M5 23 21 17 34 27 48 15 59 20M5 42 19 35 32 45 45 35 59 42"
        fill="none"
        stroke="white"
        strokeWidth="3"
      />
    </svg>
  );
}
