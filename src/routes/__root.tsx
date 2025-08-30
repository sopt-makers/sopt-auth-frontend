import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { css } from '@/styled-system/css';
import './index.css';
import '@sopt-makers/ui/dist/index.css';
import '@/src/utils/apple';
import { ToastProvider } from '@sopt-makers/ui';

export const Route = createRootRoute({
  component: () => (
    <>
      <ToastProvider>
        <div
          className={css({
            ...rootLayoutStyle,
          })}>
          <Outlet />
        </div>
      </ToastProvider>
      {import.meta.env.DEV && <TanStackRouterDevtools />}
    </>
  ),
});

const rootLayoutStyle = css.raw({
  backgroundColor: 'background',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',

  '@media (max-width: 480px)': {
    height: '100dvh',
  },
});
