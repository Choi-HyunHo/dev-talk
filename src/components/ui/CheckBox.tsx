import React, { ChangeEvent } from "react";

interface Props {
  disabled: boolean;
  checked: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function CheckBox({ disabled, checked, onChange }: Props) {
  return (
    <input
      type="checkbox"
      checked={checked}
      disabled={disabled}
      onChange={onChange}
    />
  );
}
