import Link from "next/link";
import { site } from "@/content/site";
import { Logo } from "./logo";
import { TrackedLink } from "./tracked-link";

// Designjoy처럼 메뉴 없이 로고와 버튼 세 개만 둔다. 고정하지 않는다.
export function Header() {
  return (
    <header className="relative z-10">
      <div className="shell flex h-24 items-center justify-between gap-4">
        <Link href="/" className="inline-flex items-center" aria-label={`${site.name} 홈`}>
          <Logo height={22} />
        </Link>
        <div className="flex items-center gap-2">
          <a href={`mailto:${site.email}`} className="btn-chip hidden sm:inline-flex">
            메일 문의
          </a>
          <TrackedLink href="/consult" event="cta_click" eventParams={{ location: "header", label: "미팅 신청" }} className="btn-chip hidden sm:inline-flex">
            미팅 신청
          </TrackedLink>
          <TrackedLink href="/#services" event="cta_click" eventParams={{ location: "header", label: "서비스 보기" }} className="btn-chip btn-chip-dark">
            서비스 보기
          </TrackedLink>
        </div>
      </div>
    </header>
  );
}
