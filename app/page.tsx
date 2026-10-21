// 홈(/): 팀과 문제. 인스타툰은 서비스 하나로 /services/instatoon 에 둔다.
import Image from "next/image";
import { Logo } from "@/components/logo";
import { Reveal } from "@/components/reveal";
import { TrackedLink } from "@/components/tracked-link";
import { Rich } from "@/components/rich";
import { ArrowRight } from "@/components/icons";
import { CardRow, CastCircle, COUNT } from "@/components/page-parts";
import { site } from "@/content/site";
import { bottlenecks, hero, homeFinal, makers, problem, quotes, sample, services, work } from "@/content/home";

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
          <TrackedLink href="/#services" event="cta_click" eventParams={{ location: "hero_card", label: hero.card.cta }} className="relative mt-7 flex h-14 items-center justify-center rounded-[8px] bg-white text-lg font-semibold text-[var(--ink)]">
            {hero.card.cta}
          </TrackedLink>
          <div className="relative mt-6">
            <CardRow href="/consult" title={hero.card.rowTitle} sub={hero.card.rowSub} />
          </div>
        </div>
      </section>

      {/* 왜 설명인가: 고객이 멈추는 곳 + 출처 있는 숫자 */}
      <Reveal>
        <section className="shell pb-24 pt-4" id="why">
          <h2 className="t-h1 text-center">
            <Rich text={problem.title} />
          </h2>
          <p className="lead-grey mx-auto mt-5 max-w-xl text-center text-lg">{problem.sub}</p>
          <ul className="mt-16 grid gap-x-12 gap-y-16 md:grid-cols-2">
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

      {/* 서비스: 인스타툰은 그중 하나. 상태를 솔직하게 붙인다 */}
      <Reveal>
        <section className="shell scroll-mt-10 py-20" id="services">
          <span className="eyebrow text-center">{services.eyebrow}</span>
          <h2 className="t-h1 mt-4 text-center">
            <Rich text={services.title} />
          </h2>
          <p className="lead-grey mx-auto mt-5 max-w-lg text-center text-lg">{services.sub}</p>
          <ul className="mt-14 grid gap-6 md:grid-cols-2">
            {services.items.map((sv) => (
              <li key={sv.t} className={`${sv.live ? "bg-white" : "dash"} flex flex-col rounded-[var(--r-lg)] p-8`}>
                <span className={`w-fit rounded-full px-3 py-1 text-xs font-semibold ${sv.live ? "bg-[var(--ink)] text-white" : "border border-[var(--line-strong)] text-[var(--text-soft)]"}`}>{sv.status}</span>
                <h3 className="mt-5 text-2xl font-semibold">{sv.t}</h3>
                <p className="lead-grey mt-2 flex-1 leading-relaxed">{sv.d}</p>
                <TrackedLink href={sv.href} event="cta_click" eventParams={{ location: "services", label: sv.t }} className={`${sv.live ? "btn-dark" : "btn-chip"} mt-6 inline-flex h-11 w-fit items-center gap-1.5 px-5 font-semibold`}>
                  {sv.cta}
                  <ArrowRight size={14} />
                </TrackedLink>
              </li>
            ))}
          </ul>
        </section>
      </Reveal>

      {/* 견본 카드 + 분야 태그 카드 */}
      <Reveal>
        <section className="shell grid gap-8 py-16 lg:grid-cols-[1.5fr_1fr]" id="sample">
          <div className="overflow-hidden rounded-[var(--r-lg)] bg-white">
            <div className="relative h-72 overflow-hidden sm:h-80">
              {work.pages.map((pg, i) => (
                <figure
                  key={pg.src}
                  className="absolute top-8 w-[23%] max-w-36 sm:top-6"
                  style={{ left: `${[15, 38, 62, 85][i]}%`, transform: `translateX(-50%) rotate(${[-8, -3, 3, 8][i]}deg) translateY(${[16, 4, 4, 16][i]}px)`, zIndex: [1, 2, 2, 1][i] }}
                >
                  <Image src={pg.src} alt="" aria-hidden="true" width={864} height={1080} className="w-full rounded-md border border-[var(--line)] bg-white shadow-xl" />
                  <figcaption className="mt-2 text-center text-[11px] font-semibold text-[var(--text-soft)]">{pg.label}</figcaption>
                </figure>
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

      {/* 같이 풀고 싶은 병목: 캐주얼 미팅으로 들어온 분이 머무는 곳 */}
      <Reveal>
        <section className="shell py-20" id="bottlenecks">
          <span className="eyebrow text-center">{bottlenecks.eyebrow}</span>
          <h2 className="t-h1 mt-4 text-center">
            <Rich text={bottlenecks.title} />
          </h2>
          <p className="lead-grey mx-auto mt-5 max-w-xl text-center text-lg">{bottlenecks.sub}</p>
          <ul className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {bottlenecks.items.map((b) => (
              <li key={b.t} className="dash p-7">
                <p className="text-xl font-semibold">{b.t}</p>
                <p className="lead-grey mt-2">{b.d}</p>
              </li>
            ))}
          </ul>
          <div className="mt-10 text-center">
            <TrackedLink href="/consult" event="cta_click" eventParams={{ location: "bottlenecks", label: bottlenecks.cta }} className="btn-dark inline-flex h-12 items-center px-6 font-semibold">
              {bottlenecks.cta}
            </TrackedLink>
          </div>
        </section>
      </Reveal>

      {/* 마무리: 검정 바탕, 큰 제목 + 괄호 명조, 오른쪽 단계 카드, 아래 진행자들 */}
      <section className="bg-black text-white" id="apply">
        <div className="shell grid gap-14 pb-10 pt-20 sm:pt-24 lg:grid-cols-[1.35fr_1fr]">
          <div className="flex flex-col">
            <Logo height={26} tone="white" />
            <h2 className="t-display mt-10">
              <Rich text={homeFinal.title} />
              <br />
              <span className="font-[family-name:var(--font-serif)] font-medium">{homeFinal.aside}</span>
            </h2>
            <p className="mt-6 max-w-md text-lg text-[#9a9a9a]">{homeFinal.sub}</p>
            <div className="mt-auto flex items-end pt-16" aria-hidden="true">
              {["rabbit", "postman", "longhair", "jelly-yellow", "popcorn"].map((k) => (
                <CastCircle key={k} k={k} className="-ml-4 h-20 w-20 border-4 border-black first:ml-0 sm:-ml-5 sm:h-36 sm:w-36" />
              ))}
            </div>
          </div>
          <div className="self-start rounded-[var(--r-lg)] bg-[#1a1a1a] p-7 sm:p-8">
            <ol className="flex flex-col gap-2.5">
              {homeFinal.steps.map((s, i) => (
                <li key={s} className="flex items-center gap-4 rounded-[10px] border border-[#2c2c2c] px-4 py-4">
                  <span className="num grid h-8 w-8 place-items-center rounded-[8px] bg-white text-sm font-semibold text-black">{i + 1}</span>
                  <span className="font-semibold">{s}</span>
                </li>
              ))}
            </ol>
            <TrackedLink href="/consult" event="cta_click" eventParams={{ location: "final_cta", label: homeFinal.cta }} className="mt-6 flex h-14 items-center justify-center rounded-[8px] bg-white text-lg font-semibold text-black">
              {homeFinal.cta}
            </TrackedLink>
          </div>
        </div>
      </section>
    </div>
  );
}
