import { generateNonce } from './nonce';

const { VITE_APPLE_REDIRECT_URI } = import.meta.env;

window.AppleID.auth.init({
  clientId: 'com.auth-frontend.sopt',
  scope: 'name email',
  redirectURI: VITE_APPLE_REDIRECT_URI,
  nonce: generateNonce(30),
  usePopup: true,
});
