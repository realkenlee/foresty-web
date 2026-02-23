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
      {/* Wabi-sabi inspired organic circle with intentional imperfection */}
      <path
        d="M 50 10
           C 70 12, 88 28, 90 50
           C 88 72, 70 88, 50 90
           C 30 88, 12 72, 10 50
           C 12 28, 30 12, 50 10"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
        opacity="0.9"
      />

      {/* Inner organic shapes suggesting growth/forest */}
      <path
        d="M 50 35 L 50 65"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.8"
      />
      <path
        d="M 42 45 L 50 35 L 58 45"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.7"
      />
      <path
        d="M 38 55 L 50 42 L 62 55"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.6"
      />
    </svg>
  );
}
