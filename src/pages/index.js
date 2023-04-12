import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import React, { useEffect } from "react";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  useEffect(() => {
    location.href = "/wiki/docs/Docker/도커 등장 배경";
  });

  return (
    <Layout
      title=""
      description="Description will go into a meta tag in <head />"
    ></Layout>
  );
}
