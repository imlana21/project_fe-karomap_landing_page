export default function DatabaseIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <path
        d="M32 5C22 18 10 29 10 41a22 22 0 0 0 44 0C54 29 42 18 32 5Z"
        fill="currentColor"
      />
      <path
        d="M20 42c5-7 9-10 15-10s10 3 13 8"
        fill="none"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}
