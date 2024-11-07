"use client";

import { css } from "@/styled-system/css";
import { useState } from "react";
import LoginButton from "./LoginButton";
import { IconChevronRight } from "@sopt-makers/icons";

function LoginSection() {
  const [lastLoggedInAccount, setLastLoggedInAccount] = useState<
    "apple" | "google" | null
  >("google"); // 마지막으로 로그인한 계정

  return (
    <div className={css({ ...loginSectionStyles })}>
      <div className={css({ ...lastLoggedInBannerStyles })}>
        {lastLoggedInAccount && (
          <img
            src={`/${lastLoggedInAccount}_tooltip.svg`}
            alt={`${lastLoggedInAccount} 툴팁 로고`}
          />
        )}
      </div>
      <section className={css({ ...loginButtonSectionStyles })}>
        <LoginButton
          buttonText="Google로 로그인"
          buttonIcon={<img src="/google.svg" alt="구글 로고" />}
        />
        <LoginButton
          buttonText="Apple로 로그인"
          buttonIcon={<img src="/apple.svg" alt="애플 로고" />}
        />
      </section>
      <button className={css({ ...cannotLoginButtonStyles })}>
        <span className={css({ ...cannotLoginButtonTextStyles })}>
          로그인이 안 되나요?
        </span>
        <IconChevronRight className={css({ ...iconChevronRightStyles })} />
      </button>
      <div className={css({ ...orWrapperStyles })}>
        <div className={css({ ...orLineStyles })} />
        <span className={css({ ...orTextStyles })}>또는</span>
        <div className={css({ ...orLineStyles })} />
      </div>
      <button className={css({ ...signUpButtonStyles })}>SOPT 회원가입</button>
    </div>
  );
}

export default LoginSection;

const loginSectionStyles = css.raw({
  marginTop: "35px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  "@media (max-width: 480px)": {
    marginTop: "32px",
  },
});

const loginButtonSectionStyles = css.raw({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  marginTop: "8px",
});

const lastLoggedInBannerStyles = css.raw({
  height: "51px",
});

const cannotLoginButtonStyles = css.raw({
  display: "flex",
  alignItems: "center",
  marginTop: "19px",
  color: "gray.30",

  "&:hover": {
    cursor: "pointer",
    color: "gray.50",
  },

  "&:active": {
    color: "gray.100",
  },
});

const cannotLoginButtonTextStyles = css.raw({
  textStyle: "label-3-14-sb",
});

const iconChevronRightStyles = css.raw({
  width: "16px",
  height: "16px",
});

const orWrapperStyles = css.raw({
  display: "flex",
  gap: "8px",
  alignItems: "center",
  marginTop: "24px",
});
const orLineStyles = css.raw({
  width: "140.5px",
  height: "1px",
  backgroundColor: "gray.300",
});

const orTextStyles = css.raw({
  textStyle: "body-4-13-l",
  color: "gray.300",
});

const signUpButtonStyles = css.raw({
  width: "380px",
  height: "56px",
  marginTop: "16px",
  borderRadius: "12px",
  textStyle: "label-1-18-sb",
  color: "white",
  backgroundColor: "gray.700",

  "&:hover": {
    cursor: "pointer",
    backgroundColor: "gray.800",
  },

  "&:active": {
    backgroundColor: "gray.900",
  },

  "@media (max-width: 480px)": {
    width: "335px",
    height: "48px",
    textStyle: "label-2-16-sb",
  },
});