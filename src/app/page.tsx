import { css } from "@/styled-system/css";
import LoginSection from "../components/LoginSection";
import Link from "next/link";

export default function Home() {
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
          <Link href="https://www.sopt.org">
            <img
              className={css({
                ...soptImgStyles,
              })}
              src="/sopt.png"
              alt="sopt 로고"
            />
          </Link>
          <Link href="https://makers.sopt.org">
            <img
              className={css({
                ...makersImgStyles,
              })}
              src="/makers.png"
              alt="makers 로고"
            />
          </Link>
        </div>
      </footer>
    </>
  );
}

const mainWrapperStyles = css.raw({
  display: "flex",
  height: "calc(100vh - 210px)",
  flexDirection: "column",
  justifyContent: "center",

  "@media (max-width: 480px)": {
    height: "calc(100dvh - 100px)",
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
  marginBottom: "70px",

  "@media (max-width: 480px)": {
    marginBottom: "34px",
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
  gap: "40px",

  "@media (max-width: 480px)": {
    gap: "16px",
  },
});

const soptImgStyles = css.raw({
  width: "184px",
  height: "114px",

  "@media (max-width: 480px)": {
    width: "73.6px",
    height: "45.6px",
  },
});

const makersImgStyles = css.raw({
  width: "187.85px",
  height: "51px",

  "@media (max-width: 480px)": {
    width: "75.14px",
    height: "20.4px",
  },
});
