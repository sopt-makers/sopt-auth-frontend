import ReLoginSection from "@/src/components/ReLoginSection";
import { css } from "@/styled-system/css";
import Link from "next/link";
import React from "react";

function page() {
  return (
    <div className={css({ ...pageWrapperStyles })}>
      <main className={css({ ...mainWrapperStyles })}>
        <img
          src="/login_error.svg"
          alt="로그인 에러 이미지"
          className={css({ ...errorImageStyles })}
        />
        <div className={css({ ...mainTextStyles })}>
          <h1 className={css({ ...mainTitleStyles })}>
            앗! <span className={css({ ...emphasizeStyles })}>회원 정보</span>를
            찾을 수 없어요.
            <br />
          </h1>
          <h2 className={css({ ...subTitleStyles })}>
            먼저 회원가입 후, 다시 로그인해주세요.
          </h2>
        </div>
        <ReLoginSection />
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
          이 서비스를 만든 SOPT makers가 궁금하다면?
        </span>
        <Link href="https://makers.sopt.org">
          <img
            className={css({
              ...makersImgStyles,
            })}
            src="/makers.png"
            alt="makers 로고"
          />
        </Link>
      </footer>
    </div>
  );
}

export default page;

const pageWrapperStyles = css.raw({
  width: "100%",
  height: "100vh",

  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
});

const mainWrapperStyles = css.raw({
  display: "flex",
  height: "calc(100vh - 19.7rem)",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",

  "@media (max-width: 480px)": {
    height: "calc(100dvh - 11.4rem)",
  },
});

const errorImageStyles = css.raw({
  width: "19.4rem",
  height: "19.4rem",
});

const mainTextStyles = css.raw({
  marginTop: "2.8rem",
  textAlign: "center",
  color: "white",
});

const mainTitleStyles = css.raw({
  fontWeight: "bold",
  fontSize: "4rem",
  lineHeight: "6rem",
  letterSpacing: "-2%",
});

const emphasizeStyles = css.raw({
  color: "secondary",
});

const subTitleStyles = css.raw({
  marginTop: "0.6rem",

  textStyle: " title-3-24-sb",
});

const footerStyles = css.raw({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginBottom: "10rem",
});

const footerTextStyles = css.raw({
  textStyle: "body-2-16-r",
  color: "gray.600",
});

const makersImgStyles = css.raw({
  width: "18.785rem",
  height: "5.1rem",
  marginTop: "2rem",
});
