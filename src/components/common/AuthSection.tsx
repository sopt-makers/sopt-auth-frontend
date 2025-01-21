"use client";

import { ReactNode, ChangeEvent, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { Button, TextField } from "@sopt-makers/ui";
import { css, cx } from "@/styled-system/css";
import { useTimer } from "@/src/hooks/useTimer";
import { formatTime } from "@/src/utils/formatter";
import { postAuthPhone } from "@/src/api/postAuthPhone";

interface AuthSectionProps {
  children?: ReactNode;
  nextURL: "/sign-up/social" | "/social-account-linking/social";
}

function AuthSection({ children, nextURL }: AuthSectionProps) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [authNumber, setAuthNumber] = useState("");
  const [authNumberErrorMessage, setAuthNumberErrorMessage] = useState("");
  const [phoneNumberErrorMessage, setPhoneNumberErrorMessage] = useState("");
  const [authButtonText, setAuthButtonText] = useState<
    "인증번호 받기" | "재전송하기"
  >("인증번호 받기");
  const [isActive, setIsActive] = useState(false);

  const navigate = useNavigate();

  const handleChangedPhoneNumber = (e: ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
  };

  const handleChangeAuthNumber = (e: ChangeEvent<HTMLInputElement>) => {
    setAuthNumber(e.target.value);
  };

  const timerCallback = () => {
    setAuthNumberErrorMessage(
      "3분이 초과되었어요. 인증번호를 다시 요청해주세요."
    );
    setIsActive(false);
  };

  const { timeLeft, resetTime } = useTimer(isActive, timerCallback, 10);

  const handleSendAuthNumber = async () => {
    if (phoneNumber === "") {
      setPhoneNumberErrorMessage("전화번호를 확인해주세요.");
    } else {
      try {
        await postAuthPhone(phoneNumber);

        setAuthButtonText("재전송하기");
        setAuthNumberErrorMessage("");
        setPhoneNumberErrorMessage("");
        resetTime();
        setIsActive(true);
      } catch (error) {
        if (error instanceof Error) {
          setPhoneNumberErrorMessage(
            "SOPT 활동 시 사용한 전화번호가 아니에요."
          );
        }
      }
    }
  };

  const handleAuthComplete = () => {
    // LINK: https://www.notion.so/sopt-makers/ded309d5ff9a40a184c25816eb96e084?pvs=4
    // TODO: API 함수 작성

    navigate({ to: nextURL });
  };

  return (
    <>
      <section className={css({ ...authSectionStyles })}>
        <h3 className={css({ ...phoneTitleStyles })}>전화번호</h3>
        <div className={css({ ...phoneWrapperStyles })}>
          <TextField
            value={phoneNumber}
            onChange={handleChangedPhoneNumber}
            placeholder="010XXXXXXXX"
            isError={phoneNumberErrorMessage.length > 0}
            errorMessage={phoneNumberErrorMessage}
            className={css({ ...phoneInputStyles })}
          />
          <Button onClick={handleSendAuthNumber}>{authButtonText}</Button>
        </div>
        <div className={css({ ...authNumberWrapperStyles })}>
          <TextField
            value={authNumber}
            onChange={handleChangeAuthNumber}
            placeholder="인증번호를 입력해주세요."
            isError={authNumberErrorMessage.length > 0}
            errorMessage={authNumberErrorMessage}
            className={css({ ...authNumberInputStyles })}
          />
          <span
            className={cx(
              timeStyles,
              authNumberErrorMessage.length > 0 && errorTextStyles
            )}
          >
            {timeLeft === 180 ? "3:00" : formatTime(timeLeft)}
          </span>
        </div>
      </section>
      {children}
      <Button
        size="lg"
        disabled={
          !isActive ||
          authNumber.length === 0 ||
          authNumberErrorMessage.length > 0
        }
        onClick={handleAuthComplete}
        className={css({ ...completeButtonStyles })}
      >
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

const timeStyles = css({
  position: "absolute",
  right: "1.6rem",
  textStyle: "body-2-16-m",
  color: "white",

  "@media (max-width: 480px)": {
    textStyle: "body-3-14-m",
  },
});

const errorTextStyles = css({
  color: "red.400",
});

const authNumberWrapperStyles = css.raw({
  position: "relative",
  display: "flex",
  alignItems: "center",
});

const completeButtonStyles = css.raw({
  marginTop: "4.8rem",
  width: "100%",

  "@media (max-width: 480px)": {
    marginTop: "auto",
    marginBottom: "3.4rem",
  },
});
