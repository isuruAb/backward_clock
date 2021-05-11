import { useCallback, useEffect, useState } from "react";
import {
  SECONDS_PER_DAY,
  SECONDS_PER_HOUR,
  SECONDS_PER_MIN,
} from "../constants";

const useClock = (decrementBySeconds: number, currentTime: Date) => {
  const [seconds, setSeconds] = useState(currentTime.getSeconds());
  const [minutes, setMinutes] = useState(currentTime.getMinutes());
  const [hours, setHours] = useState(currentTime.getHours());

  //   Reset the ticker
  const handleReset = () => {
    setSeconds(currentTime.getSeconds());
    setMinutes(currentTime.getMinutes());
    setHours(currentTime.getHours());
  };

  const getSeconds = (newTotal: number) => {
    return newTotal % SECONDS_PER_MIN;
  };

  const getMinutes = (newTotal: number) => {
    return Math.floor((newTotal % SECONDS_PER_HOUR) / SECONDS_PER_MIN);
  };

  const getHours = (newTotal: number) => {
    return Math.floor((newTotal % SECONDS_PER_DAY) / SECONDS_PER_HOUR);
  };

  const clockTick = useCallback(() => {
    const totalSeconds =
      hours * SECONDS_PER_HOUR + minutes * SECONDS_PER_MIN + seconds;

    let newTotal = totalSeconds - decrementBySeconds;

    if (newTotal < 0) {
      newTotal = SECONDS_PER_DAY + newTotal;
    }
    setSeconds(getSeconds(newTotal));
    setMinutes(getMinutes(newTotal));
    setHours(getHours(newTotal));
  }, [hours, minutes, seconds, decrementBySeconds]);

  useEffect(() => {
    const timer = setTimeout(() => {
      clockTick();
    }, 1000);
    return () => clearTimeout(timer);
  }, [clockTick]);

  return { handleReset, clockTick, seconds, minutes, hours };
};

export default useClock;
