import { useEffect, useState, useCallback } from "react";
import { Container } from "react-bootstrap";
import Button from "../components/Button";
import Time from "../components/Time";

const Clock = () => {
  const currentTime = new Date();
  const [backwardTime, setBackwardTime] = useState(currentTime);

  const handleReset = () => {
    setBackwardTime(currentTime);
  };

  const clockTick = useCallback(() => {
    let timeInMilliseconds = backwardTime.getTime() - 1000;
    let newDate = new Date(timeInMilliseconds);
    setBackwardTime(newDate);
  }, [backwardTime]);

  useEffect(() => {
    const timer = setTimeout(() => {
      clockTick();
    }, 1000);
    return () => clearTimeout(timer);
  }, [clockTick]);

  return (
    <>
      <Container>
        <Time
          hours={backwardTime.getHours()}
          mins={backwardTime.getMinutes()}
          seconds={backwardTime.getSeconds()}
        />
        <div className="d-flex justify-content-center">
          <Button text={"Reset"} onClick={handleReset} />
        </div>
      </Container>
    </>
  );
};

export default Clock;
