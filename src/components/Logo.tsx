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
      {/* Bold ^ with dramatic thin-to-thick left-to-right */}

      {/* Left stroke - very thin at left, very bold at center */}
      <path
        d="M 18 85
           L 20 83
           Q 28 68, 36 50
           Q 42 35, 48 22
           L 50 18
           L 58 24
           Q 52 38, 46 52
           Q 38 70, 28 84
           Z"
        fill="currentColor"
      />

      {/* Right stroke - very bold at center, very bold at right */}
      <path
        d="M 42 24
           L 50 18
           Q 56 35, 64 50
           Q 72 68, 80 83
           L 82 85
           L 72 84
           Q 62 70, 54 52
           Q 48 38, 42 24
           Z"
        fill="currentColor"
      />
    </svg>
  );
}
