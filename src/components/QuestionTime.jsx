import { useEffect, useState } from "react";

export default function QuestionTime({ onTimeOut, timeOut, mode }) {
  const [remainingTime, setRemainingTime] = useState(timeOut);

  useEffect(() => {
    // Reset remaining time when timeOut changes
    setRemainingTime(timeOut);

    // Clear any existing timers
    let timer = null;
    let interval = null;

    if (onTimeOut) {
      timer = setTimeout(onTimeOut, timeOut);
    }

    interval = setInterval(() => {
      setRemainingTime((preTime) => {
        const newTime = preTime - 100;
        if (newTime <= 0) {
          clearInterval(interval);
          return 0;
        }
        return newTime;
      });
    }, 100);

    // Cleanup function to clear both timers
    return () => {
      if (timer) clearTimeout(timer);
      if (interval) clearInterval(interval);
    };
  }, [onTimeOut, timeOut]);

  const progressPercentage = (remainingTime / timeOut) * 100;
  const isAnswered =
    mode === ""
      ? "bg-blue-500"
      : mode === "answered"
      ? "bg-yellow-500"
      : mode === "correct"
      ? "bg-green-500"
      : "bg-red-500";

  return (
    <div className="progress w-5/6 flex mx-auto my-4">
      <div className="w-full justify-center mx-auto h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className={`h-full transition-all duration-100 ease-linear ${isAnswered}`}
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
    </div>
  );
}
