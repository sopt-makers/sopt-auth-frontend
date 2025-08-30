interface PostVerifyPhoneRequest {
  phone: string;
  code: string;
  type?: 'REGISTER' | 'CHANGE_SOCIAL_PLATFORM' | 'SEARCH_SOCIAL_PLATFORM';
}

interface PostVerifyPhoneResponse {
  success: boolean;
  message: string;
  data: {
    name: string;
    phone: string;
  };
}

export const postVerifyPhone = async ({ phone, code, type = 'REGISTER' }: PostVerifyPhoneRequest) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/api/v1/auth/verify/phone`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: 'Mock-Success-Register',
      phone,
      code,
      type,
    }),
  });

  const responseData: PostVerifyPhoneResponse = await response.json();

  if (!response.ok) {
    throw new Error(responseData.message);
  }

  return responseData;
};
