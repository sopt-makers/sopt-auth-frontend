import { css } from "@/styled-system/css";
import { type ButtonHTMLAttributes } from "react";

interface CannotLoginModalButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

function CannotLoginModalButton({
  children,
  ...buttonElementProps
}: CannotLoginModalButtonProps) {
  return (
    <button
      className={css({ ...cannotLoginModalButtonStyles })}
      type="button"
      {...buttonElementProps}
    >
      {children}
    </button>
  );
}

export default CannotLoginModalButton;

const cannotLoginModalButtonStyles = css.raw({
  display: "flex",

  width: "100%",
  height: "4.4rem",
  padding: "1rem",

  borderRadius: "1.2rem",

  backgroundColor: "gray.800",

  color: "gray.10",
  textStyle: "body-2-16-r",

  cursor: "pointer",

  "&:hover": {
    backgroundColor: "gray.700",
  },

  "&:action": {
    backgroundColor: "gray.600",
  },
});
