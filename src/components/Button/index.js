import { Button } from "react-bootstrap";

const ActionButton = ({ text, type, onClick }) => {
  return (
    <Button type={type} onClick={onClick}>
      {text}
    </Button>
  );
};

export default ActionButton;
