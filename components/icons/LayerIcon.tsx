export default function LayerIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <path d="m32 6 26 14-26 14L6 20Z" fill="currentColor" />
      <path
        d="m6 31 26 14 26-14M6 43l26 14 26-14"
        fill="none"
        stroke="currentColor"
        strokeWidth="7"
        strokeLinejoin="round"
      />
    </svg>
  );
}
