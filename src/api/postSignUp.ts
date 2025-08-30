import { client } from './client';
import { API_ENDPOINT } from './constants/apiUrl';

export interface PostSignUpRequest {
  name: string;
  phone: string;
  token: string;
  authPlatform: 'GOOGLE' | 'APPLE';
}

export interface PostSignUpResponse {
  success: boolean;
  message: string;
  data: null;
}

export const postSignUp = async ({ name, phone, token, authPlatform }: PostSignUpRequest) => {
  const response = await client(API_ENDPOINT.SIGN_UP, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, phone, token, authPlatform }),
    credentials: 'include',
  });

  const responseData = (await response.json()) as PostSignUpResponse;

  if (!response.ok) {
    throw new Error(responseData.message);
  }

  return responseData;
};
