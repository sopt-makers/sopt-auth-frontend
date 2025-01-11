import { css } from "@/styled-system/css";
import Link from "next/link";
import React from "react";
import Step from "@/src/components/common/Step";
import AuthSection from "@/src/components/common/AuthSection";
import AuthFailHelper from "@/src/components/sign-up/AuthFailHelper";
import GoBackButton from "@/src/components/common/GoBackButton";

function page() {
  return (
    <main className={css({ ...mainWrapperStyles })}>
      <div className={css({ ...goBackButtonWrapperStyles })}>
        <GoBackButton />
      </div>
      <Step.Root>
        <Step.Circle stepNumber={1} text="SOPT 회원인증" isActive />
        <Step.Connector />
        <Step.Circle stepNumber={2} text="소셜 계정 연동" />
      </Step.Root>
      <h1 className={css({ ...mainTextStyles })}>SOPT 회원인증</h1>
      <p className={css({ ...textStyles, ...descriptionStyles })}>
        이곳은 SOPT 회원만을 위한 공간이에요.
        <br />
        SOPT 회원인증을 위해 전화번호를 입력해 주세요.
      </p>
      <AuthSection nextURL="/sign-up/social">
        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLSdBxksqlkAHShYdQYxDIK1Mnsy45MbYMkEeGuCMpeXjn6C1NQ/viewform"
          className={css({ ...linkStyles })}
        >
          <AuthFailHelper />
        </Link>
      </AuthSection>
    </main>
  );
}

export default page;

const mainWrapperStyles = css.raw({
  position: "relative",
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

const mainTextStyles = css.raw({
  textAlign: "center",
  textStyle: "heading-2-32-b",
  color: "white",
  marginTop: "9.5rem",

  "@media (max-width: 480px)": {
    textStyle: "title-3-24-sb",
    marginTop: "5.4rem",
  },
});

const textStyles = css.raw({
  display: "flex",
  alignItems: "center",
  textStyle: "body-2-16-m",
  color: "gray.200",

  "@media (max-width:480px)": {
    textStyle: "label-4-12-sb",
  },
});

const descriptionStyles = css.raw({
  textAlign: "center",
  margin: "1.4rem auto 0 auto",
});

const goBackButtonWrapperStyles = css.raw({
  position: "absolute",
  top: "1.2rem",
  visibility: "hidden",

  "@media (max-width:480px)": {
    visibility: "visible",
  },
});
