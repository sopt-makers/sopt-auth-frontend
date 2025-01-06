import { css } from "@/styled-system/css";

function Title() {
  return (
    <>
      <h1 className={css({ ...mainTextStyles })}>SOPT 회원인증</h1>
      <p className={css({ ...textStyles, ...descriptionStyles })}>
        이곳은 SOPT 회원만을 위한 공간이에요.
        <br />
        SOPT 회원인증을 위해 전화번호를 입력해 주세요.
      </p>
    </>
  );
}

export default Title;

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
