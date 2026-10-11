"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CTA_LABEL, nav, site } from "@/content/site";
import { trackEvent } from "@/lib/analytics";
import { Logo } from "./logo";
import { TrackedLink } from "./tracked-link";
import { ArrowRight } from "./icons";

export function Header() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[color-mix(in_srgb,var(--paper)_88%,transparent)] backdrop-blur-md">
      <div className="shell flex h-16 items-center justify-between gap-6">
        <Link href="/" className="inline-flex items-center" aria-label={`${site.name} 홈`}>
          <Logo height={22} />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => trackEvent("nav_click", { label: item.label, href: item.href })}
              className="rounded-[var(--r-sm)] px-3 py-2 text-[0.92rem] font-semibold text-[var(--text-soft)] transition-colors hover:text-[var(--ink)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {pathname !== "/consult" ? (
            <TrackedLink href="/consult" event="cta_click" eventParams={{ location: "header", label: CTA_LABEL }} className="btn btn-primary btn-sm">
              {CTA_LABEL}
              <ArrowRight size={14} />
            </TrackedLink>
          ) : null}
          <details className="mnav relative md:hidden">
            <summary aria-label="메뉴 열기" className="grid h-[38px] w-[38px] place-items-center rounded-full border border-[var(--line-strong)]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              </svg>
            </summary>
            <nav className="panel panel-lift absolute right-0 top-12 flex w-48 flex-col p-2">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    trackEvent("nav_click", { label: item.label, href: item.href });
                    e.currentTarget.closest("details")?.removeAttribute("open");
                  }}
                  className="rounded-[var(--r-sm)] px-3 py-2.5 text-sm font-semibold text-[var(--text-soft)] hover:bg-[var(--paper)] hover:text-[var(--ink)]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
