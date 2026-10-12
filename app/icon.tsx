import { ImageResponse } from "next/og";

// 파비콘: 잉크 사각형 안에 로고의 말풍선 O (components/logo.tsx와 같은 모양).
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#26221f", borderRadius: 14 }}>
        <svg viewBox="96 0 116 116" width="44" height="44" fill="none">
          <circle cx="154" cy="55" r="40" stroke="#e79a7b" strokeWidth="18" />
          <path d="M125 84 L112 107 L139 94" fill="#e79a7b" stroke="#e79a7b" strokeWidth="8" strokeLinejoin="round" />
        </svg>
      </div>
    ),
    size,
  );
}
