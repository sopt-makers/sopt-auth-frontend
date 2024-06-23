'use client';

import '@sopt-makers/ui/dist/index.css';
import useAppleAuth from '@/hooks/useAppleAuth';
import useGoogleAuth from '@/hooks/useGoogleAuth';
import { Button } from '@sopt-makers/ui';
import { Global } from '@emotion/react';
import GlobalStyle from '@/styles/GlobalStyle';
import styled from '@emotion/styled';
import { fontsObject } from '@sopt-makers/fonts';
import { IconApple, IconGoogle } from '@/public/icons';

const page = () => {
  const googleLoginAuth = useGoogleAuth();
  const appleLoginAuth = useAppleAuth();

  return (
    <Wrapper>
      <Global styles={GlobalStyle} />
      <h2>
        SOPT 회원으로 인증된 <br />
        사용자만 로그인할 수 있어요
      </h2>
      <ButtonWrapper>
        <Button size='lg' theme='white' rounded='md' onClick={googleLoginAuth.login}>
          {/* <StIconGoogle /> */}
          Google로 로그인
        </Button>
        <Button size='lg' theme='white' rounded='md' onClick={appleLoginAuth.login}>
          {/* <StIconApple /> */}
          Apple로 로그인
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default page;

const Wrapper = styled.main`
  & > h2 {
    ${fontsObject.HEADING_2_32_B}
    text-align: center;
  }
`;

const ButtonWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 30px;

  & > button > span {
    display: flex;
    gap: 8px;
  }
`;

const StIconGoogle = styled(IconGoogle)`
  height: 22px;
`;

const StIconApple = styled(IconApple)`
  height: 40px;
  width: 40px;
`;
