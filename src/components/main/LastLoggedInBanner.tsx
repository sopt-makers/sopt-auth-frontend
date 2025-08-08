import { useEffect, useState } from 'react';
import { css } from '@/styled-system/css';
import appleTooltip from '@/src/assets/apple_tooltip.svg';
import googleTooltip from '@/src/assets/google_tooltip.svg';

function LastLoggedInBanner() {
  const [lastLoggedInAccount, setLastLoggedInAccount] = useState<'apple' | 'google' | null>('google'); // 마지막으로 로그인한 계정

  const tooltipMap = {
    apple: appleTooltip,
    google: googleTooltip,
  };

  useEffect(() => {
    const lastLoggedInAccount = localStorage.getItem('sopt-lastRegister');
    if (lastLoggedInAccount === 'google' || lastLoggedInAccount === 'apple') {
      setLastLoggedInAccount(lastLoggedInAccount);
    }
  }, []);

  return (
    <div className={css({ ...lastLoggedInBannerStyles })}>
      {lastLoggedInAccount && <img src={tooltipMap[lastLoggedInAccount]} alt={`${lastLoggedInAccount} 툴팁 로고`} />}
    </div>
  );
}

export default LastLoggedInBanner;

const lastLoggedInBannerStyles = css.raw({
  height: '5.1rem',
});
