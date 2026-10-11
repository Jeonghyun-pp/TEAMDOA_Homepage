import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { TrackedLink } from "@/components/tracked-link";
import { SectionLabel } from "@/components/section-label";
import { CtaBand } from "@/components/cta-band";
import { Host } from "@/components/host";
import { ArrowRight } from "@/components/icons";
import { CTA_LABEL } from "@/content/site";
import { finalCta, hero, offer, process, report, safety, styles, whyInsta, whyToon } from "@/content/home";

export default function Home() {
  return (
    <>
      {/* HERO: 메시지 / 창작툰 표지 견본 */}
      <section className="relative overflow-hidden">
        <div className="shell grid items-center gap-14 pb-20 pt-14 sm:pt-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 lg:pb-28 lg:pt-24">
          <div>
            <span className="tag">{hero.kicker}</span>
            <h1 className="t-display mt-6 whitespace-pre-line">{hero.title}</h1>
            <p className="t-lead mt-6 max-w-[34rem]">{hero.sub}</p>
            <p className="t-lead mt-3 max-w-[34rem]">{hero.sub2}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <TrackedLink href="/consult" event="cta_click" eventParams={{ location: "hero", label: CTA_LABEL }} className="btn btn-primary">
                {CTA_LABEL}
                <ArrowRight className="arrow" size={16} />
              </TrackedLink>
              <Link href="#offer" className="btn btn-secondary">
                {hero.secondary}
              </Link>
            </div>
            <p className="mt-6 text-sm font-semibold text-[var(--accent-strong)]">{hero.note}</p>
          </div>
          <figure className="relative mx-auto w-full max-w-[460px]">
            <div className="relative aspect-[4/5]">
              <Image src={hero.samples[1].src} alt={hero.samples[1].alt} width={864} height={1080} className="cut absolute right-0 top-0 w-[72%] rotate-[4deg]" />
              <Image src={hero.samples[0].src} alt={hero.samples[0].alt} width={864} height={1080} preload className="cut absolute bottom-0 left-0 w-[80%] -rotate-[2deg] shadow-[var(--lift)]" />
            </div>
            <figcaption className="src mt-4 text-center">{hero.samplesNote}</figcaption>
          </figure>
        </div>
      </section>

      {/* 01 받으실 것 */}
      <Reveal>
        <section className="section section-alt scroll-mt-16" id="offer">
          <div className="shell">
            <SectionLabel num="01">{offer.label}</SectionLabel>
            <h2 className="t-h2 mt-5">{offer.title}</h2>
            <div className="mt-12 grid items-center gap-10 lg:grid-cols-[0.8fr_auto_1.4fr] lg:gap-8">
              <div className="flex flex-col gap-5">
                <p className="text-sm font-bold text-[var(--text-soft)]">보내 주실 것</p>
                <div className="memo tilt-l">
                  <p className="font-bold">{offer.send.title}</p>
                  <p className="hand mt-2 text-xl leading-snug text-[var(--text-soft)]">
                    {offer.send.lines.map((l) => (
                      <span key={l} className="block">
                        {l}
                      </span>
                    ))}
                  </p>
                  <p className="src mt-3">{offer.send.note}</p>
                </div>
                <p className="text-center text-sm font-bold text-[var(--text-muted)]">{offer.send.or}</p>
                <p className="bubble bubble-left self-start">{offer.send.ask}</p>
                <p className="mt-2 text-sm font-semibold">{offer.send.rule}</p>
              </div>
              <div aria-hidden="true" className="hidden text-5xl font-bold text-[var(--accent)] lg:block">
                →
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-sm font-bold text-[var(--text-soft)]">받으실 것</p>
                {offer.items.map((it) => (
                  <div key={it.name} className="panel flex flex-col gap-1 p-5 sm:p-6">
                    <p className="text-xl font-extrabold tracking-[-0.02em]">
                      {it.name} <span className="ml-1 text-sm font-semibold text-[var(--text-soft)]">{it.meta}</span>
                    </p>
                    <p className="text-[15px] text-[var(--text-soft)]">{it.body}</p>
                  </div>
                ))}
                <p className="mt-2 text-sm font-semibold">{offer.also}</p>
                <p className="src">{offer.foot}</p>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* 02 왜 인스타그램: 큰 막대 하나 + 진행자 */}
      <Reveal>
        <section className="section">
          <div className="shell">
            <SectionLabel num="02">{whyInsta.label}</SectionLabel>
            <h2 className="t-h2 mt-5 whitespace-pre-line">{whyInsta.title}</h2>
            <div className="mt-12 grid items-end gap-10 lg:grid-cols-[1fr_220px]">
              <div>
                <p className="font-bold text-[var(--text-soft)]">{whyInsta.chartTitle}</p>
                <dl className="mt-6 flex flex-col gap-4">
                  {whyInsta.bars.map((b) => (
                    <div key={b.k} className="grid grid-cols-[6.5rem_1fr_3.5rem] items-center gap-3 sm:grid-cols-[9rem_1fr_6.5rem] sm:gap-5">
                      <dt className={`text-[15px] font-bold sm:text-lg ${b.hl ? "text-[var(--accent)]" : ""}`}>{b.k}</dt>
                      <dd className="h-10 sm:h-12">
                        <div className="bar-track">
                          <div className={`bar-fill ${b.hl ? "hl" : ""}`} style={{ width: `${b.v}%` }} />
                        </div>
                      </dd>
                      <dd className={`num whitespace-nowrap text-right text-2xl font-extrabold sm:text-4xl ${b.hl ? "text-[var(--accent)]" : ""}`}>{b.v}%</dd>
                    </div>
                  ))}
                </dl>
                <p className="src mt-4">{whyInsta.chartSrc}</p>
              </div>
              <Host {...whyInsta.host} className="hidden lg:flex" imgClass="w-28" />
            </div>
            <dl className="mt-14 grid grid-cols-1 gap-px border-t-2 border-[var(--line)] pt-6 sm:grid-cols-2 lg:grid-cols-4">
              {whyInsta.strip.map((s) => (
                <div key={s.d} className="py-3 sm:pr-6">
                  <dd className="num text-2xl font-extrabold sm:text-3xl">
                    {s.n}
                    <span className="ml-0.5 text-base font-bold">{s.unit}</span>
                  </dd>
                  <dt className="mt-1 text-sm text-[var(--text-soft)]">{s.d}</dt>
                </div>
              ))}
            </dl>
            <p className="src mt-4">{whyInsta.src}</p>
          </div>
        </section>
      </Reveal>

      {/* 03 왜 툰: 비교 막대 두 쌍 + 진행자 */}
      <Reveal>
        <section className="section section-alt">
          <div className="shell">
            <SectionLabel num="03">{whyToon.label}</SectionLabel>
            <h2 className="t-h2 mt-5 whitespace-pre-line">{whyToon.title}</h2>
            <p className="t-lead mt-4">{whyToon.sub}</p>
            <div className="mt-12 grid items-center gap-12 lg:grid-cols-[1fr_1fr_220px]">
              {whyToon.pairs.map((p) => (
                <div key={p.h}>
                  <h3 className="text-xl font-extrabold sm:text-2xl">{p.h}</h3>
                  <p className="text-sm text-[var(--text-soft)]">{p.what}</p>
                  {[
                    { k: "툰", v: p.toon, hl: true },
                    { k: "글", v: p.text, hl: false },
                  ].map((r) => (
                    <div key={r.k} className="mt-4 grid grid-cols-[2.5rem_1fr_4.5rem] items-center gap-3">
                      <span className={`font-bold ${r.hl ? "text-[var(--accent)]" : "text-[var(--text-soft)]"}`}>{r.k}</span>
                      <div className="h-10">
                        <div className="bar-track">
                          <div className={`bar-fill ${r.hl ? "hl" : ""}`} style={{ width: `${r.v}%` }} />
                        </div>
                      </div>
                      <b className={`num text-right text-3xl font-extrabold ${r.hl ? "text-[var(--accent)]" : "text-[var(--text-muted)]"}`}>{r.v}%</b>
                    </div>
                  ))}
                </div>
              ))}
              <Host {...whyToon.host} imgClass="w-36" className="lg:mt-0" />
            </div>
            <dl className="mt-14 grid gap-px border-t-2 border-[var(--line)] pt-6 sm:grid-cols-2">
              {whyToon.strip.map((s) => (
                <div key={s.n} className="py-3 sm:pr-8">
                  <dd className="num text-2xl font-extrabold sm:text-3xl">{s.n}</dd>
                  <dt className="mt-1 text-sm text-[var(--text-soft)]">{s.d}</dt>
                </div>
              ))}
            </dl>
            <p className="src mt-4">{whyToon.src}</p>
          </div>
        </section>
      </Reveal>

      {/* 04 하실 일: 6단계 + 추천 소재 메모 */}
      <Reveal>
        <section className="section scroll-mt-16" id="process">
          <div className="shell">
            <SectionLabel num="04">{process.label}</SectionLabel>
            <h2 className="t-h2 mt-5">{process.title}</h2>
            <ol className="relative mt-12 grid gap-6 sm:grid-cols-3 lg:grid-cols-6 lg:gap-2">
              <span aria-hidden="true" className="absolute left-[8%] right-[8%] top-7 hidden h-[3px] bg-[var(--line)] lg:block" />
              {process.steps.map((s, i) => (
                <li key={s.t} className="relative flex items-start gap-4 lg:flex-col lg:items-center lg:text-center">
                  <span
                    className={`num grid h-14 w-14 shrink-0 place-items-center rounded-full border-[3px] text-xl font-extrabold ${
                      s.you ? "border-[var(--accent)] bg-[var(--accent)] text-white" : "border-[var(--line)] bg-[var(--paper)] text-[var(--text-muted)]"
                    }`}
                  >
                    {i + 1}
                  </span>
                  <div>
                    <h3 className={`text-lg font-extrabold lg:mt-3 ${s.you ? "text-[var(--accent)]" : ""}`}>{s.t}</h3>
                    <p className="text-sm text-[var(--text-soft)]">{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="mt-6 flex items-center gap-2 text-sm text-[var(--text-soft)]">
              <span className="inline-block h-3 w-3 rounded-full bg-[var(--accent)]" aria-hidden="true" />
              {process.youLabel}
            </p>
            <div className="mt-14 grid items-end gap-10 lg:grid-cols-[240px_1fr]">
              <Host {...process.host} imgClass="w-36" />
              <ul className="grid gap-6 sm:grid-cols-3">
                {process.memos.map((m, i) => (
                  <li key={m.f} className={`memo ${i % 2 ? "tilt-r" : "tilt-l"}`}>
                    <p className="text-sm font-bold text-[var(--slate)]">{m.f}</p>
                    <p className="hand mt-1 whitespace-pre-line text-2xl leading-snug">{m.t}</p>
                    <p className="src mt-2">{m.p}</p>
                  </li>
                ))}
              </ul>
            </div>
            <p className="src mt-10">{process.foot}</p>
          </div>
        </section>
      </Reveal>

      {/* 05 규정 점검: 점검표 견본 + 진행자 */}
      <Reveal>
        <section className="section section-alt scroll-mt-16" id="safety">
          <div className="shell">
            <SectionLabel num="05">{safety.label}</SectionLabel>
            <h2 className="t-h2 mt-5">{safety.title}</h2>
            <div className="mt-12 grid gap-12 lg:grid-cols-[1.3fr_1fr]">
              <div className="panel panel-lift relative min-w-0 p-6 sm:p-9">
                <span className="badge-line absolute right-5 top-5">{safety.sheet.badge}</span>
                <h3 className="pr-24 text-lg font-extrabold sm:text-xl">{safety.sheet.title}</h3>
                <p className="mt-1 text-sm text-[var(--text-soft)]">{safety.sheet.meta}</p>
                <div className="mt-6">
                  <table className="w-full border-collapse text-sm sm:text-[15px]">
                    <thead>
                      <tr>
                        {safety.sheet.head.map((h, i) => (
                          <th key={h} className={`border-b-2 border-[var(--ink)] pb-2 text-sm font-bold text-[var(--text-soft)] ${i === 2 ? "text-right" : "text-left"}`}>
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {safety.sheet.rows.map((r) => (
                        <tr key={r.k} className="border-b border-[var(--line)] align-top">
                          <td className="w-24 py-4 pr-3 font-bold sm:w-40">{r.k}</td>
                          <td className="py-4 pr-3 text-[var(--text-soft)]">{r.c}</td>
                          <td className={`w-20 py-4 text-right font-bold sm:w-24 ${r.fix ? "text-[var(--accent)]" : "text-[var(--sage)]"}`}>{r.r}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-5 text-sm text-[var(--text-soft)]">{safety.sheet.sign}</p>
              </div>
              <div className="flex flex-col">
                <div className="flex items-end gap-2">
                  <Host src={safety.host.src} w={safety.host.w} h={safety.host.h} imgClass="w-32" />
                  <p className="bubble bubble-left mb-24">{safety.host.say}</p>
                </div>
                <ul className="mt-4">
                  {safety.points.map((p) => (
                    <li key={p.t} className="border-t border-[var(--line-strong)] py-4">
                      <p className="text-lg font-extrabold">{p.t}</p>
                      <p className="mt-0.5 text-sm text-[var(--text-soft)]">{p.d}</p>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 leading-relaxed">
                  {safety.found} <span className="text-sm text-[var(--text-muted)]">{safety.foundDate}</span>
                </p>
              </div>
            </div>
            <p className="src mt-10">{safety.src}</p>
          </div>
        </section>
      </Reveal>

      {/* 06 보고: 보고서 견본 + 문단 */}
      <Reveal>
        <section className="section">
          <div className="shell">
            <SectionLabel num="06">{report.label}</SectionLabel>
            <h2 className="t-h2 mt-5">{report.title}</h2>
            <div className="mt-12 grid items-center gap-12 lg:grid-cols-[1.15fr_1fr]">
              <div className="panel panel-lift relative p-6 sm:p-9">
                <span className="badge-line absolute right-5 top-5">{report.sample.badge}</span>
                <p className="pr-32 font-bold text-[var(--text-soft)]">{report.sample.title}</p>
                <dl className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {report.sample.metrics.map((m) => (
                    <div key={m.k} className={`rounded-[var(--r)] p-4 ${m.hl ? "bg-[var(--slate-tint)]" : "bg-[var(--paper)]"}`}>
                      <dt className="text-sm font-semibold text-[var(--text-soft)]">{m.k}</dt>
                      <dd className={`num mt-0.5 font-extrabold ${m.small ? "text-base text-[var(--text-soft)]" : "text-2xl sm:text-3xl"} ${m.hl ? "text-[var(--slate)]" : ""}`}>{m.v}</dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-5 rounded-[var(--r)] bg-[var(--accent-tint)] px-4 py-3 text-sm font-bold text-[var(--accent-strong)]">{report.sample.next}</p>
                <p className="src mt-3">{report.sample.note}</p>
              </div>
              <div className="relative">
                {report.paras.map((p, i) => (
                  <p key={p} className={`text-xl font-bold leading-relaxed sm:text-2xl ${i ? "mt-6" : ""}`}>
                    {p}
                  </p>
                ))}
                <p className="src mt-2">{report.src}</p>
                <Image src={report.host.src} alt="" aria-hidden="true" width={report.host.w} height={report.host.h} className="ml-auto mt-6 h-auto w-32" />
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* 07 그림체: 같은 장면 6가지 */}
      <Reveal>
        <section className="section section-alt scroll-mt-16" id="styles">
          <div className="shell">
            <SectionLabel num="07">{styles.label}</SectionLabel>
            <h2 className="t-h2 mt-5">{styles.title}</h2>
            <p className="t-lead mt-4">{styles.sub}</p>
            <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
              {styles.items.map((s) => (
                <li key={s.key}>
                  <figure>
                    <Image
                      src={`/img/style/${s.key}.webp`}
                      alt={`${s.name} 그림체 견본`}
                      width={720}
                      height={1080}
                      sizes="(min-width: 1024px) 190px, (min-width: 640px) 33vw, 50vw"
                      className="aspect-[4/5] w-full rounded-[var(--r)] border border-[var(--line)] bg-white object-cover object-top"
                    />
                    <figcaption className="mt-2 text-center text-sm font-bold">{s.name}</figcaption>
                  </figure>
                </li>
              ))}
            </ul>
            <p className="src mt-6">{styles.foot}</p>
          </div>
        </section>
      </Reveal>

      <CtaBand title={finalCta.title} sub={finalCta.sub} cta={finalCta.cta} location="final_cta" />
    </>
  );
}
