import { site } from "@/content/site";
import { benefits, faq, pricing, process } from "@/content/home";

// AI 검색·크롤러용 요약. 도메인이 바뀌어도 따라가도록 site.url로 만든다.
export const dynamic = "force-static";

export function GET() {
  const body = `# ${site.name}

> ${site.name}는 전문직 사무소(변호사·노무사·동물병원·요양원 등)의 인스타툰을 만드는 팀입니다. 상담 사례를 각색해 매주 연재할 툰으로 만들고, 편마다 광고 규정 점검표를 함께 드립니다.

- 사이트: ${site.url}
- 문의: ${site.email}

## 고객이 하실 일

${process.steps.map((st, i) => `${i + 1}. ${st.t}: ${st.d}`).join("\n")}

## 특징

${benefits.items.map((b) => `- ${b.t}: ${b.d}`).join("\n")}

## 가격 (VAT 별도)

${pricing.plans.map((p) => `- ${p.name}: ${p.price}만원 / ${p.per} (${p.items.join(", ")})`).join("\n")}
- ${pricing.foot}

## 자주 묻는 질문

${faq.items.map((f) => `- **${f.q}** ${f.a}`).join("\n")}

## 주요 페이지

- [소개](${site.url}/): 진행 방식, 특징, 가격, 자주 묻는 질문
- [견본](${site.url}/samples): 창작툰 견본과 그림체 여섯 가지
- [맞춤 시안 신청](${site.url}/consult): 사무소 분야를 알려 주시면 미팅에서 소재 예시를 보여 드립니다
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
