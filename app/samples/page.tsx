import type { Metadata } from "next";
import Image from "next/image";
import { Rich } from "@/components/rich";
import { SampleViewer } from "@/components/sample-viewer";
import { site } from "@/content/site";
import { sample } from "@/content/home";

export const metadata: Metadata = {
  title: "견본",
  description: "TEAM DOA가 만든 창작툰 견본과 그림체 여섯 가지.",
  alternates: { canonical: "/samples" },
  openGraph: { title: `견본 · ${site.name}`, url: "/samples", siteName: site.name, locale: "ko_KR", type: "website" },
};

export default function SamplesPage() {
  return (
    <div className="rails">
      <section className="shell pb-24 pt-10">
        <h1 className="t-display">
          <Rich text={sample.title} />
        </h1>
        <p className="lead-grey mt-5 max-w-xl text-lg">{sample.sub}</p>
        <div className="mt-12">
          <SampleViewer pages={sample.pages} />
        </div>
        <h2 className="t-h2 mt-24">{sample.stylesTitle}</h2>
        <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {sample.styles.map((s) => (
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
                <figcaption className="mt-2 text-center text-sm font-semibold">{s.name}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
