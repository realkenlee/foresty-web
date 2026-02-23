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
      {/* Radial burst pattern - playful like Claude's asterisk */}
      <g transform="translate(50, 50)">
        {/* 8 lines radiating out at different angles */}
        <path d="M 0 -25 L 0 -12" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
        <path d="M 18 -18 L 9 -9" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
        <path d="M 25 0 L 12 0" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
        <path d="M 18 18 L 9 9" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
        <path d="M 0 25 L 0 12" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
        <path d="M -18 18 L -9 9" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
        <path d="M -25 0 L -12 0" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
        <path d="M -18 -18 L -9 -9" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
      </g>
    </svg>
  );
}
