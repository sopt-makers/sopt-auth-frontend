import { css } from "@/styled-system/css";

export default function Home() {
  return (
    <main>
      <div
        className={css({
          fontSize: "2xl",
          fontWeight: "bold",
          color: "GrayText",
        })}
      >
        Hello World!
      </div>
    </main>
  );
}
