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
      <TanStackRouterDevtools />
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
});
