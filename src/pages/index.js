import Layout from "@theme/Layout";
import React, { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    location.href =
      process.env.NODE_ENV === "development"
        ? "/docs/intro"
        : "/wiki/docs/intro";
  });

  return <Layout title="" description="" />;
}
