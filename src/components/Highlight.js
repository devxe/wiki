import React from "react";

export default function Highlight({ children, color }) {
  return (
    <span
      style={{
        backgroundColor: color,
        borderBottom: "3px solid #ff6f0f",
        padding: "0 0 0.25rem 0",
        fontWeight: "bold",
      }}
    >
      {children}
    </span>
  );
}
