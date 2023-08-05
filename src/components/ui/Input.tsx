import React, { ChangeEvent } from "react";

interface Props {
  type: string;
  name: string;
  required: boolean;
  value: string;
  maxLength?: number;
  mSize?: string;
  placeholder?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onKeyUp?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

export default function Input({
  type,
  name,
  required,
  value,
  maxLength,
  mSize,
  placeholder,
  onChange,
  onKeyUp,
}: Props) {
  // 선언하는 클래스 명이 길어질 경우 아래 처럼 변수로 선언하여 대입 가능
  const inputStyle = `py-[14px] h-[48px] px-[20px] w-[524px] text-[12px] rounded ${mSize}`;

  return (
    <input
      type={type}
      name={name}
      required={required}
      value={value}
      onChange={onChange}
      onKeyUp={onKeyUp}
      className={inputStyle}
      maxLength={maxLength}
      placeholder={placeholder}
    />
  );
}
