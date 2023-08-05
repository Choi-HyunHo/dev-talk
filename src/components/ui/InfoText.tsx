import Link from "next/link";
import React from "react";

interface Props {
  text: string;
  subText?: string;
  href?: string;
  mSize?: string;
}

export default function InfoText({ text, subText, href = "", mSize }: Props) {
  const infoTextStyle = `mr-[12px] text-[14px] font-normal ${mSize}`;
  const infoLinkStyle = `text-[14px] text-PRIMARY500`;

  return (
    <div className="flex items-center">
      <p className={infoTextStyle}>{text}</p>
      {subText && (
        <Link href={href}>
          <p className={infoLinkStyle}>{subText} &gt;</p>
        </Link>
      )}
    </div>
  );
}
