import { ReactNode, ChangeEvent, useState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { Button, TextField, useToast } from '@sopt-makers/ui';
import { css, cx } from '@/styled-system/css';
import { useTimer } from '@/src/hooks/useTimer';
import { formatTime } from '@/src/utils/formatter';
import { postAuthPhone } from '@/src/api/postAuthPhone';
import { postVerifyPhone } from '@/src/api/postVerifyPhone';
import { isValidPhone } from '@/src/utils/validator';
import { formatPhoneNumber, extractPhoneDigits } from '@/src/utils/formatter';

interface AuthSectionProps {
  children?: ReactNode;
  nextURL: '/sign-up/social' | '/social-account-linking/social';
}

function AuthSection({ children, nextURL }: AuthSectionProps) {
  const [numberInput, setNumberInput] = useState({ phoneNumber: '', authNumber: '' });
  const [errorMessage, setErrorMessage] = useState({ authNumber: '', phoneNumber: '' });
  const [authButtonText, setAuthButtonText] = useState<'전송하기' | '재전송하기'>('전송하기');

  const { open } = useToast();

  const navigate = useNavigate();

  const handleChangedPhoneNumber = (e: ChangeEvent<HTMLInputElement>) => {
    setNumberInput((prev) => ({ ...prev, phoneNumber: formatPhoneNumber(e.target.value) }));
  };

  const handleChangeAuthNumber = (e: ChangeEvent<HTMLInputElement>) => {
    setErrorMessage((prev) => ({ ...prev, authNumber: '' }));
    setNumberInput((prev) => ({ ...prev, authNumber: e.target.value }));
  };

  const timerCallback = () => {
    setNumberInput((prev) => ({ ...prev, authNumber: '' }));
    setErrorMessage((prev) => ({ ...prev, authNumber: '3분이 초과되었어요. 인증번호를 다시 요청해주세요.' }));
  };

  const { timeLeft, reset, start, isTimerActive } = useTimer(timerCallback);

  const handleSendAuthNumber = async () => {
    if (numberInput.phoneNumber === '') {
      setErrorMessage((prev) => ({ ...prev, phoneNumber: '전화번호를 확인해주세요.' }));
    } else {
      try {
        await postAuthPhone({
          phone: extractPhoneDigits(numberInput.phoneNumber),
          type: nextURL === '/sign-up/social' ? 'REGISTER' : 'CHANGE_SOCIAL_PLATFORM',
        });
        open({
          icon: 'success',
          content: '인증번호가 전송되었어요.',
        });

        setAuthButtonText('재전송하기');
        setNumberInput((prev) => ({ ...prev, authNumber: '' }));
        setErrorMessage({ phoneNumber: '', authNumber: '' });
        reset();
        start();
      } catch (error) {
        if (error instanceof Error) {
          setErrorMessage((prev) => ({ ...prev, phoneNumber: error.message }));
        }
      }
    }
  };

  console.log(extractPhoneDigits(numberInput.phoneNumber));

  const handleAuthComplete = async () => {
    try {
      const response = await postVerifyPhone({
        phone: extractPhoneDigits(numberInput.phoneNumber),
        code: numberInput.authNumber,
        type: nextURL === '/sign-up/social' ? 'REGISTER' : 'CHANGE_SOCIAL_PLATFORM',
      });
      const { name, phone } = response.data;

      sessionStorage.setItem('name', name);
      sessionStorage.setItem('phone', phone);

      setErrorMessage((prev) => ({ ...prev, authNumber: '' }));
      navigate({ to: nextURL });
    } catch (error) {
      if (error instanceof Error) {
        setErrorMessage((prev) => ({ ...prev, authNumber: error.message }));
      }
    }
  };

  return (
    <>
      <section className={css({ ...authSectionStyles })}>
        <h3 className={css({ ...phoneTitleStyles })}>전화번호</h3>
        <div className={css({ ...phoneWrapperStyles })}>
          <TextField
            value={numberInput.phoneNumber}
            onChange={handleChangedPhoneNumber}
            maxLength={13}
            placeholder="010-XXXX-XXXX"
            isError={errorMessage.phoneNumber.length > 0}
            errorMessage={errorMessage.phoneNumber}
            className={css({ ...phoneInputStyles })}
          />
          <Button
            disabled={!isValidPhone(numberInput.phoneNumber) || isTimerActive}
            className={css({ ...sendAuthNumberButtonStyles })}
            onClick={handleSendAuthNumber}>
            {authButtonText}
          </Button>
        </div>
        <div className={css({ ...authNumberWrapperStyles })}>
          <TextField
            value={numberInput.authNumber}
            onChange={handleChangeAuthNumber}
            maxLength={6}
            placeholder="인증번호를 입력해주세요."
            disabled={!isTimerActive}
            isError={errorMessage.authNumber.length > 0}
            errorMessage={errorMessage.authNumber}
            className={css({ ...authNumberInputStyles })}
          />
          <span className={cx(timeStyles, errorMessage.authNumber.length > 0 && errorTextStyles)}>
            {formatTime(timeLeft)}
          </span>
        </div>
      </section>
      {children}
      <Button
        size="lg"
        disabled={!isTimerActive || numberInput.authNumber.length === 0 || errorMessage.authNumber.length > 0}
        onClick={handleAuthComplete}
        className={css({ ...completeButtonStyles })}>
        SOPT 회원인증 완료
      </Button>
    </>
  );
}

export default AuthSection;

const authSectionStyles = css.raw({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.8rem',
  marginTop: '4.8rem',

  '@media (max-width: 480px)': {
    gap: '1.4rem',
  },
});

const phoneTitleStyles = css.raw({
  textStyle: 'label-2-16-sb',
  color: 'gray.400',

  '@media (max-width: 480px)': {
    textStyle: 'label-3-14-sb',
  },
});

const phoneWrapperStyles = css.raw({
  display: 'flex',
  alignItems: 'baseline',
  columnGap: '1.2rem',

  '@media (max-width: 480px)': {
    gap: '0.7rem',
  },
});

const phoneInputStyles = css.raw({
  width: '70%',
});

const authNumberInputStyles = css.raw({
  width: '100%',
  height: '48px',

  '@media (max-width: 480px)': {
    width: '100%',
  },
});

const timeStyles = css({
  position: 'absolute',
  right: '1.6rem',
  textStyle: 'body-2-16-m',
  color: 'white',

  '@media (max-width: 480px)': {
    textStyle: 'body-3-14-m',
  },
});

const errorTextStyles = css({
  color: 'red.400',
});

const authNumberWrapperStyles = css.raw({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
});

const completeButtonStyles = css.raw({
  marginTop: '4.8rem',
  width: '100%',

  '@media (max-width: 480px)': {
    marginTop: 'auto',
    marginBottom: '3.4rem',
  },
});

const sendAuthNumberButtonStyles = css.raw({
  width: '30%',

  '@media (max-width: 480px)': {
    width: '11rem',
  },
});
