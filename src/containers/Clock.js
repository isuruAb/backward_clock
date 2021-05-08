import { Container } from "react-bootstrap";
import Button from "../components/Button";

import Time from "../components/Time";

const Clock = () => {
  return (
    <>
      <Container>
        <Time />
        <div className="d-flex justify-content-center">
          <Button text={"Reset"}/>
        </div>
      </Container>
    </>
  );
};

export default Clock;
