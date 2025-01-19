export const postAuthPhone = async (phone: string) => {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/api/v1/auth/phone`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: null, phone, type: "REGISTER" }),
    }
  );

  if (!response.ok) {
    throw new Error("인증번호 발송에 실패했습니다.");
  }

  return response.json();
};
