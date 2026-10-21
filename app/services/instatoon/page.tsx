import type { Metadata } from "next";
import Image from "next/image";
import { Logo } from "@/components/logo";
import { Reveal } from "@/components/reveal";
import { TrackedLink } from "@/components/tracked-link";
import { Rich } from "@/components/rich";
import { ArrowRight, Check } from "@/components/icons";
import { FieldTopics } from "@/components/field-topics";
import { BenefitVisual, CardRow, CastCircle, EpisodeStep, HostAvatar } from "@/components/page-parts";
import { CTA_LABEL, site } from "@/content/site";
import { benefits, conditions, episode, faq, finalCta, instaStats, now, process, sample, topics, why } from "@/content/home";

// 서비스 하나: 인스타툰 연재. 콜드 세일즈 메일의 링크는 이 페이지로 보낸다.
export const metadata: Metadata = {
  title: "인스타툰 연재",
  description: "전문직 사무소의 상담 사례를 각색해 매주 인스타툰으로 연재합니다. 광고 규정 점검까지 함께 합니다.",
  alternates: { canonical: "/services/instatoon" },
  openGraph: { title: `인스타툰 연재 · ${site.name}`, url: "/services/instatoon", siteName: site.name, locale: "ko_KR", type: "website" },
};

export default function InstatoonPage() {
  return (
    <div className="rails">
      {/* 지금 맡고 있는 일: 인스타툰 연재. 쓰임새 세 가지 + 인스타 숫자 */}
      <Reveal>
        <section className="shell pb-16 pt-6" id="now">
          <span className="eyebrow text-center">{now.eyebrow}</span>
          <h1 className="t-display mt-4 text-center">
            <Rich text={now.title} />
          </h1>
          <p className="lead-grey mx-auto mt-5 max-w-lg text-center text-lg">{now.sub}</p>
          <ol className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-3">
            {why.items.map((w, i) => (
              <li key={w.t} className="border-t border-[var(--line-strong)] pt-5">
                <span className="num text-sm text-[var(--text-soft)]">0{i + 1}</span>
                <h3 className="mt-2 text-xl font-semibold">{w.t}</h3>
                <p className="lead-grey mt-2 leading-relaxed">{w.d}</p>
              </li>
            ))}
          </ol>
          <ul className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-3">
            {instaStats.map((st) => (
              <li key={st.q} className="rounded-[var(--r)] bg-white p-5">
                <p className="font-semibold leading-snug">{st.q}</p>
                <p className="lead-grey mt-1 text-xs">{st.meta}</p>
              </li>
            ))}
          </ul>
        </section>
      </Reveal>

      {/* 3단계: 가운데 큰 제목 + 그라데이션 카드 세 장 */}
      <Reveal>
        <section className="shell pb-10" id="process">
          <h2 className="t-h1 text-center">
            <Rich text={process.title} />
          </h2>
          <ol className="mt-14 grid gap-8 md:grid-cols-3">
            {process.steps.map((s, i) => (
              <li key={s.t} className={`${s.tone} relative flex min-h-[25rem] flex-col overflow-hidden rounded-[var(--r-lg)] p-8 text-white`}>
                <div className="flex flex-1 items-center justify-center pb-8">
                  {i === 0 ? (
                    <div className="memo tilt-l w-full max-w-[15rem] text-[var(--ink)]">
                      <p className="text-xs font-semibold text-[var(--text-soft)]">사연 메모</p>
                      <p className="hand mt-1 text-lg leading-snug">
                        {process.memo.map((l) => (
                          <span key={l} className="block">
                            {l}
                          </span>
                        ))}
                      </p>
                    </div>
                  ) : i === 1 ? (
                    <ul className="w-full max-w-[15rem] rounded-[var(--r)] bg-white p-4 text-sm text-[var(--ink)] shadow-xl">
                      {process.checks.map((c) => (
                        <li key={c} className="flex items-center justify-between border-b border-[var(--line)] py-2 last:border-0">
                          {c}
                          <Check size={16} className="text-[#5f8f6a]" />
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="relative h-44 w-full">
                      <Image src={sample.pages[1]?.src ?? sample.pages[0].src} alt="" aria-hidden="true" width={864} height={1080} className="absolute left-[18%] top-0 w-28 -rotate-6 rounded-md shadow-xl" />
                      <Image src={sample.pages[0].src} alt="" aria-hidden="true" width={864} height={1080} className="absolute right-[18%] top-3 w-28 rotate-6 rounded-md shadow-xl" />
                    </div>
                  )}
                </div>
                <h3 className="text-2xl font-semibold">{s.t}</h3>
                <p className="mt-2 text-[15px] leading-relaxed opacity-90">{s.d}</p>
              </li>
            ))}
          </ol>
          <p className="lead-grey mt-8 text-center">{process.foot}</p>
        </section>
      </Reveal>

      {/* 장점: 영문 라벨 + 큰 제목 + 정사각 그라데이션 카드 다섯 */}
      <Reveal>
        <section className="shell py-20">
          <span className="eyebrow text-center">{benefits.eyebrow}</span>
          <h2 className="t-h1 mt-4 text-center">
            <Rich text={benefits.title} />
          </h2>
          <p className="lead-grey mx-auto mt-5 max-w-lg text-center text-lg">{benefits.sub}</p>
          <ul className="mt-14 grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-3 lg:grid-cols-5">
            {benefits.items.map((b) => {
              return (
                <li key={b.t}>
                  <div className={`${b.tone} grid aspect-square place-items-center overflow-hidden rounded-[var(--r-lg)]`} aria-hidden="true">
                    <BenefitVisual kind={b.visual} />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold">{b.t}</h3>
                  <p className="lead-grey mt-1 text-sm leading-relaxed">{b.d}</p>
                </li>
              );
            })}
          </ul>
        </section>
      </Reveal>

      {/* 견본 한 화: 메모 → 콘티 → 점검표 → 완성본을 실물 그대로 네 칸에 */}
      <Reveal>
        <section className="shell py-20" id="episode">
          <h2 className="t-h1 text-center">
            <Rich text={episode.title} />
          </h2>
          <p className="lead-grey mx-auto mt-5 max-w-lg text-center text-lg">{episode.sub}</p>
          <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <EpisodeStep n={1} step={episode.memo.step} tone="g-warm">
              <div className="memo tilt-l text-[var(--ink)]">
                <p className="flex flex-wrap items-center justify-between gap-1 text-xs font-semibold text-[var(--text-soft)]">
                  {episode.memo.field}
                  <span className="rounded-full bg-[var(--accent-tint)] px-2 py-0.5 font-normal text-[var(--accent-strong)]">{episode.memo.purpose}</span>
                </p>
                <p className="hand mt-2 text-lg leading-snug">
                  {episode.memo.lines.map((l) => (
                    <span key={l} className="block">
                      {l}
                    </span>
                  ))}
                </p>
                <p className="mt-3 border-t border-dashed border-[var(--line-strong)] pt-2 text-xs leading-relaxed">
                  <span className="font-semibold">전하고 싶은 것</span> {episode.memo.lesson}
                </p>
              </div>
              <p className="mt-4 text-xs font-semibold text-white">{episode.memo.deidTitle}</p>
              <p className="mt-1.5 flex flex-wrap gap-1.5 text-xs">
                {episode.memo.deid.map((d) => (
                  <span key={d} className="rounded-full bg-white/85 px-2 py-0.5 text-[var(--ink)]">
                    <span className="line-through opacity-50">{d}</span> 바꿈
                  </span>
                ))}
              </p>
            </EpisodeStep>
            <EpisodeStep n={2} step={episode.conti.step} tone="g-cool">
              <div className="rounded-[var(--r)] bg-white p-4 text-[13px] leading-relaxed text-[var(--ink)] shadow-xl">
                <p className="flex justify-between text-[11px] text-[var(--text-soft)]">
                  <span>{episode.conti.page}</span>
                  <span>{episode.conti.meta}</span>
                </p>
                {episode.conti.cuts.map((c, i) => (
                  <div key={i} className="mt-3 border-t border-[var(--line)] pt-3">
                    <p className="text-[11px] font-semibold text-[var(--text-soft)]">컷 {i + 1}</p>
                    <p className="mt-1 italic">{c.narration}</p>
                    {c.lines.map((l) => (
                      <p key={l.text} className="mt-1">
                        <span className="font-semibold">{l.who}</span> {"inner" in l && l.inner ? `(속으로) ${l.text}` : l.text}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            </EpisodeStep>
            <EpisodeStep n={3} step={episode.check.step} tone="g-green">
              <div className="rounded-[var(--r)] bg-white p-4 text-[13px] text-[var(--ink)] shadow-xl">
                <p className="text-[11px] font-semibold text-[var(--text-soft)]">{episode.check.title}</p>
                <ul className="mt-1">
                  {episode.check.items.map((c) => (
                    <li key={c} className="flex items-center justify-between gap-2 border-b border-[var(--line)] py-1.5">
                      {c}
                      <Check size={14} className="shrink-0 text-[#5f8f6a]" />
                    </li>
                  ))}
                </ul>
                {episode.check.fix && (
                  <>
                    <p className="mt-4 text-[11px] font-semibold text-[var(--text-soft)]">{episode.check.editTitle}</p>
                    <div className="mt-1.5 rounded-md bg-[#fbf3e6] p-2.5 text-xs leading-relaxed">
                      <p className="font-semibold">{episode.check.fix.where}</p>
                      <p className="mt-0.5">
                        {episode.check.fix.problem} → {episode.check.fix.done}
                      </p>
                    </div>
                  </>
                )}
                <p className="mt-3 text-[11px] leading-snug text-[var(--text-soft)]">{episode.check.note}</p>
              </div>
            </EpisodeStep>
            <EpisodeStep n={4} step={episode.final.step} tone="g-sun">
              <div className="mx-auto w-full max-w-[17rem] overflow-hidden rounded-[var(--r)] bg-white text-[var(--ink)] shadow-xl md:max-w-none">
                <div className="relative">
                  <Image src={episode.final.image} alt={`견본 ${episode.final.ep} 원고 장`} width={864} height={1080} className="aspect-[4/5] w-full object-cover" />
                  <span className="absolute left-3 top-3 rounded-full bg-[var(--ink)] px-2.5 py-0.5 text-xs font-semibold text-white">{episode.final.ep}</span>
                </div>
                <div className="border-b border-[var(--line)] px-3.5 pt-3">
                  <p className="font-[family-name:var(--font-serif)] text-[15px] font-medium leading-snug tracking-[-0.03em]">
                    <Rich text={episode.final.title} />
                  </p>
                  <p className="mt-1 pb-3 text-[10px] text-[var(--text-soft)]">{episode.final.label}</p>
                </div>
                <div className="p-3.5 text-xs leading-relaxed">
                  <p>{episode.final.caption}</p>
                  <p className="mt-1 text-[#4a6c9b]">{episode.final.tags.join(" ")}</p>
                </div>
              </div>
              <p className="mx-auto mt-3 max-w-[17rem] text-[11px] leading-snug text-white md:max-w-none">{episode.final.clientLabel}</p>
            </EpisodeStep>
          </ol>
          <p className="lead-grey mx-auto mt-10 max-w-xl text-center">{episode.foot}</p>
        </section>
      </Reveal>

      {/* 분야별 소재: 왼쪽 큰 제목, 오른쪽 분야 탭 카드 */}
      <Reveal>
        <section className="shell grid gap-12 py-20 lg:grid-cols-[1fr_1.3fr] lg:items-start" id="topics">
          <div className="lg:sticky lg:top-10">
            <h2 className="t-h1">
              <Rich text={topics.title} />
            </h2>
            <p className="lead-grey mt-5 max-w-sm text-lg">{topics.sub}</p>
            <div className="mt-10 hidden items-end lg:flex" aria-hidden="true">
              {["cider", "jelly-red", "fox"].map((k) => (
                <CastCircle key={k} k={k} className="-ml-4 h-24 w-24 border-4 border-[var(--page)] first:ml-0" />
              ))}
            </div>
          </div>
          <div className="rounded-[var(--r-lg)] bg-white p-7 sm:p-10">
            <FieldTopics fields={topics.fields} checkLabel={topics.checkLabel} purposes={topics.purposes} />
          </div>
        </section>
      </Reveal>

      {/* 시작하는 법: 가격 대신 "한 편 보고 정한다". 왼쪽 시안 카드 + 오른쪽 견본 장, 원칙 카드, 가격 안내 한 줄 + 상담 버튼, 접는 표 */}
      <Reveal>
        <section className="shell scroll-mt-10 py-24" id="start">
          <span className="eyebrow text-center">{conditions.eyebrow}</span>
          <h2 className="t-h1 mt-4 text-center">
            <Rich text={conditions.title} />
          </h2>
          <p className="lead-grey mx-auto mt-5 max-w-2xl text-center">{conditions.sub}</p>
          <div className="mt-14 grid gap-8 lg:grid-cols-[1.2fr_1fr]">
            <div className="rounded-[var(--r-lg)] bg-white p-8 sm:p-10">
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-black px-3.5 py-1.5 text-sm font-semibold text-white">
                <span className="h-2.5 w-2.5 rounded-full bg-[#f2c14e]" aria-hidden="true" />
                {conditions.trialPill}
              </span>
              <p className="mt-6 text-2xl font-semibold tracking-[-0.03em]">{conditions.trialTitle}</p>
              <ul className="mt-4">
                {conditions.trial.map((t) => (
                  <li key={t} className="flex items-center gap-3 border-b border-[var(--line)] py-3 last:border-0">
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full border-[1.5px] border-[var(--ink)]">
                      <Check size={12} />
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
              <p className="lead-grey mt-4 text-sm">{conditions.trialNot}</p>
            </div>
            <div className="g-warm flex min-h-[22rem] items-center justify-center overflow-hidden rounded-[var(--r-lg)] px-6 py-10" aria-hidden="true">
              <Image src={sample.pages[0].src} alt="" width={864} height={1080} className="w-[44%] max-w-[15rem] -rotate-[8deg] rounded-lg shadow-2xl" />
              <Image src={sample.pages[1]?.src ?? sample.pages[0].src} alt="" width={864} height={1080} className="-ml-[6%] mt-10 w-[44%] max-w-[15rem] rotate-[6deg] rounded-lg shadow-2xl" />
            </div>
          </div>
          <ul className="mt-8 grid gap-8 md:grid-cols-2">
            {conditions.notes.map((n) => (
              <li key={n.t} className="dash p-8">
                <p className="flex items-center gap-2.5 text-xl font-semibold">
                  <span className="grid h-6 w-6 place-items-center rounded-full border-[1.5px] border-[var(--ink)]">
                    <Check size={12} />
                  </span>
                  {n.t}
                </p>
                <p className="lead-grey mt-2">{n.d}</p>
              </li>
            ))}
          </ul>
          <div className="mt-12 flex flex-col items-center gap-4 text-center">
            <p className="lead-grey max-w-xl text-sm">{conditions.priceNote}</p>
            <TrackedLink href="/consult" event="cta_click" eventParams={{ location: "start", label: conditions.cta }} className="inline-flex items-center gap-3 rounded-[10px] bg-black py-2 pl-2 pr-5 font-semibold text-white">
              <span className="g-sun grid h-11 w-11 place-items-center rounded-[8px]">
                <ArrowRight size={18} />
              </span>
              {conditions.cta}
            </TrackedLink>
          </div>
          <div className="mx-auto mt-10 max-w-3xl">
            {[conditions.spec, conditions.terms].map((block) => (
              <details key={block.title} className="faq">
                <summary>{block.title}</summary>
                <dl className="pb-5 text-[15px]">
                  {block.rows.map((r) => (
                    <div key={r.k} className="grid gap-1 border-b border-[var(--line)] py-3 last:border-0 sm:grid-cols-[7rem_1fr] sm:gap-4">
                      <dt className="font-semibold">{r.k}</dt>
                      <dd className="lead-grey leading-relaxed">{r.v}</dd>
                    </div>
                  ))}
                </dl>
              </details>
            ))}
          </div>
        </section>
      </Reveal>

      {/* FAQ: 왼쪽 큰 제목 + 아코디언, 오른쪽 색 카드 */}
      <section className="shell py-24" id="faq">
        <div className="grid gap-14 lg:grid-cols-[1.45fr_1fr] lg:items-start">
          <div>
            <h2 className="t-display">
              <Rich text={faq.title} />
            </h2>
            <div className="mt-10">
              {faq.items.map((f) => (
                <details key={f.q} className="faq">
                  <summary>{f.q}</summary>
                  <p className="lead-grey pb-5 pr-8">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
          <div className="g-warm rounded-[var(--r-lg)] p-8 text-white shadow-2xl sm:p-9 lg:sticky lg:top-10">
            <HostAvatar size="h-28 w-28 border-4 border-black/80" />
            <p className="mt-6 text-4xl font-semibold leading-[1.1] tracking-[-0.045em]">
              <Rich text={faq.card.title} />
            </p>
            <TrackedLink href="/consult" event="cta_click" eventParams={{ location: "faq_card", label: faq.card.cta }} className="mt-7 flex h-14 items-center justify-center rounded-[8px] bg-white text-lg font-semibold text-[var(--ink)]">
              {faq.card.cta}
            </TrackedLink>
            <div className="mt-6">
              <CardRow href={`mailto:${site.email}`} title={faq.card.mailTitle} sub={site.email} />
            </div>
          </div>
        </div>
      </section>

      {/* 마무리: 검정 바탕, 큰 제목 + 괄호 명조, 오른쪽 단계 카드, 아래 진행자들 */}
      <section className="bg-black text-white" id="apply">
        <div className="shell grid gap-14 pb-10 pt-20 sm:pt-24 lg:grid-cols-[1.35fr_1fr]">
          <div className="flex flex-col">
            <Logo height={26} tone="white" />
            <h2 className="t-display mt-10">
              <Rich text={finalCta.title} />
              <br />
              <span className="font-[family-name:var(--font-serif)] font-medium">{finalCta.aside}</span>
            </h2>
            <p className="mt-6 max-w-md text-lg text-[#9a9a9a]">{finalCta.sub}</p>
            <div className="mt-auto flex items-end pt-16" aria-hidden="true">
              {["rabbit", "postman", "longhair", "jelly-yellow", "popcorn"].map((k) => (
                <CastCircle key={k} k={k} className="-ml-4 h-20 w-20 border-4 border-black first:ml-0 sm:-ml-5 sm:h-36 sm:w-36" />
              ))}
            </div>
          </div>
          <div className="self-start rounded-[var(--r-lg)] bg-[#1a1a1a] p-7 sm:p-8">
            <ol className="flex flex-col gap-2.5">
              {finalCta.steps.map((s, i) => (
                <li key={s} className="flex items-center gap-4 rounded-[10px] border border-[#2c2c2c] px-4 py-4">
                  <span className="num grid h-8 w-8 place-items-center rounded-[8px] bg-white text-sm font-semibold text-black">{i + 1}</span>
                  <span className="font-semibold">{s}</span>
                </li>
              ))}
            </ol>
            <TrackedLink href="/consult" event="cta_click" eventParams={{ location: "final_cta", label: CTA_LABEL }} className="mt-6 flex h-14 items-center justify-center rounded-[8px] bg-white text-lg font-semibold text-black">
              {finalCta.cta}
            </TrackedLink>
          </div>
        </div>
      </section>
    </div>
  );
}
