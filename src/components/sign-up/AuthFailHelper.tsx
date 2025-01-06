import { css } from "@/styled-system/css";
import { IconChevronRight } from "@sopt-makers/icons";

function AuthFailHelper() {
  return (
    <div className={css({ ...helperWrapperStyles })}>
      <img src="/helper_circle.svg" className={css({ ...helperIconStyles })} />

      <span>
        <button className={css({ ...helperSpanStyles })}>
          <h3 className={css({ ...helperTitleStyles })}>
            SOPT 회원 인증에 실패하셨나요?
          </h3>
          <IconChevronRight className={css({ ...chevronRightStyles })} />
        </button>
        <p className={css({ ...helperTextStyles })}>
          번호가 바뀌었거나, 인증이 어려우신 경우 추가 정보
          <br />
          인증을 통해 가입을 도와드리고 있어요!
        </p>
      </span>
    </div>
  );
}

export default AuthFailHelper;

const helperWrapperStyles = css.raw({
  display: "flex",
  columnGap: "1rem",
  border: "1px solid",
  borderColor: "blueAlpha.600",
  padding: "1.4rem 1.8rem",
  borderRadius: "18px",
  backgroundColor: "blueAlpha.100",

  "&:hover": {
    backgroundColor: "blueAlpha.200",
  },
});

const helperIconStyles = css.raw({
  width: "2.0rem",
  height: "2.0rem",
});

const helperSpanStyles = css.raw({
  display: "flex",
  cursor: "pointer",
});

const helperTitleStyles = css.raw({
  textStyle: "label-3-14-sb",
  color: "gray.30",
});

const helperTextStyles = css.raw({
  marginTop: "1.4rem",
  textStyle: "label-4-12-sb",
  color: "gray.200",
});

const chevronRightStyles = css.raw({
  color: "white",
  width: "1.6rem",
  height: "1.6rem",
});
