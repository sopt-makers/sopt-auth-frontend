import { css } from '@/styled-system/css';
import Step from '@/src/components/common/Step';
import LoginButton from '@/src/components/main/LoginButton';
import { createFileRoute, redirect } from '@tanstack/react-router';
import { getGoogleAuthUrl } from '@/src/utils/google';
import { isAuthenticated } from '@/src/utils/auth';
import { useAuthWithApple } from '@/src/hooks/useAuthWithApple';

export const Route = createFileRoute('/sign-up/social/')({
  component: Index,
  beforeLoad: () => {
    if (isAuthenticated()) {
      throw redirect({
        to: '/',
      });
    }
  },
});

function Index() {
  const name = sessionStorage.getItem('name');
  const { handleSignUp } = useAuthWithApple();

  const handleGoogleLogin = () => {
    location.href = getGoogleAuthUrl({ state: 'signup' });
  };

  const handleAppleLogin = async () => {
    const name = sessionStorage.getItem('name');
    const phone = sessionStorage.getItem('phone');

    if (!name || !phone) {
      alert('이름과 전화번호를 입력해주세요');
      return;
    }

    await handleSignUp({
      name: name,
      phone: phone,
    }).then(() => {
      sessionStorage.removeItem('name');
      sessionStorage.removeItem('phone');
    });
  };

  return (
    <main className={css({ ...mainWrapperStyles })}>
      <Step.Root>
        <Step.Circle stepNumber={1} text="SOPT 회원인증" isCompleted />
        <Step.Connector isCompleted />
        <Step.Circle stepNumber={2} text="소셜 계정 연동" isActive />
      </Step.Root>
      <h1 className={css({ ...mainTextStyles })}>소셜 계정 연동</h1>
      <p className={css({ ...textStyles, ...descriptionStyles })}>
        {`반갑습니다 ${name}님`}
        <br />
        소셜로그인을 진행하여 회원가입을 완료해주세요
      </p>
      <section className={css({ ...loginButtonSectionStyles })}>
        <LoginButton
          onClick={handleGoogleLogin}
          buttonText="Google로 로그인"
          buttonIcon={<img src="/google.svg" alt="구글 로고" />}
        />
        <LoginButton
          onClick={handleAppleLogin}
          buttonText="Apple로 로그인"
          buttonIcon={<img src="/apple.svg" alt="애플 로고" />}
        />
      </section>
    </main>
  );
}

export default Index;

const mainWrapperStyles = css.raw({
  display: 'flex',
  height: '100vh',
  flexDirection: 'column',
  alignItems: 'center',

  '@media (max-width: 480px)': {
    height: '100dvh',
  },
});

const mainTextStyles = css.raw({
  textAlign: 'center',
  textStyle: 'heading-2-32-b',
  color: 'white',
  marginTop: '9.5rem',

  '@media (max-width: 480px)': {
    textStyle: 'title-3-24-sb',
    marginTop: '5.4rem',
  },
});

const textStyles = css.raw({
  display: 'flex',
  alignItems: 'center',
  textStyle: 'body-2-16-m',
  color: 'gray.200',

  '@media (max-width:480px)': {
    textStyle: 'label-4-12-sb',
  },
});

const descriptionStyles = css.raw({
  textAlign: 'center',
  margin: '1.4rem auto 0 auto',
});

const loginButtonSectionStyles = css.raw({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.2rem',
  marginTop: '6.6rem',
});
