export default function AnalyticIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <circle
        cx="32"
        cy="32"
        r="27"
        fill="none"
        stroke="currentColor"
        strokeWidth="7"
      />
      <path
        d="M14 43 28 29 37 38 50 21M37 14l13 7-2 14"
        fill="none"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
