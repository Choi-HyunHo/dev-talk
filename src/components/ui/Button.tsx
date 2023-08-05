import React from "react";

interface Props {
    text?: string;
    size?: string;
    bgColor?: string;
    wSize?: string;
    hSize?: string;
    tColor?: string;
    bRadis?: string;
    mSize?: string;
    disabled?: string;
    onClick?: () => void;
}

export default function Button({
    text,
    size,
    bgColor,
    wSize,
    hSize,
    tColor,
    bRadis,
    mSize,
    disabled,
    onClick,
}: Props) {
    const buttonStyle = `${size} ${bgColor} ${wSize} ${hSize} ${tColor} ${bRadis} ${mSize} ${disabled}`;
    return (
        <button className={buttonStyle} onClick={onClick}>
            {text}
        </button>
    );
}
