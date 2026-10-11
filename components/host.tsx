import Image from "next/image";

// 진행자 캐릭터 + 짧은 말풍선. 말풍선은 사실 한 줄로 짧게 쓴다.
export function Host({ src, w, h, say, className = "", imgClass = "w-40" }: { src: string; w: number; h: number; say?: string; className?: string; imgClass?: string }) {
  return (
    <div className={`flex flex-col items-center gap-4 ${className}`}>
      {say ? <p className="bubble text-center">{say}</p> : null}
      <Image src={src} alt="" aria-hidden="true" width={w} height={h} className={`h-auto ${imgClass}`} />
    </div>
  );
}
