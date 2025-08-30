import { useNavigate } from '@tanstack/react-router';
import { postSignUp, PostSignUpRequest } from '../api/postSignUp';

export const useSignUp = () => {
  const navigate = useNavigate();

  const handleSignUp = async ({ name, phone, token, authPlatform }: PostSignUpRequest) => {
    try {
      const response = await postSignUp({ name, phone, token, authPlatform });
      sessionStorage.removeItem('name');
      sessionStorage.removeItem('phone');
      alert(response.message);
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
    navigate({ to: '/', replace: true });
  };

  return { handleSignUp };
};
