import { css } from "@/styled-system/css";
import LoginSection from "@/src/components/main/LoginSection";

import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

export default function Index() {
  return (
    <>
      <main className={css({ ...mainWrapperStyles })}>
        <h1
          className={css({
            ...mainTextStyles,
          })}
        >
          <span
            className={css({
              ...emphasizeStyles,
            })}
          >
            SOPT 회원으로{" "}
          </span>
          인증된
          <br />
          사용자만 로그인 할 수 있어요
        </h1>
        <LoginSection />
      </main>
      <footer
        className={css({
          ...footerStyles,
        })}
      >
        <span
          className={css({
            ...footerTextStyles,
          })}
        >
          All rights reserved by
        </span>
        <div className={css({ ...linkWrapperStyles })}>
          <a href="https://www.sopt.org">
            <img
              className={css({
                ...soptImgStyles,
              })}
              src="/sopt.png"
              alt="sopt 로고"
            />
          </a>
          <a href="https://makers.sopt.org">
            <img
              className={css({
                ...makersImgStyles,
              })}
              src="/makers.png"
              alt="makers 로고"
            />
          </a>
        </div>
      </footer>
    </>
  );
}

const mainWrapperStyles = css.raw({
  display: "flex",
  height: "calc(100vh - 21rem)",
  flexDirection: "column",
  justifyContent: "center",

  "@media (max-width: 480px)": {
    height: "calc(100dvh - 10rem)",
  },
});

const mainTextStyles = css.raw({
  textAlign: "center",
  textStyle: "heading-2-32-b",
  color: "white",

  "@media (max-width: 480px)": {
    textStyle: "title-3-24-sb",
  },
});

const emphasizeStyles = css.raw({
  color: "secondary",
});

const footerStyles = css.raw({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "auto",
  marginBottom: "7rem",

  "@media (max-width: 480px)": {
    marginBottom: "3.4rem",
  },
});

const footerTextStyles = css.raw({
  textStyle: "body-2-16-r",
  color: "gray.400",

  "@media (max-width: 480px)": {
    textStyle: "body-4-13-l",
  },
});

const linkWrapperStyles = css.raw({
  display: "flex",
  alignItems: "center",
  gap: "4rem",

  "@media (max-width: 480px)": {
    gap: "1.6rem",
  },
});

const soptImgStyles = css.raw({
  width: "18.4rem",
  height: "11.4rem",

  "@media (max-width: 480px)": {
    width: "7.36rem",
    height: "4.56rem",
  },
});

const makersImgStyles = css.raw({
  width: "18.785rem",
  height: "5.1rem",

  "@media (max-width: 480px)": {
    width: "7.514rem",
    height: "2.04rem",
  },
});
