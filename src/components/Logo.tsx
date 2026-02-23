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
      {/* Hand-drawn ^ with varying width - like brush strokes */}

      {/* Left stroke - thicker at bottom, thinner at top */}
      <path
        d="M 25 78
           Q 24 77, 35 60
           Q 40 50, 48 28
           L 50 24
           L 52 26
           Q 48 40, 42 52
           Q 38 62, 29 75
           Z"
        fill="currentColor"
      />

      {/* Right stroke - thicker at bottom, thinner at top */}
      <path
        d="M 75 78
           Q 76 77, 65 60
           Q 60 50, 52 28
           L 50 24
           L 48 26
           Q 52 40, 58 52
           Q 62 62, 71 75
           Z"
        fill="currentColor"
      />
    </svg>
  );
}
