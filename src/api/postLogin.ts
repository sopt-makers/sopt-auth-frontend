import { client } from "./client";
import { API_URL } from "./constants/apiUrl";

export interface PostLoginRequest {
  authPlatform: "GOOGLE" | "APPLE";
  token: string;
}

interface PostLoginResponse {
  success: boolean;
  message: string;
  data: {
    accessToken: string;
  };
}

export const postLogin = async ({
  authPlatform,
  token,
}: PostLoginRequest): Promise<PostLoginResponse> => {
  const response = await client(API_URL.LOGIN, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      authPlatform,
      token,
    }),
  });

  const responseData = (await response.json()) as PostLoginResponse;

  if (!response.ok) {
    throw new Error(responseData.message);
  }

  return responseData;
};
