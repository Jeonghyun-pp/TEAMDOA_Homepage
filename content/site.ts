// 사이트 전역 콘텐츠: 브랜드명·연락처·내비·SEO. 이름이나 문구를 바꿀 때는 여기만 고친다.
// 도메인은 아직 정하지 않았다. 배포할 때 NEXT_PUBLIC_SITE_URL을 넣으면 canonical·sitemap·OG가 모두 그 주소로 바뀐다.

export const site = {
  name: "TEAM DOA",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  // 검색 노출은 정식 도메인(NEXT_PUBLIC_SITE_URL)을 정한 배포에서만 켠다. 그 전의 미리보기·내부 검토 배포는 noindex.
  indexable: Boolean(process.env.NEXT_PUBLIC_SITE_URL),
  gaId: process.env.NEXT_PUBLIC_GA_ID ?? "",
  title: "TEAM DOA: 전문직 현장의 병목을 풉니다",
  description:
    "변호사·노무사·동물병원·요양원처럼 고객 설명이 긴 현장의 병목을 풉니다. 지금은 상담 사례를 각색한 인스타툰 연재를 맡고, 광고 규정 점검까지 함께 합니다.",
  ogDescription: "전문직 현장의 병목을 풉니다. 지금은 상담 사례를 각색한 인스타툰 연재를 맡고, 광고 규정 점검까지 함께 합니다.",
  keywords: ["인스타툰 제작", "인스타툰 대행", "법률 마케팅", "변호사 인스타툰", "노무사 마케팅", "동물병원 인스타그램", "사연툰", "TEAM DOA"],
  email: "doa2026admin@gmail.com",
  // 아래 값이 비어 있으면 화면에 나오지 않는다. 정해지면 채운다.
  phone: "",
  bizNo: "",
  address: "",
  makers: [{ name: "박정현" }, { name: "문형주" }, { name: "박상혁" }], // 이름만 싣는다(역할은 쓰지 않음)
};

// 상담은 무료, 시안은 유료(가격은 미팅에서 안내). 버튼은 무료 단계 이름으로 쓴다.
export const CTA_LABEL = "무료 상담 신청";

export const footer = {
  notice: "견본은 가상의 이야기이며, 일부 그림 작업에 AI 도구를 썼습니다.",
};
