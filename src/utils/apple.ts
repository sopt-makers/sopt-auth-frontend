import { generateNonce } from './nonce';

window.AppleID.auth.init({
  clientId: 'com.auth-frontend.sopt',
  scope: 'name email',
  redirectURI: 'https://sopt-auth-frontend.pages.dev/auth/apple/callback',
  nonce: generateNonce(30),
  usePopup: true,
});
