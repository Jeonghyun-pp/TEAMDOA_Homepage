import { footer, site } from "@/content/site";

// 마무리 띠 아래의 한 줄 푸터. 사업자 정보가 정해지면 같은 줄에 나온다.
export function Footer() {
  const biz = [site.bizNo && `사업자등록번호 ${site.bizNo}`, site.address, site.phone].filter(Boolean).join(" · ");
  return (
    <footer className="bg-black text-[var(--on-dark)]">
      <div className="shell flex flex-col gap-2 border-t border-[#2c2c2c] py-8 text-sm text-[var(--on-dark-soft)] sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6">
        <span className="font-semibold text-[var(--on-dark)]">{site.name}</span>
        <span>{site.makers.map((m) => m.name).join(" · ")}</span>
        <a href={`mailto:${site.email}`} className="hover:text-[var(--on-dark)]">
          {site.email}
        </a>
        {biz ? <span>{biz}</span> : null}
        <span className="sm:ml-auto">{footer.notice}</span>
      </div>
    </footer>
  );
}
