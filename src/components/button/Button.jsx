import React from "react";
import { SButton } from "./ButtonStyles";

export default function Button({ children, ...props }) {
  return <SButton {...props}>{children}</SButton>;
}

Button.defaultProps = {};
