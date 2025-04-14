import { client } from './client';
import { API_ENDPOINT } from './constants/apiUrl';

export interface PostUpdateSocialAccountRequest {
  phone: string;
  token: string;
  authPlatform: 'GOOGLE' | 'APPLE';
}

export interface PostUpdateSocialAccountResponse {
  success: boolean;
  message: string;
  data: null;
}

export const postUpdateSocialAccount = async ({ phone, token, authPlatform }: PostUpdateSocialAccountRequest) => {
  const response = await client(API_ENDPOINT.UPDATE_SOCIAL_ACCOUNT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ phone, authPlatform, token }),
  });

  const responseData = (await response.json()) as PostUpdateSocialAccountResponse;

  if (!response.ok) {
    throw new Error(responseData.message);
  }

  return responseData;
};
