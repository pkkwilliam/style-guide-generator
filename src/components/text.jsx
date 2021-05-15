import React from "react";

export default function Text(props) {
  const { children, style } = props;
  return <p style={{ margin: 0, ...style }}>{children}</p>;
}
