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
      {/* ^ with organic elevation and smooth peak join */}

      {/* Left stroke - thin, starts elevated (higher) */}
      <path
        d="M 20 80
           L 22 78
           Q 32 62, 40 46
           Q 46 28, 49.5 16
           L 50.5 16
           Q 48 30, 42 46
           Q 34 64, 26 78
           Z"
        fill="currentColor"
      />

      {/* Right stroke - bold, starts lower */}
      <path
        d="M 49.5 16
           L 50.5 16
           Q 56 28, 64 46
           Q 74 64, 84 82
           L 88 86
           L 68 82
           Q 60 66, 54 46
           Q 51 30, 49.5 16
           Z"
        fill="currentColor"
      />
    </svg>
  );
}
