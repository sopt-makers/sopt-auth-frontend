"use client";

import { css } from "@/styled-system/css";
import { ReactNode } from "react";
import { ButtonHTMLAttributes } from "react";

interface LoginButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonText: string;
  buttonIcon: ReactNode;
}

function LoginButton({ buttonText, buttonIcon, ...buttonProps }: LoginButton) {
  return (
    <button
      className={css({
        ...buttonStyles,
      })}
      {...buttonProps}
    >
      {buttonIcon}
      <span
        className={css({
          ...buttonTextStyles,
        })}
      >
        {buttonText}
      </span>
    </button>
  );
}

export default LoginButton;

const buttonStyles = css.raw({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "0.4rem",
  width: "38rem",
  height: "5.6rem",
  backgroundColor: "white",
  borderRadius: "1rem",

  "&:hover": {
    cursor: "pointer",
    backgroundColor: "gray.50",
  },

  "&:active": {
    backgroundColor: "gray.100",
  },

  "@media (max-width: 480px)": {
    width: "33.5rem",
    height: "4.8rem",
  },
});

const buttonTextStyles = css.raw({
  textStyle: "label-2-16-sb",
  color: "black",
});
