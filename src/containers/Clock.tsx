import { useState } from "react";
import { Container } from "react-bootstrap";
import Button from "../components/Button";
import TextField from "../components/TextField";
import Time from "../components/Time";
import { pad } from "../utils/numbers";
import useForm from "../utils/hooks/useForm";
import validations from "../validations/clockValidation";
import useClock from "../utils/hooks/useClock";

const Clock = () => {
  const currentTime = new Date();
  const [decrementBySeconds, setDecrementBySeconds] = useState(1);

  const { handleReset, seconds, minutes, hours } = useClock(decrementBySeconds, currentTime);

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
          hours={pad(hours, 2)}
          mins={pad(minutes, 2)}
          seconds={pad(seconds, 2)}
        />
        <div className="d-flex justify-content-center mb-4">
          <TextField
            value={values?.decrementBySeconds}
            placeholder="Number of seconds"
            name="decrementBySeconds"
            onChange={handleChanges}
            error={errors?.decrementBySeconds}
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
