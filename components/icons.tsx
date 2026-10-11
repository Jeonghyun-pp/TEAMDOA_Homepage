// 사이트에서 쓰는 인라인 SVG 아이콘 모음 (모두 currentColor 기반).

export const ArrowRight = ({ size = 16, stroke = "currentColor", strokeWidth = 2.2, className }: { size?: number; stroke?: string; strokeWidth?: number; className?: string }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth={strokeWidth} aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const Check = ({ size = 14, strokeWidth = 2.4, className }: { size?: number; strokeWidth?: number; className?: string }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} aria-hidden="true">
    <path d="M5 12.5l4.5 4.5L19 7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
