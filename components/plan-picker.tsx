"use client";
import { useState } from "react";
import { Check } from "./icons";

type Plan = { key: string; name: string; price: string; per: string; items: string[] };

// 정기 연재 카드: 상품 탭을 누르면 가격과 구성이 바뀐다 (Designjoy 가격 카드 자리).
export function PlanPicker({ plans, defaultPlan, common }: { plans: Plan[]; defaultPlan: string; common: string[] }) {
  const [key, setKey] = useState(defaultPlan);
  const plan = plans.find((p) => p.key === key) ?? plans[0];
  return (
    <div>
      <div role="tablist" aria-label="상품" className="flex flex-wrap gap-1.5">
        {plans.map((p) => (
          <button
            key={p.key}
            type="button"
            role="tab"
            aria-selected={p.key === plan.key}
            onClick={() => setKey(p.key)}
            className={`rounded-full border px-3 py-1 text-sm transition-colors ${
              p.key === plan.key ? "border-[#e79a7b] bg-[#3a2620] text-[#f0b49a]" : "border-[var(--line-dark)] text-[var(--on-dark-soft)] hover:text-[var(--on-dark)]"
            }`}
          >
            {p.name}
          </button>
        ))}
      </div>
      <p className="num mt-6 flex items-baseline gap-1.5">
        <span className="text-6xl font-semibold tracking-[-0.05em] sm:text-7xl">{plan.price}</span>
        <span className="text-xl font-semibold">만원</span>
        <span className="text-sm text-[var(--on-dark-soft)]">/ {plan.per}</span>
      </p>
      <div className="relative mt-8 rounded-[var(--r)] border border-[#3b3632] bg-[#262321] px-6 pb-6 pt-7">
        <span className="absolute -top-2.5 left-6 rounded border border-[#3b3632] bg-[#262321] px-2 text-[11px] tracking-wide text-[var(--on-dark-soft)]">포함</span>
        <ul className="grid gap-x-8 gap-y-2 text-[15px] sm:grid-cols-2">
          {[...plan.items, ...common].map((x) => (
            <li key={x} className="flex items-center gap-2">
              <Check size={14} className="shrink-0 text-[var(--on-dark-soft)]" />
              {x}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
