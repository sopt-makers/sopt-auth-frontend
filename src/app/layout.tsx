import type { Metadata } from "next";
import React from 'react';

export const metadata: Metadata = {
  title: "SOPT :: 로그인",
  description: "Shout Our Passion Together",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body >{children}</body>
    </html>
  );
}
