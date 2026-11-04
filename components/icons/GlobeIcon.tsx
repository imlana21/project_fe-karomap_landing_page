export default function GlobeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <circle
        cx="32"
        cy="32"
        r="24"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        d="M8 32h48M32 8c-10 10-10 38 0 48M32 8c10 10 10 38 0 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}
