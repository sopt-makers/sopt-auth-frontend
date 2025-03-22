interface PostVerifyPhoneResponse {
  success: boolean;
  message: string;
  data: unknown;
}

export const postVerifyPhone = async (phone: string, code: string) => {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/api/v1/auth/verify/phone`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "Mock-Success-Register",
        phone,
        code,
        type: "REGISTER",
      }),
    }
  );

  const responseData: PostVerifyPhoneResponse = await response.json();

  if (!response.ok) {
    throw new Error(responseData.message);
  }

  return responseData;
};
