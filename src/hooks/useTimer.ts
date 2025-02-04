import { useEffect, useRef, useState } from "react";

export const useTimer = (
  isActive: boolean,
  onResetTimer: () => void,
  initialSeconds: number = 180
) => {
  const [timeLeft, setTimeLeft] = useState(initialSeconds);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const clearTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const resetTime = () => {
    setTimeLeft(initialSeconds);
  };

  useEffect(() => {
    if (isActive) {
      if (timerRef.current) {
        setTimeLeft(initialSeconds);
      }

      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            onResetTimer();
            clearTimer();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      clearTimer();
    }

    return () => {
      clearTimer();
    };
  }, [isActive, onResetTimer, initialSeconds]);

  return { timeLeft, resetTime };
};
