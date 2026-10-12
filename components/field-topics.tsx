"use client";
import { useState } from "react";

type Field = { name: string; format: string; items: string[]; check: string };

// 분야별 연재 소재 카드: 분야 탭을 누르면 그 분야의 형식·소재·점검 항목이 바뀐다.
export function FieldTopics({ fields, checkLabel }: { fields: Field[]; checkLabel: string }) {
  const [name, setName] = useState(fields[0].name);
  const f = fields.find((x) => x.name === name) ?? fields[0];
  return (
    <div>
      <div role="tablist" aria-label="분야" className="flex flex-wrap gap-1.5">
        {fields.map((x) => (
          <button
            key={x.name}
            type="button"
            role="tab"
            aria-selected={x.name === f.name}
            onClick={() => setName(x.name)}
            className={`whitespace-nowrap rounded-full border px-3.5 py-1.5 text-sm transition-colors ${
              x.name === f.name ? "border-[var(--ink)] bg-[var(--ink)] text-white" : "border-[var(--line-strong)] text-[var(--text-soft)] hover:text-[var(--ink)]"
            }`}
          >
            {x.name}
          </button>
        ))}
      </div>
      <p className="mt-8 inline-flex rounded-md border border-[var(--line)] px-2.5 py-1 text-xs text-[var(--text-soft)]">주력 형식 · {f.format}</p>
      <ol className="mt-4">
        {f.items.map((t, i) => (
          <li key={t} className="flex items-baseline gap-4 border-b border-[var(--line)] py-4 last:border-0">
            <span className="num w-5 shrink-0 text-sm text-[var(--text-soft)]">{i + 1}</span>
            <span className="font-[family-name:var(--font-serif)] text-lg leading-snug tracking-[-0.03em] sm:text-xl">{t}</span>
          </li>
        ))}
      </ol>
      <p className="mt-6 rounded-[var(--r)] bg-[var(--page)] px-4 py-3 text-sm">
        <span className="font-semibold">{checkLabel}</span> <span className="lead-grey">{f.check}</span>
      </p>
    </div>
  );
}
