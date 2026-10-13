import Image from "next/image";
import { Logo } from "@/components/logo";
import { Reveal } from "@/components/reveal";
import { TrackedLink } from "@/components/tracked-link";
import { Rich } from "@/components/rich";
import { PlanPicker } from "@/components/plan-picker";
import { FieldTopics } from "@/components/field-topics";
import { ArrowRight, Check } from "@/components/icons";
import { CTA_LABEL, site } from "@/content/site";
import { benefits, episode, why, faq, finalCta, hero, makers, pricing, process, quotes, sample, topics, work } from "@/content/home";

// 진행자 얼굴을 동그란 틀에 넣은 작은 아바타
function HostAvatar({ src = "/img/host/wave.webp", size = "h-12 w-12" }: { src?: string; size?: string }) {
  return (
    <span className={`grid shrink-0 place-items-start overflow-hidden rounded-full bg-white/90 ${size}`}>
      <Image src={src} alt="" aria-hidden="true" width={430} height={565} className="mt-1 h-auto w-full" />
    </span>
  );
}

// 색 카드 맨 아래의 "아바타 + 두 줄 + 화살표" 줄
function CardRow({ href, title, sub }: { href: string; title: string; sub: string }) {
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

const COVERS = ["/img/sample/cover-pastel.webp", "/img/sample/cover-pen.webp", "/img/cast/woman.webp"];
const FEED = ["rabbit", "longhair", "postman", "fox", "jelly-yellow", "woman"];

// 장점 카드 안의 작은 물건: 연재 표지 묶음, 점검표, 메모, 가격, 인스타 프로필
function BenefitVisual({ kind }: { kind: string }) {
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
        <span className="block text-5xl font-semibold tracking-[-0.05em]">150</span>
        <span className="text-sm font-semibold">만원 / 월</span>
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
function CastCircle({ k, className }: { k: string; className: string }) {
  return <Image src={`/img/cast/${k}.webp`} alt="" aria-hidden="true" width={320} height={320} className={`rounded-full bg-[#fbf8f3] object-cover ${className}`} />;
}

// 견본 한 화 칸: 번호·단계 이름 + 색 바탕 위 실물
function EpisodeStep({ n, step, tone, children }: { n: number; step: string; tone: string; children: React.ReactNode }) {
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
const COUNT: Record<number, string> = { 1: "한", 2: "두", 3: "세", 4: "네", 5: "다섯" };

export default function Home() {
  return (
    <div className="rails">
      {/* HERO: 왼쪽 큰 제목 + 회색 한 줄, 오른쪽 색 카드 */}
      <section className="shell grid items-center gap-12 pb-24 pt-6 lg:grid-cols-[1.35fr_1fr] lg:gap-10 lg:pb-32 lg:pt-10">
        <div>
          <h1 className="t-display">
            <Rich text={hero.title} />
            <TrackedLink href="/samples" event="cta_click" eventParams={{ location: "hero_title", label: hero.sampleCta }} className="btn-chip ml-3 inline-flex translate-y-[-0.35em] items-center gap-1 align-middle text-sm font-semibold tracking-normal">
              {hero.sampleCta}
              <ArrowRight size={14} />
            </TrackedLink>
          </h1>
          <p className="lead-grey mt-7 text-lg leading-relaxed">
            <Rich text={hero.sub} />
          </p>
        </div>
        <div className="g-cool relative overflow-hidden rounded-[var(--r-lg)] p-7 text-white sm:p-8">
          <Image src={sample.pages[0].src} alt="" aria-hidden="true" width={864} height={1080} preload className="absolute -right-5 -top-3 w-24 rotate-[9deg] rounded-md shadow-xl sm:w-44" />
          <span className="relative inline-flex items-center gap-2 rounded-full bg-black px-3.5 py-1.5 text-sm font-semibold">
            <span className="h-2.5 w-2.5 rounded-full bg-[#f2c14e]" aria-hidden="true" />
            {hero.card.pill}
          </span>
          <p className="relative mt-20 text-4xl font-semibold leading-[1.1] tracking-[-0.045em] sm:mt-24 sm:text-[2.7rem]">
            <Rich text={hero.card.title} />
          </p>
          <p className="relative mt-3 opacity-90">{hero.card.sub}</p>
          <TrackedLink href="/#pricing" event="cta_click" eventParams={{ location: "hero_card", label: hero.card.cta }} className="relative mt-7 flex h-14 items-center justify-center rounded-[8px] bg-white text-lg font-semibold text-[var(--ink)]">
            {hero.card.cta}
          </TrackedLink>
          <div className="relative mt-6">
            <CardRow href="/consult" title={hero.card.rowTitle} sub={hero.card.rowSub} />
          </div>
        </div>
      </section>

      {/* 상담 사례로 한다면: 쓰임새 세 가지 + 바로 아래 출처 있는 숫자 */}
      <Reveal>
        <section className="shell pb-6 pt-4" id="why">
          <h2 className="t-h1 text-center">
            <Rich text={why.title} />
          </h2>
          <ol className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-3">
            {why.items.map((w, i) => (
              <li key={w.t} className="border-t border-[var(--line-strong)] pt-5">
                <span className="num text-sm text-[var(--text-soft)]">0{i + 1}</span>
                <h3 className="mt-2 text-xl font-semibold">{w.t}</h3>
                <p className="lead-grey mt-2 leading-relaxed">{w.d}</p>
              </li>
            ))}
          </ol>
        </section>
      </Reveal>
      {/* 숫자 인용: 위 쓰임새의 근거. 출처가 있는 숫자를 큰 명조로 */}
      <Reveal>
        <section className="shell pb-24 pt-14" id="numbers">
          <ul className="grid gap-x-12 gap-y-16 md:grid-cols-2">
            {quotes.map((q) => (
              <li key={q.q} className="text-center">
                <p className="text-balance font-[family-name:var(--font-serif)] text-2xl leading-snug tracking-[-0.04em] sm:text-[2rem]">“{q.q}”</p>
                <p className="mt-5 font-semibold">{q.who}</p>
                <p className="lead-grey text-sm">{q.meta}</p>
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

      {/* 만드는 사람: 점선 상자 한 단락 */}
      <Reveal>
        <section className="shell py-16">
          <div className="dash mx-auto max-w-[46rem] px-6 py-12 text-center sm:px-14 sm:py-16">
            <p className="text-balance font-[family-name:var(--font-serif)] text-[1.7rem] font-medium leading-snug tracking-[-0.04em] sm:text-[2.2rem]">
              <Rich text={makers.vision} />
            </p>
            <p className="mx-auto mt-5 max-w-md text-lg leading-relaxed">
              <Rich text={makers.visionSub} />
            </p>
            <hr className="mx-auto my-9 w-16 border-[var(--line-strong)]" />
            <p className="lead-grey leading-relaxed sm:text-lg">
              {makers.lead}{" "}
              {site.makers.map((m, i) => (
                <span key={m.name}>
                  {i ? ", " : ""}
                  <span className="text-[var(--ink)] underline underline-offset-4">{m.name}</span>
                </span>
              ))}{" "}
              {COUNT[site.makers.length] ?? site.makers.length} {makers.body}
            </p>
          </div>
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
                <p className="mt-4 text-[11px] font-semibold text-[var(--text-soft)]">{episode.check.editTitle}</p>
                <div className="mt-1.5 rounded-md bg-[#fbf3e6] p-2.5 text-xs leading-relaxed">
                  <p className="font-semibold">{episode.check.fix.where}</p>
                  <p className="mt-0.5">
                    {episode.check.fix.problem} → {episode.check.fix.done}
                  </p>
                </div>
                <p className="mt-3 text-[11px] leading-snug text-[var(--text-soft)]">{episode.check.note}</p>
              </div>
            </EpisodeStep>
            <EpisodeStep n={4} step={episode.final.step} tone="g-sun">
              <div className="mx-auto w-full max-w-[17rem] overflow-hidden rounded-[var(--r)] bg-white text-[var(--ink)] shadow-xl md:max-w-none">
                <div className="flex aspect-[4/5] flex-col bg-[#f6efe6] p-5">
                  <span className="w-fit rounded-full bg-[var(--ink)] px-2.5 py-0.5 text-xs font-semibold text-white">{episode.final.ep}</span>
                  <p className="mt-auto font-[family-name:var(--font-serif)] text-[1.35rem] font-medium leading-tight tracking-[-0.04em]">
                    <Rich text={episode.final.title} />
                  </p>
                  <p className="mt-3 text-xs leading-relaxed text-[var(--text-soft)]">{episode.final.line}</p>
                  <p className="mt-4 text-[10px] text-[var(--text-soft)]">{episode.final.label}</p>
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

      {/* 견본 카드 + 분야 태그 카드 */}
      <Reveal>
        <section className="shell grid gap-8 py-16 lg:grid-cols-[1.5fr_1fr]" id="sample">
          <div className="overflow-hidden rounded-[var(--r-lg)] bg-white">
            <div className="relative h-72 overflow-hidden sm:h-80">
              {work.pages.map((src, i) => (
                <Image
                  key={src}
                  src={src}
                  alt=""
                  aria-hidden="true"
                  width={720}
                  height={900}
                  className="absolute top-8 w-36 rounded-md border border-[var(--line)] bg-white shadow-xl sm:top-6 sm:w-48"
                  style={{ left: `calc(${[22, 50, 78][i]}% - 4.5rem)`, transform: `rotate(${[-7, 0, 7][i]}deg) translateY(${[14, 0, 14][i]}px)`, zIndex: [1, 2, 1][i] }}
                />
              ))}
            </div>
            <div className="px-7 pb-9 sm:px-14">
              <div className="grid gap-3 sm:grid-cols-2">
                {work.badges.map((b) => (
                  <div key={b.t} className="rounded-[var(--r)] border border-[var(--line)] p-4">
                    <p className="font-semibold">{b.t}</p>
                    <p className="lead-grey text-sm">{b.d}</p>
                  </div>
                ))}
              </div>
              <h3 className="mt-8 text-2xl font-semibold">{work.title}</h3>
              <p className="lead-grey mt-1 text-lg">{work.sub}</p>
              <TrackedLink href="/samples" event="cta_click" eventParams={{ location: "work", label: work.cta }} className="btn-dark mt-6 inline-flex h-11 items-center px-5 font-semibold">
                {work.cta}
              </TrackedLink>
            </div>
          </div>
          <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-[var(--r-lg)] bg-white px-8 py-14 text-center">
            <CastCircle k="fox" className="absolute -left-10 top-6 hidden h-28 w-28 border border-[var(--line)] sm:block" />
            <CastCircle k="woman" className="absolute -right-10 bottom-16 hidden h-28 w-28 border border-[var(--line)] sm:block" />
            <ul className="relative flex max-w-[20rem] flex-wrap justify-center gap-2">
              {work.tags.map((t) => (
                <li key={t} className="rounded-full border border-[var(--line-strong)] px-3.5 py-1.5 text-sm">
                  {t}
                </li>
              ))}
            </ul>
            <h3 className="relative mt-10 text-2xl font-semibold leading-snug">
              <Rich text={work.fieldsTitle} />
            </h3>
            <p className="lead-grey relative mt-2 text-lg">{work.fieldsSub}</p>
          </div>
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

      {/* 가격: 왼쪽 흰 카드 + 오른쪽 검정 카드, 아래 점선 카드 두 장 */}
      <Reveal>
        <section className="shell scroll-mt-10 py-24" id="pricing">
          <span className="eyebrow text-center">{pricing.eyebrow}</span>
          <h2 className="t-h1 mt-4 text-center">
            <Rich text={pricing.title} />
          </h2>
          <div className="mt-16 grid gap-8 lg:grid-cols-[1fr_1.45fr]">
            <div className="relative flex min-h-[26rem] flex-col justify-end rounded-[var(--r-lg)] bg-white p-8 sm:p-10">
              <Image src={sample.pages[0].src} alt="" aria-hidden="true" width={864} height={1080} className="absolute -left-4 -top-10 w-48 -rotate-[14deg] rounded-lg shadow-2xl sm:w-56" />
              <Image src={sample.pages[1]?.src ?? sample.pages[0].src} alt="" aria-hidden="true" width={864} height={1080} className="absolute left-36 -top-4 w-40 rotate-[8deg] rounded-lg shadow-2xl sm:left-44 sm:w-48" />
              <span className="relative inline-flex w-fit items-center gap-2 rounded-full bg-black px-3.5 py-1.5 text-sm font-semibold text-white">
                <span className="h-2.5 w-2.5 rounded-full bg-[#f2c14e]" aria-hidden="true" />
                {pricing.left.pill}
              </span>
              <p className="relative mt-5 text-4xl font-semibold leading-[1.1] tracking-[-0.045em] sm:text-5xl">
                <Rich text={pricing.left.title} />
              </p>
            </div>
            <div className="relative overflow-hidden rounded-[var(--r-lg)] bg-black p-8 text-white shadow-2xl sm:p-10">
              <div className="flex items-center justify-between gap-3 border-b border-dashed border-[#3b3632] pb-7">
                <p className="text-2xl font-semibold">{pricing.name}</p>
                <span className="rounded-md border border-[#3b3632] px-2.5 py-1 text-[11px] text-[var(--on-dark-soft)]">{pricing.tag}</span>
              </div>
              <p className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-1.5 text-sm text-[var(--on-dark-soft)]">
                <span className="font-semibold text-white">{pricing.derive.from}</span>
                {pricing.derive.to.map((t, i) => (
                  <span key={t} className="flex items-center gap-2">
                    {i === 0 ? <ArrowRight size={14} /> : <span aria-hidden="true">+</span>}
                    <span className="rounded-full border border-[var(--line-dark)] px-2.5 py-0.5">{t}</span>
                  </span>
                ))}
              </p>
              <p className="mt-1.5 text-xs text-[var(--on-dark-soft)]">{pricing.derive.note}</p>
              <div className="mt-7">
                <PlanPicker plans={pricing.plans} defaultPlan={pricing.defaultPlan} common={pricing.common} storiesLabel={pricing.storiesLabel} />
              </div>
              <TrackedLink href="/consult" event="cta_click" eventParams={{ location: "pricing", label: pricing.cta }} className="relative mt-8 inline-flex items-center gap-3 rounded-[10px] border border-[#3b3632] bg-[#1c1a19] py-2 pl-2 pr-5 font-semibold">
                <span className="g-sun grid h-11 w-11 place-items-center rounded-[8px]">
                  <ArrowRight size={18} />
                </span>
                {pricing.cta}
              </TrackedLink>
              <CastCircle k="raccoon" className="absolute -bottom-8 -right-8 h-36 w-36 border-4 border-[#1c1a19]" />
            </div>
          </div>
          <ul className="mt-8 grid gap-8 md:grid-cols-2">
            {pricing.notes.map((n) => (
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
          <table className="mx-auto mt-10 w-full max-w-3xl text-left text-sm">
            <tbody>
              {pricing.fieldPrice.map((r) => (
                <tr key={r.f} className="border-b border-[var(--line)]">
                  <th scope="row" className="py-3 pr-4 font-semibold">{r.f}</th>
                  <td className="lead-grey py-3">{r.p}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="lead-grey mt-4 text-center text-sm">{pricing.foot}</p>
          <div className="mx-auto mt-10 max-w-3xl">
            {[pricing.spec, pricing.terms].map((block) => (
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
