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
      {/* Bolder hand-drawn ^ with varying width */}

      {/* Left stroke - bolder taper */}
      <path
        d="M 22 80
           Q 20 78, 32 58
           Q 38 45, 46 26
           L 50 20
           L 54 24
           Q 48 38, 42 50
           Q 35 65, 28 78
           Z"
        fill="currentColor"
      />

      {/* Right stroke - bolder taper */}
      <path
        d="M 78 80
           Q 80 78, 68 58
           Q 62 45, 54 26
           L 50 20
           L 46 24
           Q 52 38, 58 50
           Q 65 65, 72 78
           Z"
        fill="currentColor"
      />
    </svg>
  );
}
