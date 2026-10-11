// 번호형 섹션 라벨: "01 ─ 문제"
export function SectionLabel({ num, children }: { num: string; children: React.ReactNode }) {
  return (
    <span className="label">
      <span className="label-num">{num}</span>
      {children}
    </span>
  );
}
