"use client";

import { css } from "@/styled-system/css";
import { IconChevronRight } from "@sopt-makers/icons";
import { useState } from "react";
import CannotLoginModal from "./CannotLoginModal";

function ReLoginSection() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const handleClickCannotLoginButton = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {isModalOpen && <CannotLoginModal handleCloseModal={handleCloseModal} />}
      <div className={css({ ...reLoginSectionStyles })}>
        <button className={css({ ...reLoginButtonStyles })}>
          다시 로그인하기
        </button>
        <button
          className={css({ ...cannotLoginButtonStyles })}
          onClick={handleClickCannotLoginButton}
        >
          <span className={css({ ...cannotLoginButtonTextStyles })}>
            로그인이 안 되나요?
          </span>
          <IconChevronRight className={css({ ...iconChevronRightStyles })} />
        </button>
      </div>
    </>
  );
}

export default ReLoginSection;

const reLoginSectionStyles = css.raw({
  marginTop: "6.6rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const reLoginButtonStyles = css.raw({
  width: "32rem",
  height: "5.6rem",

  borderRadius: "1.2rem",
  backgroundColor: "white",

  textStyle: "label-1-18-sb",

  "&:hover": {
    cursor: "pointer",
    backgroundColor: "gray.50",
  },

  "&:active": {
    backgroundColor: "gray.100",
  },
});

const cannotLoginButtonStyles = css.raw({
  display: "flex",
  alignItems: "center",
  marginTop: "1.6rem",
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
