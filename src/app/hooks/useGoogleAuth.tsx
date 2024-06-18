import axios from 'axios';

const GOOGLE_LOGIN_CALLBACK_URI = `${process.env.NEXT_PUBLIC_ORIGIN}/auth/callback/google/login`;
const GOOGLE_REGISTER_CALLBACK_URI = `${process.env.NEXT_PUBLIC_ORIGIN}/auth/callback/google/register`;

interface GoogleAuth {
  login(): void;
  register(): void;
  //   sendLoginRequest(
  //     code: string,
  //     state: string,
  //   ): Promise<
  //     { success: true; accessToken: string } | { success: false; error: 'invalidNonce' | 'notMember' | 'unknown' }
  //   >;
  //   sendRegisterRequest(
  //     code: string,
  //     registerToken: string,
  //     state: string,
  //   ): Promise<{ success: true; accessToken: string } | { success: false }>;
  //   sendResetRequest(
  //     code: string,
  //     registerToken: string,
  //     state: string,
  //   ): Promise<{ success: true; accessToken: string } | { success: false }>;
  isAvailable: boolean;
}

const useGoogleAuth = (): GoogleAuth => {
  return {
    isAvailable: process.env.NEXT_PUBLIC_GOOGLE_OAUTH_CLIENT_ID !== '',
    login() {
      open(
        `https://accounts.google.com/o/oauth2/v2/auth?scope=openid&response_type=code&redirect_uri=${encodeURIComponent(
          GOOGLE_LOGIN_CALLBACK_URI,
        )}&client_id=${process.env.NEXT_PUBLIC_GOOGLE_OAUTH_CLIENT_ID}`,
        '_parent',
      );
    },
    register() {
      open(
        `https://accounts.google.com/o/oauth2/v2/auth?scope=openid&response_type=code&redirect_uri=${encodeURIComponent(
          GOOGLE_REGISTER_CALLBACK_URI,
        )}&client_id=${process.env.NEXT_PUBLIC_GOOGLE_OAUTH_CLIENT_ID}`,
        '_parent',
      );
    },
  };
};

export default useGoogleAuth;
