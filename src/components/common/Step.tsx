import { ReactNode } from "react";
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
    <div className={css({ ...stepWrapperStyles })}>
      <div
        className={cx(
          stepCircleStyles,
          isActive || isCompleted
            ? activeBackgroundStyles
            : inactiveBackgroundStyles
        )}
      >
        {isCompleted ? (
          <IconCheck className={css({ ...chevronRightStyles })} />
        ) : (
          <span className={css({ ...circleTextStyles })}>{stepNumber}</span>
        )}
      </div>
      <span
        className={cx(
          stepTextStyles,
          isActive && activeTextStyles,
          !isActive && inactiveTextStyles
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
        connectorStyles,
        isCompleted ? activeBackgroundStyles : inactiveBackgroundStyles
      )}
    />
  );
}

interface StepRootProps {
  children: ReactNode;
}

function StepRoot({ children }: StepRootProps) {
  return <div className={stepContainerStyles}>{children}</div>;
}

const Step = {
  Root: StepRoot,
  Circle: StepCircle,
  Connector: StepConnector,
};

export default Step;

const stepWrapperStyles = css.raw({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "1.4rem",
  color: "white",
});

const stepCircleStyles = css({
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

const chevronRightStyles = css.raw({
  width: "2.2rem",
  height: "2.2rem",
});

const circleTextStyles = css.raw({
  fontSize: "15px",
  fontWeight: "600",
  color: "white",

  "@media (max-width: 480px)": {
    fontSize: "12px",
  },
});

const stepTextStyles = css({
  fontSize: "14px",
  fontWeight: "600",

  "@media (max-width: 480px)": {
    fontSize: "12px",
  },
});

const activeTextStyles = css({
  color: "white",
});

const inactiveTextStyles = css({
  color: "gray.400",
});

const connectorStyles = css({
  position: "absolute",
  top: "calc(2.8rem / 2)",
  left: "50%",
  transform: "translateX(-50%)",
  width: "calc(100% - (2.4rem * 2 + 36px) )",
  height: "1px",
  fontFamily: "SUIT",

  "@media (max-width: 480px)": {
    top: "calc(2.2rem / 2)",
    width: "calc(100% - (2.2rem * 2 + 36px) )",
  },
});

const stepContainerStyles = css({
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "42rem",

  marginTop: "6.9rem",

  "@media (max-width: 480px)": {
    width: "100%",
    marginTop: "4.8rem",
  },
});
