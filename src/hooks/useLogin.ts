import { postLogin, PostLoginRequest } from '@/src/api/postLogin';
import { useNavigate } from '@tanstack/react-router';

export const useLogin = () => {
  const navigate = useNavigate();
  const { VITE_SUCCESS_CALLBACK } = import.meta.env;

  const handleLogin = async ({ token, authPlatform }: PostLoginRequest) => {
    try {
      const response = await postLogin({ token, authPlatform });
      localStorage.setItem('serviceAccessToken', response.data.accessToken);
      // NOTE: 기존 pg-lastRegister를 sopt-lastRegister로 변경
      localStorage.setItem('sopt-lastRegister', authPlatform === 'GOOGLE' ? 'google' : 'apple');

      // NOTE: 서버 테스트용 복사 프롬프트 주석처리
      // prompt('서버테스트용 액세스 토큰 추출 (Ctrl+C로 복사하세요):', response.data.accessToken);

      window.location.href = VITE_SUCCESS_CALLBACK;
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
        navigate({ to: '/', replace: true });
      }
    }
  };

  return { handleLogin };
};
