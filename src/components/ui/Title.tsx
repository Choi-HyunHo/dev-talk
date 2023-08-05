import React from "react";

interface Props {
  text: string;
  mSize: string;
  tSize: string;
  tWeight: string;
}

export default function Title({ text, mSize, tSize, tWeight }: Props) {
  const titleStyle = `${text} ${mSize} ${tSize} ${tWeight}`;
  return <h1 className={titleStyle}>{text}</h1>;
}
