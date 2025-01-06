"use client";

import { css } from "@/styled-system/css";
import Link from "next/link";
import React from "react";
import Step from "@/src/components/common/Step";
import Title from "@/src/components/common/Title";
import AuthSection from "@/src/components/common/AuthSection";
import HelpBox from "@/src/components/sign-up/HelpBox";

function page() {
  return (
    <main className={css({ ...mainWrapperStyles })}>
      <Step.Root>
        <Step.Circle stepNumber={1} text="SOPT 회원인증" isActive />
        <Step.Connector />
        <Step.Circle stepNumber={2} text="소셜 계정 연동" />
      </Step.Root>
      <Title />
      <AuthSection>
        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLSdBxksqlkAHShYdQYxDIK1Mnsy45MbYMkEeGuCMpeXjn6C1NQ/viewform"
          className={css({ ...linkStyles })}
        >
          <HelpBox />
        </Link>
      </AuthSection>
    </main>
  );
}

export default page;

const mainWrapperStyles = css.raw({
  display: "flex",
  height: "100vh",
  flexDirection: "column",

  "@media (max-width: 480px)": {
    height: "100dvh",
  },
});

const linkStyles = css.raw({
  marginTop: "4.1rem",
});
