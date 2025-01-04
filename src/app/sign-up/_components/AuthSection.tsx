import { ReactNode } from "react";
import { Button, TextField } from "@sopt-makers/ui";
import { css } from "@/styled-system/css";

interface AuthSectionProps {
  children?: ReactNode;
}

function AuthSection({ children }: AuthSectionProps) {
  return (
    <>
      <section className={css({ ...authSectionStyles })}>
        <h3 className={css({ ...phoneTitleStyles })}>전화번호</h3>
        <div className={css({ ...phoneWrapperStyles })}>
          <TextField
            value="fs"
            placeholder="전화번호를 입력해주세요."
            className={css({ ...phoneInputStyles })}
          />
          <Button>인증번호 받기</Button>
        </div>
        <div className={css({ ...authNumberWrapperStyles })}>
          <TextField
            value="fds"
            placeholder="인증번호를 입력해주세요."
            className={css({ ...authNumberInputStyles })}
          />
          <span className={css({ ...timeStyles })}>3:00</span>
        </div>
      </section>
      {children}
      <Button size="lg" className={css({ ...completeButtonStyles })}>
        SOPT 회원인증 완료
      </Button>
    </>
  );
}

export default AuthSection;

const authSectionStyles = css.raw({
  display: "flex",
  flexDirection: "column",
  gap: "1.8rem",
  marginTop: "4.8rem",

  "@media (max-width: 480px)": {
    gap: "1.4rem",
  },
});

const phoneTitleStyles = css.raw({
  textStyle: "label-2-16-sb",
  color: "gray.400",

  "@media (max-width: 480px)": {
    textStyle: "label-3-14-sb",
  },
});

const phoneWrapperStyles = css.raw({
  display: "flex",
  alignItems: "baseline",
  columnGap: "1.2rem",

  "@media (max-width: 480px)": {
    gap: "0.7rem",
  },
});

const phoneInputStyles = css.raw({
  flex: 1,
});

const authNumberInputStyles = css.raw({
  width: "42rem",
  height: "48px",

  "@media (max-width: 480px)": {
    width: "100%",
  },
});

const timeStyles = css.raw({
  textStyle: "body-2-16-m",
  color: "white",

  "@media (max-width: 480px)": {
    textStyle: "body-3-14-m",
  },
});

const authNumberWrapperStyles = css.raw({
  display: "flex",
  flexGrow: 0,
  alignItems: "center",
  columnGap: "0.8rem",
  paddingRight: "1.6rem",
  borderRadius: "10px",

  backgroundColor: "gray.800",
});

const completeButtonStyles = css.raw({
  marginTop: "4.8rem",
  width: "100%",

  "@media (max-width: 480px)": {
    marginTop: "auto",
    marginBottom: "3.4rem",
  },
});
