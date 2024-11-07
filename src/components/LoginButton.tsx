"use client";

import { css } from "@/styled-system/css";
import React, { ReactNode } from "react";
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
  gap: "4px",
  width: "380px",
  height: "56px",
  backgroundColor: "white",
  borderRadius: "10px",

  "&:hover": {
    cursor: "pointer",
    backgroundColor: "gray.50",
  },

  "&:active": {
    backgroundColor: "gray.100",
  },

  "@media (max-width: 480px)": {
    width: "335px",
    height: "48px",
  },
});

const buttonTextStyles = css.raw({
  textStyle: "label-2-16-sb",
  color: "black",
});
