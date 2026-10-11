import Image from "next/image";
import { site } from "@/content/site";
import { ArrowRight } from "./icons";
import { TrackedLink } from "./tracked-link";

// 화면 전체 폭의 어두운 CTA 띠. 바로 아래 어두운 푸터와 이어진다.
export function CtaBand({ title, sub, cta, location }: { title: string; sub: string; cta: string; location: string }) {
  return (
    <section className="on-dark relative overflow-hidden" id="apply">
      <div className="shell relative grid gap-10 py-20 sm:py-24 lg:grid-cols-[1.4fr_1fr] lg:items-end">
        <div>
          <h2 className="t-h2 whitespace-pre-line text-[var(--on-dark)]">{title}</h2>
          <p className="mt-5 max-w-xl text-[var(--on-dark-soft)]">{sub}</p>
        </div>
        <div className="flex flex-col gap-4 lg:items-end">
          <Image src="/img/host/wave.webp" alt="" width={430} height={565} className="hidden h-auto w-36 lg:block" aria-hidden="true" />
          <TrackedLink href="/consult" event="cta_click" eventParams={{ location, label: cta }} className="btn btn-light w-full sm:w-auto">
            {cta}
            <ArrowRight className="arrow" size={16} />
          </TrackedLink>
          <p className="text-sm text-[var(--on-dark-soft)]">
            메일{" "}
            <a href={`mailto:${site.email}`} className="font-semibold text-[var(--on-dark)] underline-offset-4 hover:underline">
              {site.email}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
