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
      {/* Hand-drawn ^ with organic width variation */}

      {/* Left stroke - width varies along the stroke */}
      <path
        d="M 15 82
           Q 18 75, 25 60
           Q 30 50, 38 35
           Q 42 28, 48 20
           L 50 18
           L 52 20
           Q 48 26, 45 32
           Q 40 42, 36 52
           Q 30 65, 24 78
           Q 20 82, 15 82
           Z"
        fill="currentColor"
      />

      {/* Right stroke - width varies along the stroke */}
      <path
        d="M 85 82
           Q 82 75, 75 60
           Q 70 50, 62 35
           Q 58 28, 52 20
           L 50 18
           L 48 20
           Q 52 26, 55 32
           Q 60 42, 64 52
           Q 70 65, 76 78
           Q 80 82, 85 82
           Z"
        fill="currentColor"
      />
    </svg>
  );
}
