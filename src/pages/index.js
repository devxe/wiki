import React, { useEffect } from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  useEffect(() => {
    location.href = "/blog/docs/intro";
  });

  return (
    <Layout
      title={`기술 블로그 | ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    ></Layout>
  );
}
