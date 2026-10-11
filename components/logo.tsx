import { site } from "@/content/site";

// 임시 워드마크: 정식 로고가 나오기 전까지 글자로 "TEAM DOA"를 표시한다.
// tone: ink = 밝은 배경용, white = 어두운 배경용. height = 글자 높이 기준(px).
export function Logo({ height = 22, tone = "ink" }: { height?: number; tone?: "ink" | "white" }) {
  const color = tone === "white" ? "var(--on-dark)" : "var(--ink)";
  const accent = tone === "white" ? "var(--accent-on-dark)" : "var(--accent)";
  return (
    <span aria-label={site.name} role="img" className="inline-flex select-none items-baseline" style={{ color, gap: height * 0.28, lineHeight: 1 }}>
      <span aria-hidden="true" style={{ fontSize: height * 0.62, fontWeight: 700, letterSpacing: "0.08em", opacity: 0.7 }}>
        TEAM
      </span>
      <span aria-hidden="true" style={{ fontSize: height * 1.08, fontWeight: 900, letterSpacing: "-0.02em" }}>
        DOA<span style={{ color: accent }}>.</span>
      </span>
    </span>
  );
}
