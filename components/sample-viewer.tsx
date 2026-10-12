"use client";
import Image from "next/image";
import { useRef } from "react";

// 인스타 캐러셀처럼 옆으로 넘겨 보는 견본 뷰어. 화살표는 한 장씩 넘긴다.
export function SampleViewer({ pages }: { pages: { src: string; alt: string }[] }) {
  const track = useRef<HTMLOListElement>(null);
  const step = (dir: number) => {
    const el = track.current;
    const card = el?.querySelector("li");
    if (el && card) el.scrollBy({ left: dir * (card.clientWidth + 16), behavior: "smooth" });
  };
  return (
    <div>
      <ol ref={track} className="snap-track" aria-label="견본 원고">
        {pages.map((p, i) => (
          <li key={p.src} className="snap-card">
            <Image src={p.src} alt={p.alt} width={864} height={1080} sizes="(min-width: 1024px) 340px, 78vw" className="cut aspect-[4/5] w-full object-cover" priority={i === 0} />
            <span className="src mt-2 block">
              {i + 1} / {pages.length}
            </span>
          </li>
        ))}
      </ol>
      <div className="mt-5 flex gap-3">
        <button type="button" onClick={() => step(-1)} aria-label="이전 장" className="round-btn">
          ‹
        </button>
        <button type="button" onClick={() => step(1)} aria-label="다음 장" className="round-btn">
          ›
        </button>
      </div>
    </div>
  );
}
