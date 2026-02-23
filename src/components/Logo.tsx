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
      {/* ^ with progressive thickness: thin LEFT → bold RIGHT */}

      {/* Left stroke - starts VERY thin at bottom-left, gets thicker toward peak */}
      <path
        d="M 22 84
           L 23 82
           Q 32 65, 40 48
           Q 46 32, 50 18
           L 56 20
           Q 50 35, 44 50
           Q 36 68, 28 83
           Z"
        fill="currentColor"
      />

      {/* Right stroke - continues getting MUCH BOLDER from peak to bottom-right */}
      <path
        d="M 44 20
           L 50 18
           Q 56 32, 64 48
           Q 72 65, 78 82
           L 84 84
           L 70 83
           Q 62 68, 56 50
           Q 52 35, 50 20
           Z"
        fill="currentColor"
      />
    </svg>
  );
}
