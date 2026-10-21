import { site } from "@/content/site";
import { benefits, conditions, faq, process, services } from "@/content/home";

// AI 검색·크롤러용 요약. 도메인이 바뀌어도 따라가도록 site.url로 만든다.
export const dynamic = "force-static";

export function GET() {
  const body = `# ${site.name}

> ${site.name}는 전문직 현장(변호사·노무사·동물병원·요양원 등)의 병목을 푸는 팀입니다. 지금은 고객 설명부터 합니다: 상담 사례를 각색해 매주 연재할 인스타툰으로 만들고, 광고 규정 점검까지 함께 합니다.

- 사이트: ${site.url}
- 문의: ${site.email}

## 서비스

${services.items.map((sv) => `- ${sv.t} (${sv.status}): ${sv.d}`).join("\n")}

## 인스타툰 연재: 고객이 하실 일

${process.steps.map((st, i) => `${i + 1}. ${st.t}: ${st.d}`).join("\n")}

## 특징

${benefits.items.map((b) => `- ${b.t}: ${b.d}`).join("\n")}

## 가격

${conditions.sub}

## ${conditions.terms.title}

${[...conditions.spec.rows, ...conditions.terms.rows].map((r) => `- ${r.k}: ${r.v}`).join("\n")}

## 자주 묻는 질문

${faq.items.map((f) => `- **${f.q}** ${f.a}`).join("\n")}

## 주요 페이지

- [소개](${site.url}/): 팀, 서비스, 같이 풀고 싶은 병목
- [인스타툰 연재](${site.url}/services/instatoon): 진행 방식, 특징, 이용 조건, 자주 묻는 질문
- [견본](${site.url}/samples): 이혼 견본 「도어락」 4화(창작툰)와 그림체 여섯 가지
- [무료 상담 신청](${site.url}/consult): 사무소 분야를 알려 주시면 미팅에서 소재 예시를 보여 드립니다
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
