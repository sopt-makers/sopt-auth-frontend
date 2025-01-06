"use client";

import { css } from "@/styled-system/css";
import { IconChevronLeft } from "@sopt-makers/icons";
import { useRouter } from "next/navigation";

function GoBackButton() {
  const router = useRouter();
  const handleClick = () => {
    router.back();
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
