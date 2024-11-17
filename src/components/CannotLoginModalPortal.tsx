import { ReactNode } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
  children: ReactNode;
}

function CannotLoginModalPortal({ children }: PortalProps) {
  if (typeof window === "undefined") return null;

  const modalElement = document.getElementById("modal");
  if (!modalElement) return null;

  return createPortal(children, modalElement);
}

export default CannotLoginModalPortal;
