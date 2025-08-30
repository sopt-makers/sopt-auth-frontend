import { useNavigate } from '@tanstack/react-router';
import { patchUpdateSocialAccount, type PatchUpdateSocialAccountRequest } from '../api/postUpadateSocialAccount';

export const useUpdateSocialAccount = () => {
  const navigate = useNavigate();

  const handleUpdateSocialAccount = async ({ phone, token, authPlatform }: PatchUpdateSocialAccountRequest) => {
    try {
      const response = await patchUpdateSocialAccount({ phone, token, authPlatform });
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
