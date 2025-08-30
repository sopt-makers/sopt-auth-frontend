import { client } from './client';
import { API_ENDPOINT } from './constants/apiUrl';

export interface PatchUpdateSocialAccountRequest {
  phone: string;
  token: string;
  authPlatform: 'GOOGLE' | 'APPLE';
}

export interface PatchUpdateSocialAccountResponse {
  success: boolean;
  message: string;
  data: null;
}

export const patchUpdateSocialAccount = async ({ phone, token, authPlatform }: PatchUpdateSocialAccountRequest) => {
  const response = await client(API_ENDPOINT.UPDATE_SOCIAL_ACCOUNT, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ phone, authPlatform, token }),
  });

  const responseData = (await response.json()) as PatchUpdateSocialAccountResponse;

  if (!response.ok) {
    throw new Error(responseData.message);
  }

  return responseData;
};
