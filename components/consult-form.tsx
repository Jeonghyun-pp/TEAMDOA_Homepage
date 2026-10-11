"use client";
import { useState, type FormEvent } from "react";
import { consultCopy, fields } from "@/content/consult";
import { trackEvent } from "@/lib/analytics";
import { Check } from "./icons";

const labelClass = "mb-2 block text-sm font-semibold";
const legendClass = "label mb-2";

function Field({ id, label, required, placeholder, error, type = "text" }: { id: string; label: string; required?: boolean; placeholder: string; error?: string; type?: string }) {
  return (
    <div>
      <label className={labelClass} htmlFor={id}>
        {label} {required ? <span className="text-[var(--accent)]">*</span> : null}
      </label>
      <input id={id} name={id} type={type} className="field" placeholder={placeholder} />
      {error ? <p className="field-error">{error}</p> : null}
    </div>
  );
}

const TEXT_FIELDS = ["org", "name", "role", "email", "phone", "instagram", "note", "website"] as const;

export function ConsultForm() {
  const [selected, setSelected] = useState<string[]>([]);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formError, setFormError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrors({});
    setFormError("");
    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload: Record<string, unknown> = Object.fromEntries(TEXT_FIELDS.map((k) => [k, fd.get(k)]));
    payload.fields = selected;
    payload.privacy = fd.get("privacy") === "on";
    payload.marketing = fd.get("marketing") === "on";
    try {
      const res = await fetch("/api/consult", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      const data = await res.json();
      if (res.ok && data.success) {
        trackEvent("consult_submit", { fields: selected.join(",") || "none" });
        setStatus("success");
        form.reset();
        setSelected([]);
        return;
      }
      if (data.errors) setErrors(data.errors);
      setFormError(data.error ?? consultCopy.fallbackError);
      setStatus("error");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      setFormError(consultCopy.networkError);
      setStatus("error");
    }
  }

  if (status === "success")
    return (
      <div className="panel p-9 text-center sm:p-12">
        <span className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-[var(--accent)] text-white">
          <Check size={26} />
        </span>
        <h3 className="text-xl font-bold">{consultCopy.successTitle}</h3>
        <p className="mt-3 text-[var(--text-soft)]">{consultCopy.successBody}</p>
        <button type="button" onClick={() => setStatus("idle")} className="btn btn-secondary mt-7">
          {consultCopy.successReset}
        </button>
      </div>
    );

  return (
    <form onSubmit={onSubmit} className="panel flex flex-col gap-10 p-6 sm:p-9" noValidate>
      {/* 허니팟: 봇이 채우면 서버가 조용히 성공 처리 */}
      <div className="hidden" aria-hidden="true">
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      {formError ? (
        <p className="alert" role="alert">
          {formError}
        </p>
      ) : null}

      <fieldset className="flex flex-col gap-5">
        <legend className={legendClass}>
          <span className="label-num">01</span>
          사무소 정보
        </legend>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field id="org" label="사무소 · 기관명" required placeholder="예: OO 법률사무소" error={errors.org} />
          <Field id="instagram" label="인스타그램 계정 (선택)" placeholder="@계정 · 아직 없으면 비워 두세요" />
          <Field id="name" label="성함" required placeholder="홍길동" error={errors.name} />
          <Field id="role" label="직책" placeholder="예: 대표 변호사 · 실장" />
          <Field id="email" label="이메일" required type="email" placeholder="you@office.com" error={errors.email} />
          <Field id="phone" label="연락처 (선택)" placeholder="010-0000-0000" />
        </div>
      </fieldset>

      <fieldset className="flex flex-col gap-3">
        <legend className={legendClass}>
          <span className="label-num">02</span>
          분야 <span className="font-normal text-[var(--text-muted)]">(여러 개 고를 수 있습니다)</span>
        </legend>
        <div className="flex flex-wrap gap-2">
          {fields.map((it) => {
            const on = selected.includes(it);
            return (
              <button key={it} type="button" onClick={() => setSelected((s) => (s.includes(it) ? s.filter((x) => x !== it) : [...s, it]))} aria-pressed={on} className="toggle">
                {it}
              </button>
            );
          })}
        </div>
      </fieldset>

      <fieldset className="flex flex-col gap-5">
        <legend className={legendClass}>
          <span className="label-num">03</span>
          하고 싶은 이야기 <span className="font-normal text-[var(--text-muted)]">(선택)</span>
        </legend>
        <div>
          <label className="sr-only" htmlFor="note">
            하고 싶은 이야기
          </label>
          <textarea
            id="note"
            name="note"
            rows={4}
            className="field resize-y"
            placeholder="예: 상담 전에 의뢰인이 자주 묻는 것을 툰으로 알려 주고 싶습니다. 지금 인스타는 공지만 올리고 있습니다."
          />
          <p className="mt-2 text-xs text-[var(--text-muted)]">사건 내용이나 의뢰인 이름은 적지 말아 주세요.</p>
        </div>
      </fieldset>

      <fieldset className="flex flex-col gap-4 border-t border-[var(--line)] pt-8">
        <legend className="sr-only">동의</legend>
        <label className="flex gap-3">
          <input type="checkbox" name="privacy" className="check" />
          <span>
            <span className="text-sm font-semibold">{consultCopy.privacyTitle}</span>
            <span className="mt-1 block text-xs leading-relaxed text-[var(--text-soft)]">{consultCopy.privacyBody}</span>
            {errors.privacy ? <span className="field-error block">{errors.privacy}</span> : null}
          </span>
        </label>
        <label className="flex gap-3">
          <input type="checkbox" name="marketing" className="check" />
          <span>
            <span className="text-sm font-semibold">{consultCopy.marketingTitle}</span>
            <span className="mt-1 block text-xs leading-relaxed text-[var(--text-soft)]">{consultCopy.marketingBody}</span>
          </span>
        </label>
      </fieldset>

      <button type="submit" disabled={status === "submitting"} className="btn btn-primary w-full disabled:opacity-60 sm:w-auto sm:self-start">
        {status === "submitting" ? consultCopy.submitting : consultCopy.submit}
      </button>
    </form>
  );
}
