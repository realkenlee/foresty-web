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
      {/* Extra bold hand-drawn ^ with varying width */}

      {/* Left stroke - much bolder */}
      <path
        d="M 18 82
           Q 15 80, 28 55
           Q 35 40, 44 24
           L 50 18
           L 56 22
           Q 50 35, 44 48
           Q 35 65, 26 80
           Z"
        fill="currentColor"
      />

      {/* Right stroke - much bolder */}
      <path
        d="M 82 82
           Q 85 80, 72 55
           Q 65 40, 56 24
           L 50 18
           L 44 22
           Q 50 35, 56 48
           Q 65 65, 74 80
           Z"
        fill="currentColor"
      />
    </svg>
  );
}
