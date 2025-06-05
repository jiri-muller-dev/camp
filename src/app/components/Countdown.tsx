"use client";
import React from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Countdown: React.FC<{
  targetDate: Date;
}> = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();
    let timeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = React.useState<TimeLeft>(calculateTimeLeft());

  React.useEffect(() => {
    const timerId = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timerId); // Cleanup on unmount
  }, [targetDate]);

  return (
    <div>
      <p className="text-center font-mono text-4xl px-4 py-1 bg-black text-white w-fit mx-auto mb-4 rounded-lg">
        {timeLeft.days} : {timeLeft.hours.toString().padStart(2, "0")} :{" "}
        {timeLeft.minutes.toString().padStart(2, "0")} :{" "}
        {timeLeft.seconds.toString().padStart(2, "0")}
      </p>
    </div>
  );
};

export default Countdown;
