import { ImageResponse } from "next/og";

// 임시 파비콘: 잉크 사각형 + 테라코타 점이 붙은 "D". 정식 심볼이 나오면 icon.png로 바꾼다.
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#26221f", borderRadius: 14, color: "#fbf8f3", fontSize: 44, fontWeight: 800 }}>
        D<span style={{ color: "#e79a7b" }}>.</span>
      </div>
    ),
    size,
  );
}
