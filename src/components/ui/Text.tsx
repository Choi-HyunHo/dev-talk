import React from "react";

interface Props {
  mSize?: string;
  tSize?: string;
  tColor?: string;
  size?: string;
  tWeight?: string;
  text: string;
  display?: string;
}

export default function Text({
  mSize,
  tSize,
  tColor,
  size,
  tWeight,
  text,
  display,
}: Props) {
  const textStyle = `${mSize} ${tSize} ${tColor} ${size} ${tWeight} ${display}`;
  return <span className={textStyle}>{text}</span>;
}
