import { useEffect, useState } from "react";
import { css } from "@/styled-system/css";

function LastLoggedInBanner() {
  const [lastLoggedInAccount, setLastLoggedInAccount] = useState<
    "apple" | "google" | null
  >("google"); // 마지막으로 로그인한 계정

  useEffect(() => {
    const lastLoggedInAccount = localStorage.getItem("sopt-lastRegister");
    if (lastLoggedInAccount === "google" || lastLoggedInAccount === "apple") {
      setLastLoggedInAccount(lastLoggedInAccount);
    }
  }, []);

  return (
    <div className={css({ ...lastLoggedInBannerStyles })}>
      {lastLoggedInAccount && (
        <img
          src={`/${lastLoggedInAccount}_tooltip.svg`}
          alt={`${lastLoggedInAccount} 툴팁 로고`}
        />
      )}
    </div>
  );
}

export default LastLoggedInBanner;

const lastLoggedInBannerStyles = css.raw({
  height: "5.1rem",
});
