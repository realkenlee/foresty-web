export function Logo({ size = 32, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Playful burst of upward lines - like multiple ^ at different angles */}

      {/* Center line - tallest */}
      <path
        d="M 50 70 L 50 25"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />

      {/* Left lines - varying heights and angles */}
      <path
        d="M 35 70 L 40 35"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        d="M 25 70 L 28 45"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        opacity="0.8"
      />

      {/* Right lines - varying heights and angles */}
      <path
        d="M 65 70 L 60 35"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        d="M 75 70 L 72 45"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        opacity="0.8"
      />
    </svg>
  );
}
