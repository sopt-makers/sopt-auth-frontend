import { css } from "@/styled-system/css";
import { type MouseEvent } from "react";
import CannotLoginModalPortal from "./CannotLoginModalPortal";
import { IconAlertCircle } from "@sopt-makers/icons";
import CannotLoginModalButton from "./CannotLoginModalButton";

interface CannotLoginModalProps {
  handleCloseModal: () => void;
}

function CannotLoginModal({ handleCloseModal }: CannotLoginModalProps) {
  const handleClickLoginAccountButton = (e: MouseEvent<HTMLButtonElement>) => {
    // 버튼 눌러도 모달 안 닫히도록 설정
    e.stopPropagation(); // 만약 버튼 누르고 모달 닫히도록 의도하고 싶으면 해당 라인 제거
  };

  const handleClickResetAccountButton = (e: MouseEvent<HTMLButtonElement>) => {
    // 버튼 눌러도 모달 안 닫히도록 설정
    e.stopPropagation(); // 만약 버튼 누르고 모달 닫히도록 의도하고 싶으면 해당 라인 제거
  };

  const handleClickKakaoChannelButton = (e: MouseEvent<HTMLButtonElement>) => {
    // 버튼 눌러도 모달 안 닫히도록 설정
    e.stopPropagation(); // 만약 버튼 누르고 모달 닫히도록 의도하고 싶으면 해당 라인 제거
  };

  return (
    <CannotLoginModalPortal>
      <div
        className={css({ ...cannotLoginModalWrapperStyles })}
        onClick={handleCloseModal}
      >
        <div className={css({ ...cannotLoginModalStyles })}>
          <h1 className={css({ ...modalTitleStyles })}>
            <IconAlertCircle className={css({ ...iconAlertCircleStyles })} />
            <span>로그인이 안 되나요?</span>
          </h1>
          <li className={css({ ...buttonListStyles })}>
            <CannotLoginModalButton onClick={handleClickLoginAccountButton}>
              로그인한 계정을 알고 싶어요.
            </CannotLoginModalButton>
            <CannotLoginModalButton onClick={handleClickResetAccountButton}>
              소셜 계정을 재설정하고 싶어요.
            </CannotLoginModalButton>
            <CannotLoginModalButton onClick={handleClickKakaoChannelButton}>
              카카오톡 채널에 문의할게요.
            </CannotLoginModalButton>
          </li>
        </div>
      </div>
    </CannotLoginModalPortal>
  );
}

export default CannotLoginModal;

const cannotLoginModalWrapperStyles = css.raw({
  position: "absolute",
  top: "0",
  left: "0",
  zIndex: "999",

  display: "flex",
  justifyContent: "center",

  width: "100%",
  height: "100vh",

  backgroundColor: "grayAlpha.800",

  "@media (max-width: 480px)": {
    alignItems: "flex-end",
  },
});

const cannotLoginModalStyles = css.raw({
  width: "41rem",
  height: "22.2rem",
  padding: "0 0.8rem",
  marginTop: "2.8rem",

  borderRadius: "1.6rem",

  backgroundColor: "gray.800",

  "@media (max-width: 480px)": {
    width: "calc(100% - 3.2rem)",
    height: "20.6rem",
    marginBottom: "0.8rem",
  },
});

const modalTitleStyles = css.raw({
  display: "flex",
  alignItems: "center",
  gap: "0.4rem",

  marginTop: "1.6rem",
  paddingLeft: "0.4rem",

  textStyle: " title-4-20-sb",
  color: "gray.10",
});

const iconAlertCircleStyles = css.raw({
  width: "2.4rem",
  height: "2.4rem",

  color: "white",
});

const buttonListStyles = css.raw({
  display: "flex",
  flexDirection: "column",
  gap: "1.2rem",

  marginTop: "1.2rem",

  "@media (max-width: 480px)": {
    gap: "0.4rem",
  },
});
