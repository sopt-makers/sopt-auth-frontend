export function isValidPhone(phone: string): boolean {
  const re = /^010-?\d{4}-?\d{4}$/;
  return re.test(phone);
}
