// 홈(/)과 서비스 페이지(/services/*)가 함께 쓰는 작은 조각들.
import Image from "next/image";
import { TrackedLink } from "@/components/tracked-link";
import { ArrowRight, Check } from "@/components/icons";

// 진행자 얼굴을 동그란 틀에 넣은 작은 아바타
export function HostAvatar({ src = "/img/host/wave.webp", size = "h-12 w-12" }: { src?: string; size?: string }) {
  return (
    <span className={`grid shrink-0 place-items-start overflow-hidden rounded-full bg-white/90 ${size}`}>
      <Image src={src} alt="" aria-hidden="true" width={430} height={565} className="mt-1 h-auto w-full" />
    </span>
  );
}

// 색 카드 맨 아래의 "아바타 + 두 줄 + 화살표" 줄
export function CardRow({ href, title, sub }: { href: string; title: string; sub: string }) {
  const mail = href.startsWith("mailto:");
  const inner = (
    <>
      {mail ? (
        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-white/20" aria-hidden="true">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="M3.5 6.5 12 13l8.5-6.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      ) : (
        <HostAvatar />
      )}
      <span className="min-w-0 flex-1 leading-tight">
        <span className="block text-[15px] font-semibold">{title}</span>
        <span className="block truncate text-sm opacity-75">{sub}</span>
      </span>
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white text-[var(--ink)]">
        <ArrowRight size={16} />
      </span>
    </>
  );
  return mail ? (
    <a href={href} className="flex items-center gap-3">
      {inner}
    </a>
  ) : (
    <TrackedLink href={href} event="cta_click" eventParams={{ location: "card_row", label: title }} className="flex items-center gap-3">
      {inner}
    </TrackedLink>
  );
}

const COVERS = ["/img/sample/doorlock/ep1-02.webp", "/img/sample/doorlock/ep2-02.webp", "/img/sample/doorlock/ep3-02.webp"];
const FEED = ["rabbit", "longhair", "postman", "fox", "jelly-yellow", "woman"];

// 장점 카드 안의 작은 물건: 연재 표지 묶음, 점검표, 메모, 정액, 인스타 프로필
export function BenefitVisual({ kind }: { kind: string }) {
  if (kind === "covers")
    return (
      <div className="relative h-[62%] w-[70%]">
        {[0, 1, 2].map((i) => (
          <span key={i} className="absolute top-0 w-[54%] overflow-hidden rounded-md bg-white shadow-lg" style={{ left: `${i * 23}%`, transform: `rotate(${[-8, 0, 8][i]}deg) translateY(${[6, 0, 6][i]}px)` }}>
            <Image src={COVERS[i]} alt="" width={720} height={900} className="aspect-[4/5] w-full object-cover object-top" />
            <span className="block py-0.5 text-center text-[10px] font-semibold text-[var(--ink)]">{i + 1}화</span>
          </span>
        ))}
      </div>
    );
  if (kind === "check")
    return (
      <ul className="w-[72%] rounded-xl bg-white p-3 text-[11px] text-[var(--ink)] shadow-lg">
        {["과장 표현", "\"전문\" 표기", "후기형 장면"].map((c) => (
          <li key={c} className="flex items-center justify-between border-b border-[var(--line)] py-1.5 last:border-0">
            {c}
            <Check size={12} className="text-[#5f8f6a]" />
          </li>
        ))}
      </ul>
    );
  if (kind === "memo")
    return (
      <div className="memo w-[72%] -rotate-3 !p-3 text-[var(--ink)]">
        <p className="hand text-[13px] leading-snug">
          <span className="line-through opacity-50">김○○</span> → 30대 직장인
          <br />
          <span className="line-through opacity-50">서초동</span> → 어느 도시
        </p>
      </div>
    );
  if (kind === "price")
    return (
      <p className="num text-center text-white drop-shadow">
        <span className="block text-5xl font-semibold tracking-[-0.05em]">정액</span>
        <span className="text-sm font-semibold">건수와 상관없이</span>
      </p>
    );
  return (
    <div className="w-[70%] rounded-xl bg-white p-2.5 shadow-lg">
      <div className="flex items-center gap-2">
        <span className="h-6 w-6 rounded-full bg-[var(--accent-tint)]" />
        <span className="text-[10px] font-semibold text-[var(--ink)]">○○ 법률사무소</span>
      </div>
      <div className="mt-2 grid grid-cols-3 gap-0.5">
        {FEED.map((k) => (
          <Image key={k} src={`/img/cast/${k}.webp`} alt="" width={320} height={320} className="aspect-square w-full bg-[#fbf8f3] object-cover" />
        ))}
      </div>
    </div>
  );
}

// 동그란 틀 안의 캐릭터 얼굴. 그동안 그린 캐릭터 시안(사람·동물·젤리빈·진행자 후보)에서 잘라 왔다 (public/img/cast/)
export function CastCircle({ k, className }: { k: string; className: string }) {
  return <Image src={`/img/cast/${k}.webp`} alt="" aria-hidden="true" width={320} height={320} className={`rounded-full bg-[#fbf8f3] object-cover ${className}`} />;
}

// 견본 한 화 칸: 번호·단계 이름 + 색 바탕 위 실물
export function EpisodeStep({ n, step, tone, children }: { n: number; step: string; tone: string; children: React.ReactNode }) {
  return (
    <li className="flex flex-col">
      <p className="mb-3 flex items-center gap-2.5 font-semibold">
        <span className="num grid h-7 w-7 place-items-center rounded-full bg-[var(--ink)] text-xs text-white">{n}</span>
        {step}
      </p>
      <div className={`${tone} flex flex-1 flex-col justify-center rounded-[var(--r-lg)] p-5`}>{children}</div>
    </li>
  );
}

// 만드는 사람 수를 한글 관형사로 ("세 사람이")
export const COUNT: Record<number, string> = { 1: "한", 2: "두", 3: "세", 4: "네", 5: "다섯" };

