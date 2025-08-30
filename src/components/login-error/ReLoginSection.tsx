'use client';

import { css } from '@/styled-system/css';
import { IconChevronRight } from '@sopt-makers/icons';
import { useState } from 'react';
import CannotLoginModal from '@/src/components/common/CannotLoginModal';
import { useNavigate } from '@tanstack/react-router';

function ReLoginSection() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const handleClickCannotLoginButton = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const navigateToHome = () => {
    navigate({ to: '/' });
  };

  return (
    <>
      {isModalOpen && <CannotLoginModal handleCloseModal={handleCloseModal} />}
      <div className={css({ ...reLoginSectionStyles })}>
        <button className={css({ ...reLoginButtonStyles })} onClick={navigateToHome}>
          다시 로그인하기
        </button>
        <button className={css({ ...cannotLoginButtonStyles })} onClick={handleClickCannotLoginButton}>
          <span className={css({ ...cannotLoginButtonTextStyles })}>로그인이 안 되나요?</span>
          <IconChevronRight className={css({ ...iconChevronRightStyles })} />
        </button>
      </div>
    </>
  );
}

export default ReLoginSection;

const reLoginSectionStyles = css.raw({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  marginTop: '6.6rem',

  '@media (max-width: 480px)': {
    marginTop: '0',
    marginBottom: '2.4rem',
  },
});

const reLoginButtonStyles = css.raw({
  width: '32rem',
  height: '5.6rem',

  borderRadius: '1.2rem',
  backgroundColor: 'white',

  textStyle: 'label-1-18-sb',

  '&:hover': {
    cursor: 'pointer',
    backgroundColor: 'gray.50',
  },

  '&:active': {
    backgroundColor: 'gray.100',
  },
});

const cannotLoginButtonStyles = css.raw({
  display: 'flex',
  alignItems: 'center',

  marginTop: '1.6rem',

  color: 'gray.30',

  '&:hover': {
    cursor: 'pointer',
    color: 'gray.50',
  },

  '&:active': {
    color: 'gray.100',
  },
});

const cannotLoginButtonTextStyles = css.raw({
  textStyle: 'label-3-14-sb',
});

const iconChevronRightStyles = css.raw({
  width: '1.6rem',
  height: '1.6rem',
});
