import React from "react";

export default function View(props) {
  const { children, style } = props;
  return <div style={{ display: "flex", ...style }}>{children}</div>;
}
