import { useNavigate } from '@tanstack/react-router';
import { generateNonce } from '../utils/nonce';
import { useLogin } from './useLogin';
import { useSignUp } from './useSignUp';
import { useUpdateSocialAccount } from './useUpdateSocialAccount';

type AuthState =
  | {
      type: 'login';
    }
  | {
      type: 'signup';
    }
  | {
      type: 'update';
    };

type SignUpRequest = {
  name: string;
  phone: string;
  token: string;
  authPlatform: 'APPLE';
};

export const useAuthWithApple = () => {
  const { handleLogin: login } = useLogin();
  const { handleSignUp: signUp } = useSignUp();
  const { handleUpdateSocialAccount: update } = useUpdateSocialAccount();
  const navigate = useNavigate();

  const signInWithApple = async (state: AuthState) => {
    const nonce = generateNonce(30);
    sessionStorage.setItem('nonce', nonce);

    try {
      const response = await window.AppleID.auth.signIn({
        clientId: import.meta.env.VITE_APPLE_APP_ID,
        redirectURI: import.meta.env.VITE_APPLE_REDIRECT_URI,
        state: state.type,
      });
      if (!response.authorization || !response.authorization.id_token) {
        throw new Error('Apple 로그인 실패');
      }
      return response.authorization.id_token;
    } catch (e) {
      console.log(e);
    }
  };

  const handleSignIn = async () => {
    const token = await signInWithApple({
      type: 'login',
    });

    if (token) {
      await login({
        token,
        authPlatform: 'APPLE',
      });
    }
  };

  const handleUpdate = async () => {
    const token = await signInWithApple({
      type: 'update',
    });

    if (token) {
      const phone = sessionStorage.getItem('phone');
      if (!phone) {
        alert('잘못된 접근입니다. 다시 시도해주세요');
        navigate({ to: '/social-account-linking/auth', replace: true });
        return;
      }
      await update({
        token,
        authPlatform: 'APPLE',
        phone,
      });
    }
  };

  const handleSignUp = async (req: Pick<SignUpRequest, 'name' | 'phone'>) => {
    const token = await signInWithApple({ type: 'signup' });

    if (token) {
      await signUp({
        ...req,
        token,
        authPlatform: 'APPLE',
      });
    }
  };

  return { handleSignIn, handleSignUp, handleUpdate };
};
