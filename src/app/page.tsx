'use client';

import useGoogleAuth from "./hooks/useGoogleAuth";



const page = () => {
const googleLoginAuth = useGoogleAuth();

  return (
    <button onClick={googleLoginAuth.login}>구글로 로그인하기</button>
  )
}

export default page;

