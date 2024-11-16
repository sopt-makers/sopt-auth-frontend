import { css } from "@/styled-system/css";
import React from "react";
import CannotLoginModalPortal from "./CannotLoginModalPortal";

function CannotLoginModal() {
  return (
    <CannotLoginModalPortal>
      <div className={css({ ...cannotLogInModalStyles })}>CannotLoginModal</div>
    </CannotLoginModalPortal>
  );
}

export default CannotLoginModal;

const cannotLogInModalStyles = css.raw({
  position: "absolute",
  top: "0",
  left: "0",
  zIndex: "999",
  width: "100%",
  height: "100vh",
  backgroundColor: "rgba(15, 15, 18, 0.8)",
});
