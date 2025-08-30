import { generateNonce } from './nonce';

const { VITE_APPLE_REDIRECT_URI, VITE_APPLE_APP_ID } = import.meta.env;

window.AppleID.auth.init({
  clientId: VITE_APPLE_APP_ID,
  scope: 'name email',
  redirectURI: VITE_APPLE_REDIRECT_URI,
  nonce: generateNonce(30),
  usePopup: true,
});
