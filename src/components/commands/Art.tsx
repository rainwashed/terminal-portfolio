import { ArtWrapper, HighlightAlt, HighlightSpan } from "../styles/Art.styled";
// @ts-ignore
import ArtText from "../../art.text";
import React, { memo, useRef } from "react";

function getRandomHexColor() {
  return (
    "#" +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")
  );
}

const SpanMemo = (props: { id: string; value: string; color: string }) => {
  let ref = useRef(null);

  return (
    <span
      id={props.id}
      ref={ref}
      style={{ color: props.color, transition: "color 500ms ease-in-out" }}
    >
      {props.value}
    </span>
  );
};

const Art: React.FC = () => {
  return (
    <ArtWrapper data-testid="art">
      <pre>{ArtText}</pre>
    </ArtWrapper>
  );
};

export default Art;
