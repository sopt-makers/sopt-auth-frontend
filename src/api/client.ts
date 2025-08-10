export async function client(endpoint: string, options?: RequestInit): Promise<Response> {
  if (import.meta.env.VITE_API_URL === undefined) {
    throw new Error('환경변수에 API_URL을 등록해주세요.');
  } else {
    const url = new URL(endpoint, import.meta.env.VITE_API_URL).toString();
    const defaultOptions: RequestInit = {
      credentials: 'include',
      ...options,
    };
    return fetch(url, defaultOptions);
  }
}
