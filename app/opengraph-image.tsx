import { ImageResponse } from "next/og";
import { site } from "@/content/site";

// OG 1200×630: 종이색 바탕 + 테라코타 머리말 + 제목. next/og는 CSS 변수를 못 읽어서 globals.css 토큰 값을 그대로 쓴다.
export const alt = site.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const PAPER = "#fbf8f3";
const INK = "#26221f";
const SUB = "#6e665e";
const TERRA = "#c2603c";

async function font(weight: number, text: string) {
  const css = await (await fetch(`https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@${weight}&text=${encodeURIComponent(text)}`)).text();
  const url = css.match(/src: url\((.+?)\) format/)?.[1];
  return (await fetch(url!)).arrayBuffer();
}

export default async function OG() {
  const kicker = "지금은 고객 설명부터 합니다";
  const title = "전문직 현장의\n병목을 풉니다";
  const foot = "인스타툰 연재 · 사연툰 · 릴스 · 광고 규정 점검";
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: PAPER, padding: "72px 80px", borderBottom: `16px solid ${TERRA}` }}>
        <div style={{ display: "flex", fontSize: 30, fontWeight: 700, color: TERRA }}>{kicker}</div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 68, fontWeight: 700, color: INK, lineHeight: 1.22, letterSpacing: "-0.03em" }}>
          {title.split("\n").map((l) => (
            <span key={l}>{l}</span>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 28, fontWeight: 700, color: SUB }}>
          <span>{foot}</span>
          <span style={{ color: INK }}>{site.name}</span>
        </div>
      </div>
    ),
    { ...size, fonts: [{ name: "Noto Sans KR", data: await font(700, kicker + title + foot + site.name), weight: 700 }] },
  );
}
