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
      {/* Three trees using caret (^) shapes - like ^^^ */}
      {/* Left tree - smaller */}
      <path
        d="M 25 65 L 30 50 L 35 65 Z"
        fill="currentColor"
        opacity="0.6"
      />

      {/* Center tree - tallest */}
      <path
        d="M 42 70 L 50 45 L 58 70 Z"
        fill="currentColor"
        opacity="0.9"
      />

      {/* Right tree - smaller */}
      <path
        d="M 65 65 L 70 50 L 75 65 Z"
        fill="currentColor"
        opacity="0.6"
      />

      {/* Small dots at base - like periods */}
      <circle cx="30" cy="75" r="1.5" fill="currentColor" opacity="0.4" />
      <circle cx="50" cy="75" r="1.5" fill="currentColor" opacity="0.4" />
      <circle cx="70" cy="75" r="1.5" fill="currentColor" opacity="0.4" />
    </svg>
  );
}
