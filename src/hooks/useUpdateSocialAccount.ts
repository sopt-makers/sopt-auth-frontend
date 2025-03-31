import { useNavigate } from '@tanstack/react-router';
import { postUpdateSocialAccount, type PostUpdateSocialAccountRequest } from '../api/postUpadateSocialAccount';

export const useUpdateSocialAccount = () => {
  const navigate = useNavigate();

  const handleUpdateSocialAccount = async ({ phone, token, authPlatform }: PostUpdateSocialAccountRequest) => {
    try {
      const response = await postUpdateSocialAccount({ phone, token, authPlatform });
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

  return { handleUpdateSocialAccount };
};
