"use client";

import { css } from "@/styled-system/css";

import LoginButton from "./LoginButton";
import { IconChevronRight } from "@sopt-makers/icons";
import LastLoggedInBanner from "./LastLoggedInBanner";
import CannotLoginModal from "./CannotLoginModal";
import { useState } from "react";
import CannotLoginModalPortal from "./CannotLoginModalPortal";

function LoginSection() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleClickCannotLoginButton = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      {isModalOpen && <CannotLoginModal />}
      <div className={css({ ...loginSectionStyles })}>
        <LastLoggedInBanner />
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
        <button
          className={css({ ...cannotLoginButtonStyles })}
          onClick={handleClickCannotLoginButton}
        >
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
        <button className={css({ ...signUpButtonStyles })}>
          SOPT 회원가입
        </button>
      </div>
    </>
  );
}

export default LoginSection;

const loginSectionStyles = css.raw({
  marginTop: "3.5rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  "@media (max-width: 480px)": {
    marginTop: "3.2rem",
  },
});

const loginButtonSectionStyles = css.raw({
  display: "flex",
  flexDirection: "column",
  gap: "1.2rem",
  marginTop: "0.8rem",
});

const cannotLoginButtonStyles = css.raw({
  display: "flex",
  alignItems: "center",
  marginTop: "1.9rem",
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
  width: "1.6rem",
  height: "1.6rem",
});

const orWrapperStyles = css.raw({
  display: "flex",
  gap: "0.8rem",
  alignItems: "center",
  marginTop: "2.4rem",
});
const orLineStyles = css.raw({
  width: "14.05rem",
  height: "0.1rem",
  backgroundColor: "gray.300",
});

const orTextStyles = css.raw({
  textStyle: "body-4-13-l",
  color: "gray.300",
});

const signUpButtonStyles = css.raw({
  width: "38rem",
  height: "5.6rem",
  marginTop: "1.6rem",
  borderRadius: "1.2rem",
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
    width: "33.5rem",
    height: "4.8rem",
    textStyle: "label-2-16-sb",
  },
});
