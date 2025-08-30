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

function Index() {
  const navigate = useNavigate();
  const { handleLogin } = useLogin();
  const { handleSignUp } = useSignUp();
  const { handleUpdateSocialAccount } = useUpdateSocialAccount();

  useEffect(() => {
    const hash = window.location.hash.substring(1);
    const params = new URLSearchParams(hash);
    const token = params.get('id_token');
    const state = params.get('state');

    if (!token) {
      console.log('token 없음');
      alert('잘못된 접근입니다. 다시 시도해주세요');
      navigate({ to: '/' });
    } else {
      const decoded = jwtDecode(token);

      if (!validateNonce(decoded)) {
        alert('토큰이 유효하지 않습니다. 다시 로그인 해주세요');
        navigate({ to: '/', replace: true });
      }

      switch (state) {
        case 'login':
          handleLogin({ token, authPlatform: 'GOOGLE' });
          break;
        case 'update':
          {
            const phone = sessionStorage.getItem('phone');
            if (!phone) {
              alert('잘못된 접근입니다. 다시 시도해주세요');
              navigate({ to: '/social-account-linking/auth', replace: true });
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
              alert('잘못된 접근입니다. 다시 시도해주세요');
              navigate({ to: '/sign-up/auth', replace: true });
            } else {
              handleSignUp({ token, authPlatform: 'GOOGLE', name, phone });
            }
          }
          break;
        default:
          alert('잘못된 접근입니다. 다시 시도해주세요');
          navigate({ to: '/', replace: true });
      }
    }
  }, []);

  // NOTE: 서버 테스트용 임시 버튼 주석처리
  // return <Button onClick={() => navigate({ to: '/' })}>홈으로 돌아가기</Button>;

  return null;
}

export default Index;
