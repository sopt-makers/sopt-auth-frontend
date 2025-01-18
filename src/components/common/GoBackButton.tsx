"use client";

import { css } from "@/styled-system/css";
import { IconChevronLeft } from "@sopt-makers/icons";
import { useNavigate } from "@tanstack/react-router";

function GoBackButton() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate({ to: ".." });
  };

  return (
    <button type="button" onClick={handleClick}>
      <IconChevronLeft className={css({ ...arrowLeftStyles })} />
    </button>
  );
}

export default GoBackButton;

const arrowLeftStyles = css.raw({
  width: "2.4rem",
  height: "2.4rem",
  color: "white",
});
