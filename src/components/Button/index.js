import { Button } from "react-bootstrap";

const ActionButton = ({ text, onClick }) => {
  return <Button onClick={onClick}>{text}</Button>;
};

export default ActionButton;
