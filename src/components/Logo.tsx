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
      {/* ^ with progressive thickness: thin LEFT → BOLD RIGHT */}

      {/* Left stroke - very thin at bottom-left, medium at peak */}
      <path
        d="M 20 86
           L 22 84
           Q 32 66, 40 48
           Q 46 30, 50 16
           L 52 16
           Q 48 32, 42 48
           Q 34 68, 26 84
           Z"
        fill="currentColor"
      />

      {/* Right stroke - medium at peak, VERY BOLD at bottom-right */}
      <path
        d="M 48 16
           L 50 16
           Q 56 30, 64 48
           Q 74 66, 84 84
           L 88 86
           L 68 84
           Q 60 68, 54 48
           Q 50 32, 48 16
           Z"
        fill="currentColor"
      />
    </svg>
  );
}
