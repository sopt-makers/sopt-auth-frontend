import axios from 'axios';

const APPLE_LOGIN_CALLBACK_URI = `${process.env.NEXT_PUBLIC_ORIGIN}/auth/callback/apple/login`;
const APPLE_REGISTER_CALLBACK_URI = `${process.env.NEXT_PUBLIC_ORIGIN}/auth/callback/apple/register`;

interface AppleAuth {
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

const useAppleAuth = (): AppleAuth => {
//   const stateParam = useStateParam();

  return {
    isAvailable: process.env.NEXT_PUBLIC_APPLE_OAUTH_APP_ID !== '',
    login() {
      open(
        `https://appleid.apple.com/auth/authorize?client_id=${process.env.NEXT_PUBLIC_APPLE_OAUTH_APP_ID}&redirect_uri=${APPLE_LOGIN_CALLBACK_URI}&response_type=code&scope=&response_mode=query`,
        '_parent',
      );
    },
    register() {
      open(
        `https://appleid.apple.com/auth/authorize?client_id=${process.env.NEXT_PUBLIC_APPLE_OAUTH_APP_ID}&redirect_uri=${APPLE_REGISTER_CALLBACK_URI}&response_type=code&scope=&response_mode=query`,
        '_parent',
      );
    },
    // async sendLoginRequest(code, state) {
    //   if (state !== stateParam) {
    //     return { success: false, error: 'invalidNonce' };
    //   }

    //   try {
    //     const { accessToken } = await postAppleAuth({ code });
    //     return {
    //       success: true,
    //       accessToken,
    //     };
    //   } catch (err) {
    //     if (axios.isAxiosError(err)) {
    //       if (err.response?.status === 403) {
    //         return {
    //           success: false,
    //           error: 'notMember',
    //         };
    //       }
    //     }
    //     return {
    //       success: false,
    //       error: 'unknown',
    //     };
    //   }
    // },
    // async sendRegisterRequest(code, registerToken, state) {
    //   if (state !== stateParam) {
    //     return { success: false };
    //   }

    //   try {
    //     const { accessToken } = await postAppleRegistration({
    //       code,
    //       registerToken,
    //     });

    //     return {
    //       success: true,
    //       accessToken,
    //     };
    //   } catch {
    //     return {
    //       success: false,
    //     };
    //   }
    // },
    // async sendResetRequest(code, registerToken, state) {
    //   if (state !== stateParam) {
    //     return { success: false };
    //   }

    //   try {
    //     const { accessToken } = await appleChangeEndpoint.request({
    //       code,
    //       registerToken,
    //     });

    //     return {
    //       success: true,
    //       accessToken,
    //     };
    //   } catch {
    //     return {
    //       success: false,
    //     };
    //   }
    // },
  };
};

export default useAppleAuth;
