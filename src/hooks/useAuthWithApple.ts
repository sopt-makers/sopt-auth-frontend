import { useNavigate } from '@tanstack/react-router';
import { generateNonce } from '../utils/nonce';
import { useLogin } from './useLogin';
import { useSignUp } from './useSignUp';

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
  const navigate = useNavigate();

  const signInWithApple = async (state: AuthState) => {
    const nonce = generateNonce(30);
    sessionStorage.setItem('nonce', nonce);

    try {
      const response = await window.AppleID.auth.signIn({
        clientId: 'com.auth-frontend.sopt',
        redirectURI: 'https://sopt-auth-frontend.pages.dev/auth/apple/callback',
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
    await signInWithApple({
      type: 'login',
    }).then(async (res) => {
      if (res) {
        await login({
          token: res,
          authPlatform: 'APPLE',
        });
      }
    });
  };

  const handleSignUp = async (req: Pick<SignUpRequest, 'name' | 'phone'>) => {
    await signInWithApple({ type: 'signup' }).then(async (res) => {
      if (res) {
        await signUp({
          ...req,
          token: res,
          authPlatform: 'APPLE',
        });

        navigate({ to: '/', replace: true });
      }
    });
  };

  return { handleSignIn, handleSignUp };
};
