import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { css } from "@/styled-system/css";
import "./index.css";
import "@sopt-makers/ui/dist/index.css";

export const Route = createRootRoute({
  component: () => (
    <>
      <div
        className={css({
          ...rootLayoutStyle,
        })}
      >
        <Outlet />
      </div>
      <TanStackRouterDevtools />
    </>
  ),
});

const rootLayoutStyle = css.raw({
  backgroundColor: "background",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
});
