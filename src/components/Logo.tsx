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
      {/* Single bold caret - like ^ */}
      <path
        d="M 20 75 L 50 20 L 80 75 Z"
        fill="currentColor"
      />
    </svg>
  );
}
