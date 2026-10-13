import type { Metadata } from "next";
import { ConsultForm } from "@/components/consult-form";
import { Check } from "@/components/icons";
import { consultIntro } from "@/content/consult";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "무료 상담 신청",
  description: "사무소 분야를 알려 주시면 어떤 이야기를 연재할 수 있을지 살펴보고 미팅에서 보여 드립니다. TEAM DOA 무료 상담 신청.",
  alternates: { canonical: "/consult" },
  openGraph: { title: `무료 상담 신청 · ${site.name}`, description: "사무소 분야만 알려 주세요.", url: "/consult", siteName: site.name, locale: "ko_KR", type: "website" },
};

export default function ConsultPage() {
  const c = consultIntro;
  return (
    <section className="section pt-14 sm:pt-20" aria-labelledby="consult-heading">
      <div className="shell grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-16">
        <div className="lg:sticky lg:top-[104px]">
          <span className="tag">{c.kicker}</span>
          <h1 id="consult-heading" className="t-h1 mt-6 whitespace-pre-line">
            {c.title}
          </h1>
          <p className="t-lead mt-6">{c.sub}</p>
          <ul className="mt-8 border-t border-[var(--line-strong)]">
            {c.bullets.map((b) => (
              <li key={b} className="flex gap-3 border-b border-[var(--line)] py-3.5 text-[15px] text-[var(--text-soft)]">
                <Check className="mt-1.5 shrink-0 text-[var(--accent)]" size={14} />
                {b}
              </li>
            ))}
          </ul>
          <div className="mt-8 rounded-[var(--r)] bg-white p-5">
            <p className="text-sm font-semibold">{c.trialTitle}</p>
            <ul className="mt-2 space-y-1 text-sm text-[var(--text-soft)]">
              {c.trial.map((t) => (
                <li key={t}>· {t}</li>
              ))}
            </ul>
            <p className="mt-3 text-xs text-[var(--text-soft)]">{c.trialNot}</p>
          </div>
          <div className="mt-8">
            <p className="text-sm font-semibold text-[var(--text-soft)]">{c.contactTitle}</p>
            <a href={`mailto:${site.email}`} className="mt-2 inline-block font-semibold underline-offset-4 hover:text-[var(--accent-strong)] hover:underline">
              {site.email}
            </a>
          </div>
        </div>
        <ConsultForm />
      </div>
    </section>
  );
}
