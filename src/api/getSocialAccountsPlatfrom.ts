import { client } from './client';
import { API_ENDPOINT } from './constants/apiUrl';

interface GetSocialAccountsPlatformRequest {
  name: string;
  phone: string;
}

interface GetSocialAccountsPlatformResponse {
  success: boolean;
  message: string;
  data: {
    platform: string;
  };
}

export const getSocialAccountsPlatform = async ({ name, phone }: GetSocialAccountsPlatformRequest) => {
  const params = new URLSearchParams();
  params.append('name', name);
  params.append('phone', phone);

  const response = await client(`${API_ENDPOINT.GET_SOCIAL_ACCOUNTS_PLATFORM}?${params.toString()}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  });

  const responseData = (await response.json()) as GetSocialAccountsPlatformResponse;

  if (!response.ok) {
    throw new Error(responseData.message);
  }

  return responseData;
};
