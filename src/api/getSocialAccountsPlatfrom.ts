import { client } from './client';
import { API_ENDPOINT } from './constants/apiUrl';

interface PostSocialAccountsPlatformRequest {
  phone: string;
}

interface PostSocialAccountsPlatformResponse {
  success: boolean;
  message: string;
  data: string;
}

export const postSocialAccountsPlatform = async ({ phone }: PostSocialAccountsPlatformRequest) => {
  const response = await client(API_ENDPOINT.POST_SOCIAL_ACCOUNTS_PLATFORM, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ phone }),
    credentials: 'include',
  });

  const responseData = (await response.json()) as PostSocialAccountsPlatformResponse;

  if (!response.ok) {
    throw new Error(responseData.message);
  }

  return responseData;
};
