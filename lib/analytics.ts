"use client";
import { sendGAEvent } from "@next/third-parties/google";

// GA 이벤트: nav_click · cta_click · consult_submit. NEXT_PUBLIC_GA_ID가 없으면 GA를 싣지 않아 아무 일도 하지 않는다.
export function trackEvent(name: string, params: Record<string, string> = {}) {
  sendGAEvent("event", name, params);
}
