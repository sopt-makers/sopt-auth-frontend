"use client";

import React, { ReactNode } from "react";
import { css, cx } from "@/styled-system/css";
import { IconCheck } from "@sopt-makers/icons";

interface StepCircleProps {
  stepNumber: number;
  text: string;
  isActive?: boolean;
  isCompleted?: boolean;
}

function StepCircle({
  stepNumber,
  text,
  isActive,
  isCompleted,
}: StepCircleProps) {
  return (
    <div className={stepWrapper}>
      <div
        className={cx(
          stepCircle,
          isActive || isCompleted
            ? activeBackgroundStyles
            : inactiveBackgroundStyles
        )}
      >
        {isCompleted ? (
          <IconCheck />
        ) : (
          <span className={circleText}>{stepNumber}</span>
        )}
      </div>
      <span
        className={cx(
          stepText,
          isActive && activeText,
          !isActive && inactiveText
        )}
      >
        {text}
      </span>
    </div>
  );
}

interface StepConnectorProps {
  isCompleted?: boolean;
}

export function StepConnector({ isCompleted = false }: StepConnectorProps) {
  return (
    <div
      className={cx(
        connector,
        isCompleted ? activeBackgroundStyles : inactiveBackgroundStyles
      )}
    />
  );
}

interface StepRootProps {
  children: ReactNode;
}

function StepRoot({ children }: StepRootProps) {
  return <div className={stepContainer}>{children}</div>;
}

const Step = {
  Root: StepRoot,
  Circle: StepCircle,
  Connector: StepConnector,
};

export default Step;

const stepWrapper = css({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "1.4rem",
  color: "white",
});

const stepCircle = css({
  width: "2.8rem",
  height: "2.8rem",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1,

  "@media (max-width: 480px)": {
    width: "2.4rem",
    height: "2.4rem",
  },
});

const inactiveBackgroundStyles = css({
  backgroundColor: "gray.600",
});

const activeBackgroundStyles = css({
  backgroundColor: "#346DFF",
});

const circleText = css({
  fontSize: "15px",
  fontWeight: "600",
  color: "white",

  "@media (max-width: 480px)": {
    fontSize: "12px",
  },
});

const stepText = css({
  fontSize: "14px",
  fontWeight: "600",

  "@media (max-width: 480px)": {
    fontSize: "12px",
  },
});

const activeText = css({
  color: "white",
});

const inactiveText = css({
  color: "gray.400",
});

const connector = css({
  position: "absolute",
  top: "calc(2.4rem / 2)",
  left: "50%",
  transform: "translateX(-50%)",
  width: "calc(100% - (2.4rem * 2 + 36px) )",
  height: "1px",
  fontFamily: "SUIT",
});

const stepContainer = css({
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  marginTop: "6.9rem",

  "@media (max-width: 480px)": {
    marginTop: "4.8rem",
  },
});
