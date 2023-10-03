import React from "react";
import MaskedInput from "react-text-mask";

const phoneMask = [
  "+",
  "9",
  "9",
  "8",
  "(",
  /\d/,
  /\d/,
  ")",
  /\d/,
  /\d/,
  /\d/,
  "-",
  /\d/,
  /\d/,
  "-",
  /\d/,
  /\d/,
];

export const InputTel = (props: any) => {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...props}
      mask={phoneMask}
      placeholderChar={"\u2000"}
      showMask
    />
  );
};
