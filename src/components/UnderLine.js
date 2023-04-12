import { useColorMode } from "@docusaurus/theme-common";
import React from "react";

export default function UnderLine({ children, color }) {
  const { colorMode } = useColorMode();

  return (
    <span
      style={{
        backgroundColor: color,
        borderBottom: `1px solid ${colorMode === "dark" ? " #fff" : "#000"}`,
        padding: "0 0 0.25rem 0",
      }}
    >
      {children}
    </span>
  );
}
