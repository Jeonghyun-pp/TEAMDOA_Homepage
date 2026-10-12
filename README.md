# teamdoa-site

TEAM DOA 홈페이지. 홈(`/`) 한 쪽과 맞춤 시안 신청(`/consult`)으로 되어 있다.

뼈대는 solverAX의 `axsolver-rebrand`(axsolver.com 복제본을 리브랜딩한 것)를 가져왔다. 색·글꼴·문구는 소개서(`insta-toon-project/pipeline/09_deck`)와 맞췄다.

```bash
npm install
npm run dev                  # http://localhost:3000
npm run build && npm start   # 배포 모드 확인
```

## 어디를 고치나

| 바꿀 것 | 위치 |
|---|---|
| 색·글꼴·라운드·간격 | `app/globals.css`의 `:root` 토큰 (소개서 `base.css`와 같은 값) |
| 홈 문구·가격·FAQ·견본 장 목록 | `content/home.ts` (제목의 `*낱말*`은 손글씨 강조) |
| 신청 폼 문구·분야 목록·동의 문구 | `content/consult.ts` |
| 이름·메일·내비·사업자 정보 | `content/site.ts` (빈 값은 화면에 나오지 않는다) |
| 진행자 캐릭터·그림체·표지 견본 | `public/img/` |
| 섹션 순서·배치 | `app/page.tsx` |

문구를 고칠 때는 소개서의 문장 원칙을 따른다: 효과를 약속하지 않는다, "보장"을 쓰지 않는다, 숫자에는 출처와 연도를 붙인다, AI를 앞에 내세우지 않는다.

## 환경변수

| 이름 | 필요 | 하는 일 |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | 배포 시 | canonical·sitemap·OG·llms.txt의 주소. 없으면 `http://localhost:3000` |
| `CONSULT_WEBHOOK_URL` | 배포 시 | 신청 내용을 보낼 곳(예: 노션·슬랙·구글 시트로 넘기는 웹훅). 없으면 배포 모드에서 신청이 503으로 막히고 메일 연락을 안내한다 |
| `NEXT_PUBLIC_GA_ID` | 선택 | GA 측정 ID. 없으면 GA를 싣지 않는다 |

## 데이터

- 신청 내용은 영업 리드다. 서버 로그·파일·git에 남기지 않고 웹훅으로만 넘긴다.
- 폼은 사건 내용과 의뢰인 이름을 받지 않는다고 안내한다. 개인정보 수집·이용 동의(필수)와 소식 메일 동의(선택, 정보통신망법 제50조)를 따로 받는다.
- 동의 없이 후속 메일을 보내지 않는다. 웹훅으로 넘어가는 `marketing` 값이 `true`인 사람에게만 보낸다.

## 아직 정할 것

- 도메인 → `NEXT_PUBLIC_SITE_URL`
- 신청을 받을 곳 → `CONSULT_WEBHOOK_URL`
- 대표번호·사업자등록번호·주소 → `content/site.ts`
- 정식 로고 → `components/logo.tsx`, `app/icon.tsx`
- 그림체 견본은 지금 기존 시안 장면(가상)이다. 상담실 장면으로 새로 그리면 `public/img/style/`만 바꾼다
