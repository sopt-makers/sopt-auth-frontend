'use client';

import useAppleAuth from "./hooks/useAppleAuth";
import useGoogleAuth from "./hooks/useGoogleAuth";



const page = () => {
const googleLoginAuth = useGoogleAuth();
const appleLoginAuth = useAppleAuth();

  return (
    <>
    <button onClick={googleLoginAuth.login}>구글로 로그인하기</button>
    <button onClick={appleLoginAuth.login}>애플로 로그인하기</button>
    </>
  )
}

export default page;

