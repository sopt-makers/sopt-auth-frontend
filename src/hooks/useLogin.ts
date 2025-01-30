import { postLogin, PostLoginRequest } from "@/src/api/postLogin";
import { useNavigate } from "@tanstack/react-router";

export const useLogin = () => {
  const navigate = useNavigate();

  const handleLogin = async ({ token, authPlatform }: PostLoginRequest) => {
    try {
      const response = await postLogin({ token, authPlatform });
      localStorage.setItem("serviceAccessToken", response.data.accessToken);
      // NOTE: 기존 pg-lastRegister를 sopt-lastRegister로 변경
      localStorage.setItem(
        "sopt-lastRegister",
        authPlatform === "GOOGLE" ? "google" : "apple"
      );
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
    navigate({ to: "/" });
  };

  return { handleLogin };
};
