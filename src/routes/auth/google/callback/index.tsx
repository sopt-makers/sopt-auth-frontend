import { useEffect } from 'react';
import { useLogin } from '@/src/hooks/useLogin';
import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { jwtDecode } from 'jwt-decode';
import { validateNonce } from '@/src/utils/nonce';
import { useSignUp } from '@/src/hooks/useSignUp';
import { useUpdateSocialAccount } from '@/src/hooks/useUpdateSocialAccount';
export const Route = createFileRoute('/auth/google/callback/')({
  component: Index,
});

type AlertWithNavigate = {
  message: string;
  to: string;
};

function Index() {
  const navigate = useNavigate();
  const { handleLogin } = useLogin();
  const { handleSignUp } = useSignUp();
  const { handleUpdateSocialAccount } = useUpdateSocialAccount();

  const alertWithNavigate = ({ message, to }: AlertWithNavigate) => {
    alert(message);
    navigate({ to, replace: true });
  };

  useEffect(() => {
    const hash = window.location.hash.substring(1);
    const params = new URLSearchParams(hash);
    const token = params.get('id_token');
    const state = params.get('state');

    if (!token) {
      console.log('token 없음');
      alertWithNavigate({ message: '잘못된 접근입니다. 다시 시도해주세요', to: '/' });
    } else {
      const decoded = jwtDecode(token);

      if (!validateNonce(decoded)) {
        alertWithNavigate({ message: '토큰이 유효하지 않습니다. 다시 로그인 해주세요', to: '/' });
        return;
      }

      switch (state) {
        case 'login':
          handleLogin({ token, authPlatform: 'GOOGLE' });
          break;
        case 'update':
          {
            const phone = sessionStorage.getItem('phone');
            if (!phone) {
              alertWithNavigate({
                message: '잘못된 접근입니다. 다시 시도해주세요',
                to: '/social-account-linking/auth',
              });
            } else {
              handleUpdateSocialAccount({ token, authPlatform: 'GOOGLE', phone });
            }
          }
          break;
        case 'signup':
          {
            const name = sessionStorage.getItem('name');
            const phone = sessionStorage.getItem('phone');
            if (!name || !phone) {
              alertWithNavigate({ message: '잘못된 접근입니다. 다시 시도해주세요', to: '/sign-up/auth' });
            } else {
              handleSignUp({ token, authPlatform: 'GOOGLE', name, phone });
            }
          }
          break;
        default:
          alertWithNavigate({ message: '잘못된 접근입니다. 다시 시도해주세요', to: '/' });
      }
    }
  }, []);

  // NOTE: 서버 테스트용 임시 버튼 주석처리
  // return <Button onClick={() => navigate({ to: '/' })}>홈으로 돌아가기</Button>;

  return null;
}

export default Index;
