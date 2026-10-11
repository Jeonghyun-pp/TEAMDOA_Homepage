import { NextResponse } from "next/server";
import { consultCopy, validationMessages as m } from "@/content/consult";

// 200 {success:true} / 422 {success:false, errors:{칸:문구}} / 503 접수처 없음 / GET 405.
// 접수 내용은 영업 리드라서 서버 로그나 파일에 남기지 않는다. CONSULT_WEBHOOK_URL로만 넘긴다.
// 웹훅이 없으면 개발 모드에서는 칸 이름만 찍고, 배포 모드에서는 503으로 메일 연락을 안내한다(조용히 버리지 않는다).
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  const body = (await req.json().catch(() => ({}))) as Record<string, unknown>;
  const s = (k: string) => (typeof body[k] === "string" ? (body[k] as string).trim() : "");

  if (s("website")) return NextResponse.json({ success: true }); // 허니팟

  const errors: Record<string, string> = {};
  if (!s("org")) errors.org = m.org;
  if (!s("name")) errors.name = m.name;
  if (!s("email")) errors.email = m.email;
  else if (!EMAIL_RE.test(s("email"))) errors.email = m.emailFormat;
  if (body.privacy !== true) errors.privacy = m.privacy;
  if (Object.keys(errors).length) return NextResponse.json({ success: false, errors }, { status: 422 });

  const submission = {
    org: s("org"),
    name: s("name"),
    role: s("role"),
    email: s("email"),
    phone: s("phone"),
    instagram: s("instagram"),
    note: s("note").slice(0, 2000),
    fields: Array.isArray(body.fields) ? body.fields.filter((x): x is string => typeof x === "string") : [],
    privacy: true,
    marketing: body.marketing === true,
    receivedAt: new Date().toISOString(),
  };
  const hook = process.env.CONSULT_WEBHOOK_URL;
  if (!hook) {
    if (process.env.NODE_ENV === "production") return NextResponse.json({ success: false, error: consultCopy.unavailable }, { status: 503 });
    console.log("[consult] 웹훅 없음(개발 모드). 받은 칸:", Object.keys(submission).join(","));
    return NextResponse.json({ success: true });
  }
  const r = await fetch(hook, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(submission) }).catch(() => null);
  if (!r?.ok) return NextResponse.json({ success: false, error: "접수 중 오류가 났습니다. 잠시 뒤 다시 시도하시거나 메일로 연락 주세요." }, { status: 502 });
  return NextResponse.json({ success: true });
}
