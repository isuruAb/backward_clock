import { useEffect, useState, useCallback, useRef } from "react";
import { Container, Form } from "react-bootstrap";
import Button from "../components/Button";
import TextField from "../components/TextField";
import Time from "../components/Time";

const Clock = () => {
  const currentTime = new Date();
  const [backwardTime, setBackwardTime] = useState(currentTime);
  const [decrementBySecs, setDecrementBySecs] = useState(1000);
  const secondsRef = useRef();

  const handleReset = () => {
    setBackwardTime(currentTime);
  };

  const clockTick = useCallback(() => {
    let timeInMilliseconds = backwardTime.getTime() - decrementBySecs;
    let newDate = new Date(timeInMilliseconds);
    setBackwardTime(newDate);
  }, [backwardTime]);

  useEffect(() => {
    const timer = setTimeout(() => {
      clockTick();
    }, 1000);
    return () => clearTimeout(timer);
  }, [clockTick]);

  const changeDecrementSeconds = () => {
    setDecrementBySecs(secondsRef?.current?.value * 1000);
  };

  return (
    <>
      <Container>
        <Time
          hours={backwardTime.getHours()}
          mins={backwardTime.getMinutes()}
          seconds={backwardTime.getSeconds()}
        />
        <div className="d-flex justify-content-center mb-4">
          <TextField refs={secondsRef} placeholder="Number of seconds" />
        </div>
        <div className="d-flex justify-content-center">
          <Button text={"Submit"} onClick={changeDecrementSeconds} />
          <Button text={"Reset"} onClick={handleReset} />
        </div>
      </Container>
    </>
  );
};

export default Clock;
