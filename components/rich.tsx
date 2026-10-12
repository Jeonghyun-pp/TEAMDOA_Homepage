import { Fragment } from "react";

// 제목 문자열의 *낱말*을 손글씨 강조로, \n을 줄바꿈으로 그린다.
export function Rich({ text }: { text: string }) {
  return (
    <>
      {text.split("\n").map((line, i) => (
        <Fragment key={i}>
          {i ? <br /> : null}
          {line.split(/(\*[^*]+\*)/).map((part, j) =>
            part.startsWith("*") && part.endsWith("*") ? (
              <em key={j} className="em-hand">
                {part.slice(1, -1)}
              </em>
            ) : (
              <Fragment key={j}>{part}</Fragment>
            ),
          )}
        </Fragment>
      ))}
    </>
  );
}
