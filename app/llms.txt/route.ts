import { site } from "@/content/site";
import { offer, process, safety } from "@/content/home";

// AI 검색·크롤러용 요약. 도메인이 바뀌어도 따라가도록 site.url로 만든다.
export const dynamic = "force-static";

export function GET() {
  const body = `# ${site.name}

> ${site.name}는 전문직 사무소(변호사·노무사·동물병원·요양원 등)의 인스타툰을 대신 만들고 운영하는 팀입니다. 상담 사례를 각색해 매주 한 편씩 연재하고, 편마다 광고 규정 점검표를 함께 드립니다.

- 사이트: ${site.url}
- 문의: ${site.email}

## 받으실 것

${offer.items.map((i) => `- **${i.name}** (${i.meta}): ${i.body}`).join("\n")}
- ${offer.also}

## 진행 방식

${process.steps.map((s, i) => `${i + 1}. ${s.t}${s.you ? " (고객)" : ""}: ${s.d}`).join("\n")}

## 안전

${safety.points.map((p) => `- ${p.t}: ${p.d}`).join("\n")}
- ${safety.src}

## 주요 페이지

- [소개](${site.url}/): 받으실 것, 진행 방식, 규정 점검, 그림체
- [맞춤 시안 신청](${site.url}/consult): 사무소 분야를 알려 주시면 미팅에서 소재 예시를 보여 드립니다
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
