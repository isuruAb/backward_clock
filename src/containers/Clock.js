import { useEffect, useState, useCallback, useRef } from "react";
import { Container } from "react-bootstrap";
import Button from "../components/Button";
import TextField from "../components/TextField";
import Time from "../components/Time";
import useForm from "../utils/useForm";
import validations from "../validations/clockValidation";

const Clock = () => {
  const currentTime = new Date();
  const [backwardTime, setBackwardTime] = useState(currentTime);
  const [decrementBySeconds, setDecrementBySeconds] = useState(1);
  const secondsRef = useRef();

  const handleReset = () => {
    setBackwardTime(currentTime);
  };

  const clockTick = useCallback(() => {
    let timeInMilliseconds = backwardTime.getTime() - decrementBySeconds * 1000;
    let newDate = new Date(timeInMilliseconds);
    setBackwardTime(newDate);
  }, [backwardTime, decrementBySeconds]);

  useEffect(() => {
    const timer = setTimeout(() => {
      clockTick();
    }, 1000);
    return () => clearTimeout(timer);
  }, [clockTick]);

  const changeDecrementSeconds = () => {
    setDecrementBySeconds(values.decrementBySeconds);
  };

  const { values, handleChanges, errors, submitForm } = useForm(
    { decrementBySeconds },
    changeDecrementSeconds,
    validations
  );

  return (
    <>
      <Container>
        <Time
          hours={backwardTime.getHours()}
          mins={backwardTime.getMinutes()}
          seconds={backwardTime.getSeconds()}
        />
        <div className="d-flex justify-content-center mb-4">
          <TextField
            value={values.decrementBySeconds}
            refs={secondsRef}
            placeholder="Number of seconds"
            name="decrementBySeconds"
            onChange={handleChanges}
            error={errors.decrementBySeconds}
          />
        </div>
        <div className="d-flex justify-content-center">
          <Button text={"Submit"} onClick={submitForm} />
          <Button text={"Reset"} onClick={handleReset} />
        </div>
      </Container>
    </>
  );
};

export default Clock;
