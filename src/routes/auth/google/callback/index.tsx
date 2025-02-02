import { useEffect } from "react";
import { useLogin } from "@/src/hooks/useLogin";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { jwtDecode } from "jwt-decode";
import { validateNonce } from "@/src/utils/nonce";

interface GoogleCallbackSearch {
  token: string;
}

export const Route = createFileRoute("/auth/google/callback/")({
  validateSearch: (search: Record<string, unknown>): GoogleCallbackSearch => {
    return {
      token: search.token as string,
    };
  },
  component: Index,
});

function Index() {
  const navigate = useNavigate();
  const { handleLogin } = useLogin();

  useEffect(() => {
    const hash = window.location.hash.substring(1);
    const params = new URLSearchParams(hash);
    const token = params.get("id_token");

    if (!token) {
      alert("잘못된 접근입니다. 다시 시도해주세요");
      navigate({ to: "/" });
    } else {
      const decoded = jwtDecode(token);

      if (!validateNonce(decoded)) {
        alert("토큰이 유효하지 않습니다. 다시 로그인 해주세요");
        navigate({ to: "/" });
      }

      handleLogin({ token, authPlatform: "GOOGLE" });
    }
  }, [navigate, handleLogin]);

  return <></>;
}

export default Index;
