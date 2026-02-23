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
      {/* Three bold caret trees - much larger and more visible */}

      {/* Left tree */}
      <path
        d="M 15 75 L 25 35 L 35 75 Z"
        fill="currentColor"
        opacity="0.7"
      />

      {/* Center tree - tallest and most prominent */}
      <path
        d="M 40 80 L 50 25 L 60 80 Z"
        fill="currentColor"
        opacity="1"
      />

      {/* Right tree */}
      <path
        d="M 65 75 L 75 35 L 85 75 Z"
        fill="currentColor"
        opacity="0.7"
      />
    </svg>
  );
}
