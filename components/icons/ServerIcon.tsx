export default function ServerIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <path d="M32 4 57 18v28L32 60 7 46V18Z" fill="currentColor" />
      <path
        d="M32 4v56M7 18l25 15 25-15M7 46l25-13 25 13"
        fill="none"
        stroke="white"
        strokeWidth="2"
      />
    </svg>
  );
}
