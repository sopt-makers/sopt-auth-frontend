// NOTE: OIDC + id_token 사용을 위한 nonce 난수 생성 함수
export const generateNonce = (length = 16): string => {
  const array = new Uint8Array(length);
  window.crypto.getRandomValues(array);
  return [...array].map((b) => b.toString(16).padStart(2, "0")).join("");
};

// NOTE: nonce 검증 함수
export function validateNonce(
  decodedIdToken: any,
  storageKey = "nonce"
): boolean {
  const storedNonce = sessionStorage.getItem(storageKey);
  if (!storedNonce || !decodedIdToken || decodedIdToken.nonce !== storedNonce) {
    return false;
  }
  return true;
}
