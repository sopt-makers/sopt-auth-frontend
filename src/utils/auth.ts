export const isAuthenticated = () => {
  const name = sessionStorage.getItem('name');
  const phone = sessionStorage.getItem('phone');

  if (name || phone) {
    return false;
  }

  return true;
};
