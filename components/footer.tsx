import Link from "next/link";
import { footer, nav, site } from "@/content/site";
import { Logo } from "./logo";
import { TrackedLink } from "./tracked-link";

export function Footer() {
  const biz = [site.bizNo && `사업자등록번호 ${site.bizNo}`, site.address].filter(Boolean).join(" · ");
  return (
    <footer className="on-dark border-t border-[var(--line-dark)]">
      <div className="shell grid gap-12 py-16 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <Link href="/" className="inline-flex items-center">
            <Logo height={22} tone="white" />
          </Link>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-[var(--on-dark-soft)]">{footer.blurb}</p>
          <p className="mt-4 text-sm text-[var(--on-dark-soft)]">
            {site.makers.map((m) => (
              <span key={m.name} className="mr-4 inline-block">
                <span className="font-semibold text-[var(--on-dark)]">{m.name}</span> {m.role}
              </span>
            ))}
          </p>
        </div>
        <nav aria-label="사이트 메뉴" className="flex flex-col gap-3">
          <span className="mb-1 text-xs font-semibold text-[var(--on-dark-soft)]">{footer.menuTitle}</span>
          {nav.map((m) => (
            <Link key={m.href} href={m.href} className="w-fit text-sm text-[var(--on-dark)] opacity-85 transition-opacity hover:opacity-100">
              {m.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-col gap-3">
          <span className="mb-1 text-xs font-semibold text-[var(--on-dark-soft)]">{footer.contactTitle}</span>
          <a href={`mailto:${site.email}`} className="w-fit text-sm text-[var(--on-dark)] opacity-85 hover:opacity-100">
            {site.email}
          </a>
          {site.phone ? (
            <a href={`tel:${site.phone.replace(/-/g, "")}`} className="w-fit text-sm text-[var(--on-dark)] opacity-85 hover:opacity-100">
              {site.phone}
            </a>
          ) : null}
          <TrackedLink href="/consult" event="cta_click" eventParams={{ location: "footer", label: footer.cta }} className="btn btn-ghost-dark btn-sm mt-2 w-fit">
            {footer.cta}
          </TrackedLink>
        </div>
      </div>
      <div className="shell flex flex-col gap-2 border-t border-[var(--line-dark)] py-8 text-xs text-[var(--on-dark-soft)]">
        <p>{footer.notice}</p>
        {biz ? <p>{`${site.name} · ${biz}`}</p> : null}
        <p>{footer.copyright}</p>
      </div>
    </footer>
  );
}
