interface PostAuthPhoneRequest {
  phone: string;
  type?: 'REGISTER' | 'CHANGE_SOCIAL_PLATFORM' | 'SEARCH_SOCIAL_PLATFORM';
}

interface PostAuthPhoneResponse {
  success: boolean;
  message: string;
  data: unknown;
}

export const postAuthPhone = async ({ phone, type = 'REGISTER' }: PostAuthPhoneRequest) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/api/v1/auth/phone`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name: null, phone, type }),
  });

  const responseData: PostAuthPhoneResponse = await response.json();

  if (!response.ok) {
    throw new Error(responseData.message);
  }

  return responseData;
};
