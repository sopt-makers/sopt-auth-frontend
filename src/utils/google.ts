import { generateNonce } from "./nonce";

interface GoogleAuthUrlProps {
  state: "login" | "update" | "signup";
}

  export const getGoogleAuthUrl = ({state}: GoogleAuthUrlProps): string => {
  const { VITE_GOOGLE_CLIENT_ID, VITE_GOOGLE_REDIRECT_URI } = import.meta.env;

  if (!VITE_GOOGLE_CLIENT_ID || !VITE_GOOGLE_REDIRECT_URI) {
    throw new Error("환경 변수에 Google OAuth 정보를 추가해주세요.");
  }

  const nonce = generateNonce();
  sessionStorage.setItem("nonce", nonce);

  const baseUrl = "https://accounts.google.com/o/oauth2/v2/auth";

  const params = new URLSearchParams({
    client_id: VITE_GOOGLE_CLIENT_ID,
    redirect_uri: VITE_GOOGLE_REDIRECT_URI,
    response_type: "id_token",
    scope: "openid email profile",
    nonce,
    state: state,
  });

  return `${baseUrl}?${params.toString()}`;
};
