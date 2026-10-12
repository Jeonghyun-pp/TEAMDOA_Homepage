import { site } from "@/content/site";

// TEAM DOA 로고. 글꼴 없이 선으로 그린 "DOA"이고, O는 꼬리 달린 말풍선(툰)이다.
// 원본은 insta-toon-project pipeline/09_deck/img/logo.svg (덱과 같은 모양). 모양을 바꾸면 두 곳을 같이 고친다.
// tone: ink = 밝은 배경용, white = 어두운 배경용. height = DOA 글자 높이(px).
export function Logo({ height = 22, tone = "ink" }: { height?: number; tone?: "ink" | "white" }) {
  const color = tone === "white" ? "var(--on-dark)" : "var(--ink)";
  const accent = tone === "white" ? "var(--accent-on-dark)" : "var(--accent)";
  return (
    <span aria-label={site.name} role="img" className="inline-flex select-none items-end" style={{ color, gap: height * 0.4, lineHeight: 1 }}>
      <span aria-hidden="true" style={{ fontSize: Math.max(height * 0.45, 10), fontWeight: 800, letterSpacing: "0.2em", opacity: 0.7, paddingBottom: height * 0.08 }}>
        TEAM
      </span>
      <svg aria-hidden="true" viewBox="0 0 304 116" height={height * 1.16} width={height * 3.04} fill="none" strokeWidth={18} strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 15 V95 H40 A40 40 0 0 0 40 15 Z" stroke="currentColor" />
        <circle cx="154" cy="55" r="40" stroke={accent} />
        <path d="M125 84 L112 107 L139 94" fill={accent} stroke={accent} strokeWidth={8} />
        <path d="M222 95 L254 15 L286 95 M235 67 H273" stroke="currentColor" />
      </svg>
    </span>
  );
}
