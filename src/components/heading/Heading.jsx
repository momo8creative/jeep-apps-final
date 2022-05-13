import React from "react";
import { SHeading } from "./HeadingStyles";

export default function Heading({ size, children }) {
  return <SHeading size={size}>{children}</SHeading>;
}
