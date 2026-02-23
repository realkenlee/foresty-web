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
      {/* Hand-drawn ^ - thin on left, bold on right */}

      {/* Left stroke - starts thin at bottom-left, gets bolder toward peak */}
      <path
        d="M 20 82
           L 22 80
           Q 30 65, 38 48
           Q 44 32, 50 18
           L 54 20
           Q 48 35, 42 50
           Q 34 68, 26 82
           Z"
        fill="currentColor"
      />

      {/* Right stroke - starts bold at peak, ends bold at bottom-right */}
      <path
        d="M 46 20
           L 50 18
           Q 56 32, 62 48
           Q 70 65, 78 80
           L 80 82
           L 74 82
           Q 66 68, 58 50
           Q 52 35, 46 20
           Z"
        fill="currentColor"
      />
    </svg>
  );
}
