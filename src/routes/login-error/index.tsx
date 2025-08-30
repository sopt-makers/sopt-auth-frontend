import ReLoginSection from '@/src/components/login-error/ReLoginSection';
import { css } from '@/styled-system/css';
import { createFileRoute } from '@tanstack/react-router';
import loginErrorIcon from '@/src/assets/login_error.svg';
import makersLogo from '@/src/assets/makers.png';

export const Route = createFileRoute('/login-error/')({
  component: Index,
});

function Index() {
  return (
    <div className={css({ ...pageWrapperStyles })}>
      <main className={css({ ...mainWrapperStyles })}>
        <div className={css({ ...mainImgTextWrapperStyles })}>
          <img src={loginErrorIcon} alt="로그인 에러 이미지" className={css({ ...errorImgStyles })} />
          <div className={css({ ...mainTextStyles })}>
            <h1 className={css({ ...mainTitleStyles })}>
              앗! <span className={css({ ...emphasizeStyles })}>회원 정보</span>
              를 찾을 수 없어요.
              <br />
            </h1>
            <h2 className={css({ ...subTitleStyles })}>먼저 회원가입 후, 다시 로그인해주세요.</h2>
          </div>
        </div>
        <ReLoginSection />
      </main>
      <footer
        className={css({
          ...footerStyles,
        })}>
        <span
          className={css({
            ...footerTextStyles,
          })}>
          이 서비스를 만든 SOPT makers가 궁금하다면?
        </span>
        <a href="https://makers.sopt.org">
          <img
            className={css({
              ...makersImgStyles,
            })}
            src={makersLogo}
            alt="makers 로고"
          />
        </a>
      </footer>
    </div>
  );
}

const pageWrapperStyles = css.raw({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  width: '100%',
  height: '100vh',

  '@media (max-width: 480px)': {
    height: '100dvh',
  },
});

const mainWrapperStyles = css.raw({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',

  height: 'calc(100vh - 19.7rem)',

  '@media (max-width: 480px)': {
    display: 'block',
    height: '100dvh',
  },
});

const mainImgTextWrapperStyles = css.raw({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  '@media (max-width: 480px)': {
    justifyContent: 'center',
    height: 'calc(100dvh - 11.4rem)',
  },
});

const errorImgStyles = css.raw({
  width: '19.4rem',
  height: '19.4rem',
});

const mainTextStyles = css.raw({
  marginTop: '2.8rem',

  textAlign: 'center',
  color: 'white',

  '@media (max-width: 480px)': {
    marginTop: '0.8rem',
  },
});

const mainTitleStyles = css.raw({
  fontWeight: 'bold',
  fontSize: '4rem',
  lineHeight: '6rem',
  letterSpacing: '-2%',

  '@media (max-width: 480px)': {
    fontWeight: 600,
    fontSize: '2.4rem',
    lineHeight: '3.6rem',
    letterSpacing: '-2%',
  },
});

const emphasizeStyles = css.raw({
  color: 'secondary',
});

const subTitleStyles = css.raw({
  marginTop: '0.6rem',

  textStyle: ' title-3-24-sb',

  '@media (max-width: 480px)': {
    textStyle: 'label-1-18-sb',
  },
});

const footerStyles = css.raw({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  marginBottom: '10rem',

  '@media (max-width: 480px)': {
    display: 'none',
  },
});

const footerTextStyles = css.raw({
  textStyle: 'body-2-16-r',
  color: 'gray.600',
});

const makersImgStyles = css.raw({
  width: '18.785rem',
  height: '5.1rem',
  marginTop: '2rem',
});
